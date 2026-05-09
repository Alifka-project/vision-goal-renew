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
            Vision Goal is operated by the platform legal entity registered in Zurich, Switzerland. The
            information below satisfies the disclosure requirements under Swiss law.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Registered office</h3>
          <p>
            Vision Goal LLC
            <br />
            Pfäffikon SZ, Switzerland
            <br />
            Commercial register: CHE-XXX.XXX.XXX (placeholder — replace with the real UID before launch)
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Contact</h3>
          <p>
            Email: info@visiongoal.ch
            <br />
            Editorial enquiries: editorial@visiongoal.ch
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Responsible for content</h3>
          <p>
            The platform team is responsible for the editorial content of the website. External links are
            provided for context; the platform does not endorse or accept responsibility for the content of
            third-party sites.
          </p>

          <h3 className="font-serif text-xl text-navy mt-6">Disclaimer</h3>
          <p>
            Vision Goal does not provide regulated financial, tax, or legal advice. Programme content is
            curatorial and educational. Practitioners present in their personal capacity.
          </p>

          <p className="text-slate-2 text-body-sm mt-8">
            Note: this is placeholder text for the redesign stage. The final imprint will be confirmed with
            external counsel before launch — and translated for each locale at that time.
          </p>
        </LegalShell>
      </main>
      <Footer />
    </>
  );
}
