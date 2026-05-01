/**
 * Updates all TSX/TS source files: replaces .png / .jpg / .jpeg image paths
 * with .webp equivalents (skips SVG, font files, and video files).
 * Run: node scripts/update-image-paths.mjs
 */

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, "../app");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(tsx?|mjs|js)$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const files = await walk(APP_DIR);
  let totalChanges = 0;

  for (const file of files) {
    const original = await fs.readFile(file, "utf8");

    // Replace .png / .jpg / .jpeg inside string literals (single/double/backtick quotes)
    // but NOT inside .svg, .mp4, .webm, .otf, .ttf, .woff paths
    const updated = original.replace(
      /([`"'])([^`"']*?)\.(png|jpe?g)([`"'])/g,
      (match, openQ, urlPart, _ext, closeQ) => {
        // Skip if it's part of a non-image context (e.g. className, text)
        // Only replace if the string looks like a URL path (starts with / or ./)
        if (/^[./]/.test(urlPart) || urlPart === "") {
          return `${openQ}${urlPart}.webp${closeQ}`;
        }
        return match;
      }
    );

    if (updated !== original) {
      await fs.writeFile(file, updated, "utf8");
      const count = (updated.match(/\.webp/g) || []).length - (original.match(/\.webp/g) || []).length;
      console.log(`✓ ${path.relative(APP_DIR, file)}  (+${count} webp refs)`);
      totalChanges++;
    }
  }

  console.log(`\nDone. Updated ${totalChanges} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
