import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Vision Goal — non-application enquiries.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
