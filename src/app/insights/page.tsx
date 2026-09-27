"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { DispatchSignup } from "@/components/modules/DispatchSignup";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { featuredInsights, publications } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

export default function InsightsIndexPage() {
  const t = useT();
  const [featured, ...rest] = featuredInsights;
  // On phones the twelve-paper list ran to ~2,000px, so it shows the first
  // six there until the reader asks for the rest. Desktop always shows all.
  const [showAllPapers, setShowAllPapers] = useState(false);

  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.insightsIndex.eyebrow}
          title={
            <>
              {t.pages.insightsIndex.titlePart1}{" "}
              <span className="text-gold italic">{t.pages.insightsIndex.titleGold}</span>
            </>
          }
          lede={t.pages.insightsIndex.lede}
        />

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <div className="fade-in-soft">
              <Link
                href={featured.href}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="relative lg:col-span-7 aspect-[16/10] overflow-hidden bg-navy">
                  <Image
                    src={images[featured.imageKey]}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div className="lg:col-span-5">
                  <p className="text-eyebrow uppercase text-gold">
                    {t.insights.featuredLabel} · {featured.category}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl lg:text-[2.5rem] text-navy leading-[1.15] tracking-[-0.015em]">
                    {featured.title}
                  </h2>
                  <p className="mt-6 text-body text-slate max-w-prose">{featured.excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-3 text-sm text-navy font-medium">
                    <span className="link-underline link-underline-out">Read the note</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Five cards: two wide, then three, so the grid closes without
                an empty slot. Category and reading time sit under each
                photo, never on it. */}
            <ul className="mt-14 lg:mt-16 pt-14 lg:pt-16 border-t hairline grid md:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 lg:gap-x-8">
              {rest.map((insight, i) => (
                <Reveal
                  as="li"
                  key={insight.slug}
                  duration={800}
                  delay={i * 80}
                  className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                >
                  <Link href={insight.href} className="group flex flex-col h-full">
                    <div className={`relative ${i < 2 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden bg-navy`}>
                      <Image
                        src={images[insight.imageKey]}
                        alt=""
                        fill
                        sizes={i < 2 ? "(max-width: 768px) calc(100vw - 3rem), 50vw" : "(max-width: 768px) calc(100vw - 3rem), 33vw"}
                        className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="pt-6 flex flex-1 flex-col">
                      <p className="text-eyebrow uppercase text-gold">{insight.category}</p>
                      <h3 className="mt-3 font-serif text-xl lg:text-[1.5rem] text-navy leading-[1.2]">
                        {insight.title}
                      </h3>
                      <p className="mt-3 text-body-sm text-slate max-w-prose">{insight.excerpt}</p>
                      <div className="mt-auto pt-6">
                        <div className="pt-5 border-t hairline flex items-center justify-between">
                          <p className="text-[0.78rem] uppercase tracking-[0.14em] text-slate-2 tabular">
                            {insight.readingTime}
                          </p>
                          <span
                            aria-hidden="true"
                            className="text-gold transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.enrich.insightsCategoriesEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.insightsCategoriesHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {t.enrich.insightsCategoriesItems.map((cat, i) => (
                <Reveal as="li" key={cat.name} duration={700} delay={i * 60}>
                  <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy leading-tight">{cat.name}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{cat.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Published research — peer-reviewed papers ported from visiongoal.ch */}
        <section id="research" className="scroll-mt-28 bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Published research</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                Twelve <span className="whitespace-nowrap">peer-reviewed</span> papers.
              </h2>
              <p className="mt-6 max-w-prose text-body text-slate-2">
                Selected work by the founding curator across banking, sustainable finance, ESG, AI in
                financial services, and cross-border life insurance — hosted on Academia.edu.
              </p>
            </Reveal>
            <ul className="mt-12 max-w-5xl border-t hairline">
              {publications.map((pub, i) => (
                <Reveal
                  as="li"
                  key={pub.href}
                  duration={500}
                  delay={i * 30}
                  className={i >= 6 && !showAllPapers ? "hidden md:block" : undefined}
                >
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-x-6 items-baseline py-5 border-b hairline md:px-2 md:-mx-2 hover:bg-cream-2 transition-colors duration-200"
                  >
                    <span className="md:col-span-1 text-eyebrow uppercase text-gold tabular">
                      {pub.year}
                    </span>
                    <span className="md:col-span-7 font-serif text-navy text-lg leading-snug group-hover:text-gold transition-colors duration-200">
                      {pub.title}
                      <span aria-hidden="true" className="ml-2 inline-block text-gold">
                        ↗
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <span className="md:col-span-4 text-body-sm text-slate-2 leading-snug">
                      {pub.journal}
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
            {!showAllPapers && publications.length > 6 ? (
              <button
                type="button"
                onClick={() => setShowAllPapers(true)}
                className="md:hidden mt-6 inline-flex items-center gap-3 py-2 text-sm text-navy font-medium"
              >
                <span className="link-underline link-underline-out">
                  Show all {publications.length} papers
                </span>
                <span aria-hidden="true">↓</span>
              </button>
            ) : null}
          </div>
        </section>

        <DispatchSignup />
      </main>
      <Footer />
    </>
  );
}
