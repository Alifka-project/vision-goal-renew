import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/apply", "/apply/", "/_next/", "/api/", "/newsletter/"],
      },
    ],
    sitemap: "https://visiongoal.ch/sitemap.xml",
    host: "https://visiongoal.ch",
  };
}
