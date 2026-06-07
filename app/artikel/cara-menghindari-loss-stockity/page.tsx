import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Menghindari Loss di Stockity: Tips Anti Rugi Trading 2026",
  description:
    "Panduan cara menghindari loss di Stockity dengan manajemen risiko yang benar. Tips anti rugi binary option untuk trader pemula hingga menengah.",
  keywords: [
    "cara menghindari loss stockity",
    "cara tidak loss di stockity",
    "tips anti rugi binary option",
    "manajemen risiko stockity",
    "cara kelola kerugian stockity",
    "stop loss stockity",
    "cara mengurangi loss trading",
    "strategi anti rugi binary option",
    "manajemen modal stockity",
    "cara profit konsisten stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
  },
  openGraph: {
    title: "Cara Menghindari Loss di Stockity: Tips Anti Rugi Trading 2026",
    description:
      "Panduan cara menghindari loss di Stockity dengan manajemen risiko yang benar. Tips anti rugi binary option untuk trader pemula hingga menengah.",
    url: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cara Menghindari Loss di Stockity 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Menghindari Loss di Stockity: Tips Anti Rugi Trading 2026",
    description:
      "Panduan cara menghindari loss di Stockity dengan manajemen risiko yang benar. Tips anti rugi binary option untuk trader pemula hingga menengah.",
    images: ["https://stcautotrade.id/og-image.png"],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Menghindari Loss di Stockity: Tips Anti Rugi Trading 2026",
  description:
    "Panduan cara menghindari loss di Stockity dengan manajemen risiko yang benar. Tips anti rugi binary option untuk trader pemula hingga menengah.",
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
    "@id": "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
  },
  keywords: "cara menghindari loss stockity, tips anti rugi binary option, manajemen risiko stockity, stop loss stockity",
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
      name: "Cara Menghindari Loss di Stockity",
      item: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah normal loss saat trading binary option di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, sangat normal. Bahkan trader profesional mengalami loss 30-45% dari total trade mereka. Yang membedakan trader sukses bukan nol loss — tapi manajemen risiko yang memastikan profit kumulatif lebih besar dari loss kumulatif. Target win rate di atas 55% sudah cukup untuk profit jangka panjang.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa loss harian yang masih wajar di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya, loss harian di bawah 20-30% dari modal sesi dianggap masih wajar dan bisa di-recover. Loss lebih dari 30% dalam satu hari adalah sinyal untuk berhenti dan evaluasi. Gunakan fitur Stop Loss Harian di STC AutoTrade untuk otomatis membatasi kerugian harian.",
      },
    },
    {
      "@type": "Question",
      name: "Cara recover cepat setelah loss besar di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cara paling berbahaya adalah mencoba recover dengan meningkatkan nominal secara drastis — ini hampir selalu memperburuk situasi. Cara yang benar: istirahat 24 jam minimum setelah loss besar, evaluasi penyebab loss, kembali dengan nominal lebih kecil dari biasanya, dan bangun kembali kepercayaan diri secara bertahap.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah martingale aman untuk menghindari loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Martingale bukan strategi 'anti loss' — ini strategi recovery yang meningkatkan nominal setelah loss untuk menutup kerugian. Martingale efektif jika digunakan dengan setting yang tepat (multiplier tidak terlalu tinggi, max step dibatasi, stop loss aktif). Tanpa kontrol yang benar, martingale justru bisa mempercepat kerugian besar.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menggunakan Stop Loss di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buka STC AutoTrade → masuk ke menu Setting bot → aktifkan fitur Stop Loss Harian → masukkan nominal atau persentase loss maksimal yang Anda toleransi per hari. Saat total loss mencapai batas tersebut, bot otomatis berhenti dan tidak akan membuka order baru sampai Anda me-reset secara manual.",
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

export default function CaraMenghindariLossStockityPage() {
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
                <li className="text-[#1a1612] font-medium" aria-current="page">Cara Menghindari Loss Stockity</li>
              </ol>
            </nav>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Manajemen Risiko</span>
            {/* H1 */}
            <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
              Cara Menghindari Loss di Stockity: Tips Anti Rugi Trading 2026
            </h1>
            {/* Description */}
            <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
              Panduan cara menghindari loss di Stockity dengan manajemen risiko yang benar. Tips anti rugi binary option untuk trader pemula hingga menengah — termasuk cara setting stop loss otomatis di STC AutoTrade.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: "Stop Loss", l: "Fitur Wajib" },
                { v: "2-5%", l: "Risiko Per Trade" },
                { v: "7", l: "Tips Kunci" },
                { v: "Auto", l: "Stop di Bot" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-3 py-3 text-center">
                  <p className="text-[18px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                  <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 01: Mengapa Trader Loss ─────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>01 · Akar Masalah</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mengapa Trader Bisa Loss Terus di Stockity?</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Sebelum bisa menghindari loss, Anda perlu memahami <em>mengapa</em> loss terjadi. Kebanyakan trader yang loss secara konsisten bukan karena pasar yang tidak adil atau nasib buruk — tapi karena tiga penyebab utama yang bisa dicegah.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  no: "1",
                  judul: "Psikologi Trading yang Buruk",
                  deskripsi: "Fear of missing out (FOMO) mendorong entry terburu-buru. Greed mendorong trading dengan nominal terlalu besar. Tilt (frustrasi setelah loss) mendorong revenge trading. Semua ini menghasilkan keputusan irrasional yang merugikan.",
                  icon: "🧠",
                  color: "bg-[#fef2f2] border-[#fecaca]",
                },
                {
                  no: "2",
                  judul: "Tidak Punya Sistem Trading yang Jelas",
                  deskripsi: "Trading tanpa strategi yang terdefinisi jelas sama dengan berjudi. Tanpa aturan entry, exit, manajemen modal, dan stop loss yang tertulis — keputusan trading menjadi subjektif dan tidak konsisten.",
                  icon: "📋",
                  color: "bg-[#fffbeb] border-[#fde68a]",
                },
                {
                  no: "3",
                  judul: "Overtrading",
                  deskripsi: "Membuka terlalu banyak posisi dalam waktu singkat, meningkatkan nominal setelah loss secara emosional, atau terus trading meski kondisi pasar tidak mendukung. Overtrading menguras modal lebih cepat dari seharusnya.",
                  icon: "⚡",
                  color: "bg-[#f5f3ff] border-[#ddd6fe]",
                },
              ].map((item) => (
                <div key={item.no} className={`${item.color} border rounded-xl px-4 py-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-[13px] font-semibold text-[#1a1612]">{item.judul}</p>
                  </div>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.deskripsi}</p>
                </div>
              ))}
            </div>
            <InfoBox icon="💡" title="Loss itu normal — yang tidak normal adalah loss tanpa sistem">
              Bahkan trader profesional mengalami loss 35-45% dari total trade. Perbedaannya: mereka punya sistem yang memastikan profit kumulatif lebih besar dari loss kumulatif. Tujuan bukan zero loss — tujuannya adalah memaksimalkan profit dan meminimalkan dampak loss.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 02: Manajemen Modal ──────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>02 · Manajemen Modal</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Manajemen Modal: Aturan 1-5% Per Trade</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Aturan paling fundamental dalam manajemen risiko binary option adalah: <strong>jangan pernah mempertaruhkan lebih dari 1-5% total modal Anda dalam satu trade tunggal.</strong> Ini bukan aturan yang membatasi profit — ini adalah aturan yang memastikan Anda bisa bertahan cukup lama untuk menghasilkan profit.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Logikanya sederhana: jika Anda trading dengan 1% per trade dan mengalami 10 loss berturut-turut (yang sangat tidak umum), Anda masih memiliki 90% modal. Jika Anda trading dengan 20% per trade dan loss 5x berturut-turut, modal sudah hampir habis.
            </p>
            <div className="space-y-3 mb-4">
              {[
                { modal: "Rp 500.000", persen: "2%", nominal: "Rp 10.000", max_loss: "Anda bisa bertahan 50 loss berturut-turut" },
                { modal: "Rp 500.000", persen: "5%", nominal: "Rp 25.000", max_loss: "Anda bisa bertahan 20 loss berturut-turut" },
                { modal: "Rp 500.000", persen: "20%", nominal: "Rp 100.000", max_loss: "Hanya butuh 5 loss berturut-turut untuk habis" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${i === 2 ? "bg-[#fef2f2] border-[#fecaca]" : "bg-white border-[rgba(26,22,18,0.07)]"}`}>
                  <div className="flex-1">
                    <div className="flex gap-2 flex-wrap mb-1">
                      <span className="text-[12px] font-semibold text-[#1a1612]">Modal: {item.modal}</span>
                      <span className="text-[12px] text-[#6b6058]">|</span>
                      <span className="text-[12px] font-semibold text-[#1d4ed8]">{item.persen} = {item.nominal}/trade</span>
                    </div>
                    <p className={`text-[11px] font-medium ${i === 2 ? "text-[#dc2626]" : "text-[#15803d]"}`}>{item.max_loss}</p>
                  </div>
                  <span className="text-xl">{i === 2 ? "❌" : "✅"}</span>
                </div>
              ))}
            </div>
            <TipBox>
              Untuk pemula, gunakan 1-3% per trade. Untuk martingale, hitung total exposure maksimal semua step — bukan hanya langkah pertama. Pastikan total maksimal martingale tidak lebih dari 15-20% total modal dalam satu sesi.
            </TipBox>
          </div>
        </section>

        {/* ── Section 03: Stop Loss di STC AutoTrade ──────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>03 · Stop Loss Otomatis</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Fitur Stop Loss Harian di STC AutoTrade: Wajib Aktif</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              STC AutoTrade memiliki fitur <strong>Stop Loss Harian</strong> yang secara otomatis menghentikan semua aktivitas bot ketika total kerugian harian Anda mencapai batas yang sudah Anda tentukan sebelumnya. Ini adalah fitur paling penting dalam aplikasi — dan harus selalu diaktifkan sebelum bot mulai beroperasi.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Cara Mengaktifkan Stop Loss Harian"
                desc="Buka STC AutoTrade → masuk menu Setting → cari opsi Stop Loss Harian → aktifkan toggle → masukkan nominal atau persentase loss maksimal per hari. Simpan setting sebelum menjalankan bot."
                sub="Setting yang disarankan: 20-25% dari modal sesi harian."
              />
              <StepCard
                n="2"
                title="Cara Menentukan Nilai Stop Loss yang Tepat"
                desc="Stop loss terlalu ketat (5-10%) bisa menyebabkan bot berhenti terlalu cepat saat drawdown normal. Stop loss terlalu longgar (50%+) tidak memberikan proteksi bermakna. 20-25% adalah sweet spot untuk mayoritas strategi."
                sub="Contoh: modal sesi Rp 500K → stop loss Rp 100K-125K."
              />
              <StepCard
                n="3"
                title="Apa yang Terjadi Saat Stop Loss Tercapai?"
                desc="Bot otomatis berhenti membuka order baru. Bot tidak akan melanjutkan trading sampai Anda me-reset secara manual di hari berikutnya. Ini mencegah bot terus trading saat kondisi pasar sedang tidak mendukung strategi."
                sub="Jangan override stop loss! Biarkan bot berhenti dan evaluasi hari itu."
              />
            </div>
            <WarningBox>
              Jangan pernah menonaktifkan atau menaikkan stop loss di tengah sesi trading karena ingin terus trading setelah batas tercapai. Ini adalah bentuk revenge trading dengan bot — dan hampir selalu memperburuk kerugian hari itu.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 04: Kapan Harus Berhenti ────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>04 · Tanda Harus Berhenti</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kapan Harus Berhenti Trading? Kenali Tanda-Tandanya</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Mengetahui kapan harus berhenti trading adalah skill yang sama pentingnya dengan mengetahui kapan harus masuk. Banyak kerugian besar terjadi bukan di awal sesi — tapi saat trader memaksakan diri untuk terus trading meski kondisi tidak mendukung.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                {
                  tanda: "Stop Loss harian sudah tercapai",
                  aksi: "Berhenti trading hari itu. Tanpa kecuali.",
                  level: "KRITIS",
                  color: "bg-[#fef2f2] border-[#fecaca] text-[#dc2626]",
                },
                {
                  tanda: "Win rate drop drastis dalam 1 jam",
                  aksi: "Istirahat 30-60 menit. Evaluasi kondisi pasar.",
                  level: "PERLU PERHATIAN",
                  color: "bg-[#fffbeb] border-[#fde68a] text-[#d97706]",
                },
                {
                  tanda: "Merasa emosional / frustrasi",
                  aksi: "Berhenti trading. Tidak ada yang lebih mahal dari trading saat emosi.",
                  level: "KRITIS",
                  color: "bg-[#fef2f2] border-[#fecaca] text-[#dc2626]",
                },
                {
                  tanda: "Pasar sangat choppy / tidak ada tren",
                  aksi: "Tunda trading. Tunggu sesi yang lebih jelas.",
                  level: "DISARANKAN BERHENTI",
                  color: "bg-[#fffbeb] border-[#fde68a] text-[#d97706]",
                },
                {
                  tanda: "Target profit harian sudah tercapai",
                  aksi: "Berhenti. Rakus adalah musuh terbesar trader.",
                  level: "WAJIB BERHENTI",
                  color: "bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]",
                },
                {
                  tanda: "Sudah trading lebih dari 3-4 jam",
                  aksi: "Kelelahan menurunkan kualitas keputusan. Istirahat.",
                  level: "DISARANKAN",
                  color: "bg-[#eff6ff] border-[#bfdbfe] text-[#1d4ed8]",
                },
              ].map((item) => (
                <div key={item.tanda} className={`${item.color} border rounded-xl px-4 py-3`}>
                  <span className={`text-[10px] font-bold mb-1 block`}>{item.level}</span>
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-1">{item.tanda}</p>
                  <p className="text-[12px] text-[#6b6058]">{item.aksi}</p>
                </div>
              ))}
            </div>
            <InfoBox icon="🛑" title="Jadwal Istirahat adalah Bagian dari Strategi">
              Trader profesional punya jadwal trading yang terstruktur — misalnya trading 2 jam, istirahat 1 jam, trading 2 jam lagi. Jeda ini membantu menjaga fokus dan mencegah keputusan impulsif akibat kelelahan mental.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 05: Review Riwayat Trading ──────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>05 · Analisis Penyebab Loss</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Analisis Penyebab Loss: Review Riwayat Trading di STC AutoTrade</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Trader yang tidak belajar dari loss akan terus mengulang pola yang sama. STC AutoTrade menyimpan riwayat semua trade yang telah dieksekusi — manfaatkan data ini untuk mengidentifikasi pola loss dan mengoptimalkan strategi Anda.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Review Riwayat Trade Harian"
                desc="Setiap akhir sesi trading, buka riwayat trade di STC AutoTrade. Lihat: berapa trade yang menang vs kalah, jam berapa loss terbanyak terjadi, dan di aset mana win rate paling rendah."
                sub="Lakukan ini setiap hari — konsistensi review sama pentingnya dengan konsistensi trading."
              />
              <StepCard
                n="2"
                title="Identifikasi Pola Loss"
                desc="Cari pola: apakah loss terbanyak di jam tertentu (mungkin sesi pasar sepi)? Di aset tertentu? Di kondisi pasar tertentu? Pola yang teridentifikasi bisa diatasi dengan penyesuaian setting bot."
                sub="Contoh: jika loss banyak di jam 10-12 WIB, pertimbangkan tidak mengaktifkan bot di jam tersebut."
              />
              <StepCard
                n="3"
                title="Catat di Trading Journal"
                desc="Simpan catatan harian: tanggal, total trade, win/loss, nominal, kondisi pasar, dan observasi Anda. Trading journal adalah alat pengembangan diri paling efektif yang jarang digunakan trader pemula."
                sub="Bahkan catatan sederhana di Notes HP sudah sangat membantu."
              />
            </div>
            <TipBox>
              Data dari 100+ trade memberikan gambaran yang akurat tentang performa strategi Anda. Jangan mengubah strategi hanya berdasarkan 10-20 trade — itu terlalu sedikit untuk mengambil kesimpulan yang valid secara statistik.
            </TipBox>
          </div>
        </section>

        {/* ── Section 06: Recovery setelah Loss ───────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>06 · Strategi Recovery</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Strategi Recovery setelah Loss: Martingale vs Flat Bet</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Setelah mengalami loss besar, banyak trader ingin "recover" secepat mungkin. Ada dua pendekatan utama — masing-masing dengan kelebihan dan risiko tersendiri:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-bold text-[#1a1612] mb-2">Strategi Martingale</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">Meningkatkan nominal trade setelah setiap loss untuk memulihkan kerugian dalam satu trade win. Efektif jika dikontrol ketat — berbahaya jika tanpa batas.</p>
                <div className="space-y-1">
                  <p className="text-[11px] text-[#15803d]">+ Recovery cepat saat win</p>
                  <p className="text-[11px] text-[#15803d]">+ Secara matematis efisien</p>
                  <p className="text-[11px] text-[#dc2626]">- Risiko tinggi jika loss streak panjang</p>
                  <p className="text-[11px] text-[#dc2626]">- Membutuhkan modal buffer yang cukup</p>
                </div>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-bold text-[#1a1612] mb-2">Strategi Flat Bet</p>
                <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">Tetap menggunakan nominal sama di setiap trade, tanpa peduli hasil sebelumnya. Recovery lebih lambat tapi risiko terkontrol penuh — cocok setelah loss besar.</p>
                <div className="space-y-1">
                  <p className="text-[11px] text-[#15803d]">+ Risiko per sesi sangat terkontrol</p>
                  <p className="text-[11px] text-[#15803d]">+ Tidak membutuhkan modal besar</p>
                  <p className="text-[11px] text-[#dc2626]">- Recovery lebih lambat</p>
                  <p className="text-[11px] text-[#dc2626]">- Membutuhkan win rate lebih tinggi</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-4 mb-4">
              <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Rekomendasi Setelah Loss Besar:</p>
              <ol className="space-y-1.5">
                {[
                  "Istirahat minimal 24 jam setelah loss besar",
                  "Kembali dengan nominal 50% dari biasanya",
                  "Gunakan flat bet selama 3-5 hari pertama",
                  "Kembali ke martingale hanya setelah win rate stabil",
                  "Evaluasi penyebab loss sebelum kembali trading",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                    <span className="w-5 h-5 rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8] flex-shrink-0">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <WarningBox>
              Jangan mencoba recover kerugian besar dalam satu hari dengan melipatgandakan nominal secara drastis. Ini adalah bentuk gambling, bukan trading. "Revenge trading" adalah penyebab nomor satu loss besar yang menguras akun.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 07: 7 Kebiasaan Trader Profit ───────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>07 · Kebiasaan Trader Sukses</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">7 Kebiasaan Trader yang Selalu Profit di Stockity</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Berikut adalah tujuh kebiasaan konkret yang membedakan trader yang konsisten profit dari yang terus rugi:
            </p>
            <div className="space-y-3">
              {[
                {
                  no: "1",
                  kebiasaan: "Punya Target Profit Harian yang Realistis",
                  detail: "Tetapkan target profit harian sebelum mulai trading — misalnya 3-5% dari modal. Saat target tercapai, berhenti dan tidak boleh lanjut. Disiplin ini mencegah overtrading saat sedang 'panas'.",
                },
                {
                  no: "2",
                  kebiasaan: "Selalu Aktifkan Stop Loss Sebelum Bot Mulai",
                  detail: "Ini bukan opsional. Stop loss harian adalah jaring pengaman yang melindungi modal dari kerusakan parah. Trader sukses selalu setting stop loss sebelum bot mulai, bukan setelah mulai loss.",
                },
                {
                  no: "3",
                  kebiasaan: "Konsisten di Satu Strategi, Tidak Melompat-lompat",
                  detail: "Trader sukses memilih satu strategi, mengujinya dengan disiplin selama berminggu-minggu, dan mengoptimalkannya secara bertahap. Bukan mencoba strategi baru setiap hari.",
                },
                {
                  no: "4",
                  kebiasaan: "Trading di Jam yang Sama Setiap Hari",
                  detail: "Pasar memiliki karakter berbeda di jam berbeda. Dengan trading di jam yang sama, Anda membangun pemahaman mendalam tentang karakteristik pasar di jam tersebut dan bisa beradaptasi lebih cepat.",
                },
                {
                  no: "5",
                  kebiasaan: "Review Trading Journal Setiap Malam",
                  detail: "Catat semua trade, evaluasi apa yang berjalan baik dan apa yang buruk. Identifikasi pola dan lakukan penyesuaian kecil secara bertahap. Trader tanpa trading journal belajar jauh lebih lambat.",
                },
                {
                  no: "6",
                  kebiasaan: "Tidak Trading Saat Kondisi Emosional",
                  detail: "Setelah pertengkaran, stres pekerjaan, kelelahan fisik, atau euforia berlebihan setelah profit besar — jangan trading. Emosi adalah musuh terbesar keputusan rasional dalam trading.",
                },
                {
                  no: "7",
                  kebiasaan: "Selalu Mulai dengan Demo untuk Strategi Baru",
                  detail: "Setiap kali ingin mencoba strategi baru, setting baru, atau aset baru — uji dulu di mode demo selama minimal 1-2 minggu. Jangan pernah langsung ujicoba di akun real.",
                },
              ].map((item) => (
                <div key={item.no} className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
                  <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{item.no}</div>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{item.kebiasaan}</p>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.detail}</p>
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
                  q: "Apakah normal loss saat trading binary option di Stockity?",
                  a: "Ya, sangat normal. Bahkan trader profesional mengalami loss 30-45% dari total trade. Yang membedakan trader sukses bukan nol loss — tapi manajemen risiko yang memastikan profit kumulatif lebih besar dari loss kumulatif. Target win rate di atas 55% sudah cukup untuk profit jangka panjang.",
                },
                {
                  q: "Berapa loss harian yang masih wajar di Stockity?",
                  a: "Umumnya, loss harian di bawah 20-30% dari modal sesi dianggap masih wajar dan bisa di-recover. Loss lebih dari 30% dalam satu hari adalah sinyal untuk berhenti dan evaluasi. Gunakan fitur Stop Loss Harian di STC AutoTrade untuk otomatis membatasi kerugian harian.",
                },
                {
                  q: "Cara recover cepat setelah loss besar di Stockity?",
                  a: "Cara paling berbahaya adalah mencoba recover dengan meningkatkan nominal secara drastis. Cara yang benar: istirahat 24 jam minimum, evaluasi penyebab loss, kembali dengan nominal lebih kecil dari biasanya, dan bangun kembali kepercayaan diri secara bertahap.",
                },
                {
                  q: "Apakah martingale aman untuk menghindari loss?",
                  a: "Martingale bukan strategi 'anti loss' — ini strategi recovery yang efektif jika digunakan dengan setting tepat (multiplier tidak terlalu tinggi, max step dibatasi, stop loss aktif). Tanpa kontrol yang benar, martingale justru bisa mempercepat kerugian besar.",
                },
                {
                  q: "Bagaimana cara menggunakan Stop Loss di STC AutoTrade?",
                  a: "Buka STC AutoTrade → masuk menu Setting bot → aktifkan fitur Stop Loss Harian → masukkan nominal atau persentase loss maksimal per hari. Saat total loss mencapai batas tersebut, bot otomatis berhenti dan tidak akan membuka order baru sampai Anda me-reset secara manual.",
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
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Ringkasan: Cara Menghindari Loss di Stockity</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Menghindari loss secara total di binary option adalah hal yang tidak mungkin — dan bukan tujuan yang tepat. Tujuan yang tepat adalah mengelola loss agar tidak menghancurkan modal, dan memastikan profit kumulatif selalu lebih besar dari loss kumulatif dalam jangka panjang.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Tiga kunci utama: manajemen modal yang ketat (1-5% per trade), stop loss harian yang selalu aktif di STC AutoTrade, dan disiplin psikologi untuk berhenti saat kondisi tidak mendukung. Ketiga elemen ini, jika diterapkan secara konsisten, sudah cukup untuk mengubah performa trading Anda secara dramatis.
            </p>
            <TipBox>
              Mulai terapkan stop loss harian di STC AutoTrade mulai sesi trading Anda berikutnya. Tetapkan batas 20-25% dari modal sesi dan patuhi tanpa pengecualian. Disiplin ini saja bisa menyelamatkan modal Anda dari banyak situasi merugikan.
            </TipBox>
            <div className="mt-4">
              <WarningBox>
                Disclaimer: Trading binary option mengandung risiko kerugian finansial yang signifikan. Artikel ini bersifat edukatif dan tidak merupakan saran investasi. Gunakan hanya dana yang siap Anda tanggung risikonya dan selalu mulai dari mode demo.
              </WarningBox>
            </div>
          </div>
        </section>

        {/* ── Internal Links ──────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Baca Juga</SectionLabel>
            <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">Artikel Terkait</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale Stockity", desc: "Cara kerja martingale dan setting yang aman" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal yang dibutuhkan untuk mulai?" },
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
