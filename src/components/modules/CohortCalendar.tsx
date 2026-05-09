"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusPill } from "@/components/ui/StatusPill";
import { Reveal } from "@/components/effects/Reveal";
import { upcomingCohorts } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export function CohortCalendar() {
  const t = useT();
  return (
    <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
      <div className="container">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14" duration={800}>
          <div>
            <Eyebrow>{t.cohorts.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {t.cohorts.headline}<span className="text-gold italic"> {t.cohorts.headlineGold}</span>
            </h2>
          </div>
          <Link
            href="/programmes"
            className="self-start lg:self-end inline-flex items-center gap-3 text-sm text-navy font-medium"
          >
            <span className="link-underline link-underline-out">{t.cta.allProgrammes}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ul className="border hairline divide-y divide-hairline">
          {upcomingCohorts.map((c, i) => {
            const meta = t.programmeMeta[c.programmeId];
            return (
              <Reveal as="li" key={i} duration={700} delay={i * 80}>
                <Link
                  href="/apply"
                  className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-6 items-center px-6 py-7 lg:px-10 lg:py-8 group hover:bg-cream-2 transition-colors duration-300"
                >
                  <div className="md:col-span-1 text-eyebrow uppercase text-gold tabular">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-3 font-serif text-navy text-lg lg:text-xl leading-snug">
                    <time className="tabular">{c.startLabel}</time>
                  </div>
                  <div className="md:col-span-4 text-body lg:text-body-lg text-ink">
                    {meta.name}
                  </div>
                  <div className="md:col-span-2 text-body-sm text-slate">
                    {meta.city} · {c.language}
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                    <span className="text-body-sm text-slate-2 hidden lg:inline">{c.seatsLine}</span>
                    <StatusPill status={c.status} />
                    <span
                      aria-hidden="true"
                      className="text-gold transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
