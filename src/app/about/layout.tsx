import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vision Goal GmbH runs three small Swiss executive intensives led by working practitioners, founded by Andreas Svoboda after thirty-three years in Swiss private banking.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
