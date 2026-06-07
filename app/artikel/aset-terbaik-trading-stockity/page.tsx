import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Aset Terbaik untuk Trading di Stockity: Pilihan Pair & OTC 2026",
  description:
    "Panduan memilih aset terbaik untuk trading di Stockity. Temukan pair forex, crypto, dan OTC yang paling cocok untuk binary option.",
  keywords: [
    "aset terbaik trading stockity",
    "aset stockity",
    "pair trading stockity",
    "OTC stockity",
    "forex binary option stockity",
    "aset binary option terbaik",
    "EUR USD stockity",
    "crypto binary option stockity",
    "aset OTC terbaik",
    "pair forex terbaik binary option",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
  },
  openGraph: {
    title: "Aset Terbaik untuk Trading di Stockity: Pilihan Pair & OTC 2026",
    description:
      "Panduan memilih aset terbaik untuk trading di Stockity. Temukan pair forex, crypto, dan OTC yang paling cocok untuk binary option.",
    url: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aset Terbaik Trading Stockity 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aset Terbaik untuk Trading di Stockity: Pilihan Pair & OTC 2026",
    description:
      "Panduan memilih aset terbaik untuk trading di Stockity. Temukan pair forex, crypto, dan OTC yang paling cocok untuk binary option.",
    images: ["https://stcautotrade.id/og-image.png"],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Aset Terbaik untuk Trading di Stockity: Pilihan Pair & OTC 2026",
  description:
    "Panduan memilih aset terbaik untuk trading di Stockity. Temukan pair forex, crypto, dan OTC yang paling cocok untuk binary option.",
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
    "@id": "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
  },
  keywords: "aset terbaik trading stockity, pair trading stockity, OTC stockity, forex binary option stockity",
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
      name: "Aset Terbaik Trading Stockity",
      item: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Aset apa yang paling menguntungkan di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada satu aset yang selalu paling menguntungkan — bergantung pada kondisi pasar. Namun EUR/USD dan GBP/USD secara umum menawarkan payout tertinggi dengan spread paling ketat di jam sesi London dan New York. Untuk pemula, EUR/USD atau aset OTC populer adalah pilihan paling konsisten.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa ganti aset di tengah sesi trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa, tapi tidak disarankan tanpa alasan yang kuat. Mengganti aset terlalu sering (asset hopping) adalah kebiasaan berbahaya yang menunjukkan ketidakdisiplinan strategi. Pilih 1-2 aset utama, pelajari karakteristiknya, dan fokus pada aset tersebut.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan aset OTC dan reguler di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aset reguler (forex, crypto, saham) mengikuti jam pasar internasional dan volume trading sesungguhnya. Aset OTC (Over-The-Counter) adalah simulasi platform yang aktif 24/7 termasuk saat pasar global tutup di akhir pekan. Payout OTC bisa sedikit lebih rendah dari aset reguler.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah crypto lebih menguntungkan dari forex di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crypto menawarkan volatilitas lebih tinggi yang berarti potensi profit lebih besar — tapi juga risiko lebih besar. Untuk pemula, forex (terutama EUR/USD) lebih disarankan karena pergerakan lebih dapat diprediksi dengan analisis teknikal standar.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana STC AutoTrade memilih aset terbaik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mode AI di STC AutoTrade melakukan scan real-time terhadap semua aset yang tersedia di Stockity, menganalisis volatilitas, payout ratio, dan kondisi pasar saat ini, lalu secara otomatis memilih aset dengan peluang terbaik berdasarkan parameter yang Anda setting.",
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

