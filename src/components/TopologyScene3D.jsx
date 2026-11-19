import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// 3D topology scene showing:
// - Wireless plane (Broadcom BCM4331 vs Realtek RTL8188ETV)
// - Center plane (60s systemd timer collectors)
// - Right plane (SQLite WAL/DB target)
export default function TopologyScene3D({ activeFocus = "all", contentionRate = 0.75 }) {
  const mountRef = useRef(null);
  const focusRef = useRef(activeFocus);
  const rateRef = useRef(contentionRate);

  useEffect(() => {
    focusRef.current = activeFocus;
  }, [activeFocus]);

  useEffect(() => {
    rateRef.current = contentionRate;
  }, [contentionRate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 720;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.4, 9.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x94a3b8, 1.1);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const grid = new THREE.GridHelper(12, 12, 0x1e293b, 0x0f172a);
    grid.position.y = -1.5;
    scene.add(grid);

    const makeNode = (color, pos, size = [1.5, 0.7, 1.1]) => {
      const geo = new THREE.BoxGeometry(...size);
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      scene.add(mesh);
      return mesh;
    };

    const broadcomNode = makeNode(0xf59e0b, [-3.8, 0.7, 0]);
    const realtekNode = makeNode(0x10b981, [-3.8, -0.8, 0]);
    const netTimerNode = makeNode(0x38bdf8, [0, 0.8, 0]);
    const procTimerNode = makeNode(0x818cf8, [0, -0.8, 0]);
    const sqliteNode = makeNode(0xf43f5e, [3.8, 0, 0], [1.7, 1.4, 1.3]);

    const pulseGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xfde047 });
    const pulses = [0, 1, 2].map((idx) => {
      const m = new THREE.Mesh(pulseGeo, pulseMat);
      m.position.set(0, (idx - 1) * 0.6, 0.8);
      scene.add(m);
      return m;
    });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 720;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const focus = focusRef.current;
      const speed = 0.6 + rateRef.current * 1.8;

      broadcomNode.rotation.y = Math.sin(t * 0.8) * 0.15;
      realtekNode.rotation.y = Math.cos(t * 0.8) * 0.15;
      sqliteNode.rotation.y = t * 0.35;

      broadcomNode.scale.setScalar(focus === "wireless" || focus === "all" ? 1.08 : 0.94);
      realtekNode.scale.setScalar(focus === "wireless" || focus === "all" ? 1.08 : 0.94);
      netTimerNode.scale.setScalar(focus === "systemd" || focus === "all" ? 1.08 : 0.94);
      procTimerNode.scale.setScalar(focus === "systemd" || focus === "all" ? 1.08 : 0.94);
      sqliteNode.scale.setScalar(focus === "sqlite" || focus === "all" ? 1.08 : 0.94);

      pulses.forEach((p, idx) => {
        const progress = (t * speed + idx * 0.33) % 1;
        p.position.x = -2.8 + progress * 5.6;
        p.position.y = Math.sin(progress * Math.PI * 2 + idx) * 0.75;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
        <span className="font-semibold uppercase tracking-wider text-sky-400">
          3D Topology: Dual-Wi-Fi Plane, 60s Timers & SQLite WAL Target
        </span>
        <div className="flex flex-wrap gap-3 text-[11px]">
          <span className="text-amber-400">■ BCM4331 (b43)</span>
          <span className="text-emerald-400">■ RTL8188ETV (rtl8xxxu)</span>
          <span className="text-sky-400">■ 60s Timers</span>
          <span className="text-rose-400">■ SQLite Store</span>
        </div>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
        <div className="rounded bg-slate-950/70 py-1">Plane 1: Dual 2.4 GHz Stations</div>
        <div className="rounded bg-slate-950/70 py-1">Plane 2: 60s Oneshot Timers</div>
        <div className="rounded bg-slate-950/70 py-1">Plane 3: SQLite WAL Store</div>
      </div>
      <div ref={mountRef} className="h-[320px] w-full overflow-hidden rounded-lg" />
    </div>
  );
}
