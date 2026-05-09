import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Legal",
  description: "Imprint, privacy, cookies, and application terms for Vision Goal.",
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
