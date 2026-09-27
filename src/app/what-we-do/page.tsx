"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { CTABlock } from "@/components/modules/CTABlock";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { photos } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const approach = [
  {
    title: "Applied, not theoretical",
    body: "Concepts are introduced where they actually operate — inside businesses, service environments and professional settings — so the learning has somewhere to land.",
  },
  {
    title: "Small by design",
    body: "Rooms are kept small so that everyone contributes and nobody is an audience. Size is a design decision, not a capacity limit.",
  },
  {
    title: "Practitioner-led",
    body: "Sessions are led by people who do the work, speaking in their own capacity. The platform is curatorial; it does not deliver regulated advice.",
  },
  {
    title: "Discretion by default",
    body: "Sessions are not recorded and participants are not named publicly without consent. What is said in the room stays usable but unattributed.",
  },
];

export default function WhatWeDoPage() {
  const t = useT();
  const lip = t.learningInPractice;

  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow="What we do"
          title={
            <>
              Curated learning,{" "}
              <span className="text-gold italic">connected to practice.</span>
            </>
          }
          lede="Vision Goal designs finance and business learning for entrepreneurs, executives and international professionals — built around real questions, worked through with practitioners, in Swiss settings where the subject can be seen at work."
        />

        {/* Two things Vision Goal does, side by side. This section used to
            hold only the Learning in Practice line, restating the hero lede
            beside an empty half-screen, and the page never mentioned the
            Private Office or linked to the concepts. Learning leads; the
            Private Office is presented as complementary. */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-7" duration={800}>
              <Eyebrow>{lip.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                {lip.headline}
              </h2>
              <p className="mt-6 text-body-lg text-slate max-w-prose">{lip.body}</p>
              <Link
                href="/experiences"
                className="group mt-8 inline-flex items-center gap-3 text-sm text-navy font-medium"
              >
                <span className="link-underline link-underline-out">See the learning concepts</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:border-l lg:border-hairline lg:pl-12" duration={800} delay={100}>
              <Eyebrow>Alongside the learning</Eyebrow>
              <h3 className="mt-6 font-serif text-2xl lg:text-[1.75rem] text-navy leading-[1.2]">
                Private Office
              </h3>
              <p className="mt-4 text-body text-slate max-w-prose">
                For individuals, families and business owners, Vision Goal can also help clarify
                objectives and arrange considered introductions to relevant Swiss specialists. Any
                regulated advice comes from the specialist, not from Vision Goal.
              </p>
              <Link
                href="/private-office"
                className="group mt-6 inline-flex items-center gap-3 text-sm text-navy font-medium"
              >
                <span className="link-underline link-underline-out">About the Private Office</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>The approach</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                Four principles that shape every room.
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
              {approach.map((item, i) => (
                <Reveal as="li" key={item.title} duration={700} delay={i * 70}>
                  <div className="flex gap-5">
                    <span className="font-serif text-gold text-2xl tabular leading-none pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl lg:text-2xl text-navy leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-body text-slate max-w-prose">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Photo 2 — kitchen, deliberately informal. Used small and
            behind-the-scenes as the client specified; never as a hero. */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal duration={800}>
                <Eyebrow>Behind the scenes</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.12] tracking-[-0.015em] max-w-prose">
                  Where service, process and margin actually meet.
                </h2>
                <p className="mt-8 text-body-lg text-slate max-w-prose">
                  Some of the most useful conversations happen away from the seminar room — in the
                  operational spaces where decisions about quality, cost and customer experience are
                  made every day.
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-6" duration={800} delay={100}>
              <figure>
                <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                  <Image
                    src={photos.kitchenBehindScenes}
                    alt="A small group receiving a walkthrough of a professional restaurant kitchen."
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-body-sm text-slate-2 max-w-prose">
                  Behind-the-scenes access connecting service quality, processes and customer
                  experience with practical management learning.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <CTABlock secondary={{ label: t.cta.seeConcepts, href: "/experiences" }} />
      </main>
      <Footer />
    </>
  );
}
