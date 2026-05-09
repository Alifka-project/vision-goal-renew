import type { MetadataRoute } from "next";
import { programmes, hosts, featuredInsights } from "@/lib/content";

const BASE = "https://visiongoal.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/programmes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/private-office`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/hosts`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/alumni`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${BASE}/apply/private-consultation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/apply/private-cohort`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE}/legal/imprint`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${BASE}/legal/application-terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const programmeRoutes: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${BASE}/programmes/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const hostRoutes: MetadataRoute.Sitemap = hosts.map((h) => ({
    url: `${BASE}/hosts/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = featuredInsights.map((i) => ({
    url: `${BASE}${i.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...programmeRoutes, ...hostRoutes, ...insightRoutes];
}
