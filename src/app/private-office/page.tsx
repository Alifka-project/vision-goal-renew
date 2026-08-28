"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { images } from "@/lib/images";
import { organisation, responseStandard } from "@/lib/organisation";
import { useT } from "@/i18n/I18nProvider";

const whoFor = [
  {
    title: "Post-liquidity principals",
    body: "Founders and operators after a sale or partial liquidity event, thinking about a new balance-sheet shape and who should sit beside them in Switzerland.",
  },
  {
    title: "Family principals",
    body: "Members of single-family offices considering a Swiss seat for part of the family book, or refining an existing one — with introductions that respect discretion.",
  },
  {
    title: "International decision-makers",
    body: "Senior executives, founders, and partners weighing a Swiss anchor — operating, banking, or both — who would rather start from a short list of specific people than from a search.",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "A confidential conversation",
    body: "One call, no fee, forty-five minutes. We listen closely — the aim is to understand the problem precisely enough to know who in Switzerland you should be sitting next to.",
  },
  {
    n: "02",
    title: "A short list",
    body: "Two or three Swiss principals — private bankers, family-office partners, operating peers — each chosen against your situation, with a one-page rationale you can act on.",
  },
  {
    n: "03",
    title: "One introduction",
    body: "A single introduction, made warmly. After that the relationship is yours; we do not run beauty contests and we do not keep score.",
  },
  {
    n: "04",
    title: "What follows",
    body: "If the next step is a private seminar, a programme place, or a behind-the-scenes visit, we host it. If it is operational, the principal you have met carries it from there.",
  },
];

const standards = [
  {
    title: "No commission, no rebates",
    body: "Vision Goal does not accept retrocessions, finder’s fees, or rebates from the principals it introduces. The platform is paid by programme fees and a flat per-introduction administration fee, disclosed upfront. Your interests stay aligned with ours.",
  },
  {
    title: "Discretion as default",
    body: "Conversations are confidential. Client names are never published. The Private Office register is shared only with the introduced principals on a need-to-know basis.",
  },
  {
    title: "Introduction, not execution",
    body: "Vision Goal selects and introduces. The regulated work — wealth management, banking, advisory — is carried out by the Swiss principals you meet, whom you engage directly. Vision Goal GmbH holds no FINMA authorisation and gives no investment, tax, or legal advice.",
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
                Swiss introductions for principals.
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-cream/85">
                For founders, family principals, and international decision-makers who would rather
                start from two or three specific people than from a search. We listen, we select, and
                we introduce; the regulated work is done by the Swiss principals you meet.
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
                  <dt className="text-eyebrow uppercase text-slate-2">Short list</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    CHF 4,500 administration fee · two to three principals · one-page rationale each
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
                  <dd className="md:col-span-2 text-body text-navy">{responseStandard.short}.</dd>
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
                  href={`mailto:${organisation.email.general}`}
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
