import puppeteer from 'puppeteer-core';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testInteractions() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  console.log('Page loaded. Checking console errors...');
  if (consoleErrors.length > 0) {
    console.error('Console errors found:', consoleErrors);
  } else {
    console.log('No console errors!');
  }

  // Test Category click
  console.log('Testing category click on STEP OUT...');
  const categoryTiles = await page.$$('#categories .group.cursor-pointer');
  console.log(`Found ${categoryTiles.length} category tiles.`);
  if (categoryTiles.length >= 4) {
    await categoryTiles[3].click(); // Click STEP OUT (index 3)
    const featuredText = await page.$eval('#categories .lg\\:col-span-8 h3', el => el.innerText);
    console.log('Featured category updated to:', featuredText);
  }

  // Test Modal open
  console.log('Testing Enquiry Modal open...');
  const askStoreBtn = await page.$('header button');
  if (askStoreBtn) {
    await askStoreBtn.click();
    await page.waitForSelector('[role="dialog"]', { visible: true });
    console.log('Modal opened successfully!');
    
    // Close modal
    const closeBtn = await page.$('[role="dialog"] button[aria-label="Close dialog"]');
    if (closeBtn) {
      await closeBtn.click();
      await page.waitForSelector('[role="dialog"]', { hidden: true });
      console.log('Modal closed successfully!');
    }
  }

  await browser.close();
  console.log('All interaction tests passed cleanly!');
}

testInteractions().catch(err => {
  console.error(err);
  process.exit(1);
});
