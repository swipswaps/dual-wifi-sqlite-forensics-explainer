DUAL-WIFI FAILOVER & SQLITE CONTENTION FORENSIC EXPLAINER
One-Shot Idempotent Heredoc Build + Dual-Plane Architecture

OVERVIEW
This repository explains dual-interface 2.4 GHz Wi-Fi behavior (Broadcom
BCM4331 on b43 vs. Realtek RTL8188ETV on rtl8xxxu) and multi-process SQLite
lock contention (SQLITE_BUSY / error code 5) observed on a Fedora 43 host.

FEATURES
- Interactive Three.js 3D topology view of wireless interfaces, 60-second
  systemd timers, and SQLite write contention.
- Subsystem filtering (all, wireless, sqlite, systemd) and keyword/FTS5 search.
- Empirical 100-packet adapter comparison table.
- Example user remediation code blocks (batched_sqlite_writer.py and
  per-iface-wifi-probe.sh) with Copy and Download buttons and verbose comments.
- Automatic detection of an optional local Docker Compose backend (Caddy +
  FastAPI + SQLite WAL/FTS5), with seamless static fallback on GitHub Pages.
- Verified HTTPS and ISBN citation references.

BUILD, PUBLISH & OPEN
Run ./build-and-deploy.sh to generate files, build dist/, push to GitHub,
configure GitHub Pages, poll for HTTP 200, and launch xdg-open.
See BUILD_METHOD.txt for details on the one-shot idempotent heredoc pattern.

VERIFIED REFERENCES & CITATIONS
- SQLite Write-Ahead Logging: https://www.sqlite.org/wal.html
- SQLite Locking and Concurrency: https://www.sqlite.org/lockingv3.html
- SQLite C Busy Handler API: https://www.sqlite.org/c3ref/busy_handler.html
- systemd.timer Documentation: https://www.freedesktop.org/software/systemd/man/systemd.timer.html
- Three.js Documentation: https://threejs.org/docs/
- Kleppmann, M. Designing Data-Intensive Applications. ISBN 978-1449373320.
- Kurose, J. F., and Ross, K. W. Computer Networking: A Top-Down Approach. ISBN 978-0136681557.
- Kerrisk, M. The Linux Programming Interface. ISBN 978-1593272203.
