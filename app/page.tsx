import dynamic from "next/dynamic";
import Image from "next/image";
import PhoneImage from "@/components/PhoneImage";

const HeroBadge = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroBadge),
  {
    ssr: false,
    // Fallback: badge statis yang langsung terlihat sebelum JS dimuat
    loading: () => (
      <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3b82f6]/25 text-[#1d4ed8] text-[11px] font-semibold tracking-widest uppercase mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
        STC AutoTrade · Android &amp; Web · Stockity.id
      </div>
    ),
  }
);

const HeroHeading = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroHeading),
  {
    ssr: false,
    loading: () => (
      <>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-[40px] sm:text-[52px] lg:text-[58px] font-normal tracking-[-0.03em] leading-[1.08] mb-5">
          STC AutoTrade —<br />
          <span className="text-[#1d4ed8]">Robot Trading<br />Otomatis Stockity</span>
        </h1>
        <p className="text-[#6b6058] text-base sm:text-[17px] leading-relaxed mb-8 max-w-lg">
          <strong className="text-[#1a1612] font-semibold">STC AutoTrade</strong>{" "}
          (StcAutoTrade / StockAutoTrade) terhubung langsung ke akun Stockity.id Anda dan
          mengeksekusi strategi secara otomatis, konsisten, dan bebas bias emosional — 24 jam non-stop.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl no-underline">
            Download Aplikasi Android
          </a>
          <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#3b82f6]/35 bg-[#eff6ff] text-[#1d4ed8] text-sm font-semibold rounded-xl no-underline">
            Buka Versi Web
          </a>
        </div>
      </>
    ),
  }
);

/* HeroPhoneFloat dihapus — diganti CSS animate-float langsung di JSX
   agar PhoneImage hero di-render oleh Server Component sejak HTML pertama.
   Ini memperbaiki bug LCP di mana priority image tidak pernah di-preload. */

const HeroStatBar = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroStatBar),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[rgba(26,22,18,0.08)] border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden mt-14 max-w-2xl shadow-sm">
        {[
          { n: "6",    l: "Mode Strategi" },
          { n: "2",    l: "Platform (APK & Web)" },
          { n: "24/7", l: "Bot Aktif" },
          { n: "4.9★", l: "Rating Pengguna" },
        ].map((s) => (
          <div key={s.l} className="py-5 px-4 bg-white text-center">
            <div className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1d4ed8] leading-none mb-1.5">{s.n}</div>
            <div className="text-[11px] text-[#1a1612]/35 leading-tight">{s.l}</div>
          </div>
        ))}
      </div>
    ),
  }
);

const FadeUp = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.FadeUp),
  { ssr: true, loading: () => null }  /* SSR:true — HTML konten ada untuk crawler */
);

const StaggerView = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.StaggerView),
  { ssr: true, loading: () => null }  /* SSR:true — HTML konten ada untuk crawler */
);

const FadeItem = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.FadeItem),
  { ssr: true, loading: () => null }  /* SSR:true — HTML konten ada untuk crawler */
);

const FAQItem = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.FAQItem),
  { ssr: true, loading: () => null }  /* SSR:true — HTML konten ada untuk crawler */
);

