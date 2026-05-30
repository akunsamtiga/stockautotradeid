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
/**
 * FIX #1 — URL Konsisten
 * Semua referensi versi web di schema & metadata kini memakai konstanta
 * ini, selaras dengan link di page.tsx yang selalu mengarah ke stcautotradepro.id.
 */
const WEB_APP  = "https://stcautotradepro.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /**
   * FIX #2 — Title sedikit diperpendek
   * Sebelumnya 63 karakter (borderline). Kini 48 karakter — jelas, keyword
   * di depan, tidak terpotong di SERP.
   */
  title: {
    default: "STC AutoTrade — Robot Trading Otomatis Stockity",
    template: "%s | STC AutoTrade",
  },

  /**
   * FIX #3 — Description KRITIS (sebelumnya 249 karakter → dipangkas jadi 147)
   * Google truncate di ~155 karakter. Description 249 karakter sebelumnya
   * kehilangan ~94 karakter di SERP — artinya CTA "Gratis" tidak pernah terlihat.
   */
  description:
    "Robot trading otomatis Stockity.id — STC AutoTrade (StockAutoTrade). APK Android & versi web. AI signal, copy trading, stop loss otomatis. Gratis.",

  /**
   * FIX #4 — Keywords dipangkas drastis
   * Google mengabaikan meta keywords, tapi daftar 110+ keyword sebelumnya
   * menjadi sinyal spam & "fingerprint" kompetitor. Sisakan 10–12 saja.
   */
  keywords: [
    "stc autotrade",
    "stcautotrade",
    "stockautotrade",
    "robot trading stockity",
    "bot trading stockity gratis",
    "auto trade stockity",
    "robot stockity android",
    "cara setting robot stockity",
    "cara daftar stockity",
    "robot stockity gratis",
    "copy trading stockity",
    "AI signal trading stockity",
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
    title: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
    /**
     * FIX #3b — OG description juga dipangkas (141 karakter)
     * Sebelumnya 193 karakter; dipotong oleh platform sosial.
     */
    description:
      "STC AutoTrade (StockAutoTrade) — 6 mode strategi, stop loss otomatis, AI signal & copy trading. APK Android & versi web. Gratis untuk member.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
      },
    ],
  },

  /**
   * FIX #5 — Twitter site & creator ditambahkan
   * Twitter/X menggunakan ini untuk menampilkan profil pemilik kartu.
   * Ganti dengan handle Twitter resmi jika sudah ada.
   */
  twitter: {
    card: "summary_large_image",
    site: "@stcautotrade",
    creator: "@stcautotrade",
    title: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
    description:
      "6 strategi trading otomatis, stop loss & profit, AI signal. APK Android & versi web (stcautotradepro.id). Gratis untuk member.",
    images: [`${BASE_URL}/og-image.png`],
  },

  /**
   * FIX #6 — Icons / Favicon metadata
   * Sebelumnya tidak ada sama sekali. Browser & Google menampilkan favicon
   * di SERP dan tab — penting untuk brand recognition.
   * Pastikan file-file ini tersedia di /public/.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  /**
   * FIX #7 — Web App Manifest
   * Memungkinkan "Add to Home Screen" di mobile dan sinyal PWA untuk Google.
   * Buat /public/site.webmanifest (template minimal disediakan di catatan bawah).
   */
  manifest: "/site.webmanifest",

  applicationName: "STC AutoTrade",
  category: "finance",
  classification: "Finance, Trading, Automation",
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD Structured Data
   FIX #8 — Semua URL web.stcautotrade.id → stcautotradepro.id
             agar konsisten dengan CTA & link di page.tsx
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
  /** FIX #8 — applicationUrl diselaraskan dengan WEB_APP constant */
  applicationUrl: WEB_APP,
  downloadUrl: `${BASE_URL}/StcAutoTrade.apk`,
  inLanguage: "id",
  description:
    "STC AutoTrade (juga dikenal sebagai StockAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Dilengkapi 6 mode strategi (AI Signal, Copy Trading, Indikator Teknikal, Candlestick, Fastrade, Schedule), manajemen risiko otomatis dengan stop loss & stop profit, serta sistem martingale terkelola. Gratis untuk member.",
  featureList: [
    /** FIX #8b — URL konsisten di featureList */
    `Versi Web — akses langsung di browser tanpa instalasi (${WEB_APP})`,
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
    /**
     * FIX #9 — Availability diubah dari LimitedAvailability → InStock
     * Bot ini gratis & tersedia untuk semua yang daftar, bukan "terbatas".
     * LimitedAvailability bisa membingungkan crawler & menekan CTR di rich result.
     */
    availability: "https://schema.org/InStock",
    description: "Gratis sepenuhnya untuk semua member terdaftar",
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
  /**
   * FIX #10 — sameAs diisi dengan URL yang relevan
   * Sebelumnya array kosong. Google menggunakan sameAs untuk
   * menghubungkan entitas & meningkatkan kepercayaan Knowledge Graph.
   * Tambahkan akun media sosial resmi jika sudah ada.
   */
  sameAs: [
    WEB_APP,
    // "https://www.youtube.com/@stcautotrade",  // tambahkan jika ada
    // "https://www.instagram.com/stcautotrade", // tambahkan jika ada
    // "https://t.me/stcautotrade",              // tambahkan jika ada
  ],
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
        /** FIX #8c — URL web app diperbarui ke stcautotradepro.id */
        text: `STC AutoTrade (juga disebut StcAutoTrade, StockAutoTrade, atau Robot Stockity) adalah bot trading otomatis untuk platform Stockity.id. Tersedia gratis sebagai aplikasi Android (APK) dan versi web di ${WEB_APP} yang bisa diakses dari browser tanpa instalasi.`,
      },
    },
    {
      "@type": "Question",
      name: "Apa itu versi web STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Versi web STC AutoTrade (${WEB_APP}) adalah platform bot trading yang bisa diakses langsung di browser tanpa perlu mengunduh atau menginstal aplikasi. Cocok untuk pengguna PC, Mac, iPhone, iPad, dan semua perangkat. Memiliki fitur yang sama dengan versi APK Android.`,
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
        text: `Cara termudah: download STC AutoTrade APK dari stcautotrade.id atau buka ${WEB_APP}, pilih Daftar Akun Baru, isi email dan password, verifikasi email, lalu login. Akses bot trading langsung aktif setelah mendaftar — gratis tanpa biaya apapun.`,
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
        text: `Versi APK Android diinstal di perangkat Android dan bisa berjalan di background 24 jam. Versi web (${WEB_APP}) diakses via browser — tanpa instalasi, kompatibel dengan semua perangkat termasuk PC, Mac, iPhone, dan iPad. Kedua versi memiliki 6 mode strategi yang sama.`,
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
        text: `Ya. Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade melalui versi web di ${WEB_APP} — cukup buka di browser Safari atau Chrome tanpa instalasi dan tanpa App Store. Semua 6 mode strategi tersedia di versi web.`,
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

/**
 * FIX #11 — SearchAction dihapus dari WebSite schema
 * URL template /?q= tidak mengarah ke fungsi pencarian yang nyata.
 * SearchAction palsu dapat membingungkan crawler & memperburuk UX
 * dari Google Sitelinks Searchbox. Aktifkan kembali hanya jika
 * ada search functionality yang berfungsi.
 */
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
  /** FIX #8d — URL web app diperbarui */
  description: `Bot & robot trading otomatis untuk Stockity.id — STC AutoTrade (StockAutoTrade) tersedia sebagai APK Android (stcautotrade.id) dan versi web (${WEB_APP}). Gratis untuk member.`,
  inLanguage: "id-ID",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
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
        {/*
          Preconnect untuk Google Fonts sudah ditambahkan Next.js secara otomatis
          saat menggunakan next/font/google. Tag di bawah adalah pengaman eksplisit.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}