"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Select } from "@/components/ui/Field";
import { ConsentCheckbox, FormError, Honeypot, Turnstile } from "@/components/forms/FormParts";
import { useFormSubmission } from "@/components/forms/useFormSubmission";
import { programmes } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export default function RequestDossierPage() {
  const t = useT();
  const { submit, isSubmitting, isSuccess, error, fieldErrors } = useFormSubmission("dossier");
  const copy = t.pages.dossier;

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                {copy.titlePart1} <span className="text-gold italic">{copy.titleGold}</span>
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">{copy.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container max-w-2xl">
            {isSuccess ? (
              <Reveal duration={800}>
                <div className="border hairline p-10 lg:p-14 bg-cream-2 text-center" role="status">
                  <Eyebrow>{copy.received}</Eyebrow>
                  <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                    {copy.receivedHeadline}
                  </h2>
                  <p className="mt-6 text-body text-slate max-w-prose mx-auto">{copy.receivedBody}</p>
                </div>
              </Reveal>
            ) : (
              <form
                className="grid gap-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit(e.currentTarget);
                }}
              >
                <Honeypot />
                <FormError error={error} fieldErrors={fieldErrors} />
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
                <Field label={t.fields.organisation} htmlFor="organisation">
                  <TextInput id="organisation" name="organisation" autoComplete="organization" />
                </Field>
                <Field label={t.fields.programmeOfInterest} htmlFor="programme">
                  <Select id="programme" name="programme" defaultValue="all">
                    <option value="all">{t.fields.allProgrammes}</option>
                    {programmes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {t.programmeMeta[p.id].name}
                      </option>
                    ))}
                  </Select>
                </Field>
                <ConsentCheckbox text={t.fields.consentDossier} />
                <Turnstile />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center self-start px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.cta.sending : t.cta.requestDossier}
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
