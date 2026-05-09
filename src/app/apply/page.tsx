"use client";

import { useState } from "react";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea, Select } from "@/components/ui/Field";
import { programmes } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export default function ApplyPage() {
  const t = useT();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const steps = t.pages.apply.steps;
  const lastStep = steps.length - 1;

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.apply.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                {t.pages.apply.titlePart1} <span className="text-gold italic">{t.pages.apply.titleGold}</span>
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">{t.pages.apply.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container max-w-3xl">
            {submitted ? (
              <Reveal duration={800}>
                <div className="border hairline p-10 lg:p-14 bg-cream-2 text-center">
                  <Eyebrow>{t.pages.apply.received}</Eyebrow>
                  <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                    {t.pages.apply.receivedHeadline}
                  </h2>
                  <p className="mt-6 text-body text-slate max-w-prose mx-auto">
                    {t.pages.apply.receivedBody}
                  </p>
                </div>
              </Reveal>
            ) : (
              <>
                <ol className="flex items-center gap-2 mb-10 overflow-x-auto" aria-label={t.pages.apply.eyebrow}>
                  {steps.slice(0, -1).map((label, i) => (
                    <li key={label} className="flex items-center gap-2 shrink-0">
                      <span
                        className={`w-7 h-7 inline-flex items-center justify-center text-[0.78rem] tabular border ${
                          i <= step
                            ? "bg-navy text-cream border-navy"
                            : "bg-white text-slate-2 hairline"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-[0.78rem] uppercase tracking-[0.14em] ${
                          i === step ? "text-navy" : "text-slate-2"
                        }`}
                      >
                        {label}
                      </span>
                      {i < steps.length - 2 ? (
                        <span aria-hidden="true" className="w-6 h-px bg-hairline" />
                      ) : null}
                    </li>
                  ))}
                </ol>

                <form
                  className="grid gap-7"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step < lastStep - 1) {
                      setStep((s) => s + 1);
                    } else {
                      setSubmitted(true);
                    }
                  }}
                >
                  {step === 0 ? (
                    <fieldset className="grid gap-6">
                      <legend className="font-serif text-2xl text-navy mb-2">{t.pages.apply.stepLegend.identity}</legend>
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
                        <Field label={t.fields.organisation} htmlFor="organisation" required>
                          <TextInput id="organisation" name="organisation" required autoComplete="organization" />
                        </Field>
                      </div>
                      <Field label={t.fields.country} htmlFor="country" required>
                        <TextInput id="country" name="country" required autoComplete="country-name" />
                      </Field>
                    </fieldset>
                  ) : null}

                  {step === 1 ? (
                    <fieldset className="grid gap-6">
                      <legend className="font-serif text-2xl text-navy mb-2">{t.pages.apply.stepLegend.programme}</legend>
                      <Field label={t.fields.programmeOfInterest} htmlFor="programme" required>
                        <Select id="programme" name="programme" required defaultValue="">
                          <option value="" disabled>
                            {t.fields.selectProgramme}
                          </option>
                          {programmes.map((p) => (
                            <option key={p.id} value={p.id}>
                              {t.programmeMeta[p.id].name}
                            </option>
                          ))}
                          <option value="unsure">{t.fields.notSure}</option>
                        </Select>
                      </Field>
                      <Field
                        label={t.fields.preferredCohort}
                        htmlFor="cohort"
                        hint={t.fields.preferredCohortHint}
                      >
                        <TextInput id="cohort" name="cohort" placeholder={t.fields.cohortPlaceholder} />
                      </Field>
                    </fieldset>
                  ) : null}

                  {step === 2 ? (
                    <fieldset className="grid gap-6">
                      <legend className="font-serif text-2xl text-navy mb-2">{t.pages.apply.stepLegend.whyNow}</legend>
                      <Field
                        label={t.fields.objective}
                        htmlFor="objective"
                        hint={t.fields.objectiveHint}
                        required
                      >
                        <Textarea id="objective" name="objective" required rows={5} />
                      </Field>
                      <Field
                        label={t.fields.contribution}
                        htmlFor="contribution"
                        hint={t.fields.contributionHint}
                        required
                      >
                        <Textarea id="contribution" name="contribution" required rows={5} />
                      </Field>
                    </fieldset>
                  ) : null}

                  {step === 3 ? (
                    <fieldset className="grid gap-6">
                      <legend className="font-serif text-2xl text-navy mb-2">{t.pages.apply.stepLegend.referees}</legend>
                      <p className="text-body-sm text-slate-2 max-w-prose">{t.fields.refereeIntro}</p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label={`1 — ${t.fields.refereeName}`} htmlFor="ref1Name" required>
                          <TextInput id="ref1Name" name="ref1Name" required />
                        </Field>
                        <Field label={`1 — ${t.fields.refereeEmail}`} htmlFor="ref1Email" required>
                          <TextInput id="ref1Email" name="ref1Email" type="email" required />
                        </Field>
                        <Field label={`2 — ${t.fields.refereeName}`} htmlFor="ref2Name" required>
                          <TextInput id="ref2Name" name="ref2Name" required />
                        </Field>
                        <Field label={`2 — ${t.fields.refereeEmail}`} htmlFor="ref2Email" required>
                          <TextInput id="ref2Email" name="ref2Email" type="email" required />
                        </Field>
                      </div>
                      <label className="flex items-start gap-3 text-body-sm text-slate">
                        <input type="checkbox" required className="mt-1 accent-[#B8924A]" />
                        <span>{t.fields.consentApply}</span>
                      </label>
                    </fieldset>
                  ) : null}

                  <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
                    {step > 0 ? (
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border hairline text-navy hover:bg-cream-2 transition-colors duration-200"
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                      >
                        {t.cta.previous}
                      </button>
                    ) : (
                      <span />
                    )}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200"
                    >
                      {step === lastStep - 1 ? t.cta.submitApplication : t.cta.continue}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
