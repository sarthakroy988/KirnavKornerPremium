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

    // 1. Desktop Hero
    await page.screenshot({ path: path.join(outDir, 'desktop-hero-age-inclusive.png') });
    console.log('Saved desktop-hero-age-inclusive.png');

    // 2. Desktop Categories & Age Groups
    await page.evaluate(() => {
      const el = document.querySelector('#categories');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'desktop-age-groups.png') });
    console.log('Saved desktop-age-groups.png');

    // 3. Desktop Curated Ladies & Gents Wear Section
    await page.evaluate(() => {
      const el = document.querySelector('#family-wear');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'desktop-ladies-gents-wear.png') });
    console.log('Saved desktop-ladies-gents-wear.png');

    await page.close();
  }

  // Mobile captures
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));

    // 1. Mobile Hero
    await page.screenshot({ path: path.join(outDir, 'mobile-hero-age-inclusive.png') });
    console.log('Saved mobile-hero-age-inclusive.png');

    // 2. Mobile Age Groups
    await page.evaluate(() => {
      const el = document.querySelector('#categories');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'mobile-age-groups.png') });
    console.log('Saved mobile-age-groups.png');

    // 3. Mobile Ladies & Gents Section
    await page.evaluate(() => {
      const el = document.querySelector('#family-wear');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'mobile-ladies-gents-wear.png') });
    console.log('Saved mobile-ladies-gents-wear.png');

    await page.close();
  }

  await browser.close();
  console.log('All screenshots captured successfully.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
