"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { organisation, postalAddressInline } from "@/lib/organisation";
import { useT } from "@/i18n/I18nProvider";

export default function PrivacyPage() {
  const t = useT();
  const { email, responsiblePerson } = organisation;

  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalPrivacy}
          lastUpdated="September 2026"
          active="/legal/privacy"
        >
          <p>
            This policy explains what personal data {organisation.legalName} collects through
            visiongoal.ch, why it is collected, on what legal basis, how long it is kept, and what
            rights you have. It is written to satisfy the Swiss Federal Act on Data Protection (FADP,
            revised version in force since 1 September 2023) and, where it applies, Regulation (EU)
            2016/679 (GDPR).
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Controller</h2>
          <p>
            {organisation.legalName}, {postalAddressInline} ({organisation.uid}) is the controller for
            the processing described here. {responsiblePerson.name} is the responsible contact. Written
            enquiries about data protection should go to{" "}
            <a href={`mailto:${email.privacy}`}>{email.privacy}</a>.
          </p>
          <p>
            We have not appointed a data protection officer, and we are not required to appoint one.
            We have no establishment in the European Union and have not appointed an EU
            representative; where a data subject in the EEA wishes to exercise GDPR rights, they may
            do so directly at the address above.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">What we collect and why</h2>
          <p>
            <strong>Contact form.</strong> The contact form collects the details you enter: first
            and last name, email address, organisation and role where you give them, the area of
            interest you select, and the message you write. Forms are submitted over an encrypted
            connection to our server and are never transmitted in a URL. There is no application or
            admission process.
          </p>
          <p>
            <strong>Dispatch subscription.</strong> The dispatch operates on a double opt-in. When you
            submit the form we send a confirmation link to the address you gave and nothing else
            happens; your address is added to the list only once you follow that link, and the link
            expires after seven days. We store the address together with the time of the request, the
            time of the confirmation, and the confirming IP address, which is the evidence that the
            subscription was asked for. The address inside the confirmation link is encrypted, so it
            is not legible in the link itself.
          </p>
          <p>
            <strong>Technical data.</strong> Our hosting provider records standard server log data —
            IP address, timestamp, requested resource, user agent, and referrer — for the purposes of
            operating and securing the site. We also record the submitting IP address and user agent
            alongside each form submission as evidence of consent and as a defence against automated
            abuse.
          </p>
          <p>
            <strong>Correspondence.</strong> Where you write to us by email, we keep the message and
            our reply.
          </p>
          <p>
            We do not use advertising cookies, third-party tracking pixels, social plug-ins, or
            profiling. We do not sell, rent, or trade personal data under any circumstances.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Legal bases</h2>
          <p>
            Under the GDPR, we rely on: pre-contractual steps taken at your request (Art. 6(1)(b))
            when you enquire about a learning experience or a Private Office introduction; consent
            (Art. 6(1)(a)) for the dispatch; and legitimate interests (Art. 6(1)(f)) for operating and
            securing the website, preventing abuse, and responding to enquiries. Under the FADP, processing is carried out in accordance with the
            principles of lawfulness, good faith, proportionality, and purpose limitation, and on the
            basis of your consent where consent is the stated basis above.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Enquiry data</h2>
          <p>
            What you write in an enquiry is read by Vision Goal only. Where an enquiry leads to a
            Private Office introduction, your details are shared with a specialist only once you have
            asked for that introduction, and only to the extent needed to make it. Enquiries that do
            not lead anywhere are deleted within twenty-four months of the last exchange.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Retention</h2>
          <p>
            Enquiry and contact correspondence is kept for twenty-four months from the last exchange.
            Dispatch subscriber records are kept until you unsubscribe, and the consent record for a
            further twelve months as proof that consent was given. Records forming part of a
            contractual relationship are retained for ten years in accordance with the Swiss Code of
            Obligations. Server logs are retained for a maximum of ninety days.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Recipients and processors</h2>
          <p>
            We use a small number of service providers, each bound by a data processing agreement:
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> — website hosting and content delivery. Data may be
              processed in the United States under an adequacy decision or standard contractual
              clauses.
            </li>
            <li>
              <strong>Resend (Plus Five Five, Inc.)</strong> — transactional email delivery for form
              notifications and confirmation messages.
            </li>
            <li>
              <strong>Cloudflare, Inc.</strong> — spam and abuse prevention on our forms, where the
              Turnstile challenge is enabled.
            </li>
          </ul>
          <p>
            Where personal data is transferred outside Switzerland or the EEA, the transfer is
            protected by the European Commission's standard contractual clauses together with the
            Swiss addendum recognised by the Federal Data Protection and Information Commissioner, or
            by an applicable adequacy decision. Beyond these providers, we disclose personal data only
            where we are legally obliged to do so.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Your rights</h2>
          <p>
            You have the right to obtain confirmation of whether we process your data and to receive a
            copy of it; to have inaccurate data corrected; to request erasure; to request restriction
            of processing or object to it; and to receive data you provided in a portable format.
            Where processing is based on consent, you may withdraw that consent at any time, which
            does not affect the lawfulness of processing carried out beforehand.
          </p>
          <p>
            Write to <a href={`mailto:${email.privacy}`}>{email.privacy}</a> to exercise any of these
            rights. I normally respond within 48 hours and complete requests within thirty days. We
            may ask you to confirm your identity before disclosing personal data.
          </p>
          <p>
            If you are not satisfied with our handling of a request, you may lodge a complaint with the
            Swiss Federal Data Protection and Information Commissioner (FDPIC), Feldeggweg 1, 3003
            Bern, or with the supervisory authority of your EEA country of residence.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Security</h2>
          <p>
            The site is served exclusively over HTTPS. Form submissions are transmitted as encrypted
            POST requests, so personal data never appears in a URL, a browser history entry, or a
            referrer header. Access to submitted data is limited to the curation team members who need
            it. We apply rate limiting and automated-abuse detection to all form endpoints.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Automated decision-making</h2>
          <p>
            We do not carry out automated decision-making or profiling that produces legal effects
            concerning you. Every enquiry is read and answered by a person.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Changes to this policy</h2>
          <p>
            We may update this policy to reflect changes in our processing or in the law. The version
            in force is the one published here, with the date of last revision shown at the head of
            this page.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
