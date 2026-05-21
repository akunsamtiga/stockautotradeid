"use client";

/**
 * page.tsx — STC AutoTrade Landing Page
 *
 * Optimasi bundle:
 * - @phosphor-icons/react & framer-motion di-tree-shake via
 *   `experimental.optimizePackageImports` di next.config.ts
 * - Easing array di-cast sekali di konstanta agar tidak membuat
 *   objek baru setiap render
 * - CSS vars dari globals.css digunakan via kelas Tailwind; warna
 *   hardcoded hanya dipakai untuk nilai yang belum didukung arbitrary-var
 */

import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Eye,
  Brain,
  ChartBar,
  Warning,
  ShieldCheck,
  Target,
  TrendUp,
  FloppyDisk,
  ClipboardText,
  DownloadSimple,
  Check,
  Plus,
  GlobeHemisphereWest,
} from "@phosphor-icons/react";

/* ── Data ─────────────────────────────────────────────────────── */

const MODES = [
  { tag: "Schedule",  color: "text-blue-700 bg-blue-50 border border-blue-100",     title: "Trading Terjadwal",         desc: "Jadwalkan order berdasarkan pola historis. Bot eksekusi tepat waktu — bahkan saat Anda tidur.",                                                          for: "Trader dengan data historis teratur" },
  { tag: "Fastrade",  color: "text-emerald-700 bg-emerald-50 border border-emerald-100", title: "Trading Cepat",         desc: "Bot membaca momentum pasar pada timeframe 1m–1h dan mengeksekusi order mengikuti arah yang terdeteksi.",                                              for: "Trader aktif yang suka banyak order" },
  { tag: "CTC",       color: "text-violet-700 bg-violet-50 border border-violet-100",   title: "Copy Trading",          desc: "Tidak perlu analisis sendiri. Bot mengikuti sinyal sumber terpercaya dan eksekusi real-time di akun Anda.",                                          for: "Pemula yang ingin belajar bertahap" },
  { tag: "AI Signal", color: "text-rose-700 bg-rose-50 border border-rose-100",         title: "Sinyal Kecerdasan Buatan", desc: "Algoritma AI menganalisis pasar secara real-time, mengidentifikasi pola, dan menghasilkan sinyal UP/DOWN otomatis.",                              for: "Trader yang ingin keputusan berbasis data" },
  { tag: "Indicator", color: "text-amber-700 bg-amber-50 border border-amber-100",      title: "Indikator Teknikal",     desc: "Bot membaca SMA, EMA, dan RSI — indikator klasik trader profesional — untuk menentukan waktu entry terbaik.",                                        for: "Trader dengan dasar analisis teknikal" },
  { tag: "Momentum",  color: "text-orange-700 bg-orange-50 border border-orange-100",   title: "Pola Candlestick",      desc: "Bot mengenali Candle Sabit, Doji Terjepit, dan BB SAR Break yang sering mendahului pergerakan harga signifikan.",                                    for: "Trader yang memahami price action" },
];

