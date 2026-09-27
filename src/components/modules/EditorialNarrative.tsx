"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const tileSrcs = [images.venueZurich, images.venueGeneva, images.venueAlps, images.venueInterior];
// Per-tile crop focus, by the same index as tileSrcs. The Lavaux frame is a
// wide landscape; without this the portrait tile keeps only open water and
// loses the village that makes it read as Lake Geneva.
const tileFocus = ["object-center", "object-[15%_70%]", "object-center", "object-center"];
// Display order. The real hotel-lounge photograph (index 3) is shown second,
// so on phones it sits in the top row, a full row away from the founder note
// that follows this band: she must not read as the founder's colleague.
// Reordering here keeps each label with its image in every locale.
const order = [0, 3, 1, 2];

export function EditorialNarrative() {
  const t = useT();
  const tiles = order.map((i) => ({ ...t.editorial.tiles[i], src: tileSrcs[i], focus: tileFocus[i] }));

  return (
    <section className="bg-cream-2 py-section-y md:py-section-y-lg">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12" duration={800}>
          <div className="lg:col-span-7">
            <Eyebrow>{t.editorial.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md md:text-[3rem] lg:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
              {t.editorial.headline} <span className="text-gold italic">{t.editorial.headlineGold}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-body-lg text-slate max-w-prose">
            {t.editorial.side}
          </p>
        </Reveal>

        {/* Labels sit under the photographs, not on them: overlaid, they
            crossed the person in the hotel-lounge photo and were hard to
            read on the bright alpine frames. */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 lg:gap-x-5">
          {tiles.map((tile, i) => (
            <Reveal as="li" key={tile.label} duration={800} delay={i * 100}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${tile.focus} transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]`}
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-serif text-navy text-lg lg:text-xl leading-tight">{tile.label}</p>
                  <p className="mt-1 text-body-sm text-slate-2 leading-snug">{tile.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
