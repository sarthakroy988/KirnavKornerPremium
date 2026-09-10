import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicImagesDir = path.resolve('public/images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function processImages() {
  const kk1 = sharp('images/kk1.png');
  const meta1 = await kk1.metadata();
  console.log('kk1 metadata:', meta1.width, meta1.height);

  const kk2 = sharp('images/kk2.png');
  const meta2 = await kk2.metadata();
  console.log('kk2 metadata:', meta2.width, meta2.height);

  // 1. Full original webp
  await sharp('images/kk1.png')
    .webp({ quality: 88 })
    .toFile(path.join(publicImagesDir, 'interior-full.webp'));

  await sharp('images/kk2.png')
    .webp({ quality: 88 })
    .toFile(path.join(publicImagesDir, 'storefront-full.webp'));

  // Also copy original pngs to public
  fs.copyFileSync('images/kk1.png', path.join(publicImagesDir, 'kk1.png'));
  fs.copyFileSync('images/kk2.png', path.join(publicImagesDir, 'kk2.png'));

  // 2. Focused crops from kk1 (620 x 745):
  // Footwear shelf: focused on colorful sandals & shoes rack
  await sharp('images/kk1.png')
    .extract({ left: 0, top: 360, width: 160, height: 220 })
    .resize(480, 560, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-footwear.webp'));

  // Dino mascot & toy fun
  await sharp('images/kk1.png')
    .extract({ left: 60, top: 270, width: 520, height: 470 })
    .resize(600, 540, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-play-dino.webp'));

  // Clothing & apparel shelves
  await sharp('images/kk1.png')
    .extract({ left: 170, top: 70, width: 440, height: 380 })
    .resize(640, 500, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-clothing.webp'));

  // Trial room / fashion dress visual
  await sharp('images/kk1.png')
    .extract({ left: 10, top: 120, width: 180, height: 360 })
    .resize(400, 600, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-fashion-dresses.webp'));

  // 3. Focused crops from kk2 (661 x 551):
  // Storefront facade complete view (without dark ground margin)
  await sharp('images/kk2.png')
    .extract({ left: 55, top: 25, width: 550, height: 500 })
    .resize(800, 720, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-storefront-facade.webp'));

  // Upper floor ride-ons / cycles showroom
  await sharp('images/kk2.png')
    .extract({ left: 155, top: 215, width: 465, height: 100 })
    .resize(700, 260, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-rideons-cycles.webp'));

  // Main glowing illuminated Kirnav Korner Mee Mee banner
  await sharp('images/kk2.png')
    .extract({ left: 75, top: 520 > 320 ? 320 : 0, width: 510, height: 45 })
    .resize(800, 120, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-signage-banner.webp'));

  // Ground floor lighted entrance & storefront welcoming view
  await sharp('images/kk2.png')
    .extract({ left: 140, top: 350, width: 420, height: 180 })
    .resize(640, 360, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(path.join(publicImagesDir, 'crop-store-entrance.webp'));

  console.log('Successfully processed and generated all image assets!');
}

processImages().catch(console.error);
