import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('public/screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  // Desktop captures
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));

    // 1. Desktop Hero & Categories
    await page.screenshot({ path: path.join(outDir, 'desktop-hero-categories.png') });
    console.log('Saved desktop-hero-categories.png');

    // 2. Scroll to Flagship Showcase & Brands
    await page.evaluate(() => {
      const el = document.querySelector('#flagship');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'desktop-showcase-brands.png') });
    console.log('Saved desktop-showcase-brands.png');

    // 3. Scroll to Experience & Map
    await page.evaluate(() => {
      const el = document.querySelector('#store-visit');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'desktop-visit-map.png') });
    console.log('Saved desktop-visit-map.png');

    await page.close();
  }

  // Mobile captures
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));

    // 1. Mobile Hero
    await page.screenshot({ path: path.join(outDir, 'mobile-hero.png') });
    console.log('Saved mobile-hero.png');

    // 2. Scroll to Mobile Categories
    await page.evaluate(() => {
      const el = document.querySelector('#categories');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'mobile-categories.png') });
    console.log('Saved mobile-categories.png');

    // 3. Scroll to Mobile Showcase
    await page.evaluate(() => {
      const el = document.querySelector('#flagship');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'mobile-showcase.png') });
    console.log('Saved mobile-showcase.png');

    await page.close();
  }

  await browser.close();
  console.log('All screenshots captured successfully.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
