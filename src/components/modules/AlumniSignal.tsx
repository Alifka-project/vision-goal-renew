"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { alumniVoices } from "@/lib/content";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

export function AlumniSignal() {
  const t = useT();
  const featured = alumniVoices[0];

  return (
    <section className="bg-navy text-cream relative overflow-hidden">
      <div className="grid lg:grid-cols-12 items-stretch">
        <div className="relative lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:min-h-[640px]">
          <Image
            src={images.alumniRoom}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,20,58,0.0) 0%, rgba(6,20,58,0.5) 100%)",
            }}
          />
        </div>

        <div className="lg:col-span-6 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
          <Reveal duration={800}>
            <Eyebrow tone="cream">{t.alumni.eyebrow}</Eyebrow>
            <span aria-hidden="true" className="mt-8 block font-serif text-gold-hi text-7xl lg:text-8xl leading-none">
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-cream text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.25] tracking-[-0.005em] max-w-[36ch]">
              {featured.quote}
            </blockquote>
            <footer className="mt-10 pt-7 border-t border-cream/15 flex items-center gap-4">
              <div className="w-10 h-10 bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-hi font-serif text-sm">
                {featured.attribution
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="text-cream text-body-sm">{featured.attribution}</p>
                <p className="text-cream/60 text-[0.72rem] uppercase tracking-[0.16em] mt-0.5">
                  {featured.cohortLabel}
                </p>
              </div>
            </footer>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
