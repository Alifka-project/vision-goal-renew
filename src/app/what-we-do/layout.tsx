import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What We Do",
  description:
    "How Vision Goal works: applied executive learning that connects academic knowledge and practitioner experience with real organisations, plus a curatorial Private Office introduction service.",
  path: "/what-we-do",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