export default function AsetTerbaikTradingStockityPage() {
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
                <li className="text-[#1a1612] font-medium" aria-current="page">Aset Terbaik Trading Stockity</li>
              </ol>
            </nav>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Panduan</span>
            {/* H1 */}
            <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
              Aset Terbaik untuk Trading di Stockity: Pilihan Pair & OTC 2026
            </h1>
            {/* Description */}
            <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
              Panduan lengkap memilih aset terbaik untuk trading di Stockity. Temukan pair forex, crypto, dan OTC yang paling cocok untuk binary option — termasuk cara bot STC AutoTrade memilih aset optimal secara otomatis.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: "100+", l: "Total Aset" },
                { v: "OTC", l: "Tersedia 24/7" },
                { v: "Forex", l: "Paling Populer" },
                { v: "Crypto", l: "Volatilitas Tinggi" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-3 py-3 text-center">
                  <p className="text-[18px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                  <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 01: Kategori Aset ───────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>01 · Kategori Aset</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kategori Aset yang Tersedia di Stockity</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Stockity menyediakan lebih dari 100 aset trading yang dikategorikan dalam beberapa kelompok besar. Setiap kategori memiliki karakteristik volatilitas, jam aktif, dan tingkat risiko yang berbeda. Memilih kategori aset yang tepat adalah langkah pertama menuju strategi trading yang solid.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                {
                  kategori: "Forex (Mata Uang)",
                  icon: "💱",
                  desc: "Pasangan mata uang seperti EUR/USD, GBP/USD, USD/JPY. Likuiditas tertinggi, spread paling ketat, paling mudah dianalisis secara teknikal.",
                  level: "Pemula - Menengah",
                  color: "bg-[#eff6ff] border-[#bfdbfe]",
                },
                {
                  kategori: "Cryptocurrency",
                  icon: "₿",
                  desc: "Bitcoin, Ethereum, Litecoin, dan altcoin lainnya. Volatilitas sangat tinggi, pergerakan besar dalam waktu singkat.",
                  level: "Menengah - Mahir",
                  color: "bg-[#fef9c3] border-[#fde68a]",
                },
                {
                  kategori: "Komoditas",
                  icon: "🥇",
                  desc: "Emas (XAU/USD), minyak (WTI), perak. Terpengaruh sentimen geopolitik dan data ekonomi global.",
                  level: "Menengah",
                  color: "bg-[#fef3c7] border-[#fcd34d]",
                },
                {
                  kategori: "Saham & Indeks",
                  icon: "📈",
                  desc: "Saham perusahaan besar (Apple, Google) dan indeks saham (S&P 500, Nasdaq). Aktif hanya saat jam pasar saham.",
                  level: "Menengah - Mahir",
                  color: "bg-[#f0fdf4] border-[#bbf7d0]",
                },
                {
                  kategori: "Aset OTC",
                  icon: "🕐",
                  desc: "Over-The-Counter assets — tersedia 24/7 termasuk akhir pekan saat pasar global tutup. Ideal saat pasar reguler tidak aktif.",
                  level: "Semua Level",
                  color: "bg-[#f5f3ff] border-[#ddd6fe]",
                },
              ].map((item) => (
                <div key={item.kategori} className={`${item.color} border rounded-xl px-4 py-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-[13px] font-semibold text-[#1a1612]">{item.kategori}</p>
                  </div>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-[11px] font-medium text-[#3b82f6]">Level: {item.level}</p>
                </div>
              ))}
            </div>
            <InfoBox icon="💡" title="Tips Memilih Kategori Aset">
              Untuk pemula, mulailah dengan forex (EUR/USD atau USD/JPY) atau aset OTC populer. Hindari crypto sebelum memahami manajemen risiko dengan baik — volatilitas crypto bisa sangat tidak terprediksi untuk pemula.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 02: Forex Terbaik ───────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>02 · Aset Forex</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Aset Forex Terbaik untuk Binary Option di Stockity</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Pair forex adalah kategori aset paling populer di binary option karena likuiditasnya sangat tinggi, spread ketat, dan pergerakan harga lebih dapat diprediksi dengan analisis teknikal standar. Berikut pair forex yang direkomendasikan untuk trading di Stockity:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  pair: "EUR/USD",
                  label: "Paling Direkomendasikan",
                  desc: "Pasangan mata uang paling liquid di dunia. Volume trading terbesar, spread paling ketat, pergerakan stabil dan bisa diprediksi. Aktif optimal saat sesi London (15:00-18:00 WIB) dan New York (20:00-24:00 WIB) overlap.",
                  jam: "15:00 - 24:00 WIB",
                  color: "bg-[#eff6ff] border-[#bfdbfe]",
                },
                {
                  pair: "GBP/USD",
                  label: "Volatilitas Sedang-Tinggi",
                  desc: "Dikenal sebagai 'Cable', GBP/USD memiliki volatilitas lebih tinggi dari EUR/USD yang berarti peluang profit lebih besar — tapi juga risiko lebih tinggi. Sangat aktif saat sesi London.",
                  jam: "14:00 - 20:00 WIB",
                  color: "bg-[#f0fdf4] border-[#bbf7d0]",
                },
                {
                  pair: "USD/JPY",
                  label: "Gerakan Smooth & Stabil",
                  desc: "USD/JPY dikenal dengan pergerakan yang relatif smooth dan trending. Lebih mudah dianalisis dengan Moving Average. Aktif optimal saat sesi Tokyo (06:00-09:00 WIB) dan New York.",
                  jam: "06:00 - 10:00 WIB",
                  color: "bg-[#fef9c3] border-[#fde68a]",
                },
                {
                  pair: "EUR/JPY",
                  label: "Alternatif Solid",
                  desc: "Cross pair yang menggabungkan volatilitas EUR dan JPY. Pergerakan cukup besar dan trennya jelas. Cocok untuk trader yang mencari alternatif dari major pair.",
                  jam: "14:00 - 20:00 WIB",
                  color: "bg-[#f5f3ff] border-[#ddd6fe]",
                },
              ].map((item) => (
                <div key={item.pair} className={`${item.color} border rounded-xl px-4 py-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[14px] font-bold text-[#1a1612]">{item.pair}</p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 bg-white rounded-full text-[#1d4ed8] border border-[#bfdbfe]">{item.label}</span>
                  </div>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-[11px] font-medium text-[#6b6058]">Jam optimal: <span className="text-[#1d4ed8] font-semibold">{item.jam}</span></p>
                </div>
              ))}
            </div>
            <TipBox>
              Pilih aset forex sesuai jam aktif Anda. Jika trading malam hari, EUR/USD atau GBP/USD adalah pilihan terbaik. Jika trading pagi hari, USD/JPY lebih aktif dan liquid saat sesi Asia berlangsung.
            </TipBox>
          </div>
        </section>

        {/* ── Section 03: Aset OTC ─────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>03 · Aset OTC</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Aset OTC: Apa Itu dan Kapan Menggunakannya</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              OTC (Over-The-Counter) adalah aset yang diperdagangkan langsung antara dua pihak tanpa melalui bursa resmi. Di Stockity, aset OTC adalah aset simulasi platform yang tersedia <strong>24 jam sehari, 7 hari seminggu</strong> — termasuk saat pasar forex, saham, dan komoditas global tutup di akhir pekan.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Kapan Gunakan Aset OTC?</p>
                <ul className="space-y-1.5">
                  {[
                    "Sabtu dan Minggu (pasar global tutup)",
                    "Saat sesi trading sepi/low volume",
                    "Saat ingin trading 24/7 tanpa jeda",
                    "Saat aset reguler spread terlalu lebar",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Karakteristik OTC</p>
                <ul className="space-y-1.5">
                  {[
                    "Tersedia 24/7 tanpa gangguan",
                    "Tidak terpengaruh berita ekonomi",
                    "Volatilitas lebih terkontrol",
                    "Payout bisa sedikit lebih rendah",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <InfoBox icon="🕐" title="OTC Populer di Stockity">
              Aset OTC yang paling sering digunakan trader di Stockity antara lain: EUR/USD OTC, GBP/USD OTC, USD/JPY OTC, dan beberapa pasangan OTC eksklusif. Pilih OTC dengan volatilitas yang tidak terlalu ekstrem untuk trading yang lebih terprediksi.
            </InfoBox>
            <div className="mt-4">
              <WarningBox>
                OTC bukan aset yang diperdagangkan di pasar nyata — harganya ditentukan oleh platform. Ini berarti pergerakannya tidak selalu bisa dianalisis dengan cara yang sama seperti aset reguler. Uji strategi Anda di mode demo sebelum trading OTC dengan modal nyata.
              </WarningBox>
            </div>
          </div>
        </section>

        {/* ── Section 04: Crypto ──────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>04 · Cryptocurrency</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Aset Crypto: Volatilitas Tinggi, Risiko Lebih Besar</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Cryptocurrency seperti Bitcoin (BTC/USD), Ethereum (ETH/USD), dan Litecoin (LTC/USD) tersedia di Stockity dan menawarkan peluang trading yang menarik karena volatilitasnya yang sangat tinggi. Pergerakan harga crypto bisa 3-10x lebih besar dari forex dalam periode yang sama.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="BTC"
                title="Bitcoin (BTC/USD) — Raja Crypto"
                desc="Aset crypto paling liquid dan paling banyak diperdagangkan. Pergerakan besar (bisa ratusan dolar dalam menit) memberikan peluang profit besar — tapi juga risiko besar. Sangat sensitif terhadap berita dan sentimen pasar crypto secara keseluruhan."
                sub="Disarankan hanya untuk trader yang sudah memahami manajemen risiko dengan baik."
              />
              <StepCard
                n="ETH"
                title="Ethereum (ETH/USD) — Alternatif Populer"
                desc="Volatilitas serupa dengan Bitcoin tapi dengan harga unit yang lebih rendah. Pergerakan ETH sering mengikuti BTC namun dengan karakteristiknya sendiri. Aktif hampir 24 jam sehari."
                sub="Cocok sebagai diversifikasi dari BTC untuk trader crypto."
              />
              <StepCard
                n="LTC"
                title="Litecoin & Altcoin — Peluang Niche"
                desc="Altcoin seperti LTC, XRP, atau DOGE memiliki volatilitas lebih tinggi dari BTC/ETH — peluang besar tapi risiko sangat tinggi. Likuiditas lebih rendah bisa menyebabkan spread lebih lebar."
                sub="Tidak direkomendasikan untuk pemula."
              />
            </div>
            <WarningBox>
              Crypto binary option bukan untuk pemula. Volatilitas ekstrem crypto bisa menguras modal dengan cepat jika tidak ada manajemen risiko yang ketat. Kuasai trading forex terlebih dahulu sebelum mencoba crypto.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 05: Rekomendasi Pemula ──────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>05 · Rekomendasi Pemula</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Aset yang Direkomendasikan untuk Pemula</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Sebagai pemula, memilih aset yang salah bisa membuat pengalaman trading Anda sangat frustasi. Berikut adalah panduan aset berdasarkan profil trader:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  profil: "Pemula Mutlak (Baru Mulai)",
                  aset: ["EUR/USD OTC (akhir pekan)", "EUR/USD Reguler (jam London/NY)", "USD/JPY (jam Asia/pagi hari)"],
                  alasan: "Pergerakan paling stabil dan dapat diprediksi. Spread ketat, liquiditas tinggi, banyak sumber analisis tersedia.",
                  icon: "🌱",
                  color: "bg-[#f0fdf4] border-[#bbf7d0]",
                },
                {
                  profil: "Pemula Menengah (1-3 Bulan Pengalaman)",
                  aset: ["GBP/USD (volatilitas lebih tinggi)", "EUR/JPY (cross pair)", "GBP/JPY (lebih agresif)"],
                  alasan: "Setelah memahami dasar, coba pair dengan volatilitas lebih tinggi untuk potensi profit lebih besar. Tetap gunakan stop loss.",
                  icon: "📈",
                  color: "bg-[#eff6ff] border-[#bfdbfe]",
                },
                {
                  profil: "Trader Menengah (3+ Bulan Pengalaman)",
                  aset: ["Emas (XAU/USD)", "BTC/USD (dengan modal terbatas)", "Indeks saham (Nasdaq, S&P 500)"],
                  alasan: "Dengan pengalaman manajemen risiko yang solid, mulai eksplorasi aset dengan volatilitas lebih tinggi dan karakteristik berbeda.",
                  icon: "🏆",
                  color: "bg-[#fef9c3] border-[#fde68a]",
                },
              ].map((item) => (
                <div key={item.profil} className={`${item.color} border rounded-xl px-4 py-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-[13px] font-semibold text-[#1a1612]">{item.profil}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.aset.map((a) => (
                      <span key={a} className="text-[11px] bg-white border border-[rgba(26,22,18,0.08)] rounded-md px-2 py-0.5 text-[#1a1612] font-medium">{a}</span>
                    ))}
                  </div>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.alasan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 06: STC AutoTrade & Aset ────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>06 · STC AutoTrade</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara STC AutoTrade Memilih Aset Optimal Secara Otomatis</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Memilih aset terbaik secara manual membutuhkan pemantauan puluhan pair sekaligus — pekerjaan yang melelahkan dan rentan kesalahan. Mode AI di STC AutoTrade menyelesaikan masalah ini dengan melakukan scan otomatis terhadap semua aset yang tersedia di akun Stockity Anda.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Scan Real-Time Semua Aset"
                desc="Bot STC AutoTrade memindai semua aset yang tersedia di Stockity secara real-time, menganalisis volatilitas saat ini, kondisi tren, dan payout ratio masing-masing aset."
                sub="Proses scan berlangsung setiap detik tanpa henti."
              />
              <StepCard
                n="2"
                title="Pilih Aset dengan Peluang Terbaik"
                desc="Berdasarkan parameter yang Anda setting (profil risiko, modal, strategi), bot memilih aset dengan kombinasi volatilitas optimal, payout tertinggi, dan sinyal paling kuat saat ini."
                sub="Tidak perlu Anda pantau chart puluhan pasang mata uang secara bersamaan."
              />
              <StepCard
                n="3"
                title="Eksekusi Otomatis di Aset Terpilih"
                desc="Setelah aset terbaik dipilih dan sinyal entry terkonfirmasi, bot mengeksekusi order secara otomatis. Jika kondisi aset berubah, bot beralih ke aset lain yang lebih optimal."
                sub="Adaptif terhadap kondisi pasar yang berubah sepanjang hari."
              />
            </div>
            <InfoBox icon="🤖" title="Keunggulan Pemilihan Aset Otomatis">
              Mode AI STC AutoTrade bisa memantau 50+ aset secara bersamaan — sesuatu yang mustahil dilakukan manusia secara konsisten. Ini memastikan Anda tidak melewatkan peluang terbaik di aset manapun, kapanpun sesi trading berlangsung.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 07: Kesalahan Umum ───────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>07 · Hindari Kesalahan Ini</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesalahan Umum dalam Memilih Aset Trading</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Beberapa kesalahan dalam pemilihan aset yang sering merugikan trader pemula:
            </p>
            <div className="space-y-3">
              {[
                {
                  no: "1",
                  kesalahan: "Asset Hopping — Ganti Aset Terus",
                  solusi: "Tetapkan 1-2 aset utama dan pelajari karakteristiknya secara mendalam. Ganti aset hanya saat ada alasan fundamental yang kuat, bukan karena setelah loss.",
                },
                {
                  no: "2",
                  kesalahan: "Trading Crypto tanpa Pengalaman",
                  solusi: "Mulai dari forex major yang lebih stabil. Pindah ke crypto hanya setelah win rate konsisten di forex dan manajemen risiko sudah solid.",
                },
                {
                  no: "3",
                  kesalahan: "Trading Aset di Luar Jam Aktifnya",
                  solusi: "EUR/USD paling aktif saat sesi London dan New York. Trading EUR/USD di jam sepi pagi hari akan menghasilkan pergerakan kecil dan spread lebih lebar — kurang menguntungkan.",
                },
                {
                  no: "4",
                  kesalahan: "Memilih Aset Hanya karena Payout Tertinggi",
                  solusi: "Payout tinggi biasanya berarti volatilitas lebih tinggi dan risiko lebih besar. Pilih aset berdasarkan kemampuan analisis Anda, bukan semata-mata payout-nya.",
                },
              ].map((item) => (
                <div key={item.no} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#fee2e2] flex items-center justify-center text-[11px] font-bold text-[#dc2626]">{item.no}</div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{item.kesalahan}</p>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed"><strong className="text-[#15803d]">Solusi:</strong> {item.solusi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  q: "Aset apa yang paling menguntungkan di Stockity?",
                  a: "Tidak ada satu aset yang selalu paling menguntungkan. EUR/USD dan GBP/USD umumnya menawarkan payout tertinggi dengan spread ketat di jam sesi London dan New York. Untuk pemula, EUR/USD atau aset OTC populer adalah pilihan paling konsisten.",
                },
                {
                  q: "Apakah bisa ganti aset di tengah sesi trading?",
                  a: "Bisa, tapi tidak disarankan tanpa alasan kuat. Mengganti aset terlalu sering (asset hopping) menunjukkan ketidakdisiplinan strategi. Pilih 1-2 aset utama, pelajari karakteristiknya, dan fokus pada aset tersebut.",
                },
                {
                  q: "Apa perbedaan aset OTC dan reguler di Stockity?",
                  a: "Aset reguler mengikuti jam pasar internasional dan volume trading nyata. Aset OTC adalah simulasi platform yang aktif 24/7 termasuk akhir pekan. Payout OTC bisa sedikit lebih rendah dari aset reguler.",
                },
                {
                  q: "Apakah crypto lebih menguntungkan dari forex di Stockity?",
                  a: "Crypto menawarkan volatilitas lebih tinggi berarti potensi profit lebih besar — tapi juga risiko lebih besar. Untuk pemula, forex (EUR/USD) lebih disarankan karena pergerakan lebih dapat diprediksi.",
                },
                {
                  q: "Bagaimana STC AutoTrade memilih aset terbaik?",
                  a: "Mode AI di STC AutoTrade melakukan scan real-time terhadap semua aset di Stockity, menganalisis volatilitas, payout ratio, dan kondisi pasar saat ini, lalu otomatis memilih aset dengan peluang terbaik berdasarkan parameter yang Anda setting.",
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
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Ringkasan: Pilih Aset yang Tepat di Stockity</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Pemilihan aset yang tepat adalah fondasi strategi trading binary option yang sukses. Untuk pemula, EUR/USD atau USD/JPY di jam aktifnya adalah pilihan paling aman dan konsisten. Aset OTC ideal untuk trading di akhir pekan. Crypto hanya untuk trader yang sudah berpengalaman dengan manajemen risiko yang matang.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Yang paling penting: pilih satu atau dua aset, pelajari karakteristiknya secara mendalam, dan trading konsisten di aset tersebut. Kedalaman pemahaman satu aset jauh lebih berharga daripada trading semua aset secara superfisial.
            </p>
            <TipBox>
              Gunakan mode demo STC AutoTrade untuk menguji performa di berbagai aset sebelum trading real. Catat win rate per aset, jam terbaik, dan kondisi pasar optimal untuk setiap aset pilihan Anda.
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
                { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading", desc: "Strategi profit konsisten di Stockity" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal yang dibutuhkan untuk mulai?" },
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
