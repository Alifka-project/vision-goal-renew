import type { Metadata } from "next";
import "@/styles/globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

const SITE_URL = "https://visiongoal.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vision Goal — Curated Swiss access, by application",
    template: "%s · Vision Goal",
  },
  description:
    "A premium Swiss platform for cohort-based intensives and curated business access — three flagship programmes, hosted by practitioners, by application.",
  keywords: [
    "Swiss executive education",
    "Swiss business access",
    "Swiss private banking intensive",
    "Swiss finance week",
    "cohort-based intensives Switzerland",
    "by application",
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
    title: "Vision Goal — Curated Swiss access, by application",
    description:
      "A premium Swiss platform for cohort-based intensives and curated business access — three flagship programmes, hosted by practitioners, by application.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Goal — Curated Swiss access, by application",
    description:
      "A premium Swiss platform for cohort-based intensives and curated business access.",
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
  name: "Vision Goal",
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.png`,
  description:
    "A premium Swiss platform for cohort-based intensives and curated business access.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressCountry: "CH",
  },
  sameAs: ["https://www.linkedin.com/"],
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
