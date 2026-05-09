"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/I18nProvider";
import { LangSwitcher } from "@/components/chrome/LangSwitcher";
import { MobileMenu } from "@/components/chrome/MobileMenu";

export function Header(_props: { variant?: "transparent" | "solid" } = {}) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.programmes, href: "/programmes" },
    { label: t.nav.privateOffice, href: "/private-office" },
    { label: t.nav.hosts, href: "/hosts" },
    { label: t.nav.alumni, href: "/alumni" },
    { label: t.nav.insights, href: "/insights" },
    { label: t.nav.about, href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-30 bg-navy-deep transition-shadow duration-300 ease-editorial ${
        scrolled
          ? "shadow-[0_10px_30px_-20px_rgba(6,20,58,0.55)] border-b border-cream/10"
          : "border-b border-cream/5"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          aria-label="Vision Goal — home"
          className="font-serif text-cream text-lg md:text-xl tracking-tight"
        >
          Vision <span className="text-gold-hi">Goal</span>
        </Link>

        {/* Inline nav appears at lg+. Below lg the hamburger drawer covers it. */}
        <nav
          aria-label={t.nav.primaryNav}
          className="hidden lg:flex items-center gap-7 xl:gap-9"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm whitespace-nowrap text-cream/85 hover:text-cream transition-colors duration-200 link-underline link-underline-out"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <LangSwitcher />
          <Button
            href="/apply"
            variant="on-dark"
            className="hidden lg:inline-flex"
          >
            {t.nav.apply}
          </Button>
          {/* Hamburger + drawer (below lg) */}
          <MobileMenu navItems={nav} />
        </div>
      </div>
    </header>
  );
}
