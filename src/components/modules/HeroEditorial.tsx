"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DispatchTicker } from "@/components/modules/DispatchTicker";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

export function HeroEditorial() {
  const t = useT();
  return (
    <section className="relative bg-navy-deep text-cream overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.heroAlpine}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,20,58,0.65) 0%, rgba(6,20,58,0.78) 55%, rgba(6,20,58,0.95) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(115deg, rgba(10,31,68,0.95) 0%, rgba(10,31,68,0.4) 50%, rgba(10,31,68,0.0) 100%)",
          }}
        />
      </div>

      <DispatchTicker />

      <div className="container relative pt-12 pb-14 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 fade-in-soft">
            <span aria-hidden="true" className="block h-px w-10 bg-gold draw-rule origin-left" />
            <span className="text-eyebrow uppercase text-cream/85">{t.hero.eyebrow}</span>
          </div>

          {/* leading-[1.08] gives the italic descenders (p, g) clearance from the
              .reveal-line overflow:hidden box; without it the line is clipped. */}
          <h1 className="mt-7 font-serif text-cream text-[2.5rem] sm:text-[3.5rem] lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.08] tracking-[-0.02em]">
            <span className="reveal-line"><span>{t.hero.line1}</span></span>
            <span className="reveal-line delay-1"><span className="text-cream/85">{t.hero.line2}</span></span>
            <span className="reveal-line delay-2"><span className="text-gold-hi italic">{t.hero.line3}</span></span>
          </h1>

          <p className="mt-6 max-w-2xl text-body lg:text-body-lg text-cream/80 leading-[1.6] fade-in-soft">
            {t.hero.subline}
          </p>

          <p className="mt-5 text-[0.78rem] uppercase tracking-[0.18em] text-gold-hi fade-in-soft">
            {t.hero.subjects}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center fade-in-soft">
            <Button href="/apply" variant="on-dark">
              {t.cta.applyNext}
            </Button>
            <Button href="/apply/private-consultation" variant="ghost-on-dark">
              {t.cta.requestConsult}
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[0.78rem] uppercase tracking-[0.16em] text-cream/65 fade-in-soft">
          <div className="flex items-center gap-3">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{t.hero.statusReviewing}</span>
          </div>
          <span className="hidden md:inline">{t.hero.locationLine}</span>
          <a href="#programmes" className="link-underline link-underline-out hover:text-gold-hi text-cream/85">
            {t.hero.scrollToProgrammes}
          </a>
        </div>
      </div>
    </section>
  );
}
