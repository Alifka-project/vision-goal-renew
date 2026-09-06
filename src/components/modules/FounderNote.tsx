"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { hosts } from "@/lib/content";
import { useT } from "@/i18n/I18nProvider";

// Short founder section on the homepage. The separate Hosts page was
// removed pre-launch (no external hosts are confirmed), so the founder is
// introduced here in brief and in full on /about. No named external
// contributors appear anywhere until their participation is agreed.
export function FounderNote() {
  const t = useT();
  const founder = hosts[0];

  return (
    <section className="bg-cream-2 py-section-y md:py-section-y-lg border-y hairline">
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-4 flex justify-center lg:justify-start" duration={700}>
          <div className="aspect-square w-36 lg:w-48 bg-navy text-cream flex items-center justify-center font-serif text-4xl lg:text-5xl tracking-tight">
            {founder.initials}
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal duration={800}>
            <Eyebrow>{t.pages.about.curatorEyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.12] tracking-[-0.015em]">
              {founder.name}
            </h2>
            <p className="mt-3 text-body text-slate-2 max-w-prose">{founder.role}</p>
            <p className="mt-7 text-body-lg text-slate max-w-prose">
              Vision Goal is curated by its founder — connecting financial and strategic ideas with
              real operating environments, professional dialogue and peer exchange.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm text-navy font-medium"
            >
              <span className="link-underline link-underline-out">{t.nav.about}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
