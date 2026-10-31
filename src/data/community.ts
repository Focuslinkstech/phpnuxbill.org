// Build-time data for the landing page: the official extension repository and the project's contributors.
// Both are fetched when the site is built. If a request fails (offline build, rate limit), the committed snapshot next to this
// file is used instead, so a build never breaks and the page never goes empty. The deploy workflow rebuilds daily to refresh them.
import repoSnapshot from './repository.snapshot.json';
import contributorSnapshot from './contributors.snapshot.json';

const REPOSITORY_URL = 'https://hotspotbilling.github.io/Plugin-Repository/repository.json';
const CONTRIBUTORS_URL = 'https://api.github.com/repos/hotspotbilling/phpnuxbill/contributors?per_page=100';

export interface Extension {
  id: string;
  name: string;
  description: string;
  paid: boolean;
  author: string;
  url: string; // the author's page, or ''
  github: string; // repository link, or ''
  updated: string;
}

export interface Contributor {
  login: string;
  contributions: number;
  avatar: string;
  url: string;
}

async function getJson(url: string, headers: Record<string, string> = {}): Promise<unknown> {
  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`[community] ${url} failed (${e instanceof Error ? e.message : e}); using the snapshot`);
    return null;
  }
}

/** Store entries are untrusted text: keep strings, and only http(s) links */
const text = (v: unknown) => (typeof v === 'string' || typeof v === 'number' ? String(v) : '');
const link = (v: unknown) => {
  const s = text(v);
  return /^https?:\/\//i.test(s) ? s : '';
};

function clean(list: unknown): Extension[] {
  if (!Array.isArray(list)) return [];
  return list
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object')
    .map((x) => ({
      id: text(x.id),
      name: text(x.name).replace(/\s*\|\s*Paid Plugin\s*$/i, '').trim(),
      description: text(x.description),
      paid: !!x.ispaid,
      author: text(x.author),
      url: link(x.url),
      github: link(x.github),
      updated: text(x.last_update),
    }))
    .filter((x) => x.id && x.name)
    .sort((a, b) => (Date.parse(b.updated) || 0) - (Date.parse(a.updated) || 0));
}

export async function loadRepository() {
  const live = (await getJson(REPOSITORY_URL)) as Record<string, unknown> | null;
  const data = live && typeof live === 'object' ? live : (repoSnapshot as Record<string, unknown>);
  return {
    plugins: clean(data.plugins),
    gateways: clean(data.payment_gateway),
    devices: clean(data.devices),
  };
}

export async function loadContributors(): Promise<Contributor[]> {
  const token = process.env.GITHUB_TOKEN;
  const live = await getJson(CONTRIBUTORS_URL, {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  });
  const list = (Array.isArray(live) ? live : contributorSnapshot) as Array<Record<string, unknown>>;
  return list
    .filter((x) => x.type === undefined || x.type === 'User') // the live API marks bots; the snapshot is already filtered
    .map((x) => ({
      login: text(x.login),
      contributions: Number(x.contributions) || 0,
      avatar: link(x.avatar_url),
      url: link(x.html_url),
    }))
    .filter((x) => x.login && x.avatar)
    .sort((a, b) => b.contributions - a.contributions);
}

export interface Release { tag: string; url: string }

/** The latest GitHub release of the project, or null when there is none or the request fails (rate limit, offline, private repo) */
export async function loadRelease(): Promise<Release | null> {
  const token = process.env.GITHUB_TOKEN;
  const live = (await getJson('https://api.github.com/repos/hotspotbilling/phpnuxbill-ultimate/releases/latest', {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  })) as Record<string, unknown> | null;
  const tag = live && typeof live.tag_name === 'string' ? live.tag_name : '';
  const url = link(live?.html_url);
  return tag && url ? { tag, url } : null;
}
