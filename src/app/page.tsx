"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { HeroEditorial } from "@/components/modules/HeroEditorial";
import { TrustStrip } from "@/components/modules/TrustStrip";
import { PlatformPosture } from "@/components/modules/PlatformPosture";
import { ThreeProgrammesBlock } from "@/components/modules/ThreeProgrammesBlock";
import { LearningInPractice } from "@/components/modules/LearningInPractice";
import { EditorialNarrative } from "@/components/modules/EditorialNarrative";
import { FounderNote } from "@/components/modules/FounderNote";
import { InsightsList } from "@/components/modules/InsightsList";
import { CTABlock } from "@/components/modules/CTABlock";
import { useT } from "@/i18n/I18nProvider";

// Homepage order per client brief: the approach is explained (PlatformPosture
// + the experience formats), then "Learning in Practice" with the real
// photography, then the About-adjacent founder note.
//
// Removed pre-launch: CohortCalendar (no dates confirmed), AlumniSignal
// (no alumni yet), HostsStrip (no confirmed external hosts),
// PrivateCohortBanner (reads as a product for sale).
export default function HomePage() {
  const t = useT();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-navy focus:text-cream focus:px-4 focus:py-2"
      >
        {t.nav.skipToContent}
      </a>
      <Header />
      <main id="main">
        <HeroEditorial />
        <TrustStrip />
        <PlatformPosture />
        <ThreeProgrammesBlock />
        <LearningInPractice />
        <EditorialNarrative />
        <FounderNote />
        <InsightsList />
        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
