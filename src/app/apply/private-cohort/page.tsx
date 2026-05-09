"use client";

import { useState } from "react";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea, Select } from "@/components/ui/Field";
import { useT } from "@/i18n/I18nProvider";

export default function PrivateCohortPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.cohort.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[22ch]">
                {t.pages.cohort.titlePart1} <span className="text-gold italic">{t.pages.cohort.titleGold}</span>
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">{t.pages.cohort.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container max-w-2xl">
            {submitted ? (
              <Reveal duration={800}>
                <div className="border hairline p-10 lg:p-14 bg-cream-2 text-center">
                  <Eyebrow>{t.pages.cohort.received}</Eyebrow>
                  <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                    {t.pages.cohort.receivedHeadline}
                  </h2>
                  <p className="mt-6 text-body text-slate max-w-prose mx-auto">
                    {t.pages.cohort.receivedBody}
                  </p>
                </div>
              </Reveal>
            ) : (
              <form
                className="grid gap-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t.fields.firstName} htmlFor="firstName" required>
                    <TextInput id="firstName" name="firstName" required autoComplete="given-name" />
                  </Field>
                  <Field label={t.fields.lastName} htmlFor="lastName" required>
                    <TextInput id="lastName" name="lastName" required autoComplete="family-name" />
                  </Field>
                </div>
                <Field label={t.fields.email} htmlFor="email" required>
                  <TextInput id="email" name="email" type="email" required autoComplete="email" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t.fields.role} htmlFor="role" required>
                    <TextInput id="role" name="role" required />
                  </Field>
                  <Field label={t.fields.institution} htmlFor="institution" required>
                    <TextInput id="institution" name="institution" required autoComplete="organization" />
                  </Field>
                </div>
                <Field label={t.fields.audience} htmlFor="audience" hint={t.fields.audienceHint} required>
                  <TextInput id="audience" name="audience" required placeholder={t.fields.audiencePlaceholder} />
                </Field>
                <Field label={t.fields.format} htmlFor="format" required>
                  <Select id="format" name="format" required defaultValue="">
                    <option value="" disabled>
                      {t.fields.selectFormat}
                    </option>
                    <option value="three-day">{t.fields.formatThree}</option>
                    <option value="four-day-chatham">{t.fields.formatChatham}</option>
                    <option value="curated-week">{t.fields.formatWeek}</option>
                    <option value="modular">{t.fields.formatModular}</option>
                    <option value="undecided">{t.fields.formatUndecided}</option>
                  </Select>
                </Field>
                <Field label={t.fields.languages} htmlFor="languages">
                  <TextInput id="languages" name="languages" placeholder="EN / DE / FR" />
                </Field>
                <Field label={t.fields.dates} htmlFor="dates">
                  <TextInput id="dates" name="dates" />
                </Field>
                <Field
                  label={t.fields.description}
                  htmlFor="description"
                  hint={t.fields.descriptionHint}
                  required
                >
                  <Textarea id="description" name="description" required rows={6} />
                </Field>
                <label className="flex items-start gap-3 text-body-sm text-slate">
                  <input type="checkbox" required className="mt-1 accent-[#B8924A]" />
                  <span>{t.fields.consentCohort}</span>
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center self-start px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200"
                >
                  {t.cta.submitEnquiry} →
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
