import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Practitioner Network",
  description:
    "Vision Goal works with a curated professional network across Swiss finance, banking, entrepreneurship, business culture and executive education. Contributors are named publicly only once their participation has been agreed.",
  path: "/hosts",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
