"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

// `secondary` overrides the client-specified "Discover Vision Goal" link,
// which goes to /what-we-do — on that page itself it would only reload it.
export function CTABlock({ secondary }: { secondary?: { label: string; href: string } } = {}) {
  const t = useT();
  const second = secondary ?? { label: t.cta.requestConsult, href: "/what-we-do" };
  return (
    <section className="relative bg-navy-deep text-cream overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.ctaAlps}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,20,58,0.85) 0%, rgba(6,20,58,0.92) 100%)",
          }}
        />
      </div>

      <div className="container relative py-section-y md:py-section-y-lg">
        <Reveal className="max-w-4xl" duration={800}>
          <Eyebrow tone="cream">{t.ctaBlock.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3rem] lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em]">
            {t.ctaBlock.line1}
            <br />
            <span className="text-gold-hi italic">{t.ctaBlock.line2}</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Button href="/contact" variant="on-dark">
              {t.cta.applyNext}
            </Button>
            <Button href={second.href} variant="ghost-on-dark">
              {second.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
