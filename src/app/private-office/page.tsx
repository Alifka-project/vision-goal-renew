"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { images } from "@/lib/images";
import { useT } from "@/i18n/I18nProvider";

const whoFor = [
  {
    title: "Post-liquidity principals",
    body: "Founders and operators after a sale or partial liquidity event, deciding how to think about a new balance-sheet shape.",
  },
  {
    title: "Family principals",
    body: "Members of single-family offices considering a Swiss seat for part of the family book, or refining an existing one.",
  },
  {
    title: "International decision-makers",
    body: "Senior executives and partners weighing a Swiss anchor — operating, banking, or both — without an existing local relationship.",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "A confidential conversation",
    body: "A single, no-fee call with a senior member of the curation team. We do not advise; we listen. The aim is to understand the problem clearly enough to know who should be in the next room.",
  },
  {
    n: "02",
    title: "A curated shortlist",
    body: "If we believe the platform can help, we prepare a short list — typically two to three principals from our vetted network of Swiss bankers, family-office partners, or operators. Each is named, with a one-page rationale.",
  },
  {
    n: "03",
    title: "Considered introduction",
    body: "We make a single, considered introduction. We do not maintain a leaderboard; we do not run beauty contests. After the introduction, the relationship is yours.",
  },
  {
    n: "04",
    title: "Ongoing as appropriate",
    body: "If the next question is curatorial — a cohort, a private seminar, a dispatch — we can host it. If it is operational, we step back. We are not the advisor; we are how you found the right one.",
  },
];

const standards = [
  {
    title: "No commission, no rebates",
    body: "We do not accept retrocessions, finder’s fees, or rebates from the principals we introduce. The platform is paid by an annual programme of fees from cohort participants and a flat per-introduction administration fee, disclosed upfront.",
  },
  {
    title: "Discretion as default",
    body: "Conversations are confidential. We do not name clients. The Private Office register is shared only with the introduced principals on a need-to-know basis.",
  },
  {
    title: "Not regulated advice",
    body: "We are not a wealth manager, not a regulated advisor, and not a placement agent. We convene, we curate, and we introduce. The principals you meet are the ones who deliver the regulated work.",
  },
];

export default function PrivateOfficePage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        {/* Hero */}
        <section className="relative bg-navy-deep text-cream overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.programmeBanking}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(6,20,58,0.78) 0%, rgba(6,20,58,0.92) 100%)",
              }}
            />
          </div>
          <div className="container relative py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="block h-px w-10 bg-gold" />
                <span className="text-eyebrow uppercase text-cream/85">
                  {t.nav.privateOffice} · By introduction
                </span>
              </div>
              <h1 className="mt-8 font-serif text-cream text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.04] tracking-[-0.02em] max-w-4xl">
                Curated introductions for principals.
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-cream/85">
                For senior individuals — post-liquidity founders, family principals, international
                decision-makers — who need to find the right Swiss banker, partner, or operator. We
                listen, we curate, and we introduce. We do not advise.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/apply/private-consultation" variant="on-dark">
                  Request a confidential call
                </Button>
                <Button href="/about" variant="ghost-on-dark">
                  How we operate →
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Who it’s for */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Who it is for</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                Three principal profiles.
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
              {whoFor.map((item, i) => (
                <Reveal as="li" key={item.title} duration={700} delay={i * 80}>
                  <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                Four steps. <span className="text-gold italic">No more.</span>
              </h2>
            </Reveal>
            <ol className="mt-14 grid md:grid-cols-2 gap-10 lg:gap-12">
              {howItWorks.map((step, i) => (
                <Reveal as="li" key={step.n} duration={700} delay={i * 80}>
                  <div className="flex gap-6">
                    <span className="font-serif text-gold text-3xl tabular leading-none pt-1 shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-navy leading-tight">{step.title}</h3>
                      <p className="mt-4 text-body text-slate max-w-prose">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Engagement specifics */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal duration={800}>
                <Eyebrow>Engagement</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em]">
                  What it costs. What it covers.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <dl className="border-t hairline">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Initial call</dt>
                  <dd className="md:col-span-2 text-body text-navy">No fee · 45 minutes · confidential</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Curated shortlist</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    CHF 4,500 administration fee · two to three named principals · one-page rationale per principal
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Introduction</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    Included in the shortlist fee · single considered introduction
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Indicative engagement size</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    The principals on our register typically take engagements from CHF 25M.
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Response time</dt>
                  <dd className="md:col-span-2 text-body text-navy">Within 48 hours.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="bg-cream-2 py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Standards</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                What we do, and what we don’t.
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
              {standards.map((item, i) => (
                <Reveal as="li" key={item.title} duration={700} delay={i * 80}>
                  <h3 className="font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-cream py-section-y md:py-section-y-lg">
          <div className="container max-w-4xl">
            <Reveal duration={800}>
              <Eyebrow tone="cream">A short note</Eyebrow>
              <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3.5rem] leading-[1.05] tracking-[-0.015em]">
                If the next call is the right call,{" "}
                <span className="text-gold-hi italic">we will know in forty-five minutes.</span>
              </h2>
              <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/apply/private-consultation" variant="on-dark">
                  Request a confidential call
                </Button>
                <Link
                  href="mailto:info@visiongoal.ch"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-cream/85 hover:text-gold-hi transition-colors duration-200"
                >
                  <span className="link-underline link-underline-out">Or write directly</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
