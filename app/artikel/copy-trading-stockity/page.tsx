/**
 * app/artikel/copy-trading-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : copy trading stockity
 *   Secondary: CTC stockity, cara copy trading stockity, sinyal copy trading stockity,
 *              copy trade binary option, cara pakai CTC di STC AutoTrade
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Copy Trading Stockity: Panduan CTC & Cara Setting Sinyal 2026",
  description:
    "Panduan lengkap copy trading Stockity — apa itu CTC (Copy Trade Channel), cara kerja copy trading di STC AutoTrade, cara aktivasi, pemilihan sinyal, perbandingan vs AI Signal, dan tips memaksimalkan profit.",
  keywords: [
    "copy trading stockity",
    "CTC stockity",
    "cara copy trading stockity",
    "sinyal copy trading stockity",
    "copy trade binary option",
    "cara pakai CTC di STC AutoTrade",
    "copy trade channel stockity",
    "CTC STC AutoTrade",
    "bot copy trade stockity",
    "sinyal CTC stockity gratis",
    "cara setting CTC stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/copy-trading-stockity",
  },
  openGraph: {
    title: "Copy Trading Stockity: Panduan CTC & Cara Setting Sinyal 2026",
    description:
      "Panduan lengkap copy trading Stockity — CTC, cara aktivasi, pemilihan sinyal, dan tips profit.",
    url: "https://stcautotrade.id/artikel/copy-trading-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Copy Trading Stockity — Panduan CTC",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Copy Trading Stockity: Panduan CTC & Cara Setting Sinyal 2026",
  description:
    "Panduan lengkap copy trading di Stockity menggunakan fitur CTC (Copy Trade Channel) di STC AutoTrade.",
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
    "@id": "https://stcautotrade.id/artikel/copy-trading-stockity",
  },
  keywords: "copy trading stockity, CTC stockity, cara copy trading stockity, sinyal copy trading",
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
      name: "Copy Trading Stockity",
      item: "https://stcautotrade.id/artikel/copy-trading-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu CTC di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CTC singkatan dari Copy Trade Channel — mode di STC AutoTrade di mana bot secara otomatis mengikuti sinyal trading dari sumber terpilih dan mengeksekusi order di akun Stockity.id Anda secara real-time tanpa intervensi manual.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah copy trading Stockity gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, akses fitur CTC di STC AutoTrade gratis. Anda tidak membayar biaya berlangganan untuk menggunakan mode copy trading — cukup download STC AutoTrade dan aktifkan mode CTC.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa win rate CTC copy trading Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Win rate CTC bergantung pada kualitas sinyal yang diikuti dan kondisi pasar. Tidak ada jaminan win rate tetap. Selalu uji sinyal di mode demo sebelum menggunakannya di akun real, dan pantau performanya secara berkala.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan CTC dengan AI Signal di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CTC mengikuti sinyal dari channel atau sumber eksternal yang Anda pilih. AI Signal menggunakan analisis algoritma internal STC AutoTrade berdasarkan data pasar Stockity. Keduanya bisa digunakan secara bergantian sesuai kondisi pasar.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perlu keahlian trading untuk menggunakan CTC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak perlu keahlian analisis teknikal yang mendalam. Namun, Anda tetap perlu memahami dasar manajemen risiko — seperti menentukan stop loss, ukuran nominal per trade, dan tidak mengekspose seluruh modal dalam satu sesi.",
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

export default function CopyTradingStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Copy Trading Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/35">7 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±9 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Copy Trading Stockity:<br className="hidden sm:block" />
            Panduan CTC & Cara Setting Sinyal 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini membahas{" "}
            <strong className="font-semibold text-[#1a1612]">copy trading Stockity</strong>{" "}
            menggunakan fitur CTC (Copy Trade Channel) di STC AutoTrade —
            cara kerja, cara aktivasi, memilih sinyal yang tepat, dan tips
            memaksimalkan profit dengan manajemen risiko yang benar.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "CTC", l: "Mode Copy Trade" },
              { v: "Real-time", l: "Sinyal" },
              { v: "Auto", l: "Eksekusi" },
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

            {/* ── 01: Apa itu Copy Trading / CTC ───────── */}
            <section>
              <SectionLabel>01 · Konsep Dasar</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu Copy Trading di Stockity? Mengenal Fitur CTC
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Copy trading</strong> adalah metode trading di
                  mana Anda mengikuti sinyal atau posisi trader lain secara otomatis — tanpa
                  perlu menganalisis pasar sendiri. Di ekosistem STC AutoTrade dan Stockity,
                  ini dikenal sebagai <strong className="text-[#1a1612]">CTC (Copy Trade Channel)</strong>.
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-6">
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-4">Apa itu CTC (Copy Trade Channel)?</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="text-[#1d4ed8] font-bold text-lg flex-shrink-0">C</span>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1a1612]">Copy</p>
                          <p className="text-[12px] text-[#6b6058]">Bot menyalin sinyal masuk/keluar dari sumber yang dipilih secara otomatis</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-[#1d4ed8] font-bold text-lg flex-shrink-0">T</span>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1a1612]">Trade</p>
                          <p className="text-[12px] text-[#6b6058]">Eksekusi order dilakukan langsung di akun Stockity.id Anda secara real-time</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-[#1d4ed8] font-bold text-lg flex-shrink-0">C</span>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1a1612]">Channel</p>
                          <p className="text-[12px] text-[#6b6058]">Sumber sinyal berupa channel atau feed sinyal yang bisa Anda pilih dan ganti</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f9fafb] rounded-xl p-4 border border-[rgba(26,22,18,0.06)]">
                      <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Cara Kerja Sederhana:</p>
                      <div className="space-y-2 text-[12px] text-[#6b6058]">
                        <div className="flex items-center gap-2">
                          <span className="text-[#1d4ed8]">1.</span> Sinyal masuk dari channel pilihan
                        </div>
                        <div className="text-[#1a1612]/20 text-center">↓</div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#1d4ed8]">2.</span> STC AutoTrade baca sinyal (CALL/PUT)
                        </div>
                        <div className="text-[#1a1612]/20 text-center">↓</div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#1d4ed8]">3.</span> Order dieksekusi di akun Stockity.id Anda
                        </div>
                        <div className="text-[#1a1612]/20 text-center">↓</div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#1d4ed8]">4.</span> Hasil trade terkonfirmasi otomatis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <InfoBox icon="🎯" title="Mengapa CTC populer di kalangan trader Stockity?">
                  CTC memungkinkan trader pemula profit tanpa harus memahami analisis teknikal
                  yang kompleks. Cukup pilih sumber sinyal yang tepercaya, atur nominal dan
                  manajemen risiko, lalu biarkan bot bekerja. Cocok untuk yang tidak punya
                  waktu memantau pasar sepanjang hari.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Cara Kerja CTC di STC AutoTrade ──── */}
            <section>
              <SectionLabel>02 · Cara Kerja</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Kerja CTC di STC AutoTrade: Bot Ikuti Sinyal Otomatis
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Saat mode CTC aktif di STC AutoTrade, bot akan terus-menerus memantau
                  feed sinyal dari sumber yang Anda tentukan. Setiap kali sinyal baru masuk,
                  bot langsung mengeksekusi order sesuai parameter yang sudah dikonfigurasi.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      fase: "Fase 1: Penerimaan Sinyal",
                      icon: "📡",
                      color: "bg-blue-50",
                      steps: [
                        "Bot terhubung ke sumber sinyal CTC yang dipilih",
                        "Sinyal berisi: aset (currency pair), arah (CALL/PUT), durasi ekspirasi",
                        "Bot menerima sinyal dalam hitungan detik setelah diterbitkan",
                      ],
                    },
                    {
                      fase: "Fase 2: Pemrosesan & Validasi",
                      icon: "⚙️",
                      color: "bg-violet-50",
                      steps: [
                        "Bot memvalidasi sinyal sesuai filter yang dikonfigurasi",
                        "Cek apakah aset tersedia di Stockity.id saat ini",
                        "Cek apakah kondisi stop loss belum tercapai",
                      ],
                    },
                    {
                      fase: "Fase 3: Eksekusi Order",
                      icon: "⚡",
                      color: "bg-emerald-50",
                      steps: [
                        "Jika validasi lulus, bot eksekusi order di Stockity.id",
                        "Nominal sesuai setting (misal Rp 14.000 per trade)",
                        "Posisi CALL atau PUT sesuai sinyal yang diterima",
                      ],
                    },
                    {
                      fase: "Fase 4: Monitoring & Stop Loss",
                      icon: "🛡️",
                      color: "bg-amber-50",
                      steps: [
                        "Bot pantau semua trade yang sedang berjalan",
                        "Jika kerugian mencapai batas stop loss → bot berhenti otomatis",
                        "Log hasil setiap trade tersimpan untuk evaluasi",
                      ],
                    },
                  ].map((fase, i) => (
                    <div key={i} className={`${fase.color} border border-[rgba(26,22,18,0.07)] rounded-xl p-5`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{fase.icon}</span>
                        <h3 className="text-[13px] font-semibold text-[#1a1612]">{fase.fase}</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {fase.steps.map((step, j) => (
                          <li key={j} className="flex gap-2 text-[12px] text-[#6b6058]">
                            <span className="text-[#1d4ed8] font-bold flex-shrink-0">•</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 03: Cara Aktivasi CTC ─────────────────── */}
            <section>
              <SectionLabel>03 · Cara Aktivasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mengaktifkan Mode CTC di STC AutoTrade
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Mengaktifkan mode CTC di STC AutoTrade cukup mudah. Ikuti langkah-langkah
                  berikut untuk mulai copy trading di Stockity:
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Buka STC AutoTrade"
                    desc="Download dan buka aplikasi STC AutoTrade (APK Android) atau akses via browser di stcautotradepro.id. Login dengan akun Stockity.id Anda."
                    sub="Pastikan akun Stockity.id sudah terhubung dengan saldo mencukupi."
                  />
                  <StepCard
                    n="2"
                    title="Pilih mode 'CTC' atau 'Copy Trade'"
                    desc="Di halaman utama STC AutoTrade, cari opsi mode trading. Pilih 'CTC', 'Copy Trade', atau 'Copy Trade Channel' dari daftar mode yang tersedia."
                  />
                  <StepCard
                    n="3"
                    title="Masukkan atau pilih sumber sinyal"
                    desc="Masukkan link atau pilih channel sinyal yang ingin diikuti. Ini bisa berupa channel Telegram sinyal, feed sinyal resmi STC AutoTrade, atau sumber lain yang kompatibel."
                    sub="Gunakan sumber sinyal yang sudah diuji — jangan asal pilih dari grup random."
                  />
                  <StepCard
                    n="4"
                    title="Setting nominal dan manajemen risiko"
                    desc="Tentukan nominal per trade (misal Rp 14.000), mode trading (fixed atau martingale), dan batas stop loss. Stop loss WAJIB diisi — jangan skip."
                    sub="Rekomendasi stop loss: 20–30% dari modal total."
                  />
                  <StepCard
                    n="5"
                    title="Aktifkan demo terlebih dahulu"
                    desc="Sebelum menggunakan modal nyata, aktifkan CTC di mode demo. Pantau performa sinyal selama minimal 3–7 hari untuk mengevaluasi akurasi."
                  />
                  <StepCard
                    n="6"
                    title="Switch ke mode real saat siap"
                    desc="Setelah puas dengan hasil demo, switch ke mode real. Mulai dengan nominal kecil dan pantau beberapa hari pertama dengan seksama."
                    sub="Jangan langsung pasang nominal besar di hari pertama mode real."
                  />
                </div>

                <TipBox>
                  <strong>Penting sebelum aktivasi CTC:</strong> Pastikan Anda sudah memahami
                  cara kerja martingale jika menggunakannya bersama CTC. Kombinasi CTC dengan
                  martingale agresif bisa berbahaya jika sinyal sedang dalam periode drawdown.
                  Mulai dengan mode fixed (tanpa martingale) saat pertama kali mencoba CTC.
                </TipBox>
              </div>
            </section>

            {/* ── 04: Cara Memilih Sinyal CTC ───────────── */}
            <section>
              <SectionLabel>04 · Memilih Sinyal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Memilih Sumber Sinyal CTC yang Tepat
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Kualitas sinyal adalah faktor paling menentukan keberhasilan CTC.
                  Berikut kriteria yang harus Anda perhatikan saat memilih sumber sinyal:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "📊",
                      title: "Track Record yang Jelas",
                      desc: "Cari sumber sinyal yang memiliki riwayat win rate yang bisa diverifikasi — bukan sekadar klaim. Minimal ada data 30 hari terakhir dengan log trade yang bisa dicek.",
                      badge: "Wajib",
                      badgeColor: "bg-rose-100 text-rose-700",
                    },
                    {
                      icon: "🕐",
                      title: "Konsistensi Jam Sinyal",
                      desc: "Sinyal yang bagus biasanya konsisten pada jam tertentu sesuai sesi pasar aktif. Hindari channel yang mengirim sinyal random sepanjang hari tanpa pola.",
                      badge: "Penting",
                      badgeColor: "bg-amber-100 text-amber-700",
                    },
                    {
                      icon: "🔍",
                      title: "Transparansi Hasil",
                      desc: "Pilih penyedia sinyal yang jujur membagikan hasil — termasuk loss. Penyedia yang hanya pamer profit tanpa loss patut dicurigai.",
                      badge: "Penting",
                      badgeColor: "bg-amber-100 text-amber-700",
                    },
                    {
                      icon: "💬",
                      title: "Komunitas Aktif",
                      desc: "Sinyal dengan komunitas pengguna aktif biasanya lebih terpercaya. Ada feedback real dari pengguna lain yang bisa dijadikan referensi.",
                      badge: "Opsional",
                      badgeColor: "bg-gray-100 text-gray-600",
                    },
                    {
                      icon: "🎯",
                      title: "Spesialisasi Aset",
                      desc: "Sinyal yang fokus pada 1–3 pasangan mata uang cenderung lebih akurat daripada yang mencakup banyak aset sekaligus. Fokus = lebih dalam analisisnya.",
                      badge: "Tips",
                      badgeColor: "bg-blue-100 text-blue-700",
                    },
                    {
                      icon: "⚡",
                      title: "Latensi Pengiriman",
                      desc: "Sinyal binary option sensitif waktu. Cari channel yang mengirim sinyal setidaknya 1–2 menit sebelum waktu eksekusi — bukan detik-detik terakhir.",
                      badge: "Tips",
                      badgeColor: "bg-blue-100 text-blue-700",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{item.title}</h3>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeColor}`}>{item.badge}</span>
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <WarningBox>
                  <strong>Waspada sinyal berbayar mahal:</strong> Banyak penyedia sinyal yang
                  mematok harga tinggi dengan klaim win rate 90%+. Tidak ada sinyal binary option
                  dengan win rate konstan setinggi itu. Selalu uji sinyal di mode demo sebelum
                  membayar atau menggunakannya di akun real.
                </WarningBox>
              </div>
            </section>

            {/* ── 05: Perbandingan CTC vs AI Signal ────── */}
            <section>
              <SectionLabel>05 · Perbandingan Mode</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                CTC vs AI Signal vs Indikator: Mana yang Tepat untuk Anda?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  STC AutoTrade menawarkan beberapa mode trading. Berikut perbandingan
                  objektif agar Anda bisa memilih yang paling sesuai dengan gaya trading
                  dan tingkat pengalaman Anda:
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Aspek</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1d4ed8]">CTC</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#7c3aed]">AI Signal</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#059669]">Indikator</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { aspek: "Sumber sinyal", ctc: "Channel eksternal", ai: "Algoritma internal", ind: "Analisis teknikal" },
                          { aspek: "Keahlian diperlukan", ctc: "Minimal", ai: "Minimal", ind: "Menengah" },
                          { aspek: "Kontrol pengguna", ctc: "Rendah", ai: "Sedang", ind: "Tinggi" },
                          { aspek: "Transparansi", ctc: "Tergantung sumber", ai: "Terbatas", ind: "Penuh" },
                          { aspek: "Cocok untuk", ctc: "Pemula, pasif", ai: "Pemula-menengah", ind: "Trader aktif" },
                          { aspek: "Risiko utama", ctc: "Sinyal buruk", ai: "Market anomaly", ind: "Salah baca sinyal" },
                        ].map((row) => (
                          <tr key={row.aspek}>
                            <td className="px-4 py-3 font-medium text-[#1a1612]">{row.aspek}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.ctc}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.ai}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.ind}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      mode: "Pilih CTC jika...",
                      color: "bg-blue-50 border-blue-200",
                      items: [
                        "Anda baru mulai trading dan belum paham analisis teknikal",
                        "Anda ingin trading pasif — set dan tinggal",
                        "Sudah punya sumber sinyal tepercaya dari komunitas",
                      ],
                    },
                    {
                      mode: "Pilih AI Signal jika...",
                      color: "bg-violet-50 border-violet-200",
                      items: [
                        "Ingin sinyal otomatis tanpa bergantung sumber eksternal",
                        "Ingin kombinasi bot dengan analisis algoritmik",
                        "Tidak punya akses ke channel sinyal tepercaya",
                      ],
                    },
                    {
                      mode: "Pilih Indikator jika...",
                      color: "bg-emerald-50 border-emerald-200",
                      items: [
                        "Sudah paham analisis teknikal dasar",
                        "Ingin kontrol penuh atas setiap sinyal",
                        "Ingin memahami 'mengapa' bot entry dan exit",
                      ],
                    },
                  ].map((item) => (
                    <div key={item.mode} className={`rounded-xl p-5 border ${item.color}`}>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">{item.mode}</h3>
                      <ul className="space-y-2">
                        {item.items.map((i, j) => (
                          <li key={j} className="flex gap-2 text-[12px] text-[#6b6058]">
                            <span className="text-[#1d4ed8] font-bold flex-shrink-0">→</span>
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 06: Tips Memaksimalkan CTC ────────────── */}
            <section>
              <SectionLabel>06 · Tips Pro</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Memaksimalkan Copy Trading CTC di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Menggunakan CTC bukan berarti Anda bisa sepenuhnya pasif tanpa kontrol.
                  Berikut tips dari trader berpengalaman untuk memaksimalkan hasil CTC
                  sambil tetap mengelola risiko dengan baik:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      n: "01",
                      title: "Selalu uji sinyal di demo minimal 3–7 hari",
                      desc: "Jangan langsung gunakan sinyal baru di akun real. Uji di mode demo untuk melihat konsistensi win rate-nya dalam berbagai kondisi pasar. Sinyal yang bagus di satu hari bisa buruk di hari berikutnya.",
                    },
                    {
                      n: "02",
                      title: "Pasang stop loss yang tidak bisa ditawar",
                      desc: "Stop loss adalah perlindungan terakhir Anda. Set stop loss 20–30% dari modal sebelum mengaktifkan bot. Jika stop loss tercapai dalam sehari, berhenti dan evaluasi — jangan top up dan lanjut.",
                    },
                    {
                      n: "03",
                      title: "Gunakan nominal yang konservatif",
                      desc: "Mulai dengan nominal minimum per trade (Rp 14.000). Jangan tergoda menaikkan nominal hanya karena beberapa trade pertama profit — performa awal tidak menjamin konsistensi.",
                    },
                    {
                      n: "04",
                      title: "Pantau dan evaluasi mingguan",
                      desc: "Setiap minggu, evaluasi performa sinyal CTC yang Anda gunakan. Jika win rate konsisten di bawah 50% selama seminggu, pertimbangkan ganti sumber sinyal.",
                    },
                    {
                      n: "05",
                      title: "Jangan gabungkan terlalu banyak sumber sinyal sekaligus",
                      desc: "Lebih baik satu sumber sinyal yang Anda pahami dan pantau, daripada lima sumber sekaligus yang hasilnya susah dievaluasi. Kualitas lebih penting dari kuantitas sinyal.",
                    },
                    {
                      n: "06",
                      title: "Hindari trading saat berita ekonomi besar",
                      desc: "Saat ada rilis data ekonomi penting (NFP, FOMC, CPI), pasar sangat volatil dan tidak bisa diprediksi. Matikan bot CTC atau kurangi nominal saat momen-momen tersebut.",
                    },
                  ].map((tip) => (
                    <div key={tip.n} className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
                      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{tip.n}</div>
                      <div className="pt-0.5">
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{tip.title}</p>
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
                Pertanyaan Umum: Copy Trading Stockity & CTC
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Apa itu CTC di STC AutoTrade?",
                    a: "CTC singkatan dari Copy Trade Channel — mode di STC AutoTrade di mana bot secara otomatis mengikuti sinyal trading dari sumber terpilih dan mengeksekusi order di akun Stockity.id Anda secara real-time tanpa intervensi manual.",
                  },
                  {
                    q: "Apakah copy trading CTC Stockity gratis?",
                    a: "Ya, akses fitur CTC di STC AutoTrade gratis. Anda tidak membayar biaya berlangganan untuk menggunakan mode copy trading — cukup download STC AutoTrade dan aktifkan mode CTC. Namun sumber sinyal eksternal tertentu mungkin berbayar.",
                  },
                  {
                    q: "Berapa win rate CTC copy trading Stockity?",
                    a: "Win rate CTC bergantung pada kualitas sinyal yang diikuti dan kondisi pasar. Tidak ada jaminan win rate tetap. Selalu uji sinyal di mode demo sebelum menggunakannya di akun real, dan pantau performanya secara berkala.",
                  },
                  {
                    q: "Apa perbedaan CTC dengan AI Signal di STC AutoTrade?",
                    a: "CTC mengikuti sinyal dari channel atau sumber eksternal yang Anda pilih. AI Signal menggunakan analisis algoritma internal STC AutoTrade berdasarkan data pasar Stockity. Keduanya bisa digunakan secara bergantian sesuai kondisi pasar.",
                  },
                  {
                    q: "Apakah perlu keahlian trading untuk menggunakan CTC?",
                    a: "Tidak perlu keahlian analisis teknikal yang mendalam. Namun, Anda tetap perlu memahami dasar manajemen risiko — seperti menentukan stop loss, ukuran nominal per trade, dan tidak mengekspose seluruh modal dalam satu sesi.",
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
                Copy Trading Stockity: Mulai CTC dengan Aman dan Terukur
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Copy trading via fitur CTC di STC AutoTrade adalah cara yang efektif untuk
                  mengautomatisasi trading di Stockity — terutama bagi pemula yang belum menguasai
                  analisis teknikal. Kuncinya: pilih sumber sinyal yang tepercaya, selalu uji
                  di demo dulu, pasang stop loss yang ketat, dan evaluasi performa secara berkala.
                </p>
                <TipBox>
                  <strong>Langkah awal yang tepat:</strong> Download STC AutoTrade → aktifkan
                  mode CTC → pilih sinyal gratis dari komunitas STC AutoTrade → uji di demo
                  3–7 hari → evaluasi → baru pindah ke mode real dengan modal aman.
                </TipBox>
                <WarningBox>
                  <strong>Disclaimer:</strong> Copy trading tidak menjamin profit. Win rate
                  sinyal bisa berubah seiring kondisi pasar. Selalu gunakan stop loss dan
                  trading dengan dana yang memang siap Anda tanggung risikonya.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/sinyal-trading-stockity-gratis", title: "Sinyal Trading Gratis", desc: "Sumber sinyal Stockity gratis yang bisa digunakan di CTC" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot", desc: "Konfigurasi lengkap bot STC AutoTrade dari nol" },
                { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading", desc: "Strategi profit konsisten di Stockity" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Copy Trade · Demo Gratis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Coba Mode CTC di STC AutoTrade Sekarang</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade — aktifkan CTC, uji sinyal di demo gratis, mulai copy trading dengan aman.</p>
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
