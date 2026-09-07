import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Practitioner Network",
  description:
    "Vision Goal works with a curated professional network across Swiss finance, banking, entrepreneurship, business culture and executive education. Contributors are named publicly only once their participation has been agreed.",
  alternates: { canonical: "/hosts" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
