"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { useT } from "@/i18n/I18nProvider";

export default function PrivacyPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalPrivacy}
          lastUpdated="May 2026"
          active="/legal/privacy"
        >
          <p>
            This policy explains what personal information Vision Goal collects, how it is used, the legal
            bases for processing, and your rights under Swiss FADP and EU GDPR. The platform is operated
            from Switzerland and processes information accordingly.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">What we collect</h2>
          <p>
            We collect information you provide through application, consultation, and enquiry forms; basic
            analytics on website use; and email-correspondence content where you initiate contact.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Why we collect it</h2>
          <p>
            To assess applications, schedule consultations, respond to enquiries, deliver programmes you
            apply to, and operate the platform. We do not sell or rent personal information.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Applicant data</h2>
          <p>
            Application content is read by the host curation team only. Referees are not contacted without
            your explicit consent. Successful applications are retained for the duration of the cohort and
            for a defined alumni-administration period thereafter; unsuccessful applications are deleted
            within ninety days of decision.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Legal bases</h2>
          <p>
            Processing is based on consent (where given), contract (programme delivery), and legitimate
            interests (operating the platform), as defined in FADP and GDPR.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Your rights</h2>
          <p>
            You may request access, correction, deletion, or portability of your information at any time by
            writing to privacy@visiongoal.ch. You may withdraw consent at any time without affecting
            processing carried out before the withdrawal.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Third-party processors</h2>
          <p>
            The platform uses a limited set of vetted processors for hosting, analytics, email delivery,
            and consent management. Each is bound by a data processing agreement aligned with FADP and
            GDPR.
          </p>

          <p className="text-slate-2 text-body-sm mt-8">
            Note: this is placeholder text for the redesign stage. The final privacy policy will be
            confirmed with external counsel before launch — and translated for each locale at that time.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
