"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="bg-cream-2 border-b hairline">
      <div className="container py-section-y md:py-section-y-lg">
        <Reveal duration={800}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-8 max-w-prose text-body-lg text-slate">{lede}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
