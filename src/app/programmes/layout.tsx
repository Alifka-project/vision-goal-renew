import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Three flagship Swiss intensives — by application. Swiss Business Access Immersion, Private Swiss Banking & Wealth Intensive, and Swiss Finance Week.",
  alternates: {
    canonical: "/programmes",
    languages: {
      en: "/programmes",
      de: "/programmes",
      fr: "/programmes",
      es: "/programmes",
      zh: "/programmes",
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
