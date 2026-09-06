"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { photos } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

// "Learning in Practice" — the section that grounds the site in real
// events rather than stock imagery. Photo 1 (the larger group outside
// Orsini) is shown in full portrait composition: `object-contain` on a
// navy ground so nobody is cropped out of frame, per the client's
// explicit request. No text or logo is placed over the photograph.
//
// Wording note: these are examples of learning experiences the founder
// organised or led — deliberately NOT described as Vision Goal alumni or
// as participants in any current programme.
export function LearningInPractice() {
  const t = useT();
  const lip = t.learningInPractice;

  return (
    <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal duration={800}>
              <Eyebrow>{lip.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] lg:text-[3rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-[18ch]">
                {lip.headline}
              </h2>
              <p className="mt-8 text-body-lg text-slate max-w-prose">{lip.body}</p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" duration={800} delay={100}>
            <figure>
              {/*
               * object-contain keeps the complete portrait composition —
               * the group is never cropped. The navy ground matches the
               * brand palette so the letterboxing reads as intentional.
               */}
              <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-navy">
                <Image
                  src={photos.orsiniSeniorGroup}
                  alt="A group of professionals gathered on the steps of a Swiss restaurant at the close of a learning session."
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-body-sm text-slate-2 max-w-prose">
                {lip.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
