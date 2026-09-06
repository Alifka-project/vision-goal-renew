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

  // Simplified pre-launch navigation:
  // Home | What We Do | Experiences | Insights | About | Contact
  // Hosts (/hosts) and Alumni-turned-Network (/alumni) routes still exist
  // but are dropped from top-level nav until named contributors and
  // real alumni voices are confirmed. Private Office lives under About
  // rather than as a top-level item.
  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.whatWeDo, href: "/what-we-do" },
    { label: t.nav.experiences, href: "/experiences" },
    { label: t.nav.insights, href: "/insights" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
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
            href="/contact"
            variant="on-dark"
            className="hidden lg:inline-flex"
          >
            {t.cta.discussExperience}
          </Button>
          {/* Hamburger + drawer (below lg) */}
          <MobileMenu navItems={nav} />
        </div>
      </div>
    </header>
  );
}
