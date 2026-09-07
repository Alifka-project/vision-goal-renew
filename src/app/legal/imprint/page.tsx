"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { organisation } from "@/lib/organisation";
import { useT } from "@/i18n/I18nProvider";

export default function ImprintPage() {
  const t = useT();
  const { address, responsiblePerson, email } = organisation;

  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalImprint}
          lastUpdated="August 2026"
          active="/legal/imprint"
        >
          <h2 className="font-serif text-2xl text-navy">Operator of this website</h2>
          <p>
            This website is operated by {organisation.legalName}, a company incorporated under Swiss
            law. The information below is published in accordance with Article 3(1)(s) of the Swiss
            Federal Act against Unfair Competition (UWG).
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Registered particulars</h3>
          <p>
            {organisation.legalName}
            <br />
            {address.line1}
            <br />
            {address.postalCode} {address.city}
            <br />
            {address.country}
          </p>
          <p>
            Legal form: {organisation.legalForm}
            <br />
            Registered seat: {organisation.registeredSeat}
            <br />
            Commercial register: {organisation.registerOffice}
            <br />
            Enterprise identification number (UID): {organisation.uid}
            <br />
            Entered in the commercial register: {organisation.incorporated}
            <br />
            Nominal share capital: {organisation.shareCapital}
            <br />
            Registered purpose: {organisation.purpose}
          </p>
          <p>
            {organisation.vatNumber
              ? `Swiss VAT number: ${organisation.vatNumber}`
              : "The company is not currently entered in the Swiss VAT register. Programme fees are therefore shown without a VAT component."}
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Contact</h3>
          <p>
            Email: <a href={`mailto:${email.general}`}>{email.general}</a>
            <br />
            Telephone: <a href={`tel:${organisation.phone.replace(/\s+/g, "")}`}>{organisation.phone}</a>
            <br />
            Editorial enquiries: <a href={`mailto:${email.editorial}`}>{email.editorial}</a>
            <br />
            Data protection: <a href={`mailto:${email.privacy}`}>{email.privacy}</a>
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Person responsible for the content</h3>
          <p>
            {responsiblePerson.name}, {responsiblePerson.role}, at the registered address above. The
            same person is the contact point for data-protection matters.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Regulatory status</h3>
          <p>
            {organisation.legalName} provides training, coaching, and business-access services. It is
            not a bank, securities firm, asset manager, fund manager, or insurance intermediary, and
            it holds no authorisation from the Swiss Financial Market Supervisory Authority (FINMA).
            Nothing on this website constitutes investment, tax, or legal advice, or an offer or
            solicitation to acquire any financial instrument. Where regulated services are required,
            they are provided by separately licensed practitioners engaged directly by the client.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Liability for content</h3>
          <p>
            The content of this website is prepared with care but is provided without warranty as to
            accuracy, completeness, or currency. {organisation.legalName} accepts no liability for
            loss arising from the use of, or reliance on, material published here, to the extent
            permitted by Swiss law.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Liability for external links</h3>
          <p>
            This website links to third-party sites, including academic repositories and the websites
            of institutions referred to in editorial material. Those sites are outside our control and
            we accept no responsibility for their content. Links are provided for reference and do not
            imply endorsement.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Copyright</h3>
          <p>
            All text, layout, graphics, and photographs on this website are the property of{" "}
            {organisation.legalName} or are used under licence, and are protected by copyright.
            Reproduction, distribution, or use in any medium requires prior written consent, except
            for short quotation with attribution.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Governing law and jurisdiction</h3>
          <p>
            These terms and the use of this website are governed by {organisation.governingLaw}. The
            place of jurisdiction is {organisation.jurisdiction}, subject to any mandatory place of
            jurisdiction provided by law.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
