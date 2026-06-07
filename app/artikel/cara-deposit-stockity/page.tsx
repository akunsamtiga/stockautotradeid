/**
 * app/artikel/cara-deposit-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara deposit stockity
 *   Secondary: cara isi saldo stockity, deposit stockity bank lokal,
 *              deposit stockity via dana, deposit stockity minimum,
 *              cara top up stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Deposit Stockity: Panduan Isi Saldo & Metode Pembayaran 2026",
  description:
    "Panduan lengkap cara deposit Stockity — isi saldo via transfer bank lokal, e-wallet OVO DANA GoPay, minimal deposit, solusi deposit pending, dan tips aman top up akun Stockity.id.",
  keywords: [
    "cara deposit stockity",
    "cara isi saldo stockity",
    "deposit stockity bank lokal",
    "deposit stockity via dana",
    "deposit stockity minimum",
    "cara top up stockity",
    "deposit stockity ovo",
    "deposit stockity gopay",
    "cara deposit di stockity.id",
    "top up akun stockity",
    "deposit stockity berapa lama",
    "cara isi saldo akun stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-deposit-stockity",
  },
  openGraph: {
    title: "Cara Deposit Stockity: Panduan Isi Saldo & Metode Pembayaran 2026",
    description:
      "Panduan lengkap cara deposit Stockity.id — transfer bank lokal, e-wallet, minimal deposit, dan solusi masalah deposit.",
    url: "https://stcautotrade.id/artikel/cara-deposit-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cara Deposit Stockity — Panduan Isi Saldo",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Deposit Stockity: Panduan Isi Saldo & Metode Pembayaran 2026",
  description:
    "Panduan lengkap cara deposit Stockity.id — transfer bank lokal, e-wallet, minimal deposit, solusi deposit pending.",
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
    "@id": "https://stcautotrade.id/artikel/cara-deposit-stockity",
  },
  keywords: "cara deposit stockity, cara isi saldo stockity, deposit stockity bank lokal, deposit stockity via dana",
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
      name: "Cara Deposit Stockity",
      item: "https://stcautotrade.id/artikel/cara-deposit-stockity",
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
        text: "Minimal deposit di Stockity.id bervariasi tergantung metode pembayaran yang dipilih. Cek langsung di platform Stockity.id untuk nominal minimum terkini. Untuk trading aman dengan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000 sebagai buffer martingale.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama deposit Stockity masuk ke akun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deposit via e-wallet (OVO, DANA, GoPay) biasanya instan atau dalam beberapa menit. Transfer bank lokal bisa memakan waktu 5–30 menit, tergantung jam transfer dan antrian sistem. Jika lebih dari 1 jam, hubungi CS Stockity.id.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah deposit Stockity aman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deposit melalui kanal resmi Stockity.id aman. Pastikan Anda mengakses stockity.id (URL resmi) dan tidak melalui link pihak ketiga. Jangan transfer ke nomor rekening yang tidak terverifikasi oleh platform.",
      },
    },
    {
      "@type": "Question",
      name: "Apa yang harus dilakukan jika deposit pending lama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jika deposit pending lebih dari 1 jam: (1) simpan bukti transfer/pembayaran, (2) hubungi CS Stockity.id melalui live chat atau support di platform, (3) sertakan bukti pembayaran dan nominal yang ditransfer. Jangan transfer ulang tanpa konfirmasi CS.",
      },
    },
    {
      "@type": "Question",
      name: "Bisakah deposit Stockity via GoPay atau OVO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Stockity.id umumnya menerima deposit via e-wallet populer seperti OVO, DANA, dan GoPay. Pilihan metode pembayaran bisa berubah — selalu cek menu Deposit di platform Stockity.id untuk metode yang tersedia saat ini.",
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

export default function CaraDepositStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Cara Deposit Stockity</li>
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
            Cara Deposit Stockity:<br className="hidden sm:block" />
            Panduan Isi Saldo & Metode Pembayaran 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini membahas{" "}
            <strong className="font-semibold text-[#1a1612]">cara deposit Stockity</strong>{" "}
            secara lengkap — dari persiapan akun, deposit via transfer bank lokal,
            e-wallet OVO/DANA/GoPay, nominal minimum yang aman, hingga solusi
            masalah deposit pending atau tidak masuk.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "<5 menit", l: "Proses Deposit" },
              { v: "Bank/E-wallet", l: "Metode" },
              { v: "Instan", l: "Konfirmasi" },
              { v: "100%", l: "Aman" },
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

            {/* ── 01: Persiapan Sebelum Deposit ─────────── */}
            <section>
              <SectionLabel>01 · Persiapan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Persiapan Sebelum Melakukan Deposit Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sebelum melakukan deposit ke akun Stockity.id, pastikan tiga hal
                  berikut sudah siap agar proses berjalan lancar dan saldo masuk
                  tanpa hambatan.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "✅",
                      title: "Akun Terverifikasi",
                      desc: "Pastikan akun Stockity.id Anda sudah aktif dan email sudah diverifikasi. Akun yang belum diverifikasi umumnya tidak dapat melakukan transaksi.",
                      tips: "Cek: login ke Stockity.id → pastikan bisa masuk tanpa pesan error verifikasi.",
                    },
                    {
                      icon: "💳",
                      title: "Pilih Metode Pembayaran",
                      desc: "Tentukan terlebih dahulu metode yang akan digunakan — transfer bank, OVO, DANA, atau GoPay — dan pastikan saldo/dana mencukupi.",
                      tips: "E-wallet biasanya lebih cepat diproses daripada transfer bank.",
                    },
                    {
                      icon: "📊",
                      title: "Tentukan Nominal",
                      desc: "Tentukan berapa yang ingin di-deposit. Jangan deposit berlebihan dari yang dibutuhkan. Mulai dari nominal aman sesuai profil risiko Anda.",
                      tips: "Rekomendasi awal: Rp 300.000–500.000 untuk profil konservatif.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-[11px] text-[#3b82f6] font-medium">{item.tips}</p>
                    </div>
                  ))}
                </div>

                <InfoBox icon="💡" title="Belum punya akun Stockity?">
                  Jika belum punya akun, baca terlebih dahulu panduan{" "}
                  <Link href="/artikel/cara-daftar-stockity" className="underline font-semibold">
                    cara daftar Stockity
                  </Link>{" "}
                  — prosesnya gratis dan selesai dalam kurang dari 5 menit. Setelah
                  akun aktif, baru lakukan deposit.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Cara Deposit via Bank Lokal ───────── */}
            <section>
              <SectionLabel>02 · Transfer Bank Lokal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Deposit Stockity via Transfer Bank Lokal
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Transfer bank lokal adalah metode deposit yang paling umum digunakan
                  oleh trader Indonesia. Proses ini biasanya memakan waktu 5–30 menit
                  tergantung antrian dan jam transfer.
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Login ke Stockity.id"
                    desc="Buka stockity.id di browser HP atau PC. Login dengan email dan password yang sudah terdaftar."
                    sub="Jangan lupa: selalu akses melalui URL resmi stockity.id"
                  />
                  <StepCard
                    n="2"
                    title="Buka menu Deposit / Kasir"
                    desc="Di dashboard Stockity.id, cari menu 'Deposit', 'Kasir', atau 'Isi Saldo'. Biasanya ada di pojok kanan atas dashboard atau di menu profil akun."
                  />
                  <StepCard
                    n="3"
                    title="Pilih metode Transfer Bank Lokal"
                    desc="Dari daftar metode pembayaran, pilih 'Transfer Bank Lokal' atau nama bank yang tersedia (BCA, Mandiri, BRI, BNI, dll). Metode yang tersedia bisa berbeda sewaktu-waktu."
                    sub="Pilih bank yang Anda miliki untuk memudahkan transfer."
                  />
                  <StepCard
                    n="4"
                    title="Masukkan nominal deposit"
                    desc="Isi nominal yang ingin di-deposit sesuai yang sudah Anda rencanakan. Pastikan melebihi batas minimum yang ditetapkan Stockity.id."
                  />
                  <StepCard
                    n="5"
                    title="Catat nomor rekening tujuan"
                    desc="Stockity.id akan menampilkan nomor rekening tujuan dan nominal yang harus ditransfer (biasanya termasuk kode unik). Catat atau screenshot informasi ini."
                    sub="Kode unik penting — transfer dengan nominal yang PERSIS sesuai instruksi."
                  />
                  <StepCard
                    n="6"
                    title="Lakukan transfer dari m-banking atau ATM"
                    desc="Transfer dari rekening bank Anda ke rekening yang ditunjuk Stockity.id. Pastikan nominal tepat — termasuk kode unik jika ada."
                  />
                  <StepCard
                    n="7"
                    title="Konfirmasi pembayaran di platform"
                    desc="Setelah transfer, kembali ke platform Stockity.id dan klik 'Konfirmasi Pembayaran' atau unggah bukti transfer. Saldo akan diproses dan masuk ke akun."
                    sub="Simpan bukti transfer sampai saldo dikonfirmasi masuk."
                  />
                </div>

                <WarningBox>
                  <strong>Penting:</strong> Selalu transfer dengan nominal yang PERSIS sesuai
                  instruksi di platform, termasuk kode unik jika ada. Transfer dengan nominal
                  berbeda bisa menyebabkan deposit gagal diverifikasi otomatis.
                </WarningBox>
              </div>
            </section>

            {/* ── 03: Cara Deposit via E-wallet ─────────── */}
            <section>
              <SectionLabel>03 · E-wallet</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Deposit Stockity via E-wallet (OVO, DANA, GoPay)
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Deposit via e-wallet umumnya lebih cepat diproses — seringkali instan
                  atau dalam hitungan menit. Berikut cara umum deposit Stockity menggunakan
                  OVO, DANA, atau GoPay:
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "OVO",
                      color: "bg-purple-50 border-purple-200",
                      badge: "bg-purple-100 text-purple-700",
                      icon: "💜",
                      steps: [
                        "Pilih metode OVO di menu Deposit Stockity.id",
                        "Masukkan nomor HP yang terdaftar di OVO",
                        "Masukkan nominal deposit",
                        "Buka aplikasi OVO → konfirmasi pembayaran",
                        "Saldo otomatis masuk setelah dikonfirmasi",
                      ],
                    },
                    {
                      name: "DANA",
                      color: "bg-blue-50 border-blue-200",
                      badge: "bg-blue-100 text-blue-700",
                      icon: "💙",
                      steps: [
                        "Pilih metode DANA di menu Deposit Stockity.id",
                        "Masukkan nomor HP yang terdaftar di DANA",
                        "Masukkan nominal deposit",
                        "Buka aplikasi DANA → konfirmasi pembayaran",
                        "Saldo masuk setelah pembayaran berhasil",
                      ],
                    },
                    {
                      name: "GoPay",
                      color: "bg-green-50 border-green-200",
                      badge: "bg-green-100 text-green-700",
                      icon: "💚",
                      steps: [
                        "Pilih metode GoPay di menu Deposit Stockity.id",
                        "Ikuti instruksi yang muncul di layar",
                        "Masukkan nominal deposit",
                        "Buka Gojek → konfirmasi pembayaran GoPay",
                        "Saldo masuk setelah dikonfirmasi",
                      ],
                    },
                  ].map((ewallet) => (
                    <div key={ewallet.name} className={`bg-white border rounded-xl p-5 ${ewallet.color}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">{ewallet.icon}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${ewallet.badge}`}>{ewallet.name}</span>
                      </div>
                      <ol className="space-y-2">
                        {ewallet.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-2 text-[12px]">
                            <span className="text-[#1d4ed8] font-bold min-w-[16px]">{idx + 1}.</span>
                            <span className="text-[#6b6058] leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <TipBox>
                  <strong>Tips e-wallet:</strong> Pastikan saldo e-wallet Anda cukup sebelum
                  memulai proses deposit. Transaksi yang dibatalkan di tengah proses bisa
                  menyebabkan status pending yang membutuhkan konfirmasi manual ke CS Stockity.id.
                </TipBox>

                <InfoBox icon="📱" title="Ketersediaan metode bisa berubah">
                  Metode pembayaran yang tersedia di Stockity.id bisa berubah sewaktu-waktu
                  sesuai kebijakan platform. Selalu cek menu Deposit di Stockity.id untuk
                  melihat metode yang aktif saat ini. Jika metode e-wallet tertentu tidak
                  tersedia, gunakan alternatif yang ada.
                </InfoBox>
              </div>
            </section>

            {/* ── 04: Minimal Deposit & Rekomendasi ────── */}
            <section>
              <SectionLabel>04 · Nominal Deposit</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Minimal Deposit & Rekomendasi Nominal untuk Trading Aman
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Ada dua hal berbeda yang perlu dipahami: <strong className="text-[#1a1612]">minimal deposit platform</strong>{" "}
                  (batas minimum yang ditetapkan Stockity.id) dan{" "}
                  <strong className="text-[#1a1612]">modal yang aman untuk trading</strong> dengan
                  STC AutoTrade. Keduanya bisa berbeda — dan yang kedua jauh lebih penting.
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
                    <h3 className="text-[13px] font-semibold text-[#1a1612]">Rekomendasi Nominal Deposit Berdasarkan Profil</h3>
                  </div>
                  <div className="divide-y divide-[rgba(26,22,18,0.05)]">
                    {[
                      {
                        profil: "Konservatif (Pemula)",
                        deposit: "Rp 300.000–500.000",
                        setting: "Nominal Rp 14K, multiplier 2×, max step 3",
                        note: "Risiko minimal, cocok untuk belajar",
                        color: "text-emerald-700 bg-emerald-50",
                      },
                      {
                        profil: "Standar",
                        deposit: "Rp 500.000–1.000.000",
                        setting: "Nominal Rp 14K–25K, multiplier 2,5×, max step 3",
                        note: "Keseimbangan risiko dan potensi profit",
                        color: "text-blue-700 bg-blue-50",
                      },
                      {
                        profil: "Agresif (Berpengalaman)",
                        deposit: "Rp 1.000.000+",
                        setting: "Nominal Rp 25K+, multiplier 3×, max step 4",
                        note: "Risiko tinggi, hanya untuk yang berpengalaman",
                        color: "text-orange-700 bg-orange-50",
                      },
                    ].map((row) => (
                      <div key={row.profil} className="px-5 py-4">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[13px] font-semibold text-[#1a1612]">{row.profil}</span>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.color}`}>{row.note}</span>
                            </div>
                            <p className="text-[12px] text-[#6b6058]">{row.setting}</p>
                          </div>
                          <span className="text-[15px] font-bold text-[#1d4ed8] flex-shrink-0">{row.deposit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <WarningBox>
                  <strong>Jangan deposit lebih dari yang Anda siap rugikan.</strong> Trading binary option
                  mengandung risiko kerugian. Deposit hanya dengan dana yang memang Anda alokasikan
                  untuk trading — bukan dana darurat atau pinjaman.
                </WarningBox>

                <TipBox>
                  <strong>Strategi aman:</strong> Mulai dari profil konservatif dengan deposit
                  Rp 300.000–500.000. Setelah konsisten profit selama 1–2 minggu, baru pertimbangkan
                  menaikkan modal. Hindari "all in" di awal — terutama jika Anda masih belajar.
                </TipBox>
              </div>
            </section>

            {/* ── 05: Masalah Umum & Solusi ─────────────── */}
            <section>
              <SectionLabel>05 · Troubleshooting</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Masalah Umum Deposit Stockity & Cara Mengatasinya
              </h2>
              <div className="space-y-3">
                {[
                  {
                    masalah: "Deposit pending terlalu lama (lebih dari 1 jam)",
                    icon: "⏳",
                    solusi: "Simpan bukti transfer/pembayaran. Hubungi CS Stockity.id melalui live chat atau support resmi. Sertakan: nominal yang ditransfer, metode pembayaran, waktu transfer, dan bukti pembayaran. Jangan transfer ulang tanpa konfirmasi dari CS.",
                  },
                  {
                    masalah: "Saldo tidak masuk setelah transfer bank",
                    icon: "🏦",
                    solusi: "Pastikan Anda mentransfer ke nomor rekening yang TEPAT dan nominal yang PERSIS sesuai instruksi (termasuk kode unik). Jika semua benar tapi saldo tidak masuk dalam 2 jam, hubungi CS Stockity.id dengan bukti transfer.",
                  },
                  {
                    masalah: "Pembayaran e-wallet gagal / error",
                    icon: "📱",
                    solusi: "Pastikan saldo e-wallet mencukupi. Coba refresh halaman dan ulangi proses. Pastikan nomor HP yang dimasukkan sesuai dengan yang terdaftar di e-wallet. Jika masih gagal, coba metode pembayaran lain.",
                  },
                  {
                    masalah: "Deposit dikonfirmasi tapi saldo belum bertambah",
                    icon: "💰",
                    solusi: "Refresh halaman dashboard Stockity.id. Tunggu 5–10 menit karena kadang ada delay di sistem. Jika lebih dari 30 menit setelah konfirmasi berhasil, hubungi CS Stockity.id dengan screenshot konfirmasi deposit.",
                  },
                  {
                    masalah: "Metode deposit yang diinginkan tidak tersedia",
                    icon: "🚫",
                    solusi: "Metode pembayaran di Stockity.id bisa berubah. Jika metode yang Anda inginkan tidak tersedia, gunakan alternatif lain yang tersedia — biasanya transfer bank atau e-wallet lainnya. Cek kembali besok karena ketersediaan bisa berubah.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.masalah}</p>
                      <p className="text-[12px] text-[#14532d] bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg px-3 py-2">
                        <strong>Solusi:</strong> {item.solusi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 06: Tips Aman Deposit ─────────────────── */}
            <section>
              <SectionLabel>06 · Tips Keamanan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Aman Deposit di Stockity: Hindari Penipuan
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Keamanan transaksi deposit sangat penting. Berikut tips yang wajib
                  diikuti untuk memastikan deposit Anda aman:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🔒",
                      title: "Hanya akses via URL resmi",
                      desc: "Selalu akses Stockity.id melalui URL resmi stockity.id. Jangan klik link deposit dari WhatsApp, Telegram, atau media sosial yang tidak terverifikasi.",
                    },
                    {
                      icon: "📸",
                      title: "Simpan semua bukti transaksi",
                      desc: "Screenshot atau foto bukti transfer/pembayaran setiap kali deposit. Simpan minimal 7 hari sebagai bukti jika ada sengketa atau deposit bermasalah.",
                    },
                    {
                      icon: "🚫",
                      title: "Jangan transfer ke rekening pribadi",
                      desc: "Deposit resmi Stockity.id dilakukan melalui sistem payment gateway platform — bukan transfer ke rekening pribadi seseorang yang mengaku sebagai agen atau CS Stockity.",
                    },
                    {
                      icon: "🔐",
                      title: "Jaga kerahasiaan akun",
                      desc: "Jangan bagikan username, password, atau informasi akun kepada siapapun — termasuk yang mengaku CS Stockity. CS resmi tidak akan meminta password Anda.",
                    },
                    {
                      icon: "📊",
                      title: "Deposit sesuai kemampuan",
                      desc: "Deposit hanya nominal yang memang Anda alokasikan untuk trading. Jangan terpengaruh janji profit cepat untuk meningkatkan deposit secara drastis.",
                    },
                    {
                      icon: "✅",
                      title: "Verifikasi rekening tujuan",
                      desc: "Untuk transfer bank, verifikasi nama penerima sesuai instruksi di platform Stockity.id sebelum menyelesaikan transfer dari m-banking.",
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
                Pertanyaan Umum: Cara Deposit Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Berapa minimal deposit di Stockity?",
                    a: "Minimal deposit di Stockity.id bervariasi tergantung metode pembayaran yang dipilih. Cek langsung di platform Stockity.id untuk nominal minimum terkini. Untuk trading aman dengan STC AutoTrade, kami rekomendasikan minimal Rp 300.000–500.000 sebagai buffer martingale.",
                  },
                  {
                    q: "Berapa lama deposit Stockity masuk ke akun?",
                    a: "Deposit via e-wallet (OVO, DANA, GoPay) biasanya instan atau dalam beberapa menit. Transfer bank lokal bisa memakan waktu 5–30 menit, tergantung jam transfer dan antrian sistem. Jika lebih dari 1 jam, hubungi CS Stockity.id.",
                  },
                  {
                    q: "Apakah deposit Stockity aman?",
                    a: "Deposit melalui kanal resmi Stockity.id aman. Pastikan Anda mengakses stockity.id (URL resmi) dan tidak melalui link pihak ketiga. Jangan transfer ke nomor rekening yang tidak terverifikasi oleh platform.",
                  },
                  {
                    q: "Apa yang harus dilakukan jika deposit pending lama?",
                    a: "Jika deposit pending lebih dari 1 jam: simpan bukti transfer/pembayaran, hubungi CS Stockity.id melalui live chat atau support di platform, sertakan bukti pembayaran dan nominal yang ditransfer. Jangan transfer ulang tanpa konfirmasi CS.",
                  },
                  {
                    q: "Bisakah deposit Stockity via GoPay atau OVO?",
                    a: "Ya, Stockity.id umumnya menerima deposit via e-wallet populer seperti OVO, DANA, dan GoPay. Pilihan metode pembayaran bisa berubah — selalu cek menu Deposit di platform Stockity.id untuk metode yang tersedia saat ini.",
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
                Ringkasan: Cara Deposit Stockity yang Benar dan Aman
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Deposit ke akun Stockity.id mudah dan cepat — baik via transfer bank lokal
                  maupun e-wallet OVO, DANA, dan GoPay. Kunci utamanya: akses selalu melalui
                  URL resmi stockity.id, ikuti instruksi dengan tepat (terutama nominal dan
                  kode unik), simpan bukti transaksi, dan deposit sesuai kemampuan finansial Anda.
                </p>
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">Checklist Deposit Stockity</h3>
                  <ul className="space-y-2">
                    {[
                      "Akun Stockity.id sudah aktif dan email terverifikasi",
                      "Akses melalui URL resmi stockity.id",
                      "Pilih metode pembayaran yang tersedia",
                      "Transfer nominal yang TEPAT sesuai instruksi (termasuk kode unik)",
                      "Konfirmasi pembayaran di platform setelah transfer",
                      "Simpan bukti transfer sampai saldo dikonfirmasi masuk",
                      "Hubungi CS jika saldo tidak masuk lebih dari 1 jam",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-[13px] text-[#6b6058]">
                        <span className="text-[#15803d] font-bold flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <WarningBox>
                  <strong>Disclaimer:</strong> Trading binary option mengandung risiko kerugian finansial.
                  Deposit hanya dengan dana yang siap Anda tanggung risikonya — bukan dana darurat
                  atau pinjaman. Mulai dari mode demo sebelum menggunakan modal nyata.
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
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal yang ideal untuk mulai trading?" },
                { href: "/artikel/cara-withdraw-stockity", title: "Cara Withdraw Stockity", desc: "Panduan lengkap tarik saldo dari Stockity" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Coba Demo Dulu · Gratis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Mulai Trading di Stockity dengan STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade — coba mode demo gratis tanpa deposit, baru deposit saat siap.</p>
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
