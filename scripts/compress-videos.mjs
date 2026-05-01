/**
 * Compresses MP4 videos in /public using ffmpeg-static.
 * Outputs compressed versions next to originals with same filename (overwrite).
 * Run once: node scripts/compress-videos.mjs
 *
 * Strategy:
 *  - H.264 CRF 28 (visually lossless for web)
 *  - Scale to max 1280px wide (downscale only)
 *  - Strip audio from background/ambient videos
 *  - faststart flag for progressive web playback
 */

import ffmpegPath from "ffmpeg-static";
import { execFile } from "child_process";
import { promisify } from "util";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const exec = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (path.extname(e.name).toLowerCase() === ".mp4") {
      files.push(full);
    }
  }
  return files;
}

async function compressVideo(src) {
  const tmp = src.replace(/\.mp4$/i, ".tmp.mp4");

  try {
    await exec(ffmpegPath, [
      "-y",
      "-i", src,
      "-c:v", "libx264",
      "-crf", "28",
      "-preset", "slow",
      "-vf", "scale='min(1280,iw)':-2:flags=lanczos",
      "-an",                          // strip audio (background videos)
      "-movflags", "+faststart",
      "-pix_fmt", "yuv420p",
      tmp,
    ]);

    const srcSize = (await fs.stat(src)).size;
    const destSize = (await fs.stat(tmp)).size;

    if (destSize < srcSize) {
      await fs.rename(tmp, src);
      const reduction = (((srcSize - destSize) / srcSize) * 100).toFixed(1);
      const savedMB = ((srcSize - destSize) / 1024 / 1024).toFixed(1);
      console.log(`✓ ${path.relative(PUBLIC_DIR, src)}  (${reduction}% smaller, saved ${savedMB} MB)`);
      return srcSize - destSize;
    } else {
      await fs.unlink(tmp);
      console.log(`~ ${path.relative(PUBLIC_DIR, src)}  (already optimized, keeping original)`);
      return 0;
    }
  } catch (err) {
    console.error(`✗ Failed: ${path.relative(PUBLIC_DIR, src)}`, err.message);
    try { await fs.unlink(tmp); } catch {}
    return 0;
  }
}

async function main() {
  const videos = await walk(PUBLIC_DIR);
  console.log(`Found ${videos.length} MP4 files to compress.\n`);

  let totalSaved = 0;
  for (const v of videos) {
    totalSaved += await compressVideo(v);
  }

  const savedMB = (totalSaved / 1024 / 1024).toFixed(1);
  console.log(`\nDone. Total saved: ~${savedMB} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
