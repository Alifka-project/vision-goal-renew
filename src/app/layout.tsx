import type { Metadata } from "next";
import "@/styles/globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import { organisation } from "@/lib/organisation";

const SITE_URL = "https://visiongoal.ch";

const TITLE = "Vision Goal — Swiss executive immersions, twelve places each";
const DESCRIPTION =
  "Three Swiss executive intensives of twelve participants, led by working practitioners in Zurich and Geneva. 2026 founding cohorts — dates to be announced.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Vision Goal",
  },
  description: DESCRIPTION,
  keywords: [
    "Swiss executive education",
    "Swiss business access",
    "Swiss private banking intensive",
    "Swiss finance week",
    "small cohort executive programme Switzerland",
    "chatham house",
    "Zurich",
    "Geneva",
  ],
  authors: [{ name: "Vision Goal", url: SITE_URL }],
  creator: "Vision Goal",
  publisher: "Vision Goal",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_CH",
    alternateLocale: ["de_CH", "fr_CH", "es_ES", "zh_CN"],
    url: SITE_URL,
    siteName: "Vision Goal",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      en: "/",
      de: "/",
      fr: "/",
      es: "/",
      zh: "/",
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: organisation.tradingName,
  legalName: organisation.legalName,
  url: SITE_URL,
  description: DESCRIPTION,
  email: organisation.email.general,
  telephone: organisation.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: organisation.address.line1,
    postalCode: organisation.address.postalCode,
    addressLocality: organisation.address.city,
    addressRegion: organisation.address.canton,
    addressCountry: "CH",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UID",
    value: organisation.uid,
  },
  founder: { "@type": "Person", name: organisation.responsiblePerson.name },
  foundingDate: "2022-08-05",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vision Goal",
  url: SITE_URL,
  inLanguage: ["en", "de", "fr", "es", "zh"],
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
