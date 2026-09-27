import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Express interest in a learning experience, a bespoke programme or a Private Office introduction. I normally respond within 48 hours.",
  path: "/contact",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
