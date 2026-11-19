import { test, expect } from "@playwright/test";

test.describe("Dual-Wi-Fi & SQLite Contention Forensic Explainer — Full Component Audit", () => {
  test("1. Header, Backend Detection Badge & Navigation Bar render cleanly", async ({ page }) => {
    await page.goto("./");
    await expect(
      page.getByRole("heading", { name: /Dual-Wi-Fi & SQLite Contention Forensic Explainer/i })
    ).toBeVisible();
    await expect(
      page.getByText(/Static Mode \(No Docker Backend Detected\)|Backend Detected/i)
    ).toBeVisible();
    await expect(page.getByRole("navigation", { name: /Section jump links/i })).toBeVisible();
  });

  test("2. TopologyScene3D mounts canvas with valid bounds and no uncaught page errors", async ({
    page,
  }) => {
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(String(err)));

    await page.goto("./");
    await expect(
      page.getByText(/3D Topology: Dual-Wi-Fi Plane, 60s Timers & SQLite WAL Target/i)
    ).toBeVisible();

    const canvas = page.locator("canvas").first();
    await expect(canvas).toBeVisible();
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();
    expect(box.width).toBeGreaterThan(200);
    expect(box.height).toBeGreaterThan(150);

    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    );
    expect(pageErrors).toEqual([]);
  });

  test("3. Subsystem Filter, Search Input & Contention Rate Slider update UI", async ({ page }) => {
    await page.goto("./");

    await page.getByRole("button", { name: /^wireless$/i }).click();
    await expect(page.getByText(/Broadcom BCM4331 Packet Loss Despite Higher RSSI/i)).toBeVisible();
    await expect(
      page.getByText(/Synchronized 60s Oneshot Timers Share Target Database/i)
    ).toHaveCount(0);

    await page.getByRole("button", { name: /^sqlite$/i }).click();
    await expect(page.getByText(/IPv6 Socket Parsing Corruption via Naive ':' Split/i)).toBeVisible();

    await page.getByRole("button", { name: /^systemd$/i }).click();
    await expect(
      page.getByText(/Synchronized 60s Oneshot Timers Share Target Database/i)
    ).toBeVisible();

    await page.getByRole("button", { name: /^all$/i }).click();
    const searchInput = page.locator("#search-input");
    await searchInput.fill("fe80");
    await expect(page.getByText(/IPv6 Socket Parsing Corruption via Naive ':' Split/i)).toBeVisible();
    await searchInput.fill("");

    const slider = page.locator("#contention-slider");
    await slider.evaluate((el) => {
      const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
      desc.set.call(el, "0.95");
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await expect(page.getByText(/3D Write-Contention Simulation Rate \(95%\)/i)).toBeVisible();
  });

  test("4. AdapterComparisonTable displays both 2.4 GHz adapters and packet loss metrics", async ({
    page,
  }) => {
    await page.goto("./");
    const table = page.locator("table").first();
    await expect(table).toBeVisible();
    await expect(table).toContainText("wlp2s0b1");
    await expect(table).toContainText("192.168.4.45");
    await expect(table).toContainText("-32 dBm");
    await expect(table).toContainText("16%");
    await expect(table).toContainText("wlp0s20u2");
    await expect(table).toContainText("192.168.4.54");
    await expect(table).toContainText("-49 dBm");
    await expect(table).toContainText("0%");
  });

  test("5. FindingsList supports card selection and session note creation", async ({ page }) => {
    await page.goto("./");
    const noteInput = page.getByPlaceholder(
      /Add local session annotation|Persist operator annotation/i
    );
    await expect(noteInput).toBeVisible();
    await noteInput.fill("Playwright audit verified session note creation.");
    await page.getByRole("button", { name: /^Save Note$/i }).click();
    await expect(page.getByText(/Playwright audit verified session note creation\./i)).toBeVisible();

    await page.getByText(/Synchronized 60s Oneshot Timers Share Target Database/i).click();
    await expect(
      page.getByPlaceholder(/Add local session annotation|Persist operator annotation/i)
    ).toBeVisible();
  });

  test("6. ExampleCodeBlocks provide working Copy feedback and file Download", async ({ page }) => {
    await page.goto("./");
    await expect(page.getByText("batched_sqlite_writer.py")).toBeVisible();
    await expect(page.getByText("per-iface-wifi-probe.sh")).toBeVisible();

    const copyButtons = page.getByRole("button", { name: /^Copy$/i });
    const downloadButtons = page.getByRole("button", { name: /^Download$/i });
    expect(await copyButtons.count()).toBeGreaterThanOrEqual(2);
    expect(await downloadButtons.count()).toBeGreaterThanOrEqual(2);

    await copyButtons.first().click();
    await expect(page.getByRole("button", { name: /^Copied$/i }).first()).toBeVisible();

    const downloadPromise = page.waitForEvent("download");
    await downloadButtons.first().click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("batched_sqlite_writer.py");
  });

  test("7. Footer Citations renders verified HTTPS URLs and ISBNs", async ({ page }) => {
    await page.goto("./");
    await expect(page.getByText(/Verified References & Citations/i)).toBeVisible();
    await expect(page.getByText(/https:\/\/www\.sqlite\.org\/wal\.html/i)).toBeVisible();
    await expect(page.getByText(/ISBN 978-1449373320/i)).toBeVisible();
    await expect(page.getByText(/ISBN 978-0136681557/i)).toBeVisible();
  });
});
