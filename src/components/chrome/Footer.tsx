"use client";

import Link from "next/link";
import { useT } from "@/i18n/I18nProvider";

export function Footer() {
  const t = useT();

  const sections = [
    {
      title: t.footer.sectionProgrammes,
      links: [
        { label: t.programmeMeta.access.name, href: "/programmes/access" },
        { label: t.programmeMeta.banking.name, href: "/programmes/banking" },
        { label: t.programmeMeta.topic.name, href: "/programmes/topic" },
      ],
    },
    {
      title: t.footer.sectionPlatform,
      links: [
        { label: t.hostsStrip.eyebrow, href: "/hosts" },
        { label: t.pages.alumni.eyebrow, href: "/alumni" },
        { label: t.nav.insights, href: "/insights" },
        { label: t.nav.about, href: "/about" },
      ],
    },
    {
      title: t.footer.sectionApply,
      links: [
        { label: t.footer.linkApplication, href: "/apply" },
        { label: t.footer.linkPrivateConsultation, href: "/apply/private-consultation" },
        { label: t.footer.linkPrivateCohort, href: "/apply/private-cohort" },
        { label: t.footer.linkContact, href: "/contact" },
      ],
    },
  ];

  const legal = [
    { label: t.footer.legalImprint, href: "/legal/imprint" },
    { label: t.footer.legalPrivacy, href: "/legal/privacy" },
    { label: t.footer.legalCookies, href: "/legal/cookies" },
    { label: t.footer.legalApplicationTerms, href: "/legal/application-terms" },
  ];

  return (
    <footer className="bg-navy-deep text-cream/85">
      {/* Direct contact band — visible to HNWI / institutional visitors who need a fast path */}
      <div className="border-b border-cream/10">
        <div className="container py-8 grid gap-6 md:grid-cols-4 items-start">
          <p className="text-eyebrow uppercase text-gold-hi md:col-span-1">{t.footer.contactEyebrow}</p>
          <div className="md:col-span-1">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/55">
              {t.footer.contactPhoneLabel}
            </p>
            <a
              href={`tel:${t.footer.contactPhone.replace(/\s+/g, "")}`}
              className="mt-1 block font-serif text-cream text-lg tracking-tight tabular hover:text-gold-hi transition-colors duration-200"
            >
              {t.footer.contactPhone}
            </a>
          </div>
          <div className="md:col-span-1">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/55">
              {t.footer.contactEmailLabel}
            </p>
            <a
              href={`mailto:${t.footer.contactEmail}`}
              className="mt-1 block font-serif text-cream text-lg tracking-tight hover:text-gold-hi transition-colors duration-200"
            >
              {t.footer.contactEmail}
            </a>
          </div>
          <div className="md:col-span-1">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/55">
              {t.footer.contactResponseLabel}
            </p>
            <p className="mt-1 text-body-sm text-cream/85 leading-snug">
              {t.footer.contactResponseValue}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="font-serif text-cream text-2xl tracking-tight">
              Vision <span className="text-gold-hi">Goal</span>
            </Link>
            <p className="mt-6 max-w-prose-narrow text-body-sm text-cream/70 leading-relaxed">
              {t.footer.blurb}
            </p>
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-cream/55">
              EN <span className="text-cream/30">·</span> DE <span className="text-cream/30">·</span> FR <span className="text-cream/30">·</span> ES <span className="text-cream/30">·</span> ZH
            </p>
          </div>

          <div className="md:col-span-8 grid gap-10 sm:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-eyebrow uppercase text-gold-hi">{section.title}</h3>
                <ul className="mt-4 space-y-2.5 text-body-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-cream/85 hover:text-cream transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-12 border-t border-cream/10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[0.78rem] text-cream/55">
          <p>{t.footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
