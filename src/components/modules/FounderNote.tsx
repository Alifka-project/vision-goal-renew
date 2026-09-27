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
//
// Kept deliberately compact: the monogram sits beside the name instead of
// floating alone in a wide column (which left ~half the band empty), and
// the body says why the founder matters rather than repeating the Learning
// in Practice sentence a few screens above. No former employers are named
// on the homepage; the full record is on /about#founder.
export function FounderNote() {
  const t = useT();
  const founder = hosts[0];

  return (
    <section className="bg-cream py-section-y border-y hairline">
      <Reveal className="container grid lg:grid-cols-12 gap-8 lg:gap-12 items-center" duration={800}>
        <div className="lg:col-span-5 flex items-center gap-5 lg:gap-7">
          <div
            aria-hidden="true"
            className="aspect-square w-20 lg:w-28 shrink-0 bg-navy text-cream flex items-center justify-center font-serif text-2xl lg:text-4xl tracking-tight"
          >
            {founder.initials}
          </div>
          <div>
            <Eyebrow>Founder & Curator</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl lg:text-[2.5rem] text-navy leading-[1.1] tracking-[-0.015em]">
              {founder.name}
            </h2>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-body-lg text-slate max-w-prose">
            Vision Goal grew out of more than thirty years in Swiss finance, banking and
            insurance. Each learning concept starts from the questions owners, executives and
            families face in practice — not from a syllabus.
          </p>
          <Link
            href="/about#founder"
            className="group mt-6 inline-flex items-center gap-3 text-sm text-navy font-medium"
          >
            <span className="link-underline link-underline-out">The founder’s background</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
