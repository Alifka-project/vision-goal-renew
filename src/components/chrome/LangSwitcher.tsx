"use client";

import { useEffect, useRef, useState } from "react";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

export function LangSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="hidden lg:inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-cream/85 hover:text-cream transition-colors duration-200"
      >
        <span>{localeLabels[locale].short}</span>
        <span aria-hidden="true" className="text-cream/40">·</span>
        <span className="text-cream/55">{localeLabels[locale].long}</span>
        <span
          aria-hidden="true"
          className={`ml-1 inline-block transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 mt-3 min-w-[10rem] bg-navy-deep border border-cream/15 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] z-40"
        >
          {locales.map((l: Locale) => {
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[0.78rem] uppercase tracking-[0.14em] transition-colors duration-150 ${
                    active
                      ? "bg-cream/5 text-gold-hi"
                      : "text-cream/85 hover:bg-cream/5 hover:text-cream"
                  }`}
                >
                  <span className="inline-block w-7 tabular">{localeLabels[l].short}</span>
                  <span className="text-cream/60">{localeLabels[l].long}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
