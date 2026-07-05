import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

const getAllFiles = (dir, extn, files, result, regex) => {
  files = files || fs.readdirSync(dir);
  result = result || [];

  for (let i = 0; i < files.length; i++) {
    let file = path.join(dir, files[i]);
    if (fs.statSync(file).isDirectory()) {
      try {
        result = getAllFiles(file, extn, fs.readdirSync(file), result, regex);
      } catch (error) {
        continue;
      }
    } else {
      if (regex.test(file)) {
        result.push(file);
      }
    }
  }
  return result;
};

const optimizeImages = async () => {
  console.log('Scanning for images in /public/images...');
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('Directory /public/images does not exist. Please create it and add images.');
    return;
  }

  const images = getAllFiles(IMAGES_DIR, '', [], [], /\.(jpg|jpeg|png)$/i);
  console.log(`Found ${images.length} images to process.`);

  let processedCount = 0;

  for (const imagePath of images) {
    const ext = path.extname(imagePath);
    const base = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    const newFileName = `${base.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.webp`;
    const newFilePath = path.join(dir, newFileName);

    if (fs.existsSync(newFilePath)) {
      console.log(`Skipping (already optimized): ${newFileName}`);
      continue;
    }

    try {
      console.log(`Optimizing: ${imagePath} -> ${newFileName}`);
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(newFilePath);
      processedCount++;
    } catch (err) {
      console.error(`Error processing ${imagePath}:`, err);
    }
  }

  console.log(`Done! Optimized ${processedCount} images.`);
};

optimizeImages();
