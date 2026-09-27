import type { MetadataRoute } from "next";

// Staging deployments must not be crawled at all. Vercel sets VERCEL_ENV to
// "preview" for every non-production deployment, so only visiongoal.ch itself
// serves a permissive robots.txt.
const IS_PRODUCTION =
  process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_SITE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /hosts and /alumni still resolve but hold no confirmed
        // contributors or alumni yet — keep them out of the index until
        // there is something real on them.
        disallow: ["/hosts", "/hosts/", "/alumni", "/_next/"],
      },
    ],
    sitemap: "https://visiongoal.ch/sitemap.xml",
    host: "https://visiongoal.ch",
  };
}
