"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function PlatformPosture() {
  const t = useT();
  const pillars = t.posture.pillars.map((p, i) => ({
    n: `0${i + 1}`,
    label: p.label,
    line: p.line,
  }));

  return (
    <section className="bg-white py-section-y border-b hairline">
      <div className="container">
        <Reveal duration={800}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <Eyebrow>{t.posture.eyebrow}</Eyebrow>
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-2">{t.posture.sub}</p>
          </div>
        </Reveal>

        <ul className="grid md:grid-cols-3 border hairline divide-y md:divide-y-0 md:divide-x divide-hairline">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.n} duration={700} delay={i * 100}>
              <div className="px-7 py-8 lg:px-10 lg:py-10 grid grid-cols-[3rem_1fr] gap-5 items-start">
                <span className="font-serif text-gold text-3xl tabular leading-none pt-1">{p.n}</span>
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl text-navy leading-tight">{p.label}.</h3>
                  <p className="mt-2 text-body-sm text-slate-2 uppercase tracking-[0.14em]">{p.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
