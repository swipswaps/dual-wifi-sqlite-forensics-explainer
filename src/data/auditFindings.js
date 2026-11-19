// Empirical 100-packet probe comparison on SSID belkin2 (2462 MHz, channel 11).
export const ADAPTER_TELEMETRY = [
  {
    id: "broadcom",
    label: "Broadcom BCM4331 (PCI 14e4:4331)",
    iface: "wlp2s0b1",
    driver: "b43",
    ip: "192.168.4.45",
    metric: 100,
    signalDbm: -32,
    gatewayLossPct: 16,
    externalLossPct: 5,
    gatewayRttMs: 22.126,
    externalRttMs: 31.58,
    role: "Higher RSSI / Higher Observed Loss in Sample",
  },
  {
    id: "realtek",
    label: "Realtek RTL8188ETV (USB 0bda:0179)",
    iface: "wlp0s20u2",
    driver: "rtl8xxxu",
    ip: "192.168.4.54",
    metric: 602,
    signalDbm: -49,
    gatewayLossPct: 0,
    externalLossPct: 0,
    gatewayRttMs: 19.865,
    externalRttMs: 32.948,
    role: "Lower RSSI / 0% Sample Loss (Preserve Path)",
  },
];

// Audited findings across wireless, SQLite lock contention, and systemd timers.
export const INITIAL_FINDINGS = [
  {
    id: "bcm4331-loss-vs-rssi",
    domain: "wireless",
    title: "Broadcom BCM4331 Packet Loss Despite Higher RSSI",
    severity: "confirmed",
    evidence:
      "100-packet test on belkin2 (2462 MHz, ch 11): wlp2s0b1 (-32 dBm, metric 100) recorded 84/100 gateway replies (16% loss) and 95/100 external replies (5% loss); wlp0s20u2 (-49 dBm, metric 602) recorded 100/100 (0% loss).",
    mechanism:
      "Signal strength (-32 dBm) does not guarantee clean frame delivery under co-channel interference or link asymmetry; per-interface probes are required.",
  },
  {
    id: "fix-wifi-wrong-adapter",
    domain: "wireless",
    title: "fix-wifi.sh (v39.8) Validates Realtek/Aggregate State as Broadcom Recovery",
    severity: "defect",
    evidence:
      "Nov 18 journal shows b43/ssb unload and bcma/b43 reload, then selection of wlp0s20u2 (192.168.4.54) and WIFI_RECOVERY_SUCCESS while Broadcom was still connecting.",
    mechanism:
      "Matches first ^wl* interface and aggregate connectivity rather than binding recovery checks strictly to PCI 14e4:4331.",
  },
  {
    id: "wl-migration-rolled-back",
    domain: "wireless",
    title: "Broadcom wl Driver Migration Rolled Back Three Times on Nov 10",
    severity: "mitigated",
    evidence:
      "/var/lib/wifi-durable/state shows phase=rolled-back (rolled_back_at=1794348484, 2026-11-10 22:08:04 UTC); modprobe/modules-load/dracut migration files are absent; b43 remains active.",
    mechanism:
      "Guard timeouts (240s, 600s, 600s) expired without stable Wi-Fi on wl, triggering automatic rollback and initramfs rebuild.",
  },
  {
    id: "sqlite-per-row-lock-contention",
    domain: "sqlite",
    title: "1,500 'database is locked (5)' Errors & Masked Collector Failures",
    severity: "defect",
    evidence:
      "collect-network.sh spawns per-row sqlite3 processes without busy_timeout; 1,500 lock errors occurred across 13 of 17 minutes while still echoing completion and exiting 0.",
    mechanism:
      "SQLite busy_timeout applies per connection rather than globally; separate sqlite3 invocations collide on SQLITE_BUSY without error propagation.",
  },
  {
    id: "ipv6-colon-split-truncation",
    domain: "sqlite",
    title: "IPv6 Socket Parsing Corruption via Naive ':' Split",
    severity: "defect",
    evidence:
      "Captured SQL statement inserted local_addr='[fe80:57217' and remote_addr=':'.",
    mechanism:
      "Splitting bracketed IPv6 host:port strings on ':' breaks when splitting inside IPv6 address segments.",
  },
  {
    id: "db-integrity-pending-verification",
    domain: "sqlite",
    title: "SQLite Integrity Still Unknown After Read-Only Open Failure",
    severity: "unknown",
    evidence:
      "Prior read-only SQLite checks returned 'attempt to write a readonly database (8)' against WAL-mode files.",
    mechanism:
      "Safe backup and WAL-aware read-only verification must precede PRAGMA quick_check / PRAGMA integrity_check.",
  },
  {
    id: "synchronized-60s-timers",
    domain: "systemd",
    title: "Synchronized 60s Oneshot Timers Share Target Database",
    severity: "confirmed",
    evidence:
      "sys-inspector-network.timer and sys-inspector-processes.timer trigger every 60s (OnBootSec=15s, OnUnitActiveSec=60s) as root oneshot services.",
    mechanism:
      "Overlapping periodic writers hit /var/lib/sys-inspector/sys-inspector.db concurrently without serialized write queueing.",
  },
];

