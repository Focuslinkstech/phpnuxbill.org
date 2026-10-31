// Landing page copy per language. Placeholders: {plugins}, {gateways}, {devices}, {count} are filled in by the page.
import type { Lang } from './index';

export interface Landing {
  title: string;
  description: string;
  hero: { title: string; text: string; install: string; how: string; note: string };
  day: { title: string; steps: [string, string][] };
  manage: { title: string; text: string; link: string; items: [string, string][] };
  extend: { title: string; text: string; button: string };
  repository: { title: string; text: string; plugins: [string, string]; gateways: [string, string]; all: string };
  needs: { title: string; text: string; items: string[] };
  credits: { title: string; text: string; link: string };
  close: { title: string; text: string; install: string; forum: string; telegram: string; facebook: string; ask: string };
}

export const landing: Record<Lang, Landing> = {
  en: {
    title: 'PHPNuxBill: Open-source billing for Mikrotik Hotspot, PPPoE and FreeRADIUS',
    description: 'PHPNuxBill takes the payment, sets up the customer on your Mikrotik router, and switches them off when their time runs out. Free and open source.',
    hero: {
      title: 'Sell Wi-Fi access without a billing department',
      text: "PHPNuxBill takes the payment, sets up the customer on your Mikrotik router, and switches them off when their time runs out. It's free, open source, and runs on an ordinary web host.",
      install: 'Install it free', how: 'See how it works', note: 'Setup takes one browser page. No command line or build step.',
    },
    day: {
      title: 'What happens when someone wants to get online',
      steps: [
        ['Pick a plan and pay', 'A customer opens your portal on their phone, chooses a package and pays with a gateway you set up, or enters a voucher.'],
        ['Online in seconds', 'The system creates their account on your Mikrotik router or in FreeRADIUS. No one on your team touches a thing.'],
        ['Off when time is up', 'A scheduled job ends expired plans, renews the ones with balance, and sends reminders before it happens.'],
      ],
    },
    manage: {
      title: 'Everything the front office does, in one place',
      text: 'Run a small hotspot or a growing ISP from the same install. Add resellers and staff as you grow.',
      link: 'Read the introduction',
      items: [
        ['Plans and routers', 'Hotspot and PPPoE plans with speed, data and time limits, across as many Mikrotik routers as you run.'],
        ['Vouchers', 'Make up to 1000 unique voucher codes at a time with your own prefix, then print them or sell them online.'],
        ['Payments', 'Take payments through the gateways you install, and let customers top up a balance that renews plans automatically.'],
        ['Customers', 'Customers register themselves, see their history and buy again without asking you.'],
        ['Staff', 'Give each person a role: administrator, agent, sales, support or read-only reports. Each one gets their own menu.'],
        ['Messages', 'Send WhatsApp, SMS and email to customers, and get Telegram alerts yourself.'],
      ],
    },
    extend: {
      title: "Need something different? Add it, don't fork it",
      text: 'Add a payment gateway for your country, a driver for your equipment, a new admin page, or a theme in your brand colours. Each one lives in its own folder and installs from the built-in Marketplace, so updating the core never overwrites your work.',
      button: 'Build an extension',
    },
    repository: {
      title: 'Start with what others have already built',
      text: 'The Marketplace inside PHPNuxBill reads the official repository, which lists {plugins} plugins, {gateways} payment gateways and {devices} device drivers. Here are the newest.',
      plugins: ['Plugins', 'Monitoring, vouchers, SMS, reports and more.'],
      gateways: ['Payment gateways', 'Take payments in your country.'],
      all: 'View all {n} extensions',
    },
    needs: {
      title: 'A shared host or a Raspberry Pi is enough',
      text: "There is no container to build and no framework to learn. Upload the files, open the installer, and you're set. You need:",
      items: ['PHP 8.2 or newer', 'MySQL', 'The PDO, MySQLi, GD, cURL, ZIP and mbstring extensions', 'A Mikrotik router, or a FreeRADIUS server'],
    },
    credits: {
      title: 'Made by the people who use it',
      text: '{count} people have contributed code to PHPNuxBill, starting with its creator, ibnux, and its maintainer, Focuslinkstech. Thank you. Each face links to their GitHub profile.',
      link: 'See everyone on GitHub',
    },
    close: {
      title: 'Stuck? Ask. The community answers for free',
      text: "Start with the install guide. If something doesn't work, ask on the forum, in the Telegram group or on GitHub.",
      install: 'Read the install guide', forum: 'Visit the forum', telegram: 'Join the Telegram group', facebook: 'Join the Facebook group', ask: 'Ask on GitHub',
    },
  },

  id: {
    title: 'PHPNuxBill: Billing open source untuk Mikrotik Hotspot, PPPoE, dan FreeRADIUS',
    description: 'PHPNuxBill menerima pembayaran, menyiapkan pelanggan di router Mikrotik Anda, lalu menonaktifkan mereka saat waktunya habis. Gratis dan open source.',
    hero: {
      title: 'Jual akses Wi-Fi tanpa perlu bagian penagihan',
      text: 'PHPNuxBill menerima pembayaran, menyiapkan pelanggan di router Mikrotik Anda, dan memutus akses saat waktunya habis. Gratis, open source, dan berjalan di hosting web biasa.',
      install: 'Pasang gratis', how: 'Lihat cara kerjanya', note: 'Pemasangan cukup satu halaman browser. Tanpa command line atau proses build.',
    },
    day: {
      title: 'Yang terjadi saat seseorang ingin online',
      steps: [
        ['Pilih paket dan bayar', 'Pelanggan membuka portal Anda di ponsel, memilih paket, lalu membayar lewat gateway yang Anda siapkan, atau memasukkan voucher.'],
        ['Online dalam hitungan detik', 'Sistem membuat akun mereka di router Mikrotik atau FreeRADIUS. Tim Anda tidak perlu mengerjakan apa pun.'],
        ['Putus saat waktu habis', 'Tugas terjadwal mengakhiri paket kedaluwarsa, memperpanjang yang saldonya cukup, dan mengirim pengingat sebelumnya.'],
      ],
    },
    manage: {
      title: 'Semua pekerjaan kantor depan, di satu tempat',
      text: 'Jalankan hotspot kecil atau ISP yang sedang tumbuh dari satu instalasi. Tambahkan reseller dan staf seiring bisnis berkembang.',
      link: 'Baca pengantar',
      items: [
        ['Paket dan router', 'Paket Hotspot dan PPPoE dengan batas kecepatan, kuota, dan waktu, di sebanyak apa pun router Mikrotik Anda.'],
        ['Voucher', 'Buat hingga 1000 kode voucher unik sekaligus dengan prefiks pilihan Anda, lalu cetak atau jual online.'],
        ['Pembayaran', 'Terima pembayaran lewat gateway yang Anda pasang, dan biarkan pelanggan mengisi saldo yang memperpanjang paket otomatis.'],
        ['Pelanggan', 'Pelanggan mendaftar sendiri, melihat riwayat, dan membeli lagi tanpa harus menghubungi Anda.'],
        ['Staf', 'Beri setiap orang satu peran: administrator, agen, penjualan, dukungan, atau laporan saja. Masing-masing punya menu sendiri.'],
        ['Pesan', 'Kirim WhatsApp, SMS, dan email ke pelanggan, dan terima peringatan Telegram untuk Anda sendiri.'],
      ],
    },
    extend: {
      title: 'Butuh yang berbeda? Tambahkan, jangan fork',
      text: 'Tambahkan gateway pembayaran untuk negara Anda, driver untuk perangkat Anda, halaman admin baru, atau tema dengan warna merek Anda. Masing-masing berada di foldernya sendiri dan dipasang dari Marketplace bawaan, sehingga memperbarui inti tidak menimpa pekerjaan Anda.',
      button: 'Buat ekstensi',
    },
    repository: {
      title: 'Mulai dari yang sudah dibuat orang lain',
      text: 'Marketplace di dalam PHPNuxBill membaca repositori resmi, yang berisi {plugins} plugin, {gateways} gateway pembayaran, dan {devices} driver perangkat. Berikut yang terbaru.',
      plugins: ['Plugin', 'Pemantauan, voucher, SMS, laporan, dan lainnya.'],
      gateways: ['Gateway pembayaran', 'Terima pembayaran di negara Anda.'],
      all: 'Lihat semua {n} ekstensi',
    },
    needs: {
      title: 'Shared hosting atau Raspberry Pi sudah cukup',
      text: 'Tidak ada container yang harus dibangun dan tidak ada framework yang harus dipelajari. Unggah file, buka installer, selesai. Yang Anda butuhkan:',
      items: ['PHP 8.2 atau lebih baru', 'MySQL', 'Ekstensi PDO, MySQLi, GD, cURL, ZIP, dan mbstring', 'Router Mikrotik, atau server FreeRADIUS'],
    },
    credits: {
      title: 'Dibuat oleh orang-orang yang memakainya',
      text: '{count} orang telah berkontribusi kode untuk PHPNuxBill, dimulai dari penciptanya, ibnux, dan pengelolanya, Focuslinkstech. Terima kasih. Setiap wajah mengarah ke profil GitHub mereka.',
      link: 'Lihat semuanya di GitHub',
    },
    close: {
      title: 'Buntu? Tanyakan. Komunitas menjawab gratis',
      text: 'Mulai dari panduan instalasi. Jika ada yang tidak berjalan, tanyakan di forum, grup Telegram, atau GitHub.',
      install: 'Baca panduan instalasi', forum: 'Kunjungi forum', telegram: 'Gabung grup Telegram', facebook: 'Gabung grup Facebook', ask: 'Tanya di GitHub',
    },
  },

  es: {
    title: 'PHPNuxBill: facturación de código abierto para Mikrotik Hotspot, PPPoE y FreeRADIUS',
    description: 'PHPNuxBill cobra, configura al cliente en tu router Mikrotik y lo desconecta cuando se acaba su tiempo. Gratis y de código abierto.',
    hero: {
      title: 'Vende acceso Wi-Fi sin un departamento de facturación',
      text: 'PHPNuxBill cobra, configura al cliente en tu router Mikrotik y lo desconecta cuando se acaba su tiempo. Es gratis, de código abierto y funciona en un hosting web normal.',
      install: 'Instálalo gratis', how: 'Mira cómo funciona', note: 'La instalación es una sola página del navegador. Sin línea de comandos ni compilación.',
    },
    day: {
      title: 'Qué pasa cuando alguien quiere conectarse',
      steps: [
        ['Elige un plan y paga', 'El cliente abre tu portal en el teléfono, elige un paquete y paga con una pasarela que hayas configurado, o introduce un voucher.'],
        ['En línea en segundos', 'El sistema crea su cuenta en tu router Mikrotik o en FreeRADIUS. Nadie de tu equipo tiene que tocar nada.'],
        ['Se desconecta al acabar el tiempo', 'Una tarea programada termina los planes vencidos, renueva los que tienen saldo y envía recordatorios antes de que ocurra.'],
      ],
    },
    manage: {
      title: 'Todo lo que hace la oficina, en un solo lugar',
      text: 'Gestiona un hotspot pequeño o un ISP en crecimiento desde la misma instalación. Suma revendedores y personal a medida que creces.',
      link: 'Lee la introducción',
      items: [
        ['Planes y routers', 'Planes Hotspot y PPPoE con límites de velocidad, datos y tiempo, en tantos routers Mikrotik como tengas.'],
        ['Vouchers', 'Crea hasta 1000 códigos únicos a la vez con tu propio prefijo, y luego imprímelos o véndelos en línea.'],
        ['Pagos', 'Cobra con las pasarelas que instales y deja que los clientes recarguen un saldo que renueva los planes automáticamente.'],
        ['Clientes', 'Los clientes se registran solos, ven su historial y vuelven a comprar sin pedírtelo.'],
        ['Personal', 'Da a cada persona un rol: administrador, agente, ventas, soporte o solo informes. Cada uno tiene su propio menú.'],
        ['Mensajes', 'Envía WhatsApp, SMS y correo a los clientes, y recibe alertas por Telegram tú mismo.'],
      ],
    },
    extend: {
      title: '¿Necesitas algo distinto? Añádelo, no hagas un fork',
      text: 'Añade una pasarela de pago para tu país, un controlador para tu equipo, una página de administración nueva o un tema con los colores de tu marca. Cada uno vive en su propia carpeta y se instala desde el Marketplace integrado, así que actualizar el núcleo nunca sobrescribe tu trabajo.',
      button: 'Crea una extensión',
    },
    repository: {
      title: 'Empieza con lo que otros ya han creado',
      text: 'El Marketplace dentro de PHPNuxBill lee el repositorio oficial, que incluye {plugins} plugins, {gateways} pasarelas de pago y {devices} controladores de dispositivo. Estos son los más recientes.',
      plugins: ['Plugins', 'Monitorización, vouchers, SMS, informes y más.'],
      gateways: ['Pasarelas de pago', 'Cobra en tu país.'],
      all: 'Ver las {n} extensiones',
    },
    needs: {
      title: 'Un hosting compartido o una Raspberry Pi bastan',
      text: 'No hay contenedores que construir ni frameworks que aprender. Sube los archivos, abre el instalador y listo. Necesitas:',
      items: ['PHP 8.2 o superior', 'MySQL', 'Las extensiones PDO, MySQLi, GD, cURL, ZIP y mbstring', 'Un router Mikrotik o un servidor FreeRADIUS'],
    },
    credits: {
      title: 'Hecho por quienes lo usan',
      text: '{count} personas han aportado código a PHPNuxBill, empezando por su creador, ibnux, y su mantenedor, Focuslinkstech. Gracias. Cada rostro enlaza a su perfil de GitHub.',
      link: 'Ver a todos en GitHub',
    },
    close: {
      title: '¿Atascado? Pregunta. La comunidad responde gratis',
      text: 'Empieza por la guía de instalación. Si algo no funciona, pregunta en el foro, en el grupo de Telegram o en GitHub.',
      install: 'Lee la guía de instalación', forum: 'Visita el foro', telegram: 'Únete al grupo de Telegram', facebook: 'Únete al grupo de Facebook', ask: 'Pregunta en GitHub',
    },
  },

  ar: {
    title: 'PHPNuxBill: نظام فوترة مفتوح المصدر لـ Mikrotik Hotspot وPPPoE وFreeRADIUS',
    description: 'يستلم PHPNuxBill الدفعة، ويُعدّ العميل على راوتر Mikrotik الخاص بك، ويقطع اتصاله عند انتهاء وقته. مجاني ومفتوح المصدر.',
    hero: {
      title: 'بع خدمة الواي فاي بدون قسم فوترة',
      text: 'يستلم PHPNuxBill الدفعة، ويُعدّ العميل على راوتر Mikrotik الخاص بك، ويقطع اتصاله عند انتهاء وقته. إنه مجاني ومفتوح المصدر ويعمل على استضافة ويب عادية.',
      install: 'ثبّته مجانًا', how: 'شاهد كيف يعمل', note: 'التثبيت يتم من صفحة واحدة في المتصفح. بلا سطر أوامر ولا خطوة بناء.',
    },
    day: {
      title: 'ماذا يحدث عندما يريد شخص ما الاتصال بالإنترنت',
      steps: [
        ['يختار باقة ويدفع', 'يفتح العميل بوابتك على هاتفه، ويختار باقة، ويدفع عبر بوابة دفع أعددتها، أو يُدخل قسيمة.'],
        ['متصل خلال ثوانٍ', 'ينشئ النظام حسابه على راوتر Mikrotik أو في FreeRADIUS. لا يحتاج أحد من فريقك إلى فعل شيء.'],
        ['ينقطع عند انتهاء الوقت', 'مهمة مجدولة تُنهي الباقات المنتهية، وتجدد التي لديها رصيد، وترسل تذكيرات قبل ذلك.'],
      ],
    },
    manage: {
      title: 'كل ما يقوم به المكتب الأمامي في مكان واحد',
      text: 'شغّل هوت سبوت صغيرًا أو مزوّد خدمة إنترنت ينمو من تثبيت واحد. أضف موزّعين وموظفين مع نموّك.',
      link: 'اقرأ المقدمة',
      items: [
        ['الباقات والراوترات', 'باقات Hotspot وPPPoE بحدود للسرعة والبيانات والوقت، على أي عدد من راوترات Mikrotik.'],
        ['القسائم', 'أنشئ حتى 1000 رمز قسيمة فريد دفعة واحدة ببادئة من اختيارك، ثم اطبعها أو بعها عبر الإنترنت.'],
        ['المدفوعات', 'استقبل المدفوعات عبر البوابات التي تثبتها، ودع العملاء يشحنون رصيدًا يجدد الباقات تلقائيًا.'],
        ['العملاء', 'يسجّل العملاء بأنفسهم، ويرون سجلّهم، ويشترون مجددًا دون الرجوع إليك.'],
        ['الموظفون', 'امنح كل شخص دورًا: مدير، وكيل، مبيعات، دعم، أو تقارير للقراءة فقط. لكلٍّ قائمته الخاصة.'],
        ['الرسائل', 'أرسل رسائل واتساب وSMS وبريدًا إلكترونيًا للعملاء، واستلم تنبيهات تيليغرام بنفسك.'],
      ],
    },
    extend: {
      title: 'تحتاج شيئًا مختلفًا؟ أضفه ولا تنسخ المشروع',
      text: 'أضف بوابة دفع لبلدك، أو مشغّلًا لجهازك، أو صفحة إدارة جديدة، أو قالبًا بألوان علامتك. كل واحد منها في مجلده الخاص ويُثبَّت من المتجر المدمج، فتحديث النواة لا يمحو عملك أبدًا.',
      button: 'أنشئ إضافة',
    },
    repository: {
      title: 'ابدأ بما بناه الآخرون',
      text: 'يقرأ المتجر داخل PHPNuxBill المستودع الرسمي الذي يضم {plugins} إضافة و{gateways} بوابة دفع و{devices} مشغّل أجهزة. هذه أحدثها.',
      plugins: ['الإضافات', 'مراقبة وقسائم ورسائل SMS وتقارير وغيرها.'],
      gateways: ['بوابات الدفع', 'استقبل المدفوعات في بلدك.'],
      all: 'عرض كل الإضافات ({n})',
    },
    needs: {
      title: 'استضافة مشتركة أو Raspberry Pi تكفي',
      text: 'لا حاويات لبنائها ولا إطار عمل لتعلّمه. ارفع الملفات، افتح المثبّت، وانتهى الأمر. تحتاج إلى:',
      items: ['PHP 8.2 أو أحدث', 'MySQL', 'امتدادات PDO وMySQLi وGD وcURL وZIP وmbstring', 'راوتر Mikrotik أو خادم FreeRADIUS'],
    },
    credits: {
      title: 'صنعه من يستخدمونه',
      text: 'ساهم {count} شخصًا بالكود في PHPNuxBill، بدءًا من مبتكره ibnux ومشرفه Focuslinkstech. شكرًا لكم. كل وجه يقود إلى ملفه على GitHub.',
      link: 'شاهد الجميع على GitHub',
    },
    close: {
      title: 'عالق؟ اسأل. المجتمع يجيب مجانًا',
      text: 'ابدأ بدليل التثبيت. وإن لم يعمل شيء، اسأل في المنتدى أو في مجموعة تيليغرام أو على GitHub.',
      install: 'اقرأ دليل التثبيت', forum: 'زر المنتدى', telegram: 'انضم إلى مجموعة تيليغرام', facebook: 'انضم إلى مجموعة فيسبوك', ask: 'اسأل على GitHub',
    },
  },

  tr: {
    title: 'PHPNuxBill: Mikrotik Hotspot, PPPoE ve FreeRADIUS için açık kaynaklı faturalama',
    description: "PHPNuxBill ödemeyi alır, müşteriyi Mikrotik router'ınızda hazırlar ve süresi dolunca bağlantısını keser. Ücretsiz ve açık kaynak.",
    hero: {
      title: 'Faturalama departmanı olmadan Wi-Fi erişimi satın',
      text: "PHPNuxBill ödemeyi alır, müşteriyi Mikrotik router'ınızda hazırlar ve süresi dolunca bağlantısını keser. Ücretsiz, açık kaynaklı ve sıradan bir web hostunda çalışır.",
      install: 'Ücretsiz kur', how: 'Nasıl çalıştığını gör', note: 'Kurulum tek bir tarayıcı sayfasıdır. Komut satırı veya derleme adımı yok.',
    },
    day: {
      title: 'Biri internete bağlanmak istediğinde ne olur',
      steps: [
        ['Paketi seçer ve öder', 'Müşteri portalınızı telefonunda açar, bir paket seçer ve kurduğunuz ödeme geçidiyle öder ya da bir kupon girer.'],
        ['Saniyeler içinde çevrimiçi', "Sistem hesabını Mikrotik router'ınızda veya FreeRADIUS'ta oluşturur. Ekibinizden kimsenin bir şey yapması gerekmez."],
        ['Süre bitince kapanır', 'Zamanlanmış bir görev süresi dolan paketleri bitirir, bakiyesi olanları yeniler ve öncesinde hatırlatma gönderir.'],
      ],
    },
    manage: {
      title: 'Ön büronun yaptığı her şey, tek yerde',
      text: 'Küçük bir hotspotu ya da büyüyen bir ISS’yi aynı kurulumdan yönetin. Büyüdükçe bayi ve personel ekleyin.',
      link: 'Girişi okuyun',
      items: [
        ['Paketler ve router’lar', 'Hız, veri ve süre sınırlı Hotspot ve PPPoE paketleri, istediğiniz sayıda Mikrotik router üzerinde.'],
        ['Kuponlar', 'Kendi ön ekinizle tek seferde 1000’e kadar benzersiz kupon kodu üretin, sonra yazdırın veya çevrimiçi satın.'],
        ['Ödemeler', 'Kurduğunuz ödeme geçitleriyle ödeme alın ve müşterilerin paketleri otomatik yenileyen bakiye yüklemesine izin verin.'],
        ['Müşteriler', 'Müşteriler kendileri kayıt olur, geçmişlerini görür ve size sormadan tekrar satın alır.'],
        ['Personel', 'Her kişiye bir rol verin: yönetici, temsilci, satış, destek veya salt okunur raporlar. Her birinin kendi menüsü olur.'],
        ['Mesajlar', 'Müşterilere WhatsApp, SMS ve e-posta gönderin, kendiniz de Telegram uyarıları alın.'],
      ],
    },
    extend: {
      title: 'Farklı bir şey mi lazım? Fork etmeyin, ekleyin',
      text: 'Ülkeniz için bir ödeme geçidi, ekipmanınız için bir sürücü, yeni bir yönetim sayfası ya da marka renklerinizde bir tema ekleyin. Her biri kendi klasöründe durur ve yerleşik Marketplace’ten kurulur; çekirdeği güncellemek çalışmanızı asla ezmez.',
      button: 'Eklenti geliştir',
    },
    repository: {
      title: 'Başkalarının yaptıklarıyla başlayın',
      text: 'PHPNuxBill içindeki Marketplace, {plugins} eklenti, {gateways} ödeme geçidi ve {devices} cihaz sürücüsü listeleyen resmi depoyu okur. İşte en yenileri.',
      plugins: ['Eklentiler', 'İzleme, kuponlar, SMS, raporlar ve daha fazlası.'],
      gateways: ['Ödeme geçitleri', 'Ülkenizde ödeme alın.'],
      all: '{n} eklentinin tümünü gör',
    },
    needs: {
      title: 'Paylaşımlı hosting veya bir Raspberry Pi yeter',
      text: 'Derlenecek konteyner ya da öğrenilecek framework yok. Dosyaları yükleyin, kurulumu açın, bitti. İhtiyacınız olanlar:',
      items: ['PHP 8.2 veya üzeri', 'MySQL', 'PDO, MySQLi, GD, cURL, ZIP ve mbstring eklentileri', 'Bir Mikrotik router veya FreeRADIUS sunucusu'],
    },
    credits: {
      title: 'Onu kullananlar tarafından yapıldı',
      text: '{count} kişi PHPNuxBill’e kod katkısı verdi; yaratıcısı ibnux ve bakımcısı Focuslinkstech ile başlayarak. Teşekkürler. Her yüz GitHub profiline bağlanır.',
      link: 'Herkesi GitHub’da görün',
    },
    close: {
      title: 'Takıldınız mı? Sorun. Topluluk ücretsiz yanıtlar',
      text: 'Kurulum kılavuzuyla başlayın. Bir şey çalışmazsa forumda, Telegram grubunda veya GitHub’da sorun.',
      install: 'Kurulum kılavuzunu oku', forum: 'Foruma git', telegram: 'Telegram grubuna katıl', facebook: 'Facebook grubuna katıl', ask: 'GitHub’da sor',
    },
  },
};
