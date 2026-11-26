// Entrypoint for news-image-20261126 (Node 22 standard library only).
// Copies the verified 1024x1024 broadsheet image to /output/entry.png (or MAKEFUN_OUTPUT_DIR).

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const sourceImage = new URL('./entry.png', import.meta.url);
if (!existsSync(sourceImage)) {
  throw new Error('Missing entry.png beside main.ts');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
mkdirSync(dirname(dest), { recursive: true });
copyFileSync(sourceImage, dest);
