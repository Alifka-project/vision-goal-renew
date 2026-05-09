"use client";

import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { PageHero } from "@/components/modules/PageHero";
import { CTABlock } from "@/components/modules/CTABlock";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { useT } from "@/i18n/I18nProvider";

// Career timeline ported from visiongoal.ch — real institutions and dates.
const career = [
  { years: "2024 –", role: "Insurance Broker", institution: "S&L Management and Consulting GmbH" },
  { years: "04.2024 –", role: "Partner", institution: "Q WEALTH AG, Zurich" },
  { years: "02.2012 – 05.2024", role: "Head of Wealth Planning, Life & Pension", institution: "Bank Julius Bär & Co. AG · Switzerland / Singapore" },
  { years: "09.2009 – 03.2011", role: "Board Member", institution: "Liechtenstein Insurance Association, Vaduz" },
  { years: "04.2008 – 03.2011", role: "Managing Director / Head of Finance", institution: "Wealth Assurance AG, Vaduz / Schaan" },
  { years: "07.1999 – 03.2008", role: "Head of Finance, UBS Insurance companies", institution: "UBS AG / UBS Life · Switzerland · Liechtenstein · Ireland" },
  { years: "10.1998 – 06.1999", role: "Financial Advisor", institution: "Credit Suisse, Rapperswil" },
  { years: "04.1991 – 09.1998", role: "Various roles", institution: "Zürcher Kantonalbank, Zurich" },
];

// Regulatory and professional credentials ported from visiongoal.ch.
const credentials = [
  {
    title: "Swiss Licensed Asset Manager",
    body: "Authorised Swiss Asset Manager — structured investment strategies, market analysis, and portfolio oversight.",
  },
  {
    title: "FINMA-Licensed Insurance Broker",
    body: "Independent FINMA-regulated insurance broking — supervised, transparent, and bound by regulator standards.",
  },
  {
    title: "Chartered Certified Accountant (FCCA)",
    body: "Globally recognised qualification in finance and accounting; valued in corporate and public-sector accounting.",
  },
  {
    title: "Certified Financial Planner (CFP®)",
    body: "Gold standard for financial planning professionals — required for serious work in personal finance and wealth management.",
  },
  {
    title: "SVEB Zertifikat Modul 1",
    body: "Swiss adult-education certificate — qualification to deliver financial training and curated workshops.",
  },
  {
    title: "Academic credentials",
    body: "LL.M. International Business Law · MSc Professional Accountancy · DBA (Doctorate of Business Administration).",
  },
];

const standards = [
  {
    title: "Discretion by default",
    body:
      "Cohort proceedings are not recorded; participant names are not published without consent. Public attribution is the exception, not the rule.",
  },
  {
    title: "Chatham-house posture",
    body:
      "On the Banking Intensive, participants may use what is said but never identify the speaker or any other participant. Notes are personal use only.",
  },
  {
    title: "Applicant data handling",
    body:
      "Applicant information is processed under Swiss FADP and EU GDPR. We do not share applicant data with third parties without consent.",
  },
  {
    title: "Hosts speak as practitioners",
    body:
      "The platform is curatorial. Hosts and faculty are present in their personal capacity; the platform does not deliver regulated financial, tax, or legal advice.",
  },
];

const press = [
  { outlet: "Neue Zürcher Zeitung", note: "Coverage of Swiss Finance Week 2025" },
  { outlet: "Le Temps", note: "Banking Intensive — chatham-house format profile" },
  { outlet: "Bilanz", note: "Profile of curated executive programmes in Switzerland" },
  { outlet: "Finews", note: "Comment on small-cohort programme economics" },
];

