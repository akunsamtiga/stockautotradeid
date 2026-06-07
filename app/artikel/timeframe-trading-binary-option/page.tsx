import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Timeframe Trading Binary Option: Pilih Durasi yang Tepat 2026",
  description:
    "Panduan memilih timeframe trading binary option yang tepat. Pelajari perbedaan 1 menit vs 5 menit vs 15 menit dan cara pakainya di Stockity.",
  keywords: [
    "timeframe trading binary option",
    "timeframe binary option terbaik",
    "1 menit binary option",
    "5 menit binary option",
    "durasi binary option stockity",
    "timeframe stockity",
    "scalping binary option",
    "durasi kontrak binary option",
    "cara pilih timeframe binary option",
    "timeframe optimal stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
  },
  openGraph: {
    title: "Timeframe Trading Binary Option: Pilih Durasi yang Tepat 2026",
    description:
      "Panduan memilih timeframe trading binary option yang tepat. Pelajari perbedaan 1 menit vs 5 menit vs 15 menit dan cara pakainya di Stockity.",
    url: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timeframe Trading Binary Option 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeframe Trading Binary Option: Pilih Durasi yang Tepat 2026",
    description:
      "Panduan memilih timeframe trading binary option yang tepat. Pelajari perbedaan 1 menit vs 5 menit vs 15 menit dan cara pakainya di Stockity.",
    images: ["https://stcautotrade.id/og-image.png"],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Timeframe Trading Binary Option: Pilih Durasi yang Tepat 2026",
  description:
    "Panduan memilih timeframe trading binary option yang tepat. Pelajari perbedaan 1 menit vs 5 menit vs 15 menit dan cara pakainya di Stockity.",
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
    "@id": "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
  },
  keywords: "timeframe trading binary option, timeframe binary option terbaik, 1 menit binary option, 5 menit binary option",
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
      name: "Timeframe Trading Binary Option",
      item: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Timeframe mana yang paling akurat untuk binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada satu timeframe yang selalu paling akurat — bergantung pada gaya trading dan kondisi pasar. Secara umum, timeframe lebih panjang (M5, M15) menghasilkan sinyal lebih akurat karena noise lebih sedikit. Namun untuk frekuensi trading lebih tinggi, M1 dengan bot otomatis bisa efektif.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa ganti timeframe di tengah sesi trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara teknis bisa, tapi tidak disarankan. Mengganti timeframe di tengah sesi trading adalah tanda ketidakdisiplinan strategi. Tetapkan timeframe sebelum sesi mulai dan patuhi strategi Anda. Ganti timeframe hanya di awal sesi berikutnya jika ada alasan yang valid.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa timeframe terbaik untuk pemula binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk pemula, M5 (5 menit) adalah pilihan terbaik. Memberikan waktu yang cukup untuk menganalisis sinyal dengan tenang tanpa terburu-buru, namun tidak terlalu lama sehingga peluang datang dengan frekuensi yang wajar. Hindari M1 sampai Anda memiliki strategi yang teruji.",
      },
    },
    {
      "@type": "Question",
      name: "Timeframe M1 atau M5, mana yang lebih menguntungkan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M1 menawarkan lebih banyak peluang per sesi tapi akurasi lebih rendah karena noise tinggi. M5 menawarkan sinyal lebih akurat tapi peluang lebih sedikit. Profit total bergantung pada win rate dikalikan frekuensi — keduanya bisa setara hasilnya jika strategi tepat.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa timeframe optimal untuk bot STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade bekerja optimal di timeframe M1 hingga M5 (kontrak 1-5 menit). Timeframe ini memberikan keseimbangan ideal antara frekuensi trading dan akurasi sinyal. Setting default bot sudah dioptimasi untuk range ini, namun bisa disesuaikan sesuai preferensi Anda.",
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

export default function TimeframeTradingBinaryOptionPage() {
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
                <li className="text-[#1a1612] font-medium" aria-current="page">Timeframe Trading Binary Option</li>
              </ol>
            </nav>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Edukasi Trading</span>
            {/* H1 */}
            <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
              Timeframe Trading Binary Option: Pilih Durasi yang Tepat 2026
            </h1>
            {/* Description */}
            <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
              Panduan lengkap memilih timeframe trading binary option yang tepat. Pelajari perbedaan 1 menit vs 5 menit vs 15 menit, cara memilih sesuai modal dan gaya trading, serta timeframe optimal untuk bot STC AutoTrade.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: "1-5 mnt", l: "Rekomendasi" },
                { v: "Scalping", l: "Gaya Trading" },
                { v: "Fleksibel", l: "di STC Bot" },
                { v: "Lebih Aman", l: "Timeframe Panjang" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-3 py-3 text-center">
                  <p className="text-[18px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                  <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 01: Apa Itu Timeframe ───────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>01 · Dasar Timeframe</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Apa Itu Timeframe di Binary Option?</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Di binary option, <strong>timeframe</strong> (juga disebut durasi kontrak atau expiry time) adalah lamanya waktu antara saat Anda membuka posisi dan saat posisi tersebut diselesaikan (expire). Misalnya, jika Anda memilih timeframe 5 menit, artinya prediksi Anda (CALL atau PUT) akan diverifikasi tepat 5 menit setelah order dibuka.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Memilih timeframe yang tepat adalah salah satu keputusan paling krusial dalam binary option. Timeframe yang salah bisa membuat strategi terbaik sekalipun menghasilkan banyak kerugian — bukan karena analisisnya salah, tapi karena durasi yang dipilih tidak sesuai dengan karakteristik sinyal yang digunakan.
            </p>
            <InfoBox icon="⏱️" title="Timeframe vs Timeframe Chart — Apa Bedanya?">
              Jangan bingung antara timeframe kontrak (durasi posisi) dan timeframe chart (periode setiap candlestick). Untuk binary option 5 menit, Anda biasanya menganalisis chart M1 atau M5. Timeframe chart lebih rendah memberikan lebih banyak detail, timeframe lebih tinggi memberikan gambaran tren yang lebih bersih.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 02: Timeframe 1 Menit ───────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>02 · Timeframe 1 Menit</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Timeframe 1 Menit: Scalping dengan Risiko Tinggi</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Timeframe 1 menit adalah durasi kontrak paling pendek yang tersedia di kebanyakan platform binary option termasuk Stockity. Dengan M1, Anda bisa mengeksekusi puluhan bahkan ratusan trade dalam satu sesi — gaya trading ini disebut scalping.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#14532d] mb-2">Keunggulan M1</p>
                <ul className="space-y-1.5">
                  {[
                    "Frekuensi trading sangat tinggi",
                    "Hasil (profit/loss) terlihat cepat",
                    "Bisa mengumpulkan banyak data",
                    "Modal bekerja lebih dinamis",
                    "Cocok untuk bot otomatis",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#14532d]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#991b1b] mb-2">Kelemahan M1</p>
                <ul className="space-y-1.5">
                  {[
                    "Noise sangat tinggi (banyak false signal)",
                    "Analisis manual hampir mustahil",
                    "Tekanan psikologi sangat intens",
                    "Drawdown bisa cepat dan dalam",
                    "Membutuhkan eksekusi sangat cepat",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#991b1b]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <WarningBox>
              Timeframe 1 menit sangat tidak disarankan untuk pemula yang trading manual. Noise harga pada M1 sangat tinggi — sinyal sering palsu dan keputusan harus diambil dalam hitungan detik. Namun untuk bot otomatis seperti STC AutoTrade, M1 bisa efektif karena bot tidak terpengaruh tekanan psikologis.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 03: Timeframe 5 Menit ───────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>03 · Timeframe 5 Menit</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Timeframe 5 Menit: Titik Manis Binary Option</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Timeframe 5 menit (M5) adalah "sweet spot" untuk kebanyakan trader binary option — kombinasi terbaik antara frekuensi trading yang cukup tinggi dan akurasi sinyal yang jauh lebih baik dari M1. Inilah mengapa M5 menjadi timeframe paling populer di Stockity.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Pada M5, noise harga sudah jauh berkurang dibanding M1, sehingga pola candlestick lebih dapat diandalkan dan sinyal indikator teknikal (RSI, MA) lebih akurat. Anda masih punya waktu 5 menit untuk menganalisis setiap situasi dengan lebih tenang sebelum posisi expire.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Cocok untuk Pemula dan Menengah"
                desc="M5 memberikan waktu yang cukup untuk menganalisis chart dan sinyal indikator tanpa terburu-buru. Ini mengurangi keputusan impulsif yang sering merugikan pemula."
                sub="Rekomendasi utama untuk pemula yang baru mulai trading di Stockity."
              />
              <StepCard
                n="2"
                title="Frekuensi Memadai — 10-20 Trade per Sesi"
                desc="Dalam sesi 2 jam, M5 memungkinkan sekitar 20-24 peluang trade. Ini cukup untuk menguji strategi dan mengumpulkan data performa yang bermakna dalam satu hari trading."
                sub="Frekuensi cukup untuk membangun statistik performa yang reliable."
              />
              <StepCard
                n="3"
                title="Sinyal Lebih Bersih dan Akurat"
                desc="RSI, MA, dan pola candlestick di M5 jauh lebih reliabel dibanding M1. Sinyal overbought/oversold RSI di M5 memiliki follow-through yang lebih konsisten."
                sub="Win rate strategy yang sama biasanya 5-15% lebih tinggi di M5 vs M1."
              />
            </div>
            <TipBox>
              Jika Anda belum yakin harus memilih timeframe berapa, mulailah dengan M5. Pelajari karakteristiknya selama beberapa minggu di mode demo, lalu pertimbangkan apakah perlu beralih ke M1 atau M15 berdasarkan hasil aktual.
            </TipBox>
          </div>
        </section>

        {/* ── Section 04: Timeframe 15 & 30 Menit ─────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>04 · Timeframe 15-30 Menit</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Timeframe 15 & 30 Menit: Akurat tapi Sabar</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Timeframe M15 dan M30 menghasilkan sinyal yang jauh lebih akurat dibanding M1 atau M5 karena noise pasar sudah hampir tidak ada di level ini. Namun konsekuensinya, peluang trade jauh lebih sedikit — mungkin hanya 4-8 trade per sesi 2 jam.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Trader yang menggunakan M15 atau M30 biasanya juga mempertimbangkan faktor fundamental — data ekonomi, berita penting, dan sentimen pasar keseluruhan — karena pergerakan di timeframe ini lebih dipengaruhi oleh fundamental dibanding noise teknikal semata.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Cocok untuk Siapa?</p>
                <ul className="space-y-1.5">
                  {[
                    "Trader yang sabar dan tidak terburu-buru",
                    "Trader yang memahami analisis fundamental",
                    "Trader dengan modal lebih besar",
                    "Trading sebagai aktivitas sampingan (tidak full-time)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Perlu Diperhatikan</p>
                <ul className="space-y-1.5">
                  {[
                    "Peluang trade sangat sedikit per sesi",
                    "Perlu modal lebih besar untuk efisiensi",
                    "Hasil trading terlihat lebih lama",
                    "Martingale berisiko lebih besar per langkah",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <InfoBox icon="📊" title="Perbandingan Timeframe Secara Singkat">
              M1: risiko tinggi, frekuensi sangat tinggi, untuk bot. M5: keseimbangan terbaik, direkomendasikan pemula. M15: akurasi tinggi, frekuensi rendah, butuh kesabaran. M30+: hampir seperti forex swing trading, lebih cocok untuk investor aktif.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 05: Pilih Timeframe Sesuai Modal ──────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>05 · Sesuaikan Modal</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Memilih Timeframe Sesuai Modal Anda</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Banyak trader pemula tidak menyadari bahwa pilihan timeframe seharusnya disesuaikan dengan besarnya modal yang dimiliki. Ini bukan soal "timeframe mana yang lebih bagus" — tapi soal manajemen risiko yang proporsional.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  modal: "Modal Kecil (Rp 300K - 500K)",
                  timeframe: "M5 atau M15",
                  nominal: "Rp 14.000 - Rp 25.000 per trade",
                  alasan: "Modal kecil membutuhkan manajemen risiko ketat. Timeframe lebih panjang menghasilkan sinyal lebih akurat sehingga win rate lebih tinggi — mengurangi frekuensi loss yang bisa dengan cepat menguras modal kecil.",
                  color: "bg-[#eff6ff] border-[#bfdbfe]",
                },
                {
                  modal: "Modal Menengah (Rp 500K - 2 Juta)",
                  timeframe: "M5 (Rekomendasi Utama)",
                  nominal: "Rp 25.000 - Rp 50.000 per trade",
                  alasan: "Modal menengah memberikan buffer yang cukup untuk menjalankan strategi M5 dengan martingale hingga 3-4 step. Keseimbangan antara frekuensi trading dan akurasi paling optimal.",
                  color: "bg-[#f0fdf4] border-[#bbf7d0]",
                },
                {
                  modal: "Modal Besar (Rp 2 Juta ke atas)",
                  timeframe: "M1 hingga M15 (fleksibel)",
                  nominal: "Rp 50.000+ per trade",
                  alasan: "Modal besar memberikan fleksibilitas memilih timeframe apapun. M1 dengan bot bisa menghasilkan banyak trade per sesi. M15 memberikan akurasi tinggi dengan nominal trade lebih besar.",
                  color: "bg-[#fef9c3] border-[#fde68a]",
                },
              ].map((item) => (
                <div key={item.modal} className={`${item.color} border rounded-xl px-4 py-4`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="text-[13px] font-bold text-[#1a1612]">{item.modal}</p>
                    <span className="text-[11px] font-semibold bg-white border border-[rgba(26,22,18,0.08)] rounded-md px-2 py-0.5 text-[#1d4ed8]">{item.timeframe}</span>
                  </div>
                  <p className="text-[11px] text-[#6b6058] mb-2">Nominal trade: <strong>{item.nominal}</strong></p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.alasan}</p>
                </div>
              ))}
            </div>
            <TipBox>
              Aturan sederhana: semakin kecil modal, semakin panjang timeframe yang sebaiknya dipilih. Timeframe panjang = win rate lebih tinggi = modal lebih terlindungi dari serangkaian loss berturut-turut.
            </TipBox>
          </div>
        </section>

        {/* ── Section 06: STC AutoTrade & Timeframe ────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>06 · STC AutoTrade</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Timeframe di STC AutoTrade: Bot Optimal di M1-M5</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              STC AutoTrade dirancang dan dioptimasi untuk bekerja terbaik di timeframe 1 hingga 5 menit. Range ini memberikan keseimbangan ideal: frekuensi trading yang cukup tinggi untuk strategi martingale bekerja efektif, namun sinyal yang cukup akurat untuk meminimalkan serangkaian loss panjang.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Setting Timeframe di STC AutoTrade"
                desc="Buka STC AutoTrade → pilih mode bot (Indikator, Momentum, dll) → atur durasi kontrak di menu setting. Pilih antara 1 menit, 2 menit, 3 menit, atau 5 menit sesuai strategi Anda."
                sub="Default setting: 2 menit untuk keseimbangan optimal antara frekuensi dan akurasi."
              />
              <StepCard
                n="2"
                title="Mengapa M1-M5 Optimal untuk Bot?"
                desc="Bot tidak mengalami kelelahan atau tekanan psikologis, sehingga M1 yang tidak cocok untuk manusia menjadi pilihan yang efektif untuk bot. Di M1-M5, bot bisa mengeksekusi 20-100+ trade per sesi dengan konsistensi penuh."
                sub="Bot STC AutoTrade bisa menjalankan M1 dengan win rate yang tidak mungkin dicapai trader manual."
              />
              <StepCard
                n="3"
                title="Adaptasi Otomatis Berdasarkan Kondisi Pasar"
                desc="Dalam beberapa mode, STC AutoTrade dapat menyesuaikan timing entry berdasarkan kondisi pasar real-time — memilih momen entry terbaik dalam window timeframe yang Anda setting."
                sub="Konsultasikan dengan panduan setting bot untuk konfigurasi optimal."
              />
            </div>
            <InfoBox icon="🤖" title="Tips Setting Timeframe di STC AutoTrade">
              Untuk pemula, mulai dengan durasi kontrak 5 menit (M5) dan modal konservatif. Setelah win rate konsisten di atas 55% selama 2 minggu demo, pertimbangkan beralih ke M2 atau M3 untuk meningkatkan frekuensi tanpa mengorbankan terlalu banyak akurasi.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 07: Kesalahan Ganti Timeframe ───────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>07 · Hindari Ini</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesalahan Umum: Ganti Timeframe Terlalu Sering</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Salah satu kebiasaan paling merusak yang dilakukan trader pemula adalah mengganti timeframe terlalu sering — biasanya sebagai respons emosional terhadap serangkaian loss. Ini disebut "timeframe hopping" dan hampir selalu memperburuk situasi.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  skenario: "Loss 3x berturut-turut di M5 → Ganti ke M1",
                  masalah: "Anda mengganti timeframe bukan karena strategi, tapi karena frustrasi. M1 memiliki noise lebih tinggi yang kemungkinan besar mempercepat kerugian.",
                  solusi: "Setelah serangkaian loss, berhenti trading selama 30-60 menit. Evaluasi apakah loss disebabkan kondisi pasar yang tidak mendukung, bukan masalah timeframe.",
                },
                {
                  skenario: "Profit di M1 demo → Langsung M1 di real dengan modal besar",
                  masalah: "Demo tidak memiliki tekanan psikologis yang sama dengan real. Kemampuan eksekusi M1 secara manual di real sangat berbeda dari demo.",
                  solusi: "Mulai real dengan timeframe lebih panjang (M5) dan nominal kecil. Tingkatkan secara bertahap setelah konsisten profit minimal 2 minggu.",
                },
                {
                  skenario: "Ganti timeframe setiap hari karena 'mencari yang terbaik'",
                  masalah: "Tidak ada data yang cukup untuk mengevaluasi performa di timeframe manapun. Setiap strategi membutuhkan minimal 50-100 trade untuk dinilai akurasi sesungguhnya.",
                  solusi: "Tetapkan timeframe selama minimal 2 minggu (atau 100 trade) sebelum mengevaluasi dan mempertimbangkan pergantian.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                  <p className="text-[12px] font-semibold text-[#6b4226] mb-2 bg-[#fffbeb] border border-[#fde68a] rounded-lg px-3 py-1.5">{item.skenario}</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2"><strong className="text-[#dc2626]">Masalah:</strong> {item.masalah}</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed"><strong className="text-[#15803d]">Solusi:</strong> {item.solusi}</p>
                </div>
              ))}
            </div>
            <WarningBox>
              Konsistensi adalah kunci. Pilih satu timeframe, pelajari karakteristiknya secara mendalam, dan gunakan secara konsisten minimal selama 2-4 minggu sebelum membuat perubahan. Data dari 50+ trade diperlukan untuk menilai performa strategi secara akurat.
            </WarningBox>
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
                  q: "Timeframe mana yang paling akurat untuk binary option?",
                  a: "Tidak ada satu timeframe yang selalu paling akurat — bergantung pada gaya trading dan kondisi pasar. Secara umum, timeframe lebih panjang (M5, M15) menghasilkan sinyal lebih akurat karena noise lebih sedikit. Untuk frekuensi tinggi, M1 dengan bot otomatis bisa efektif.",
                },
                {
                  q: "Apakah bisa ganti timeframe di tengah sesi trading?",
                  a: "Secara teknis bisa, tapi tidak disarankan. Mengganti timeframe di tengah sesi adalah tanda ketidakdisiplinan strategi. Tetapkan timeframe sebelum sesi mulai dan patuhi. Ganti timeframe hanya di awal sesi berikutnya jika ada alasan yang valid.",
                },
                {
                  q: "Berapa timeframe terbaik untuk pemula binary option?",
                  a: "Untuk pemula, M5 (5 menit) adalah pilihan terbaik. Memberikan waktu cukup untuk menganalisis sinyal dengan tenang tanpa terburu-buru, namun tidak terlalu lama sehingga peluang datang dengan frekuensi yang wajar.",
                },
                {
                  q: "Timeframe M1 atau M5, mana yang lebih menguntungkan?",
                  a: "M1 menawarkan lebih banyak peluang per sesi tapi akurasi lebih rendah karena noise tinggi. M5 menawarkan sinyal lebih akurat tapi peluang lebih sedikit. Profit total bergantung pada win rate dikalikan frekuensi — keduanya bisa setara jika strategi tepat.",
                },
                {
                  q: "Berapa timeframe optimal untuk bot STC AutoTrade?",
                  a: "STC AutoTrade bekerja optimal di timeframe M1 hingga M5 (kontrak 1-5 menit). Setting ini memberikan keseimbangan ideal antara frekuensi trading dan akurasi sinyal. Default bot sudah dioptimasi untuk range ini.",
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
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Ringkasan: Pilih Timeframe yang Tepat</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Tidak ada timeframe yang sempurna untuk semua orang. Pilihan terbaik bergantung pada modal Anda, gaya trading, pengalaman, dan apakah Anda menggunakan bot atau trading manual. Sebagai panduan umum: pemula mulai dengan M5, pengguna bot bisa eksplorasi M1-M2, dan trader yang sabar bisa mencoba M15.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Yang paling penting adalah konsistensi — pilih timeframe, pelajari karakteristiknya, dan gunakan secara disiplin minimal beberapa minggu sebelum membuat perubahan. Flipping timeframe secara impulsif adalah salah satu penyebab utama kerugian trader pemula.
            </p>
            <TipBox>
              Mulai uji timeframe pilihan Anda di mode demo STC AutoTrade selama minimal 2 minggu. Catat win rate dan drawdown untuk setiap timeframe, baru tentukan timeframe mana yang paling cocok dengan modal dan gaya trading Anda.
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
                { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale", desc: "Cara kerja martingale dan cara setting yang aman" },
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
