import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practitioner notes from Vision Goal — Swiss access, private banking, markets, methodology, and cohort dispatches.",
  alternates: { canonical: "/insights" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
