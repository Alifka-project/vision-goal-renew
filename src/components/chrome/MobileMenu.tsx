"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useT, useI18n } from "@/i18n/I18nProvider";
import { localeLabels, visibleLocales, hasLocaleChoice, type Locale } from "@/i18n/config";

type Props = {
  navItems: { label: string; href: string }[];
};

export function MobileMenu({ navItems }: Props) {
  const t = useT();
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Move focus into the drawer when it opens, and back to the menu button
  // when it closes (by button, backdrop, link or Escape), so keyboard users
  // are never left on an element that has just become inert.
  useEffect(() => {
    if (open) closeRef.current?.focus();
    else if (wasOpen.current) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

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
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2.5 text-cream hover:text-gold-hi transition-colors duration-200"
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

      {/* Drawer
          Closed, the drawer sits just off the right edge. Two things must
          not leak from there: its shadow (a 60px blur was spilling ~30px
          back into the page as a grey band down the right edge of every
          screen) and its links (they stayed focusable and readable by
          screen readers while invisible). The shadow is applied only when
          open, and the closed drawer is `invisible` + `inert`. Visibility is
          in the transition list so it flips to hidden only AFTER the slide
          out finishes, and to visible before the slide in starts. */}
      <aside
        id="mobile-menu"
        aria-label={t.nav.primaryNav}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-sm bg-navy-deep text-cream transform transition-[transform,visibility,box-shadow] duration-300 ease-editorial ${
          open
            ? "visible translate-x-0 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
            : "invisible translate-x-full shadow-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
          <span className="font-serif text-cream text-lg tracking-tight">
            Vision <span className="text-gold-hi">Goal</span>
          </span>
          <button
            ref={closeRef}
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

        {hasLocaleChoice ? (
        <div className="px-6 py-6 border-t border-cream/10">
          <p className="text-eyebrow uppercase text-gold-hi mb-4">Language</p>
          <ul className="grid grid-cols-2 gap-2">
            {visibleLocales.map((l: Locale) => {
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
        ) : null}

        <div className="px-6 py-6 border-t border-cream/10">
          <Button href="/contact" variant="on-dark" className="w-full justify-center">
            {t.cta.expressInterest}
          </Button>
        </div>
      </aside>
    </>
  );
}
