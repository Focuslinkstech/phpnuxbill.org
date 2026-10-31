import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The site is served at the root of phpnuxbill.org (public/CNAME). Old Nuxt-site addresses redirect to their new place.
const docs = (to) => `/docs/getting-started/${to}/`;
export default defineConfig({
  site: 'https://phpnuxbill.org',
  redirects: Object.fromEntries(['', '/id'].flatMap((l) => [
    [`${l}/getting-started/introduction`, `${l}${docs('introduction')}`],
    [`${l}/getting-started/how-its-works`, `${l}${docs('how-it-works')}`],
    [`${l}/getting-started/installation`, `${l}${docs('install-cpanel')}`],
    [`${l}/getting-started/installation/requirements`, `${l}${docs('installation')}`],
    [`${l}/getting-started/installation/vps`, `${l}${docs('install-vps')}`],
    [`${l}/getting-started/installation/local`, `${l}${docs('install-local')}`],
    [`${l}/getting-started/installation/docker`, `${l}${docs('installation')}`],
    [`${l}/extensions/plugins`, `${l}/extensions/?type=plugin`],
    [`${l}/extensions/payment-gateways`, `${l}/extensions/?type=gateway`],
    [`${l}/extensions/devices`, `${l}/extensions/?type=device`],
    [`${l}/extensions/themes`, `${l}/extensions/`],
    [`${l}/extensions/introduction`, `${l}/extensions/`],
  ]).concat([['/ultimate', '/']])),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'es', 'ar', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id', es: 'es', ar: 'ar', tr: 'tr' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
});
