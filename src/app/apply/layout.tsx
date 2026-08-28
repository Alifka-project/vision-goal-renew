import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to a Vision Goal cohort — Swiss Business Access Immersion, Private Swiss Banking & Wealth Intensive, or Swiss Finance Week. Every application is reviewed individually and answered within five business days.",
  alternates: { canonical: "/apply" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
