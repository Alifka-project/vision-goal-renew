"use client";

import { useT } from "@/i18n/I18nProvider";
import type { Cohort } from "@/lib/content";

type Status = Cohort["status"];

const styles: Record<Status, string> = {
  Announcing: "border-slate/30 text-slate bg-slate/5",
  Scheduled: "border-gold/40 text-gold bg-gold/5",
  Closed: "border-hairline text-slate-2 bg-cream-2",
};

export function StatusPill({ status }: { status: Status }) {
  const t = useT();
  const label =
    status === "Announcing"
      ? t.cohorts.statusAnnouncing
      : status === "Scheduled"
        ? t.cohorts.statusScheduled
        : t.cohorts.statusClosed;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.16em] font-semibold border ${styles[status]}`}
    >
      {label}
    </span>
  );
}
