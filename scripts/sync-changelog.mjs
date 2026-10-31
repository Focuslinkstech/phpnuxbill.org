// Copies the released sections of the main repository's CHANGELOG.md into src/data/changelog.md.
// The "Unreleased" section is left out on purpose: it is the developers' working notes, not release notes.
// Usage: npm run sync:changelog [path/to/CHANGELOG.md]
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve(process.argv[2] ?? '../phpnuxbill-ultimate/CHANGELOG.md');
const lines = readFileSync(source, 'utf8').split('\n');

const out = [];
let keep = false;
for (const line of lines) {
  if (/^## /.test(line)) keep = !/^## Unreleased/i.test(line);
  if (keep) out.push(line);
}
writeFileSync(new URL('../src/data/changelog.md', import.meta.url), out.join('\n').trim() + '\n');
console.log(`Wrote ${out.length} lines from ${source}`);
