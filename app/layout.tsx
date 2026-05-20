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
    "STC AutoTrade (StcAutoTrade / StockAutoTrade) — robot trading otomatis terpercaya untuk Stockity.id. 6 strategi, stop loss & stop profit, AI signal, copy trading. Download APK gratis untuk Android. ⭐ 4.9/5",

  keywords: [
    // Brand exact-match — prioritas utama
    "stc autotrade",
    "stcautotrade",
    "stc auto trade",
    "stockautotrade",
    "stock auto trade",
    "StockAutoTrade",
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
    title: "STC AutoTrade — Bot & Robot Trading Otomatis Stockity.id",
    description:
      "STC AutoTrade (StockAutoTrade / Robot Stockity) — 6 mode strategi, stop loss otomatis, AI signal & copy trading. Bot trading terpercaya untuk Stockity.id. Download APK gratis.",
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
      "STC AutoTrade (StockAutoTrade) — 6 strategi, stop loss & profit otomatis, AI signal. Robot trading 24/7 untuk Stockity.id. ⭐ 4.9/5",
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
  operatingSystem: "Android 8.0+",
  inLanguage: "id",
  description:
    "STC AutoTrade (juga dikenal sebagai StockAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Dilengkapi 6 mode strategi (AI Signal, Copy Trading, Indikator Teknikal, Candlestick, Fastrade, Schedule), manajemen risiko otomatis dengan stop loss & stop profit, serta sistem martingale terkelola.",
  featureList: [
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
        text: "STC AutoTrade (juga disebut StcAutoTrade, StockAutoTrade, atau Robot Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Tersedia gratis untuk Android, aplikasi ini mengeksekusi order trading secara otomatis menggunakan 6 mode strategi termasuk AI Signal, Copy Trading, dan Indikator Teknikal.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan STC AutoTrade, StcAutoTrade, dan StockAutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ketiganya merujuk pada produk yang sama: aplikasi bot trading otomatis untuk Stockity.id yang bisa didownload di stcautotrade.id. 'STC AutoTrade', 'StcAutoTrade', 'Stc Auto Trade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan nama brand yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade sama dengan Robot Stockity atau Auto Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. STC AutoTrade, Robot Stockity, Auto Stockity, dan Stockity Auto Trade adalah sebutan populer untuk aplikasi bot trading otomatis yang sama — yaitu StockAutoTrade / StcAutoTrade yang bisa didownload di stcautotrade.id.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menginstal StockAutoTrade / STC AutoTrade di Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download file APK dari stcautotrade.id. Sebelum instal, aktifkan izin Instal dari sumber tidak dikenal di Pengaturan Android Anda. Buka file APK dan ikuti instruksi instalasi. Gratis, tanpa pendaftaran.",
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
      name: "Apakah STC AutoTrade tersedia untuk iOS (iPhone)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saat ini STC AutoTrade (StockAutoTrade) hanya tersedia untuk Android. Aktifkan izin instalasi dari sumber eksternal di pengaturan perangkat Android Anda untuk menginstal aplikasi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah data akun Stockity.id saya aman di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, password tidak disimpan di server manapun. Hanya token autentikasi yang tersimpan secara lokal dan terenkripsi di perangkat Anda sendiri.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah robot Stockity (STC AutoTrade) bisa berjalan saat aplikasi ditutup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bot memerlukan aplikasi aktif di background. Biarkan berjalan di background dengan koneksi internet stabil dan perangkat terhubung charger untuk performa optimal 24 jam.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade / Robot Stockity gratis digunakan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, STC AutoTrade (StockAutoTrade) gratis untuk didownload dan digunakan. Cukup download file APK dari stcautotrade.id, instal di perangkat Android Anda, dan langsung login menggunakan akun Stockity.id yang sudah dimiliki.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja mode strategi yang tersedia di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade (StockAutoTrade) memiliki 6 mode strategi: (1) Schedule — trading terjadwal berdasarkan pola historis, (2) Fastrade — mengikuti momentum pasar, (3) CTC Copy Trading — mengikuti sinyal sumber terpercaya, (4) AI Signal — algoritma AI analisis real-time, (5) Indicator — berbasis SMA, EMA, dan RSI, (6) Momentum — mengenali pola candlestick seperti Doji dan BB SAR Break.",
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
    "Bot & robot trading otomatis untuk Stockity.id — STC AutoTrade (StockAutoTrade) download gratis untuk Android.",
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