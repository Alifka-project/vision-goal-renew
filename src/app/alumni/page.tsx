"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { CTABlock } from "@/components/modules/CTABlock";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

// Pre-launch posture: this route used to render named alumni testimonials,
// past cohort lines and headline stats. Those will return once the first
// programmes have actually taken place. Until then the page reads as an
// aspirational statement only — truthful, future-ready, and aligned with
// the user's explicit feedback. Route kept at /alumni so any inbound link
// continues to resolve; the public label in the nav is now "Network".
export default function NetworkPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.alumni.eyebrow}
          title={
            <>
              {t.pages.alumni.titlePart1}{" "}
              <span className="text-gold italic">{t.pages.alumni.titleGold}</span>
            </>
          }
          lede={t.pages.alumni.lede}
        />

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <Reveal duration={800}>
                  <Eyebrow>{t.pages.alumni.postureEyebrow}</Eyebrow>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal duration={800}>
                  <h2 className="font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                    {t.pages.alumni.postureHeadline}
                  </h2>
                  <p className="mt-8 text-body-lg text-slate max-w-prose">
                    {t.pages.alumni.postureBody}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
