import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, writeFileSync } from "fs";
import { join, extname, relative } from "path";

const ASSETS_DIR = new URL("../public/assets", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const OUT_DIR = new URL("../public/assets-compressed", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 85;
const PNG_QUALITY = 85;
const SKIP_BELOW_BYTES = 1_000_000;

function walk(dir) {
  let results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const files = walk(ASSETS_DIR);

for (const filePath of files) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const rel = relative(ASSETS_DIR, filePath);
  const outPath = join(OUT_DIR, rel);
  const sizeBefore = statSync(filePath).size;

  if (sizeBefore < SKIP_BELOW_BYTES) {
    console.log(`skip  ${rel} (${(sizeBefore / 1024).toFixed(0)} KB)`);
    continue;
  }

  const image = sharp(filePath);
  const meta = await image.metadata();
  const needsResize = meta.width && meta.width > MAX_WIDTH;

  let pipeline = needsResize ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true }) : image;

  if (ext === ".png") {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const sizeAfter = buffer.length;

  mkdirSync(join(outPath, ".."), { recursive: true });
  writeFileSync(outPath, buffer);
  console.log(`ok    ${rel}  ${(sizeBefore / 1e6).toFixed(1)} MB → ${(sizeAfter / 1e6).toFixed(1)} MB`);
}

console.log(`\ndone — compressed files written to public/assets-compressed/`);
console.log(`Run the following to replace originals:`);
console.log(`  Copy-Item public/assets-compressed/* public/assets/ -Force -Recurse`);
