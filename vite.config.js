import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base ("./") supports both https://<owner>.github.io/<repo>/ subpaths
// and local static or reverse-proxied servers.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
