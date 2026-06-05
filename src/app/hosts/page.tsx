"use client";

import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/modules/PageHero";
import { hosts } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

// Pre-launch posture: this page used to list a roster of named hosts and
// faculty. Per-programme contributors are now confirmed individually and
// will be named publicly only once their participation has been agreed —
// so the page renders the curated-network statement and the founding
// curator as the single confirmed name.
export default function PractitionerNetworkPage() {
  const t = useT();
  // There is exactly one publicly-named entry on launch: the founder /
  // curator. Additional confirmed contributors will be added per programme.
  const founder = hosts[0];

  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.hosts.eyebrow}
          title={
            <>
              {t.pages.hosts.titlePart1}{" "}
              <span className="text-gold italic">{t.pages.hosts.titleGold}</span>
            </>
          }
          lede={t.pages.hosts.lede}
        />

        {/* Founding curator — the single named entry on launch */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Founding curator</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                The platform is curated by its founder.
              </h2>
            </Reveal>

            <Reveal duration={700} delay={120}>
              <article className="mt-12 max-w-4xl border hairline p-7 md:p-10 bg-white">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                  <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-navy text-cream flex items-center justify-center font-serif text-2xl md:text-3xl tracking-wide">
                    {founder.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-navy text-2xl md:text-3xl leading-tight">
                      {founder.name}
                    </p>
                    <p className="mt-2 text-body text-slate-2 leading-snug">{founder.role}</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.12em] text-gold">
                      {founder.expertise.map((tag) => (
                        <span key={tag} className="border hairline px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-7 text-body text-slate max-w-prose">{founder.bio}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2">
                      <Link
                        href={`/hosts/${founder.slug}`}
                        className="hover:text-navy transition-colors duration-200"
                      >
                        <span className="link-underline link-underline-out">Full profile →</span>
                      </Link>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-navy transition-colors duration-200"
                      >
                        <span className="link-underline link-underline-out">LinkedIn ↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal duration={700}>
              <div className="mt-16 pt-10 border-t hairline max-w-3xl">
                <Eyebrow>{t.pages.hosts.principleEyebrow}</Eyebrow>
                <p className="mt-6 text-body text-slate">{t.pages.hosts.principleBody}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Criteria — kept as principle-based content, no names */}
        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.enrich.hostsCriteriaEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.hostsCriteriaHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
              {t.enrich.hostsCriteriaItems.map((item, i) => (
                <Reveal as="li" key={item.title} duration={700} delay={i * 80}>
                  <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
