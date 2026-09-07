"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonAction } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea, Select } from "@/components/ui/Field";
import { ConsentCheckbox, FormError, Honeypot } from "@/components/forms/FormParts";
import { useFormSubmission } from "@/components/forms/useFormSubmission";
import { AREAS_OF_INTEREST } from "@/lib/forms/schemas";
import { organisation } from "@/lib/organisation";
import { useT } from "@/i18n/I18nProvider";

// The multi-step application form was removed pre-launch: there is no
// application or selection process while no programme is confirmed. This is
// the plain contact form the client specified, posted as JSON to /api/submit
// so the payload is validated server-side, rate limited and spam filtered
// rather than handed to the visitor's mail client.
export default function ContactPage() {
  const t = useT();
  const { submit, status, error, fieldErrors, isSubmitting, isSuccess } =
    useFormSubmission("contact");

  const consentText =
    "I agree that Vision Goal may store the details above in order to respond to this enquiry.";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submit(e.currentTarget);
  }

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.contact.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                Discuss an <span className="text-gold italic">Experience.</span>
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-slate">
                Tell us what you are working on and what you would want from a learning experience.
                A short conversation is the first step — there is no application process.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              {isSuccess ? (
                <Reveal duration={800}>
                  <div
                    role="status"
                    aria-live="polite"
                    className="border hairline p-10 lg:p-14 bg-cream-2"
                  >
                    <Eyebrow>Message sent</Eyebrow>
                    <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                      Thank you — your message has been received.
                    </h2>
                    <p className="mt-6 text-body text-slate max-w-prose">
                      We read every enquiry personally and will come back to you shortly. If it is
                      easier, you can also write directly to{" "}
                      <a href={`mailto:${organisation.email.general}`} className="text-navy underline">
                        {organisation.email.general}
                      </a>
                      .
                    </p>
                  </div>
                </Reveal>
              ) : (
                <form className="grid gap-7" onSubmit={onSubmit} noValidate>
                  <Honeypot />

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
                    <Field label={`${t.fields.organisation} (optional)`} htmlFor="organisation">
                      <TextInput id="organisation" name="organisation" autoComplete="organization" />
                    </Field>
                    <Field label={`${t.fields.role} (optional)`} htmlFor="role">
                      <TextInput id="role" name="role" autoComplete="organization-title" />
                    </Field>
                  </div>

                  <Field label="Area of interest" htmlFor="areaOfInterest" required>
                    <Select id="areaOfInterest" name="areaOfInterest" required defaultValue="">
                      <option value="" disabled>
                        Select an area
                      </option>
                      {AREAS_OF_INTEREST.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </Select>
                  </Field>

                  <Field
                    label="Message or objective"
                    htmlFor="message"
                    hint="What are you hoping to get out of it? A few sentences is plenty."
                    required
                  >
                    <Textarea id="message" name="message" required />
                  </Field>

                  <ConsentCheckbox text={consentText} />

                  <FormError error={error} fieldErrors={fieldErrors} />

                  <div>
                    <ButtonAction type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? "Sending…" : t.cta.submitEnquiry}
                    </ButtonAction>
                  </div>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-hairline">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.contact.officeEyebrow}</Eyebrow>
                <dl className="mt-8 grid gap-7">
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-2">
                      {t.pages.contact.emailLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${organisation.email.general}`}
                        className="font-serif text-navy text-lg hover:text-gold transition-colors duration-200"
                      >
                        {organisation.email.general}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-2">
                      {t.pages.contact.responseLabel}
                    </dt>
                    <dd className="mt-1 text-body text-slate">{t.pages.contact.responseValue}</dd>
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
