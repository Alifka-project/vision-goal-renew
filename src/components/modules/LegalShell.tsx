"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  active: string;
  children: ReactNode;
};

export function LegalShell({ eyebrow, title, lastUpdated, active, children }: Props) {
  const t = useT();
  const legalLinks = [
    { label: t.footer.legalImprint, href: "/legal/imprint" },
    { label: t.footer.legalPrivacy, href: "/legal/privacy" },
    { label: t.footer.legalCookies, href: "/legal/cookies" },
    { label: t.footer.legalApplicationTerms, href: "/legal/application-terms" },
  ];

  return (
    <>
      <section className="bg-cream-2 border-b hairline">
        <div className="container py-section-y">
          <Reveal duration={800}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {title}
            </h1>
            <p className="mt-6 text-[0.78rem] uppercase tracking-[0.16em] text-slate-2">
              {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-section-y md:py-section-y-lg">
        <div className="container grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <h2 className="text-eyebrow uppercase text-slate-2">{t.pages.legalSidebar}</h2>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-body-sm transition-colors duration-200 ${
                      active === l.href ? "text-navy font-medium" : "text-slate hover:text-navy"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <article className="lg:col-span-9 max-w-3xl text-body text-ink leading-[1.75] grid gap-5">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
