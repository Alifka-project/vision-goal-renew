"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { programmes } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const programmeImages: Record<(typeof programmes)[number]["id"], string> = {
  access: images.programmeAccess,
  banking: images.programmeBanking,
  topic: images.programmeTopic,
};

export function ThreeProgrammesBlock() {
  const t = useT();

  return (
    <section id="programmes" className="bg-cream py-section-y md:py-section-y-lg">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-16" duration={800}>
          <div className="lg:col-span-7">
            <Eyebrow>{t.programmesBlock.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {t.programmesBlock.headline}
              <br />
              <span className="text-gold italic">{t.programmesBlock.headlineGold}</span>
            </h2>
          </div>
        </Reveal>

        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programmes.map((p, i) => {
            const meta = t.programmeMeta[p.id];
            return (
              <Reveal as="li" key={p.id} duration={800} delay={i * 120}>
                <Link
                  href={p.href}
                  className="card-lift relative flex h-full flex-col bg-white border hairline group overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                    <Image
                      src={programmeImages[p.id]}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(6,20,58,0.05) 0%, rgba(6,20,58,0.55) 100%)",
                      }}
                    />
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-eyebrow uppercase text-cream">
                      <span className="tabular">0{i + 1}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cream/85">
                        {meta.formatLabel}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 lg:p-8">
                    <h3 className="font-serif text-xl lg:text-[1.5rem] xl:text-[1.625rem] text-navy leading-[1.2]">
                      {meta.name}
                    </h3>

                    <p className="mt-4 text-body text-slate">{meta.tagline}</p>

                    <span className="mt-7 inline-flex items-center gap-3 text-sm text-navy font-medium">
                      <span className="link-underline link-underline-out">{t.cta.readProgramme}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        {/*
         * Fourth concept: Bespoke. It has no detail page because it has no
         * fixed shape by definition — it is built around one organisation or
         * group — so it renders as a full-width panel rather than a card that
         * would imply a comparable, scheduled product.
         */}
        <Reveal duration={800} delay={360}>
          <div className="mt-6 lg:mt-8 border hairline bg-white">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-7 lg:p-10 items-center">
              <div className="lg:col-span-8">
                <p className="text-eyebrow uppercase text-gold tabular">04</p>
                <h3 className="mt-4 font-serif text-2xl lg:text-[1.75rem] text-navy leading-[1.2]">
                  {t.programmesBlock.bespokeTitle}
                </h3>
                <p className="mt-4 text-body text-slate max-w-prose">
                  {t.programmesBlock.bespokeBody}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-sm text-navy font-medium group"
                >
                  <span className="link-underline link-underline-out">{t.cta.expressInterest}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
