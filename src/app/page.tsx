"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { HeroEditorial } from "@/components/modules/HeroEditorial";
import { TrustStrip } from "@/components/modules/TrustStrip";
import { PlatformPosture } from "@/components/modules/PlatformPosture";
import { ThreeProgrammesBlock } from "@/components/modules/ThreeProgrammesBlock";
import { HostsStrip } from "@/components/modules/HostsStrip";
import { EditorialNarrative } from "@/components/modules/EditorialNarrative";
import { CohortCalendar } from "@/components/modules/CohortCalendar";
import { AlumniSignal } from "@/components/modules/AlumniSignal";
import { InsightsList } from "@/components/modules/InsightsList";
import { PrivateCohortBanner } from "@/components/modules/PrivateCohortBanner";
import { CTABlock } from "@/components/modules/CTABlock";
import { useT } from "@/i18n/I18nProvider";

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
        <HostsStrip />
        <EditorialNarrative />
        <CohortCalendar />
        <AlumniSignal />
        <InsightsList />
        <PrivateCohortBanner />
        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
