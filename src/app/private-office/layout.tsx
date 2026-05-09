import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Private Office",
  description:
    "Curated introductions for principals — Vision Goal's Private Office surface. Confidential conversations and considered introductions to vetted Swiss bankers, partners, and operators. Not advice; introductions.",
  alternates: { canonical: "/private-office" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
