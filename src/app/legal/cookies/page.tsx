"use client";

import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { organisation } from "@/lib/organisation";
import { useT } from "@/i18n/I18nProvider";

// This table must describe what the site actually sets — nothing aspirational.
// The former `vg-locale` preference cookie is gone: the site ships in English
// only, the language switcher is not rendered, and so that cookie is never
// written. Cloudflare's cookie appears only on pages carrying a form, and only
// when the Turnstile challenge is configured. Adding analytics later means
// adding a consent banner and a row here at the same time.
const cookies = [
  {
    name: "cf_chl_* / __cf_bm",
    provider: "Cloudflare, Inc.",
    category: "Strictly necessary",
    purpose:
      "Set only on pages carrying a form — the contact form and the dispatch sign-up — and only when the Turnstile challenge is configured, to distinguish people from automated submitters. Contains no advertising identifier.",
    duration: "Session to 30 minutes",
  },
];

export default function CookiesPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalCookies}
          lastUpdated="September 2026"
          active="/legal/cookies"
        >
          <p>
            This site uses the smallest possible number of cookies. It sets no advertising cookies, no
            analytics cookies, no social-media plug-ins, and no cross-site tracking of any kind. Every
            cookie listed below is strictly necessary for the site to work as you have asked it to,
            which is why no consent banner is shown.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Cookies in use</h2>
          <div className="overflow-x-auto">
            <table className="w-full mt-4 border hairline text-body-sm">
              <thead className="bg-cream-2 text-eyebrow uppercase text-slate-2">
                <tr>
                  <th className="text-left p-3 border-b hairline">Name</th>
                  <th className="text-left p-3 border-b hairline">Set by</th>
                  <th className="text-left p-3 border-b hairline">Category</th>
                  <th className="text-left p-3 border-b hairline">Purpose</th>
                  <th className="text-left p-3 border-b hairline">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((c) => (
                  <tr key={c.name} className="border-b hairline last:border-b-0">
                    <td className="p-3 font-mono text-[0.85rem] text-navy whitespace-nowrap">{c.name}</td>
                    <td className="p-3 text-slate">{c.provider}</td>
                    <td className="p-3 text-slate">{c.category}</td>
                    <td className="p-3 text-slate">{c.purpose}</td>
                    <td className="p-3 text-slate-2">{c.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl text-navy mt-6">Why there is no consent banner</h2>
          <p>
            Under the Swiss Telecommunications Act and the ePrivacy rules applied in the EEA, consent
            is required for cookies that are not strictly necessary to deliver a service you have
            requested. The one cookie above is strictly necessary — it protects our forms from automated
            abuse — so no consent is sought and none is stored. If we ever introduce analytics or any non-essential cookie, a consent
            banner will appear before that cookie is set and this table will be updated at the same
            time.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Controlling cookies yourself</h2>
          <p>
            You can delete or block cookies through your browser settings. Blocking
            Cloudflare&rsquo;s cookie may prevent our forms from accepting your submission, in which
            case please write to{" "}
            <a href={`mailto:${organisation.email.general}`}>{organisation.email.general}</a> instead.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Other storage</h2>
          <p>
            The contact form keeps what you type in the memory of your browser tab until you submit
            it. Nothing is written to local storage or session storage, and anything you have typed
            is discarded if you close the tab before submitting.
          </p>

          <p className="mt-8">
            For how personal data is handled more generally, see the{" "}
            <Link href="/legal/privacy">privacy policy</Link>.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
