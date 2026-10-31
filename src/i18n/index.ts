// Languages and the strings shared by every page (header, footer, docs chrome).
// To add a language: add it to LANGUAGES, add a block to `ui` below and in landing.ts, and (optionally) a folder
// src/content/docs/<code>/ with translated pages. Docs pages without a translation show the English page with a notice.
export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
] as const;

export type Lang = (typeof LANGUAGES)[number]['code'];
export const DEFAULT_LANG: Lang = 'en';
export const OTHER_LANGS = LANGUAGES.filter((l) => l.code !== DEFAULT_LANG).map((l) => l.code);

export const isLang = (v: string | undefined): v is Lang => LANGUAGES.some((l) => l.code === v);
export const dirOf = (lang: Lang) => LANGUAGES.find((l) => l.code === lang)!.dir;

/** Prefix a site path (starting with /) with the language, except for the default language, which lives at the root */
export function localePath(lang: Lang, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${lang === DEFAULT_LANG ? '' : `/${lang}`}${path}`;
}

/** The current URL without the base and the language prefix, so it can be rebuilt for another language */
export function stripLocale(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const first = p.split('/')[1];
  if (first && first !== DEFAULT_LANG && isLang(first)) p = p.slice(first.length + 1);
  return p || '/';
}

export interface UI {
  nav: { docs: string; features: string; extend: string; forum: string; github: string; demo: string };
  docsNav: { previous: string; next: string; edit: string };
  theme: string; // "Theme"
  language: string;
  menu: string;
  backToTop: string;
  search: string;
  searchNone: string;
  searchBuild: string;
  onThisPage: string;
  notTranslated: string; // shown above an English docs page in another language
  sections: Record<'getting-started' | 'using' | 'extending' | 'reference', string>;
  footer: {
    tagline: string; learn: string; community: string; project: string;
    documentation: string; install: string; build: string;
    forum: string; telegram: string; facebook: string; demo: string; extensions: string; releaseNotes: string; discussions: string; github: string; starter: string; changelog: string;
    copyright: string; // {year} is replaced
    license: string;
  };
  slider: { paid: string; free: string; by: string; view: string; buy: string; back: string; forward: string; pause: string; play: string; unknownAuthor: string };
  contributors: { label: string; authors: string; authorsAfter: string };
}

export const ui: Record<Lang, UI> = {
  en: {
    nav: { docs: 'Docs', features: 'Features', extend: 'Extend', forum: 'Forum', github: 'GitHub', demo: 'Demo' },
    docsNav: { previous: 'Previous', next: 'Next', edit: "Edit this page on GitHub" },
    theme: 'Theme', language: 'Language', menu: 'Menu', backToTop: 'Back to top',
    search: 'Search docs…', searchNone: 'No results', searchBuild: 'Search is built with the site (npm run build).',
    onThisPage: 'On this page',
    notTranslated: 'This page is not translated yet, so you are reading the English version. Translations are welcome on GitHub.',
    sections: { 'getting-started': 'Getting started', using: 'Using the system', extending: 'Extending', reference: 'Reference' },
    footer: {
      tagline: 'Open-source billing for Mikrotik Hotspot, PPPoE and FreeRADIUS.',
      learn: 'Learn', community: 'Community', project: 'Project',
      documentation: 'Documentation', install: 'Install guide', build: 'Build an extension',
      forum: 'Forum', telegram: 'Telegram', facebook: 'Facebook group', demo: 'Live demo', extensions: 'Extensions', releaseNotes: 'Release notes', discussions: 'Discussions', github: 'GitHub', starter: 'Extension starter', changelog: 'Changelog',
      copyright: '© {year} PHPNuxBill. Free software under the GNU GPL.',
      license: 'License',
    },
    slider: { paid: 'Paid', free: 'Free', by: 'by', view: 'View', buy: 'Buy', back: 'Scroll back', forward: 'Scroll forward', pause: 'Pause', play: 'Play', unknownAuthor: 'unknown' },
    contributors: { label: 'Code contributors', authors: 'Extension authors:', authorsAfter: 'Each of them wrote and shares a plugin, gateway or driver from the repository above.' },
  },
  id: {
    nav: { docs: 'Dokumentasi', features: 'Fitur', extend: 'Perluas', forum: 'Forum', github: 'GitHub', demo: 'Demo' },
    docsNav: { previous: 'Sebelumnya', next: 'Berikutnya', edit: "Edit halaman ini di GitHub" },
    theme: 'Tema', language: 'Bahasa', menu: 'Menu', backToTop: 'Kembali ke atas',
    search: 'Cari dokumentasi…', searchNone: 'Tidak ada hasil', searchBuild: 'Pencarian dibuat saat situs dibangun (npm run build).',
    onThisPage: 'Di halaman ini',
    notTranslated: 'Halaman ini belum diterjemahkan, jadi Anda membaca versi bahasa Inggris. Terjemahan sangat diterima di GitHub.',
    sections: { 'getting-started': 'Memulai', using: 'Menggunakan sistem', extending: 'Pengembangan', reference: 'Referensi' },
    footer: {
      tagline: 'Billing open source untuk Mikrotik Hotspot, PPPoE, dan FreeRADIUS.',
      learn: 'Pelajari', community: 'Komunitas', project: 'Proyek',
      documentation: 'Dokumentasi', install: 'Panduan instalasi', build: 'Buat ekstensi',
      forum: 'Forum', telegram: 'Telegram', facebook: 'Grup Facebook', demo: 'Demo langsung', extensions: 'Ekstensi', releaseNotes: 'Catatan rilis', discussions: 'Diskusi', github: 'GitHub', starter: 'Starter ekstensi', changelog: 'Catatan perubahan',
      copyright: '© {year} PHPNuxBill. Perangkat lunak bebas di bawah GNU GPL.',
      license: 'Lisensi',
    },
    slider: { paid: 'Berbayar', free: 'Gratis', by: 'oleh', view: 'Lihat', buy: 'Beli', back: 'Geser mundur', forward: 'Geser maju', pause: 'Jeda', play: 'Putar', unknownAuthor: 'tidak diketahui' },
    contributors: { label: 'Kontributor kode', authors: 'Pembuat ekstensi:', authorsAfter: 'Masing-masing menulis dan membagikan plugin, gateway, atau driver dari repositori di atas.' },
  },
  es: {
    nav: { docs: 'Documentación', features: 'Funciones', extend: 'Ampliar', forum: 'Foro', github: 'GitHub', demo: 'Demo' },
    docsNav: { previous: 'Anterior', next: 'Siguiente', edit: "Editar esta página en GitHub" },
    theme: 'Tema', language: 'Idioma', menu: 'Menú', backToTop: 'Volver arriba',
    search: 'Buscar en la documentación…', searchNone: 'Sin resultados', searchBuild: 'La búsqueda se genera con el sitio (npm run build).',
    onThisPage: 'En esta página',
    notTranslated: 'Esta página aún no está traducida, así que estás leyendo la versión en inglés. Las traducciones son bienvenidas en GitHub.',
    sections: { 'getting-started': 'Primeros pasos', using: 'Uso del sistema', extending: 'Ampliar', reference: 'Referencia' },
    footer: {
      tagline: 'Facturación de código abierto para Mikrotik Hotspot, PPPoE y FreeRADIUS.',
      learn: 'Aprende', community: 'Comunidad', project: 'Proyecto',
      documentation: 'Documentación', install: 'Guía de instalación', build: 'Crear una extensión',
      forum: 'Foro', telegram: 'Telegram', facebook: 'Grupo de Facebook', demo: 'Demo en vivo', extensions: 'Extensiones', releaseNotes: 'Notas de la versión', discussions: 'Discusiones', github: 'GitHub', starter: 'Plantilla de extensiones', changelog: 'Registro de cambios',
      copyright: '© {year} PHPNuxBill. Software libre bajo la GNU GPL.',
      license: 'Licencia',
    },
    slider: { paid: 'De pago', free: 'Gratis', by: 'de', view: 'Ver', buy: 'Comprar', back: 'Desplazar atrás', forward: 'Desplazar adelante', pause: 'Pausar', play: 'Reproducir', unknownAuthor: 'desconocido' },
    contributors: { label: 'Colaboradores de código', authors: 'Autores de extensiones:', authorsAfter: 'Cada uno escribió y comparte un plugin, pasarela o controlador del repositorio de arriba.' },
  },
  ar: {
    nav: { docs: 'التوثيق', features: 'المزايا', extend: 'التوسعة', forum: 'المنتدى', github: 'GitHub', demo: 'تجربة' },
    docsNav: { previous: 'السابق', next: 'التالي', edit: "عدّل هذه الصفحة على GitHub" },
    theme: 'المظهر', language: 'اللغة', menu: 'القائمة', backToTop: 'العودة إلى الأعلى',
    search: 'ابحث في التوثيق…', searchNone: 'لا توجد نتائج', searchBuild: 'يُنشأ البحث مع بناء الموقع (npm run build).',
    onThisPage: 'في هذه الصفحة',
    notTranslated: 'هذه الصفحة غير مترجمة بعد، لذا تقرأ النسخة الإنجليزية. الترجمات مرحّب بها على GitHub.',
    sections: { 'getting-started': 'البدء', using: 'استخدام النظام', extending: 'التوسعة', reference: 'المرجع' },
    footer: {
      tagline: 'نظام فوترة مفتوح المصدر لـ Mikrotik Hotspot وPPPoE وFreeRADIUS.',
      learn: 'تعلّم', community: 'المجتمع', project: 'المشروع',
      documentation: 'التوثيق', install: 'دليل التثبيت', build: 'أنشئ إضافة',
      forum: 'المنتدى', telegram: 'تيليغرام', facebook: 'مجموعة فيسبوك', demo: 'تجربة مباشرة', extensions: 'الإضافات', releaseNotes: 'ملاحظات الإصدار', discussions: 'النقاشات', github: 'GitHub', starter: 'قالب الإضافات', changelog: 'سجل التغييرات',
      copyright: '© {year} PHPNuxBill. برمجيات حرة بموجب رخصة GNU GPL.',
      license: 'الرخصة',
    },
    slider: { paid: 'مدفوع', free: 'مجاني', by: 'بواسطة', view: 'عرض', buy: 'شراء', back: 'تمرير للخلف', forward: 'تمرير للأمام', pause: 'إيقاف مؤقت', play: 'تشغيل', unknownAuthor: 'غير معروف' },
    contributors: { label: 'المساهمون في الكود', authors: 'مؤلفو الإضافات:', authorsAfter: 'كلٌّ منهم كتب وشارك إضافة أو بوابة دفع أو مشغّل جهاز من المستودع أعلاه.' },
  },
  tr: {
    nav: { docs: 'Belgeler', features: 'Özellikler', extend: 'Genişlet', forum: 'Forum', github: 'GitHub', demo: 'Demo' },
    docsNav: { previous: 'Önceki', next: 'Sonraki', edit: "Bu sayfayı GitHub'da düzenle" },
    theme: 'Tema', language: 'Dil', menu: 'Menü', backToTop: 'Başa dön',
    search: 'Belgelerde ara…', searchNone: 'Sonuç yok', searchBuild: 'Arama, site derlenirken oluşturulur (npm run build).',
    onThisPage: 'Bu sayfada',
    notTranslated: 'Bu sayfa henüz çevrilmedi, bu yüzden İngilizce sürümü okuyorsunuz. Çeviriler GitHub üzerinden memnuniyetle karşılanır.',
    sections: { 'getting-started': 'Başlarken', using: 'Sistemi kullanma', extending: 'Genişletme', reference: 'Başvuru' },
    footer: {
      tagline: 'Mikrotik Hotspot, PPPoE ve FreeRADIUS için açık kaynaklı faturalama.',
      learn: 'Öğren', community: 'Topluluk', project: 'Proje',
      documentation: 'Belgeler', install: 'Kurulum kılavuzu', build: 'Eklenti geliştir',
      forum: 'Forum', telegram: 'Telegram', facebook: 'Facebook grubu', demo: 'Canlı demo', extensions: 'Eklentiler', releaseNotes: 'Sürüm notları', discussions: 'Tartışmalar', github: 'GitHub', starter: 'Eklenti başlangıç paketi', changelog: 'Değişiklik günlüğü',
      copyright: '© {year} PHPNuxBill. GNU GPL altında özgür yazılım.',
      license: 'Lisans',
    },
    slider: { paid: 'Ücretli', free: 'Ücretsiz', by: 'yazan', view: 'Görüntüle', buy: 'Satın al', back: 'Geri kaydır', forward: 'İleri kaydır', pause: 'Duraklat', play: 'Oynat', unknownAuthor: 'bilinmiyor' },
    contributors: { label: 'Kod katkıcıları', authors: 'Eklenti yazarları:', authorsAfter: 'Her biri yukarıdaki depodan bir eklenti, ödeme geçidi veya sürücü yazdı ve paylaşıyor.' },
  },
};