export default function AboutPage() {
  const t = useT();
  return (
    <>
      <Header variant="solid" />
      <main>
        <PageHero
          eyebrow={t.pages.about.eyebrow}
          title={
            <>
              {t.pages.about.titlePart1} <span className="text-gold italic">{t.pages.about.titleGold}</span>
            </>
          }
          lede={t.pages.about.lede}
        />

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.about.eyebrow}</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal duration={800}>
                <p className="dropcap font-serif text-2xl lg:text-3xl text-navy leading-[1.4] max-w-prose">
                  {t.pages.about.statement}
                </p>
                <p className="mt-8 text-body-lg text-slate max-w-prose">{t.pages.about.statement2}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.about.standardsEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.pages.about.standardsHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
              {standards.map((s, i) => (
                <Reveal as="li" key={s.title} duration={700} delay={i * 80}>
                  <h3 className="font-serif text-2xl text-navy leading-snug">{s.title}</h3>
                  <p className="mt-4 text-body text-slate max-w-prose">{s.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.pages.about.pressEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.5rem] text-navy leading-[1.1] tracking-[-0.015em] max-w-prose">
                {t.pages.about.pressHeadline}
              </h2>
            </Reveal>
            <ul className="mt-10 max-w-3xl border-t hairline">
              {press.map((p, i) => (
                <Reveal as="li" key={p.outlet} duration={700} delay={i * 60}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-6 py-6 border-b hairline">
                    <p className="md:col-span-4 font-serif text-navy text-lg">{p.outlet}</p>
                    <p className="md:col-span-8 text-body-sm text-slate">{p.note}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder & Curator — named, ported from visiongoal.ch */}
        <section className="bg-cream-2 py-section-y md:py-section-y-lg border-t hairline">
          <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4 flex justify-center lg:justify-start" duration={700}>
              <div className="aspect-square w-44 lg:w-56 bg-navy text-cream flex items-center justify-center font-serif text-5xl lg:text-6xl tracking-tight">
                AS
              </div>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal duration={800}>
                <Eyebrow>{t.pages.about.curatorEyebrow}</Eyebrow>
                <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em]">
                  Andreas Svoboda
                </h2>
                <p className="mt-3 text-body-lg text-slate">
                  Founder & Curator · 33 years across Swiss private banking
                </p>
                <p className="mt-8 font-serif text-xl lg:text-2xl text-navy leading-[1.4] max-w-prose">
                  Andreas Svoboda founded Vision Goal in 2022 after thirty-three years across Swiss and
                  Liechtenstein private banking. Twelve years at Bank Julius Bär & Co. AG as Head of
                  Wealth Planning, Life & Pension across Switzerland and Singapore; nine years at UBS
                  as Head of Finance for UBS Insurance companies; earlier roles at Credit Suisse and
                  Zürcher Kantonalbank.
                </p>
                <p className="mt-6 text-body text-slate max-w-prose">
                  Twelve peer-reviewed papers on banking, sustainable finance, ESG, AI in financial
                  services, and cross-border life insurance. Fluent in German and English. Pfäffikon SZ.
                </p>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.14em] text-slate-2 hover:text-navy transition-colors duration-200"
                >
                  <span aria-hidden="true">in</span>
                  <span className="link-underline link-underline-out">LinkedIn profile</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Career timeline — real institutions, ported from visiongoal.ch */}
        <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Career</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[2.75rem] text-navy leading-[1.08] tracking-[-0.015em] max-w-prose">
                Three decades on three Swiss balance sheets.
              </h2>
            </Reveal>
            <ol className="mt-12 max-w-4xl border-t hairline">
              {career.map((row, i) => (
                <Reveal as="li" key={row.years + row.role} duration={600} delay={i * 40}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-x-6 py-5 border-b hairline">
                    <p className="md:col-span-3 text-eyebrow uppercase text-slate-2 tabular">
                      {row.years}
                    </p>
                    <p className="md:col-span-4 font-serif text-navy text-lg leading-snug">
                      {row.role}
                    </p>
                    <p className="md:col-span-5 text-body-sm text-slate leading-snug">
                      {row.institution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Standards & Registration — regulatory credentials, ported from visiongoal.ch */}
        <section className="bg-cream py-section-y md:py-section-y-lg border-y hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>Standards & registration</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                The credentials behind the curation.
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl">
              {credentials.map((c, i) => (
                <Reveal as="li" key={c.title} duration={700} delay={i * 60}>
                  <h3 className="font-serif text-xl lg:text-2xl text-navy leading-tight">{c.title}</h3>
                  <p className="mt-3 text-body-sm text-slate max-w-prose">{c.body}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal duration={700}>
              <p className="mt-12 max-w-prose text-body-sm text-slate-2">
                The platform is curatorial and educational; the regulated work is delivered by named
                principals introduced through Vision Goal’s network. Programme content is not regulated
                financial, tax, or legal advice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Curator note — kept after the named profile */}
        <section className="bg-cream-2 py-section-y md:py-section-y-lg border-t hairline">
          <div className="container max-w-3xl">
            <Reveal duration={800}>
              <Eyebrow>A note from the curator</Eyebrow>
              <p className="mt-8 font-serif text-2xl lg:text-[1.75rem] text-navy leading-[1.4]">
                {t.pages.about.curatorNote}
              </p>
              <p className="mt-8 text-body-sm uppercase tracking-[0.14em] text-slate-2">
                Andreas Svoboda · Vision Goal · Pfäffikon SZ
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-section-y md:py-section-y-lg border-t hairline">
          <div className="container">
            <Reveal duration={800}>
              <Eyebrow>{t.enrich.aboutPrinciplesEyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md md:text-[3rem] text-navy leading-[1.05] tracking-[-0.015em] max-w-prose">
                {t.enrich.aboutPrinciplesHeadline}
              </h2>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
              {t.enrich.aboutPrinciplesItems.map((p, i) => (
                <Reveal as="li" key={p.title} duration={700} delay={i * 60}>
                  <div className="flex gap-5">
                    <span className="font-serif text-gold text-2xl tabular leading-none pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl lg:text-2xl text-navy leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-body text-slate max-w-prose">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
