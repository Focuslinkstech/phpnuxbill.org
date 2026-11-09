// Copy for the pages added after the landing page: demo and download links, FAQ, the extensions directory, release notes, and the 404.
import type { Lang } from './index';

export interface Pages {
  demo: { hero: string };
  demoPage: {
    title: string; description: string; intro: string;
    adminTitle: string; adminText: string; adminOpen: string;
    customerTitle: string; customerText: string; customerOpen: string;
    address: string; username: string; password: string; copy: string; copied: string; copyManual: string; newTab: string;
    noticeTitle: string; noticeText: string; install: string;
  };
  download: { label: string; latest: string; notes: string };
  faq: { title: string; text: string; items: [string, string][] };
  extensions: {
    title: string; description: string; intro: string; search: string; type: string; price: string;
    all: string; plugins: string; gateways: string; devices: string; free: string; paid: string;
    count: string; none: string; by: string; view: string; buy: string; updated: string; empty: string; pagination: string; prev: string; next: string; page: string;
  };
  changelog: { title: string; description: string; intro: string; full: string };
  notFound: { title: string; text: string; home: string; docs: string };
  support: {
    title: string; description: string; intro: string;
    freeTitle: string; freeText: string;
    paidTitle: string; price: string; paidText: string; includesTitle: string; includes: string[]; by: string;
    contactTitle: string; contactText: string; contact: string; learnMore: string; sponsorTitle: string; sponsorText: string;
  };
}

