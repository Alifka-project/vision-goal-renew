import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Alumni & network",
  description:
    "Curated, attributable proof of who has been in the room. The Vision Goal alumni network across three flagship programmes.",
  alternates: { canonical: "/alumni" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
