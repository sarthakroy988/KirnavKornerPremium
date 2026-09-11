import sharp from 'sharp';

// Generate a 180x180 seamless organic paper grain tile
const width = 180;
const height = 180;
const channels = 4; // RGBA
const buffer = Buffer.alloc(width * height * channels);

for (let i = 0; i < width * height; i++) {
  const offset = i * channels;
  const rand = Math.random();
  if (rand > 0.72) {
    // Light organic fiber specks
    buffer[offset] = 68;      // R
    buffer[offset + 1] = 56;  // G
    buffer[offset + 2] = 46;  // B
    buffer[offset + 3] = Math.floor(Math.random() * 18) + 10; // subtle alpha
  } else if (rand > 0.45) {
    // Micro tactile grain
    buffer[offset] = 90;
    buffer[offset + 1] = 78;
    buffer[offset + 2] = 66;
    buffer[offset + 3] = Math.floor(Math.random() * 12) + 4;
  } else {
    buffer[offset] = 0;
    buffer[offset + 1] = 0;
    buffer[offset + 2] = 0;
    buffer[offset + 3] = 0;
  }
}

await sharp(buffer, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile('public/images/paper-grain.png');

await sharp(buffer, { raw: { width, height, channels } })
  .webp({ lossless: true })
  .toFile('public/images/paper-grain.webp');

console.log('Successfully generated paper-grain.png and paper-grain.webp');
