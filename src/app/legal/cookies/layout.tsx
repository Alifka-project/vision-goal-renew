import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookies",
  description:
    "Which cookies visiongoal.ch actually sets, why, and how long they last. No advertising cookies, no third-party tracking pixels, and no profiling.",
  path: "/legal/cookies",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
