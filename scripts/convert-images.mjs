/**
 * Converts all PNG/JPG/JPEG images in /public to WebP.
 * Originals are kept; WebP files are written alongside them.
 * Run once: node scripts/convert-images.mjs
 */

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const WEBP_QUALITY = 82; // good balance of quality vs size
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(e.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const images = await walk(PUBLIC_DIR);
  console.log(`Found ${images.length} images to convert.`);

  let converted = 0;
  let skipped = 0;
  let saved = 0;

  for (const src of images) {
    const dest = src.replace(/\.(png|jpe?g)$/i, ".webp");

    // skip if webp already exists and is newer
    try {
      const srcStat = await fs.stat(src);
      const destStat = await fs.stat(dest);
      if (destStat.mtimeMs >= srcStat.mtimeMs) {
        skipped++;
        continue;
      }
    } catch {
      // dest doesn't exist – proceed
    }

    try {
      await sharp(src)
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(dest);

      const srcSize = (await fs.stat(src)).size;
      const destSize = (await fs.stat(dest)).size;
      const reduction = (((srcSize - destSize) / srcSize) * 100).toFixed(1);
      saved += srcSize - destSize;
      console.log(
        `✓ ${path.relative(PUBLIC_DIR, src)} → .webp  (${reduction}% smaller)`
      );
      converted++;
    } catch (err) {
      console.error(`✗ Failed: ${src}`, err.message);
    }
  }

  const savedMB = (saved / 1024 / 1024).toFixed(1);
  console.log(
    `\nDone. Converted: ${converted}, Skipped (up-to-date): ${skipped}. Total saved: ~${savedMB} MB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
