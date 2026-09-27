import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private Office",
  description:
    "Private Office · By Introduction. Vision Goal helps clients clarify their objectives, identify relevant Swiss specialists and arrange considered introductions. Regulated advice remains with the selected specialist.",
  path: "/private-office",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
