import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1600, 1920];
const output = path.resolve(process.env.QA_OUTPUT || path.join(process.cwd(), "qa"));
await fs.mkdir(output, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

const results = [];
try {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: width < 950 ? 812 : 900 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await page.locator(".page-canvas").waitFor();
    const result = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      missingImages: [...document.images].filter((image) => !image.complete || !image.naturalWidth).map((image) => image.src),
      sectionCount: document.querySelectorAll(".canvas-section").length,
      heroLayers: ["300:3992", "212:100", "212:152", "212:155"].map((id) => Boolean(document.querySelector(`[data-node-id="${id}"]`))),
      bodyHeight: document.body.scrollHeight,
    }));
    if (width === 1600) {
      await page.screenshot({ path: path.join(output, "desktop-1600.png"), fullPage: true });
      await page.screenshot({ path: path.join(output, "desktop-hero-1600.png") });
    }
    if (width === 768 || width === 1024) {
      await page.screenshot({ path: path.join(output, `viewport-${width}.png`) });
    }
    if (width === 375) {
      await page.screenshot({ path: path.join(output, "mobile-375.png"), fullPage: true });
      await page.screenshot({ path: path.join(output, "mobile-hero-375.png") });
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      const menuOpen = await page.getByRole("navigation", { name: "Mobile navigation" }).isVisible();
      await page.getByRole("button", { name: "Close navigation menu" }).waitFor();
      const initialFocus = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
      await page.screenshot({ path: path.join(output, "mobile-menu-375.png") });
      await page.keyboard.press("Escape");
      const menuClosed = await page.getByRole("navigation", { name: "Mobile navigation" }).count() === 0;
      const returnedFocus = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
      result.menu = { menuOpen, menuClosed, initialFocus, returnedFocus };
      await page.getByRole("button", { name: "Get started" }).first().click();
      result.ctaDialog = await page.getByRole("dialog").isVisible();
      await page.getByRole("button", { name: "Close" }).click();
    }
    results.push({ width, ...result, errors });
    await page.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(output, "results.json"), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
if (results.some((result) => result.scrollWidth > result.viewport || result.missingImages.length || result.errors.length || result.sectionCount !== 11)) process.exitCode = 1;
