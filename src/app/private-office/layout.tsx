import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Private Office",
  description:
    "Vision Goal's Private Office: a confidential conversation, a short list of two or three Swiss principals, and one introduction. Introductions only — not regulated advice.",
  alternates: { canonical: "/private-office" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
