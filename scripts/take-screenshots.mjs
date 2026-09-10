import { execFile } from 'child_process';
import path from 'path';
import fs from 'fs';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve('public/screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 }
];

async function capture() {
  for (const vp of viewports) {
    const outFile = path.join(outDir, `${vp.name}.png`);
    const args = [
      '--headless=new',
      '--disable-gpu',
      `--window-size=${vp.width},${vp.height}`,
      '--hide-scrollbars',
      `--screenshot=${outFile}`,
      'http://localhost:3000/'
    ];

    console.log(`Capturing ${vp.name}...`);
    await new Promise((resolve) => {
      execFile(edgePath, args, (err) => {
        if (err) console.error(`Error on ${vp.name}:`, err);
        else console.log(`Done ${vp.name}`);
        resolve();
      });
    });
  }
}

capture().catch(console.error);
