"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { LegalShell } from "@/components/modules/LegalShell";
import { useT } from "@/i18n/I18nProvider";

export default function ImprintPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <LegalShell
          eyebrow={t.pages.legalSidebar}
          title={t.footer.legalImprint}
          lastUpdated="May 2026"
          active="/legal/imprint"
        >
          <h2 className="font-serif text-2xl text-navy">Operator</h2>
          <p>
            Vision Goal is operated by Vision Goal GmbH, a Swiss limited liability company. The
            information below satisfies the disclosure requirements under Swiss law.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Registered office</h3>
          <p>
            Vision Goal GmbH
            <br />
            [Registered address — to be confirmed before launch]
            <br />
            Switzerland
            <br />
            Commercial register / UID: [CHE-XXX.XXX.XXX — to be confirmed before launch]
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Contact</h3>
          <p>
            Email: info@visiongoal.ch
            <br />
            Editorial enquiries: editorial@visiongoal.ch
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Responsible for content</h3>
          <p>
            [Responsible person — to be confirmed before launch] is responsible for the editorial content
            of this website on behalf of Vision Goal GmbH. External links are provided for context; Vision
            Goal does not endorse or accept responsibility for the content of third-party sites.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Disclaimer</h3>
          <p>
            Vision Goal GmbH does not provide regulated financial, tax, or legal advice. Programme content
            is curatorial and educational. Practitioners present in their personal capacity; any regulated
            work is delivered separately by the named principals introduced through the platform.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
