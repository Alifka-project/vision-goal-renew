"use client";

import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/modules/PageHero";
import { hosts } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

const programmeKey: Record<"access" | "banking" | "topic", "access" | "banking" | "topic"> = {
  access: "access",
  banking: "banking",
  topic: "topic",
};

export default function HostsIndexPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.hosts.eyebrow}
          title={
            <>
              {t.pages.hosts.titlePart1} <span className="text-gold italic">{t.pages.hosts.titleGold}</span>
            </>
          }
          lede={t.pages.hosts.lede}
        />

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {hosts.map((host, i) => (
                <Reveal as="li" key={host.slug} duration={700} delay={i * 60}>
                  <Link
                    href={`/hosts/${host.slug}`}
                    className="card-lift flex h-full flex-col p-7 border hairline bg-white hover:border-gold/40"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-16 h-16 bg-navy text-cream flex items-center justify-center font-serif text-xl tracking-wide">
                        {host.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-serif text-navy text-lg leading-tight">{host.name}</p>
                          {host.placeholder ? (
                            <span className="text-[0.6rem] uppercase tracking-[0.16em] text-slate-2 border hairline px-1.5 py-0.5">
                              Sample
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-[0.78rem] text-slate-2 leading-snug">{host.role}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.12em] text-gold">
                      {host.expertise.map((tag) => (
                        <span key={tag} className="border hairline px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t hairline flex flex-wrap gap-x-4 gap-y-1 text-[0.78rem] text-slate-2">
                      {host.programmes.map((p) => (
                        <span key={p}>{t.programmeMeta[programmeKey[p]].name}</span>
                      ))}
                    </div>
                  </Link>
                  <a
                    href={host.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${host.name} on LinkedIn`}
                    className="mt-3 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-slate-2 hover:text-navy transition-colors duration-200"
                  >
                    <span aria-hidden="true">in</span>
                    <span>LinkedIn</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal duration={700}>
              <div className="mt-16 pt-10 border-t hairline">
                <Eyebrow>{t.pages.hosts.principleEyebrow}</Eyebrow>
                <p className="mt-6 max-w-prose text-body text-slate">
                  {t.pages.hosts.principleBody}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

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
