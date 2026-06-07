/**
 * app/artikel/trading-binary-option-modal-kecil/page.tsx
 *
 * Target keyword:
 *   Primary  : trading binary option modal kecil
 *   Secondary: trading stockity modal 100 ribu, trading binary option pemula modal kecil,
 *              mulai trading dengan modal minim, trading stockity 200 ribu
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Trading Binary Option Modal Kecil: Mulai dari Rp 100 Ribu 2026",
  description:
    "Panduan lengkap trading binary option dengan modal kecil — simulasi trading modal Rp 100K dan Rp 300K-500K, strategi yang cocok untuk modal minim, kesalahan fatal yang harus dihindari, dan cara mulai dari demo.",
  keywords: [
    "trading binary option modal kecil",
    "trading stockity modal 100 ribu",
    "trading binary option pemula modal kecil",
    "mulai trading dengan modal minim",
    "trading stockity 200 ribu",
    "trading binary option modal minimal",
    "modal kecil binary option",
    "trading stockity modal sedikit",
    "binary option 100 ribu",
    "cara trading stockity modal kecil",
    "strategi binary option modal minim",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
  },
  openGraph: {
    title: "Trading Binary Option Modal Kecil: Mulai dari Rp 100 Ribu 2026",
    description:
      "Panduan trading binary option modal kecil — simulasi, strategi aman, dan cara memaksimalkan modal minim.",
    url: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trading Binary Option Modal Kecil — Panduan 2026",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Trading Binary Option Modal Kecil: Mulai dari Rp 100 Ribu 2026",
  description:
    "Panduan trading binary option modal kecil — simulasi, strategi, dan kesalahan yang harus dihindari.",
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
    "@id": "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
  },
  keywords: "trading binary option modal kecil, trading stockity modal 100 ribu, modal kecil binary option",
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
      name: "Trading Binary Option Modal Kecil",
      item: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa modal minimum untuk trading binary option di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara teknis, Anda bisa mulai trading dengan modal sangat kecil (sesuai minimal deposit platform). Namun untuk trading yang aman dengan manajemen risiko yang benar menggunakan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000 agar bot punya buffer yang cukup.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa profit dengan modal Rp 100.000 di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara matematis mungkin, tapi sangat berisiko. Dengan modal Rp 100.000 dan nominal trade Rp 14.000, hanya ada buffer untuk 2–3 trade sebelum stop loss terkena atau akun hangus. Satu seri loss pendek bisa menghabiskan seluruh modal. Sangat tidak direkomendasikan untuk akun real.",
      },
    },
    {
      "@type": "Question",
      name: "Strategi apa yang paling cocok untuk trading binary option modal kecil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk modal kecil, strategi terbaik adalah: (1) Fastrade dengan nominal tetap (tanpa martingale), (2) AI Signal dengan filter ketat, (3) trading hanya di jam sesi pasar paling aktif. Hindari martingale dengan modal kecil karena satu seri loss bisa menghabiskan seluruh modal.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada cara trading binary option tanpa modal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya — gunakan mode demo di STC AutoTrade. Mode demo menggunakan kondisi pasar nyata dari Stockity.id tanpa risiko uang sungguhan. Ini cara terbaik untuk belajar dan menguji strategi sebelum menggunakan modal nyata.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama untuk balik modal trading binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada jaminan atau timeline yang pasti. Trading binary option mengandung risiko kerugian — bukan investasi yang menjamin return. Fokus pada konsistensi dan manajemen risiko, bukan pada 'kapan balik modal'. Trader yang mengkejar balik modal cenderung mengambil risiko berlebihan dan justru rugi lebih besar.",
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

export default function TradingBinaryOptionModalKecilPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Trading Binary Option Modal Kecil</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Strategi</span>
            <span className="text-[12px] text-[#1a1612]/35">7 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±10 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Trading Binary Option Modal Kecil:<br className="hidden sm:block" />
            Mulai dari Rp 100 Ribu 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini membahas{" "}
            <strong className="font-semibold text-[#1a1612]">trading binary option dengan modal kecil</strong>{" "}
            secara jujur — simulasi nyata dengan modal Rp 100K dan Rp 300K–500K,
            strategi yang tepat untuk modal minim, dan kesalahan fatal yang harus
            dihindari agar modal tidak habis sia-sia.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Rp 14K", l: "Nominal Min Order" },
              { v: "Rp 100K+", l: "Modal Awal" },
              { v: "Demo", l: "Gratis Tanpa Modal" },
              { v: "Konservatif", l: "Profil Aman" },
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

            {/* ── 01: Realita Modal Minimum ──────────────── */}
            <section>
              <SectionLabel>01 · Realita vs Ekspektasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Berapa Modal Minimum untuk Binary Option? Realita vs Ekspektasi
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Banyak yang bertanya "<strong className="text-[#1a1612]">bisa mulai trading binary option dengan modal kecil</strong>?"
                  Jawabannya: bisa secara teknis, tapi penting untuk memahami risikonya secara jujur.
                  Berikut gambaran realistis yang perlu Anda ketahui sebelum memutuskan untuk deposit.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-rose-700 mb-3">❌ Ekspektasi Umum (Salah)</h3>
                    <ul className="space-y-2">
                      {[
                        "Modal Rp 50–100K sudah cukup untuk profit konsisten",
                        "Dengan modal kecil, risiko juga kecil dan aman",
                        "Bisa langsung naik profit dari hari pertama",
                        "Modal kecil cocok untuk 'coba-coba' dulu",
                        "Jika rugi, tidak masalah karena cuma sedikit",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-[12px] text-rose-800">
                          <span className="font-bold flex-shrink-0">×</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
                    <h3 className="text-[13px] font-semibold text-[#14532d] mb-3">✅ Realita (Yang Perlu Diketahui)</h3>
                    <ul className="space-y-2">
                      {[
                        "Modal kecil = buffer sangat tipis untuk volatilitas pasar",
                        "Satu seri loss pendek bisa menghabiskan seluruh modal",
                        "Trading binary option butuh kedisiplinan dan strategi",
                        "Demo adalah cara terbaik untuk 'coba-coba' tanpa risiko",
                        "Kerugian kecil tetap kerugian — mindset penting untuk dijaga",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-[12px] text-[#6b6058]">
                          <span className="text-[#15803d] font-bold flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <InfoBox icon="💡" title="Kunci sukses dengan modal kecil">
                  Modal kecil bukan masalah jika diimbangi dengan disiplin manajemen risiko
                  yang ketat: nominal per trade yang proporsional, stop loss yang dijaga,
                  dan tidak trading saat kondisi emosional. Namun yang paling aman tetap
                  mulai dari mode demo sebelum menggunakan uang nyata.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Simulasi Modal Rp 100K ───────────── */}
            <section>
              <SectionLabel>02 · Simulasi Modal Rp 100K</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Simulasi Trading dengan Modal Rp 100.000 di Stockity
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Mari lihat secara matematis apa yang terjadi jika Anda trading dengan modal
                  Rp 100.000 menggunakan STC AutoTrade. Ini bukan skenario positif-positifan,
                  tapi gambaran jujur yang perlu Anda pertimbangkan.
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <div className="px-5 py-4 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.06)]">
                    <h3 className="text-[13px] font-semibold text-[#1a1612]">Skenario: Modal Rp 100.000 | Nominal Rp 14.000 | Martingale 2×</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="border-b border-[rgba(26,22,18,0.06)]">
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]/50">Step</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1a1612]/50">Nominal Trade</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1a1612]/50">Total Terpakai</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1a1612]/50">Sisa Modal</th>
                          <th className="text-center px-4 py-3 font-semibold text-[#1a1612]/50">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { step: "1 (Awal)", nominal: "Rp 14.000", total: "Rp 14.000", sisa: "Rp 86.000", status: "Cukup", statusColor: "text-emerald-600" },
                          { step: "2 (Loss ×2)", nominal: "Rp 28.000", total: "Rp 42.000", sisa: "Rp 58.000", status: "Cukup", statusColor: "text-emerald-600" },
                          { step: "3 (Loss ×4)", nominal: "Rp 56.000", total: "Rp 98.000", sisa: "Rp 2.000", status: "Hampir Habis!", statusColor: "text-rose-600" },
                          { step: "4 (Loss ×8)", nominal: "Rp 112.000", total: "Rp 210.000", sisa: "—", status: "Modal Tidak Cukup", statusColor: "text-rose-700" },
                        ].map((row) => (
                          <tr key={row.step}>
                            <td className="px-4 py-3 font-medium text-[#1a1612]">{row.step}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.nominal}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.total}</td>
                            <td className="px-4 py-3 text-center text-[#6b6058]">{row.sisa}</td>
                            <td className={`px-4 py-3 text-center font-semibold ${row.statusColor}`}>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-5 py-3 bg-rose-50 border-t border-rose-100">
                    <p className="text-[12px] text-rose-800">
                      <strong>Kesimpulan:</strong> Dengan modal Rp 100.000 dan martingale 2×, akun
                      sudah tidak bisa melanjutkan di step ke-3. Hanya 2 loss berturut-turut yang diperlukan
                      untuk hampir menguras seluruh modal. Satu seri loss normal di pasar bisa
                      terjadi kapan saja.
                    </p>
                  </div>
                </div>

                <WarningBox>
                  <strong>Modal Rp 100.000 untuk akun real TIDAK kami rekomendasikan</strong> jika
                  menggunakan martingale. Buffer terlalu tipis untuk menampung volatilitas pasar normal.
                  Gunakan modal Rp 100.000 hanya untuk bereksperimen di mode demo — bukan akun real.
                </WarningBox>
              </div>
            </section>

            {/* ── 03: Simulasi Modal Rp 300K–500K ───────── */}
            <section>
              <SectionLabel>03 · Simulasi Modal Rp 300K–500K</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Simulasi Trading Modal Rp 300K–500K: Lebih Aman dan Terukur
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Modal Rp 300.000–500.000 memberikan ruang yang jauh lebih aman untuk
                  trading dengan manajemen risiko yang benar. Berikut simulasi lengkapnya:
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Simulasi Rp 300K */}
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                    <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-100">
                      <h3 className="text-[13px] font-semibold text-emerald-800">Modal Rp 300.000</h3>
                      <p className="text-[11px] text-emerald-700">Nominal Rp 14K | Max 3 Step | Multiplier 2×</p>
                    </div>
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="border-b border-[rgba(26,22,18,0.06)]">
                          <th className="text-left px-3 py-2 font-semibold text-[#1a1612]/50">Step Loss</th>
                          <th className="text-center px-3 py-2 font-semibold text-[#1a1612]/50">Nominal</th>
                          <th className="text-center px-3 py-2 font-semibold text-[#1a1612]/50">Sisa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { step: "Loss ke-1", nominal: "Rp 14.000", sisa: "Rp 286.000" },
                          { step: "Loss ke-2", nominal: "Rp 28.000", sisa: "Rp 258.000" },
                          { step: "Loss ke-3", nominal: "Rp 56.000", sisa: "Rp 202.000" },
                          { step: "Stop (SL)", nominal: "—", sisa: "Rp 200.000+" },
                        ].map((row) => (
                          <tr key={row.step}>
                            <td className="px-3 py-2 text-[#1a1612]">{row.step}</td>
                            <td className="px-3 py-2 text-center text-[#6b6058]">{row.nominal}</td>
                            <td className="px-3 py-2 text-center font-medium text-[#1a1612]">{row.sisa}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-2 bg-[#f9fafb] border-t border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#6b6058]">Bisa bertahan 1 seri full loss (3 step) dan masih punya 67% modal untuk esok hari.</p>
                    </div>
                  </div>

                  {/* Simulasi Rp 500K */}
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                    <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
                      <h3 className="text-[13px] font-semibold text-blue-800">Modal Rp 500.000</h3>
                      <p className="text-[11px] text-blue-700">Nominal Rp 14K | Max 3 Step | Multiplier 2,5×</p>
                    </div>
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="border-b border-[rgba(26,22,18,0.06)]">
                          <th className="text-left px-3 py-2 font-semibold text-[#1a1612]/50">Step Loss</th>
                          <th className="text-center px-3 py-2 font-semibold text-[#1a1612]/50">Nominal</th>
                          <th className="text-center px-3 py-2 font-semibold text-[#1a1612]/50">Sisa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { step: "Loss ke-1", nominal: "Rp 14.000", sisa: "Rp 486.000" },
                          { step: "Loss ke-2", nominal: "Rp 35.000", sisa: "Rp 451.000" },
                          { step: "Loss ke-3", nominal: "Rp 87.500", sisa: "Rp 363.500" },
                          { step: "Stop (SL)", nominal: "—", sisa: "Rp 350.000+" },
                        ].map((row) => (
                          <tr key={row.step}>
                            <td className="px-3 py-2 text-[#1a1612]">{row.step}</td>
                            <td className="px-3 py-2 text-center text-[#6b6058]">{row.nominal}</td>
                            <td className="px-3 py-2 text-center font-medium text-[#1a1612]">{row.sisa}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-2 bg-[#f9fafb] border-t border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#6b6058]">Bisa bertahan 1 seri full loss dan masih punya 70%+ modal. Buffer lebih kuat.</p>
                    </div>
                  </div>
                </div>

                <TipBox>
                  <strong>Pelajaran dari simulasi:</strong> Modal Rp 300K–500K memberikan buffer
                  yang jauh lebih baik daripada Rp 100K. Satu seri loss penuh (3 step martingale)
                  masih bisa ditampung tanpa akun hangus, dan Anda punya modal cukup untuk esok hari.
                </TipBox>
              </div>
            </section>

            {/* ── 04: Strategi untuk Modal Kecil ───────── */}
            <section>
              <SectionLabel>04 · Strategi Modal Kecil</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Strategi yang Cocok untuk Trading Binary Option Modal Kecil
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Tidak semua strategi cocok untuk modal kecil. Berikut strategi yang paling
                  sesuai untuk trader yang baru mulai dengan dana terbatas:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      strategi: "Fastrade Tanpa Martingale",
                      tag: "Paling Aman untuk Modal Kecil",
                      tagColor: "bg-emerald-100 text-emerald-700",
                      icon: "⚡",
                      desc: "Fastrade dengan nominal tetap (tanpa martingale) adalah strategi paling aman untuk modal kecil. Setiap trade menggunakan nominal yang sama — jika loss, tidak ada eskalasi. Risiko per trade terbatas dan modal terkuras lebih lambat.",
                      pros: ["Tidak ada eskalasi risiko saat loss berturut-turut", "Mudah diprediksi dan dikontrol", "Cocok untuk belajar tanpa tekanan"],
                      cons: ["Profit per siklus lebih kecil", "Butuh win rate lebih tinggi untuk profit"],
                    },
                    {
                      strategi: "AI Signal dengan Filter Ketat",
                      tag: "Direkomendasikan untuk Pemula",
                      tagColor: "bg-blue-100 text-blue-700",
                      icon: "🤖",
                      desc: "Gunakan mode AI Signal dengan filter jam trading ketat (hanya jam sesi pasar aktif) dan nominal fixed tanpa martingale. AI Signal membantu memfilter kondisi pasar yang lebih menguntungkan.",
                      pros: ["Sinyal terfilter oleh algoritma", "Bisa dikombinasikan dengan stop loss ketat", "Tidak perlu analisis manual"],
                      cons: ["Win rate tidak dijamin", "Perlu evaluasi berkala"],
                    },
                    {
                      strategi: "Martingale Konservatif (Max 2 Step)",
                      tag: "Untuk Modal Rp 300K+",
                      tagColor: "bg-amber-100 text-amber-700",
                      icon: "📊",
                      desc: "Jika ingin menggunakan martingale, batasi hanya sampai 2 step dengan multiplier 2×. Dengan modal Rp 300K: step 1 Rp 14K, step 2 Rp 28K — total risiko per seri hanya Rp 42K, masih sangat tertampung.",
                      pros: ["Masih punya recovery dari loss", "Risiko lebih terkontrol dari martingale penuh", "Bisa digunakan dengan modal Rp 300K"],
                      cons: ["Tidak ada recovery jika loss 3 berturut-turut", "Butuh disiplin untuk tidak naik step lebih tinggi"],
                    },
                  ].map((s) => (
                    <div key={s.strategi} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-3 flex-wrap">
                        <span className="text-2xl">{s.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-[14px] font-semibold text-[#1a1612]">{s.strategi}</h3>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.tagColor}`}>{s.tag}</span>
                          </div>
                          <p className="text-[13px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mt-3">
                        <div className="bg-[#f0fdf4] rounded-lg px-3 py-2.5">
                          <p className="text-[11px] font-semibold text-[#14532d] mb-1.5">Kelebihan:</p>
                          <ul className="space-y-1">
                            {s.pros.map((p, i) => (
                              <li key={i} className="text-[11px] text-[#6b6058] flex gap-1.5"><span className="text-[#15803d]">+</span>{p}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-rose-50 rounded-lg px-3 py-2.5">
                          <p className="text-[11px] font-semibold text-rose-700 mb-1.5">Perlu diperhatikan:</p>
                          <ul className="space-y-1">
                            {s.cons.map((c, i) => (
                              <li key={i} className="text-[11px] text-[#6b6058] flex gap-1.5"><span className="text-rose-600">-</span>{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 05: Kesalahan Fatal Modal Kecil ──────── */}
            <section>
              <SectionLabel>05 · Kesalahan Fatal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kesalahan Fatal Trader Modal Kecil & Cara Menghindarinya
              </h2>
              <div className="space-y-3">
                {[
                  {
                    kesalahan: "Menggunakan martingale agresif dengan modal mini",
                    icon: "💥",
                    dampak: "Modal habis dalam hitungan seri loss pendek. 3–4 loss berturut-turut cukup untuk menguras akun.",
                    solusi: "Batasi martingale max 2 step dengan modal kecil, atau gunakan mode fixed (tanpa martingale) sampai modal bertambah.",
                  },
                  {
                    kesalahan: "Top up terus menerus setelah rugi (revenge deposit)",
                    icon: "🔄",
                    dampak: "Dana yang dikeluarkan semakin besar, kerugian total membengkak, dan kondisi psikologis memburuk.",
                    solusi: "Stop setelah stop loss tercapai. Evaluasi strategi minimal 1–2 hari sebelum top up lagi. Jangan trading dalam kondisi emosional.",
                  },
                  {
                    kesalahan: "Trading tanpa stop loss",
                    icon: "🚫",
                    dampak: "Bot terus berjalan bahkan saat pasar sedang sangat tidak menguntungkan, menguras modal tanpa batas.",
                    solusi: "WAJIB pasang stop loss sebelum mengaktifkan bot. Untuk modal Rp 300K, stop loss Rp 75.000–100.000 sudah cukup.",
                  },
                  {
                    kesalahan: "Menaikkan nominal secara drastis saat profit",
                    icon: "📈",
                    dampak: "Satu seri loss dengan nominal besar bisa menghapus semua profit yang dikumpulkan dalam berhari-hari.",
                    solusi: "Naikkan nominal secara bertahap — maksimal 20–30% dari nominal awal per kenaikan. Stabilkan dulu selama 1 minggu sebelum naik lagi.",
                  },
                  {
                    kesalahan: "Trading di semua jam tanpa memperhatikan sesi",
                    icon: "🕐",
                    dampak: "Jam pasar sepi menghasilkan pergerakan tidak menentu dan random — win rate menurun drastis.",
                    solusi: "Aktifkan bot hanya di jam sesi pasar aktif: London (14:00–17:00 WIB) dan New York (19:00–22:00 WIB).",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.kesalahan}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
                            <p className="text-[11px] font-semibold text-rose-700 mb-0.5">Dampak:</p>
                            <p className="text-[12px] text-rose-800">{item.dampak}</p>
                          </div>
                          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg px-3 py-2">
                            <p className="text-[11px] font-semibold text-[#14532d] mb-0.5">Solusi:</p>
                            <p className="text-[12px] text-[#6b6058]">{item.solusi}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 06: Mulai dari Demo ───────────────────── */}
            <section>
              <SectionLabel>06 · Mulai dari Demo</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mulai dari Demo Sebelum Pakai Modal Nyata
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Mode demo adalah cara terbaik untuk "<strong className="text-[#1a1612]">coba-coba trading binary option</strong>"
                  tanpa risiko finansial apapun. Ini bukan sekadar formalitas — ini adalah
                  investasi waktu yang melindungi modal Anda di akun real.
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Download STC AutoTrade (gratis)"
                    desc="Download APK dari stcautotrade.id (Android) atau akses stcautotradepro.id (PC/semua perangkat). Tidak ada biaya apapun untuk download atau registrasi."
                    sub="Mode demo gratis — tidak perlu deposit."
                  />
                  <StepCard
                    n="2"
                    title="Aktifkan mode demo"
                    desc="Di STC AutoTrade, pilih mode 'Demo'. Anda mendapatkan saldo virtual untuk berlatih trading dengan kondisi pasar nyata dari Stockity.id."
                  />
                  <StepCard
                    n="3"
                    title="Setting persis seperti yang akan dipakai di real"
                    desc="Gunakan setting yang sama persis dengan yang ingin Anda pakai di akun real — nominal, mode martingale, stop loss. Demo yang tidak realistis tidak memberikan data berguna."
                    sub="Misalnya: nominal Rp 14K, max 3 step martingale, stop loss Rp 75K."
                  />
                  <StepCard
                    n="4"
                    title="Jalankan minimal 7–14 hari"
                    desc="Catat win rate harian, drawdown maksimal, dan performa di berbagai kondisi pasar. Minimal 7 hari data diperlukan untuk mendapatkan gambaran yang representatif."
                    sub="Target: win rate konsisten di atas 50% selama 7 hari berturut-turut."
                  />
                  <StepCard
                    n="5"
                    title="Evaluasi sebelum pindah ke real"
                    desc="Analisis hasil demo. Jika win rate bagus dan konsisten, baru pertimbangkan deposit ke akun real — mulai dengan profil konservatif (Rp 300K–500K)."
                    sub="Jika hasil demo buruk, perbaiki strategi dulu — jangan langsung deposit."
                  />
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Apa yang Harus Dicatat Selama Demo</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-[12px]">
                    {[
                      "Win rate harian (berapa % trade menang)",
                      "Drawdown maksimal dalam satu hari",
                      "Jam trading dengan win rate terbaik",
                      "Pasangan mata uang yang paling konsisten",
                      "Berapa seri loss berturut-turut yang terjadi",
                      "Total profit/loss dalam 7 hari",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-[#6b6058]">
                        <span className="text-[#1d4ed8] font-bold flex-shrink-0">•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <TipBox>
                  <strong>Demo bukan formalitas:</strong> Banyak trader yang gagal bukan karena
                  strategi salah, tapi karena skip fase demo dan tidak memahami perilaku bot
                  di kondisi pasar nyata. Demo adalah data — semakin banyak data, semakin
                  baik keputusan Anda.
                </TipBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Trading Binary Option Modal Kecil
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Berapa modal minimum untuk trading binary option di Stockity?",
                    a: "Secara teknis, Anda bisa mulai trading dengan modal sangat kecil (sesuai minimal deposit platform). Namun untuk trading yang aman dengan manajemen risiko yang benar menggunakan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000 agar bot punya buffer yang cukup.",
                  },
                  {
                    q: "Apakah bisa profit dengan modal Rp 100.000 di Stockity?",
                    a: "Secara matematis mungkin, tapi sangat berisiko. Dengan modal Rp 100.000 dan nominal trade Rp 14.000, hanya ada buffer untuk 2–3 trade sebelum stop loss terkena atau akun hangus. Satu seri loss pendek bisa menghabiskan seluruh modal. Sangat tidak direkomendasikan untuk akun real.",
                  },
                  {
                    q: "Strategi apa yang paling cocok untuk trading binary option modal kecil?",
                    a: "Untuk modal kecil, strategi terbaik adalah: (1) Fastrade dengan nominal tetap tanpa martingale, (2) AI Signal dengan filter ketat, (3) trading hanya di jam sesi pasar paling aktif. Hindari martingale agresif dengan modal kecil karena satu seri loss bisa menghabiskan seluruh modal.",
                  },
                  {
                    q: "Apakah ada cara trading binary option tanpa modal?",
                    a: "Ya — gunakan mode demo di STC AutoTrade. Mode demo menggunakan kondisi pasar nyata dari Stockity.id tanpa risiko uang sungguhan. Ini cara terbaik untuk belajar dan menguji strategi sebelum menggunakan modal nyata.",
                  },
                  {
                    q: "Berapa lama untuk balik modal trading binary option?",
                    a: "Tidak ada jaminan atau timeline yang pasti. Trading binary option mengandung risiko kerugian — bukan investasi yang menjamin return. Fokus pada konsistensi dan manajemen risiko, bukan pada 'kapan balik modal'. Trader yang mengejar balik modal cenderung mengambil risiko berlebihan dan justru rugi lebih besar.",
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
                Trading Binary Option Modal Kecil: Bisa, tapi Harus Cerdas
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Trading binary option dengan modal kecil bisa dilakukan, tapi membutuhkan
                  disiplin yang lebih tinggi daripada trading dengan modal besar. Semakin kecil
                  modal, semakin ketat manajemen risiko yang diperlukan. Kuncinya: mulai dari demo,
                  gunakan strategi konservatif, pasang stop loss yang tidak bisa ditawar, dan
                  deposit hanya dengan dana yang memang Anda siap tanggung risikonya.
                </p>
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Rekomendasi Jalur Aman untuk Pemula Modal Kecil</h3>
                  <div className="space-y-2 text-[13px] text-[#6b6058]">
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">1.</span> Mulai dari mode demo gratis — tidak perlu deposit apapun</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">2.</span> Jalankan demo minimal 7–14 hari, catat win rate dan drawdown</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">3.</span> Jika hasil demo konsisten, deposit Rp 300K–500K (bukan Rp 100K)</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">4.</span> Gunakan strategi Fastrade atau martingale max 2 step</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">5.</span> Pasang stop loss ketat — patuhi tanpa terkecuali</div>
                    <div className="flex gap-2"><span className="text-[#15803d] font-bold">6.</span> Evaluasi mingguan — naikkan modal hanya setelah terbukti profit</div>
                  </div>
                </div>
                <WarningBox>
                  <strong>Disclaimer:</strong> Trading binary option mengandung risiko kerugian
                  finansial yang signifikan. Tidak ada strategi yang menjamin profit. Selalu
                  gunakan dana yang memang siap Anda tanggung risikonya, mulai dari mode demo,
                  dan jangan pernah trading dengan dana pinjaman atau dana darurat.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Panduan lengkap modal yang ideal untuk trading" },
                { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale", desc: "Cara pakai martingale yang aman di Stockity" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Mulai Demo · 100% Gratis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Coba Trading Binary Option Tanpa Modal Dulu</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade dan aktifkan mode demo — uji strategi dengan modal virtual, tanpa risiko.</p>
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
