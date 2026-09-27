import type { Metadata } from "next";
import "@/styles/globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

const SITE_URL = "https://visiongoal.ch";

// visiongoal.ch stays the canonical production domain regardless of which
// deployment serves the page, so previews never self-canonicalise.
const IS_PRODUCTION = process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_SITE_ENV === "production";

const SITE_TITLE = "Vision Goal — Curated Swiss executive learning";
const SITE_DESCRIPTION =
  "Vision Goal creates curated Swiss executive learning experiences that connect financial and strategic thinking with real operating environments, professional dialogue and peer exchange.";

// Metadata carries no programme names, prices, cohort dates, cities or
// participant counts pre-launch. `template` appends "· Vision Goal" to
// child titles, so the default title must NOT itself end in "Vision Goal"
// or the tab reads "Vision Goal · Vision Goal".
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Vision Goal",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Swiss executive education",
    "executive learning",
    "applied learning",
    "finance workshop",
    "Swiss business experience",
    "curated learning experiences",
  ],
  authors: [{ name: "Vision Goal", url: SITE_URL }],
  creator: "Vision Goal",
  publisher: "Vision Goal",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: SITE_URL,
    siteName: "Vision Goal",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "A premium Swiss retail food hall.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-default.jpg"],
  },
  // Only the production deployment on visiongoal.ch is indexable. Every
  // Vercel preview/staging deployment reports VERCEL_ENV !== "production",
  // so it ships noindex, nofollow and cannot compete with the live domain
  // or leak an unapproved draft into search results.
  robots: IS_PRODUCTION
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  // Only English is published while the other locales are in review.
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      en: "/",
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vision Goal",
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.jpg`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
  },
  sameAs: ["https://www.linkedin.com/company/visiongoal/"],
};

// The founder, as a Person, linked to the Organization he founded.
// `sameAs` is intentionally omitted. The LinkedIn URL we hold is the Vision
// Goal COMPANY page, which belongs on the Organization above — asserting a
// company page as a person's own profile would be incorrect structured data
// and could merge the two identities in search. Add Andreas's personal
// LinkedIn profile URL here as `sameAs` once it is available.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andreas Svoboda",
  jobTitle: "Founder & Curator",
  description:
    "More than 30 years across finance, banking, insurance, governance and executive education.",
  url: `${SITE_URL}/about`,
  worksFor: { "@type": "Organization", name: "Vision Goal", url: SITE_URL },
  knowsAbout: [
    "Executive education",
    "Wealth planning",
    "Swiss banking",
    "Sustainable finance",
    "Governance",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vision Goal",
  url: SITE_URL,
  inLanguage: ["en"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Without JavaScript, Reveal never marks content visible: show it. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: "<style>[data-reveal]{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
