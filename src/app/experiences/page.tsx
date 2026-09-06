"use client";

import Image from "next/image";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { ThreeProgrammesBlock } from "@/components/modules/ThreeProgrammesBlock";
import { CTABlock } from "@/components/modules/CTABlock";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { photos } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

// Experiences index. Replaces the former /programmes route: no fees, no
// dates, no cities, no participant counts — only the indicative formats
// plus real photographs of learning environments. Photo 3 (mixed group)
// and Photo 4 (premium retail) live here per the client's brief; both are
// captioned as examples of learning environments, never as programme
// participants or alumni.
export default function ExperiencesIndexPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.programmes.eyebrow}
          title={
            <>
              {t.pages.programmes.titlePart1}{" "}
              <span className="text-gold italic">{t.pages.programmes.titleGold}</span>
            </>
          }
          lede={t.pages.programmes.lede}
        />

        <ThreeProgrammesBlock />

        {/* Photo 4 — premium retail environment, landscape. Illustrates the
            link between finance and pricing, margins, operations, customer
            experience. Partial person at the right edge already cropped out. */}
        <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Learning environments</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                Where the concepts meet the operation.
              </h2>
            </Reveal>

            <Reveal duration={800} delay={120}>
              <figure className="mt-12">
                <div className="relative aspect-[16/10] md:aspect-[1080/665] overflow-hidden bg-navy">
                  <Image
                    src={photos.retailDelicatessen}
                    alt="A premium Swiss retail food hall, with a host in conversation beside a fresh counter display."
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-body-sm text-slate-2 max-w-prose">
                  Exploring how pricing, margins, operations and customer experience come together in
                  a premium retail environment.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

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

        {/* Photo 3 — second group, portrait. Presented as an example of a
            learning environment with a mixed audience, deliberately NOT
            framed as an exclusively senior executive cohort. */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5" duration={800}>
              <figure>
                <div className="relative aspect-[665/900] overflow-hidden bg-navy">
                  <Image
                    src={photos.orsiniMixedGroup}
                    alt="A group gathered on the steps of a Zurich restaurant after a learning session."
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-4 text-body-sm text-slate-2">
                  Finance and business learning connected with discussion, context and shared
                  experience.
                </figcaption>
              </figure>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal duration={800}>
                <Eyebrow>Shared context</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.15] tracking-[-0.015em] max-w-prose">
                  A room is made by the people in it.
                </h2>
                <p className="mt-8 text-body-lg text-slate max-w-prose">
                  Learning experiences bring together people at different stages of their
                  professional lives — the value of the room comes from the range of perspective in
                  it, not from a single seniority band.
                </p>
                <p className="mt-6 text-body text-slate max-w-prose">
                  Specific formats, audiences and settings are confirmed for each experience. Start
                  with a conversation and we will tell you what is genuinely relevant.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
