"use client";

import { useState } from "react";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea } from "@/components/ui/Field";
import { useT } from "@/i18n/I18nProvider";

export default function ContactPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.contact.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                {t.pages.contact.titlePart1} <span className="text-gold italic">{t.pages.contact.titleGold}</span>
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">{t.pages.contact.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              {submitted ? (
                <Reveal duration={800}>
                  <div className="border hairline p-10 lg:p-14 bg-cream-2">
                    <Eyebrow>{t.pages.contact.eyebrow}</Eyebrow>
                    <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                      {t.pages.consult.receivedHeadline}
                    </h2>
                    <p className="mt-6 text-body text-slate max-w-prose">
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
                  <Field label={t.fields.subject} htmlFor="subject" required>
                    <TextInput id="subject" name="subject" required />
                  </Field>
                  <Field
                    label={t.fields.message}
                    htmlFor="message"
                    hint={t.fields.messageHint}
                    required
                  >
                    <Textarea id="message" name="message" required rows={6} />
                  </Field>
                  <label className="flex items-start gap-3 text-body-sm text-slate">
                    <input type="checkbox" required className="mt-1 accent-[#B8924A]" />
                    <span>{t.fields.consentContact}</span>
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center self-start px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200"
                  >
                    {t.cta.send}
                  </button>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-hairline">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.contact.officeEyebrow}</Eyebrow>
                <p className="mt-6 font-serif text-navy text-2xl leading-snug max-w-prose">
                  Vision Goal LLC
                  <br />
                  Pfäffikon SZ, Switzerland
                </p>
                <p className="mt-2 text-body-sm text-slate-2">
                  Programme venues: Zurich · Geneva · Selected Swiss locations
                </p>
                <dl className="mt-10 space-y-6">
                  <div>
                    <dt className="text-eyebrow uppercase text-slate-2">{t.pages.contact.emailLabel}</dt>
                    <dd className="mt-2 text-body text-navy">
                      <a
                        href="mailto:info@visiongoal.ch"
                        className="link-underline link-underline-out"
                      >
                        info@visiongoal.ch
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow uppercase text-slate-2">{t.pages.contact.responseLabel}</dt>
                    <dd className="mt-2 text-body text-navy">{t.pages.contact.responseValue}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow uppercase text-slate-2">{t.pages.contact.linkedinLabel}</dt>
                    <dd className="mt-2 text-body text-navy">
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline link-underline-out"
                      >
                        Vision Goal
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
