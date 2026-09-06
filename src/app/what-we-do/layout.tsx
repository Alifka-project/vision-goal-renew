import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "How Vision Goal approaches executive learning — applied, small, practitioner-led, and connected to real operating environments.",
  alternates: {
    canonical: "/what-we-do",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
