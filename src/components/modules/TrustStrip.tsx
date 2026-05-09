"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function TrustStrip() {
  const t = useT();
  return (
    <section className="bg-white border-b hairline">
      <div className="container py-12 md:py-16">
        <Reveal duration={700}>
          <Eyebrow>{t.trust.eyebrow}</Eyebrow>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {t.trust.stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} duration={700} delay={i * 80}>
              <p className="font-serif text-navy text-4xl lg:text-5xl tabular leading-none">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2 leading-relaxed">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
