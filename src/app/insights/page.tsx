"use client";

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

const categories = [
  "All",
  "Swiss Access",
  "Private Banking",
  "Markets",
  "Methodology",
  "Dispatches",
] as const;

export default function InsightsIndexPage() {
  const t = useT();
  const [featured, ...rest] = featuredInsights;

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
            <Reveal duration={800}>
              <Link
                href={featured.href}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="relative lg:col-span-7 aspect-[16/10] overflow-hidden bg-navy">
                  <Image
                    src={images[featured.imageKey]}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(6,20,58,0) 50%, rgba(6,20,58,0.4) 100%)",
                    }}
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
                  <div className="mt-8 flex items-center justify-between text-[0.78rem] uppercase tracking-[0.14em] text-slate-2 max-w-sm">
                    <span>{featured.authorName}</span>
                    <span className="tabular">{featured.readingTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream-2 py-10 border-y hairline">
          <div className="container">
            <ul className="flex flex-wrap gap-2 sm:gap-3" aria-label="Categories">
              {categories.map((c, i) => (
                <li key={c}>
                  <button
                    type="button"
                    className={`text-[0.78rem] uppercase tracking-[0.14em] px-4 py-2 border transition-colors duration-200 ${
                      i === 0
                        ? "bg-navy text-cream border-navy"
                        : "bg-white text-slate hairline hover:border-gold/40 hover:text-navy"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {rest.map((insight, i) => (
                <Reveal as="li" key={insight.slug} duration={800} delay={i * 80}>
                  <Link href={insight.href} className="group flex flex-col h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                      <Image
                        src={images[insight.imageKey]}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
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
                      <p className="mt-3 text-body-sm text-slate max-w-prose">{insight.excerpt}</p>
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

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.enrich.insightsCategoriesEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.insightsCategoriesHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
        <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Published research</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                Twelve peer-reviewed papers.
              </h2>
              <p className="mt-6 max-w-prose text-body text-slate-2">
                Selected work by the founding curator across banking, sustainable finance, ESG, AI in
                financial services, and cross-border life insurance — hosted on Academia.edu.
              </p>
            </Reveal>
            <ul className="mt-12 max-w-5xl border-t hairline">
              {publications.map((pub, i) => (
                <Reveal as="li" key={pub.href} duration={500} delay={i * 30}>
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-x-6 items-baseline py-5 border-b hairline px-2 -mx-2 hover:bg-cream-2 transition-colors duration-200"
                  >
                    <span className="md:col-span-1 text-eyebrow uppercase text-gold tabular">
                      {pub.year}
                    </span>
                    <span className="md:col-span-7 font-serif text-navy text-lg leading-snug group-hover:text-gold transition-colors duration-200">
                      {pub.title}
                    </span>
                    <span className="md:col-span-3 text-body-sm text-slate-2 leading-snug">
                      {pub.journal}
                    </span>
                    <span
                      aria-hidden="true"
                      className="md:col-span-1 md:text-right text-gold transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <DispatchSignup />
      </main>
      <Footer />
    </>
  );
}
