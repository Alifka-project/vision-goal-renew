"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function PrivateCohortBanner() {
  const t = useT();
  return (
    <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
      <div className="container">
        <Reveal duration={800}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <Eyebrow>{t.privateBanner.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
                {t.privateBanner.headline} <span className="text-gold italic">{t.privateBanner.headlineGold}</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-hairline">
              <Button href="/apply/private-cohort" variant="primary" className="w-full sm:w-auto">
                {t.cta.submitEnquiry}
              </Button>
              <p className="mt-5 text-body-sm text-slate-2 max-w-prose-narrow">
                {t.privateBanner.response}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
