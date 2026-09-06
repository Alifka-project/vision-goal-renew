import type { Metadata } from "next";
import "@/styles/globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

const SITE_URL = "https://visiongoal.ch";

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
        alt: "A premium Swiss retail environment during a Vision Goal learning experience.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
  sameAs: ["https://www.linkedin.com/"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
