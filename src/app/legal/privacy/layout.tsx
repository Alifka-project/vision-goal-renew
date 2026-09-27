import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Vision Goal GmbH collects, uses and retains personal data under the Swiss FADP and the EU GDPR — what the contact form collects, who processes it, and how to exercise your rights.",
  path: "/legal/privacy",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
