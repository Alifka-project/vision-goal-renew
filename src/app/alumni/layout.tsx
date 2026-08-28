import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Alumni & network",
  description:
    "How the Vision Goal network works: twelve participants per cohort, introductions arranged individually, and participant accounts published only with written consent.",
  alternates: { canonical: "/alumni" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
