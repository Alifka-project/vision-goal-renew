"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

// CSS-only infinite marquee. Children are duplicated so the loop is seamless.
// Respects prefers-reduced-motion via the .marquee-track keyframes (defined in globals.css).
export function Marquee({ children, speed = 60, pauseOnHover = true, className = "" }: Props) {
  return (
    <div
      className={`marquee group relative overflow-hidden ${className}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <div
        className={`marquee-track flex w-max ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        <div className="marquee-content flex shrink-0">{children}</div>
        <div className="marquee-content flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
