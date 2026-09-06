import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
