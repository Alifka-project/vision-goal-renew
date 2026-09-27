import type { Metadata } from "next";
import type { ReactNode } from "react";

// No `title` here: a plain title string would become the default for this
// subtree and stop the root "%s · Vision Goal" template applying, so the
// legal pages would render as bare "Imprint" while every other page carries
// the suffix. Each legal page sets its own title via pageMetadata().
//
// No `robots` here either: hard-coding index/follow would override the
// environment-aware robots block in the root layout and make the legal pages
// indexable on staging.
export const metadata: Metadata = {
  description: "Imprint, privacy policy and cookie information for Vision Goal GmbH.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
