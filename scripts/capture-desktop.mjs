import puppeteer from 'file:///D:/EXTRA/KirnavKorner/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import fs from 'fs';

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let executablePath = CHROME_PATHS.find(p => fs.existsSync(p));

async function capture() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'C:/Users/IITG/.gemini/antigravity/brain/e4855955-d333-41d1-8fc2-b9612f3453e9/desktop-optimized-texture.png'
  });

  await browser.close();
  console.log('Saved desktop-optimized-texture.png');
}

capture();
