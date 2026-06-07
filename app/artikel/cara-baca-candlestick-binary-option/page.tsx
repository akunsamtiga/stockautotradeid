import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Baca Candlestick Binary Option: Panduan Pola untuk Pemula 2026",
  description:
    "Pelajari cara membaca candlestick binary option dari dasar. Pahami pola Doji, Engulfing, Pin Bar dan terapkan di trading Stockity.",
  keywords: [
    "cara baca candlestick binary option",
    "pola candlestick binary option",
    "candlestick stockity",
    "doji binary option",
    "engulfing binary option",
    "pin bar binary option",
    "hammer binary option",
    "shooting star binary option",
    "cara analisis candlestick",
    "pola candlestick pemula",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
  },
  openGraph: {
    title: "Cara Baca Candlestick Binary Option: Panduan Pola untuk Pemula 2026",
    description:
      "Pelajari cara membaca candlestick binary option dari dasar. Pahami pola Doji, Engulfing, Pin Bar dan terapkan di trading Stockity.",
    url: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cara Baca Candlestick Binary Option 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Baca Candlestick Binary Option: Panduan Pola untuk Pemula 2026",
    description:
      "Pelajari cara membaca candlestick binary option dari dasar. Pahami pola Doji, Engulfing, Pin Bar dan terapkan di trading Stockity.",
    images: ["https://stcautotrade.id/og-image.png"],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Baca Candlestick Binary Option: Panduan Pola untuk Pemula 2026",
  description:
    "Pelajari cara membaca candlestick binary option dari dasar. Pahami pola Doji, Engulfing, Pin Bar dan terapkan di trading Stockity.",
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
    "@id": "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
  },
  keywords: "cara baca candlestick binary option, pola candlestick binary option, doji binary option, engulfing binary option",
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
      name: "Cara Baca Candlestick Binary Option",
      item: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah perlu hafal semua pola candlestick untuk trading binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Anda cukup menguasai 5-7 pola candlestick paling kuat dan paling sering muncul: Doji, Bullish/Bearish Engulfing, Hammer, Shooting Star, dan Morning/Evening Star. Menguasai sedikit pola dengan pemahaman mendalam jauh lebih baik daripada hafal banyak pola tapi tidak paham konteksnya.",
      },
    },
    {
      "@type": "Question",
      name: "Timeframe terbaik untuk membaca candlestick binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk binary option durasi 1-5 menit, gunakan chart M1 atau M5. Untuk trading yang lebih sabar dengan durasi 15-30 menit, gunakan M15. Selalu konfirmasi pola candlestick di timeframe yang lebih tinggi sebelum entry di timeframe rendah.",
      },
    },
    {
      "@type": "Question",
      name: "Pola candlestick mana yang paling akurat untuk binary option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bullish/Bearish Engulfing adalah salah satu pola paling kuat karena menunjukkan pembalikan momentum yang jelas. Pin Bar (Hammer dan Shooting Star) juga sangat akurat karena menunjukkan penolakan harga yang kuat dari level support atau resistance.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah candlestick saja cukup tanpa indikator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beberapa trader profesional hanya menggunakan price action (candlestick + support/resistance) tanpa indikator. Namun untuk pemula, disarankan mengkombinasikan pola candlestick dengan minimal satu indikator (seperti RSI) untuk konfirmasi sinyal.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana STC AutoTrade menggunakan analisis candlestick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mode Momentum di STC AutoTrade menganalisis pola candlestick secara otomatis pada setiap candle yang terbentuk. Bot mendeteksi pola Engulfing, Pin Bar, dan momentum pembalikan, lalu mengeksekusi order secara otomatis tanpa perlu Anda pantau chart secara manual.",
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

export default function CaraBacaCandlestickBinaryOptionPage() {
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
                <li className="text-[#1a1612] font-medium" aria-current="page">Cara Baca Candlestick Binary Option</li>
              </ol>
            </nav>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Edukasi Trading</span>
            {/* H1 */}
            <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
              Cara Baca Candlestick Binary Option: Panduan Pola untuk Pemula 2026
            </h1>
            {/* Description */}
            <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
              Pelajari cara membaca candlestick binary option dari dasar. Pahami pola Doji, Engulfing, Pin Bar, dan cara menerapkannya di trading Stockity untuk meningkatkan akurasi prediksi arah harga.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: "Doji", l: "Pola Dasar" },
                { v: "Engulfing", l: "Paling Kuat" },
                { v: "3 Detik", l: "Waktu Baca" },
                { v: "Akurat", l: "dengan Konteks" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-3 py-3 text-center">
                  <p className="text-[18px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                  <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 01: Apa Itu Candlestick ─────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>01 · Dasar Candlestick</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Apa Itu Candlestick dan Mengapa Penting?</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Candlestick adalah representasi visual dari pergerakan harga dalam satu periode waktu tertentu (1 menit, 5 menit, 1 jam, dll). Setiap candlestick menceritakan "kisah" pertarungan antara pembeli (bull) dan penjual (bear) selama periode tersebut — siapa yang menang, siapa yang kalah, dan seberapa dramatis pertarungannya.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Bagi trader binary option, kemampuan membaca candlestick adalah keterampilan paling fundamental. Tidak seperti indikator yang bersifat lagging (tertinggal), candlestick memberikan informasi <em>real-time</em> tentang sentimen pasar dan momentum pergerakan harga.
            </p>
            <InfoBox icon="🕯️" title="Mengapa candlestick lebih informatif dari chart garis?">
              Chart garis hanya menampilkan harga penutupan — informasi paling minimal. Candlestick menampilkan 4 data sekaligus: harga pembukaan, penutupan, tertinggi, dan terendah dalam satu periode. Ini memberikan gambaran yang jauh lebih lengkap tentang dinamika pasar.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 02: Anatomi Candlestick ─────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>02 · Anatomi</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Anatomi Candlestick: Body, Shadow, dan Warna</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Setiap candlestick terdiri dari tiga bagian utama yang masing-masing memberikan informasi berbeda tentang pergerakan harga:
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Body (Tubuh) — Inti Candlestick"
                desc="Body adalah kotak persegi panjang yang menunjukkan rentang antara harga pembukaan dan penutupan. Body panjang = pergerakan harga kuat. Body pendek = ketidakpastian atau konsolidasi pasar."
                sub="Body besar bullish = pembeli sangat dominan. Body besar bearish = penjual sangat dominan."
              />
              <StepCard
                n="2"
                title="Shadow / Wick (Ekor) — Petunjuk Penolakan Harga"
                desc="Shadow adalah garis tipis di atas dan bawah body. Upper shadow = harga sempat naik tapi ditolak. Lower shadow = harga sempat turun tapi dipantulkan naik. Shadow panjang menandakan penolakan harga yang kuat."
                sub="Shadow panjang di bawah = sinyal bullish kuat (buyer masuk di level rendah)."
              />
              <StepCard
                n="3"
                title="Warna — Identifikasi Bullish vs Bearish"
                desc="Candlestick hijau (atau putih): harga penutupan lebih tinggi dari pembukaan = BULLISH (pembeli menang). Candlestick merah (atau hitam): harga penutupan lebih rendah dari pembukaan = BEARISH (penjual menang)."
                sub="Di platform Stockity: hijau = bullish, merah = bearish."
              />
            </div>
            <TipBox>
              Latih mata Anda untuk langsung mengenali tiga elemen candlestick (body, shadow, warna) dalam hitungan detik. Kemampuan membaca cepat ini sangat penting di binary option karena keputusan sering harus diambil dalam waktu sangat singkat.
            </TipBox>
          </div>
        </section>

        {/* ── Section 03: Doji ─────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>03 · Pola Doji</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pola Doji: Tanda Ketidakpastian Pasar</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Doji adalah candlestick dengan body yang sangat kecil atau hampir tidak ada — artinya harga pembukaan dan penutupan hampir sama. Doji menunjukkan bahwa pembeli dan penjual berada dalam posisi seimbang — tidak ada yang menang, dan pasar dalam kondisi ketidakpastian penuh.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Dalam konteks binary option, Doji paling bernilai saat muncul <em>setelah tren panjang</em> — ini bisa menjadi sinyal bahwa tren akan segera berbalik. Namun Doji yang muncul di tengah konsolidasi tidak memiliki banyak nilai prediktif.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              {[
                {
                  nama: "Standard Doji",
                  desc: "Body sangat kecil, shadow relatif seimbang. Menandakan kebimbangan — tunggu konfirmasi candle berikutnya.",
                  sinyal: "Netral — butuh konfirmasi",
                },
                {
                  nama: "Dragonfly Doji",
                  desc: "Body di atas, lower shadow sangat panjang, tidak ada upper shadow. Harga turun tapi ditolak kuat ke atas. Sinyal bullish kuat.",
                  sinyal: "Bullish — potensial CALL",
                },
                {
                  nama: "Gravestone Doji",
                  desc: "Body di bawah, upper shadow sangat panjang, tidak ada lower shadow. Harga naik tapi ditolak kuat ke bawah. Sinyal bearish kuat.",
                  sinyal: "Bearish — potensial PUT",
                },
              ].map((d) => (
                <div key={d.nama} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-2">{d.nama}</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{d.desc}</p>
                  <p className="text-[11px] font-medium text-[#3b82f6]">{d.sinyal}</p>
                </div>
              ))}
            </div>
            <WarningBox>
              Jangan langsung entry saat melihat Doji. Tunggu candle konfirmasi berikutnya — jika candle setelah Doji bullish yang kuat, baru pertimbangkan CALL. Jika bearish, pertimbangkan PUT.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 04: Engulfing ─────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>04 · Pola Engulfing</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pola Engulfing: Pembalikan Paling Kuat</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Engulfing adalah pola dua candlestick di mana candle kedua "menelan" (engulf) seluruh body candle pertama. Ini adalah salah satu pola pembalikan paling kuat dan paling dapat diandalkan dalam analisis candlestick — digunakan oleh trader profesional di seluruh dunia.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4">
                <p className="text-[13px] font-semibold text-[#14532d] mb-2">Bullish Engulfing — Sinyal CALL</p>
                <p className="text-[13px] text-[#14532d] leading-relaxed mb-2">
                  Muncul saat tren turun. Candle pertama: merah (bearish) kecil. Candle kedua: hijau (bullish) besar yang menutupi seluruh body candle pertama. Artinya: pembeli mengambil alih sepenuhnya — potensi pembalikan ke atas sangat kuat.
                </p>
                <p className="text-[11px] font-medium text-[#15803d]">Aksi: entry CALL pada pembukaan candle berikutnya setelah pola Bullish Engulfing terkonfirmasi.</p>
              </div>
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl px-5 py-4">
                <p className="text-[13px] font-semibold text-[#991b1b] mb-2">Bearish Engulfing — Sinyal PUT</p>
                <p className="text-[13px] text-[#991b1b] leading-relaxed mb-2">
                  Muncul saat tren naik. Candle pertama: hijau (bullish) kecil. Candle kedua: merah (bearish) besar yang menutupi seluruh body candle pertama. Artinya: penjual mengambil alih sepenuhnya — potensi pembalikan ke bawah sangat kuat.
                </p>
                <p className="text-[11px] font-medium text-[#b91c1c]">Aksi: entry PUT pada pembukaan candle berikutnya setelah pola Bearish Engulfing terkonfirmasi.</p>
              </div>
            </div>
            <InfoBox icon="💡" title="Tips Memaksimalkan Akurasi Engulfing">
              Engulfing paling kuat saat muncul di level support/resistance penting, atau saat dikonfirmasi oleh RSI di zona oversold/overbought. Semakin besar body candle engulfing relatif terhadap candle sebelumnya, semakin kuat sinyalnya.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 05: Pin Bar ──────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>05 · Pin Bar & Hammer</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pin Bar, Hammer & Shooting Star: Penolakan Harga yang Kuat</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Pin Bar (juga dikenal sebagai Hammer atau Shooting Star tergantung konteksnya) adalah candlestick dengan shadow (ekor) yang sangat panjang dan body yang kecil. Ekor panjang ini menandakan bahwa harga sempat bergerak jauh ke satu arah, namun kemudian ditolak dengan kuat dan berbalik arah sebelum candle ditutup.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Hammer — Sinyal Bullish"
                desc="Muncul di bagian bawah tren turun. Body kecil di atas, lower shadow sangat panjang (minimal 2x panjang body), tidak ada atau sangat sedikit upper shadow. Harga turun jauh tapi ditolak kembali ke atas — pembeli kembali masuk kuat."
                sub="Entry CALL setelah konfirmasi candle bullish berikutnya."
              />
              <StepCard
                n="2"
                title="Shooting Star — Sinyal Bearish"
                desc="Muncul di bagian atas tren naik. Body kecil di bawah, upper shadow sangat panjang (minimal 2x body), tidak ada atau sangat sedikit lower shadow. Harga naik jauh tapi ditolak ke bawah — penjual masuk kuat di level tinggi."
                sub="Entry PUT setelah konfirmasi candle bearish berikutnya."
              />
              <StepCard
                n="3"
                title="Inverted Hammer — Sinyal Bullish (Konteks Reversal)"
                desc="Tampilan kebalikan Hammer — body kecil di bawah, upper shadow panjang. Muncul di bagian bawah tren turun. Meski terlihat bearish, ini bisa menjadi sinyal pembalikan bullish jika diikuti konfirmasi bullish."
                sub="Selalu tunggu konfirmasi candle berikutnya sebelum entry."
              />
            </div>
            <TipBox>
              Kualitas Pin Bar meningkat drastis saat ekor menyentuh level support/resistance yang signifikan, atau saat dikonfirmasi oleh level Fibonacci retracement. Pin Bar di level kunci adalah salah satu sinyal paling diandalkan trader price action profesional.
            </TipBox>
          </div>
        </section>

        {/* ── Section 06: Konteks Tren ─────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>06 · Konteks Tren</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Membaca Candlestick dalam Konteks Tren</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Kesalahan terbesar pemula dalam membaca candlestick adalah membaca pola secara terisolasi — tanpa mempertimbangkan konteks tren dan level harga secara keseluruhan. Pola yang sama bisa memiliki makna yang sangat berbeda tergantung posisinya dalam tren.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              <strong>Prinsip utama:</strong> selalu identifikasi tren besar terlebih dahulu, baru cari pola candlestick yang searah dengan tren tersebut. Trading mengikuti arah tren (trend following) secara statistik jauh lebih menguntungkan daripada counter-trend trading.
            </p>
            <div className="space-y-3 mb-4">
              <StepCard
                n="1"
                title="Langkah 1: Identifikasi Tren Utama"
                desc="Mundur ke timeframe yang lebih tinggi (misalnya M15 atau H1 jika trading di M5). Tentukan: apakah pasar sedang uptrend, downtrend, atau sideways? Gunakan MA atau higher highs/lower lows."
                sub="Selalu ikuti tren utama — jangan lawan tren besar."
              />
              <StepCard
                n="2"
                title="Langkah 2: Cari Level Support/Resistance"
                desc="Tandai level harga penting: swing high, swing low, level round number (angka bulat), atau area konsolidasi sebelumnya. Pola candlestick yang muncul DI level ini jauh lebih kuat dari yang muncul di tengah chart."
                sub="Pola candlestick + level kunci = sinyal berkualitas tinggi."
              />
              <StepCard
                n="3"
                title="Langkah 3: Konfirmasi Pola"
                desc="Setelah melihat pola candlestick potensial, tunggu candle berikutnya untuk konfirmasi. Jangan entry saat candle masih terbentuk. Entry setelah candle konfirmasi ditutup untuk mengurangi risiko false signal."
                sub="Disiplin menunggu konfirmasi adalah perbedaan antara trader amatir dan profesional."
              />
            </div>
            <WarningBox>
              Jangan trade pola candlestick secara terisolasi. Bullish Engulfing di tengah downtrend kuat memiliki akurasi jauh lebih rendah dibanding Bullish Engulfing di support level saat pasar sideways. Konteks adalah segalanya.
            </WarningBox>
          </div>
        </section>

        {/* ── Section 07: STC AutoTrade & Candlestick ──────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>07 · STC AutoTrade</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mode Momentum STC AutoTrade: Analisis Candlestick Otomatis</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Membaca candlestick secara manual membutuhkan latihan dan fokus yang tinggi. Bot STC AutoTrade menyediakan <strong>Mode Momentum</strong> — mode trading otomatis yang menganalisis pola candlestick dan momentum pergerakan harga secara real-time di akun Stockity Anda.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Apa yang Bot Analisis?</p>
                <ul className="space-y-1.5">
                  {[
                    "Pola Engulfing (Bullish & Bearish)",
                    "Momentum dan kekuatan candle",
                    "Pin Bar / Shadow ekstrem",
                    "Konsistensi arah candle",
                    "Volume relatif per candle",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Keunggulan vs Manual</p>
                <ul className="space-y-1.5">
                  {[
                    "Analisis setiap candle tanpa jeda",
                    "Tidak terpengaruh emosi",
                    "Eksekusi instan setelah konfirmasi",
                    "Bisa jalankan 24 jam non-stop",
                    "Konsistensi algoritma terjaga",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <InfoBox icon="🤖" title="Trading otomatis bukan pengganti pemahaman">
              Memahami cara kerja candlestick tetap penting meskipun Anda menggunakan bot. Pemahaman ini membantu Anda memilih mode bot yang tepat, mengoptimalkan setting, dan memahami mengapa bot mengambil keputusan tertentu.
            </InfoBox>
          </div>
        </section>

        {/* ── Section 08: Kesalahan Umum ───────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>08 · Kesalahan Umum</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesalahan Umum Membaca Candlestick</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Berikut adalah kesalahan yang paling sering dilakukan pemula saat menggunakan analisis candlestick untuk binary option:
            </p>
            <div className="space-y-3">
              {[
                {
                  no: "1",
                  kesalahan: "Entry saat candle masih terbentuk",
                  solusi: "Selalu tunggu candle ditutup (closed) sebelum entry. Candle yang masih terbentuk bisa berubah bentuk secara drastis sebelum periode berakhir.",
                },
                {
                  no: "2",
                  kesalahan: "Mengabaikan konteks tren dan level",
                  solusi: "Selalu identifikasi tren besar dan level support/resistance sebelum mencari pola candlestick. Pola yang sama bisa sangat berbeda maknanya tergantung konteks.",
                },
                {
                  no: "3",
                  kesalahan: "Mengandalkan satu pola saja tanpa konfirmasi",
                  solusi: "Gunakan minimal dua alat analisis — misalnya pola candlestick + RSI, atau pola candlestick + level support/resistance — untuk konfirmasi sinyal.",
                },
                {
                  no: "4",
                  kesalahan: "Mencoba hafal semua pola sekaligus",
                  solusi: "Fokus pada 3-5 pola paling kuat (Engulfing, Pin Bar, Doji) dan kuasai betul sebelum mempelajari pola lainnya. Kualitas lebih penting dari kuantitas.",
                },
                {
                  no: "5",
                  kesalahan: "Trading di semua kondisi pasar",
                  solusi: "Candlestick paling akurat di pasar yang memiliki tren atau di level kunci yang jelas. Saat pasar choppy (bergerak random tanpa arah), lebih baik tidak trading sama sekali.",
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

        {/* ── Section 09: FAQ ─────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-6">Pertanyaan yang Sering Diajukan</h2>
            <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
              {[
                {
                  q: "Apakah perlu hafal semua pola candlestick untuk trading binary option?",
                  a: "Tidak. Cukup kuasai 5-7 pola paling kuat: Doji, Bullish/Bearish Engulfing, Hammer, Shooting Star, dan Morning/Evening Star. Menguasai sedikit pola dengan pemahaman mendalam jauh lebih baik dari hafal banyak pola tanpa konteks.",
                },
                {
                  q: "Timeframe terbaik untuk membaca candlestick binary option?",
                  a: "Untuk binary option durasi 1-5 menit, gunakan chart M1 atau M5. Untuk durasi 15-30 menit, gunakan M15. Selalu konfirmasi pola di timeframe yang lebih tinggi sebelum entry di timeframe rendah.",
                },
                {
                  q: "Pola candlestick mana yang paling akurat untuk binary option?",
                  a: "Bullish/Bearish Engulfing adalah salah satu paling kuat karena menunjukkan pembalikan momentum yang jelas. Pin Bar juga sangat akurat karena menunjukkan penolakan harga yang kuat dari level support atau resistance.",
                },
                {
                  q: "Apakah candlestick saja cukup tanpa indikator?",
                  a: "Beberapa trader profesional hanya menggunakan price action tanpa indikator. Namun untuk pemula, disarankan mengkombinasikan pola candlestick dengan minimal satu indikator seperti RSI untuk konfirmasi sinyal.",
                },
                {
                  q: "Bagaimana STC AutoTrade menggunakan analisis candlestick?",
                  a: "Mode Momentum di STC AutoTrade menganalisis pola candlestick secara otomatis pada setiap candle. Bot mendeteksi pola Engulfing, Pin Bar, dan momentum pembalikan, lalu mengeksekusi order otomatis tanpa perlu Anda pantau chart manual.",
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

        {/* ── Section 10: Kesimpulan ──────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Kesimpulan</SectionLabel>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Ringkasan: Cara Baca Candlestick Binary Option</h2>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Candlestick adalah bahasa visual pasar yang menceritakan pertarungan antara pembeli dan penjual di setiap periode waktu. Memahami anatomi dasar (body, shadow, warna) adalah fondasi yang harus dikuasai sebelum mempelajari pola yang lebih kompleks.
            </p>
            <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
              Pola Doji, Engulfing, dan Pin Bar adalah tiga pola yang paling penting untuk dikuasai pemula. Gunakan selalu dalam konteks tren dan konfirmasi dengan indikator atau level harga penting. Dan ingat: jangan pernah entry saat candle masih terbentuk — tunggu konfirmasi penutupan candle.
            </p>
            <TipBox>
              Praktikkan membaca candlestick setiap hari di chart Stockity — bahkan tanpa trading. Amati pola yang muncul, prediksi arah berikutnya, dan cek hasilnya. Latihan observasi tanpa tekanan ini akan mempercepat kemampuan membaca candlestick Anda secara dramatis.
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
                { href: "/artikel/indikator-trading-binary-option", title: "Indikator Binary Option", desc: "RSI, MA, Bollinger Bands untuk binary option" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot", desc: "Panduan konfigurasi bot trading Stockity" },
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
