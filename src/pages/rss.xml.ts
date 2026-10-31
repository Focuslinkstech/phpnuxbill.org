// A feed of the release notes, built from the same file as the Release notes page. One item per released version.
import type { APIRoute } from 'astro';
import changelog from '../data/changelog.md?raw';

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]!));

export const GET: APIRoute = ({ site }) => {
  const home = (site ?? new URL('https://phpnuxbill.org')).toString().replace(/\/$/, '');
  const items = changelog
    .split(/^## /m)
    .slice(1)
    .map((block) => {
      const [version, ...rest] = block.split('\n');
      const notes = rest.filter((l) => /^- /.test(l)).map((l) => l.slice(2).replace(/[`*_]/g, '')).slice(0, 12);
      return `<item><title>${esc(`PHPNuxBill ${version.trim()}`)}</title><link>${home}/changelog/</link><guid isPermaLink="false">phpnuxbill-${esc(version.trim())}</guid><description>${esc(notes.map((n) => `• ${n}`).join('\n'))}</description></item>`;
    });
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>PHPNuxBill release notes</title><link>${home}/changelog/</link><description>What changed in each PHPNuxBill release.</description><language>en</language>${items.join('')}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
