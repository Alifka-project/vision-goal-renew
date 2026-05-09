"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function DispatchSignup() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-navy text-cream py-section-y md:py-section-y-lg">
      <div className="container max-w-3xl">
        <Reveal duration={800}>
          <Eyebrow tone="cream">{t.insights.dispatchEyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3rem] leading-[1.08] tracking-[-0.015em]">
            {t.insights.dispatchHeadline} <span className="text-gold-hi italic">{t.insights.dispatchHeadlineGold}</span>
          </h2>
          {submitted ? (
            <p className="mt-10 text-body-lg text-cream/85">{t.insights.dispatchOk}</p>
          ) : (
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              aria-label={t.insights.dispatchEyebrow}
            >
              <input
                type="email"
                required
                placeholder={t.insights.emailPlaceholder}
                className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold-hi/60"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border bg-gold text-navy border-gold hover:bg-gold-hi transition-colors duration-200"
              >
                {t.cta.subscribe}
              </button>
            </form>
          )}
          <p className="mt-4 text-[0.78rem] text-cream/55">{t.insights.dispatchHelp}</p>
        </Reveal>
      </div>
    </section>
  );
}
