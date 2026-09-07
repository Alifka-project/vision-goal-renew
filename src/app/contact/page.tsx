"use client";

import { useState } from "react";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonAction } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { Field, TextInput, Textarea, Select } from "@/components/ui/Field";
import { useT } from "@/i18n/I18nProvider";

const CONTACT_EMAIL = "info@visiongoal.ch";

// Areas of interest, exactly as specified in the client brief.
const AREAS_OF_INTEREST = [
  "Executive learning",
  "Tailored organisational programme",
  "Finance workshop",
  "Swiss business experience",
  "Speaking or teaching enquiry",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

// The multi-step application form was removed pre-launch: there is no
// application or selection process while no programme is confirmed. This
// is a plain contact form. With no backend wired up yet it hands off to
// the visitor's mail client addressed to info@visiongoal.ch — swap the
// `submit` body for a POST to an API route once an endpoint exists.
export default function ContactPage() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const value = (k: string) => String(form.get(k) ?? "").trim();

    const firstName = value("firstName");
    const lastName = value("lastName");
    const email = value("email");
    const area = value("areaOfInterest");
    const message = value("message");
    const consent = form.get("consent") != null;

    if (!firstName || !lastName || !email || !area || !message || !consent) {
      setStatus("error");
      return;
    }

    const lines = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Organisation: ${value("organisation") || "—"}`,
      `Role: ${value("role") || "—"}`,
      `Area of interest: ${area}`,
      `Privacy consent: agreed`,
      "",
      message,
    ];

    const subject = encodeURIComponent(`Vision Goal enquiry — ${area}`);
    const body = encodeURIComponent(lines.join("\n"));

    try {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
              {status === "sent" ? (
                <Reveal duration={800}>
                  <div
                    role="status"
                    aria-live="polite"
                    className="border hairline p-10 lg:p-14 bg-cream-2"
                  >
                    <Eyebrow>Message ready</Eyebrow>
                    <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-navy leading-tight">
                      Thank you — your message is on its way.
                    </h2>
                    <p className="mt-6 text-body text-slate max-w-prose">
                      Your email client should have opened with the message prepared. If it did not,
                      write directly to{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-sm text-navy font-medium link-underline link-underline-out"
                    >
                      Send another message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form className="grid gap-7" onSubmit={submit} noValidate>
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

                  <label className="flex items-start gap-3 text-body-sm text-slate">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#0a1f44]"
                    />
                    <span>{t.fields.consentContact}</span>
                  </label>

                  {status === "error" ? (
                    <p role="alert" className="text-body-sm text-[#8b2f2f]">
                      Please complete the required fields — first name, last name, email, area of
                      interest, your message, and the privacy consent.
                    </p>
                  ) : null}

                  <div>
                    <ButtonAction type="submit" variant="primary" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : t.cta.submitEnquiry}
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
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-serif text-navy text-lg hover:text-gold transition-colors duration-200"
                      >
                        {CONTACT_EMAIL}
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
