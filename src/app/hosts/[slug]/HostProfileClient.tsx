"use client";

import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { hosts, programmes, featuredInsights, type Host } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export function HostProfileClient({ slug }: { slug: Host["slug"] }) {
  const t = useT();
  const host = hosts.find((h) => h.slug === slug)!;

  const hostProgrammes = programmes.filter((p) => host.programmes.includes(p.id));
  const hostDispatches = featuredInsights.filter((insight) => insight.authorSlug === host.slug);

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-4 flex justify-center" duration={700}>
              <div className="aspect-square w-44 lg:w-56 bg-navy text-cream flex items-center justify-center font-serif text-5xl lg:text-6xl tracking-tight">
                {host.initials}
              </div>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.hosts.eyebrow}</Eyebrow>
                <h1 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.75rem] text-navy leading-[1.05] tracking-[-0.015em]">
                  {host.name}
                </h1>
                <p className="mt-4 text-body-lg text-slate">{host.role}</p>
                <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.12em] text-gold">
                  {host.expertise.map((tag) => (
                    <span key={tag} className="border hairline px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={host.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${host.name} on LinkedIn`}
                  className="mt-8 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2 hover:text-navy transition-colors duration-200"
                >
                  <span aria-hidden="true">in</span>
                  <span className="link-underline link-underline-out">LinkedIn profile</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal duration={800}>
                <Eyebrow>Bio</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal duration={800}>
                <p className="font-serif text-2xl lg:text-3xl text-navy leading-[1.35] tracking-[-0.005em] max-w-prose">
                  {host.bio}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.programmeDetail.hostsEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em]">
                {t.pages.programmeDetail.hostsHeadlinePart1}{" "}
                <span className="text-gold italic">{t.pages.programmeDetail.hostsHeadlineGold}</span>
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
              {hostProgrammes.map((p, i) => {
                const meta = t.programmeMeta[p.id];
                return (
                  <Reveal as="li" key={p.id} duration={700} delay={i * 100}>
                    <Link
                      href={p.href}
                      className="card-lift block h-full p-7 lg:p-8 bg-white border hairline group hover:border-gold/40"
                    >
                      <p className="text-eyebrow uppercase text-gold tabular">
                        {meta.city} · {meta.durationLabel}
                      </p>
                      <h3 className="mt-4 font-serif text-xl lg:text-[1.5rem] text-navy leading-[1.2]">
                        {meta.name}
                      </h3>
                      <p className="mt-4 text-body-sm text-slate">{meta.tagline}</p>
                      <span className="mt-7 inline-flex items-center gap-3 text-sm text-navy font-medium">
                        <span className="link-underline link-underline-out">{t.cta.readProgramme}</span>
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {hostDispatches.length > 0 ? (
          <section className="bg-white py-section-y md:py-section-y-lg">
            <div className="container">
              <Reveal duration={800}>
                <Eyebrow>{t.insights.dispatchEyebrow}</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.1] tracking-[-0.015em]">
                  {t.insights.practitionerNotes}
                </h2>
              </Reveal>
              <ul className="mt-10 max-w-3xl border-t hairline">
                {hostDispatches.map((d) => (
                  <li key={d.slug} className="border-b hairline">
                    <Link
                      href={d.href}
                      className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-6 items-baseline py-7 group hover:bg-cream-2 transition-colors duration-300 px-2 -mx-2"
                    >
                      <span className="md:col-span-3 text-eyebrow uppercase text-gold">
                        {d.category}
                      </span>
                      <span className="md:col-span-7 font-serif text-navy text-lg lg:text-xl">
                        {d.title}
                      </span>
                      <span className="md:col-span-2 md:text-right text-body-sm text-slate-2 tabular">
                        {d.readingTime}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="bg-cream-2 py-section-y border-t hairline">
          <div className="container">
            <Link
              href="/hosts"
              className="inline-flex items-center gap-3 text-sm text-navy font-medium"
            >
              <span aria-hidden="true">←</span>
              <span className="link-underline link-underline-out">{t.cta.allHosts}</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
