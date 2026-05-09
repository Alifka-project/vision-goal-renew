"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useT, useI18n } from "@/i18n/I18nProvider";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type Props = {
  navItems: { label: string; href: string }[];
};

export function MobileMenu({ navItems }: Props) {
  const t = useT();
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-cream hover:text-gold-hi transition-colors duration-200"
      >
        <span className="sr-only">{open ? "Close" : "Menu"}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-navy-deep/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        aria-label={t.nav.primaryNav}
        aria-hidden={!open}
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-sm bg-navy-deep text-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] transform transition-transform duration-300 ease-editorial ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
          <span className="font-serif text-cream text-lg tracking-tight">
            Vision <span className="text-gold-hi">Goal</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-cream/85 hover:text-gold-hi transition-colors duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-cream text-2xl py-3 border-b border-cream/10 hover:text-gold-hi transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-cream/10">
          <p className="text-eyebrow uppercase text-gold-hi mb-4">Language</p>
          <ul className="grid grid-cols-2 gap-2">
            {locales.map((l: Locale) => {
              const active = l === locale;
              return (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale(l);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[0.78rem] uppercase tracking-[0.14em] border ${
                      active
                        ? "border-gold-hi/50 bg-cream/5 text-gold-hi"
                        : "border-cream/15 text-cream/85 hover:border-cream/30 hover:text-cream"
                    }`}
                  >
                    <span className="inline-block w-7 tabular">{localeLabels[l].short}</span>
                    <span className="text-cream/70">{localeLabels[l].long}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="px-6 py-6 border-t border-cream/10">
          <Button href="/apply" variant="on-dark" className="w-full justify-center">
            {t.nav.apply}
          </Button>
        </div>
      </aside>
    </>
  );
}
