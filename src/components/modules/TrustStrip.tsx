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
              {/* Sentence case, not tiny letter-spaced capitals: these labels
                  are real content (a degree, a qualification), and small caps
                  with wide tracking made them hard to read. */}
              <p className="mt-3 text-body-sm text-slate leading-snug max-w-[26ch]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
