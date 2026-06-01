/**
 * components/PhoneImage.tsx
 *
 * PERBAIKAN KRITIS #3:
 * Komponen ini adalah Server Component — tidak ada "use client".
 * Ini memungkinkan Next.js melakukan preload otomatis via priority prop
 * dan menghasilkan HTML yang mengandung <img> dengan tag yang benar
 * sejak server render pertama.
 *
 * Perubahan dari versi lama:
 * - Dihapus dari page.tsx (yang tadinya "use client")
 * - Menjadi Server Component terpisah
 * - `priority` selalu diaktifkan untuk gambar hero (LCP element)
 * - `alt` wajib diisi dan harus deskriptif (tidak boleh kosong)
 * - `sizes` dioptimalkan: phone mockup selalu 280px wide
 */

import Image from "next/image";

interface PhoneImageProps {
  src: string;
  /**
   * WAJIB diisi dengan teks deskriptif.
   * Contoh benar:   "Tampilan layar utama STC AutoTrade menampilkan mode AI Signal"
   * Contoh salah:   "" atau "image" atau "screenshot"
   */
  alt: string;
  label?: string;
  /**
   * Aktifkan untuk gambar yang tampak di viewport saat halaman pertama dimuat
   * (hero section). Ini mem-preload gambar dan meningkatkan LCP score.
   * Default: false — aktifkan secara eksplisit hanya untuk gambar hero.
   */
  priority?: boolean;
}

export default function PhoneImage({ src, alt, label, priority = false }: PhoneImageProps) {
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
        {/* Screen Image — PERBAIKAN: priority + alt deskriptif */}
        <div className="absolute inset-[2px] rounded-[38px] overflow-hidden bg-[#0a0a0a]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="280px"
            priority={priority}
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