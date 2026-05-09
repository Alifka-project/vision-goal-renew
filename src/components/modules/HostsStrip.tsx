"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/effects/Marquee";
import { Reveal } from "@/components/effects/Reveal";
import { hosts } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export function HostsStrip() {
  const t = useT();
  return (
    <section className="bg-white py-section-y md:py-section-y-lg border-t hairline overflow-hidden">
      <div className="container">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14" duration={800}>
          <div>
            <Eyebrow>{t.hostsStrip.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {t.hostsStrip.headline} <span className="text-gold italic">{t.hostsStrip.headlineGold}</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <Marquee speed={75} className="py-6">
        {hosts.map((host) => (
          <Link
            key={host.name}
            href={`/hosts/${host.slug}`}
            className="group flex items-center gap-5 mx-4 px-6 py-5 border hairline bg-white card-lift hover:border-gold/40"
          >
            <div className="shrink-0 w-16 h-16 bg-navy text-cream flex items-center justify-center font-serif text-xl tracking-wide">
              {host.initials}
            </div>
            <div className="min-w-[14rem]">
              <p className="font-serif text-navy text-base leading-tight whitespace-nowrap">{host.name}</p>
              <p className="mt-1 text-[0.78rem] text-slate-2 leading-snug whitespace-nowrap">{host.role}</p>
              <div className="mt-2 flex gap-2 text-[0.7rem] text-gold">
                {host.expertise.slice(0, 2).map((tag) => (
                  <span key={tag} className="uppercase tracking-[0.12em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </Marquee>

      <div className="container mt-12">
        <Link
          href="/hosts"
          className="inline-flex items-center gap-3 text-sm text-navy font-medium"
        >
          <span className="link-underline link-underline-out">{t.hostsStrip.cta}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
