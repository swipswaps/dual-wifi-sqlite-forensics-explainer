DUAL-WIFI FAILOVER & SQLITE CONTENTION FORENSIC EXPLAINER
One-Shot Idempotent Heredoc Build + Dual-Plane + Host SSH Architecture

OVERVIEW
This repository explains dual-interface 2.4 GHz Wi-Fi behavior (Broadcom
BCM4331 on b43 vs. Realtek RTL8188ETV on rtl8xxxu) and multi-process SQLite
lock contention (SQLITE_BUSY / error code 5) observed on a Fedora host.

FEATURES
- Top-of-page Backend Quick-Start showing how to enable the Docker backend
  in one command (`docker compose up -d --build`) and configure SSH host access.
- Interactive Three.js 3D topology view of wireless interfaces, 60-second
  systemd timers, and SQLite WAL write contention.
- Subsystem filtering (all, wireless, sqlite, systemd), search input, and
  continuous write-contention rate slider.
- Empirical 100-packet adapter comparison table.
- Collapsible (+ / -) example user remediation code blocks
  (batched_sqlite_writer.py and per-iface-wifi-probe.sh) with Copy and
  Download actions and verbose comments.
- Optional local Docker Compose backend with SQLite WAL/FTS5 and SSH command
  execution (`/api/host/exec`) to manage the user host over SSH.
- Verified HTTPS and ISBN citation references.

VERIFIED REFERENCES & CITATIONS
- SQLite Write-Ahead Logging: https://www.sqlite.org/wal.html
- SQLite Locking and Concurrency: https://www.sqlite.org/lockingv3.html
- SQLite C Busy Handler Reference: https://www.sqlite.org/c3ref/busy_handler.html
- systemd.timer Documentation: https://www.freedesktop.org/software/systemd/man/systemd.timer.html
- Three.js Documentation: https://threejs.org/docs/
- Kleppmann, M. Designing Data-Intensive Applications. ISBN 978-1449373320.
- Kurose, J. F., and Ross, K. W. Computer Networking: A Top-Down Approach. ISBN 978-0136681557.
- Kerrisk, M. The Linux Programming Interface. ISBN 978-1593272203.

EXHAUSTIVE PLAYWRIGHT COMPONENT AUDIT REPORT
Specs Executed: 7 | Passed: 7 | Failed: 0
Components Verified:
- Header, BackendQuickStart & Jump Nav: Verifies title, top-of-page Docker + SSH enable commands, and section links.
- TopologyScene3D (Three.js Canvas): Verifies WebGL canvas bounding box, plane labels, and zero uncaught page errors.
- Subsystem Filter, Search Input & Contention Slider: Verifies all/wireless/sqlite/systemd filtering, search matching, and contention slider readout.
- AdapterComparisonTable: Verifies wlp2s0b1 (192.168.4.45, -32 dBm, 16% GW loss) and wlp0s20u2 (192.168.4.54, -49 dBm, 0% GW loss) rows.
- FindingsList & Operator Notes: Verifies card selection and session note creation.
- ExampleCodeBlocks (+ / - Collapse, Copy & Download): Verifies collapsible code blocks, Copy feedback, and file downloads.
- Citations Footer: Verifies SQLite WAL URL and ISBN references (978-1449373320, 978-0136681557).
Playwright Spec Results:
[PASS] 1. Header, Backend Quick-Start & Navigation Bar render cleanly
[PASS] 2. TopologyScene3D mounts canvas with valid bounds and no uncaught page errors
[PASS] 3. Subsystem Filter, Search Input & Contention Rate Slider update UI
[PASS] 4. AdapterComparisonTable displays both 2.4 GHz adapters and packet loss metrics
[PASS] 5. FindingsList supports card selection and session note creation
[PASS] 6. ExampleCodeBlocks support + / - collapse toggles, Copy feedback, and file Download
[PASS] 7. Footer Citations renders verified HTTPS URLs and ISBNs
