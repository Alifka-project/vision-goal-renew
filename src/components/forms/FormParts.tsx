"use client";

import { useEffect, useRef, useState } from "react";
import type { FieldErrors } from "./useFormSubmission";

/**
 * Bait field for automated submitters. Positioned off-screen rather than
 * `display:none` so that scripted fillers still see it, and hidden from
 * assistive technology so a real visitor never encounters it.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label htmlFor="company">Company (leave this field empty)</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}

export function ConsentCheckbox({
  text,
  tone = "light",
}: {
  text: string;
  tone?: "light" | "dark";
}) {
  return (
    <label
      className={`flex items-start gap-3 text-body-sm ${
        tone === "dark" ? "text-cream/85" : "text-slate"
      }`}
    >
      <input
        type="checkbox"
        name="consent"
        value="true"
        required
        data-consent-text={text}
        className="mt-1 accent-[#B8924A]"
      />
      <span>{text}</span>
    </label>
  );
}

// Second-person labels for the visitor. The notification email uses its own set,
// written from the reader's point of view instead.
const FIELD_LABELS: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  role: "Role",
  organisation: "Organisation",
  institution: "Institution",
  country: "Country",
  programme: "Programme",
  cohort: "Preferred cohort",
  objective: "What you want from the week",
  contribution: "What you bring",
  ref1Name: "First referee — name",
  ref1Email: "First referee — email",
  ref2Name: "Second referee — name",
  ref2Email: "Second referee — email",
  topic: "What you would like to discuss",
  timing: "Preferred timing",
  audience: "Audience",
  format: "Format",
  languages: "Languages",
  dates: "Preferred dates",
  description: "Description",
  subject: "Subject",
  message: "Message",
  consent: "Consent",
};

export function FormError({
  error,
  fieldErrors,
  tone = "light",
}: {
  error: string | null;
  fieldErrors?: FieldErrors;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) ref.current?.focus();
  }, [error]);

  if (!error) return null;

  // Each message is prefixed with the field it belongs to, otherwise a form with
  // three empty fields shows "This field is required." three times over.
  const details = Object.entries(fieldErrors ?? {}).flatMap(([field, messages]) =>
    messages.map((message) => ({
      key: `${field}:${message}`,
      text: FIELD_LABELS[field] ? `${FIELD_LABELS[field]} — ${message}` : message,
    })),
  );

  return (
    <div
      ref={ref}
      role="alert"
      tabIndex={-1}
      className={`border px-5 py-4 text-body-sm focus:outline-none ${
        tone === "dark"
          ? "border-gold-hi/50 bg-cream/10 text-cream"
          : "border-gold/50 bg-gold/5 text-navy"
      }`}
    >
      <p>{error}</p>
      {details.length > 0 ? (
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {details.map((detail) => (
            <li key={detail.key}>{detail.text}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; theme?: string },
      ) => string;
    };
  }
}

/**
 * Renders a Cloudflare Turnstile challenge when a site key is configured, and
 * nothing at all when it is not. The resulting token is submitted as an ordinary
 * form field and verified again on the server.
 */
export function Turnstile({ theme = "light" }: { theme?: "light" | "dark" }) {
  const container = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !container.current) return;

    const mount = () => {
      if (!window.turnstile || !container.current || container.current.childElementCount > 0) return;
      window.turnstile.render(container.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: setToken,
        theme,
      });
    };

    if (window.turnstile) {
      mount();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = mount;
    document.head.appendChild(script);
  }, [theme]);

  if (!TURNSTILE_SITE_KEY) return null;

  return (
    <div>
      <div ref={container} />
      <input type="hidden" name="turnstileToken" value={token} readOnly />
    </div>
  );
}