// Example user remediation code with verbose comments, Copy, and Download support.
export const EXAMPLE_USER_CODE = [
  {
    id: "batched-sqlite-writer-py",
    filename: "batched_sqlite_writer.py",
    language: "python",
    title: "Single-Transaction Batched SQLite Writer + Safe IPv6/IPv4 Endpoint Parser",
    summary:
      "Replaces per-row sqlite3 subprocesses with one connection, explicit PRAGMA journal_mode=WAL and PRAGMA busy_timeout=5000, bracket-aware host:port parsing, and subprocess.Popen when launching helper processes.",
    code: `#!/usr/bin/env python3
"""Batched SQLite writer with WAL + busy_timeout and bracket-safe endpoint parsing."""

import sqlite3
import subprocess
from pathlib import Path
from typing import Tuple


def parse_host_port(endpoint: str) -> Tuple[str, str]:
    """Parse 'host:port' or '[ipv6]:port' without splitting inside IPv6 literals."""
    value = endpoint.strip()
    if value.startswith("[") and "]:" in value:
        host_part, port_part = value.rsplit(":", 1)
        return host_part, port_part
    if ":" in value:
        host_part, port_part = value.rsplit(":", 1)
        return host_part, port_part
    return value, ""


def spawn_collector_helper(args: list[str]) -> int:
    """Start a helper process via subprocess.Popen and wait for its exit code."""
    proc = subprocess.Popen(args)
    return proc.wait()


def write_network_batch(db_path: Path, rows: list[tuple[str, str, str]]) -> int:
    """Persist rows in one transaction using a single WAL connection and busy_timeout."""
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path), timeout=5.0)
    try:
        conn.execute("PRAGMA journal_mode = WAL;")
        conn.execute("PRAGMA synchronous = NORMAL;")
        conn.execute("PRAGMA busy_timeout = 5000;")

        parsed_rows = []
        for raw_local, raw_remote, state in rows:
            local_host, _ = parse_host_port(raw_local)
            remote_host, _ = parse_host_port(raw_remote)
            parsed_rows.append((local_host, remote_host, state))

        with conn:
            conn.executemany(
                """
                INSERT INTO network_samples (local_addr, remote_addr, state)
                VALUES (?, ?, ?)
                """,
                parsed_rows,
            )
        return len(parsed_rows)
    finally:
        conn.close()


if __name__ == "__main__":
    sample = [
        ("192.168.4.54:52100", "1.1.1.1:443", "ESTABLISHED"),
        ("[fe80::1]:57217", "[fe80::2]:5353", "UNCONN"),
    ]
    inserted = write_network_batch(Path("/tmp/forensics-sample.db"), sample)
    print(f"Inserted {inserted} socket sample rows cleanly.")
`,
  },
  {
    id: "per-iface-wifi-probe-sh",
    filename: "per-iface-wifi-probe.sh",
    language: "bash",
    title: "Per-Interface Wi-Fi Loss Probe (Avoids RSSI-Only & Aggregate Misattribution)",
    summary:
      "Probes each wireless interface explicitly by source IP rather than relying on RSSI alone or treating another adapter's connectivity as proof of BCM4331 recovery.",
    code: `#!/usr/bin/env bash
# Per-interface packet loss & RTT probe for dual-station hosts (e.g. wlp2s0b1 vs wlp0s20u2).

TARGET_GATEWAY="\${1:-192.168.4.1}"
PACKET_COUNT="\${2:-20}"

probe_interface() {
  iface="\$1"
  src_ip="\$(ip -4 -o addr show dev "\$iface" | awk '{split(\$4, a, "/"); print a[1]; exit}')"

  if [ -z "\$src_ip" ]; then
    printf "iface=%-10s status=no-ipv4\\n" "\$iface"
    return 0
  fi

  ping_out="\$(ping -n -c "\$PACKET_COUNT" -W 1 -I "\$src_ip" "\$TARGET_GATEWAY")"
  loss_pct="\$(printf "%s\\n" "\$ping_out" | awk -F',' '/packet loss/ {gsub(/^[ \\t]+|% packet loss.*/, "", \$3); print \$3}')"
  avg_rtt="\$(printf "%s\\n" "\$ping_out" | awk -F'/' '/rtt min\\/avg\\/max/ {print \$5}')"

  printf "iface=%-10s src_ip=%-15s loss=%s%% avg_rtt_ms=%s\\n" \\
    "\$iface" "\$src_ip" "\${loss_pct:-unknown}" "\${avg_rtt:-n/a}"
}

for dev in \$(iw dev | awk '\$1 == "Interface" {print \$2}'); do
  probe_interface "\$dev"
done
`,
  },
];

export const CITATIONS = [
  {
    label: "SQLite WAL Mode Documentation (https://www.sqlite.org/wal.html)",
    url: "https://www.sqlite.org/wal.html",
  },
  {
    label: "SQLite Locking & Concurrency (https://www.sqlite.org/lockingv3.html)",
    url: "https://www.sqlite.org/lockingv3.html",
  },
  {
    label: "SQLite C Busy Handler Reference (https://www.sqlite.org/c3ref/busy_handler.html)",
    url: "https://www.sqlite.org/c3ref/busy_handler.html",
  },
  {
    label: "systemd.timer Documentation (https://www.freedesktop.org/software/systemd/man/systemd.timer.html)",
    url: "https://www.freedesktop.org/software/systemd/man/systemd.timer.html",
  },
  {
    label: "Three.js Documentation (https://threejs.org/docs/)",
    url: "https://threejs.org/docs/",
  },
  {
    label: "Kleppmann — Designing Data-Intensive Applications (ISBN 978-1449373320)",
    url: "https://www.sqlite.org/wal.html",
  },
  {
    label: "Kurose & Ross — Computer Networking: A Top-Down Approach (ISBN 978-0136681557)",
    url: "https://www.freedesktop.org/software/systemd/man/systemd.timer.html",
  },
  {
    label: "Kerrisk — The Linux Programming Interface (ISBN 978-1593272203)",
    url: "https://www.freedesktop.org/software/systemd/man/systemd.timer.html",
  },
];
