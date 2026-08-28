"use client";

import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { organisation, postalAddressInline } from "@/lib/organisation";
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
          lastUpdated="August 2026"
          active="/legal/application-terms"
        >
          <p>
            These terms govern applications to, and participation in, the cohort programmes operated
            by {organisation.legalName}, {postalAddressInline} ({organisation.uid}) — the Swiss
            Business Access Immersion, the Private Swiss Banking &amp; Wealth Intensive, and Swiss
            Finance Week. Submitting an application constitutes acceptance of these terms.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">1. Scope of the service</h2>
          <p>
            {organisation.legalName} provides training, coaching, and business-access services. It is
            not a bank, securities firm, asset manager, or insurance intermediary and holds no FINMA
            authorisation. No part of a programme constitutes investment, tax, or legal advice. Hosts
            and faculty attend in their personal capacity and do not act as advisers to participants.
            Introductions arranged through a programme are introductions only; any subsequent
            engagement is a matter between the participant and the third party.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">2. Application and review</h2>
          <p>
            Applications are reviewed by the curation team, which assesses fit, the specificity of the
            applicant&rsquo;s objectives, and the contribution they would make to the cohort. We reply
            within five business days of submission. Places are limited to twelve participants per
            cohort and no more than two participants from any single institution. A place is offered
            at our discretion and we are not obliged to give reasons beyond those we volunteer.
          </p>
          <p>
            Referees named in an application will not be contacted without the applicant&rsquo;s prior
            written consent to that specific contact.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">3. Acceptance, fees, and payment</h2>
          <p>
            Programme fees are published on each programme page and are stated in Swiss francs. On
            acceptance the participant is invoiced for the full fee. Payment falls due within fourteen
            days of the invoice date and in any event no later than thirty days before the programme
            start date. A place is confirmed only on receipt of cleared funds. Bank charges and
            currency-conversion costs are borne by the participant.
          </p>
          <p>
            The fee covers the items listed under &ldquo;Includes&rdquo; on the relevant programme
            page. Travel, accommodation, and personal expenses are excluded unless expressly stated
            otherwise.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">4. Right of withdrawal</h2>
          <p>
            Where the participant is a consumer within the meaning of Article 40a et seq. of the Swiss
            Code of Obligations, the statutory right of revocation applies and may be exercised within
            fourteen days of concluding the contract, in writing, without giving reasons. Fees already
            paid are refunded in full within thirty days of a valid revocation.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">5. Deferral</h2>
          <p>
            One deferral to the next scheduled cohort of the same programme is permitted at no charge
            if requested in writing more than thirty days before the programme start date. Beyond that
            window a deferral is at the discretion of the curation team and may attract an
            administration fee of up to ten per cent of the programme fee. A deferred place is held
            for twelve months.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">6. Cancellation and refunds</h2>
          <p>
            Cancellation by the participant more than thirty days before the start date is refunded
            less an administration fee of ten per cent of the programme fee. Cancellation within
            thirty days of the start date is not refundable, although a deferral under clause 5 may
            still be offered. A place may be transferred to another individual from the same
            organisation, subject to that individual meeting the admission criteria.
          </p>
          <p>
            {organisation.legalName} may cancel or reschedule a cohort where enrolment is
            insufficient, where a host becomes unavailable, or for reasons beyond its reasonable
            control. In that event the participant may choose a full refund of fees paid or a transfer
            to the next scheduled cohort. Our liability in these circumstances is limited to the fees
            paid; we do not reimburse travel or accommodation costs, and participants are advised to
            arrange their own insurance and to hold bookings that can be changed.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">7. Confidentiality</h2>
          <p>
            Programme proceedings are confidential. On the Private Swiss Banking &amp; Wealth
            Intensive, and in any session designated as such, the Chatham House Rule applies:
            participants are free to use the information received, but neither the identity nor the
            affiliation of any speaker or other participant may be revealed. Audio, video, and
            photographic recording is not permitted on any programme. Notes are for personal use only.
            The cohort register is shared with participants alone.
          </p>
          <p>
            These obligations survive the end of the programme indefinitely. A participant in breach
            may be removed without refund, and {organisation.legalName} reserves all other remedies.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">8. Use of participant identity</h2>
          <p>
            We do not publish the name, likeness, employer, or quoted words of any participant without
            that participant&rsquo;s specific prior written consent, given per use. Consent may be
            withdrawn at any time, and we will remove the material from any surface we control within
            thirty days.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">9. Conduct</h2>
          <p>
            Participation is conditional on professional conduct toward other participants, hosts,
            venue staff, and the businesses visited. Soliciting other participants commercially,
            recording sessions, and disclosing confidential material are grounds for immediate removal
            without refund.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">10. Programme content</h2>
          <p>
            We reserve the right to substitute hosts, sessions, or site visits of equivalent standing
            where circumstances require. Programme materials remain the intellectual property of{" "}
            {organisation.legalName} or the host who prepared them, and are licensed to the
            participant for personal use only.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">11. Liability</h2>
          <p>
            {organisation.legalName} is liable for damage caused intentionally or through gross
            negligence, and for personal injury, without limitation. All other liability is excluded
            to the extent permitted by Swiss law. In particular we accept no liability for the
            outcome of any introduction, for decisions taken on the basis of programme content, or for
            the acts or omissions of third parties including hosts, venues, and the businesses
            visited.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">12. Data protection</h2>
          <p>
            Personal data submitted with an application is processed as described in the{" "}
            <Link href="/legal/privacy">privacy policy</Link>, which forms part of these terms.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">13. Amendments and severability</h2>
          <p>
            The version of these terms in force at the date of application governs that application.
            If any provision is held invalid, the remainder continues in effect and the invalid
            provision is replaced by one that comes closest to its commercial intent.
          </p>

          <h2 className="font-serif text-2xl text-navy mt-6">14. Governing law and jurisdiction</h2>
          <p>
            These terms are governed by {organisation.governingLaw}, excluding its conflict-of-laws
            rules and the United Nations Convention on Contracts for the International Sale of Goods.
            The exclusive place of jurisdiction is {organisation.jurisdiction}, subject to any
            mandatory place of jurisdiction available to a consumer under Swiss law.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
