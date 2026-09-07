import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vision Goal is a curated Swiss platform for applied executive learning experiences — small, practitioner-hosted, and connected to real operating environments.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
