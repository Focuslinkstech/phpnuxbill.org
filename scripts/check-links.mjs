// Checks every internal link and image in dist/ after a build. External links are not fetched.
// Usage: npm run build && npm run check:links
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p);
  }
})(dist);

const known = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
  const f = join(dist, clean);
  return existsSync(f) && statSync(f).isFile() ? f : existsSync(join(f, 'index.html')) ? join(f, 'index.html') : null;
};
const ids = new Map();
const idsOf = (file) => ids.get(file) ?? ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))).get(file);

let bad = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const here = '/' + page.slice(dist.length).replace(/index\.html$/, '');
  for (const [, , url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|[' +]|\\|mailto:|tel:|data:|javascript:|\/\/)/.test(url)) continue;
    const target = url.startsWith('#') ? here + url : url.startsWith('/') ? url : join(dirname(here), url);
    const file = known(target);
    const frag = target.split('#')[1] && decodeURIComponent(target.split('#')[1]);
    if (!file) { console.log(`${here}  ->  ${url}  (missing)`); bad++; }
    else if (frag && file.endsWith('.html') && !idsOf(file).has(frag)) { console.log(`${here}  ->  ${url}  (no such heading)`); bad++; }
  }
}
console.log(`${pages.length} pages checked, ${bad} problem${bad === 1 ? '' : 's'}`);
process.exit(bad ? 1 : 0);
