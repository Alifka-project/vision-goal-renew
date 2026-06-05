"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

// Pre-launch posture: the marquee of named host cards has been retired
// until per-programme contributors are confirmed and have approved being
// listed publicly. This module is now a statement-only block so the
// homepage does not imply a faculty that isn't yet agreed.
export function HostsStrip() {
  const t = useT();
  return (
    <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
      <div className="container">
        <Reveal duration={800}>
          <Eyebrow>{t.hostsStrip.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[22ch]">
            {t.hostsStrip.headline}{" "}
            <span className="text-gold italic">{t.hostsStrip.headlineGold}</span>
          </h2>
        </Reveal>

        <Reveal duration={800} delay={120}>
          <p className="mt-10 max-w-prose text-body-lg text-slate">
            {t.pages.hosts.lede}
          </p>
        </Reveal>

        <Reveal duration={700} delay={200}>
          <Link
            href="/hosts"
            className="mt-10 inline-flex items-center gap-3 text-sm text-navy font-medium"
          >
            <span className="link-underline link-underline-out">{t.hostsStrip.cta}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
