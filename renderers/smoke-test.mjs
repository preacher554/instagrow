import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import sharp from 'sharp';
import { createCanvas } from 'canvas';

const outDir = new URL('./.smoke-output/', import.meta.url);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
await page.setContent(`<!doctype html>
<html>
  <head>
    <style>
      body { margin: 0; width: 1080px; height: 1350px; font-family: Inter, Arial, sans-serif; background: #0b0f14; color: white; }
      .card { box-sizing: border-box; width: 100%; height: 100%; padding: 92px; display: flex; flex-direction: column; justify-content: space-between; }
      .eyebrow { color: #7cff8a; font-size: 44px; font-weight: 800; letter-spacing: .02em; }
      h1 { margin: 24px 0; font-size: 96px; line-height: .98; letter-spacing: -0.06em; max-width: 900px; }
      p { font-size: 40px; line-height: 1.18; color: #d8dee9; max-width: 820px; }
      .cta { font-size: 42px; font-weight: 900; color: #ffd84d; }
    </style>
  </head>
  <body>
    <main class="card">
      <section>
        <div class="eyebrow">InstaGrow Renderer Smoke Test</div>
        <h1>Local creative renderer is ready.</h1>
        <p>Playwright can render exact text layouts into Instagram-sized PNG assets.</p>
      </section>
      <div class="cta">1080 × 1350 PNG ✓</div>
    </main>
  </body>
</html>`);
const screenshotPath = new URL('./playwright-slide.png', outDir);
await page.screenshot({ path: screenshotPath.pathname, type: 'png' });
await browser.close();

const meta = await sharp(screenshotPath.pathname).metadata();
if (meta.width !== 1080 || meta.height !== 1350) {
  throw new Error(`Unexpected screenshot size: ${meta.width}x${meta.height}`);
}

const canvas = createCanvas(600, 315);
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#0b0f14';
ctx.fillRect(0, 0, 600, 315);
ctx.fillStyle = '#7cff8a';
ctx.font = 'bold 42px Arial';
ctx.fillText('Canvas OK', 48, 140);
ctx.fillStyle = '#ffffff';
ctx.font = '24px Arial';
ctx.fillText('node-canvas native module works', 48, 190);
const canvasPath = new URL('./canvas-card.png', outDir);
await sharp(canvas.toBuffer('image/png')).png().toFile(canvasPath.pathname);

const canvasMeta = await sharp(canvasPath.pathname).metadata();
if (canvasMeta.width !== 600 || canvasMeta.height !== 315) {
  throw new Error(`Unexpected canvas size: ${canvasMeta.width}x${canvasMeta.height}`);
}

console.log(JSON.stringify({
  ok: true,
  playwright_png: screenshotPath.pathname,
  playwright_size: `${meta.width}x${meta.height}`,
  canvas_png: canvasPath.pathname,
  canvas_size: `${canvasMeta.width}x${canvasMeta.height}`,
  sharp: true
}, null, 2));
