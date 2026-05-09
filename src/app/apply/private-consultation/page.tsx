"use client";

import { useState } from "react";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea, Select } from "@/components/ui/Field";
import { programmes } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

export default function PrivateConsultationPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.consult.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                {t.pages.consult.title}
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">{t.pages.consult.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container max-w-2xl">
            {submitted ? (
              <Reveal duration={800}>
                <div className="border hairline p-10 lg:p-14 bg-cream-2 text-center">
                  <Eyebrow>{t.pages.consult.received}</Eyebrow>
                  <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                    {t.pages.consult.receivedHeadline}
                  </h2>
                  <p className="mt-6 text-body text-slate max-w-prose mx-auto">
                    {t.pages.consult.receivedBody}
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
                  <Field label={t.fields.organisation} htmlFor="organisation" required>
                    <TextInput id="organisation" name="organisation" required autoComplete="organization" />
                  </Field>
                </div>
                <Field label={t.fields.programmeOfInterest} htmlFor="programme">
                  <Select id="programme" name="programme" defaultValue="unsure">
                    <option value="unsure">{t.fields.notSure}</option>
                    {programmes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {t.programmeMeta[p.id].name}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field
                  label={t.fields.discussTopic}
                  htmlFor="topic"
                  hint={t.fields.discussHint}
                  required
                >
                  <Textarea id="topic" name="topic" required rows={5} />
                </Field>
                <Field
                  label={t.fields.timing}
                  htmlFor="timing"
                  hint={t.fields.timingHint}
                >
                  <TextInput id="timing" name="timing" placeholder={t.fields.timingPlaceholder} />
                </Field>
                <label className="flex items-start gap-3 text-body-sm text-slate">
                  <input type="checkbox" required className="mt-1 accent-[#B8924A]" />
                  <span>{t.fields.consentConsult}</span>
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center self-start px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200"
                >
                  {t.cta.requestConsult}
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
