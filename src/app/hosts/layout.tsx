import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hosts & faculty",
  description:
    "Hosts and faculty for Vision Goal — the working practitioners who lead sessions across the three flagship intensives, listed before you apply.",
  alternates: { canonical: "/hosts" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
