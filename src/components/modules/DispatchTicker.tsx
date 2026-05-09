"use client";

import { Marquee } from "@/components/effects/Marquee";
import { useT } from "@/i18n/I18nProvider";

export function DispatchTicker() {
  const t = useT();
  return (
    <div className="relative z-10 border-y border-cream/10 bg-navy/40 backdrop-blur-sm">
      <div className="flex items-center">
        <span className="hidden sm:flex shrink-0 items-center gap-2 px-5 py-2.5 border-r border-cream/10 text-[0.7rem] uppercase tracking-[0.18em] text-gold-hi font-semibold">
          <span className="pulse-dot" aria-hidden="true" />
          {t.dispatch.label}
        </span>
        <Marquee speed={70} className="flex-1 py-2.5 text-[0.78rem] tracking-[0.06em] text-cream/80">
          {t.dispatch.items.map((item, i) => (
            <span key={i} className="px-8 whitespace-nowrap">
              <span className="text-gold-hi mr-3">●</span>
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
