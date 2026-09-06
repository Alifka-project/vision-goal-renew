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
    alternates: { canonical: `/experiences/${programme.slug}` },
  };
}

// Pre-launch: no Offer / price / location JSON-LD is emitted — those become
// misleading when no dates / cities / fees are confirmed. We keep a lean
// EducationEvent-ish description with just the organisation and the format.
export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programme.name,
    description: programme.tagline,
    url: `${SITE_URL}/experiences/${programme.slug}`,
    provider: {
      "@type": "Organization",
      name: "Vision Goal",
      url: SITE_URL,
    },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgrammePageClient slug={programme.slug} />
    </>
  );
}
