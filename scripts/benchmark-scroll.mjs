import puppeteer from 'file:///D:/EXTRA/KirnavKorner/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import fs from 'fs';

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let executablePath = CHROME_PATHS.find(p => fs.existsSync(p));

async function benchmark() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Emulate Mobile iPhone 14 / Pixel (390 x 844, 3x device scale)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  });

  console.log('Navigating to http://localhost:3000 on mobile viewport...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Inspect computed styles on body::before and body
  const layerInfo = await page.evaluate(() => {
    const beforeStyle = window.getComputedStyle(document.body, '::before');
    const bodyStyle = window.getComputedStyle(document.body);
    return {
      zIndex: beforeStyle.zIndex,
      mixBlendMode: beforeStyle.mixBlendMode,
      transform: beforeStyle.transform,
      position: beforeStyle.position,
      backgroundAttachment: bodyStyle.backgroundAttachment,
      hasSvgTurbulence: bodyStyle.backgroundImage.includes('feTurbulence') || beforeStyle.backgroundImage.includes('feTurbulence')
    };
  });
  console.log('Mobile GPU Layer Inspection:', layerInfo);

  // 2. Perform rapid continuous touch-scroll benchmark measuring FPS / requestAnimationFrame
  console.log('Running scroll benchmark across 5,000px...');
  const scrollMetrics = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let frames = 0;
      let start = performance.now();
      let lastTime = start;
      let jankFrames = 0; // frames taking > 32ms (drop below 30fps)

      function onFrame(time) {
        frames++;
        const delta = time - lastTime;
        if (delta > 32) {
          jankFrames++;
        }
        lastTime = time;
        if (time - start < 2000) {
          requestAnimationFrame(onFrame);
        } else {
          const totalDuration = time - start;
          const avgFps = Math.round((frames / totalDuration) * 1000);
          resolve({
            totalFrames: frames,
            totalDurationMs: Math.round(totalDuration),
            averageFps: avgFps,
            jankFrames
          });
        }
      }

      requestAnimationFrame(onFrame);

      // Perform fast continuous scrolling down and up
      let currentScroll = 0;
      const interval = setInterval(() => {
        currentScroll += 120;
        window.scrollTo(0, currentScroll);
        if (currentScroll > 4500) {
          clearInterval(interval);
          // scroll back to top
          window.scrollTo(0, 0);
        }
      }, 16);
    });
  });

  console.log('Scroll Performance Metrics:', scrollMetrics);

  // 3. Take screenshot of mobile view with texture
  await page.screenshot({
    path: 'C:/Users/IITG/.gemini/antigravity/brain/e4855955-d333-41d1-8fc2-b9612f3453e9/mobile-optimized-texture.png'
  });
  console.log('Saved screenshot to mobile-optimized-texture.png');

  await browser.close();
}

benchmark().catch(err => {
  console.error('Benchmark failed:', err);
  process.exit(1);
});
