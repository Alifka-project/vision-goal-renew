"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { ThreeProgrammesBlock } from "@/components/modules/ThreeProgrammesBlock";
import { CohortCalendar } from "@/components/modules/CohortCalendar";
import { PrivateCohortBanner } from "@/components/modules/PrivateCohortBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

export default function ProgrammesIndexPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.programmes.eyebrow}
          title={
            <>
              {t.pages.programmes.titlePart1} <span className="text-gold italic">{t.pages.programmes.titleGold}</span>
            </>
          }
          lede={t.pages.programmes.lede}
        />
        <ThreeProgrammesBlock />

        <section className="bg-cream-2 py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.enrich.programmesUnitedEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.programmesUnitedHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
              {t.enrich.programmesUnitedItems.map((item, i) => (
                <Reveal as="li" key={item.title} duration={700} delay={i * 80}>
                  <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <CohortCalendar />
        <PrivateCohortBanner />
      </main>
      <Footer />
    </>
  );
}
