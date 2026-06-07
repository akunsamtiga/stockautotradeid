import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Indikator Trading Binary Option Terbaik untuk Pemula 2026",
  description:
    "Panduan lengkap indikator trading binary option paling akurat. Pelajari RSI, Moving Average, Bollinger Bands, dan cara pakainya di Stockity.",
  keywords: [
    "indikator trading binary option",
    "indikator binary option terbaik",
    "RSI binary option",
    "moving average binary option",
    "indikator stockity",
    "teknikal analisis binary option",
    "bollinger bands binary option",
    "stochastic oscillator binary option",
    "indikator trading stockity",
    "analisis teknikal stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
  },
  openGraph: {
    title: "Indikator Trading Binary Option Terbaik untuk Pemula 2026",
    description:
      "Panduan lengkap indikator trading binary option paling akurat. Pelajari RSI, Moving Average, Bollinger Bands, dan cara pakainya di Stockity.",
    url: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Indikator Trading Binary Option Terbaik 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indikator Trading Binary Option Terbaik untuk Pemula 2026",
    description:
      "Panduan lengkap indikator trading binary option paling akurat. Pelajari RSI, Moving Average, Bollinger Bands, dan cara pakainya di Stockity.",
    images: ["https://stcautotrade.id/og-image.png"],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Indikator Trading Binary Option Terbaik untuk Pemula 2026",
  description:
    "Panduan lengkap indikator trading binary option paling akurat. Pelajari RSI, Moving Average, Bollinger Bands, dan cara pakainya di Stockity.",
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
    "@id": "https://stcautotrade.id/artikel/indikator-trading-binary-option",
  },
  keywords: "indikator trading binary option, RSI binary option, moving average binary option, indikator stockity",
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
      name: "Indikator Trading Binary Option",
      item: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Indikator terbaik untuk binary option itu apa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada satu indikator yang sempurna. Namun kombinasi RSI + Moving Average adalah pilihan paling populer dan terbukti efektif untuk binary option. RSI mengukur momentum (overbought/oversold) sedangkan MA mengkonfirmasi arah tren. Keduanya tersedia di mode Indikator STC AutoTrade.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah cukup menggunakan 1 indikator saja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara teknis bisa, tapi risikonya lebih tinggi. Satu indikator sering menghasilkan sinyal palsu (false signal). Mengkombinasikan 2-3 indikator yang saling melengkapi meningkatkan akurasi sinyal secara signifikan.",
      },
    },
    {
      "@type": "Question",
      name: "Timeframe mana yang paling cocok untuk indikator binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk binary option dengan durasi 1-5 menit, gunakan chart M1 (1 menit) atau M5 (5 menit). Timeframe yang lebih panjang (M15, H1) menghasilkan sinyal lebih akurat tapi lebih sedikit peluang. Sesuaikan dengan gaya trading Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Indikator mana yang paling akurat untuk binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Akurasi indikator sangat bergantung pada kondisi pasar. RSI akurat di pasar ranging/sideways. Moving Average akurat di pasar trending. Bollinger Bands akurat untuk mendeteksi breakout. Gunakan ketiganya secara bersamaan untuk konfirmasi yang lebih kuat.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah STC AutoTrade menggunakan indikator teknikal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Mode Indikator di STC AutoTrade menganalisis RSI dan Moving Average secara otomatis dan real-time. Bot akan mengeksekusi order berdasarkan sinyal dari kombinasi kedua indikator tersebut tanpa Anda perlu membaca chart secara manual.",
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

export default function IndikatorTradingBinaryOptionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ─────────────────────────────────────────── */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="text-base font-bold text-[#1a1612]">STC <span className="text-[#3b82f6]">AutoTrade</span></span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/artikel" className="text-[13px] text-[#6b6058] hover:text-[#1a1612] transition-colors no-underline">Semua Artikel</Link>
              <a href="/StcAutoTrade.apk" download className="px-4 py-2 bg-[#1a1612] text-white text-[12px] font-semibold rounded-lg no-underline">Download APK</a>
            </div>
          </div>
        </nav>

        {/* ── Article Header ──────────────────────────────── */}
        <div className="pt-28 pb-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                <li><Link href="/" className="hover:text-[#1a1612] no-underline transition-colors">Beranda</Link></li>
                <li className="text-[#1a1612]/20">/</li>
                <li><Link href="/artikel" className="hover:text-[#1a1612] no-underline transition-colors">Artikel</Link></li>
                <li className="text-[#1a1612]/20">/</li>
                <li className="text-[#1a1612] font-medium" aria-current="page">Indikator Trading Binary Option</li>
              </ol>
            </nav>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Edukasi Trading</span>
            {/* H1 */}
            <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
              Indikator Trading Binary Option Terbaik untuk Pemula 2026
            </h1>
            {/* Description */}
            <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
              Panduan lengkap indikator trading binary option paling akurat. Pelajari RSI, Moving Average, Bollinger Bands, dan cara pakainya di Stockity — termasuk bagaimana bot STC AutoTrade menggunakannya secara otomatis.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: "RSI", l: "Paling Populer" },
                { v: "MA", l: "Paling Andal" },
                { v: "3+", l: "Kombinasi Ideal" },
                { v: "Otomatis", l: "di Bot STC" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-3 py-3 text-center">
                  <p className="text-[18px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                  <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 01: Pendahuluan ─────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>01 · Pendahuluan</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mengapa Indikator Penting dalam Trading Binary Option?</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Tahukah Anda bahwa sekitar 89% trader binary option yang kalah secara konsisten tidak memiliki strategi teknikal yang jelas? Mereka trading berdasarkan intuisi, perasaan, atau spekulasi murni — tanpa dasar analisis yang solid. Ini adalah penyebab utama kekalahan di binary option.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Indikator teknikal adalah kompas trading Anda. Sama seperti pilot pesawat yang tidak akan terbang tanpa instrumen navigasi, trader yang serius tidak akan membuka posisi tanpa membaca sinyal dari indikator. Indikator mengubah data harga historis menjadi sinyal visual yang dapat dibaca: kapan harga kemungkinan naik, kapan turun, kapan sideways.
            </p>
            <InfoBox icon="📊" title="Apa itu Indikator Teknikal?">
              Indikator teknikal adalah formula matematis yang diterapkan pada data harga (open, high, low, close) dan volume untuk menghasilkan sinyal visual di chart. Tujuannya: membantu trader mengidentifikasi tren, momentum, dan titik entry/exit yang optimal.
            </InfoBox>
            <div className="mt-4">
              <TipBox>
                Indikator bukan ramalan masa depan — indikator adalah alat probabilitas. Artinya, sinyal indikator menunjukkan kemungkinan arah harga, bukan kepastian. Gunakan kombinasi 2-3 indikator untuk meningkatkan akurasi.
              </TipBox>
            </div>
          </div>
        </section>

        {/* ── Section 02: RSI ─────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>02 · RSI</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">RSI (Relative Strength Index): Indikator Momentum Paling Populer</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              RSI adalah indikator momentum yang mengukur kecepatan dan perubahan pergerakan harga. Nilainya bergerak antara 0 hingga 100, dan digunakan untuk mendeteksi kondisi <strong>overbought</strong> (jenuh beli) dan <strong>oversold</strong> (jenuh jual) pada suatu aset.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">RSI di atas 70 — Overbought</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">Harga sudah terlalu tinggi dan kemungkinan akan berbalik turun. Di binary option: pertimbangkan order PUT (bawah).</p>
                <p className="text-[11px] text-[#ef4444] mt-2 font-medium">Sinyal: masuk PUT saat RSI &gt; 70</p>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">RSI di bawah 30 — Oversold</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">Harga sudah terlalu rendah dan kemungkinan akan memantul naik. Di binary option: pertimbangkan order CALL (atas).</p>
                <p className="text-[11px] text-[#22c55e] mt-2 font-medium">Sinyal: masuk CALL saat RSI &lt; 30</p>
              </div>
            </div>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              RSI 14 (periode default) adalah yang paling umum digunakan. Untuk binary option jangka pendek (1-5 menit), beberapa trader menggunakan RSI 7 atau RSI 9 agar lebih responsif terhadap perubahan harga.
            </p>
            <div className="space-y-3">
              <StepCard
                n="1"
                title="Cara membaca RSI untuk binary option"
                desc="Buka chart aset di platform Stockity. Aktifkan indikator RSI (periode 14). Amati nilai RSI: jika mendekati 70+, tunggu konfirmasi pembalikan lalu order PUT. Jika mendekati 30-, tunggu konfirmasi lalu order CALL."
                sub="Tips: jangan langsung order saat RSI baru menyentuh 70/30 — tunggu konfirmasi candlestick pembalikan."
              />
              <StepCard
                n="2"
                title="Divergence RSI — sinyal kuat"
                desc="Divergence terjadi saat harga membuat high baru tapi RSI tidak ikut membuat high baru (bearish divergence) — atau harga membuat low baru tapi RSI tidak (bullish divergence). Ini adalah sinyal pembalikan yang sangat kuat."
                sub="Divergence RSI adalah salah satu sinyal paling diandalkan trader profesional."
              />
            </div>
            <div className="mt-4">
              <WarningBox>
                RSI bisa stay di zona overbought/oversold dalam waktu lama saat tren kuat. Jangan langsung entry hanya karena RSI &gt; 70 — selalu konfirmasi dengan indikator lain atau pola candlestick.
              </WarningBox>
            </div>
          </div>
        </section>

        {/* ── Section 03: Moving Average ──────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>03 · Moving Average</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Moving Average (SMA & EMA): Panduan Arah Tren</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Moving Average (MA) adalah rata-rata harga dalam periode tertentu yang ditampilkan sebagai garis di atas chart. MA membantu trader mengidentifikasi arah tren dan momentum pasar. Ada dua jenis utama: SMA (Simple Moving Average) dan EMA (Exponential Moving Average).
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">SMA — Simple Moving Average</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">Rata-rata harga sederhana dalam N periode. Lebih lambat bergerak, cocok untuk mengidentifikasi tren jangka panjang. Contoh: SMA 50 = rata-rata harga 50 candle terakhir.</p>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">EMA — Exponential Moving Average</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">Memberi bobot lebih besar pada harga terbaru. Lebih responsif terhadap perubahan harga. Cocok untuk trading jangka pendek dan scalping binary option.</p>
              </div>
            </div>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              <strong>Golden Cross dan Death Cross</strong> adalah sinyal crossover MA yang paling terkenal. Saat MA50 memotong MA200 dari bawah ke atas (Golden Cross), ini sinyal bullish kuat. Sebaliknya, saat MA50 memotong MA200 dari atas ke bawah (Death Cross), ini sinyal bearish kuat.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-4 py-3">
                <p className="text-[12px] font-semibold text-[#14532d] mb-1">Sinyal Bullish (CALL)</p>
                <p className="text-[12px] text-[#14532d] leading-relaxed">Harga di atas MA → tren naik. MA cepat (EMA 9) memotong MA lambat (EMA 21) dari bawah ke atas → entry CALL.</p>
              </div>
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl px-4 py-3">
                <p className="text-[12px] font-semibold text-[#991b1b] mb-1">Sinyal Bearish (PUT)</p>
                <p className="text-[12px] text-[#991b1b] leading-relaxed">Harga di bawah MA → tren turun. MA cepat (EMA 9) memotong MA lambat (EMA 21) dari atas ke bawah → entry PUT.</p>
              </div>
            </div>
            <InfoBox icon="📈" title="Kombinasi MA yang Direkomendasikan untuk Binary Option">
              Untuk binary option jangka pendek: gunakan EMA 9 + EMA 21 di timeframe M5. Untuk konfirmasi tren lebih kuat: tambahkan EMA 50. Saat ketiga MA searah (EMA9 &gt; EMA21 &gt; EMA50), tren sangat kuat dan peluang CALL sangat baik.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 04: Bollinger Bands ──────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>04 · Bollinger Bands</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Bollinger Bands: Deteksi Volatilitas dan Breakout</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Bollinger Bands terdiri dari tiga garis: garis tengah (SMA 20), upper band (SMA 20 + 2 standar deviasi), dan lower band (SMA 20 - 2 standar deviasi). Indikator ini sangat berguna untuk mengidentifikasi volatilitas pasar dan potensi breakout.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Harga menyentuh Upper Band"
                desc="Saat harga menyentuh atau melewati upper band, pasar dalam kondisi overbought. Di binary option ranging/sideways: ini sinyal potensial untuk entry PUT (harga akan kembali ke tengah)."
                sub="Konfirmasi dengan RSI > 70 untuk akurasi lebih tinggi."
              />
              <StepCard
                n="2"
                title="Harga menyentuh Lower Band"
                desc="Saat harga menyentuh atau melewati lower band, pasar dalam kondisi oversold. Di binary option: ini sinyal potensial untuk entry CALL (harga akan memantul ke atas)."
                sub="Konfirmasi dengan RSI < 30 untuk akurasi lebih tinggi."
              />
              <StepCard
                n="3"
                title="Bollinger Squeeze — sinyal breakout akan datang"
                desc="Saat upper dan lower band menyempit (squeeze), ini menandakan volatilitas sangat rendah dan breakout besar akan segera terjadi. Siap-siap entry searah breakout."
                sub="Setelah squeeze, arah breakout bisa sangat kuat — tunggu konfirmasi arah sebelum entry."
              />
            </div>
            <TipBox>
              Bollinger Bands bekerja terbaik di pasar ranging (sideways). Di pasar yang sedang trending kuat, harga bisa terus berjalan di sepanjang upper atau lower band — jangan counter-trend hanya karena harga menyentuh band.
            </TipBox>
          </div>
        </section>

        {/* ── Section 05: Stochastic ──────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>05 · Stochastic Oscillator</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Stochastic Oscillator: Konfirmasi Momentum Pembalikan</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Stochastic Oscillator adalah indikator momentum yang mirip dengan RSI — sama-sama mengukur kondisi overbought dan oversold. Nilainya bergerak antara 0 hingga 100, dengan zona overbought di atas 80 dan zona oversold di bawah 20.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Yang membedakan Stochastic dari RSI adalah cara kerjanya: Stochastic membandingkan harga penutupan dengan kisaran harga dalam periode tertentu. Stochastic juga memiliki dua garis — %K (garis cepat) dan %D (garis lambat) — yang crossover-nya menghasilkan sinyal entry.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Zona Overbought (&gt; 80)</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">%K memotong %D dari atas ke bawah di zona overbought → sinyal PUT yang kuat. Konfirmasi dengan RSI &gt; 70.</p>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Zona Oversold (&lt; 20)</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">%K memotong %D dari bawah ke atas di zona oversold → sinyal CALL yang kuat. Konfirmasi dengan RSI &lt; 30.</p>
              </div>
            </div>
            <InfoBox icon="🔍" title="Divergence Stochastic — Sinyal Pembalikan Premium">
              Seperti RSI, Stochastic juga bisa menunjukkan divergence. Saat harga membuat higher high tapi Stochastic membuat lower high (bearish divergence), kemungkinan pembalikan tren sangat tinggi. Ini adalah sinyal kualitas tinggi yang sangat dihargai trader berpengalaman.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 06: Kombinasi Indikator ─────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>06 · Strategi Kombinasi</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Kombinasi 2-3 Indikator untuk Akurasi Maksimal</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Menggunakan satu indikator saja sering menghasilkan sinyal palsu. Kunci keberhasilan adalah <strong>konfirmasi antar indikator</strong> — entry hanya saat dua atau lebih indikator memberikan sinyal yang sama.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Prinsip kombinasi yang benar: pilih indikator dari <em>kategori berbeda</em> yang saling melengkapi. Jangan kombinasikan RSI + Stochastic + CCI — ketiganya adalah oscillator momentum yang akan memberikan sinyal yang hampir sama.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="A"
                title="Kombinasi Tren + Momentum (Paling Direkomendasikan)"
                desc="Moving Average (untuk mengidentifikasi tren) + RSI (untuk mengukur momentum dan titik entry). Entry CALL hanya saat: harga di atas EMA, RSI di bawah 30 dan mulai naik. Entry PUT hanya saat: harga di bawah EMA, RSI di atas 70 dan mulai turun."
                sub="Win rate kombinasi ini di pasar ranging: 60-70%."
              />
              <StepCard
                n="B"
                title="Kombinasi Volatilitas + Momentum"
                desc="Bollinger Bands (untuk mendeteksi squeeze dan level ekstrem) + Stochastic (untuk timing entry). Entry saat harga menyentuh lower band DAN Stochastic di zona oversold dan mulai naik."
                sub="Sangat efektif di pasar ranging dengan volatilitas rendah-menengah."
              />
              <StepCard
                n="C"
                title="Triple Confirmation (untuk trader berpengalaman)"
                desc="MA (tren) + RSI (momentum) + Bollinger Bands (volatilitas). Entry hanya saat ketiga indikator memberikan sinyal searah. Peluang entry lebih sedikit tapi akurasi jauh lebih tinggi."
                sub="Cocok untuk trader yang memprioritaskan kualitas sinyal daripada kuantitas."
              />
            </div>
            <WarningBox>
              Hindari overindikasi — menggunakan terlalu banyak indikator (5+) justru membingungkan dan memperlambat keputusan trading. Pilih 2-3 indikator yang Anda pahami betul dan konsisten gunakan kombinasi yang sama.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 07: STC AutoTrade & Indikator ───────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>07 · STC AutoTrade</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mode Indikator di STC AutoTrade: Trading Otomatis Berbasis RSI + MA</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Bagi Anda yang tidak ingin repot memantau chart dan membaca indikator secara manual, STC AutoTrade hadir dengan <strong>Mode Indikator</strong> — sebuah mode trading otomatis yang menggunakan kombinasi RSI dan Moving Average untuk mengeksekusi order secara otomatis di akun Stockity Anda.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Pilih Mode Indikator di STC AutoTrade"
                desc="Buka STC AutoTrade → pilih strategi → aktifkan mode 'Indikator'. Bot akan mulai menganalisis RSI dan MA secara real-time pada aset yang Anda pilih."
                sub="Mode ini cocok untuk pasar ranging dan trending ringan."
              />
              <StepCard
                n="2"
                title="Bot membaca RSI setiap candle"
                desc="Setiap candle baru terbentuk, bot membaca nilai RSI. Jika RSI menunjukkan oversold DAN MA mengkonfirmasi arah uptrend, bot otomatis entry CALL. Sebaliknya untuk PUT."
                sub="Tidak perlu buka chart atau pantau manual — bot bekerja 24/7."
              />
              <StepCard
                n="3"
                title="Aktifkan Stop Loss untuk proteksi"
                desc="Selalu aktifkan fitur Stop Loss Harian di STC AutoTrade saat menggunakan mode apapun. Ini memastikan bot berhenti otomatis jika kerugian harian melebihi batas yang Anda tentukan."
                sub="Rekomendasi: set stop loss 20-30% dari modal awal trading hari itu."
              />
            </div>
            <InfoBox icon="🤖" title="Keunggulan Mode Indikator STC AutoTrade">
              Bot STC AutoTrade tidak pernah lelah, tidak panik, dan tidak membuat keputusan emosional. Bot membaca indikator sesuai algoritma yang konsisten — tanpa terpengaruh fear atau greed. Ini adalah keunggulan utama trading otomatis dibanding trading manual.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 08: FAQ ─────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-6">Pertanyaan yang Sering Diajukan</h2>
            <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
              {[
                {
                  q: "Indikator terbaik untuk binary option itu apa?",
                  a: "Tidak ada satu indikator yang sempurna. Namun kombinasi RSI + Moving Average adalah pilihan paling populer dan terbukti efektif. RSI mengukur momentum sementara MA mengkonfirmasi arah tren. Keduanya tersedia di mode Indikator STC AutoTrade.",
                },
                {
                  q: "Apakah cukup menggunakan 1 indikator saja?",
                  a: "Secara teknis bisa, tapi risikonya lebih tinggi karena sinyal palsu (false signal) lebih sering terjadi. Mengkombinasikan 2-3 indikator yang saling melengkapi meningkatkan akurasi secara signifikan. Idealnya gunakan minimal 2 indikator yang berbeda kategori.",
                },
                {
                  q: "Timeframe mana yang paling cocok untuk indikator binary option?",
                  a: "Untuk binary option dengan durasi 1-5 menit, gunakan chart M1 atau M5. Timeframe yang lebih panjang seperti M15 menghasilkan sinyal lebih akurat tapi lebih sedikit peluang. Sesuaikan dengan gaya dan durasi trading Anda.",
                },
                {
                  q: "Indikator mana yang paling akurat untuk binary option?",
                  a: "Akurasi sangat bergantung pada kondisi pasar. RSI akurat di pasar ranging. MA akurat di pasar trending. Bollinger Bands akurat untuk deteksi breakout. Gunakan ketiga secara bersamaan untuk konfirmasi yang lebih kuat.",
                },
                {
                  q: "Apakah STC AutoTrade menggunakan indikator teknikal?",
                  a: "Ya. Mode Indikator di STC AutoTrade menganalisis RSI dan MA secara otomatis dan real-time. Bot mengeksekusi order berdasarkan sinyal kombinasi kedua indikator tersebut tanpa Anda perlu membaca chart secara manual.",
                },
              ].map((faq) => (
                <div key={faq.q} className="px-5 py-4">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{faq.q}</p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 09: Kesimpulan ──────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Kesimpulan</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Ringkasan: Indikator Trading Binary Option</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Indikator trading adalah fondasi dari strategi binary option yang menguntungkan secara konsisten. RSI, Moving Average, Bollinger Bands, dan Stochastic Oscillator adalah empat indikator paling penting yang perlu dikuasai setiap trader. Kunci keberhasilan bukan memilih indikator paling "canggih" — tapi memahami cara kerja indikator pilihan Anda dan mengkombinasikannya dengan benar.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Untuk pemula, kombinasi RSI + EMA adalah titik mulai terbaik. Pelajari kedua indikator ini dengan tuntas, uji di mode demo Stockity selama beberapa minggu, baru gunakan di akun real. Dan jika ingin lebih praktis, biarkan Mode Indikator STC AutoTrade yang membaca sinyal dan mengeksekusi order secara otomatis untuk Anda.
            </p>
            <TipBox>
              Mulai dari demo. Uji kombinasi indikator Anda selama minimal 50-100 trade di mode demo sebelum pindah ke real. Catat win rate, kondisi pasar saat sinyal akurat dan tidak akurat, lalu optimalkan strategi Anda.
            </TipBox>
          </div>
        </section>

        {/* ── Internal Links ──────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Baca Juga</SectionLabel>
            <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">Artikel Terkait</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Panduan konfigurasi martingale dan stop loss" },
                { href: "/artikel/sinyal-trading-stockity-gratis", title: "Sinyal Trading Gratis", desc: "Cara dapat sinyal trading Stockity gratis" },
                { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading", desc: "Strategi profit konsisten di Stockity" },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="block p-4 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl no-underline hover:border-[#3b82f6]/30 transition-colors">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{r.title}</p>
                  <p className="text-[11px] text-[#6b6058]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="py-14 bg-[#1a1612]">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-4">Mulai Sekarang</p>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-3">Coba STC AutoTrade Gratis</h2>
            <p className="text-[14px] text-white/60 mb-8 max-w-md mx-auto leading-relaxed">Download aplikasinya dan trading otomatis langsung dari Android. Atau akses versi web tanpa install.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/StcAutoTrade.apk" download className="px-7 py-3.5 bg-white text-[#1a1612] text-sm font-bold rounded-xl no-underline hover:bg-white/90 transition-colors">Download APK Android</a>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-xl no-underline hover:bg-white/10 transition-colors">Buka Versi Web</a>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="py-8 bg-[#1a1612] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40">© 2026 STC AutoTrade. Hak cipta dilindungi.</p>
            <div className="flex gap-5">
              <Link href="/" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Beranda</Link>
              <Link href="/artikel" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Artikel</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
