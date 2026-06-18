import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, writeFileSync } from "fs";
import { join, extname } from "path";

const ASSETS_DIR = new URL("../public/assets", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const OUT_DIR = new URL("../public/assets-compressed", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 85;
const PNG_QUALITY = 85;
const SKIP_BELOW_BYTES = 1_000_000;

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(ASSETS_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const filePath = join(ASSETS_DIR, file);
  const outPath = join(OUT_DIR, file);
  const sizeBefore = statSync(filePath).size;

  if (sizeBefore < SKIP_BELOW_BYTES) {
    console.log(`skip  ${file} (${(sizeBefore / 1024).toFixed(0)} KB)`);
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

  writeFileSync(outPath, buffer);
  console.log(`ok    ${file}  ${(sizeBefore / 1e6).toFixed(1)} MB → ${(sizeAfter / 1e6).toFixed(1)} MB`);
}

console.log(`\ndone — compressed files written to public/assets-compressed/`);
console.log(`Run the following to replace originals:`);
console.log(`  Copy-Item public/assets-compressed/* public/assets/ -Force`);