const HambatanSection = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HambatanSection),
  { ssr: false,
    loading: () => (
      /* Fallback statis — terindeks Googlebot, digantikan versi animasi setelah JS */
      <div className="flex flex-col gap-3">
        {[
          { t: "Tidak bisa pantau pasar terus-menerus", d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
          { t: "Keputusan dipengaruhi emosi", d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
          { t: "Analisis teknikal terasa rumit", d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
          { t: "Tidak ada disiplin manajemen modal", d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
        ].map((item) => (
          <div key={item.t} className="flex gap-4 p-5 bg-[#f8fafc] border border-[rgba(26,22,18,0.08)] rounded-xl">
            <div className="w-7 h-7 mt-0.5 flex-shrink-0 rounded bg-[#3b82f6]/20" />
            <div>
              <p className="text-[15px] font-semibold mb-1.5 text-[#1a1612]">{item.t}</p>
              <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }
);

const RiskCards = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.RiskCards),
  { ssr: false,
    loading: () => (
      /* Fallback statis — terindeks Googlebot, digantikan versi animasi setelah JS */
      <div className="flex flex-col gap-3">
        {[
          { title: "Stop Loss Otomatis", desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
          { title: "Stop Profit Otomatis", desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
          { title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya. Langkah dan kelipatan Anda atur sendiri." },
          { title: "Pengaturan Tersimpan", desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
          { title: "Riwayat Trading Lengkap", desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale. Data lengkap untuk evaluasi strategi." },
        ].map((r) => (
          <div key={r.title} className="flex gap-4 p-5 bg-white border border-[rgba(26,22,18,0.08)] rounded-xl">
            <div className="w-7 h-7 mt-0.5 flex-shrink-0 rounded bg-[#3b82f6]/20" />
            <div>
              <p className="text-sm font-semibold mb-1.5 text-[#1a1612]">{r.title}</p>
              <p className="text-[13px] text-[#6b6058] leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }
);

/* ── Data (tetap di server — tidak perlu di client) ────────────── */

const MODES = [
  { tag: "Schedule",  color: "text-blue-700 bg-blue-50 border border-blue-100",        title: "Trading Terjadwal",           desc: "Jadwalkan order berdasarkan pola historis. Bot eksekusi tepat waktu — bahkan saat Anda tidur.",                                                              for: "Trader dengan data historis teratur" },
  { tag: "Fastrade",  color: "text-emerald-700 bg-emerald-50 border border-emerald-100", title: "Trading Cepat",              desc: "Bot membaca momentum pasar pada timeframe 1m–1h dan mengeksekusi order mengikuti arah yang terdeteksi.",                                                  for: "Trader aktif yang suka banyak order" },
  { tag: "CTC",       color: "text-violet-700 bg-violet-50 border border-violet-100",   title: "Copy Trading",               desc: "Tidak perlu analisis sendiri. Bot mengikuti sinyal sumber terpercaya dan eksekusi real-time di akun Anda.",                                              for: "Pemula yang ingin belajar bertahap" },
  { tag: "AI Signal", color: "text-rose-700 bg-rose-50 border border-rose-100",         title: "Sinyal Kecerdasan Buatan",   desc: "Algoritma AI menganalisis pasar secara real-time, mengidentifikasi pola, dan menghasilkan sinyal UP/DOWN otomatis.",                                    for: "Trader yang ingin keputusan berbasis data" },
  { tag: "Indicator", color: "text-amber-700 bg-amber-50 border border-amber-100",      title: "Indikator Teknikal",         desc: "Bot membaca SMA, EMA, dan RSI — indikator klasik trader profesional — untuk menentukan waktu entry terbaik.",                                            for: "Trader dengan dasar analisis teknikal" },
  { tag: "Momentum",  color: "text-orange-700 bg-orange-50 border border-orange-100",   title: "Pola Candlestick",           desc: "Bot mengenali Candle Sabit, Doji Terjepit, dan BB SAR Break yang sering mendahului pergerakan harga signifikan.",                                        for: "Trader yang memahami price action" },
];

const STEPS = [
  { n: "01", title: "Pilih platform Anda",        desc: "Download APK untuk Android, atau buka langsung di browser via stcautotradepro.id — tanpa instal, siap di perangkat apapun termasuk PC, laptop, dan iPhone." },
  { n: "02", title: "Daftar akun baru",           desc: "Belum punya akun? Daftar akun harus melalui aplikasi STC AutoTrade — prosesnya cepat dan gratis, tanpa perlu berpindah ke aplikasi lain." },
  { n: "03", title: "Login dengan akun Stockity", desc: "Masuk menggunakan email dan password akun Stockity.id yang telah dibuat. Selamat, sudah bisa menggunakan STC AutoTrade!" },
  { n: "04", title: "Mulai dari mode demo",       desc: "Jangan terburu ke mode real. Gunakan demo minimal 7 hari untuk memahami strategi dan memvalidasi pengaturan Anda tanpa risiko finansial." },
  { n: "05", title: "Beralih ke mode real",       desc: "Setelah strategi teruji, mulai dengan nominal kecil. Tingkatkan bertahap seiring pertumbuhan kepercayaan diri Anda." },
];

const FAQS = [
  { q: "Apa itu STC AutoTrade / StcAutoTrade?",                          a: "STC AutoTrade — juga dikenal sebagai StcAutoTrade, StockAutoTrade, Robot Stockity, atau Auto Stockity — adalah bot trading otomatis untuk platform Stockity.id. Tersedia sebagai APK Android maupun versi web di stcautotradepro.id." },
  { q: "Apa bedanya versi APK Android dan versi web?",                    a: "Versi APK diinstal di perangkat Android dan bisa berjalan di background. Versi web (stcautotradepro.id) tidak perlu instalasi — langsung buka di browser, cocok untuk PC, laptop, dan iPhone. Semua fitur tersedia di kedua versi, tidak ada yang dikurangi." },
  { q: "Bagaimana cara menggunakan versi web STC AutoTrade?",             a: "Buka browser dan kunjungi stcautotradepro.id. Jika belum punya akun, daftar dulu melalui web tersebut — prosesnya cepat dan gratis. Setelah akun berhasil terbuat, login menggunakan akun Stockity.id. Tidak perlu unduh atau instalasi." },
  { q: "Apa bedanya STC AutoTrade, StcAutoTrade, dan StockAutoTrade?",    a: "Ketiganya adalah nama yang merujuk produk yang sama. 'STC AutoTrade', 'Stc Auto Trade', 'StcAutoTrade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan brand yang sama." },
  { q: "Apakah Robot Stockity / Auto Stockity sama dengan STC AutoTrade?", a: "Ya. 'Robot Stockity', 'Auto Stockity', 'Stockity Auto Trade', dan 'Bot Stockity Otomatis' adalah sebutan populer untuk bot yang sama — STC AutoTrade (StockAutoTrade), tersedia via APK Android maupun versi web." },
  { q: "Bagaimana cara menginstal STC AutoTrade di Android?",             a: "Download file APK dari tombol di halaman ini. Aktifkan 'Instal dari sumber tidak dikenal' di Pengaturan → Keamanan. Buka file APK dan ikuti instruksi. Atau gunakan versi web di stcautotradepro.id tanpa instalasi." },
  { q: "Apakah perlu pengalaman trading?",                                a: "Tidak. STC AutoTrade dirancang agar bisa digunakan pemula sekalipun. Mode demo tersedia di versi APK maupun versi web untuk belajar tanpa risiko finansial." },
  { q: "Modal minimum yang disarankan?",                                  a: "Tidak ada ketentuan minimum, namun kami sarankan minimal Rp500.000 sebagai buffer aman untuk siklus martingale konservatif (nominal awal Rp14.000, multiplier 2,5x, 3 step)." },
  { q: "Tersedia untuk iOS (iPhone)?",                                    a: "Ya! Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade langsung melalui versi web di stcautotradepro.id — buka di Safari atau Chrome tanpa instalasi. Versi APK hanya tersedia untuk Android." },
  { q: "Apakah data akun Stockity saya aman?",                            a: "Keamanan data Anda sepenuhnya terlindungi. Password tidak pernah dikirim ke, atau disimpan di server manapun — termasuk server kami. Hanya token autentikasi yang tersimpan, dienkripsi secara lokal langsung di perangkat Anda." },
  { q: "Bot bisa jalan saat aplikasi ditutup?",                           a: "Ya. Bot berjalan di server khusus, bukan di perangkat Anda — sehingga tetap aktif 24 jam meski aplikasi ditutup, HP dimatikan, atau koneksi internet Anda terputus." },
];

/* ─────────────────────────────────────────────────────────────
   Halaman-specific JSON-LD — HANYA aktif di homepage ini.
   FAQPage & BreadcrumbList dipindah dari layout.tsx ke sini
   agar schema tidak aktif di halaman lain (download, artikel, dll).
───────────────────────────────────────────────────────────── */
const BASE_URL = "https://stcautotrade.id";

// FAQPage: di-generate dari array FAQS yang tampil di halaman
// → schema selalu sinkron dengan konten nyata
const schemaFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// BreadcrumbList homepage: hanya 1 item (root)
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
  ],
};

/* ── Constants ─────────────────────────────────────────────────── */

const APK_PATH = "/StcAutoTrade.apk";

/* ── Page (Server Component) ───────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Page-specific JSON-LD (FAQPage & BreadcrumbList) ───── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <div className="bg-white text-[#1a1612] font-[family-name:var(--font-dm-sans)]">

      {/* ── SKIP NAV ────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-5 focus:py-2.5 focus:bg-white focus:text-[#1a1612] focus:rounded-xl focus:shadow-xl focus:text-sm focus:font-semibold focus:border focus:border-[rgba(26,22,18,0.16)]"
      >
        Langsung ke konten utama
      </a>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav aria-label="Navigasi utama STC AutoTrade" className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[rgba(26,22,18,0.08)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 no-underline group">
            {/*
              PERBAIKAN #3: Logo nav tidak butuh priority karena kecil (28×28)
              dan bukan LCP element. alt tetap deskriptif.
            */}
            <Image
              src="/logo.png"
              alt="Logo STC AutoTrade"
              width={28}
              height={28}
              className="rounded-[6px] shadow-sm"
            />
            <span className="text-sm font-semibold tracking-tight text-[#1a1612]">STC AutoTrade</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="#fitur" className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/45 hover:text-[#1a1612] transition-colors no-underline">Fitur</a>
            <a href="#cara-kerja" className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/45 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</a>
            <a
              href="https://stcautotradepro.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 border border-[#3b82f6]/30 text-[#1d4ed8] text-sm font-semibold rounded-lg hover:bg-[#eff6ff] transition-all no-underline"
            >
              Versi Web
            </a>
            <a
              href={APK_PATH}
              download
              className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px no-underline shadow-sm"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[rgba(26,22,18,0.07)]">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(26,22,18,0.027)_1px,transparent_1px),linear-gradient(90deg,rgba(26,22,18,0.027)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#3b82f6]/[0.05] blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — konten semantik langsung di-render server */}
              <div>
                <HeroBadge />
                {/*
                  PERBAIKAN #1 + #3: HeroHeading berisi h1 — di-render via
                  fallback statis saat JS belum dimuat, kemudian "diambil alih"
                  oleh versi animasi setelah JS selesai.
                */}
                <HeroHeading apkPath={APK_PATH} />
              </div>

              {/* Right — Phone mockup hero */}
              {/* PERBAIKAN LCP #4 — render langsung sebagai Server Component.
                  Sebelumnya PhoneImage dibungkus HeroPhoneFloat (ssr:false) sehingga
                  tidak ada di HTML awal dan priority prop tidak berguna.
                  Sekarang gambar ada di HTML dari awal → browser langsung preload
                  → LCP score membaik signifikan. Float & fade via CSS (globals.css). */}
              <div className="animate-fade-up animate-delay-300 flex justify-center lg:justify-end">
                <div className="animate-float">
                  <PhoneImage
                    src="/gambar1.jpeg"
                    alt="Tampilan layar utama aplikasi STC AutoTrade menampilkan mode AI Signal aktif di akun Stockity.id"
                    label="Layar utama aplikasi StockAutoTrade"
                    priority={true}
                  />
                </div>
              </div>
            </div>

            <HeroStatBar />
          </div>
        </section>

        {/* ── BRAND RECOGNITION ───────────────────────────── */}
        <section className="py-10 sm:py-12 bg-[#f0f7ff] border-b border-[rgba(26,22,18,0.07)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <FadeUp>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4 text-center">
                Dikenal Juga Sebagai
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {[
                  "STC AutoTrade", "StcAutoTrade", "Stc Auto Trade", "StockAutoTrade",
                  "Stock Auto Trade", "Stockity Auto Trade", "Robot Stockity",
                  "Auto Stockity", "Bot Stockity Otomatis", "Robot Trading Stockity",
                ].map((alias) => (
                  <span
                    key={alias}
                    className="px-3.5 py-1.5 bg-white border border-[#3b82f6]/20 rounded-full text-[12px] font-medium text-[#1d4ed8] shadow-sm"
                  >
                    {alias}
                  </span>
                ))}
              </div>
              <p className="text-center text-[12px] text-[#6b6058] mt-4 max-w-xl mx-auto leading-relaxed">
                Semua nama di atas merujuk pada produk yang sama —{" "}
                <strong className="text-[#1a1612]">STC AutoTrade</strong> (stcautotrade.id),
                bot &amp; robot trading otomatis untuk <strong className="text-[#1a1612]">Stockity.id</strong>.{" "}
                Tersedia sebagai APK Android dan versi web di{" "}
                <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] font-semibold no-underline hover:underline">
                  stcautotradepro.id
                </a>.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── PLATFORM ─────────────────────────────────────── */}
        <section className="py-16 sm:py-20 border-b border-[rgba(26,22,18,0.07)] bg-white" id="platform">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <FadeUp className="text-center mb-10">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">Platform</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
                Tersedia di Android &amp; Semua Browser
              </h2>
              <p className="text-[14px] text-[#6b6058] mt-3 max-w-lg mx-auto leading-relaxed">
                Pilih cara yang paling nyaman — instal APK di Android atau langsung buka versi web tanpa instalasi apapun.
              </p>
            </FadeUp>
            <StaggerView className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* APK Card */}
              <FadeItem>
                <div className="flex flex-col gap-4 p-6 bg-[#f8fafc] border border-[rgba(26,22,18,0.09)] rounded-2xl hover:border-[rgba(26,22,18,0.18)] hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1a1612] flex items-center justify-center text-lg" aria-hidden="true">📱</div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1612]">Aplikasi Android</p>
                      <p className="text-[11px] text-[#1a1612]/35 font-medium">stcautotrade.id · APK</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {["Berjalan di background 24 jam", "Notifikasi order real-time", "Performa optimal di Android 10.0+"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#6b6058]">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="6" fill="#1d4ed8" fillOpacity=".15"/><path d="M4 6.5l2 2 3-3.5" stroke="#1d4ed8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={APK_PATH} download className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline shadow-sm">
                    Download APK
                  </a>
                </div>
              </FadeItem>
              {/* Web Card */}
              <FadeItem>
                <div className="flex flex-col gap-4 p-6 bg-[#eff6ff] border border-[#3b82f6]/25 rounded-2xl hover:border-[#3b82f6]/45 hover:shadow-md hover:shadow-[#3b82f6]/[0.08] hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3b82f6] flex items-center justify-center" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" fill="white" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a88.1,88.1,0,0,1,1.68-16.6H81.19a161.79,161.79,0,0,0,0,33.2H41.68A88.1,88.1,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h39.51A88.11,88.11,0,0,1,215.32,128H174.81a161.79,161.79,0,0,0,0-33.2ZM200.68,88H165.64c-5.56-22.77-15.47-43.28-29.41-60.41A88.35,88.35,0,0,1,200.68,88ZM119.77,27.59C105.83,44.72,95.92,65.23,90.36,88H55.32A88.35,88.35,0,0,1,119.77,27.59ZM55.32,168H90.36c5.56,22.77,15.47,43.28,29.41,60.41A88.35,88.35,0,0,1,55.32,168Zm80.95,60.41c13.94-17.13,23.85-37.64,29.41-60.41h35.04A88.35,88.35,0,0,1,136.27,228.41Z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1d4ed8]">Versi Web</p>
                      <p className="text-[11px] text-[#1d4ed8]/50 font-medium">stcautotradepro.id</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {["Tanpa instal — langsung di browser", "Kompatibel PC, Mac, iPhone, iPad", "Fitur lengkap sama seperti APK"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#1e40af]">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="6" fill="#3b82f6" fillOpacity=".2"/><path d="M4 6.5l2 2 3-3.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#3b82f6] text-white text-sm font-semibold rounded-xl hover:bg-[#2563eb] transition-all no-underline shadow-sm shadow-[#3b82f6]/25">
                    Buka Versi Web
                  </a>
                </div>
              </FadeItem>
            </StaggerView>
          </div>
        </section>

        {/* ── MENGAPA STC AUTOTRADE ────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
                  Mengapa STC AutoTrade?
                </p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-5">
                  Empat Hambatan Terbesar<br className="hidden sm:block" /> Trader Pemula
                </h2>
                <p className="text-[#6b6058] text-[15px] leading-relaxed mb-8">
                  Sebagian besar trader baru tidak gagal karena kurang modal —
                  mereka gagal karena masalah yang seharusnya bisa dicegah
                  dengan alat yang tepat. <strong className="text-[#1a1612]">STC AutoTrade</strong> (Robot Stockity) hadir sebagai solusinya.
                </p>
                <a href={APK_PATH} download className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white text-sm font-semibold rounded-xl hover:bg-[#2563eb] transition-all hover:-translate-y-px no-underline shadow-md shadow-[#3b82f6]/25">
                  Download Gratis Sekarang
                </a>
              </FadeUp>
              <HambatanSection apkPath={APK_PATH} />
            </div>
          </div>
        </section>

        {/* ── 6 MODE STRATEGI ─────────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-[#f9fafb]" id="fitur">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <FadeUp className="text-center mb-12">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">6 Mode Strategi</p>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-lg mx-auto leading-tight">
                Strategi untuk Setiap Gaya Trading
              </h2>
              <p className="text-[14px] text-[#6b6058] mt-4 max-w-lg mx-auto leading-relaxed">
                Semua mode berjalan otomatis — pilih satu, atur parameter, dan biarkan bot bekerja.
              </p>
            </FadeUp>
            <StaggerView className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MODES.map((m) => (
                <FadeItem key={m.tag}>
                  <article className="flex flex-col gap-3.5 p-5 bg-[#f8fafc] border border-[rgba(26,22,18,0.08)] rounded-xl hover:border-[rgba(26,22,18,0.16)] hover:bg-[#f0f7ff] hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/[0.04] transition-all h-full">
                    <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${m.color}`}>
                      {m.tag}
                    </span>
                    <h3 className="text-[15px] font-semibold tracking-tight text-[#1a1612]">{m.title}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed flex-1">{m.desc}</p>
                    <p className="text-[12px] text-[#1a1612]/35 border-t border-[rgba(26,22,18,0.07)] pt-3 flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7l3 3 6-6" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {m.for}
                    </p>
                  </article>
                </FadeItem>
              ))}
            </StaggerView>
          </div>
        </section>

        {/* ── MANAJEMEN RISIKO ─────────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20 items-start">
              {/* Phone mockup — PERBAIKAN #3: tidak perlu priority (below fold) */}
              <div className="lg:sticky lg:top-24 flex flex-col items-center">
                <FadeUp>
                  <PhoneImage
                    src="/gambar2.jpeg"
                    alt="Layar pengaturan manajemen risiko STC AutoTrade menampilkan stop loss otomatis dan konfigurasi martingale"
                    label="Pengaturan Stop Loss & Martingale"
                  />
                </FadeUp>
              </div>

              <div>
                <FadeUp>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
                    Manajemen Risiko
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-5">
                    Perlindungan Modal yang Bekerja Otomatis
                  </h2>
                  <p className="text-[#6b6058] text-[15px] leading-relaxed mb-6">
                    Fitur bawaan memastikan Anda tidak pernah kehilangan lebih dari
                    yang sudah direncanakan — bahkan saat tidak memantau layar sama sekali.
                  </p>
                  <div className="border-l-2 border-[#3b82f6]/60 pl-4 bg-[#3b82f6]/[0.04] py-3 pr-4 rounded-r-xl mb-8">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-[#1d4ed8] mb-2">Penting</p>
                    <p className="text-[13px] text-[#1e40af] leading-relaxed">
                      StockAutoTrade adalah alat bantu eksekusi strategi, bukan jaminan selalu profit.
                      Hasil trading tetap dipengaruhi kondisi pasar yang tidak dapat diprediksi.
                    </p>
                  </div>
                </FadeUp>
                <RiskCards />
              </div>
            </div>
          </div>
        </section>

        {/* ── MODE DEMO ───────────────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="relative overflow-hidden border border-[#3b82f6]/25 rounded-3xl p-8 sm:p-14 bg-[#f0f9ff]">
              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <FadeUp>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1d4ed8]/60 mb-4">Untuk Pemula</p>
                  <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-dm-serif)] font-normal tracking-[-0.02em] leading-[1.1] mb-5">
                    Mulai dari Mode Demo.<br />Tanpa Risiko.
                  </h2>
                  <p className="text-[#6b6058] text-[15px] leading-relaxed max-w-lg mb-8">
                    Semua fitur berjalan penuh menggunakan saldo virtual dengan data pasar nyata.
                    Uji, evaluasi, dan hanya pindah ke mode real setelah benar-benar siap.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-8">
                    {[
                      { t: "Order sungguhan, modal virtual",   s: "Data pasar nyata, saldo tidak berisiko" },
                      { t: "Uji semua 6 mode strategi",        s: "Temukan yang paling cocok untuk Anda" },
                      { t: "Riwayat untuk evaluasi",           s: "Analisis performa sebelum ke mode real" },
                    ].map((item) => (
                      <div key={item.t} className="bg-white/70 rounded-xl p-4 border border-[rgba(26,22,18,0.08)]">
                        <p className="text-[13px] font-semibold text-[#1d4ed8] mb-1.5">{item.t}</p>
                        <p className="text-[12px] text-[#6b6058]/70 leading-snug">{item.s}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-bold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-0.5 no-underline shadow-lg shadow-black/12">
                      Download APK Android
                    </a>
                    <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#eff6ff] border border-[#3b82f6]/30 text-[#1d4ed8] text-sm font-bold rounded-xl hover:bg-[#dbeafe] transition-all hover:-translate-y-0.5 no-underline">
                      Coba Versi Web
                    </a>
                  </div>
                </FadeUp>

                {/* Phone mockup — PERBAIKAN #3: alt deskriptif */}
                <FadeUp delay={0.15} className="flex justify-center">
                  <PhoneImage
                    src="/gambar3.jpeg"
                    alt="Tampilan mode demo STC AutoTrade menampilkan riwayat order dan statistik profit/loss dengan data pasar nyata"
                    label="Dashboard riwayat trading & statistik"
                  />
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── CARA INSTALL ─────────────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)]" id="cara-kerja">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <FadeUp className="text-center mb-16">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">Cara Install</p>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-md mx-auto leading-tight">
                Cara Memulai STC AutoTrade
              </h2>
            </FadeUp>
            <div className="max-w-2xl mx-auto divide-y divide-[rgba(26,22,18,0.08)]">
              {STEPS.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.07}>
                  <div className="flex gap-5 py-7 first:pt-0 last:pb-0">
                    <div className="w-10 h-10 min-w-[40px] rounded-full border border-[rgba(26,22,18,0.12)] bg-white flex items-center justify-center text-[13px] font-semibold text-[#1a1612]/40 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-[15px] font-semibold mb-2 text-[#1a1612]">{s.title}</h3>
                      <p className="text-[13px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <FadeUp className="mb-12">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
                Pertanyaan tentang STC AutoTrade
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <dl>
                {FAQS.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </dl>
            </FadeUp>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="relative py-28 sm:py-40 overflow-hidden bg-[#1a1612]">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
            <FadeUp>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6]/50 mb-6">
                Gratis · Android &amp; Web · Mulai Sekarang
              </p>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-6xl font-normal tracking-[-0.03em] leading-[1.1] max-w-2xl mx-auto mb-6 text-[#e0f2fe]">
                Download STC AutoTrade — Mulai Trading Otomatis
              </h2>
              <p className="text-[#e0f2fe]/45 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
                Download <strong className="text-[#e0f2fe]/70">STC AutoTrade</strong> (StockAutoTrade) sekarang, atau buka langsung versi web — mulai dari mode demo tanpa risiko,
                dan rasakan perbedaan robot trading yang tereksekusi secara otomatis 24/7 di Stockity.id.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                <a
                  href={APK_PATH}
                  download
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-9 py-4 bg-[#3b82f6] text-white text-sm font-bold rounded-xl hover:bg-[#2563eb] transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-2xl shadow-[#3b82f6]/20"
                >
                  Download APK Android
                </a>
                <a
                  href="https://stcautotradepro.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-9 py-4 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline"
                >
                  Buka Versi Web
                </a>
              </div>
              <p className="mt-5 text-[12px] text-[#e0f2fe]/25">APK Android 10.0+ · Versi Web semua perangkat · Gratis</p>
            </FadeUp>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-[rgba(26,22,18,0.09)] py-8 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <Image
                src="/logo.png"
                alt="Logo STC AutoTrade"
                width={24}
                height={24}
                className="rounded-[5px] shadow-sm"
              />
              <span className="text-sm font-medium text-[#1a1612]/60">STC AutoTrade</span>
            </div>
            <p className="text-[11px] text-[#1a1612]/25 leading-snug">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
            </p>
          </div>
          <p className="text-[12px] text-[#1a1612]/30 max-w-sm sm:text-right leading-relaxed">
            Trading mengandung risiko kerugian finansial. STC AutoTrade (StockAutoTrade) adalah alat bantu, bukan jaminan selalu profit.
            Pastikan Anda memahami risiko sebelum bertransaksi.
          </p>
        </div>
      </footer>

    </div>
    </>
  );
}