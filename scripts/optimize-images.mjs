import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

const getAllFiles = (dir, extn, files = null, result = null, regex) => {
  files = files || fs.readdirSync(dir);
  result = result || [];

  for (let i = 0; i < files.length; i++) {
    let file = path.join(dir, files[i]);
    if (fs.statSync(file).isDirectory()) {
      try {
        result = getAllFiles(file, extn, null, result, regex);
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

  // Scan all standard image formats
  const images = getAllFiles(IMAGES_DIR, '', null, null, /\.(jpg|jpeg|png|webp)$/i);
  console.log(`Found ${images.length} images to process.`);

  let processedCount = 0;

  for (const imagePath of images) {
    const ext = path.extname(imagePath);
    let base = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    
    // Make SEO friendly - remove special characters, lowercase, replace spaces with hyphens
    // Adding "marshi-collection" to the end if not already present for branding
    let seoBase = base.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!seoBase.includes('marshi-collection') && dir.includes('products')) {
        seoBase = `${seoBase}-marshi-collection`;
    }

    const newFileName = `${seoBase}.webp`;
    const newFilePath = path.join(dir, newFileName);

    if (imagePath === newFilePath) {
      console.log(`Skipping (already optimized and correct format): ${newFileName}`);
      continue;
    }

    if (fs.existsSync(newFilePath)) {
      console.log(`Skipping (already exists): ${newFileName}`);
      continue;
    }

    try {
      console.log(`Optimizing: ${path.basename(imagePath)} -> ${newFileName}`);
      // Read dimensions and convert to WebP
      const metadata = await sharp(imagePath).metadata();
      
      await sharp(imagePath)
        .webp({ quality: 80, effort: 6 }) // high effort for better compression
        .toFile(newFilePath);
        
      console.log(`  -> Dimensions: ${metadata.width}x${metadata.height}`);
      processedCount++;
    } catch (err) {
      console.error(`Error processing ${imagePath}:`, err);
    }
  }

  console.log(`Done! Optimized ${processedCount} images.`);
};

optimizeImages();
