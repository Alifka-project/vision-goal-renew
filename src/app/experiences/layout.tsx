import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Indicative formats of curated Swiss executive learning — applied, small, practitioner-led. Specific dates and details are confirmed per experience.",
  alternates: {
    canonical: "/experiences",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
