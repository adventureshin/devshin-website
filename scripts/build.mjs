import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const prerenderDir = path.resolve('.prerender');
try {
  await build();
  await build({ build: { ssr: 'src/prerender.jsx', outDir: prerenderDir, emptyOutDir: true } });
  const { render } = await import(pathToFileURL(path.join(prerenderDir, 'prerender.js')).href);
  const htmlPath = path.resolve('dist/index.html');
  const template = await readFile(htmlPath, 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error('Missing prerender root in index.html');
  await writeFile(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
  console.log('Prerendered portfolio content into dist/index.html');
} finally {
  await rm(prerenderDir, { recursive: true, force: true });
}
