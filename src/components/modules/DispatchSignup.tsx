"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { ConsentCheckbox, FormError, Honeypot, Turnstile } from "@/components/forms/FormParts";
import { useFormSubmission } from "@/components/forms/useFormSubmission";
import { useT } from "@/i18n/I18nProvider";

export function DispatchSignup() {
  const t = useT();
  const { submit, isSubmitting, isSuccess, error, fieldErrors } = useFormSubmission("newsletter");

  return (
    <section className="bg-navy text-cream py-section-y md:py-section-y-lg">
      <div className="container max-w-3xl">
        <Reveal duration={800}>
          <Eyebrow tone="cream">{t.insights.dispatchEyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3rem] leading-[1.08] tracking-[-0.015em]">
            {t.insights.dispatchHeadline} <span className="text-gold-hi italic">{t.insights.dispatchHeadlineGold}</span>
          </h2>
          {isSuccess ? (
            <p className="mt-10 text-body-lg text-cream/85" role="status">
              {t.insights.dispatchOk}
            </p>
          ) : (
            <form
              className="mt-10 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                void submit(e.currentTarget);
              }}
              aria-label={t.insights.dispatchEyebrow}
            >
              <Honeypot />
              <FormError error={error} fieldErrors={fieldErrors} tone="dark" />
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="dispatch-email" className="sr-only">
                  {t.insights.emailPlaceholder}
                </label>
                <input
                  id="dispatch-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t.insights.emailPlaceholder}
                  className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold-hi/60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border bg-gold text-navy border-gold hover:bg-gold-hi transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.cta.sending : t.cta.subscribe}
                </button>
              </div>
              <ConsentCheckbox text={t.fields.consentNewsletter} tone="dark" />
              <Turnstile theme="dark" />
            </form>
          )}
          <p className="mt-4 text-[0.78rem] text-cream/55">{t.insights.dispatchHelp}</p>
        </Reveal>
      </div>
    </section>
  );
}
