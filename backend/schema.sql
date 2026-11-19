-- Write-Ahead Logging allows readers without blocking writers and coordinates
-- concurrent access through WAL shared memory.
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
-- busy_timeout applies per connection in milliseconds.
PRAGMA busy_timeout = 5000;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS forensic_findings (
    id TEXT PRIMARY KEY,
    domain TEXT NOT NULL CHECK (domain IN ('wireless', 'sqlite', 'systemd')),
    title TEXT NOT NULL,
    severity TEXT NOT NULL CHECK (severity IN ('confirmed', 'defect', 'unknown', 'mitigated')),
    evidence TEXT NOT NULL,
    mechanism TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE TABLE IF NOT EXISTS operator_notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    finding_id TEXT NOT NULL REFERENCES forensic_findings(id) ON DELETE CASCADE,
    author TEXT NOT NULL DEFAULT 'forensic-auditor',
    note TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE VIRTUAL TABLE IF NOT EXISTS findings_fts USING fts5(
    finding_id UNINDEXED,
    domain,
    title,
    evidence,
    mechanism,
    content='forensic_findings',
    content_rowid='rowid'
);

CREATE TRIGGER IF NOT EXISTS findings_ai AFTER INSERT ON forensic_findings BEGIN
    INSERT INTO findings_fts(rowid, finding_id, domain, title, evidence, mechanism)
    VALUES (new.rowid, new.id, new.domain, new.title, new.evidence, new.mechanism);
END;

CREATE TRIGGER IF NOT EXISTS findings_au AFTER UPDATE ON forensic_findings BEGIN
    INSERT INTO findings_fts(findings_fts, rowid, finding_id, domain, title, evidence, mechanism)
    VALUES ('delete', old.rowid, old.id, old.domain, old.title, old.evidence, old.mechanism);
    INSERT INTO findings_fts(rowid, finding_id, domain, title, evidence, mechanism)
    VALUES (new.rowid, new.id, new.domain, new.title, new.evidence, new.mechanism);
END;
