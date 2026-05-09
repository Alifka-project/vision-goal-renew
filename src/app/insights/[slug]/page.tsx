import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredInsights, hosts } from "@/lib/content";
import { InsightPageClient } from "./InsightPageClient";

const SITE_URL = "https://visiongoal.ch";

export function generateStaticParams() {
  return featuredInsights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = featuredInsights.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt || `${insight.category} · ${insight.readingTime}.`,
    alternates: { canonical: insight.href },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      authors: [insight.authorName],
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = featuredInsights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const author = insight.authorSlug ? hosts.find((h) => h.slug === insight.authorSlug) : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    articleSection: insight.category,
    url: `${SITE_URL}${insight.href}`,
    author: author
      ? { "@type": "Person", name: author.name, url: `${SITE_URL}/hosts/${author.slug}` }
      : { "@type": "Organization", name: "Vision Goal", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Vision Goal", url: SITE_URL },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <InsightPageClient slug={insight.slug} />
    </>
  );
}
