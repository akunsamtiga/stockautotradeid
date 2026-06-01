"use client";

/**
 * components/AnimatedSections.tsx
 *
 * PERBAIKAN KRITIS #1 + #2:
 * Semua logika animasi (framer-motion, useState, useRef) diisolasi di sini.
 * page.tsx menjadi Server Component murni — konten langsung ada di HTML saat
 * Googlebot crawl, tanpa menunggu JavaScript bundle.
 *
 * Strategi:
 * - Komponen ini di-lazy-load di page.tsx dengan next/dynamic + ssr:false
 *   sehingga framer-motion TIDAK masuk ke bundle SSR / HTML awal.
 * - Konten semantik (h1, h2, p, teks FAQ) sudah ada di Server Component
 *   sebagai fallback, lalu komponen ini "mengambil alih" untuk animasi.
 */

import dynamic from "next/dynamic";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
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
  Check,
  Plus,
  GlobeHemisphereWest,
  DownloadSimple,
} from "@phosphor-icons/react";

/* ── Motion constants ──────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

/* ── Reusable animated wrappers ────────────────────────────────── */

export function FadeUp({
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

export function StaggerView({
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

export function FadeItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Hero animated elements ────────────────────────────────────── */

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3b82f6]/25 text-[#1d4ed8] text-[11px] font-semibold tracking-widest uppercase mb-7"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse-dot" />
      STC AutoTrade · Android &amp; Web · Stockity.id
    </motion.div>
  );
}

export function HeroHeading({ apkPath }: { apkPath: string }) {
  return (
    <>
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
        <strong className="text-[#1a1612] font-semibold">STC AutoTrade</strong>{" "}
        (StcAutoTrade / StockAutoTrade) terhubung langsung ke akun Stockity.id Anda dan
        mengeksekusi strategi secara otomatis, konsisten, dan bebas bias emosional — 24 jam non-stop.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={apkPath}
            download
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-lg shadow-black/10"
          >
            <DownloadSimple weight="bold" size={18} /> Download Aplikasi Android
          </a>
          <a
            href="https://stcautotradepro.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-[#3b82f6]/35 bg-[#eff6ff] text-[#1d4ed8] text-sm font-semibold rounded-xl hover:bg-[#dbeafe] transition-all hover:-translate-y-0.5 active:translate-y-0 no-underline"
          >
            <GlobeHemisphereWest weight="duotone" size={16} /> Buka Versi Web
          </a>
        </div>
        <a
          href="#cara-kerja"
          className="inline-flex items-center gap-1.5 text-sm text-[#1a1612]/40 hover:text-[#1a1612] transition-colors no-underline group w-fit"
        >
          Pelajari Cara Kerja
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </a>
      </motion.div>
    </>
  );
}

export function HeroPhoneFloat({ children }: { children: React.ReactNode }) {
  /**
   * @deprecated Tidak lagi dipakai di page.tsx sejak perbaikan LCP.
   * page.tsx kini menggunakan CSS `.animate-float` & `.animate-fade-up`
   * langsung pada div pembungkus PhoneImage, sehingga PhoneImage tetap
   * di-render sebagai Server Component dan preload gambar LCP berfungsi.
   *
   * Ekspor ini dipertahankan untuk kompatibilitas mundur jika ada halaman
   * lain yang masih mengimpornya. Hapus setelah semua halaman dimigrasi.
   */
  return (
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
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroStatBar() {
  const stats = [
    { n: "6",    l: "Mode Strategi" },
    { n: "2",    l: "Platform (APK & Web)" },
    { n: "24/7", l: "Bot Aktif" },
    { n: "4.9★", l: "Rating Pengguna" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.45 }}
      className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[rgba(26,22,18,0.08)] border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden mt-14 max-w-2xl shadow-sm"
    >
      {stats.map((s) => (
        <div key={s.l} className="py-5 px-4 bg-white text-center hover:bg-[#f0f7ff] transition-colors">
          <div className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1d4ed8] leading-none mb-1.5">
            {s.n}
          </div>
          <div className="text-[11px] text-[#1a1612]/35 leading-tight">{s.l}</div>
        </div>
      ))}
    </motion.div>
  );
}

/* ── FAQ accordion item (butuh useState + framer) ──────────────── */

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;
  return (
    <div className="border-b border-[rgba(26,22,18,0.08)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
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
            id={id}
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

/* ── "Hambatan Trader" section cards ───────────────────────────── */

const HAMBATAN = [
  { Icon: Eye,      t: "Tidak bisa pantau pasar terus-menerus", d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
  { Icon: Brain,    t: "Keputusan dipengaruhi emosi",            d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
  { Icon: ChartBar, t: "Analisis teknikal terasa rumit",         d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
  { Icon: Warning,  t: "Tidak ada disiplin manajemen modal",     d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
];

export function HambatanSection({ apkPath }: { apkPath: string }) {
  return (
    <StaggerView className="flex flex-col gap-3">
      {HAMBATAN.map((item) => (
        <FadeItem key={item.t}>
          <div className="flex gap-4 p-5 bg-[#f8fafc] border border-[rgba(26,22,18,0.08)] rounded-xl hover:border-[rgba(26,22,18,0.16)] hover:bg-[#f0f7ff] hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/[0.04] transition-all">
            <item.Icon weight="duotone" size={28} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[15px] font-semibold mb-1.5 text-[#1a1612]">{item.t}</p>
              <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.d}</p>
            </div>
          </div>
        </FadeItem>
      ))}
    </StaggerView>
  );
}

/* ── Risk management cards ─────────────────────────────────────── */

const RISKS = [
  { icon: ShieldCheck,   title: "Stop Loss Otomatis",         desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
  { icon: Target,        title: "Stop Profit Otomatis",        desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
  { icon: TrendUp,       title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya. Langkah dan kelipatan Anda atur sendiri." },
  { icon: FloppyDisk,    title: "Pengaturan Tersimpan",        desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
  { icon: ClipboardText, title: "Riwayat Trading Lengkap",     desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale. Data lengkap untuk evaluasi strategi." },
];

export function RiskCards() {
  return (
    <StaggerView className="flex flex-col gap-3">
      {RISKS.map((r) => (
        <FadeItem key={r.title}>
          <div className="flex gap-4 p-5 bg-white border border-[rgba(26,22,18,0.08)] rounded-xl hover:border-[rgba(26,22,18,0.16)] hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all">
            <r.icon weight="duotone" size={28} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold mb-1.5 text-[#1a1612]">{r.title}</p>
              <p className="text-[13px] text-[#6b6058] leading-relaxed">{r.desc}</p>
            </div>
          </div>
        </FadeItem>
      ))}
    </StaggerView>
  );
}