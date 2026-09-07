import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Vision Goal is building a selective network around Swiss executive learning. This page describes the posture; the record follows once the first experiences have taken place.",
  alternates: { canonical: "/alumni" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
