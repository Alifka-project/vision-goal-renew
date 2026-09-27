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
// Crop focus per card. Cards are a short 3:2 band on phones (a full-width
// 4:5 card image filled most of the screen) and 4:5 from md up; the banking
// photograph needs its focus raised to keep the subject's head in frame.
const programmeFocus: Record<(typeof programmes)[number]["id"], string> = {
  access: "object-center",
  banking: "object-[50%_25%]",
  topic: "object-center",
};

// `showHeader` is off on /experiences: that page's hero already states
// "Indicative learning concepts currently being developed", and repeating it
// as this block's heading put the same sentence on screen twice in a row.
export function ThreeProgrammesBlock({ showHeader = true }: { showHeader?: boolean } = {}) {
  const t = useT();

  return (
    <section id="programmes" className="bg-cream py-section-y md:py-section-y-lg">
      <div className="container">
        {showHeader ? (
          <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-14" duration={800}>
            <div className="lg:col-span-7">
              <Eyebrow>{t.programmesBlock.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
                {t.programmesBlock.headline}{" "}
                <span className="text-gold italic">{t.programmesBlock.headlineGold}</span>
              </h2>
            </div>
            {/* The right half of this header used to be empty. It now says
                what "indicative" means, so the heading is not left as an
                unexplained caveat. */}
            <p className="lg:col-span-5 text-body-lg text-slate max-w-prose">
              {t.pages.programmes.lede}
            </p>
          </Reveal>
        ) : null}

        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programmes.map((p, i) => {
            const meta = t.programmeMeta[p.id];
            return (
              <Reveal as="li" key={p.id} duration={800} delay={i * 120}>
                <Link
                  href={p.href}
                  className="card-lift relative flex h-full flex-col bg-white border hairline group overflow-hidden"
                >
                  <div className="relative aspect-[3/2] md:aspect-[4/5] overflow-hidden bg-navy">
                    <Image
                      src={programmeImages[p.id]}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${programmeFocus[p.id]} transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(6,20,58,0.45) 0%, rgba(6,20,58,0.05) 28%, rgba(6,20,58,0.05) 58%, rgba(6,20,58,0.65) 100%)",
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

                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <h3 className="font-serif text-xl lg:text-[1.5rem] xl:text-[1.625rem] text-navy leading-[1.2]">
                      {meta.name}
                    </h3>

                    <p className="mt-4 text-body text-slate">{meta.tagline}</p>

                    <span className="mt-auto pt-7 inline-flex items-center gap-3 text-sm text-navy font-medium">
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
