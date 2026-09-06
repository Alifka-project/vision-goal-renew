import type { MetadataRoute } from "next";
import { programmes, featuredInsights } from "@/lib/content";

const BASE = "https://visiongoal.ch";

// Only routes reachable from the simplified navigation are listed.
// /hosts and /alumni still resolve but are delisted pre-launch — they
// hold no confirmed contributors or alumni yet. /apply is gone entirely
// (it redirects to /contact).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/what-we-do`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/experiences`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/private-office`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/legal/imprint`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${BASE}/experiences/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = featuredInsights.map((i) => ({
    url: `${BASE}${i.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...experienceRoutes, ...insightRoutes];
}
