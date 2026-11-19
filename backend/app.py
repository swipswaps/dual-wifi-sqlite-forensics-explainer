"""FastAPI backend providing SQLite WAL + FTS5 search and operator note persistence."""

from contextlib import asynccontextmanager
import os
import sqlite3
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

DB_PATH = Path(os.getenv("FORENSICS_DB_PATH", "/var/lib/forensics-explainer/forensics.db"))
SCHEMA_PATH = Path(__file__).with_name("schema.sql")

SEED_FINDINGS = [
    (
        "bcm4331-loss-vs-rssi",
        "wireless",
        "Broadcom BCM4331 Packet Loss Despite Higher RSSI",
        "confirmed",
        "100-packet probe on belkin2 (ch 11, 2462 MHz): wlp2s0b1 (-32 dBm, metric 100) had 16% gateway loss and 5% external loss; wlp0s20u2 (-49 dBm, metric 602) had 0% loss.",
        "RSSI measures received RF power rather than SINR or MAC/PHY retry success under co-channel contention or link asymmetry.",
    ),
    (
        "fix-wifi-wrong-adapter",
        "wireless",
        "fix-wifi.sh (v39.8) Validates Aggregate/Realtek State as BCM4331 Recovery",
        "defect",
        "Nov 18 journal shows b43/ssb unload and bcma/b43 reload, then selection of wlp0s20u2 (192.168.4.54) and WIFI_RECOVERY_SUCCESS while Broadcom was still connecting.",
        "First-matched ^wl* interface selection and aggregate connectivity checks decouple recovery verification from PCI device 14e4:4331.",
    ),
    (
        "wl-migration-rolled-back",
        "wireless",
        "Broadcom wl Driver Migration Rolled Back Three Times on Nov 10",
        "mitigated",
        "/var/lib/wifi-durable/state records phase=rolled-back at epoch 1794348484 (2026-11-10 22:08:04 UTC); modprobe/modules-load/dracut migration files absent; b43 active.",
        "Guard timeouts (240s, 600s, 600s) expired without stable Wi-Fi on wl, triggering automatic rollback and initramfs rebuild.",
    ),
    (
        "sqlite-per-row-lock-contention",
        "sqlite",
        "1,500 'database is locked (5)' Errors from Per-Row Writers & Masked Failures",
        "defect",
        "collect-network.sh spawns separate sqlite3 processes per row without busy_timeout; 1,500 lock errors occurred in 13 of 17 minutes while exiting 0.",
        "SQLite busy_timeout is per-connection; uncoordinated multi-process writes collide under SQLITE_BUSY while trailing echo masks failed statements.",
    ),
    (
        "ipv6-colon-split-truncation",
        "sqlite",
        "IPv6 Address Truncation via Naive ':' Split in collect-network.sh",
        "defect",
        "Captured SQL contains local_addr='[fe80:57217' and remote_addr=':'.",
        "Splitting bracketed IPv6 host:port strings on ':' rather than parsing bracketed IPv6 literals + final ':' delimiter corrupts endpoints.",
    ),
    (
        "db-integrity-pending-verification",
        "sqlite",
        "Database Integrity Unverified After Read-Only Mode Error",
        "unknown",
        "Prior sqlite3 -readonly checks returned 'attempt to write a readonly database (8)' on WAL-mode files.",
        "Read-only WAL coordination and backup snapshotting must precede PRAGMA quick_check / PRAGMA integrity_check.",
    ),
    (
        "synchronized-60s-timers",
        "systemd",
        "Synchronized 60-Second Oneshot Timers Share Root SQLite Target",
        "confirmed",
        "sys-inspector-network.timer and sys-inspector-processes.timer run every 60s (OnBootSec=15s, OnUnitActiveSec=60s) as root oneshot services.",
        "Concurrent periodic writers target the same SQLite database without serialization or single-writer batching.",
    ),
]


