import { useEffect, useState } from "react";

const CANDIDATE_URLS = [
  import.meta.env.VITE_FORENSICS_API_URL,
  "http://127.0.0.1:8088",
  "http://localhost:8088",
].filter(Boolean);

// Probes optional local Docker backend; falls back cleanly to static explainer mode.
export function useBackendDetection() {
  const [backendUrl, setBackendUrl] = useState(null);
  const [health, setHealth] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function probe() {
      setChecking(true);
      for (const base of CANDIDATE_URLS) {
        const normalized = base.replace(/\/+$/, "");
        try {
          const timer = setTimeout(() => controller.abort(), 1200);
          const res = await fetch(`${normalized}/api/health`, {
            signal: controller.signal,
          });
          clearTimeout(timer);
          if (res.ok) {
            const data = await res.json();
            if (active) {
              setBackendUrl(normalized);
              setHealth(data);
              setChecking(false);
            }
            return;
          }
        } catch {
          // Optional backend unavailable on this candidate URL.
        }
      }
      if (active) {
        setBackendUrl(null);
        setHealth(null);
        setChecking(false);
      }
    }

    probe();
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return {
    backendDetected: Boolean(backendUrl),
    backendUrl,
    health,
    checking,
  };
}
