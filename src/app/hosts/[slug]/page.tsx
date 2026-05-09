import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hosts } from "@/lib/content";
import { HostProfileClient } from "./HostProfileClient";

const SITE_URL = "https://visiongoal.ch";

export function generateStaticParams() {
  return hosts.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const host = hosts.find((h) => h.slug === slug);
  if (!host) return {};
  return {
    title: host.name,
    description: `${host.role}. ${host.expertise.join(" · ")}.`,
    alternates: { canonical: `/hosts/${host.slug}` },
  };
}

export default async function HostProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const host = hosts.find((h) => h.slug === slug);
  if (!host) notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: host.name,
    jobTitle: host.role,
    url: `${SITE_URL}/hosts/${host.slug}`,
    description: host.bio,
    knowsAbout: host.expertise,
    affiliation: { "@type": "Organization", name: "Vision Goal", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HostProfileClient slug={host.slug} />
    </>
  );
}
