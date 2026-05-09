import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vision Goal is a curated Swiss platform for cohort-based intensives and access — three flagship programmes, by application, hosted by practitioners.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
