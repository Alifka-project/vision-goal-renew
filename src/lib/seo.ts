import type { Metadata } from "next";

export const SITE_URL = "https://visiongoal.ch";
export const SITE_NAME = "Vision Goal";

/**
 * Per-page metadata.
 *
 * Next.js does NOT copy a page's `title` into its Open Graph title. A page
 * that sets only `title` inherits the ROOT `openGraph` block wholesale, so
 * every page ends up sharing one generic OG title when it is linked or
 * shared. This helper writes the page's own title and description into the
 * Open Graph and Twitter blocks as well, so a shared link shows the page it
 * actually points at.
 *
 * `canonical` is always the production path on visiongoal.ch — preview
 * deployments must never self-canonicalise, or a staging URL can end up
 * competing with the live domain.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  imageAlt = "Vision Goal — applied Swiss executive learning.",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  // The root layout appends "· Vision Goal" via title.template; Open Graph
  // has no template, so the suffix is added explicitly here to keep the two
  // consistent.
  const ogTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_CH",
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
