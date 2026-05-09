"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const tileSrcs = [images.venueZurich, images.venueGeneva, images.venueAlps, images.venueInterior];

export function EditorialNarrative() {
  const t = useT();
  const tiles = t.editorial.tiles.map((tile, i) => ({ ...tile, src: tileSrcs[i] }));

  return (
    <section className="bg-cream-2 py-section-y md:py-section-y-lg">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-14" duration={800}>
          <div className="lg:col-span-7">
            <Eyebrow>{t.editorial.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.75rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {t.editorial.headline} <span className="text-gold italic">{t.editorial.headlineGold}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:text-right text-body text-slate max-w-prose lg:ml-auto">
            {t.editorial.side}
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {tiles.map((tile, i) => (
            <Reveal as="li" key={tile.label} duration={800} delay={i * 100}>
              <figure className="group relative aspect-[3/4] overflow-hidden bg-navy">
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(6,20,58,0) 0%, rgba(6,20,58,0.65) 100%)",
                  }}
                />
                <figcaption className="absolute bottom-5 left-5 right-5">
                  <p className="font-serif text-cream text-xl lg:text-2xl leading-tight">
                    {tile.label}
                  </p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-cream/80">
                    {tile.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
