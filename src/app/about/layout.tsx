import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Vision Goal is a curated Swiss platform for applied executive learning experiences — small, practitioner-hosted, and connected to real operating environments.",
  path: "/about",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
