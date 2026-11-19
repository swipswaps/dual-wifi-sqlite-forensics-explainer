import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30000,
  reporter: [
    ["list"],
    ["json", { outputFile: "/tmp/playwright-component-report.json" }],
  ],
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1440, height: 900 },
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run preview -- --host 127.0.0.1 --port 4173",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: true,
        timeout: 20000,
      },
});
