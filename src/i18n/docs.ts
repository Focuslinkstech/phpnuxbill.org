// Resolve docs pages per language: the English tree is the master list, a translation replaces it when it exists.
import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LANG, type Lang } from './index';

export type DocEntry = CollectionEntry<'docs'>;
export interface ResolvedDoc { slug: string; entry: DocEntry; fallback: boolean; section: DocEntry['data']['section']; order: number }

export async function resolveDocs(lang: Lang): Promise<ResolvedDoc[]> {
  const all = await getCollection('docs');
  const byId = new Map(all.map((e) => [e.id, e]));
  return all
    .filter((e) => e.id.startsWith(`${DEFAULT_LANG}/`))
    .map((en) => {
      const slug = en.id.slice(DEFAULT_LANG.length + 1);
      const own = lang === DEFAULT_LANG ? undefined : byId.get(`${lang}/${slug}`);
      // section and order always come from the English page so the menu has the same shape in every language
      return { slug, entry: own ?? en, fallback: !own && lang !== DEFAULT_LANG, section: en.data.section, order: en.data.order };
    });
}
