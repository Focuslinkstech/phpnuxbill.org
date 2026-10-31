// Site-wide constants and the order of the sidebar groups.
export const SITE = {
  name: 'PHPNuxBill',
  tagline: 'Open-source billing for Mikrotik Hotspot, PPPoE and FreeRADIUS.',
  repo: 'https://github.com/hotspotbilling/phpnuxbill-ultimate',
  starter: 'https://github.com/hotspotbilling/phpnuxbill-ultimate-extensions-starter',
  // the repository of this website, used for the "Edit this page" links; change it if the repo lives elsewhere
  website: 'https://github.com/hotspotbilling/phpnuxbill.org',
};

export const COMMUNITY = {
  forum: 'https://forum.phpnuxbill.org',
  telegram: 'https://t.me/phpnuxbill',
  facebook: 'https://web.facebook.com/groups/1404570750225597/',
  demo: 'https://demo.phpnuxbill.org',
  discussions: 'https://github.com/hotspotbilling/phpnuxbill/discussions',
};

export const SECTIONS = ['Getting started', 'Using the system', 'Extending', 'Reference'];

// Paid support. Set `telegram` to your link (for example https://t.me/yourname): the contact button is not shown until it is set.
export const SUPPORT = {
  priceUSD: 100,
  telegram: 'https://t.me/ibnux',
};

// Where donations go: the owner's funding links, the same ones the main repository lists in .github/FUNDING.yml
export const SPONSOR: [string, string][] = [
  ['GitHub Sponsors', 'https://github.com/sponsors/ibnux'],
  ['PayPal', 'https://paypal.me/ibnux'],
  ['Trakteer', 'https://trakteer.id/ibnux'],
];
