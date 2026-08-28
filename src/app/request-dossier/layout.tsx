import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Request the programme dossier — Vision Goal",
  description:
    "Request the Vision Goal programme dossier and be notified when the 2026 founding cohort dates are confirmed.",
};

export default function RequestDossierLayout({ children }: { children: ReactNode }) {
  return children;
}
