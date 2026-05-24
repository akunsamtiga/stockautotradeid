import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "STC AutoTrade — Bot Trading Otomatis Stockity | StockAutoTrade",
    template: "%s | STC AutoTrade",
  },

  description:
    "STC AutoTrade (StcAutoTrade / StockAutoTrade) — robot trading otomatis terpercaya untuk Stockity.id. Tersedia sebagai APK Android & versi web di web.stcautotrade.id. 6 strategi, stop loss & stop profit, AI signal, copy trading. Gratis untuk member.",

  keywords: [
    // ── Brand exact-match ──────────────────────────────────────────
    "stc autotrade",
    "stcautotrade",
    "stc auto trade",
    "stockautotrade",
    "stock auto trade",
    "StockAutoTrade",
    // ── Versi web ──────────────────────────────────────────────────
    "stc autotrade web",
    "web stcautotrade",
    "web.stcautotrade.id",
    "stcautotrade versi web",
    "stockautotrade web browser",
    "robot stockity versi web",
    "bot stockity tanpa instal",
    "stcautotrade iphone",
    "stcautotrade ios",
    "stcautotrade pc laptop",
    // ── Produk utama ───────────────────────────────────────────────
    "stockity auto trade",
    "auto stockity",
    "robot stockity",
    "robot trading stockity",
    "bot stockity otomatis",
    "bot trading stockity",
    "bot trading otomatis stockity.id",
    "robot trading stockity indonesia",
    // ── Gratis ────────────────────────────────────────────────────
    "auto trade stockity gratis",
    "robot stockity gratis",
    "download robot stockity gratis",
    "bot trading stockity gratis",
    "stcautotrade gratis",
    "robot binary stockity gratis",
    "bot stockity tanpa bayar",
    "apk robot stockity gratis",
    // ── Android / APK ──────────────────────────────────────────────
    "robot stockity android",
    "download bot stockity android",
    "apk robot stockity",
    "auto trade stockity android",
    "aplikasi trading otomatis stockity android",
    "download stc autotrade apk",
    "cara instal stcautotrade android",
    "stockautotrade apk download",
    // ── Cara setting & tutorial ────────────────────────────────────
    "cara setting robot stockity",
    "cara pakai bot stockity",
    "setting martingale stockity",
    "cara trading otomatis stockity",
    "setting stop loss stockity",
    "cara aktifkan robot stockity",
    "panduan bot stockity pemula",
    // ── Cara daftar ────────────────────────────────────────────────
    "cara daftar stockity",
    "cara buat akun stockity",
    "daftar stockity gratis",
    "cara registrasi stockity",
    "cara verifikasi akun stockity",
    "cara deposit stockity pertama kali",
    // ── Cara profit & strategi ─────────────────────────────────────
    "cara profit trading stockity",
    "strategi trading stockity menang",
    "tips trading stockity pemula",
    "cara menang trading stockity",
    "waktu terbaik trading stockity",
    "cara konsisten profit di stockity",
    // ── Modal ─────────────────────────────────────────────────────
    "modal trading stockity",
    "modal minimum stockity",
    "berapa modal untuk trading stockity",
    "cara mulai stockity modal kecil",
    "modal deposit stockity",
    // ── Review & keamanan ──────────────────────────────────────────
    "stockity aman",
    "stockity penipuan atau tidak",
    "apakah stockity aman",
    "stockity terpercaya",
    "review stockity jujur",
    "withdraw stockity berhasil",
    // ── Perbandingan ───────────────────────────────────────────────
    "stockity vs binomo",
    "stockity vs olymp trade",
    "platform trading terbaik indonesia 2025",
    "perbandingan platform binary option indonesia",
    // ── Long-tail intent tinggi ────────────────────────────────────
    "bot auto trade stockity gratis",
    "robot binary option stockity otomatis",
    "copy trading stockity otomatis",
    "AI signal trading stockity",
    "bot trading pemula stockity indonesia",
    "stop loss otomatis stockity",
    "martingale trading bot stockity",
    "trading 24 jam otomatis stockity",
  ],

  alternates: {
    canonical: BASE_URL,
    languages: { "id-ID": BASE_URL },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "STC AutoTrade",
    title: "STC AutoTrade — Bot & Robot Trading Otomatis Stockity.id | APK & Web",
    description:
      "STC AutoTrade (StockAutoTrade / Robot Stockity) — 6 mode strategi, stop loss otomatis, AI signal & copy trading. Tersedia sebagai APK Android & versi web di web.stcautotrade.id. Gratis.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "STC AutoTrade — Bot Trading Otomatis Stockity.id",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "STC AutoTrade — Bot & Robot Trading Otomatis Stockity.id",
    description:
      "STC AutoTrade (StockAutoTrade) — 6 strategi, stop loss & profit otomatis, AI signal. Tersedia APK Android & versi web (web.stcautotrade.id). Gratis.",
    images: [`${BASE_URL}/og-image.png`],
  },

  applicationName: "STC AutoTrade",
  category: "finance",
  classification: "Finance, Trading, Automation",
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD Structured Data
───────────────────────────────────────────────────────────── */

const schemaApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#app`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "Stc Auto Trade",
    "StockAutoTrade",
    "Stock Auto Trade",
    "Stockity Auto Trade",
    "Robot Stockity",
    "Auto Stockity",
    "Bot Stockity",
    "Robot Trading Stockity",
    "Bot Trading Stockity Otomatis",
    "Auto Trade Stockity",
    "Robot Stockity Android",
    "Bot Stockity Gratis",
  ],
  url: BASE_URL,
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Automation",
  operatingSystem: "Android 8.0+, Web Browser (semua platform)",
  applicationUrl: "https://web.stcautotrade.id",
  downloadUrl: `${BASE_URL}/stcautotrade.apk`,
  inLanguage: "id",
  description:
    "STC AutoTrade (juga dikenal sebagai StockAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Dilengkapi 6 mode strategi (AI Signal, Copy Trading, Indikator Teknikal, Candlestick, Fastrade, Schedule), manajemen risiko otomatis dengan stop loss & stop profit, serta sistem martingale terkelola. Gratis untuk member.",
  featureList: [
    "Versi Web — akses langsung di browser tanpa instalasi (web.stcautotrade.id)",
    "Aplikasi Android APK — berjalan di background 24/7",
    "6 Mode Strategi Trading (AI Signal, Copy Trading, Indikator, Candlestick, Fastrade, Schedule)",
    "Stop Loss Otomatis — batas kerugian harian",
    "Stop Profit Otomatis — amankan target keuntungan",
    "Sistem Martingale Terkelola (MAX STEP + MULTIPLIER kustom)",
    "Mode Demo Tanpa Risiko dengan data pasar nyata",
    "Riwayat Trading Lengkap per order",
    "100% Gratis untuk member terdaftar",
    "Kompatibel: Android, iPhone, PC, Mac, iPad",
  ],
  screenshot: `${BASE_URL}/screenshot.png`,
  datePublished: "2025-05-21",
  dateModified: "2026-05-24",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "293",
    reviewCount: "293",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/LimitedAvailability",
    description: "Akses eksklusif via whitelist — gratis untuk member terdaftar",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "StockAutoTrade",
    "Stockity Auto Trade",
    "Robot Stockity",
    "Auto Stockity",
  ],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "daftar@stockautotrade.id",
    contactType: "customer support",
    areaServed: "ID",
    availableLanguage: "Indonesian",
  },
  sameAs: [],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu STC AutoTrade / StcAutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade (juga disebut StcAutoTrade, StockAutoTrade, atau Robot Stockity) adalah bot trading otomatis untuk platform Stockity.id. Tersedia gratis sebagai aplikasi Android (APK) dan versi web di web.stcautotrade.id yang bisa diakses dari browser tanpa instalasi.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu versi web STC AutoTrade di web.stcautotrade.id?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Versi web STC AutoTrade (web.stcautotrade.id) adalah platform bot trading yang bisa diakses langsung di browser tanpa perlu mengunduh atau menginstal aplikasi. Cocok untuk pengguna PC, Mac, iPhone, iPad, dan semua perangkat. Memiliki fitur yang sama dengan versi APK Android.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah auto trade Stockity gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. STC AutoTrade adalah robot trading Stockity yang gratis sepenuhnya untuk member terdaftar — tidak ada biaya langganan, tidak ada komisi dari profit, tidak ada fitur yang dikunci. Akses penuh ke semua 6 strategi dan fitur manajemen risiko tersedia tanpa biaya.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Stockity aman dan bukan penipuan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockity.id adalah platform trading binary option yang beroperasi untuk pasar Indonesia dan memproses transaksi secara nyata. Tidak ada bukti konkret bahwa platform ini adalah scam. Namun perlu dipahami bahwa trading binary option mengandung risiko kerugian finansial yang signifikan — ini berbeda dari penipuan platform.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara daftar akun Stockity dan mulai auto trade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cara termudah: download STC AutoTrade APK dari stcautotrade.id atau buka web.stcautotrade.id, pilih Daftar Akun Baru, isi email dan password, verifikasi email, lalu login. Akses bot trading langsung aktif setelah mendaftar — gratis tanpa biaya apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa modal minimum untuk trading Stockity otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modal minimum yang aman adalah Rp 300.000 untuk profil paling konservatif (nominal Rp 14.000, multiplier 2×, max step 3). Untuk profil standar pemula (multiplier 2,5×), disarankan Rp 500.000. Modal harus mencukupi total eksposur martingale ditambah buffer stop loss.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan STC AutoTrade APK Android dan versi web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Versi APK Android diinstal di perangkat Android dan bisa berjalan di background 24 jam. Versi web (web.stcautotrade.id) diakses via browser — tanpa instalasi, kompatibel dengan semua perangkat termasuk PC, Mac, iPhone, dan iPad. Kedua versi memiliki 6 mode strategi yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja mode strategi yang tersedia di robot Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade memiliki 6 mode strategi: (1) AI Signal — sinyal machine learning real-time; (2) CTC Copy Trading — salin sinyal trader berpengalaman; (3) Indicator — berbasis SMA, EMA, dan RSI; (4) Momentum/Candlestick — deteksi pola Hammer, Doji, Engulfing; (5) Schedule — trading terjadwal berdasarkan waktu; (6) Fastrade — frekuensi order tinggi mengikuti momentum.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade tersedia untuk iPhone (iOS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade melalui versi web di web.stcautotrade.id — cukup buka di browser Safari atau Chrome tanpa instalasi dan tanpa App Store. Semua 6 mode strategi tersedia di versi web.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menginstal robot Stockity di Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1) Download APK dari stcautotrade.id. 2) Aktifkan izin Instal dari sumber tidak dikenal di Pengaturan Android. 3) Buka file APK dan tap Instal. 4) Buka aplikasi, pilih Daftar Akun Baru untuk membuat akun Stockity.id gratis. 5) Login dan mulai dari mode demo.",
      },
    },
    {
      "@type": "Question",
      name: "Stockity vs Binomo — mana yang lebih baik untuk robot trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk trading otomatis dengan robot, Stockity unggul karena kompatibel penuh dengan STC AutoTrade — bot gratis dengan 6 mode strategi, stop loss otomatis, dan martingale terkelola. Binomo tidak memiliki bot trading resmi yang terintegrasi, sehingga trading harus dilakukan secara manual.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara profit konsisten di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cara profit konsisten di Stockity membutuhkan tiga hal: (1) strategi tervalidasi di mode demo minimal 7–14 hari dengan win rate di atas 53%; (2) manajemen risiko ketat dengan stop loss dan stop profit otomatis; (3) disiplin tidak mengganti strategi saat rugi dan tidak overtrade. STC AutoTrade menangani konsistensi ini secara otomatis.",
      },
    },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "STC AutoTrade",
      item: BASE_URL,
    },
  ],
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "StockAutoTrade",
    "Robot Stockity",
    "Auto Stockity",
    "Bot Trading Stockity",
    "Auto Trade Stockity",
  ],
  url: BASE_URL,
  description:
    "Bot & robot trading otomatis untuk Stockity.id — STC AutoTrade (StockAutoTrade) tersedia sebagai APK Android (stcautotrade.id) dan versi web (web.stcautotrade.id). Gratis untuk member.",
  inLanguage: "id-ID",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <meta name="theme-color" content="#f9fafb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}