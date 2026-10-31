# PHPNuxBill website

Landing page and `/docs` for [PHPNuxBill](https://github.com/hotspotbilling/phpnuxbill-ultimate). Astro, MDX and Tailwind, with
shadcn/ui "zinc" colour tokens. It builds to static HTML with no client JavaScript framework; the only scripts are the theme
toggle and the search box, which loads Pagefind when it is first focused.

```bash
npm install
npm run dev       # http://localhost:4321 (search needs a build, see below)
npm run build     # astro build, then Pagefind indexes dist/
npm run preview
```

## Writing docs

Add an `.mdx` (or `.md`) file under `src/content/docs/<folder>/`. The frontmatter places it in the sidebar:

```yaml
---
title: Vouchers
description: One sentence shown under the title and in search results.
section: Using the system   # must be one of SECTIONS in src/site.ts
order: 1                    # position inside the section
---
```

The URL is the file path: `src/content/docs/using/vouchers.mdx` is `/docs/using/vouchers/`.

In MDX a bare `{` or `<` outside a code block starts an expression or a tag. Put them in backticks, or write `\{` and `&lt;`.

## Deploying

The site is static and is built and served by **Cloudflare Pages**.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` (also builds the docs search index) |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` (also set in `.node-version`) |
| Optional secret | `GITHUB_TOKEN`, a token with no permissions, so the build is not rate-limited when it reads contributors and the latest release |

The extension list, contributors and latest release are fetched while the site is built. `.github/workflows/deploy.yml` triggers a
fresh Cloudflare build once a day: create a deploy hook under Pages > Settings > Builds and save its URL as the repository secret
`CF_DEPLOY_HOOK`. `public/_redirects` holds the permanent redirects from the previous site's addresses. After a release, run
`npm run sync:changelog` and commit `src/data/changelog.md`, or the release notes go stale. `npm run check:links` checks every
internal link after a build.

## Keeping the docs true

`src/content/docs/extending/plugins.mdx` is generated from `PLUGINS.md` in the main repository (heading removed, `{` and `<`
escaped outside code). Re-run the conversion when `PLUGINS.md` changes.

## Live data on the landing page

The plugin and gateway sliders and the contributor list are fetched when the site is built (`src/data/community.ts`): the
official `repository.json` from the Plugin-Repository and the contributors of `hotspotbilling/phpnuxbill` from the GitHub API.
If a request fails, the snapshots next to that file (`repository.snapshot.json`, `contributors.snapshot.json`) are used, so a build never
breaks. The deploy workflow rebuilds every day to refresh them; pass `GITHUB_TOKEN` (the workflow does) to avoid the API's anonymous rate limit.

## Theme

The header button cycles system, light and dark. System is the default and follows the operating system, including changes while the
page is open. The choice is kept in `localStorage` under `theme` (nothing is stored for system).

## Languages

English is at the root (`/`); the other languages are under `/id/`, `/es/`, `/ar/` and `/tr/`. The header menu switches language and
keeps you on the same page. Arabic is right to left (the layout mirrors, code stays left to right).

| What | Where |
|---|---|
| Shared strings (header, footer, docs menu) | `src/i18n/index.ts` |
| Landing page copy | `src/i18n/landing.ts` |
| Docs pages | `src/content/docs/<language>/<section>/<page>.mdx` |

Docs: the English tree in `src/content/docs/en/` is the master list. A language only needs the pages it has translated; any other page
shows the English text under that language's address, with a notice. Indonesian, Spanish, Arabic and Turkish have every page translated except the plugin developer reference
(`extending/plugins.mdx`, generated from `PLUGINS.md`), which falls back to English.

**To add a translation:** copy an English page into your language folder, keep the frontmatter keys (`section` must stay one of
`getting-started`, `using`, `extending`, `reference`; `order` is taken from English), translate the text, and link to your language
(`/es/docs/...`). **To add a language:** add it to `LANGUAGES` and `ui` in `src/i18n/index.ts`, a block in `src/i18n/landing.ts`, and
the code to `i18n.locales` in `astro.config.mjs`.

The translations were drafted by an AI assistant, so a native reader should review them before they are treated as final.

## Other pages and data

| Page | Source |
|---|---|
| `/extensions/` | The official `repository.json`, filtered in the browser (search, type, free or paid). Fetched at build time like the sliders. |
| `/changelog/` | `src/data/changelog.md`, the released sections of the main repo's `CHANGELOG.md`. Refresh it with `npm run sync:changelog` (default source `../phpnuxbill-ultimate/CHANGELOG.md`, or pass a path). The Unreleased section is left out on purpose. |
| `/404.html` | Chooses its language from the address (`/es/...`). |
| FAQ, demo and download links | `src/i18n/pages.ts`, `COMMUNITY.demo` and `SITE` in `src/site.ts`. The download line shows the latest GitHub release tag when the API answers, and a plain "Download" link otherwise. |

`SITE.website` in `src/site.ts` is the repository of this website, used for the "Edit this page on GitHub" link on every docs page. Change it if the repository lives elsewhere.
