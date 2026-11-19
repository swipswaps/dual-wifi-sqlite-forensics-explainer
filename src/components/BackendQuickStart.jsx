import React, { useEffect, useState } from "react";
import { BACKEND_QUICKSTART_STEPS } from "../data/auditFindings";

// Top-of-page component explaining how to enable the Docker backend (with SQLite
// WAL/FTS5 and host SSH management) in one or two commands, plus live SSH action
// controls when the backend is running.
export default function BackendQuickStart({ backendDetected, backendUrl, health }) {
  const [copiedId, setCopiedId] = useState(null);
  const [sshHost, setSshHost] = useState(health?.ssh_host || "host.docker.internal");
  const [sshUser, setSshUser] = useState(health?.ssh_user || "");
  const [sshAction, setSshAction] = useState("wifi_status");
  const [sshOutput, setSshOutput] = useState(null);
  const [runningSsh, setRunningSsh] = useState(false);

  useEffect(() => {
    if (health?.ssh_host) setSshHost(health.ssh_host);
    if (health?.ssh_user) setSshUser(health.ssh_user);
  }, [health]);

  async function copyCommand(step) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(step.command);
      }
    } catch {
      // Ignore clipboard permission restrictions in headless/sandboxed browsers.
    }
    setCopiedId(step.id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === step.id ? null : prev));
    }, 1800);
  }

  async function runHostSsh(e) {
    e.preventDefault();
    if (!backendDetected || !backendUrl) return;
    setRunningSsh(true);
    setSshOutput(null);
    try {
      const res = await fetch(`${backendUrl}/api/host/exec`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: sshAction,
          host: sshHost,
          user: sshUser,
        }),
      });
      const data = await res.json();
      setSshOutput({ httpStatus: res.status, ...data });
    } catch (err) {
      setSshOutput({ error: String(err) });
    } finally {
      setRunningSsh(false);
    }
  }

  return (
    <section
      id="enable-backend"
      className="rounded-xl border border-sky-900/70 bg-slate-900/80 p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
            Enable Local Docker Backend & Host SSH Control
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Run the command below on your workstation to start the FastAPI + SQLite (WAL/FTS5) +
            Caddy backend with SSH access to your host machine.
          </p>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-300">
          {backendDetected ? "Connected to :8088" : "Static Mode (Optional Backend)"}
        </span>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {BACKEND_QUICKSTART_STEPS.map((step) => (
          <div
            key={step.id}
            className="rounded-lg border border-slate-800 bg-slate-950/90 p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-white">{step.label}</span>
              <button
                type="button"
                onClick={() => copyCommand(step)}
                className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] text-slate-100 hover:bg-slate-700"
              >
                {copiedId === step.id ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="mt-2 overflow-x-auto rounded bg-slate-900 p-2 font-mono text-[11px] text-sky-200">
              <code>{step.command}</code>
            </pre>
            <p className="mt-1.5 text-[11px] text-slate-400">{step.detail}</p>
          </div>
        ))}
      </div>

      {backendDetected && (
        <form
          onSubmit={runHostSsh}
          className="mt-4 space-y-2 border-t border-slate-800 pt-3"
        >
          <div className="text-xs font-semibold text-slate-200">
            SSH Host Command Runner (Backend -&gt; Host Workstation)
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              value={sshUser}
              onChange={(e) => setSshUser(e.target.value)}
              placeholder="Host SSH username (e.g. fedora)"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white"
            />
            <input
              type="text"
              value={sshHost}
              onChange={(e) => setSshHost(e.target.value)}
              placeholder="Host IP or host.docker.internal"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white"
            />
            <select
              value={sshAction}
              onChange={(e) => setSshAction(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white"
            >
              <option value="wifi_status">wifi_status</option>
              <option value="journal_wifi">journal_wifi</option>
              <option value="sqlite_locks">sqlite_locks</option>
              <option value="disk_memory">disk_memory</option>
            </select>
            <button
              type="submit"
              disabled={runningSsh}
              className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500 disabled:opacity-50"
            >
              {runningSsh ? "Running SSH..." : "Run over SSH"}
            </button>
          </div>
          {sshOutput && (
            <pre className="max-h-56 overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200">
              <code>{JSON.stringify(sshOutput, null, 2)}</code>
            </pre>
          )}
        </form>
      )}
    </section>
  );
}
