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

// Audience as the client defined it. Deliberately no minimum wealth
// threshold is published anywhere on this page — suitability is assessed
// individually for each enquiry.
const whoFor = [
  {
    title: "Entrepreneurs and business owners",
    body: "Founders and owners whose personal and business finances have become entangled, and who want to understand which Swiss specialists are relevant before committing to anyone.",
  },
  {
    title: "Families and individuals considering Swiss providers",
    body: "Families and individuals weighing a Swiss banking, wealth or fiduciary relationship, who would rather start from an informed shortlist than an open search.",
  },
  {
    title: "International professionals with cross-border needs",
    body: "Professionals living, earning or holding assets across more than one jurisdiction, where tax, pension, succession and residence questions interact.",
  },
];

// What the service actually does. Every verb here is curatorial —
// understand, prepare, recommend, arrange, support. Nothing on this page
// may describe Vision Goal as assessing the suitability of a specific
// financial product, advising on one, contracting for one, or executing
// one: all of that sits with the selected external provider under its own
// authorisations.
const howItWorks = [
  {
    n: "01",
    title: "Understand your objectives",
    body: "A confidential, no-fee conversation to understand your situation, your objectives and the questions that actually need answering — before any names are discussed.",
  },
  {
    n: "02",
    title: "Prepare a considered shortlist",
    body: "A shortlist of relevant Swiss specialists, chosen against the objectives you have described, with a short written rationale for why each one appears on it.",
  },
  {
    n: "03",
    title: "Recommend who appears most suitable",
    body: "An indication of which providers appear most suitable for your stated needs, and why. This is a view on fit and relevance — not advice on any financial product.",
  },
  {
    n: "04",
    title: "Arrange and attend introductions",
    body: "Introductory meetings arranged with the specialists you want to meet. Vision Goal attends so the context you have already shared does not have to be explained again.",
  },
  {
    n: "05",
    title: "Support the follow-up",
    body: "Support through the follow-up process while you decide. Any engagement you enter into is contracted directly with the provider you choose.",
  },
];

// Categories only — no named institutions are listed until relationships
// are confirmed and those firms have agreed to be named.
const providerTypes = [
  "Private banks",
  "External asset managers",
  "Family offices and fiduciaries",
  "Tax, legal and succession specialists",
  "Insurance and pension specialists",
];

const standards = [
  {
    title: "No commission, no rebates",
    body: "Vision Goal does not accept retrocessions, finder’s fees, or rebates from the specialists it introduces. Any fee is agreed with you directly and disclosed upfront, so the shortlist reflects fit rather than what pays best.",
  },
  {
    title: "Discretion as default",
    body: "Conversations are confidential and client names are never published. Your details are shared with a specialist only once you have asked for that introduction.",
  },
  {
    title: "Every enquiry assessed individually",
    body: "There is no published minimum. Each enquiry, and whether Vision Goal is the right starting point for it, is assessed individually — and we will say so when it is not.",
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
              src={images.privateOffice}
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
                  {t.nav.privateOffice} · By Introduction
                </span>
              </div>
              <h1 className="mt-8 font-serif text-cream text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.04] tracking-[-0.02em] max-w-4xl">
                Finding the right Swiss specialists.
              </h1>
              <p className="mt-8 max-w-prose text-body-lg text-cream/85">
                Vision Goal helps clients clarify their objectives, identify relevant Swiss
                specialists and arrange considered introductions. Any regulated financial,
                investment, tax, legal, insurance or pension advice is provided directly by the
                selected specialist under its own authorisations and professional responsibilities.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/contact" variant="on-dark">
                  Start a conversation
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
                Who this is for.
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
                How it works. <span className="text-gold italic">Five steps.</span>
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

        {/* Which specialists — categories only, no named institutions */}
        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Who you might meet</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em] max-w-prose">
                The specialists a shortlist may include.
              </h2>
              <p className="mt-8 max-w-prose text-body-lg text-slate">
                Which of these is relevant depends entirely on what you are trying to achieve. Some
                enquiries need one; others need several working together.
              </p>
            </Reveal>
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl">
              {providerTypes.map((type, i) => (
                <Reveal as="li" key={type} duration={700} delay={i * 60}>
                  <div className="h-full border hairline bg-cream-2 px-6 py-7">
                    <p className="text-eyebrow uppercase text-gold tabular">0{i + 1}</p>
                    <p className="mt-3 font-serif text-navy text-xl leading-snug">{type}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Engagement specifics */}
        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal duration={800}>
                <Eyebrow>Engagement</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em]">
                  How the engagement works.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              {/* Fee figures removed pre-launch — nothing is priced publicly
                  until the engagement model is confirmed. Fees are agreed
                  directly with each principal and disclosed upfront. */}
              <dl className="border-t hairline">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Initial call</dt>
                  <dd className="md:col-span-2 text-body text-navy">No fee · confidential</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Curated shortlist</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    A small number of named principals · a short written rationale for each
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Introduction</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    A single considered introduction, made warmly
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Fees</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    Agreed directly and disclosed upfront, before any work begins
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Suitability</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    No published minimum — each enquiry is assessed individually
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-x-6 py-6 border-b hairline">
                  <dt className="text-eyebrow uppercase text-slate-2">Response time</dt>
                  <dd className="md:col-span-2 text-body text-navy">
                    I normally respond within 48 hours.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="bg-white py-section-y md:py-section-y-lg">
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

            <Reveal duration={700}>
              <p className="mt-12 max-w-prose text-body-sm text-slate-2">
                The Private Office is a curatorial introduction service. Vision Goal helps clients
                clarify their objectives, identify relevant Swiss specialists and arrange considered
                introductions. It is not asset management, investment advice, tax, legal, insurance or
                pension advice, and Vision Goal GmbH does not act as a financial intermediary on behalf
                of clients. Any regulated advice, suitability assessment concerning a specific financial
                product, product recommendation, contracting and execution remains with the selected
                external provider under its own authorisations and professional responsibilities.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-cream py-section-y md:py-section-y-lg">
          <div className="container max-w-4xl">
            <Reveal duration={800}>
              <Eyebrow tone="cream">A short note</Eyebrow>
              <h2 className="mt-6 font-serif text-cream text-display-md md:text-[3.5rem] leading-[1.05] tracking-[-0.015em]">
                Start with a conversation.{" "}
                <span className="text-gold-hi italic">We will tell you honestly if we can help.</span>
              </h2>
              <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Button href="/contact" variant="on-dark">
                  Express interest
                </Button>
                <Link
                  href="mailto:office@visiongoal.ch"
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
