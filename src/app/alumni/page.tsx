"use client";

import Image from "next/image";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { CTABlock } from "@/components/modules/CTABlock";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { alumniVoices } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const pastCohorts = [
  {
    label: "Swiss Business Access · Zurich · 2025",
    composition:
      "Twelve participants from EMEA, GCC, and North America. Sectors: industrial SME, family office, technology.",
    hosts: "Anja Brönnimann · Henri Vauchel",
  },
  {
    label: "Private Banking Intensive · Geneva · 2025",
    composition:
      "Twelve practitioner-grade participants. Sectors: private wealth, family office, advisory adjacent.",
    hosts: "Dr. Margit Holzer · Stefan Imboden · Rafael Kübler",
  },
  {
    label: "Swiss Finance Week · Zurich · 2025",
    composition:
      "Twenty-four contributors across two rooms. Topic: Swiss capital markets posture in a multi-rate environment.",
    hosts: "Dr. Léa Marchand · Rafael Kübler · Stefan Imboden",
  },
  {
    label: "Swiss Business Access · Zurich · 2024",
    composition:
      "Twelve participants. Notable: three founders later commissioned a private cohort for their portfolio companies.",
    hosts: "Anja Brönnimann · Henri Vauchel",
  },
];

export default function AlumniPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.alumni.eyebrow}
          title={
            <>
              {t.pages.alumni.titlePart1} <span className="text-gold italic">{t.pages.alumni.titleGold}</span>
            </>
          }
          lede={t.pages.alumni.lede}
        />

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5" duration={800}>
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src={images.alumniRoom}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.alumni.postureEyebrow}</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                  {t.pages.alumni.postureHeadline}
                </h2>
                <p className="mt-8 text-body-lg text-slate max-w-prose">
                  {t.pages.alumni.postureBody}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.alumni.voicesEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em]">
                {t.alumni.voicesHeadline} <span className="text-gold italic">{t.alumni.voicesHeadlineGold}</span>
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
              {alumniVoices.map((v, i) => (
                <Reveal as="li" key={i} duration={700} delay={i * 80}>
                  <figure className="h-full p-8 lg:p-10 bg-white border hairline">
                    <span aria-hidden="true" className="block font-serif text-gold text-5xl leading-none">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-serif text-navy text-xl lg:text-2xl leading-snug max-w-[36ch]">
                      {v.quote}
                    </blockquote>
                    <figcaption className="mt-8 pt-6 border-t hairline">
                      <p className="text-body-sm text-navy">{v.attribution}</p>
                      <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-slate-2">
                        {v.cohortLabel}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.alumni.pastEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em]">
                {t.alumni.pastHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 border hairline divide-y divide-hairline">
              {pastCohorts.map((c, i) => (
                <Reveal as="li" key={c.label} duration={700} delay={i * 60}>
                  <div className="grid md:grid-cols-12 gap-y-3 md:gap-x-6 px-6 py-7 lg:px-10 lg:py-8">
                    <div className="md:col-span-4 font-serif text-navy text-lg lg:text-xl leading-snug">
                      {c.label}
                    </div>
                    <div className="md:col-span-5 text-body text-slate">{c.composition}</div>
                    <div className="md:col-span-3 text-body-sm text-slate-2">{c.hosts}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy text-cream py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow tone="cream">{t.enrich.alumniNumbersEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3rem] leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.alumniNumbersHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {t.enrich.alumniStats.map((stat, i) => (
                <Reveal as="li" key={stat.label} duration={700} delay={i * 80}>
                  <p className="font-serif text-gold-hi text-5xl lg:text-6xl tabular leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[0.78rem] uppercase tracking-[0.14em] text-cream/70 leading-relaxed">
                    {stat.label}
                  </p>
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
