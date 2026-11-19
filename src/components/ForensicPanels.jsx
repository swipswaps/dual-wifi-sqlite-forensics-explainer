import React, { useState } from "react";
import { ADAPTER_TELEMETRY, EXAMPLE_USER_CODE } from "../data/auditFindings";

const SEVERITY_STYLES = {
  confirmed: "bg-sky-950 text-sky-300 border-sky-700",
  defect: "bg-rose-950 text-rose-300 border-rose-700",
  mitigated: "bg-emerald-950 text-emerald-300 border-emerald-700",
  unknown: "bg-amber-950 text-amber-300 border-amber-700",
};

export function AdapterComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70">
      <table className="min-w-full text-left text-xs">
        <thead className="border-b border-slate-800 bg-slate-900 text-slate-400">
          <tr>
            <th className="px-4 py-2.5">Adapter / Driver</th>
            <th className="px-4 py-2.5">Interface / IP</th>
            <th className="px-4 py-2.5">Metric</th>
            <th className="px-4 py-2.5">RSSI</th>
            <th className="px-4 py-2.5">GW Loss</th>
            <th className="px-4 py-2.5">1.1.1.1 Loss</th>
            <th className="px-4 py-2.5">Role Assessment</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80 text-slate-200">
          {ADAPTER_TELEMETRY.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2.5 font-medium">{row.label}</td>
              <td className="px-4 py-2.5 font-mono text-[11px]">
                {row.iface} ({row.ip})
              </td>
              <td className="px-4 py-2.5 font-mono">{row.metric}</td>
              <td className="px-4 py-2.5 font-mono">{row.signalDbm} dBm</td>
              <td className="px-4 py-2.5 font-mono">{row.gatewayLossPct}%</td>
              <td className="px-4 py-2.5 font-mono">{row.externalLossPct}%</td>
              <td className="px-4 py-2.5 text-slate-300">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FindingsList({
  findings,
  selectedFindingId,
  onSelectFinding,
  notes,
  backendDetected,
  onAddNote,
  noteDraft,
  setNoteDraft,
}) {
  return (
    <div className="space-y-3">
      {findings.map((item) => {
        const isSelected = item.id === selectedFindingId;
        const itemNotes = notes.filter((n) => n.finding_id === item.id);
        return (
          <article
            key={item.id}
            onClick={() => onSelectFinding(item.id)}
            className={`cursor-pointer rounded-xl border p-4 transition ${
              isSelected
                ? "border-sky-500 bg-slate-900"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                  SEVERITY_STYLES[item.severity] || SEVERITY_STYLES.confirmed
                }`}
              >
                {item.severity}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              <strong className="text-slate-100">Evidence:</strong> {item.evidence}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
              <strong className="text-slate-200">Mechanism:</strong> {item.mechanism}
            </p>

            {itemNotes.length > 0 && (
              <div className="mt-3 space-y-1.5 border-t border-slate-800 pt-2.5">
                {itemNotes.map((n, idx) => (
                  <div
                    key={n.id || idx}
                    className="rounded bg-slate-950/80 px-2.5 py-1.5 text-[11px] text-slate-300"
                  >
                    <span className="font-mono text-sky-400">{n.author}:</span> {n.note}
                  </div>
                ))}
              </div>
            )}

            {isSelected && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAddNote(item.id);
                }}
                onClick={(e) => e.stopPropagation()}
                className="mt-3 flex gap-2 border-t border-slate-800 pt-3"
              >
                <input
                  type="text"
                  value={noteDraft}
                  onChange={(e) => setNoteDraft(e.target.value)}
                  placeholder={
                    backendDetected
                      ? "Persist operator annotation to SQLite WAL/FTS5 backend..."
                      : "Add local session annotation (connect Docker backend to persist)..."
                  }
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500"
                >
                  Save Note
                </button>
              </form>
            )}
          </article>
        );
      })}
    </div>
  );
}

// Example user code panel with clipboard Copy and file Download actions.
export function ExampleCodeBlocks() {
  const [copiedId, setCopiedId] = useState(null);

  async function handleCopy(snippet) {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopiedId(snippet.id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === snippet.id ? null : prev));
      }, 1800);
    } catch {
      setCopiedId(null);
    }
  }

  function handleDownload(snippet) {
    const blob = new Blob([snippet.code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = snippet.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      {EXAMPLE_USER_CODE.map((snippet) => (
        <div
          key={snippet.id}
          className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
            <div>
              <div className="text-xs font-semibold text-white">{snippet.title}</div>
              <div className="font-mono text-[11px] text-slate-400">{snippet.filename}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleCopy(snippet)}
                className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-100 hover:bg-slate-700"
              >
                {copiedId === snippet.id ? "Copied" : "Copy"}
              </button>
              <button
                type="button"
                onClick={() => handleDownload(snippet)}
                className="rounded-md bg-sky-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-sky-500"
              >
                Download
              </button>
            </div>
          </div>
          <p className="border-b border-slate-800/70 bg-slate-950/50 px-4 py-2 text-xs text-slate-300">
            {snippet.summary}
          </p>
          <pre className="max-h-80 overflow-auto bg-slate-950 p-4 font-mono text-[11px] leading-relaxed text-slate-200">
            <code>{snippet.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}