const RISKS = [
  { icon: ShieldCheck, title: "Stop Loss Otomatis",         desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
  { icon: Target,      title: "Stop Profit Otomatis",        desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
  { icon: TrendUp,     title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya. Langkah dan kelipatan Anda atur sendiri." },
  { icon: FloppyDisk,  title: "Pengaturan Tersimpan",        desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
  { icon: ClipboardText, title: "Riwayat Trading Lengkap",     desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale. Data lengkap untuk evaluasi strategi." },
];

const STEPS = [
  { n: "01", title: "Pilih platform Anda",          desc: "Download APK untuk Android, atau buka langsung di browser via web.stcautotrade.id — tanpa instal, siap di perangkat apapun termasuk PC, laptop, dan iPhone." },
  { n: "02", title: "Login dengan akun Stockity",   desc: "Masuk menggunakan email dan password akun Stockity.id yang sudah Anda miliki. Tidak perlu buat akun baru — di APK maupun versi web." },
  { n: "03", title: "Mulai dari mode demo",         desc: "Jangan terburu ke mode real. Gunakan demo minimal 7 hari untuk memahami strategi dan memvalidasi pengaturan Anda tanpa risiko finansial." },
  { n: "04", title: "Beralih ke mode real",         desc: "Setelah strategi teruji, mulai dengan nominal kecil. Tingkatkan bertahap seiring pertumbuhan kepercayaan diri Anda." },
];

const FAQS = [
  { q: "Apa itu STC AutoTrade / StcAutoTrade?",       a: "STC AutoTrade — juga dikenal sebagai StcAutoTrade, StockAutoTrade, Robot Stockity, atau Auto Stockity — adalah bot trading otomatis untuk platform Stockity.id. Tersedia sebagai APK Android maupun versi web di web.stcautotrade.id." },
  { q: "Apa bedanya versi APK Android dan versi web?", a: "Versi APK diinstal di perangkat Android dan bisa berjalan di background. Versi web (web.stcautotrade.id) bisa diakses langsung dari browser tanpa instal — cocok untuk PC, laptop, dan iPhone. Kedua versi memiliki fitur yang sama." },
  { q: "Bagaimana cara menggunakan versi web STC AutoTrade?", a: "Buka browser dan kunjungi web.stcautotrade.id. Login menggunakan akun Stockity.id. Tidak perlu unduh atau instalasi — langsung bisa digunakan di PC, Mac, iPhone, atau perangkat lainnya." },
  { q: "Apa bedanya STC AutoTrade, StcAutoTrade, dan StockAutoTrade?", a: "Ketiganya adalah nama yang merujuk produk yang sama. 'STC AutoTrade', 'Stc Auto Trade', 'StcAutoTrade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan brand yang sama." },
  { q: "Apakah Robot Stockity / Auto Stockity sama dengan STC AutoTrade?", a: "Ya. 'Robot Stockity', 'Auto Stockity', 'Stockity Auto Trade', dan 'Bot Stockity Otomatis' adalah sebutan populer untuk bot yang sama — STC AutoTrade (StockAutoTrade), tersedia via APK Android maupun versi web." },
  { q: "Bagaimana cara menginstal STC AutoTrade di Android?",   a: "Download file APK dari tombol di halaman ini. Aktifkan 'Instal dari sumber tidak dikenal' di Pengaturan → Keamanan. Buka file APK dan ikuti instruksi. Atau gunakan versi web di web.stcautotrade.id tanpa instalasi." },
  { q: "Apakah perlu pengalaman trading?",            a: "Tidak. STC AutoTrade dirancang agar bisa digunakan pemula sekalipun. Mode demo tersedia di versi APK maupun versi web untuk belajar tanpa risiko finansial." },
  { q: "Modal minimum yang disarankan?",              a: "Tidak ada ketentuan minimum, namun kami sarankan minimal Rp500.000 sebagai buffer aman untuk siklus martingale konservatif (nominal awal Rp14.000, multiplier 2,5x, 3 step)." },
  { q: "Tersedia untuk iOS (iPhone)?",                a: "Ya! Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade langsung melalui versi web di web.stcautotrade.id — buka di Safari atau Chrome tanpa instalasi. Versi APK hanya tersedia untuk Android." },
  { q: "Apakah data akun Stockity saya aman?",        a: "Password tidak disimpan di server manapun. Hanya token autentikasi yang tersimpan secara lokal dan terenkripsi di perangkat Anda — baik di APK maupun versi web." },
  { q: "Bot bisa jalan saat aplikasi ditutup?",       a: "Untuk APK Android: bot memerlukan aplikasi aktif di background. Untuk versi web: biarkan tab browser tetap terbuka. Hubungkan perangkat ke charger untuk performa optimal 24 jam." },
];

/* ── Motion constants ─────────────────────────────────────────── */

/**
 * Easing di-definisikan sekali sebagai konstanta agar tidak membuat
 * array baru setiap render (micro-optimization yang relevan karena
 * dipakai di banyak komponen).
 */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Motion variants ──────────────────────────────────────────── */

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

/* ── Reusable components ──────────────────────────────────────── */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerView({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Real phone mockup with portrait image inside */
function PhoneImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="relative mx-auto select-none" style={{ width: 280, height: 570 }}>
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-[40px] bg-[#3b82f6]/20 blur-3xl" />
      {/* Drop shadow */}
      <div className="absolute inset-0 rounded-[46px] shadow-2xl shadow-black/[0.14]" />
      {/* Chassis */}
      <div className="relative h-full rounded-[46px] border-[9px] border-[#1a1612]/[0.1] bg-[#0a0a0a] overflow-hidden">
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 h-8 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-5 bg-black/40 rounded-b-[10px] backdrop-blur-sm" />
        </div>
        {/* Screen Image */}
        <div className="absolute inset-[2px] rounded-[38px] overflow-hidden bg-[#0a0a0a]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="280px"
            priority
          />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center z-10 pointer-events-none">
          <div className="w-24 h-1 bg-white/30 rounded-full" />
        </div>
        {/* Side buttons */}
        <div className="absolute -right-[12px] top-28 w-[5px] h-12 bg-[#1a1612]/10 rounded-r-sm" />
        <div className="absolute -left-[12px] top-24 w-[5px] h-7 bg-[#1a1612]/10 rounded-l-sm" />
        <div className="absolute -left-[12px] top-36 w-[5px] h-11 bg-[#1a1612]/10 rounded-l-sm" />
      </div>
      {label && (
        <p className="text-center text-[11px] text-[#6b6058] mt-4 font-medium">{label}</p>
      )}
    </div>
  );
}

/** Accordion FAQ item */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(26,22,18,0.08)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
      >
        <span className="text-[15px] font-semibold text-[#1a1612]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-6 h-6 rounded-full border border-[rgba(26,22,18,0.18)] flex items-center justify-center flex-shrink-0 text-[#1a1612]/50 font-light text-lg leading-none"
        >
          <Plus weight="bold" size={14} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            id={`faq-answer-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] text-[#6b6058] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

const DownloadIcon = () => (
  <DownloadSimple weight="bold" size={18} />
);

/* Path APK di folder public — sesuaikan nama file dengan APK Anda */
const APK_PATH = "/StockAutoTrade.apk";

export default function Home() {
  return (
    <div className="bg-white text-[#1a1612] font-[family-name:var(--font-dm-sans)]">

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[rgba(26,22,18,0.08)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 no-underline group">
            <Image
              src="/logo.png"
              alt="STC AutoTrade Logo"
              width={28}
              height={28}
              className="rounded-[6px] shadow-sm"
            />
            <span className="text-sm font-semibold tracking-tight text-[#1a1612]">STC AutoTrade</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="#fitur" className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/45 hover:text-[#1a1612] transition-colors no-underline">
              Fitur
            </a>
            <a href="#cara-kerja" className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/45 hover:text-[#1a1612] transition-colors no-underline">
              Cara Kerja
            </a>
            <a href="https://web.stcautotrade.id" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 px-4 py-2 border border-[#3b82f6]/30 text-[#1d4ed8] text-sm font-semibold rounded-lg hover:bg-[#eff6ff] transition-all no-underline">
              <GlobeHemisphereWest weight="duotone" size={16} /> Versi Web
            </a>
            <a href={APK_PATH} download className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px no-underline shadow-sm">
              Download <DownloadIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[rgba(26,22,18,0.07)]">
        {/* Grid texture */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(26,22,18,0.027)_1px,transparent_1px),linear-gradient(90deg,rgba(26,22,18,0.027)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
        {/* Warm glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#3b82f6]/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#3b82f6]/[0.04] blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3b82f6]/25 text-[#1d4ed8] text-[11px] font-semibold tracking-widest uppercase mb-7"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse-dot" />
                STC AutoTrade · Android & Web · Stockity.id
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
                className="font-[family-name:var(--font-dm-serif)] text-[40px] sm:text-[52px] lg:text-[58px] font-normal tracking-[-0.03em] leading-[1.08] mb-5"
              >
                STC AutoTrade —<br />
                <span className="text-[#1d4ed8]">Robot Trading<br />Otomatis Stockity</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: EASE_OUT }}
                className="text-[#6b6058] text-base sm:text-[17px] leading-relaxed mb-8 max-w-lg"
              >
                <strong className="text-[#1a1612] font-semibold">STC AutoTrade</strong> (StcAutoTrade / StockAutoTrade) terhubung langsung ke akun Stockity.id Anda dan mengeksekusi strategi secara disiplin, konsisten, dan bebas bias emosional — 24 jam sehari.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT }}
                className="flex flex-col gap-3"
              >
                {/* Baris 1 — dua tombol utama */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-lg shadow-black/10">
                    <DownloadIcon /> Download Aplikasi Android
                  </a>
                  <a href="https://web.stcautotrade.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#3b82f6]/35 bg-[#eff6ff] text-[#1d4ed8] text-sm font-semibold rounded-xl hover:bg-[#dbeafe] transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline">
                    <GlobeHemisphereWest weight="duotone" size={16} /> Buka Versi Web
                  </a>
                </div>

                {/* Baris 2 — link teks */}
                <a href="#cara-kerja" className="inline-flex items-center gap-1.5 text-sm text-[#1a1612]/40 hover:text-[#1a1612] transition-colors no-underline group w-fit">
                  Pelajari Cara Kerja
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — Phone mockup with real image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: EASE_OUT }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneImage
                  src="/gambar1.jpeg"
                  alt="Tampilan aplikasi STC AutoTrade di ponsel Android"
                  label="Layar utama aplikasi StockAutoTrade"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[rgba(26,22,18,0.08)] border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden mt-14 max-w-2xl shadow-sm"
          >
            {[
              { n: "6",    l: "Mode Strategi" },
              { n: "2",    l: "Platform (APK & Web)" },
              { n: "24/7", l: "Bot Aktif" },
              { n: "4.9★", l: "Rating Pengguna" },
            ].map((s) => (
              <div key={s.l} className="py-5 px-4 bg-white text-center hover:bg-[#f0f7ff] transition-colors">
                <div className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1d4ed8] leading-none mb-1.5">
                  {s.n}
                </div>
                <div className="text-[11px] text-[#1a1612]/35 leading-tight">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEO BRAND RECOGNITION ─────────────────────── */}
      <section className="py-10 sm:py-12 bg-[#f0f7ff] border-b border-[rgba(26,22,18,0.07)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4 text-center">
              Dikenal Juga Sebagai
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                "STC AutoTrade",
                "StcAutoTrade",
                "Stc Auto Trade",
                "StockAutoTrade",
                "Stock Auto Trade",
                "Stockity Auto Trade",
                "Robot Stockity",
                "Auto Stockity",
                "Bot Stockity Otomatis",
                "Robot Trading Stockity",
              ].map((alias) => (
                <span
                  key={alias}
                  className="px-3.5 py-1.5 bg-white border border-[#3b82f6]/20 rounded-full text-[12px] font-medium text-[#1d4ed8] shadow-sm"
                >
                  {alias}
                </span>
              ))}
            </div>
            <p className="text-center text-[12px] text-[#6b6058] mt-4 max-w-xl mx-auto leading-relaxed">
              Semua nama di atas merujuk pada produk yang sama —{" "}
              <strong className="text-[#1a1612]">STC AutoTrade</strong> (stcautotrade.id),
              bot & robot trading otomatis untuk <strong className="text-[#1a1612]">Stockity.id</strong>.{" "}
              Tersedia sebagai APK Android dan versi web di{" "}
              <a href="https://web.stcautotrade.id" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] font-semibold no-underline hover:underline">web.stcautotrade.id</a>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PLATFORM ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[rgba(26,22,18,0.07)] bg-white" id="platform">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">Platform</p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
              Tersedia di Android & Semua Browser
            </h2>
            <p className="text-[14px] text-[#6b6058] mt-3 max-w-lg mx-auto leading-relaxed">
              Pilih cara yang paling nyaman untuk Anda — instal APK di Android atau langsung buka versi web tanpa instalasi apapun.
            </p>
          </FadeUp>
          <StaggerView className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* APK */}
            <motion.div variants={fadeItem} className="flex flex-col gap-4 p-6 bg-[#f8fafc] border border-[rgba(26,22,18,0.09)] rounded-2xl hover:border-[rgba(26,22,18,0.18)] hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a1612] flex items-center justify-center text-lg">📱</div>
                <div>
                  <p className="text-sm font-bold text-[#1a1612]">Aplikasi Android</p>
                  <p className="text-[11px] text-[#1a1612]/35 font-medium">stcautotrade.id · APK</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {["Berjalan di background 24 jam", "Notifikasi order real-time", "Performa optimal di Android 8.0+"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-[#6b6058]">
                    <Check weight="bold" size={13} className="text-[#1d4ed8] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={APK_PATH} download className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline shadow-sm">
                <DownloadIcon /> Download APK
              </a>
            </motion.div>
            {/* Web */}
            <motion.div variants={fadeItem} className="flex flex-col gap-4 p-6 bg-[#eff6ff] border border-[#3b82f6]/25 rounded-2xl hover:border-[#3b82f6]/45 hover:shadow-md hover:shadow-[#3b82f6]/[0.08] hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3b82f6] flex items-center justify-center">
                  <GlobeHemisphereWest weight="duotone" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1d4ed8]">Versi Web</p>
                  <p className="text-[11px] text-[#1d4ed8]/50 font-medium">web.stcautotrade.id</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {["Tanpa instal — langsung di browser", "Kompatibel PC, Mac, iPhone, iPad", "Fitur lengkap sama seperti APK"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-[#1e40af]">
                    <Check weight="bold" size={13} className="text-[#3b82f6] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://web.stcautotrade.id" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#3b82f6] text-white text-sm font-semibold rounded-xl hover:bg-[#2563eb] transition-all no-underline shadow-sm shadow-[#3b82f6]/25">
                <GlobeHemisphereWest weight="duotone" size={16} /> Buka Versi Web
              </a>
            </motion.div>
          </StaggerView>
        </div>
      </section>

      {/* ── MENGAPA StockAutoTrade ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              <FadeUp>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
                Mengapa STC AutoTrade?
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-5">
                Empat Hambatan Terbesar<br className="hidden sm:block" /> Trader Pemula
              </h2>
              <p className="text-[#6b6058] text-[15px] leading-relaxed mb-8">
                Sebagian besar trader baru tidak gagal karena kurang modal —
                mereka gagal karena masalah yang seharusnya bisa dicegah
                dengan alat yang tepat. <strong className="text-[#1a1612]">STC AutoTrade</strong> (Robot Stockity) hadir sebagai solusinya.
              </p>
              <a href={APK_PATH} download className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white text-sm font-semibold rounded-xl hover:bg-[#2563eb] transition-all hover:-translate-y-px no-underline shadow-md shadow-[#3b82f6]/25">
                <DownloadIcon /> Download Gratis Sekarang
              </a>
            </FadeUp>

            <StaggerView className="flex flex-col gap-3">
              {[
                { Icon: Eye, t: "Tidak bisa pantau pasar terus-menerus",  d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
                { Icon: Brain, t: "Keputusan dipengaruhi emosi",             d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
                { Icon: ChartBar, t: "Analisis teknikal terasa rumit",          d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
                { Icon: Warning, t: "Tidak ada disiplin manajemen modal",      d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
              ].map((item) => (
                <motion.div
                  key={item.t}
                  variants={fadeItem}
                  className="flex gap-4 p-4 bg-[#f8fafc] border border-[rgba(26,22,18,0.07)] rounded-xl hover:border-[rgba(26,22,18,0.14)] hover:bg-[#f0f7ff] transition-all"
                >
                  <item.Icon weight="duotone" size={24} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1.5 text-[#1a1612]">{item.t}</p>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerView>
          </div>
        </div>
      </section>

      {/* ── CARA KERJA ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)]" id="cara-kerja">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
              Cara Kerja
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-lg mx-auto leading-tight">
              Sederhana untuk Digunakan,<br />Kuat dalam Eksekusi
            </h2>
          </FadeUp>

          <StaggerView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(26,22,18,0.08)] border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden shadow-sm">
            {[
              { n: "01", t: "Pilih Mode Strategi", d: "Tentukan pendekatan trading — dari copy trading hingga AI signal atau indikator teknikal." },
              { n: "02", t: "Atur Parameter",       d: "Set nominal, martingale, stop loss, dan stop profit sesuai profil risiko dan target Anda." },
              { n: "03", t: "Jalankan Mode Demo",   d: "Uji strategi dengan saldo virtual menggunakan data pasar nyata. Tidak ada uang yang berisiko." },
              { n: "04", t: "Aktifkan Mode Real",   d: "Setelah strategi teruji, aktifkan mode real. Bot bekerja otomatis mengeksekusi order Anda." },
            ].map((step) => (
              <motion.div key={step.n} variants={fadeItem} className="p-6 sm:p-8 bg-white hover:bg-[#f0f7ff] transition-colors">
                <div className="font-[family-name:var(--font-dm-serif)] text-5xl text-[#1a1612]/[0.06] leading-none mb-6">
                  {step.n}
                </div>
                <h3 className="text-sm font-semibold mb-2.5 text-[#1a1612]">{step.t}</h3>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </StaggerView>
        </div>
      </section>

      {/* ── 6 MODE ──────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white" id="fitur">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
              Mode Strategi
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-sm leading-tight">
              6 Strategi.<br />Satu Platform.
            </h2>
          </FadeUp>

          <StaggerView className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MODES.map((m) => (
              <motion.article
                key={m.tag}
                variants={fadeItem}
                className="flex flex-col gap-3.5 p-5 bg-[#f8fafc] border border-[rgba(26,22,18,0.08)] rounded-xl hover:border-[rgba(26,22,18,0.16)] hover:bg-[#f0f7ff] hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/[0.04] transition-all"
              >
                <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${m.color}`}>
                  {m.tag}
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight text-[#1a1612]">{m.title}</h3>
                <p className="text-[13px] text-[#6b6058] leading-relaxed flex-1">{m.desc}</p>
                <p className="text-[12px] text-[#1a1612]/35 border-t border-[rgba(26,22,18,0.07)] pt-3 flex items-center gap-1.5">
                  <Check weight="bold" size={14} className="text-[#1d4ed8]" />
                  {m.for}
                </p>
              </motion.article>
            ))}
          </StaggerView>
        </div>
      </section>

      {/* ── MANAJEMEN RISIKO ─────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20 items-start">
            {/* Left: sticky phone mockup with portrait image */}
            <div className="lg:sticky lg:top-24 flex flex-col items-center">
              <FadeUp>
                <PhoneImage
                  src="/gambar2.jpeg"
                  alt="Layar manajemen risiko STC AutoTrade"
                  label="Pengaturan Stop Loss & Martingale"
                />
              </FadeUp>
            </div>

            <div>
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
                  Manajemen Risiko
                </p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-5">
                  Perlindungan Modal yang Bekerja Otomatis
                </h2>
                <p className="text-[#6b6058] text-[15px] leading-relaxed mb-6">
                  Fitur bawaan memastikan Anda tidak pernah kehilangan lebih dari
                  yang sudah direncanakan — bahkan saat tidak memantau layar sama sekali.
                </p>
                <div className="border-l-2 border-[#3b82f6]/60 pl-4 bg-[#3b82f6]/[0.04] py-3 pr-4 rounded-r-xl mb-8">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#1d4ed8] mb-2">Penting</p>
                  <p className="text-[13px] text-[#1e40af] leading-relaxed">
                    StockAutoTrade adalah alat bantu eksekusi strategi, bukan jaminan profit.
                    Hasil trading tetap dipengaruhi kondisi pasar yang tidak dapat diprediksi.
                  </p>
                </div>
              </FadeUp>

              <StaggerView className="flex flex-col gap-3">
                {RISKS.map((r) => (
                  <motion.div
                    key={r.title}
                    variants={fadeItem}
                    className="flex gap-4 p-5 bg-white border border-[rgba(26,22,18,0.08)] rounded-xl hover:border-[rgba(26,22,18,0.16)] hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all"
                  >
                    <r.icon weight="duotone" size={28} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1.5 text-[#1a1612]">{r.title}</p>
                      <p className="text-[13px] text-[#6b6058] leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerView>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO HIGHLIGHT ──────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden border border-[#3b82f6]/25 rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-white to-[#f0f9ff]">
            {/* Radial highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.06)_0%,transparent_65%)] pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1d4ed8]/60 mb-4">
                  Untuk Pemula
                </p>
                <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-dm-serif)] font-normal tracking-[-0.02em] leading-[1.1] mb-5">
                  Mulai dari Mode Demo.<br />Tanpa Risiko.
                </h2>
                <p className="text-[#6b6058] text-[15px] leading-relaxed max-w-lg mb-8">
                  Semua fitur berjalan penuh menggunakan saldo virtual dengan data pasar nyata.
                  Uji, evaluasi, dan hanya pindah ke mode real setelah benar-benar siap.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { t: "Order sungguhan, modal virtual",  s: "Data pasar nyata, saldo tidak berisiko" },
                    { t: "Uji semua 6 mode strategi",       s: "Temukan yang paling cocok untuk Anda" },
                    { t: "Riwayat untuk evaluasi",          s: "Analisis performa sebelum ke mode real" },
                  ].map((item) => (
                    <div key={item.t} className="bg-white/70 rounded-xl p-4 text-left border border-[rgba(26,22,18,0.08)]">
                      <p className="text-[13px] font-semibold text-[#1d4ed8] mb-1.5 flex items-center gap-1">
                        <Check weight="bold" size={14} /> {item.t}
                      </p>
                      <p className="text-[12px] text-[#6b6058]/70 leading-snug">{item.s}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={APK_PATH} download className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-bold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-0.5 no-underline shadow-lg shadow-black/12">
                    <DownloadIcon /> Download APK Android
                  </a>
                  <a href="https://web.stcautotrade.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#eff6ff] border border-[#3b82f6]/30 text-[#1d4ed8] text-sm font-bold rounded-xl hover:bg-[#dbeafe] transition-all hover:-translate-y-0.5 no-underline">
                    <GlobeHemisphereWest weight="duotone" size={16} /> Coba Versi Web
                  </a>
                </div>
              </FadeUp>

              {/* Right: portrait phone mockup */}
              <FadeUp delay={0.15} className="flex justify-center">
                <PhoneImage
                  src="/gambar3.jpeg"
                  alt="Tampilan mode demo STC AutoTrade"
                  label="Dashboard riwayat trading & statistik"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARA INSTALL ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)]" id="download">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">
              Cara Install
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-md mx-auto leading-tight">
              Cara Memulai STC AutoTrade
            </h2>
          </FadeUp>
          <div className="max-w-2xl mx-auto divide-y divide-[rgba(26,22,18,0.08)]">
            {STEPS.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.07}>
                <div className="flex gap-5 py-7 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 min-w-[40px] rounded-full border border-[rgba(26,22,18,0.12)] bg-white flex items-center justify-center text-[13px] font-semibold text-[#1a1612]/40 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-[15px] font-semibold mb-2 text-[#1a1612]">{s.title}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[rgba(26,22,18,0.07)] bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/30 mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
              Pertanyaan tentang STC AutoTrade
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <dl>
              {FAQS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-40 overflow-hidden bg-[#1a1612]">
        {/* Grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#3b82f6]/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6]/50 mb-6">
              Gratis · Android & Web · Mulai Sekarang
            </p>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-6xl font-normal tracking-[-0.03em] leading-[1.1] max-w-2xl mx-auto mb-6 text-[#e0f2fe]">
              Download STC AutoTrade — Mulai Trading Otomatis
            </h2>
            <p className="text-[#e0f2fe]/45 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
              Download <strong className="text-[#e0f2fe]/70">STC AutoTrade</strong> (StockAutoTrade) sekarang, atau buka langsung versi web — mulai dari mode demo tanpa risiko,
              dan rasakan perbedaan robot trading yang tereksekusi secara disiplin 24/7 di Stockity.id.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APK_PATH}
                download
                className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#3b82f6] text-white text-sm font-bold rounded-xl hover:bg-[#2563eb] transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-2xl shadow-[#3b82f6]/20"
              >
                <DownloadIcon /> Download APK Android
              </a>
              <a
                href="https://web.stcautotrade.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline"
              >
                <GlobeHemisphereWest weight="duotone" size={16} /> Buka Versi Web
              </a>
            </div>
            <p className="mt-5 text-[12px] text-[#e0f2fe]/25">
              APK Android 8.0+ · Versi Web semua perangkat · Gratis
            </p>
            <p className="mt-3 text-[11px] text-[#e0f2fe]/15">
              STC AutoTrade · StcAutoTrade · StockAutoTrade · Robot Stockity · Auto Stockity · Stockity Auto Trade
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-[rgba(26,22,18,0.09)] py-8 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <Image
                src="/logo.png"
                alt="STC AutoTrade Logo"
                width={24}
                height={24}
                className="rounded-[5px] shadow-sm"
              />
              <span className="text-sm font-medium text-[#1a1612]/60">STC AutoTrade</span>
            </div>
            <p className="text-[11px] text-[#1a1612]/25 leading-snug">
              StcAutoTrade · StockAutoTrade · Robot Stockity · web.stcautotrade.id · stcautotrade.id
            </p>
          </div>
          <p className="text-[12px] text-[#1a1612]/30 max-w-sm sm:text-right leading-relaxed">
            Trading mengandung risiko kerugian finansial. STC AutoTrade (StockAutoTrade) adalah alat bantu, bukan jaminan profit.
            Pastikan Anda memahami risiko sebelum bertransaksi.
          </p>
        </div>
      </footer>

    </div>
  );
}