"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-[rgba(26,22,18,0.07)] border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <dt>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#f9fafb] transition-colors cursor-pointer"
              aria-expanded={open === i}
            >
              <span className="text-[14px] font-medium text-[#1a1612] leading-snug">{item.q}</span>
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full border border-[rgba(26,22,18,0.12)] flex items-center justify-center text-[#1a1612]/40 transition-transform duration-200"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </dt>
          {open === i && (
            <dd className="px-6 pb-5 text-[13px] text-[#6b6058] leading-relaxed border-t border-[rgba(26,22,18,0.06)] pt-4 m-0">
              {item.a}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