def open_db() -> sqlite3.Connection:
    """Create a connection with explicit WAL mode and busy_timeout."""
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH), timeout=5.0)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode = WAL;")
    conn.execute("PRAGMA synchronous = NORMAL;")
    conn.execute("PRAGMA busy_timeout = 5000;")
    conn.execute("PRAGMA foreign_keys = ON;")
    return conn


def init_db() -> None:
    """Apply DDL schema and seed initial findings idempotently."""
    schema_sql = SCHEMA_PATH.read_text(encoding="utf-8")
    conn = open_db()
    try:
        conn.executescript(schema_sql)
        with conn:
            for row in SEED_FINDINGS:
                conn.execute(
                    """
                    INSERT OR IGNORE INTO forensic_findings
                        (id, domain, title, severity, evidence, mechanism)
                    VALUES (?, ?, ?, ?, ?, ?)
                    """,
                    row,
                )
    finally:
        conn.close()


class NoteCreate(BaseModel):
    finding_id: str = Field(..., min_length=1, max_length=120)
    author: str = Field(default="forensic-auditor", min_length=1, max_length=80)
    note: str = Field(..., min_length=1, max_length=2000)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="Dual-Wi-Fi & SQLite Forensics API",
    version="1.2.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict:
    conn = open_db()
    try:
        mode = conn.execute("PRAGMA journal_mode;").fetchone()[0]
        timeout = conn.execute("PRAGMA busy_timeout;").fetchone()[0]
        count = conn.execute("SELECT COUNT(*) FROM forensic_findings;").fetchone()[0]
    finally:
        conn.close()
    return {
        "status": "ok",
        "engine": "sqlite-wal-fts5",
        "journal_mode": mode,
        "busy_timeout_ms": timeout,
        "findings_count": count,
    }


@app.get("/api/findings")
def list_findings(
    domain: Optional[str] = Query(default=None),
    q: Optional[str] = Query(default=None),
) -> dict:
    conn = open_db()
    try:
        if q and q.strip():
            rows = conn.execute(
                """
                SELECT f.id, f.domain, f.title, f.severity, f.evidence, f.mechanism, f.updated_at
                FROM findings_fts
                JOIN forensic_findings f ON f.id = findings_fts.finding_id
                WHERE findings_fts MATCH ?
                ORDER BY bm25(findings_fts)
                """,
                (q.strip(),),
            ).fetchall()
        elif domain and domain != "all":
            rows = conn.execute(
                """
                SELECT id, domain, title, severity, evidence, mechanism, updated_at
                FROM forensic_findings
                WHERE domain = ?
                ORDER BY id
                """,
                (domain,),
            ).fetchall()
        else:
            rows = conn.execute(
                """
                SELECT id, domain, title, severity, evidence, mechanism, updated_at
                FROM forensic_findings
                ORDER BY id
                """
            ).fetchall()

        notes = conn.execute(
            "SELECT id, finding_id, author, note, created_at FROM operator_notes ORDER BY id DESC"
        ).fetchall()
    finally:
        conn.close()

    return {
        "findings": [dict(r) for r in rows],
        "notes": [dict(n) for n in notes],
    }


@app.post("/api/notes", status_code=201)
def create_note(payload: NoteCreate) -> dict:
    conn = open_db()
    try:
        exists = conn.execute(
            "SELECT 1 FROM forensic_findings WHERE id = ?", (payload.finding_id,)
        ).fetchone()
        if not exists:
            raise HTTPException(status_code=404, detail="Finding not found")
        with conn:
            cur = conn.execute(
                """
                INSERT INTO operator_notes (finding_id, author, note)
                VALUES (?, ?, ?)
                """,
                (payload.finding_id, payload.author, payload.note),
            )
        created = conn.execute(
            "SELECT id, finding_id, author, note, created_at FROM operator_notes WHERE id = ?",
            (cur.lastrowid,),
        ).fetchone()
    finally:
        conn.close()
    return dict(created)