export const pages: Record<Lang, Pages> = {
  en: {
    demo: { hero: 'Try the live demo' },
    demoPage: { title: 'Live demo', description: 'Try the PHPNuxBill admin panel and customer portal with a ready-made login, without installing anything.', intro: 'See PHPNuxBill working before you install it. There are two sides to try: the admin panel, which is what you run your business from, and the customer portal, which is what your subscribers see. Pick one, copy the login and open it.', adminTitle: 'Admin panel', adminText: 'For whoever runs the service: customers, plans, routers, vouchers, payments and reports.', adminOpen: 'Open the admin panel', customerTitle: 'Customer portal', customerText: 'What a subscriber sees: their plan and balance, buying or renewing a plan, redeeming a voucher and their payment history.', customerOpen: 'Open the customer portal', address: 'Address', username: 'Username', password: 'Password', copy: 'Copy', copied: 'Copied', copyManual: 'Could not copy automatically. The text is selected: press Ctrl+C (Cmd+C on a Mac).', newTab: 'Open in a new tab', noticeTitle: 'Shared demo', noticeText: 'Everyone uses the same demo, so what you see may have been changed by someone else, and it can be reset at any time. Do not enter real personal details or payment information.', install: 'Install your own copy' },
    download: { label: 'Download', latest: 'Latest release: {v}', notes: 'Release notes' },
    faq: {
      title: 'Questions people ask first',
      text: "Not here? Ask on the forum or in one of the community groups. People answer for free.",
      items: [
        ['Is PHPNuxBill free?', 'Yes. It is free software under the GNU General Public License, version 2 or later. Some extensions in the Marketplace are paid, but the core is not.'],
        ['What do I need to run it?', 'A web host with PHP 8.2 or newer and MySQL, and either a Mikrotik router or a FreeRADIUS server. An ordinary shared host or a Raspberry Pi is enough.'],
        ['Does it work with FreeRADIUS?', 'Yes. Pick a RADIUS device type on each plan, or use the built-in REST endpoint so FreeRADIUS needs no direct database access.'],
        ['How do customers pay?', 'With the payment gateways you install from the Marketplace, with vouchers you generate and sell, or from a balance they top up and that renews their plan automatically.'],
        ['Can I use more than one router?', 'Yes. Add as many Mikrotik routers as you run, and choose a router for each plan.'],
        ['Can I change how it looks or add features?', 'Yes. Plugins, themes, payment gateways and device drivers live in their own folders and install from the Marketplace, so updating the core does not overwrite them.'],
        ['What ends a customer’s plan on time?', 'A cron job. Without it, customers stay online after their plan ends, so set it up right after installing.'],
        ['Where do I get help?', 'The forum, the Telegram group, the Facebook group and GitHub Discussions. All are free and community run. If you would rather have hands-on help, paid support starts from 100 USD.'],
      ],
    },
    extensions: {
      title: 'Extensions', description: 'Every plugin, payment gateway and device driver in the official PHPNuxBill repository.',
      intro: 'Everything in the official repository, the same list the Marketplace inside PHPNuxBill shows. Install any of them from the admin panel.',
      search: 'Search extensions…', type: 'Type', price: 'Price', all: 'All', plugins: 'Plugins', gateways: 'Payment gateways', devices: 'Device drivers',
      free: 'Free', paid: 'Paid', count: '{n} shown', none: 'Nothing matches. Try fewer words, or clear the filters.', by: 'by', view: 'View', buy: 'Buy', updated: 'Updated', empty: 'No description.', pagination: 'Pages', prev: 'Previous', next: 'Next', page: 'Page {n}',
    },
    changelog: { title: 'Release notes', description: 'What changed in each PHPNuxBill release.', intro: 'What changed in each release. Newest first.', full: 'Full changelog on GitHub' },
    notFound: { title: 'Page not found', text: 'That address does not lead anywhere. It may have moved, or the link may have a typo.', home: 'Go to the home page', docs: 'Open the documentation' },
    support: {
      title: "Support",
      description: "Free community help, and paid support from 100 USD.",
      intro: "Most questions are answered for free by the community. If you would rather have someone do it with you, or for you, paid support is available.",
      freeTitle: "Free help",
      freeText: "Ask in any of these. People answer for free, and your question helps the next person who searches for it.",
      paidTitle: "Paid support",
      price: "From 100 USD",
      paidText: "Hands-on help from the project owner and maintainer. The price starts at 100 USD, and the exact amount depends on the work, so tell us what you need to get a price for your job.",
      includesTitle: "Examples of what it can cover",
      includes: ["Installing PHPNuxBill and connecting your Mikrotik routers or FreeRADIUS", "Setting up plans, vouchers and payment gateways", "Upgrading an existing installation", "Finding and fixing a problem you cannot solve yourself", "Custom plugins, payment gateways or themes"],
      by: "Offered by Ibnux, the project owner.",
      contactTitle: "How to ask",
      contactText: "Message us on Telegram and tell us what you want to do, your PHPNuxBill and PHP versions, and what you have already tried. Never send passwords or API keys in the first message.",
      contact: "Contact on Telegram",
      learnMore: "Paid support from 100 USD",
      sponsorTitle: "Support the project",
      sponsorText: "PHPNuxBill is free and is kept going by its maintainers. If it earns you money, a donation helps pay for the time that goes into it.",
    },
  },
  id: {
    demo: { hero: 'Coba demo langsung' },
    demoPage: { title: 'Demo langsung', description: 'Coba panel admin dan portal pelanggan PHPNuxBill dengan akun siap pakai, tanpa memasang apa pun.', intro: 'Lihat PHPNuxBill bekerja sebelum Anda memasangnya. Ada dua sisi yang bisa dicoba: panel admin, tempat Anda menjalankan usaha, dan portal pelanggan, yang dilihat pelanggan Anda. Pilih salah satu, salin akunnya, lalu buka.', adminTitle: 'Panel admin', adminText: 'Untuk pengelola layanan: pelanggan, paket, router, voucher, pembayaran, dan laporan.', adminOpen: 'Buka panel admin', customerTitle: 'Portal pelanggan', customerText: 'Yang dilihat pelanggan: paket dan saldo mereka, membeli atau memperpanjang paket, menukar voucher, dan riwayat pembayaran.', customerOpen: 'Buka portal pelanggan', address: 'Alamat', username: 'Nama pengguna', password: 'Kata sandi', copy: 'Salin', copied: 'Tersalin', copyManual: 'Tidak bisa menyalin otomatis. Teks sudah terpilih: tekan Ctrl+C (Cmd+C di Mac).', newTab: 'Buka di tab baru', noticeTitle: 'Demo bersama', noticeText: 'Semua orang memakai demo yang sama, jadi yang Anda lihat mungkin sudah diubah orang lain, dan demo dapat direset kapan saja. Jangan memasukkan data pribadi atau informasi pembayaran yang sebenarnya.', install: 'Pasang salinan Anda sendiri' },
    download: { label: 'Unduh', latest: 'Rilis terbaru: {v}', notes: 'Catatan rilis' },
    faq: {
      title: 'Pertanyaan yang paling sering diajukan',
      text: 'Tidak ada di sini? Tanyakan di forum atau grup komunitas. Orang-orang menjawab secara gratis.',
      items: [
        ['Apakah PHPNuxBill gratis?', 'Ya. Ini perangkat lunak bebas di bawah GNU General Public License versi 2 atau yang lebih baru. Beberapa ekstensi di Marketplace berbayar, tetapi intinya tidak.'],
        ['Apa yang saya butuhkan untuk menjalankannya?', 'Hosting web dengan PHP 8.2 atau lebih baru dan MySQL, serta router Mikrotik atau server FreeRADIUS. Shared hosting biasa atau Raspberry Pi sudah cukup.'],
        ['Apakah bisa dipakai dengan FreeRADIUS?', 'Bisa. Pilih jenis perangkat RADIUS pada tiap paket, atau gunakan endpoint REST bawaan sehingga FreeRADIUS tidak perlu akses langsung ke database.'],
        ['Bagaimana pelanggan membayar?', 'Lewat payment gateway yang Anda pasang dari Marketplace, voucher yang Anda buat dan jual, atau saldo yang mereka isi dan memperpanjang paket secara otomatis.'],
        ['Bisakah memakai lebih dari satu router?', 'Bisa. Tambahkan router Mikrotik sebanyak yang Anda punya, lalu pilih router untuk tiap paket.'],
        ['Bisakah mengubah tampilan atau menambah fitur?', 'Bisa. Plugin, tema, payment gateway, dan driver perangkat berada di folder masing-masing dan dipasang dari Marketplace, sehingga memperbarui inti tidak menimpanya.'],
        ['Apa yang mengakhiri paket pelanggan tepat waktu?', 'Sebuah cron job. Tanpanya pelanggan tetap online setelah paketnya berakhir, jadi atur segera setelah instalasi.'],
        ['Ke mana saya meminta bantuan?', 'Forum, grup Telegram, grup Facebook, dan GitHub Discussions. Semuanya gratis dan dikelola komunitas. Jika Anda ingin bantuan langsung, dukungan berbayar mulai dari 100 USD.'],
      ],
    },
    extensions: {
      title: 'Ekstensi', description: 'Semua plugin, payment gateway, dan driver perangkat di repositori resmi PHPNuxBill.',
      intro: 'Semua yang ada di repositori resmi, daftar yang sama dengan yang ditampilkan Marketplace di dalam PHPNuxBill. Pasang dari panel admin.',
      search: 'Cari ekstensi…', type: 'Jenis', price: 'Harga', all: 'Semua', plugins: 'Plugin', gateways: 'Payment gateway', devices: 'Driver perangkat',
      free: 'Gratis', paid: 'Berbayar', count: '{n} ditampilkan', none: 'Tidak ada yang cocok. Coba kata yang lebih sedikit, atau hapus filter.', by: 'oleh', view: 'Lihat', buy: 'Beli', updated: 'Diperbarui', empty: 'Tanpa deskripsi.', pagination: 'Halaman', prev: 'Sebelumnya', next: 'Berikutnya', page: 'Halaman {n}',
    },
    changelog: { title: 'Catatan rilis', description: 'Apa yang berubah di setiap rilis PHPNuxBill.', intro: 'Apa yang berubah di setiap rilis. Terbaru di atas.', full: 'Changelog lengkap di GitHub' },
    notFound: { title: 'Halaman tidak ditemukan', text: 'Alamat itu tidak mengarah ke mana pun. Mungkin sudah pindah, atau tautannya salah ketik.', home: 'Ke beranda', docs: 'Buka dokumentasi' },
    support: {
      title: "Dukungan",
      description: "Bantuan komunitas gratis, dan dukungan berbayar mulai 100 USD.",
      intro: "Sebagian besar pertanyaan dijawab gratis oleh komunitas. Jika Anda lebih suka ada yang mengerjakannya bersama atau untuk Anda, tersedia dukungan berbayar.",
      freeTitle: "Bantuan gratis",
      freeText: "Bertanyalah di salah satunya. Orang-orang menjawab gratis, dan pertanyaan Anda membantu orang berikutnya yang mencarinya.",
      paidTitle: "Dukungan berbayar",
      price: "Mulai 100 USD",
      paidText: "Bantuan langsung dari pemilik dan pengelola proyek. Harga mulai dari 100 USD, dan jumlah pastinya tergantung pekerjaannya, jadi sampaikan kebutuhan Anda untuk mendapat harga.",
      includesTitle: "Contoh yang bisa dicakup",
      includes: ["Memasang PHPNuxBill dan menghubungkan router Mikrotik atau FreeRADIUS", "Menyiapkan paket, voucher, dan payment gateway", "Memperbarui instalasi yang sudah ada", "Mencari dan memperbaiki masalah yang tidak bisa Anda atasi sendiri", "Plugin, payment gateway, atau tema khusus"],
      by: "Ditawarkan oleh Ibnux, pemilik proyek.",
      contactTitle: "Cara meminta",
      contactText: "Kirim pesan di Telegram dan sampaikan apa yang ingin Anda lakukan, versi PHPNuxBill dan PHP Anda, serta apa yang sudah Anda coba. Jangan kirim kata sandi atau kunci API di pesan pertama.",
      contact: "Hubungi lewat Telegram",
      learnMore: "Dukungan berbayar mulai 100 USD",
      sponsorTitle: "Dukung proyek ini",
      sponsorText: "PHPNuxBill gratis dan terus dikembangkan oleh para pemeliharanya. Jika PHPNuxBill membantu Anda menghasilkan uang, donasi membantu membayar waktu yang dicurahkan untuknya.",
    },
  },
  es: {
    demo: { hero: 'Prueba la demo en vivo' },
    demoPage: { title: 'Demo en vivo', description: 'Prueba el panel de administración y el portal de clientes de PHPNuxBill con un acceso ya preparado, sin instalar nada.', intro: 'Mira PHPNuxBill funcionando antes de instalarlo. Hay dos lados que probar: el panel de administración, desde donde diriges tu negocio, y el portal de clientes, que es lo que ven tus abonados. Elige uno, copia el acceso y ábrelo.', adminTitle: 'Panel de administración', adminText: 'Para quien dirige el servicio: clientes, planes, routers, vouchers, pagos e informes.', adminOpen: 'Abrir el panel de administración', customerTitle: 'Portal de clientes', customerText: 'Lo que ve un abonado: su plan y su saldo, comprar o renovar un plan, canjear un voucher y su historial de pagos.', customerOpen: 'Abrir el portal de clientes', address: 'Dirección', username: 'Usuario', password: 'Contraseña', copy: 'Copiar', copied: 'Copiado', copyManual: 'No se pudo copiar automáticamente. El texto está seleccionado: pulsa Ctrl+C (Cmd+C en Mac).', newTab: 'Abrir en una pestaña nueva', noticeTitle: 'Demo compartida', noticeText: 'Todos usan la misma demo, así que lo que veas puede haber sido cambiado por otra persona, y puede restablecerse en cualquier momento. No introduzcas datos personales ni información de pago reales.', install: 'Instala tu propia copia' },
    download: { label: 'Descargar', latest: 'Última versión: {v}', notes: 'Notas de la versión' },
    faq: {
      title: 'Las preguntas que más se hacen',
      text: '¿No está aquí? Pregunta en el foro o en uno de los grupos de la comunidad. La gente responde gratis.',
      items: [
        ['¿PHPNuxBill es gratis?', 'Sí. Es software libre bajo la Licencia Pública General de GNU, versión 2 o posterior. Algunas extensiones del Marketplace son de pago, pero el núcleo no.'],
        ['¿Qué necesito para ejecutarlo?', 'Un hosting web con PHP 8.2 o superior y MySQL, y un router Mikrotik o un servidor FreeRADIUS. Un hosting compartido normal o una Raspberry Pi bastan.'],
        ['¿Funciona con FreeRADIUS?', 'Sí. Elige un tipo de dispositivo RADIUS en cada plan, o usa el endpoint REST integrado para que FreeRADIUS no necesite acceso directo a la base de datos.'],
        ['¿Cómo pagan los clientes?', 'Con las pasarelas de pago que instalas desde el Marketplace, con vouchers que generas y vendes, o con un saldo que recargan y que renueva su plan automáticamente.'],
        ['¿Puedo usar más de un router?', 'Sí. Añade tantos routers Mikrotik como tengas y elige un router para cada plan.'],
        ['¿Puedo cambiar su aspecto o añadir funciones?', 'Sí. Los plugins, temas, pasarelas de pago y controladores de dispositivo viven en sus propias carpetas y se instalan desde el Marketplace, así que actualizar el núcleo no los sobrescribe.'],
        ['¿Qué termina el plan de un cliente a tiempo?', 'Una tarea cron. Sin ella, los clientes siguen conectados cuando termina su plan, así que configúrala justo después de instalar.'],
        ['¿Dónde consigo ayuda?', 'El foro, el grupo de Telegram, el grupo de Facebook y GitHub Discussions. Todos son gratuitos y los lleva la comunidad. Si prefieres ayuda directa, el soporte de pago empieza en 100 USD.'],
      ],
    },
    extensions: {
      title: 'Extensiones', description: 'Todos los plugins, pasarelas de pago y controladores de dispositivo del repositorio oficial de PHPNuxBill.',
      intro: 'Todo lo que hay en el repositorio oficial, la misma lista que muestra el Marketplace dentro de PHPNuxBill. Instala cualquiera desde el panel de administración.',
      search: 'Buscar extensiones…', type: 'Tipo', price: 'Precio', all: 'Todas', plugins: 'Plugins', gateways: 'Pasarelas de pago', devices: 'Controladores de dispositivo',
      free: 'Gratis', paid: 'De pago', count: '{n} mostradas', none: 'Nada coincide. Prueba con menos palabras o quita los filtros.', by: 'de', view: 'Ver', buy: 'Comprar', updated: 'Actualizado', empty: 'Sin descripción.', pagination: 'Paginación', prev: 'Anterior', next: 'Siguiente', page: 'Página {n}',
    },
    changelog: { title: 'Notas de la versión', description: 'Qué cambió en cada versión de PHPNuxBill.', intro: 'Qué cambió en cada versión. Lo más reciente primero.', full: 'Registro de cambios completo en GitHub' },
    notFound: { title: 'Página no encontrada', text: 'Esa dirección no lleva a ningún sitio. Puede que se haya movido o que el enlace tenga un error.', home: 'Ir al inicio', docs: 'Abrir la documentación' },
    support: {
      title: "Soporte",
      description: "Ayuda gratuita de la comunidad y soporte de pago desde 100 USD.",
      intro: "La comunidad responde gratis la mayoría de las preguntas. Si prefieres que alguien lo haga contigo, o por ti, hay soporte de pago.",
      freeTitle: "Ayuda gratuita",
      freeText: "Pregunta en cualquiera de estos sitios. La gente responde gratis y tu pregunta ayuda a la siguiente persona que la busque.",
      paidTitle: "Soporte de pago",
      price: "Desde 100 USD",
      paidText: "Ayuda directa del propietario y mantenedor del proyecto. El precio empieza en 100 USD y el importe exacto depende del trabajo, así que cuéntanos lo que necesitas para recibir un precio.",
      includesTitle: "Ejemplos de lo que puede cubrir",
      includes: ["Instalar PHPNuxBill y conectar tus routers Mikrotik o FreeRADIUS", "Configurar planes, vouchers y pasarelas de pago", "Actualizar una instalación existente", "Encontrar y resolver un problema que no puedes solucionar tú", "Plugins, pasarelas de pago o temas a medida"],
      by: "Lo ofrece Ibnux, el propietario del proyecto.",
      contactTitle: "Cómo pedirlo",
      contactText: "Escríbenos por Telegram y cuéntanos qué quieres hacer, tus versiones de PHPNuxBill y PHP, y lo que ya has probado. No envíes contraseñas ni claves de API en el primer mensaje.",
      contact: "Contactar por Telegram",
      learnMore: "Soporte de pago desde 100 USD",
      sponsorTitle: "Apoya el proyecto",
      sponsorText: "PHPNuxBill es gratuito y lo mantienen sus responsables. Si te ayuda a ganar dinero, una donación ayuda a pagar el tiempo que se dedica a él.",
    },
  },
  ar: {
    demo: { hero: 'جرّب العرض التجريبي المباشر' },
    demoPage: { title: 'العرض التجريبي المباشر', description: 'جرّب لوحة الإدارة وبوابة العملاء في PHPNuxBill بحساب جاهز دون تثبيت أي شيء.', intro: 'شاهد PHPNuxBill وهو يعمل قبل تثبيته. هناك جانبان للتجربة: لوحة الإدارة التي تدير منها عملك، وبوابة العملاء التي يراها مشتركوك. اختر أحدهما، وانسخ بيانات الدخول ثم افتحه.', adminTitle: 'لوحة الإدارة', adminText: 'لمن يدير الخدمة: العملاء والباقات والموجّهات والقسائم والمدفوعات والتقارير.', adminOpen: 'افتح لوحة الإدارة', customerTitle: 'بوابة العملاء', customerText: 'ما يراه المشترك: باقته ورصيده، وشراء الباقة أو تجديدها، واستبدال القسيمة، وسجل مدفوعاته.', customerOpen: 'افتح بوابة العملاء', address: 'العنوان', username: 'اسم المستخدم', password: 'كلمة المرور', copy: 'نسخ', copied: 'تم النسخ', copyManual: 'تعذّر النسخ تلقائيًا. النص محدد: اضغط Ctrl+C (أو Cmd+C على ماك).', newTab: 'فتح في تبويب جديد', noticeTitle: 'عرض مشترك', noticeText: 'يستخدم الجميع العرض نفسه، لذلك قد يكون غيرك قد عدّل ما تراه، وقد تتم إعادة ضبطه في أي وقت. لا تُدخل بيانات شخصية أو معلومات دفع حقيقية.', install: 'ثبّت نسختك الخاصة' },
    download: { label: 'تنزيل', latest: 'آخر إصدار: {v}', notes: 'ملاحظات الإصدار' },
    faq: {
      title: 'الأسئلة التي تُطرح أولًا',
      text: 'لم تجد سؤالك؟ اسأل في المنتدى أو في إحدى مجموعات المجتمع. يجيب الناس مجانًا.',
      items: [
        ['هل PHPNuxBill مجاني؟', 'نعم. هو برنامج حر بموجب رخصة GNU العامة، الإصدار 2 أو أحدث. بعض الإضافات في المتجر مدفوعة، لكن النواة ليست كذلك.'],
        ['ماذا أحتاج لتشغيله؟', 'استضافة ويب بـ PHP 8.2 أو أحدث وMySQL، وإما راوتر Mikrotik أو خادم FreeRADIUS. تكفي استضافة مشتركة عادية أو Raspberry Pi.'],
        ['هل يعمل مع FreeRADIUS؟', 'نعم. اختر نوع جهاز RADIUS في كل باقة، أو استخدم نقطة REST المدمجة حتى لا يحتاج FreeRADIUS إلى وصول مباشر لقاعدة البيانات.'],
        ['كيف يدفع العملاء؟', 'عبر بوابات الدفع التي تثبتها من المتجر، أو بقسائم تنشئها وتبيعها، أو برصيد يشحنونه ويجدد باقتهم تلقائيًا.'],
        ['هل أستطيع استخدام أكثر من راوتر؟', 'نعم. أضف أي عدد من راوترات Mikrotik لديك واختر راوترًا لكل باقة.'],
        ['هل أستطيع تغيير المظهر أو إضافة مزايا؟', 'نعم. الإضافات والقوالب وبوابات الدفع ومشغّلات الأجهزة تعيش في مجلداتها وتُثبَّت من المتجر، فتحديث النواة لا يستبدلها.'],
        ['ما الذي يُنهي باقة العميل في وقتها؟', 'مهمة cron. بدونها يبقى العملاء متصلين بعد انتهاء باقاتهم، فأعدّها بعد التثبيت مباشرة.'],
        ['أين أجد المساعدة؟', 'المنتدى ومجموعة تيليغرام ومجموعة فيسبوك ونقاشات GitHub. كلها مجانية ويديرها المجتمع. وإن فضّلت مساعدة عملية، فالدعم المدفوع يبدأ من 100 دولار.'],
      ],
    },
    extensions: {
      title: 'الإضافات', description: 'كل الإضافات وبوابات الدفع ومشغّلات الأجهزة في مستودع PHPNuxBill الرسمي.',
      intro: 'كل ما في المستودع الرسمي، وهي القائمة نفسها التي يعرضها المتجر داخل PHPNuxBill. ثبّت أيًّا منها من لوحة الإدارة.',
      search: 'ابحث في الإضافات…', type: 'النوع', price: 'السعر', all: 'الكل', plugins: 'الإضافات', gateways: 'بوابات الدفع', devices: 'مشغّلات الأجهزة',
      free: 'مجاني', paid: 'مدفوع', count: 'المعروض: {n}', none: 'لا شيء مطابق. جرّب كلمات أقل أو امسح المرشّحات.', by: 'بواسطة', view: 'عرض', buy: 'شراء', updated: 'آخر تحديث', empty: 'لا يوجد وصف.', pagination: 'التنقل بين الصفحات', prev: 'السابق', next: 'التالي', page: 'الصفحة {n}',
    },
    changelog: { title: 'ملاحظات الإصدار', description: 'ما الذي تغيّر في كل إصدار من PHPNuxBill.', intro: 'ما الذي تغيّر في كل إصدار. الأحدث أولًا.', full: 'سجل التغييرات الكامل على GitHub' },
    notFound: { title: 'الصفحة غير موجودة', text: 'هذا العنوان لا يقود إلى أي مكان. ربما نُقل، أو أن في الرابط خطأً إملائيًا.', home: 'اذهب إلى الصفحة الرئيسية', docs: 'افتح التوثيق' },
    support: {
      title: "الدعم",
      description: "مساعدة مجانية من المجتمع، ودعم مدفوع يبدأ من 100 دولار.",
      intro: "يجيب المجتمع مجانًا على معظم الأسئلة. وإن كنت تفضّل أن يقوم أحد بالعمل معك أو نيابةً عنك، فالدعم المدفوع متاح.",
      freeTitle: "مساعدة مجانية",
      freeText: "اسأل في أي منها. يجيب الناس مجانًا، وسؤالك يفيد من يبحث عنه بعدك.",
      paidTitle: "دعم مدفوع",
      price: "يبدأ من 100 دولار",
      paidText: "مساعدة عملية من مالك المشروع ومشرفه. يبدأ السعر من 100 دولار أمريكي، ويعتمد المبلغ الدقيق على العمل، فأخبرنا بما تحتاجه لنحدد سعرًا لمهمتك.",
      includesTitle: "أمثلة على ما يمكن أن يغطيه",
      includes: ["تثبيت PHPNuxBill وربط راوترات Mikrotik أو FreeRADIUS", "إعداد الباقات والقسائم وبوابات الدفع", "ترقية تثبيت قائم", "العثور على مشكلة لا تستطيع حلّها وإصلاحها", "إضافات أو بوابات دفع أو قوالب مخصصة"],
      by: "يقدّمه Ibnux، مالك المشروع.",
      contactTitle: "كيف تطلب",
      contactText: "راسلنا على تيليغرام وأخبرنا بما تريد فعله، وبإصداري PHPNuxBill وPHP لديك، وما جرّبته بالفعل. لا ترسل كلمات مرور أو مفاتيح API في الرسالة الأولى.",
      contact: "تواصل عبر تيليغرام",
      learnMore: "دعم مدفوع يبدأ من 100 دولار",
      sponsorTitle: "ادعم المشروع",
      sponsorText: "PHPNuxBill مجاني ويواصل القائمون عليه تطويره. إذا ساعدك على كسب المال، فإن التبرع يساهم في تعويض الوقت الذي يُبذل فيه.",
    },
  },
  tr: {
    demo: { hero: 'Canlı demoyu deneyin' },
    demoPage: { title: 'Canlı demo', description: 'PHPNuxBill yönetim panelini ve müşteri portalını, hazır bir girişle, hiçbir şey kurmadan deneyin.', intro: 'PHPNuxBill’i kurmadan önce çalışırken görün. Denenecek iki taraf var: işinizi yönettiğiniz yönetim paneli ve abonelerinizin gördüğü müşteri portalı. Birini seçin, giriş bilgilerini kopyalayın ve açın.', adminTitle: 'Yönetim paneli', adminText: 'Hizmeti yönetenler için: müşteriler, paketler, yönlendiriciler, kuponlar, ödemeler ve raporlar.', adminOpen: 'Yönetim panelini aç', customerTitle: 'Müşteri portalı', customerText: 'Bir abonenin gördüğü: paketi ve bakiyesi, paket satın alma veya yenileme, kupon kullanma ve ödeme geçmişi.', customerOpen: 'Müşteri portalını aç', address: 'Adres', username: 'Kullanıcı adı', password: 'Parola', copy: 'Kopyala', copied: 'Kopyalandı', copyManual: 'Otomatik kopyalanamadı. Metin seçildi: Ctrl+C’ye basın (Mac’te Cmd+C).', newTab: 'Yeni sekmede aç', noticeTitle: 'Ortak demo', noticeText: 'Herkes aynı demoyu kullanır; gördüğünüz şeyi başkası değiştirmiş olabilir ve demo her an sıfırlanabilir. Gerçek kişisel bilgi veya ödeme bilgisi girmeyin.', install: 'Kendi kopyanızı kurun' },
    download: { label: 'İndir', latest: 'Son sürüm: {v}', notes: 'Sürüm notları' },
    faq: {
      title: 'İnsanların ilk sorduğu sorular',
      text: 'Burada yok mu? Forumda veya topluluk gruplarından birinde sorun. İnsanlar ücretsiz yanıtlar.',
      items: [
        ['PHPNuxBill ücretsiz mi?', 'Evet. GNU Genel Kamu Lisansı’nın 2. veya sonraki sürümü altında özgür yazılımdır. Marketplace’teki bazı eklentiler ücretlidir, ama çekirdek değildir.'],
        ['Çalıştırmak için neye ihtiyacım var?', 'PHP 8.2 veya üzeri ve MySQL olan bir web hostu ile bir Mikrotik router ya da FreeRADIUS sunucusu. Sıradan bir paylaşımlı hosting veya bir Raspberry Pi yeter.'],
        ['FreeRADIUS ile çalışıyor mu?', 'Evet. Her pakette bir RADIUS cihaz türü seçin ya da yerleşik REST uç noktasını kullanın; böylece FreeRADIUS’un veritabanına doğrudan erişmesi gerekmez.'],
        ['Müşteriler nasıl öder?', 'Marketplace’ten kurduğunuz ödeme geçitleriyle, ürettiğiniz ve sattığınız kuponlarla ya da yükledikleri ve paketlerini otomatik yenileyen bakiyeyle.'],
        ['Birden fazla router kullanabilir miyim?', 'Evet. Elinizdeki kadar Mikrotik router ekleyin ve her paket için bir router seçin.'],
        ['Görünümü değiştirebilir veya özellik ekleyebilir miyim?', 'Evet. Eklentiler, temalar, ödeme geçitleri ve cihaz sürücüleri kendi klasörlerinde durur ve Marketplace’ten kurulur; çekirdeği güncellemek bunları ezmez.'],
        ['Müşterinin paketini zamanında ne bitirir?', 'Bir cron görevi. Olmadan müşteriler paketleri bittikten sonra da çevrimiçi kalır; bu yüzden kurulumdan hemen sonra ayarlayın.'],
        ['Yardımı nereden alırım?', 'Forum, Telegram grubu, Facebook grubu ve GitHub Discussions. Hepsi ücretsizdir ve topluluk tarafından yürütülür. Uygulamalı yardım isterseniz ücretli destek 100 USD’den başlar.'],
      ],
    },
    extensions: {
      title: 'Eklentiler', description: 'Resmi PHPNuxBill deposundaki tüm eklentiler, ödeme geçitleri ve cihaz sürücüleri.',
      intro: 'Resmi depodaki her şey; PHPNuxBill içindeki Marketplace’in gösterdiği aynı liste. Hepsini yönetim panelinden kurabilirsiniz.',
      search: 'Eklenti ara…', type: 'Tür', price: 'Fiyat', all: 'Tümü', plugins: 'Eklentiler', gateways: 'Ödeme geçitleri', devices: 'Cihaz sürücüleri',
      free: 'Ücretsiz', paid: 'Ücretli', count: '{n} gösteriliyor', none: 'Eşleşen yok. Daha az kelime deneyin veya filtreleri temizleyin.', by: 'yazan', view: 'Görüntüle', buy: 'Satın al', updated: 'Güncellendi', empty: 'Açıklama yok.', pagination: 'Sayfalar', prev: 'Önceki', next: 'Sonraki', page: 'Sayfa {n}',
    },
    changelog: { title: 'Sürüm notları', description: 'Her PHPNuxBill sürümünde neler değişti.', intro: 'Her sürümde neler değişti. En yeni en üstte.', full: 'GitHub’da tam değişiklik günlüğü' },
    notFound: { title: 'Sayfa bulunamadı', text: 'Bu adres hiçbir yere çıkmıyor. Taşınmış olabilir ya da bağlantıda yazım hatası olabilir.', home: 'Ana sayfaya git', docs: 'Belgeleri aç' },
    support: {
      title: "Destek",
      description: "Ücretsiz topluluk yardımı ve 100 USD’den başlayan ücretli destek.",
      intro: "Soruların çoğu topluluk tarafından ücretsiz yanıtlanır. İşi biriyle birlikte ya da sizin yerinize yaptırmak isterseniz ücretli destek mevcuttur.",
      freeTitle: "Ücretsiz yardım",
      freeText: "Bunlardan herhangi birinde sorun. İnsanlar ücretsiz yanıtlar ve sorunuz, onu arayan bir sonraki kişiye yardımcı olur.",
      paidTitle: "Ücretli destek",
      price: "100 USD’den başlayan",
      paidText: "Proje sahibi ve bakımcısından uygulamalı yardım. Fiyat 100 USD’den başlar, kesin tutar işe bağlıdır; işiniz için fiyat almak için ihtiyacınızı bize anlatın.",
      includesTitle: "Kapsayabileceği örnekler",
      includes: ["PHPNuxBill kurulumu ve Mikrotik router veya FreeRADIUS bağlantısı", "Paketleri, kuponları ve ödeme geçitlerini kurma", "Mevcut bir kurulumu yükseltme", "Kendi başınıza çözemediğiniz bir sorunu bulup düzeltme", "Özel eklentiler, ödeme geçitleri veya temalar"],
      by: "Proje sahibi Ibnux tarafından sunulur.",
      contactTitle: "Nasıl istenir",
      contactText: "Telegram’dan yazın; ne yapmak istediğinizi, PHPNuxBill ve PHP sürümlerinizi ve zaten denediklerinizi anlatın. İlk mesajda parola veya API anahtarı göndermeyin.",
      contact: "Telegram’dan iletişime geç",
      learnMore: "100 USD’den başlayan ücretli destek",
      sponsorTitle: "Projeye destek olun",
      sponsorText: "PHPNuxBill ücretsizdir ve bakımcıları tarafından sürdürülür. Size para kazandırıyorsa, bağış ona harcanan zamanın karşılığına katkı sağlar.",
    },
  },
};
