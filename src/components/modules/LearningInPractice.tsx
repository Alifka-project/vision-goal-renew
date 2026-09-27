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
          <div className="lg:col-span-6">
            <Reveal duration={800}>
              <Eyebrow>{lip.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] lg:text-[3rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-[18ch]">
                {lip.headline}
              </h2>
              <p className="mt-8 text-body-lg text-slate max-w-prose">{lip.body}</p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" duration={800} delay={100}>
            <figure>
              {/*
               * The source is 768×1024 (3:4). A 4:5 frame is within ~5% of
               * that, so object-cover fills it without letterboxing and
               * without cutting anyone out of the group — the earlier
               * object-contain treatment left wide empty navy panels either
               * side, which the client asked to remove. Capped and centred
               * so the portrait reads at a natural size rather than
               * stretching the full column width on large screens.
               */}
              <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src={photos.orsiniSeniorGroup}
                  alt="A group of professionals gathered on the steps of a Swiss restaurant at the close of a learning session."
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 text-body-sm text-slate-2 max-w-prose">
                {lip.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/*
         * What a participant actually takes away. The site was strong on how
         * selective the rooms are and thin on the practical learning value,
         * so this states the questions a session is built around and where
         * academic frameworks, practitioner judgement and a real organisation
         * meet.
         */}
        <div className="mt-20 lg:mt-28 pt-14 lg:pt-16 border-t hairline">
          <Reveal duration={800}>
            <Eyebrow>{lip.exploreEyebrow}</Eyebrow>
            <h3 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-[24ch]">
              {lip.exploreHeadline}
            </h3>
          </Reveal>

          <ul className="mt-12 grid sm:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12">
            {lip.exploreItems.map((item, i) => (
              <Reveal as="li" key={item.title} duration={700} delay={i * 70}>
                <div className="flex gap-5">
                  <span className="font-serif text-gold text-2xl tabular leading-none pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-serif text-xl lg:text-2xl text-navy leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-body text-slate max-w-prose">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
