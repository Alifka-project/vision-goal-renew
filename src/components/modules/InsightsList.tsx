"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { featuredInsights } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

export function InsightsList() {
  const t = useT();
  const items = featuredInsights.slice(0, 3);

  return (
    <section className="bg-white py-section-y md:py-section-y-lg">
      <div className="container">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14" duration={800}>
          <div>
            <Eyebrow>{t.insights.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
              {t.insights.practitionerNotes}
            </h2>
          </div>
          <Link href="/insights" className="self-start lg:self-end inline-flex items-center gap-3 text-sm text-navy font-medium">
            <span className="link-underline link-underline-out">{t.cta.allInsights}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((insight, i) => (
            <Reveal as="li" key={insight.href} duration={800} delay={i * 120}>
              <Link href={insight.href} className="group flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={images[insight.imageKey]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-500 ease-editorial opacity-30 group-hover:opacity-10"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(6,20,58,0.0) 50%, rgba(6,20,58,0.35) 100%)",
                    }}
                  />
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-eyebrow uppercase text-cream">
                    <span>{insight.category}</span>
                    <span className="tabular text-cream/85">{insight.readingTime}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-serif text-xl lg:text-[1.5rem] text-navy leading-[1.2]">
                    {insight.title}
                  </h3>
                  <div className="mt-5 pt-5 border-t hairline flex items-center justify-between">
                    <p className="text-[0.78rem] uppercase tracking-[0.14em] text-slate-2">
                      {insight.authorName}
                    </p>
                    <span
                      aria-hidden="true"
                      className="text-gold transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
