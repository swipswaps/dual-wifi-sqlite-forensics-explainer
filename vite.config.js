import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base ("./") works on GitHub Pages subpaths as well as local servers.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
