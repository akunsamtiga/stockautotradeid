/**
 * app/artikel/robot-trading-pc-laptop/page.tsx
 *
 * Target keyword:
 *   Primary  : robot trading pc laptop
 *   Secondary: auto trade stockity di komputer, bot trading stockity pc,
 *              cara pakai stockity di laptop, stockity versi web pc,
 *              robot trading browser
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Robot Trading PC & Laptop: Pakai STC AutoTrade Versi Web 2026",
  description:
    "Panduan lengkap cara pakai robot trading STC AutoTrade di PC dan laptop — akses versi web, kompatibilitas browser, perbandingan fitur web vs APK, dan tips optimasi agar bot tetap jalan di komputer.",
  keywords: [
    "robot trading pc laptop",
    "auto trade stockity di komputer",
    "bot trading stockity pc",
    "cara pakai stockity di laptop",
    "stockity versi web pc",
    "robot trading browser",
    "STC AutoTrade versi web",
    "trading stockity di laptop",
    "trading stockity di pc",
    "robot trading tanpa android",
    "bot trading stockity komputer",
    "stcautotradepro.id pc",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
  },
  openGraph: {
    title: "Robot Trading PC & Laptop: Pakai STC AutoTrade Versi Web 2026",
    description:
      "Panduan cara menggunakan STC AutoTrade di PC/laptop melalui versi web — tanpa instal, semua browser, fitur lengkap.",
    url: "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Robot Trading PC Laptop — STC AutoTrade Versi Web",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Robot Trading PC & Laptop: Pakai STC AutoTrade Versi Web 2026",
  description:
    "Panduan cara menggunakan robot trading STC AutoTrade di PC dan laptop melalui versi web browser.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: {
    "@type": "Organization",
    name: "STC AutoTrade",
    logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.png" },
  },
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  image: "https://stcautotrade.id/og-image.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
  },
  keywords: "robot trading pc laptop, auto trade stockity di komputer, bot trading stockity pc, STC AutoTrade versi web",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Robot Trading PC Laptop",
      item: "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade bisa dipakai di PC atau laptop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. STC AutoTrade memiliki versi web yang bisa diakses di PC, laptop, Mac, atau perangkat apapun yang memiliki browser modern. Buka stcautotradepro.id di browser Anda — tidak perlu menginstal apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada aplikasi desktop STC AutoTrade untuk Windows atau Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada aplikasi desktop terpisah untuk Windows atau Mac. STC AutoTrade untuk PC/laptop diakses melalui versi web di stcautotradepro.id. Versi APK tersedia khusus untuk Android.",
      },
    },
    {
      "@type": "Question",
      name: "Browser apa yang paling bagus untuk STC AutoTrade di PC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Chrome adalah pilihan terbaik karena performa dan kompatibilitas terbaik. Microsoft Edge (berbasis Chromium) juga sangat baik. Firefox dan Safari juga kompatibel. Pastikan browser selalu diperbarui ke versi terbaru.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bot STC AutoTrade tetap jalan saat browser diminimize di PC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, bot tetap berjalan selama tab browser STC AutoTrade tetap aktif (tidak ditutup) dan koneksi internet stabil. Anda bisa meminimize jendela browser — bot akan terus beroperasi di background.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah fitur STC AutoTrade versi web sama dengan versi APK Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fitur inti trading (semua mode bot, manajemen risiko, stop loss, demo mode) tersedia di kedua versi. Versi web mungkin memiliki sedikit perbedaan tampilan antarmuka, namun fungsinya setara untuk keperluan trading.",
      },
    },
  ],
};

/* ── Komponen Lokal ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold text-[#1d4ed8] mb-1">{title}</p>
        <p className="text-[13px] text-[#1e40af] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">✅</span>
      <p className="text-[13px] text-[#14532d] leading-relaxed">{children}</p>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}

function StepCard({ n, title, desc, sub }: { n: string; title: string; desc: string; sub?: string }) {
  return (
    <div className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{n}</div>
      <div className="pt-0.5">
        <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{title}</p>
        <p className="text-[12px] text-[#6b6058] leading-relaxed">{desc}</p>
        {sub && <p className="text-[11px] text-[#3b82f6] mt-1 font-medium">{sub}</p>}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function RobotTradingPcLaptopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ─────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.png" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ──────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612]/70 transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Robot Trading PC & Laptop</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/35">7 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±8 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Robot Trading PC & Laptop:<br className="hidden sm:block" />
            Pakai STC AutoTrade Versi Web 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini menjelaskan cara menggunakan{" "}
            <strong className="font-semibold text-[#1a1612]">robot trading di PC dan laptop</strong>{" "}
            melalui STC AutoTrade versi web — tanpa perlu menginstal aplikasi apapun,
            kompatibel dengan semua sistem operasi dan browser modern.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Browser", l: "Tanpa Instal" },
              { v: "Semua OS", l: "Win/Mac/Linux" },
              { v: "Fitur Penuh", l: "Sama dengan APK" },
              { v: "Gratis", l: "Akses" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-4 px-3 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/40">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Mengapa Tidak Ada Aplikasi Desktop ─── */}
            <section>
              <SectionLabel>01 · Penjelasan Versi Web</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengapa Tidak Ada Aplikasi Desktop STC AutoTrade?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Banyak pengguna yang mencari "download STC AutoTrade untuk Windows" atau
                  "STC AutoTrade untuk Mac" — namun tidak menemukannya. Ini bukan bug atau
                  kekurangan, melainkan keputusan desain yang justru menguntungkan Anda.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Kenapa Pilih Versi Web?</h3>
                    <ul className="space-y-2.5">
                      {[
                        { icon: "🚀", text: "Tidak perlu download atau instal — langsung buka di browser" },
                        { icon: "🔄", text: "Update otomatis — selalu versi terbaru tanpa perlu update manual" },
                        { icon: "💻", text: "Berjalan di semua OS: Windows, macOS, Linux, ChromeOS" },
                        { icon: "🔒", text: "Tidak perlu khawatir keamanan file APK di PC" },
                        { icon: "📱", text: "Bisa login dari mana saja — HP, tablet, PC, laptop" },
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[12px] text-[#6b6058]">
                          <span className="flex-shrink-0">{item.icon}</span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Ringkasan Pilihan Platform</h3>
                    <div className="space-y-3">
                      {[
                        { platform: "Android", cara: "APK (Download dari stcautotrade.id)", icon: "📱" },
                        { platform: "PC / Laptop / Mac", cara: "Web App (stcautotradepro.id)", icon: "💻" },
                        { platform: "iPhone / iPad", cara: "Web App (stcautotradepro.id)", icon: "📲" },
                        { platform: "Tablet Android", cara: "APK atau Web App", icon: "📟" },
                      ].map((item) => (
                        <div key={item.platform} className="flex items-center gap-3 text-[12px]">
                          <span className="text-lg flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-[#1a1612]">{item.platform}</p>
                            <p className="text-[#6b6058]">{item.cara}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <InfoBox icon="💡" title="STC AutoTrade di PC = stcautotradepro.id">
                  Untuk menggunakan STC AutoTrade di PC atau laptop, cukup buka browser
                  favorit Anda dan ketik <strong>stcautotradepro.id</strong>. Tidak ada
                  yang perlu diunduh atau diinstal. Login dengan akun Stockity.id dan
                  semua fitur langsung tersedia.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Cara Akses di PC/Laptop ───────────── */}
            <section>
              <SectionLabel>02 · Cara Akses PC/Laptop</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Akses STC AutoTrade di PC atau Laptop
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Mengakses STC AutoTrade di PC atau laptop sangat sederhana.
                  Ikuti langkah berikut dan bot trading Anda bisa aktif dalam kurang dari 2 menit:
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Buka browser di PC/laptop"
                    desc="Buka Google Chrome, Microsoft Edge, Firefox, atau browser modern lainnya di PC atau laptop Anda. Pastikan browser sudah diperbarui ke versi terbaru."
                    sub="Chrome direkomendasikan untuk performa terbaik."
                  />
                  <StepCard
                    n="2"
                    title="Akses stcautotradepro.id"
                    desc="Ketik stcautotradepro.id di address bar browser dan tekan Enter. Halaman web STC AutoTrade akan terbuka. Tidak perlu menginstal extension atau plugin apapun."
                  />
                  <StepCard
                    n="3"
                    title="Login dengan akun Stockity.id"
                    desc="Masukkan email dan password akun Stockity.id Anda. Jika belum punya akun, klik 'Daftar Akun Baru' dan ikuti proses registrasi yang sama seperti di HP."
                    sub="Akun Stockity.id yang sama bisa digunakan di HP dan PC secara bersamaan."
                  />
                  <StepCard
                    n="4"
                    title="Pilih mode trading"
                    desc="Setelah login, pilih mode demo (untuk latihan tanpa risiko) atau real (untuk trading dengan saldo nyata). Pilih strategi — AI Signal, CTC, atau Indikator."
                  />
                  <StepCard
                    n="5"
                    title="Konfigurasi bot"
                    desc="Setting nominal per trade, mode martingale, dan stop loss. Konfigurasi di versi web identik dengan versi APK Android — tidak ada perbedaan fitur setting."
                    sub="Gunakan setting konservatif jika masih dalam tahap belajar."
                  />
                  <StepCard
                    n="6"
                    title="Aktifkan bot dan pantau"
                    desc="Klik Start/Aktifkan bot. Bot akan mulai bekerja secara otomatis. Biarkan tab browser tetap terbuka — Anda bisa melakukan aktivitas lain di tab atau jendela browser berbeda."
                    sub="Jangan tutup tab STC AutoTrade agar bot tetap aktif."
                  />
                </div>

                <TipBox>
                  <strong>Tips aksesibilitas cepat:</strong> Bookmark halaman stcautotradepro.id
                  di browser PC Anda agar tidak perlu mengetik URL setiap kali. Di Chrome, Anda
                  juga bisa membuat shortcut desktop: klik tiga titik → More Tools → Create Shortcut.
                </TipBox>
              </div>
            </section>

            {/* ── 03: Kompatibilitas Browser ────────────── */}
            <section>
              <SectionLabel>03 · Browser yang Didukung</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kompatibilitas Browser untuk STC AutoTrade di PC
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  STC AutoTrade versi web kompatibel dengan semua browser modern.
                  Berikut detail kompatibilitas dan rekomendasi browser terbaik:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      browser: "Google Chrome",
                      icon: "🟡",
                      status: "Direkomendasikan",
                      statusColor: "bg-emerald-100 text-emerald-700",
                      desc: "Performa terbaik, kompatibilitas penuh, update rutin. Tersedia untuk Windows, macOS, Linux.",
                      tips: "Gunakan Chrome versi terbaru (120+) untuk pengalaman optimal.",
                    },
                    {
                      browser: "Microsoft Edge",
                      icon: "🔵",
                      status: "Sangat Baik",
                      statusColor: "bg-blue-100 text-blue-700",
                      desc: "Berbasis Chromium, performa setara Chrome. Sudah terinstal default di Windows 10/11.",
                      tips: "Pilihan bagus jika tidak ingin instal Chrome terpisah.",
                    },
                    {
                      browser: "Mozilla Firefox",
                      icon: "🟠",
                      status: "Kompatibel",
                      statusColor: "bg-orange-100 text-orange-700",
                      desc: "Kompatibel dengan semua fitur STC AutoTrade. Baik untuk pengguna yang mengutamakan privasi.",
                      tips: "Pastikan Firefox versi 100+ dan JavaScript aktif.",
                    },
                    {
                      browser: "Safari",
                      icon: "🔵",
                      status: "Kompatibel",
                      statusColor: "bg-blue-100 text-blue-700",
                      desc: "Browser default macOS dan iOS. Kompatibel dengan STC AutoTrade versi web.",
                      tips: "Cocok untuk pengguna Mac. Update ke Safari 16+ untuk hasil terbaik.",
                    },
                  ].map((b) => (
                    <div key={b.browser} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{b.icon}</span>
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{b.browser}</h3>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${b.statusColor}`}>{b.status}</span>
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{b.desc}</p>
                      <p className="text-[11px] text-[#3b82f6] font-medium">{b.tips}</p>
                    </div>
                  ))}
                </div>

                <WarningBox>
                  <strong>Hindari browser usang:</strong> Jangan gunakan Internet Explorer atau
                  browser yang sudah tidak diperbarui sejak 2020 ke bawah. Browser lama tidak
                  mendukung teknologi web modern yang digunakan STC AutoTrade dan bisa
                  menyebabkan error atau fitur tidak berfungsi.
                </WarningBox>
              </div>
            </section>

            {/* ── 04: Perbandingan Web vs APK ───────────── */}
            <section>
              <SectionLabel>04 · Web vs APK Android</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Perbandingan Fitur: STC AutoTrade Versi Web vs APK Android
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Apakah ada fitur yang hilang di versi web? Berikut perbandingan lengkap
                  antara STC AutoTrade versi web (PC/laptop) dan APK Android:
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Fitur</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1d4ed8]">Web (PC/Laptop)</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#059669]">APK Android</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { fitur: "Mode Demo", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Mode Real Trading", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "AI Signal", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Mode CTC (Copy Trade)", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Setting Martingale", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Stop Loss", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Riwayat Trade", web: "✅ Tersedia", apk: "✅ Tersedia" },
                          { fitur: "Notifikasi Push", web: "⚡ Tergantung browser", apk: "✅ Native" },
                          { fitur: "Perlu Download", web: "❌ Tidak perlu", apk: "✅ Perlu instal" },
                          { fitur: "Update Otomatis", web: "✅ Selalu terbaru", apk: "Manual / auto" },
                        ].map((row) => (
                          <tr key={row.fitur}>
                            <td className="px-4 py-3 font-medium text-[#1a1612]">{row.fitur}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.web}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.apk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <TipBox>
                  <strong>Kesimpulan:</strong> Untuk kebutuhan trading sehari-hari, versi web
                  dan APK Android memiliki fitur yang setara. Pilih sesuai perangkat yang Anda
                  gunakan — PC/laptop gunakan web, Android gunakan APK untuk pengalaman native lebih baik.
                </TipBox>
              </div>
            </section>

            {/* ── 05: Tips Optimasi di Browser ──────────── */}
            <section>
              <SectionLabel>05 · Optimasi Performa</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Optimasi Performa STC AutoTrade di Browser PC
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Untuk memastikan bot berjalan optimal di versi web PC, ikuti tips
                  optimasi berikut yang sering diabaikan pengguna:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🔌",
                      title: "Pastikan Koneksi Internet Stabil",
                      desc: "Bot trading memerlukan koneksi internet yang stabil untuk mengeksekusi order. Gunakan koneksi kabel LAN jika memungkinkan, atau WiFi yang andal. Hindari menggunakan data seluler lewat hotspot untuk sesi trading panjang.",
                    },
                    {
                      icon: "🧹",
                      title: "Tutup Tab Browser yang Tidak Diperlukan",
                      desc: "Semakin banyak tab browser yang terbuka, semakin besar penggunaan RAM dan CPU. Tutup tab yang tidak diperlukan agar STC AutoTrade mendapat alokasi resource yang cukup.",
                    },
                    {
                      icon: "🔇",
                      title: "Nonaktifkan Extension yang Berat",
                      desc: "Extension seperti ad blocker agresif, VPN browser, atau ekstensi berat lainnya bisa mengganggu koneksi WebSocket yang digunakan STC AutoTrade. Nonaktifkan extension yang tidak perlu saat trading.",
                    },
                    {
                      icon: "💾",
                      title: "Bersihkan Cache Browser Berkala",
                      desc: "Cache browser yang penuh bisa memperlambat halaman web. Bersihkan cache browser setiap 1–2 minggu: Chrome → Pengaturan → Privasi → Hapus data penjelajahan.",
                    },
                    {
                      icon: "🖥️",
                      title: "Gunakan Mode Jendela Terpisah",
                      desc: "Jalankan STC AutoTrade di jendela browser terpisah (bukan tab) agar lebih mudah dipantau tanpa mengganggu browsing Anda di jendela lain.",
                    },
                    {
                      icon: "📊",
                      title: "Pantau Penggunaan CPU/RAM",
                      desc: "Jika PC terasa lambat saat bot aktif, buka Task Manager (Ctrl+Shift+Esc) untuk cek penggunaan resource. Jika CPU atau RAM di atas 80%, tutup aplikasi lain yang tidak diperlukan.",
                    },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5 flex gap-3">
                      <span className="text-xl flex-shrink-0">{tip.icon}</span>
                      <div>
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{tip.title}</p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 06: Cara Setting Bot agar Tetap Jalan ─── */}
            <section>
              <SectionLabel>06 · Bot Tetap Aktif</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Setting agar Bot Tetap Jalan di PC Saat Anda Meninggalkan Layar
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Salah satu kekhawatiran umum pengguna PC adalah apakah bot akan tetap berjalan
                  saat komputer tidak aktif digunakan. Berikut cara memastikan bot tetap aktif:
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Jangan tutup tab STC AutoTrade"
                    desc="Bot berjalan di dalam tab browser — selama tab tidak ditutup, bot aktif. Anda bisa membuka tab lain atau jendela browser lain tanpa masalah."
                    sub="Minimize jendela browser aman — tutup tab akan menghentikan bot."
                  />
                  <StepCard
                    n="2"
                    title="Nonaktifkan sleep/hibernate PC"
                    desc="Jika PC masuk mode sleep atau hibernate, browser akan terhenti dan bot berhenti. Atur Power Options Windows/Mac agar PC tidak masuk sleep saat bot aktif."
                    sub="Windows: Control Panel → Power Options → Never sleep saat terhubung ke listrik."
                  />
                  <StepCard
                    n="3"
                    title="Nonaktifkan screen saver yang mematikan layar"
                    desc="Screen saver biasa aman. Namun jika screen saver dikonfigurasi untuk sleep/hibernate, nonaktifkan atau atur agar tidak mematikan perangkat."
                  />
                  <StepCard
                    n="4"
                    title="Pastikan PC terhubung ke listrik"
                    desc="Untuk laptop, pastikan charger terhubung saat bot aktif. Laptop dengan mode baterai sering secara otomatis mengurangi performa atau masuk sleep lebih cepat."
                    sub="Mode 'High Performance' di laptop direkomendasikan saat trading."
                  />
                  <StepCard
                    n="5"
                    title="Gunakan fitur 'Keep Awake' jika perlu"
                    desc="Beberapa extension Chrome (seperti 'Keep Awake' atau 'Caffeine') bisa mencegah PC masuk sleep mode secara otomatis tanpa mengubah pengaturan sistem."
                  />
                </div>

                <InfoBox icon="⚡" title="Alternatif: gunakan HP Android untuk bot 24 jam">
                  Jika ingin bot berjalan penuh tanpa khawatir PC sleep atau koneksi terputus,
                  pertimbangkan menggunakan HP Android dengan APK STC AutoTrade. HP Android
                  lebih efisien daya dan bisa dihubungkan ke charger untuk sesi trading panjang.
                  Cek panduan{" "}
                  <Link href="/artikel/robot-stockity-android" className="underline font-semibold">
                    robot trading Stockity Android
                  </Link>.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Robot Trading di PC & Laptop
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Apakah STC AutoTrade bisa dipakai di PC atau laptop?",
                    a: "Ya. STC AutoTrade memiliki versi web yang bisa diakses di PC, laptop, Mac, atau perangkat apapun yang memiliki browser modern. Buka stcautotradepro.id di browser Anda — tidak perlu menginstal apapun.",
                  },
                  {
                    q: "Apakah ada aplikasi desktop STC AutoTrade untuk Windows atau Mac?",
                    a: "Tidak ada aplikasi desktop terpisah untuk Windows atau Mac. STC AutoTrade untuk PC/laptop diakses melalui versi web di stcautotradepro.id. Versi APK tersedia khusus untuk Android.",
                  },
                  {
                    q: "Browser apa yang paling bagus untuk STC AutoTrade di PC?",
                    a: "Google Chrome adalah pilihan terbaik karena performa dan kompatibilitas terbaik. Microsoft Edge (berbasis Chromium) juga sangat baik. Firefox dan Safari juga kompatibel. Pastikan browser selalu diperbarui ke versi terbaru.",
                  },
                  {
                    q: "Apakah bot STC AutoTrade tetap jalan saat browser diminimize di PC?",
                    a: "Ya, bot tetap berjalan selama tab browser STC AutoTrade tetap aktif (tidak ditutup) dan koneksi internet stabil. Anda bisa meminimize jendela browser — bot akan terus beroperasi di background.",
                  },
                  {
                    q: "Apakah fitur STC AutoTrade versi web sama dengan versi APK Android?",
                    a: "Fitur inti trading (semua mode bot, manajemen risiko, stop loss, demo mode) tersedia di kedua versi. Versi web mungkin memiliki sedikit perbedaan tampilan antarmuka, namun fungsinya setara untuk keperluan trading.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Kesimpulan ────────────────────────────── */}
            <section>
              <SectionLabel>08 · Kesimpulan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                STC AutoTrade di PC: Mudah, Lengkap, Tanpa Instal
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Menggunakan robot trading STC AutoTrade di PC atau laptop sangat mudah:
                  buka stcautotradepro.id di browser, login dengan akun Stockity.id, dan
                  bot siap diaktifkan. Tidak perlu download, tidak perlu instal — semua
                  fitur tersedia langsung di browser. Pastikan PC tidak masuk sleep mode
                  dan koneksi internet stabil agar bot bisa berjalan optimal.
                </p>
                <TipBox>
                  <strong>Rekomendasi setup PC terbaik:</strong> Chrome terbaru + koneksi WiFi stabil +
                  pengaturan power tidak sleep + tab STC AutoTrade dibuka di jendela terpisah.
                  Dengan setup ini, bot bisa berjalan seharian tanpa gangguan.
                </TipBox>
                <WarningBox>
                  <strong>Disclaimer:</strong> Trading binary option mengandung risiko kerugian finansial.
                  Gunakan mode demo terlebih dahulu sebelum trading dengan modal nyata, dan selalu
                  aktifkan stop loss.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade di Stockity 2026" },
                { href: "/artikel/robot-stockity-android", title: "Robot Stockity Android", desc: "Cara instal dan pakai STC AutoTrade di HP Android" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot", desc: "Konfigurasi bot: nominal, martingale, stop loss" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#3b82f6]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#3b82f6] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Akses dari PC · Tanpa Instal</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Mulai STC AutoTrade di PC Sekarang</p>
              <p className="text-[13px] text-[#6b6058]">Buka stcautotradepro.id di browser PC Anda — atau download APK untuk Android.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">
                Buka Versi Web
              </a>
              <a href="/StcAutoTrade.apk" download className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">
                Download APK
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/25">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
            </p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
