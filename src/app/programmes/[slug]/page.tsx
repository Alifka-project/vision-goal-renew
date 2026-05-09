import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programmes } from "@/lib/content";
import { ProgrammePageClient } from "./ProgrammePageClient";

const SITE_URL = "https://visiongoal.ch";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) return {};
  return {
    title: programme.name,
    description: programme.tagline,
    alternates: { canonical: `/programmes/${programme.slug}` },
  };
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programme.name,
    description: programme.tagline,
    url: `${SITE_URL}/programmes/${programme.slug}`,
    provider: {
      "@type": "Organization",
      name: "Vision Goal",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: programme.fee.replace(/[^\d]/g, ""),
      priceCurrency: "CHF",
      availability: "https://schema.org/LimitedAvailability",
      url: `${SITE_URL}/apply`,
    },
    educationalCredentialAwarded: "Vision Goal alumni network access",
    inLanguage: "en",
    locationCreated: { "@type": "Place", name: programme.city, address: { "@type": "PostalAddress", addressLocality: programme.city, addressCountry: "CH" } },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <ProgrammePageClient slug={programme.slug} />
    </>
  );
}
