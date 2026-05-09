"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { featuredInsights, hosts, type Insight } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

export function InsightPageClient({ slug }: { slug: Insight["slug"] }) {
  const t = useT();
  const insight = featuredInsights.find((i) => i.slug === slug)!;
  const author = insight.authorSlug ? hosts.find((h) => h.slug === insight.authorSlug) : null;
  const related = featuredInsights
    .filter((i) => i.slug !== insight.slug && i.category === insight.category)
    .slice(0, 3);
  const moreFromAuthor = author
    ? featuredInsights.filter((i) => i.slug !== insight.slug && i.authorSlug === author.slug)
    : [];

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg max-w-3xl">
            <p className="text-eyebrow uppercase text-gold">{insight.category}</p>
            <h1 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.75rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {insight.title}
            </h1>
            {insight.excerpt ? (
              <p className="mt-8 text-body-lg text-slate max-w-prose">{insight.excerpt}</p>
            ) : null}
            <div className="mt-10 pt-6 border-t hairline flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2">
              <span>{insight.authorName}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular">{insight.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container py-12 lg:py-16 max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden bg-navy">
              <Image
                src={images[insight.imageKey]}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white pb-section-y md:pb-section-y-lg">
          <div className="container max-w-2xl">
            <article className="grid gap-7 text-body-lg text-ink leading-[1.7]">
              {insight.body.map((p, i) => (
                <p key={i} className={i === 0 ? "dropcap" : ""}>
                  {p}
                </p>
              ))}
            </article>

            {author ? (
              <div className="mt-16 pt-10 border-t hairline">
                <Eyebrow>About the author</Eyebrow>
                <Link
                  href={`/hosts/${author.slug}`}
                  className="card-lift mt-6 flex items-start gap-5 p-6 border hairline bg-cream-2 hover:border-gold/40"
                >
                  <div className="shrink-0 w-16 h-16 bg-navy text-cream flex items-center justify-center font-serif text-xl tracking-wide">
                    {author.initials}
                  </div>
                  <div>
                    <p className="font-serif text-navy text-lg">{author.name}</p>
                    <p className="text-[0.78rem] text-slate-2">{author.role}</p>
                    <p className="mt-3 text-body-sm text-slate max-w-prose">{author.bio}</p>
                  </div>
                </Link>
                {moreFromAuthor.length > 0 ? (
                  <ul className="mt-6 grid gap-3">
                    {moreFromAuthor.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={d.href}
                          className="flex items-baseline justify-between gap-4 py-2 group"
                        >
                          <span className="font-serif text-navy text-base group-hover:text-gold transition-colors duration-200">
                            {d.title}
                          </span>
                          <span aria-hidden="true" className="text-gold">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            <div className="mt-16 pt-10 border-t hairline">
              <Eyebrow>{t.ctaBlock.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-2xl lg:text-3xl text-navy leading-snug max-w-prose">
                {t.ctaBlock.line1} {t.ctaBlock.line2}
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/apply" variant="primary">
                  {t.cta.applyNext}
                </Button>
                <Button href="/apply/private-consultation" variant="ghost">
                  {t.cta.requestConsult}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="bg-cream-2 py-section-y md:py-section-y-lg border-t hairline">
            <div className="container">
              <Eyebrow>Related</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.25rem] text-navy leading-[1.1] tracking-[-0.015em]">
                {insight.category}
              </h2>
              <ul className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={r.href} className="group flex flex-col h-full">
                      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                        <Image
                          src={images[r.imageKey]}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.05]"
                        />
                      </div>
                      <h3 className="mt-5 font-serif text-lg lg:text-xl text-navy leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2">
                        {r.authorName} · {r.readingTime}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
