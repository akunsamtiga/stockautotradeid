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
    "STC AutoTrade (StcAutoTrade / StockAutoTrade) — robot trading otomatis terpercaya untuk Stockity.id. Tersedia sebagai APK Android & versi web di web.stcautotrade.id. 6 strategi, stop loss & stop profit, AI signal, copy trading. ⭐ 4.9/5",

  keywords: [
    // Brand exact-match — prioritas utama
    "stc autotrade",
    "stcautotrade",
    "stc auto trade",
    "stockautotrade",
    "stock auto trade",
    "StockAutoTrade",
    // Web version keywords
    "stc autotrade web",
    "web stcautotrade",
    "web.stcautotrade.id",
    "stcautotrade versi web",
    "stockautotrade web browser",
    "robot stockity versi web",
    "bot stockity tanpa instal",
    "trading bot web browser stockity",
    "stcautotrade iphone",
    "stcautotrade ios",
    "stcautotrade pc laptop",
    // Product variations
    "stockity auto trade",
    "auto stockity",
    "robot stockity",
    "robot trading stockity",
    "bot stockity otomatis",
    "bot trading stockity",
    "bot trading otomatis stockity.id",
    "robot trading stockity indonesia",
    // Long-tail intent tinggi
    "download stc autotrade apk",
    "cara instal stcautotrade android",
    "stockautotrade apk download",
    "bot auto trade stockity gratis",
    "robot binary option stockity otomatis",
    "copy trading stockity otomatis",
    "AI signal trading stockity",
    "bot trading pemula stockity indonesia",
    "aplikasi trading otomatis android stockity",
    "stop loss otomatis stockity",
    "martingale trading bot stockity",
    "trading 24 jam otomatis stockity",
    "bot binary option otomatis",
    "aplikasi bot trading terpercaya",
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
      "STC AutoTrade (StockAutoTrade) — 6 strategi, stop loss & profit otomatis, AI signal. Tersedia APK Android & versi web (web.stcautotrade.id). ⭐ 4.9/5",
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
  // ↓ Semua variasi nama brand — diindeks Google untuk brand disambiguation
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
  ],
  url: BASE_URL,
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Automation",
  operatingSystem: "Android 8.0+, Web Browser (semua platform)",
  applicationUrl: "https://web.stcautotrade.id",
  inLanguage: "id",
  description:
    "STC AutoTrade (juga dikenal sebagai StockAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Dilengkapi 6 mode strategi (AI Signal, Copy Trading, Indikator Teknikal, Candlestick, Fastrade, Schedule), manajemen risiko otomatis dengan stop loss & stop profit, serta sistem martingale terkelola.",
  featureList: [
    "Versi Web — akses langsung di browser tanpa instalasi (web.stcautotrade.id)",
    "Aplikasi Android APK — berjalan di background 24/7",
    "6 Mode Strategi Trading (AI Signal, Copy Trading, Indikator, Candlestick, Fastrade, Schedule)",
    "Stop Loss Otomatis — batas kerugian harian",
    "Stop Profit Otomatis — amankan target keuntungan",
    "Sistem Martingale Terkelola",
    "Mode Demo Tanpa Risiko dengan data pasar nyata",
    "Riwayat Trading Lengkap per order",
    "Pengaturan tersimpan otomatis",
    "Bot aktif 24/7 tanpa bias emosional",
  ],
  screenshot: `${BASE_URL}/screenshot.png`,
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
  ],
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
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
      name: "Apa perbedaan STC AutoTrade APK Android dan versi web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Versi APK Android diinstal di perangkat Android dan bisa berjalan di background 24 jam. Versi web (web.stcautotrade.id) diakses via browser — tanpa instalasi, kompatibel dengan semua perangkat termasuk PC, Mac, iPhone, dan iPad. Kedua versi memiliki 6 mode strategi yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan STC AutoTrade, StcAutoTrade, dan StockAutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ketiganya merujuk pada produk yang sama: bot trading otomatis untuk Stockity.id tersedia di stcautotrade.id (APK) dan web.stcautotrade.id (versi web). 'STC AutoTrade', 'StcAutoTrade', 'Stc Auto Trade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan nama brand yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade sama dengan Robot Stockity atau Auto Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. STC AutoTrade, Robot Stockity, Auto Stockity, dan Stockity Auto Trade adalah sebutan populer untuk bot trading yang sama — tersedia di stcautotrade.id (APK Android) dan web.stcautotrade.id (versi web).",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menginstal StockAutoTrade / STC AutoTrade di Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download file APK dari stcautotrade.id. Aktifkan izin Instal dari sumber tidak dikenal di Pengaturan Android. Buka file APK dan ikuti instruksi instalasi. Atau, gunakan versi web langsung di web.stcautotrade.id tanpa instalasi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade tersedia untuk iOS (iPhone)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya! Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade melalui versi web di web.stcautotrade.id — cukup buka di browser Safari atau Chrome tanpa instalasi. Versi APK hanya tersedia untuk Android.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa modal minimum yang disarankan untuk StcAutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada ketentuan minimum, namun kami sarankan minimal Rp500.000 sebagai buffer aman untuk siklus martingale konservatif (nominal awal Rp14.000, multiplier 2,5x, 3 step).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah data akun Stockity.id saya aman di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, password tidak disimpan di server manapun. Hanya token autentikasi yang tersimpan secara lokal dan terenkripsi di perangkat Anda sendiri — baik di versi APK maupun versi web.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah robot Stockity (STC AutoTrade) bisa berjalan saat aplikasi ditutup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk APK Android: bot memerlukan aplikasi aktif di background. Untuk versi web (web.stcautotrade.id): biarkan tab browser tetap terbuka. Hubungkan perangkat ke charger untuk performa optimal 24 jam.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja mode strategi yang tersedia di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade memiliki 6 mode strategi — tersedia di APK Android maupun versi web: (1) Schedule, (2) Fastrade, (3) CTC Copy Trading, (4) AI Signal, (5) Indicator berbasis SMA/EMA/RSI, (6) Momentum/Candlestick.",
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

// WebSite schema untuk sitelinks searchbox & brand recognition
const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "STC AutoTrade",
  alternateName: ["StcAutoTrade", "StockAutoTrade", "Robot Stockity", "Auto Stockity"],
  url: BASE_URL,
  description:
    "Bot & robot trading otomatis untuk Stockity.id — STC AutoTrade (StockAutoTrade) tersedia sebagai APK Android (stcautotrade.id) dan versi web (web.stcautotrade.id).",
  inLanguage: "id-ID",
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