"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { useT } from "@/i18n/I18nProvider";

export default function ApplicationTermsPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalApplicationTerms}
          lastUpdated="May 2026"
          active="/legal/application-terms"
        >
          <p>
            These terms govern applications to Vision Goal cohort programmes — Swiss Business Access
            Immersion, Private Swiss Banking & Wealth Intensive, and Swiss Finance Week / Topic Intensive.
            Submitting an application constitutes acceptance of these terms.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Application review</h2>
          <p>
            Applications are reviewed by the host curation team. We assess fit, specificity of objectives,
            and the calibre of contribution to the cohort. We aim to respond within ten business days of
            submission.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Acceptance and payment</h2>
          <p>
            On acceptance, the participant is invoiced for the programme fee. A seat is confirmed on
            settlement. Settlement is due within fourteen days of invoice and not less than thirty days
            before the cohort start.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Deferral</h2>
          <p>
            One deferral to the next cohort is permitted up to thirty days before the cohort start. Beyond
            that window, deferrals are at the discretion of the curation team and may incur an
            administration fee.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Cancellation and refunds</h2>
          <p>
            Cancellations more than thirty days before the cohort start are refunded less a ten percent
            administration fee. Cancellations within thirty days are not refunded; a deferral may still be
            considered. Vision Goal reserves the right to cancel a cohort due to insufficient enrolment;
            in that case, fees are refunded in full or rolled to the next cohort at the participant&rsquo;s
            choice.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Confidentiality</h2>
          <p>
            Cohort proceedings are confidential. On the Banking Intensive, chatham-house rules apply:
            participants may use what is said but may not identify the speaker or any other participant.
            Recordings are not permitted on any programme.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Conduct</h2>
          <p>
            Participation is conditional on professional conduct. The platform reserves the right to
            withdraw a participant whose conduct is incompatible with the cohort posture; in that case,
            fees are not refunded.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">Governing law</h2>
          <p>
            These terms are governed by the law of Switzerland. Any dispute is subject to the exclusive
            jurisdiction of the courts of Zurich.
          </p>

          <p className="text-slate-2 text-body-sm mt-8">
            Note: this is placeholder text for the redesign stage. The final application terms will be
            confirmed with external counsel before launch — and translated for each locale at that time.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
