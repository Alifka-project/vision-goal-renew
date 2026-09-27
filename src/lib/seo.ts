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
  // The suffix is written out explicitly rather than left to the root
  // layout's title.template. A plain-string `title` in any intermediate
  // layout (experiences/, insights/, hosts/) stops that template reaching the
  // routes nested beneath it, so /experiences/access rendered as bare
  // "Business Immersion Experience" while /experiences carried the suffix.
  // `absolute` bypasses templates entirely, and Open Graph — which has no
  // template at all — uses the same string, so the tab, the share card and
  // the search result can never disagree.
  const fullTitle = `${title} · ${SITE_NAME}`;
  const ogTitle = fullTitle;

  return {
    title: { absolute: fullTitle },
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
