import React, { useEffect, useMemo, useState } from "react";
import TopologyScene3D from "./components/TopologyScene3D";
import {
  AdapterComparisonTable,
  ExampleCodeBlocks,
  FindingsList,
} from "./components/ForensicPanels";
import { CITATIONS, INITIAL_FINDINGS } from "./data/auditFindings";
import { useBackendDetection } from "./hooks/useBackendDetection";

export default function App() {
  const { backendDetected, backendUrl, health, checking } = useBackendDetection();

  const [domainFilter, setDomainFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [contentionRate, setContentionRate] = useState(0.75);
  const [selectedFindingId, setSelectedFindingId] = useState(INITIAL_FINDINGS[0].id);
  const [findings, setFindings] = useState(INITIAL_FINDINGS);
  const [notes, setNotes] = useState([]);
  const [noteDraft, setNoteDraft] = useState("");

  useEffect(() => {
    let active = true;
    async function loadFromBackend() {
      if (!backendDetected || !backendUrl) return;
      try {
        const params = new URLSearchParams();
        if (domainFilter !== "all") params.set("domain", domainFilter);
        if (searchQuery.trim()) params.set("q", searchQuery.trim());
        const res = await fetch(`${backendUrl}/api/findings?${params.toString()}`);
        if (!res.ok) return;
        const data = await res.json();
        if (active && Array.isArray(data.findings)) {
          setFindings(data.findings);
          setNotes(Array.isArray(data.notes) ? data.notes : []);
        }
      } catch {
        // Retain local findings if optional backend request fails.
      }
    }
    loadFromBackend();
    return () => {
      active = false;
    };
  }, [backendDetected, backendUrl, domainFilter, searchQuery]);

  const visibleFindings = useMemo(() => {
    if (backendDetected) return findings;
    const q = searchQuery.trim().toLowerCase();
    return INITIAL_FINDINGS.filter((item) => {
      const domainMatch = domainFilter === "all" || item.domain === domainFilter;
      const queryMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.evidence.toLowerCase().includes(q) ||
        item.mechanism.toLowerCase().includes(q);
      return domainMatch && queryMatch;
    });
  }, [backendDetected, findings, domainFilter, searchQuery]);

  async function handleAddNote(findingId) {
    const trimmed = noteDraft.trim();
    if (!trimmed) return;

    if (backendDetected && backendUrl) {
      try {
        const res = await fetch(`${backendUrl}/api/notes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            finding_id: findingId,
            author: "auditor",
            note: trimmed,
          }),
        });
        if (res.ok) {
          const created = await res.json();
          setNotes((prev) => [created, ...prev]);
          setNoteDraft("");
          return;
        }
      } catch {
        // Fallback to session-local note if POST fails.
      }
    }

    setNotes((prev) => [
      {
        id: Date.now(),
        finding_id: findingId,
        author: "local-session",
        note: trimmed,
      },
      ...prev,
    ]);
    setNoteDraft("");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Dual-Wi-Fi & SQLite Contention Forensic Explainer
            </h1>
            <p className="text-xs text-slate-400">
              Fedora 43 Audit • BCM4331 (b43) vs. RTL8188ETV (rtl8xxxu) • SQLite WAL / Lock Contention
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                backendDetected
                  ? "bg-emerald-400"
                  : checking
                  ? "bg-amber-400"
                  : "bg-slate-500"
              }`}
            />
            <span className="font-mono text-slate-200">
              {checking
                ? "Probing Docker backend..."
                : backendDetected
                ? `Backend Detected (${health?.engine || "SQLite WAL/FTS5"})`
                : "Static Mode (No Docker Backend Detected)"}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        <TopologyScene3D activeFocus={domainFilter} contentionRate={contentionRate} />

        <section className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-slate-300">Subsystem Filter</label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["all", "wireless", "sqlite", "systemd"].map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setDomainFilter(dom)}
                  className={`rounded-lg px-3 py-1 text-xs font-medium capitalize ${
                    domainFilter === dom
                      ? "bg-sky-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="search-input" className="block text-xs font-medium text-slate-300">
              Search Findings {backendDetected ? "(SQLite FTS5)" : "(Client Filter)"}
            </label>
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lock, b43, ipv6, timer..."
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="contention-slider" className="block text-xs font-medium text-slate-300">
              3D Write-Contention Simulation Rate ({Math.round(contentionRate * 100)}%)
            </label>
            <input
              id="contention-slider"
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={contentionRate}
              onChange={(e) => setContentionRate(parseFloat(e.target.value))}
              className="mt-3 w-full accent-sky-500"
            />
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Empirical Wireless Adapter Comparison (100-Packet Sample)
          </h2>
          <AdapterComparisonTable />
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Audited Findings & Root-Cause Mechanisms
          </h2>
          <FindingsList
            findings={visibleFindings}
            selectedFindingId={selectedFindingId}
            onSelectFinding={setSelectedFindingId}
            notes={notes}
            backendDetected={backendDetected}
            onAddNote={handleAddNote}
            noteDraft={noteDraft}
            setNoteDraft={setNoteDraft}
          />
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Example User Code (Copy & Download)
          </h2>
          <ExampleCodeBlocks />
        </section>

        <footer className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-400">
          <div className="font-semibold text-slate-200">Verified References & Citations</div>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {CITATIONS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 underline hover:text-sky-300"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </div>
  );
}
