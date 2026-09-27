import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Imprint",
  description:
    "Legal particulars for Vision Goal GmbH — registered office, commercial register details, responsible person, and the distinction between Vision Goal's curatorial role and regulated external providers.",
  path: "/legal/imprint",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
