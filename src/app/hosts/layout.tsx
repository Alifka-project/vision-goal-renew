import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hosts & faculty",
  description:
    "Named hosts and faculty for Vision Goal — practitioners who appear in the room across the three flagship intensives.",
  alternates: { canonical: "/hosts" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
