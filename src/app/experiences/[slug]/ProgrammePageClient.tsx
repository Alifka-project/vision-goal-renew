"use client";

import Image from "next/image";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { CTABlock } from "@/components/modules/CTABlock";
import { programmes, type Programme } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

// Pre-launch posture (client feedback pass 2): programme detail pages no
// longer display prices, cities, durations, participant limits, named
// hosts, cohort dates or "investment" tables — none of those specifics are
// yet confirmed. What remains is the SHAPE of each experience format:
// what it is for, how it is architected (Before / Inside / After), the
// outcomes it aims at, and answers to the common questions. Reintroduce
// fee / format / cohort blocks once real cohorts are ratified.
const programmeImages: Record<string, string> = {
  access: images.programmeAccess,
  banking: images.programmeBanking,
  topic: images.programmeTopic,
};

export function ProgrammePageClient({ slug }: { slug: Programme["slug"] }) {
  const t = useT();
  const programme = programmes.find((p) => p.slug === slug)!;
  const meta = t.programmeMeta[programme.id];
  const dt = t.pages.programmeDetail;

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="relative bg-navy-deep text-cream overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={programmeImages[programme.id]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(6,20,58,0.7) 0%, rgba(6,20,58,0.85) 100%)",
              }}
            />
          </div>
          <div className="container relative py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="block h-px w-10 bg-gold" />
                <span className="text-eyebrow uppercase text-cream/85">
                  {t.nav.experiences} · {meta.formatLabel}
                </span>
              </div>
              <h1 className="mt-8 font-serif text-cream text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.04] tracking-[-0.02em] max-w-4xl">
                {meta.name}
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-cream/85">{meta.tagline}</p>
              <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/contact" variant="on-dark">
                  {t.cta.discussExperience}
                </Button>
                <Button href="/experiences" variant="ghost-on-dark">
                  {t.cta.allExperiences}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{dt.outcomesEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {dt.outcomesHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
              {programme.outcomes.map((outcome, i) => (
                <Reveal as="li" key={i} duration={700} delay={i * 80}>
                  <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                  <p className="mt-4 text-body lg:text-body-lg text-navy max-w-prose">{outcome}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-cream-2 py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{dt.architectureEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {dt.architectureHeadline}
              </h2>
            </Reveal>
            <ol className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-12">
              {programme.architecture.map((phase, i) => (
                <Reveal as="li" key={phase.phase} duration={700} delay={i * 100}>
                  <p className="text-eyebrow uppercase text-gold tabular">{phase.phase}</p>
                  <h3 className="mt-4 font-serif text-2xl lg:text-[1.625rem] text-navy leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-body text-slate">{phase.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal duration={800}>
                <Eyebrow>{dt.postureEyebrow}</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em]">
                  {dt.postureHeadline}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-eyebrow uppercase text-gold">{dt.forLabel}</h3>
                <p className="mt-4 text-body text-navy">{programme.whoFor}</p>
              </div>
              <div>
                <h3 className="text-eyebrow uppercase text-slate-2">{dt.notForLabel}</h3>
                <p className="mt-4 text-body text-slate">{programme.notFor}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{dt.faqEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em]">
                {dt.faqHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 max-w-3xl">
              {programme.faqs.map((faq, i) => (
                <Reveal as="li" key={faq.q} duration={700} delay={i * 60}>
                  <details className="group border-t hairline py-6 last:border-b">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <h3 className="font-serif text-navy text-xl lg:text-[1.375rem] leading-snug">
                        {faq.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="shrink-0 mt-1 text-gold text-2xl leading-none transition-transform duration-300 ease-editorial group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-body text-slate max-w-prose">{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
