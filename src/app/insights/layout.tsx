import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Short, considered notes on Swiss business, finance and the thinking behind Vision Goal's applied learning experiences.",
  path: "/insights",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
