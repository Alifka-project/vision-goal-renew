"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="bg-cream-2 border-b hairline">
      <div className="container py-section-y md:py-section-y-lg">
        <div className="fade-in-soft">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.25rem] font-bold md:text-[3.5rem] lg:text-[4.25rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-8 max-w-prose text-body-lg text-slate">{lede}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
