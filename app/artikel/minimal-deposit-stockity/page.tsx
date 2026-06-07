/**
 * app/artikel/minimal-deposit-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : minimal deposit stockity
 *   Secondary: deposit minimum stockity, berapa deposit awal stockity,
 *              minimum deposit stockity, syarat deposit stockity,
 *              deposit stockity berapa
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Minimal Deposit Stockity: Berapa Syarat Awal & Rekomendasi Modal 2026",
  description:
    "Panduan lengkap minimal deposit Stockity — berapa deposit minimum di Stockity.id, perbedaan minimal deposit vs modal aman trading, rekomendasi berdasarkan profil risiko, dan cara mulai dari demo tanpa deposit.",
  keywords: [
    "minimal deposit stockity",
    "deposit minimum stockity",
    "berapa deposit awal stockity",
    "minimum deposit stockity",
    "syarat deposit stockity",
    "deposit stockity berapa",
    "berapa minimal deposit di stockity",
    "minimal deposit stockity.id",
    "batas minimal deposit stockity",
    "cara deposit stockity pertama kali",
    "modal awal stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/minimal-deposit-stockity",
  },
  openGraph: {
    title: "Minimal Deposit Stockity: Berapa Syarat Awal & Rekomendasi Modal 2026",
    description:
      "Panduan minimal deposit Stockity.id — berapa batas minimumnya, rekomendasi modal aman, dan cara mulai dari demo.",
    url: "https://stcautotrade.id/artikel/minimal-deposit-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minimal Deposit Stockity — Syarat & Rekomendasi Modal",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Minimal Deposit Stockity: Berapa Syarat Awal & Rekomendasi Modal 2026",
  description:
    "Panduan minimal deposit Stockity.id — batas minimum, rekomendasi modal aman, dan cara mulai demo.",
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
    "@id": "https://stcautotrade.id/artikel/minimal-deposit-stockity",
  },
  keywords: "minimal deposit stockity, deposit minimum stockity, berapa deposit awal stockity",
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
      name: "Minimal Deposit Stockity",
      item: "https://stcautotrade.id/artikel/minimal-deposit-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa minimal deposit di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimal deposit di Stockity.id bervariasi dan bisa berubah sewaktu-waktu sesuai kebijakan platform dan metode pembayaran yang dipilih. Selalu cek langsung di platform Stockity.id untuk informasi terkini. Untuk trading aman dengan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000.",
      },
    },
    {
      "@type": "Question",
      name: "Bisakah mulai trading Stockity tanpa deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Stockity.id menyediakan akun demo yang bisa digunakan tanpa deposit uang nyata. Di mode demo STC AutoTrade, Anda bisa melatih strategi dan menguji bot trading tanpa risiko finansial. Deposit hanya diperlukan saat ingin trading di akun real.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah deposit minimal sama dengan modal trading yang aman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Minimal deposit adalah batas minimum yang ditetapkan platform — bisa sangat kecil. Modal trading yang aman adalah jumlah yang dibutuhkan agar bot trading bisa berjalan optimal dengan manajemen risiko martingale. Keduanya berbeda dan yang kedua biasanya lebih besar.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa modal awal yang ideal untuk trader pemula Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk pemula dengan profil konservatif menggunakan STC AutoTrade, kami rekomendasikan Rp 300.000–500.000 sebagai modal awal. Dengan nominal trade Rp 14.000 dan maksimal 3 step martingale, modal ini memberikan buffer yang cukup aman.",
      },
    },
    {
      "@type": "Question",
      name: "Kapan waktu yang tepat untuk menambah deposit di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tambah deposit hanya setelah: (1) strategi sudah terbukti di demo minimal 7 hari, (2) Anda konsisten profit di akun real selama 2–4 minggu, (3) Anda menambah modal karena ingin scale up strategi yang sudah terbukti — bukan karena ingin 'balik modal' setelah rugi.",
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

export default function MinimalDepositStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Minimal Deposit Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan Pemula</span>
            <span className="text-[12px] text-[#1a1612]/35">7 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±8 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Minimal Deposit Stockity:<br className="hidden sm:block" />
            Berapa Syarat Awal & Rekomendasi Modal 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini menjawab pertanyaan{" "}
            <strong className="font-semibold text-[#1a1612]">berapa minimal deposit Stockity</strong>{" "}
            — perbedaan antara batas minimum platform dengan modal trading yang benar-benar aman,
            rekomendasi berdasarkan profil risiko, dan cara mulai trading tanpa deposit via mode demo.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Fleksibel", l: "Minimal Deposit" },
              { v: "Demo", l: "Tanpa Deposit" },
              { v: "Rp 300K", l: "Rekomendasi Awal" },
              { v: "Bertahap", l: "Strategi Aman" },
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

            {/* ── 01: Berapa Minimal Deposit ────────────── */}
            <section>
              <SectionLabel>01 · Minimal Deposit</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Berapa Minimal Deposit di Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Pertanyaan "<strong className="text-[#1a1612]">berapa minimal deposit Stockity</strong>" adalah
                  salah satu yang paling sering ditanyakan pemula. Jawabannya: nominal
                  minimum deposit bervariasi tergantung metode pembayaran yang dipilih dan
                  bisa berubah sewaktu-waktu sesuai kebijakan Stockity.id.
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-6">
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-4">Mengapa Kami Tidak Menyebut Angka Pasti?</h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "🔄",
                        text: "Minimal deposit Stockity.id dapat berubah sewaktu-waktu sesuai kebijakan platform — angka yang valid hari ini bisa tidak valid besok.",
                      },
                      {
                        icon: "💳",
                        text: "Berbeda metode pembayaran bisa memiliki batas minimum yang berbeda — transfer bank, OVO, DANA, atau GoPay umumnya punya threshold masing-masing.",
                      },
                      {
                        icon: "📍",
                        text: "Informasi paling akurat dan terkini selalu ada di platform Stockity.id secara langsung — di menu Deposit atau Kasir akun Anda.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <InfoBox icon="🔍" title="Cara cek minimal deposit Stockity terkini">
                  Login ke akun Stockity.id → buka menu Deposit / Kasir → pilih metode
                  pembayaran yang diinginkan → nominal minimum akan ditampilkan langsung
                  di kolom input. Ini cara paling akurat untuk mengetahui batas minimum saat ini.
                </InfoBox>

                <WarningBox>
                  <strong>Ingat:</strong> Minimal deposit platform bukan berarti modal yang
                  cukup untuk trading dengan aman. Ini dua hal yang sangat berbeda — dan
                  memahami perbedaannya penting untuk melindungi modal Anda.
                </WarningBox>
              </div>
            </section>

            {/* ── 02: Minimal Deposit vs Modal Aman ────── */}
            <section>
              <SectionLabel>02 · Platform vs Modal Aman</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Perbedaan Minimal Deposit Platform vs Modal Trading yang Aman
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Ini adalah konsep yang sering disalahpahami pemula. Memahami perbedaan
                  ini bisa mencegah Anda kehilangan seluruh modal di hari pertama trading.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">🏦</span>
                      <h3 className="text-[13px] font-semibold text-[#1a1612]">Minimal Deposit Platform</h3>
                    </div>
                    <ul className="space-y-2 text-[12px] text-[#6b6058]">
                      <li className="flex gap-2"><span className="text-[#1d4ed8]">→</span> Batas minimum yang ditetapkan Stockity.id</li>
                      <li className="flex gap-2"><span className="text-[#1d4ed8]">→</span> Bisa sangat kecil (tergantung kebijakan)</li>
                      <li className="flex gap-2"><span className="text-[#1d4ed8]">→</span> Hanya syarat teknis agar transaksi bisa diproses</li>
                      <li className="flex gap-2"><span className="text-[#1d4ed8]">→</span> Tidak menjamin trading bisa berjalan optimal</li>
                      <li className="flex gap-2"><span className="text-[#1d4ed8]">→</span> Tidak mempertimbangkan manajemen risiko</li>
                    </ul>
                  </div>
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">🛡️</span>
                      <h3 className="text-[13px] font-semibold text-[#1a1612]">Modal Trading yang Aman</h3>
                    </div>
                    <ul className="space-y-2 text-[12px] text-[#6b6058]">
                      <li className="flex gap-2"><span className="text-[#15803d]">→</span> Jumlah yang cukup untuk strategi berjalan optimal</li>
                      <li className="flex gap-2"><span className="text-[#15803d]">→</span> Memperhitungkan buffer martingale (beberapa step)</li>
                      <li className="flex gap-2"><span className="text-[#15803d]">→</span> Memperhitungkan stop loss yang wajar</li>
                      <li className="flex gap-2"><span className="text-[#15803d]">→</span> Bergantung pada strategi dan profil risiko Anda</li>
                      <li className="flex gap-2"><span className="text-[#15803d]">→</span> Biasanya jauh lebih besar dari minimal platform</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Contoh Nyata: Mengapa Perbedaan Ini Penting</h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                    Misalkan minimal deposit Stockity.id adalah Rp 50.000. Anda deposit Rp 50.000
                    dan mulai trading dengan STC AutoTrade dengan nominal Rp 14.000.
                  </p>
                  <div className="bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-[12px] text-rose-800">
                    <strong>Skenario berbahaya:</strong> Trade pertama loss Rp 14.000 →
                    martingale step 2: Rp 35.000 → sudah habis Rp 49.000 dari total Rp 50.000.
                    Akun hangus di step martingale ke-2 saja. Ini bukan karena strategi salah,
                    tapi karena modal tidak cukup untuk menampung volatilitas normal.
                  </div>
                </div>
              </div>
            </section>

            {/* ── 03: Rekomendasi Modal Berdasarkan Profil ─ */}
            <section>
              <SectionLabel>03 · Rekomendasi Modal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Rekomendasi Modal Berdasarkan Profil Risiko Anda
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Berikut panduan modal yang kami rekomendasikan berdasarkan tiga profil
                  risiko berbeda — disesuaikan dengan penggunaan STC AutoTrade di Stockity:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      profil: "Konservatif",
                      subtitle: "Untuk Pemula & yang Mengutamakan Keamanan Modal",
                      color: "bg-emerald-50 border-emerald-200",
                      headerColor: "text-emerald-700",
                      deposit: "Rp 300.000 – 500.000",
                      items: [
                        { label: "Nominal per trade", value: "Rp 14.000 (minimum)" },
                        { label: "Mode martingale", value: "Max 3 step, multiplier 2×" },
                        { label: "Stop loss harian", value: "Rp 60.000 – 100.000" },
                        { label: "Estimasi buffer trade", value: "~10–15 trade sebelum stop loss" },
                        { label: "Cocok untuk", value: "Pemula, learning mode, risiko rendah" },
                      ],
                      note: "Profil paling aman untuk memulai. Fokus pada konsistensi dan pemahaman sistem sebelum memperbesar modal.",
                    },
                    {
                      profil: "Standar",
                      subtitle: "Untuk Trader yang Sudah Familiar dengan Sistem",
                      color: "bg-blue-50 border-blue-200",
                      headerColor: "text-blue-700",
                      deposit: "Rp 500.000 – 1.000.000",
                      items: [
                        { label: "Nominal per trade", value: "Rp 14.000 – 25.000" },
                        { label: "Mode martingale", value: "Max 3 step, multiplier 2,5×" },
                        { label: "Stop loss harian", value: "Rp 100.000 – 200.000" },
                        { label: "Estimasi buffer trade", value: "~12–20 trade sebelum stop loss" },
                        { label: "Cocok untuk", value: "Trader 1–3 bulan pengalaman, win rate sudah stabil" },
                      ],
                      note: "Keseimbangan antara potensi profit dan proteksi modal. Mulai dari sini setelah demo konsisten minimal 2 minggu.",
                    },
                    {
                      profil: "Agresif",
                      subtitle: "Untuk Trader Berpengalaman dengan Toleransi Risiko Tinggi",
                      color: "bg-orange-50 border-orange-200",
                      headerColor: "text-orange-700",
                      deposit: "Rp 1.000.000+",
                      items: [
                        { label: "Nominal per trade", value: "Rp 25.000 ke atas" },
                        { label: "Mode martingale", value: "Max 4 step, multiplier 3×" },
                        { label: "Stop loss harian", value: "Rp 200.000 – 300.000+" },
                        { label: "Estimasi buffer trade", value: "~15–25 trade sebelum stop loss" },
                        { label: "Cocok untuk", value: "Trader 3+ bulan, disiplin stop loss, sudah profitable" },
                      ],
                      note: "Risiko kerugian lebih besar. Hanya untuk yang sudah terbukti konsisten profit di profil standar minimal 1 bulan.",
                    },
                  ].map((p) => (
                    <div key={p.profil} className={`border rounded-xl overflow-hidden ${p.color}`}>
                      <div className="px-5 py-4 border-b border-[rgba(26,22,18,0.07)]">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div>
                            <h3 className={`text-[15px] font-semibold ${p.headerColor}`}>{p.profil}</h3>
                            <p className="text-[12px] text-[#6b6058] mt-0.5">{p.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[11px] text-[#1a1612]/40 mb-0.5">Deposit Rekomendasi</p>
                            <p className="text-[16px] font-bold text-[#1a1612]">{p.deposit}</p>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-4">
                        <div className="space-y-2 mb-3">
                          {p.items.map((item) => (
                            <div key={item.label} className="flex justify-between text-[12px]">
                              <span className="text-[#1a1612]/50">{item.label}</span>
                              <span className="font-medium text-[#1a1612]">{item.value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/60 rounded-lg px-3 py-2 border border-[rgba(26,22,18,0.06)]">
                          <p className="text-[11px] text-[#6b6058]">💡 {p.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 04: Cara Mulai dari Demo ──────────────── */}
            <section>
              <SectionLabel>04 · Demo Dulu</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mulai Trading Demo Dulu Tanpa Deposit
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Kabar baiknya: Anda bisa mulai belajar trading Stockity tanpa deposit
                  sepeser pun. Mode demo di STC AutoTrade menggunakan kondisi pasar nyata
                  dari Stockity.id tanpa risiko uang sungguhan.
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Download STC AutoTrade"
                    desc="Download APK STC AutoTrade dari stcautotrade.id (Android) atau akses versi web di stcautotradepro.id. Gratis, tanpa biaya apapun."
                    sub="Tidak ada biaya download atau registrasi."
                  />
                  <StepCard
                    n="2"
                    title="Buat atau login akun Stockity.id"
                    desc="Daftar akun Stockity.id gratis jika belum punya. Proses hanya butuh email aktif dan kurang dari 5 menit."
                    sub="Belum punya akun? Cek panduan cara daftar Stockity."
                  />
                  <StepCard
                    n="3"
                    title="Aktifkan mode demo di STC AutoTrade"
                    desc="Di halaman utama STC AutoTrade, pilih mode 'Demo' (bukan Real). Anda akan mendapatkan saldo virtual untuk berlatih tanpa risiko finansial."
                  />
                  <StepCard
                    n="4"
                    title="Setting strategi sesuai profil"
                    desc="Konfigurasi bot sesuai profil konservatif: nominal Rp 14.000, max 3 step martingale, multiplier 2×, dan pasang stop loss virtual."
                    sub="Gunakan setting yang akan Anda pakai di akun real — jangan terlalu agresif saat demo."
                  />
                  <StepCard
                    n="5"
                    title="Jalankan minimal 7–14 hari"
                    desc="Jalankan bot demo selama minimal 7–14 hari. Catat win rate harian, drawdown maksimal, dan performa di kondisi pasar berbeda."
                    sub="Target: win rate di atas 50% konsisten selama 7 hari sebelum pindah ke real."
                  />
                  <StepCard
                    n="6"
                    title="Evaluasi sebelum deposit"
                    desc="Jika hasil demo memuaskan dan konsisten, baru pertimbangkan deposit ke akun real. Mulai dengan nominal deposit sesuai profil konservatif (Rp 300K–500K)."
                  />
                </div>

                <TipBox>
                  <strong>Mengapa demo wajib sebelum deposit?</strong> Demo bukan sekadar
                  formalitas — ini adalah fase paling kritis. Banyak trader yang rugi besar
                  karena skip fase demo dan langsung deposit dengan setting yang tidak teruji.
                  Investasi waktu di demo = melindungi modal Anda di akun real.
                </TipBox>
              </div>
            </section>

            {/* ── 05: Kapan Waktu Tepat Deposit ─────────── */}
            <section>
              <SectionLabel>05 · Timing Deposit</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kapan Waktu yang Tepat untuk Deposit ke Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Timing deposit yang tepat bisa sangat mempengaruhi pengalaman trading Anda.
                  Berikut indikator kapan Anda siap dan tidak siap untuk deposit:
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-[#14532d] mb-3">Anda Siap Deposit Jika:</h3>
                    <ul className="space-y-2">
                      {[
                        "Demo sudah berjalan minimal 7 hari",
                        "Win rate demo konsisten di atas 50%",
                        "Memahami cara setting stop loss dengan benar",
                        "Dana deposit adalah uang yang siap ditanggung risikonya",
                        "Sudah membaca panduan cara setting robot Stockity",
                        "Tidak dalam kondisi emosional (ingin balas rugi, dll)",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-[12px] text-[#6b6058]">
                          <span className="text-[#15803d] font-bold flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-rose-700 mb-3">Tunda Deposit Jika:</h3>
                    <ul className="space-y-2">
                      {[
                        "Belum pernah coba mode demo sama sekali",
                        "Ingin deposit untuk 'balik modal' setelah rugi",
                        "Dana yang akan di-deposit adalah uang pinjaman",
                        "Dana yang akan di-deposit adalah dana darurat keluarga",
                        "Belum memahami cara kerja martingale dan risikonya",
                        "Sedang dalam kondisi stress atau tertekan finansial",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-[12px] text-[#6b6058]">
                          <span className="text-rose-600 font-bold flex-shrink-0">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 06: Tips Mengelola Modal ──────────────── */}
            <section>
              <SectionLabel>06 · Tips Manajemen Modal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Mengelola Modal Awal Stockity dengan Bijak
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Deposit sudah masuk — sekarang bagaimana mengelolanya agar tidak habis
                  sia-sia? Berikut prinsip manajemen modal yang terbukti efektif:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🎯",
                      title: "Patuhi Stop Loss Tanpa Terkecuali",
                      desc: "Tentukan stop loss sebelum mulai dan patuhi tanpa negosiasi. Jika bot sudah mencapai stop loss hari ini, STOP. Besok mulai lagi dengan kepala segar.",
                    },
                    {
                      icon: "📊",
                      title: "Gunakan Aturan 2% per Trade",
                      desc: "Idealnya, nominal per trade tidak lebih dari 2% dari total modal. Dengan modal Rp 500K, nominal per trade sebaiknya Rp 10.000–15.000.",
                    },
                    {
                      icon: "🔄",
                      title: "Pisahkan Modal Trading dari Keuangan Pribadi",
                      desc: "Modal trading di Stockity adalah alokasi tersendiri — bukan bagian dari dana darurat, tabungan, atau kebutuhan sehari-hari.",
                    },
                    {
                      icon: "📈",
                      title: "Scale Up Bertahap Setelah Terbukti Profit",
                      desc: "Naikkan modal hanya setelah konsisten profit selama 2–4 minggu. Jangan menaikkan modal karena serakah atau ingin cepat kaya.",
                    },
                    {
                      icon: "🚫",
                      title: "Hindari 'Top Up untuk Balas Rugi'",
                      desc: "Menambah deposit setelah rugi besar dengan harapan bisa balas rugi adalah salah satu jebakan terbesar dalam trading. Evaluasi dulu, baru deposit lagi.",
                    },
                    {
                      icon: "📝",
                      title: "Catat Semua Trade dan Evaluasi Mingguan",
                      desc: "Buat catatan sederhana hasil trading setiap hari. Evaluasi mingguan membantu Anda melihat pola dan memperbaiki strategi sebelum modal terkuras.",
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

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Minimal Deposit Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Berapa minimal deposit di Stockity?",
                    a: "Minimal deposit di Stockity.id bervariasi dan bisa berubah sewaktu-waktu sesuai kebijakan platform dan metode pembayaran yang dipilih. Selalu cek langsung di platform Stockity.id untuk informasi terkini. Untuk trading aman dengan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000.",
                  },
                  {
                    q: "Bisakah mulai trading Stockity tanpa deposit?",
                    a: "Ya, Stockity.id menyediakan akun demo yang bisa digunakan tanpa deposit uang nyata. Di mode demo STC AutoTrade, Anda bisa melatih strategi dan menguji bot trading tanpa risiko finansial. Deposit hanya diperlukan saat ingin trading di akun real.",
                  },
                  {
                    q: "Apakah deposit minimal sama dengan modal trading yang aman?",
                    a: "Tidak. Minimal deposit adalah batas minimum yang ditetapkan platform — bisa sangat kecil. Modal trading yang aman adalah jumlah yang dibutuhkan agar bot trading bisa berjalan optimal dengan manajemen risiko martingale. Keduanya berbeda dan yang kedua biasanya lebih besar.",
                  },
                  {
                    q: "Berapa modal awal yang ideal untuk trader pemula Stockity?",
                    a: "Untuk pemula dengan profil konservatif menggunakan STC AutoTrade, kami rekomendasikan Rp 300.000–500.000 sebagai modal awal. Dengan nominal trade Rp 14.000 dan maksimal 3 step martingale, modal ini memberikan buffer yang cukup aman.",
                  },
                  {
                    q: "Kapan waktu yang tepat untuk menambah deposit di Stockity?",
                    a: "Tambah deposit hanya setelah: strategi sudah terbukti di demo minimal 7 hari, Anda konsisten profit di akun real selama 2–4 minggu, dan Anda menambah modal karena ingin scale up strategi yang sudah terbukti — bukan karena ingin balik modal setelah rugi.",
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
                Minimal Deposit Stockity: Yang Penting Bukan Minimumnya
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Pertanyaan "berapa minimal deposit Stockity" lebih tepat dijawab dengan:
                  cek langsung di Stockity.id untuk informasi terkini. Tapi yang jauh lebih
                  penting adalah memastikan modal Anda cukup untuk trading dengan aman —
                  bukan sekadar memenuhi syarat minimum platform.
                </p>
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Rangkuman Rekomendasi</h3>
                  <div className="space-y-2 text-[13px] text-[#6b6058]">
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">→</span> Mulai dari demo gratis, tidak perlu deposit dulu</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">→</span> Profil konservatif: deposit Rp 300K–500K</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">→</span> Profil standar: deposit Rp 500K–1 juta</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">→</span> Selalu cek minimal deposit terkini di Stockity.id</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">→</span> Deposit hanya dengan dana yang siap ditanggung risikonya</div>
                  </div>
                </div>
                <WarningBox>
                  <strong>Disclaimer:</strong> Trading binary option mengandung risiko kerugian
                  finansial. Tidak ada jaminan profit. Selalu mulai dari demo, gunakan stop loss,
                  dan deposit hanya dana yang tidak mengganggu kebutuhan finansial Anda.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun Stockity dari nol" },
                { href: "/artikel/cara-deposit-stockity", title: "Cara Deposit Stockity", desc: "Panduan lengkap cara isi saldo Stockity.id" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal ideal untuk trading dengan bot?" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Mulai Demo · Gratis & Tanpa Deposit</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Coba STC AutoTrade di Mode Demo Sekarang</p>
              <p className="text-[13px] text-[#6b6058]">Latih strategi tanpa risiko finansial. Deposit hanya saat sudah siap dan terbukti di demo.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <a href="/StcAutoTrade.apk" download className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">
                Download Gratis
              </a>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">
                Versi Web
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
