import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('public/screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { name: 'mobile-375-full', width: 375, height: 812 },
  { name: 'mobile-390-full', width: 390, height: 844 },
  { name: 'tablet-768-full', width: 768, height: 1024 },
  { name: 'desktop-1440-full', width: 1440, height: 900 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // Scroll gradually down to trigger lazy loading on all images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0); // Scroll back to top
            resolve();
          }
        }, 80);
      });
    });

    // Hide sticky mobile bottom bar during full-page screenshot to prevent stitching artifact over hero
    await page.evaluate(() => {
      const bottomBar = document.querySelector('.md\\:hidden.fixed.bottom-0');
      if (bottomBar) {
        bottomBar.style.display = 'none';
      }
    });

    // Wait a brief moment for any remaining decoded images
    await new Promise(r => setTimeout(r, 600));

    await page.screenshot({
      path: path.join(outDir, `${vp.name}.png`),
      fullPage: true
    });
    console.log(`Captured ${vp.name}`);
  }

  await browser.close();
  console.log('Finished capturing all full-page screenshots with scroll!');
}

run().catch(console.error);
