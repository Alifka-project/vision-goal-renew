"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

// Reveal-on-scroll wrapper.
//
// Three failure modes this guards against, all of which showed up as
// "sections are temporarily blank" in review:
//
//  1. Reduced motion — the preference is read synchronously during the
//     first render (not in an effect), so those users never get a frame
//     of invisible content.
//  2. A tall section whose top edge never satisfies the old 12% threshold
//     stayed at opacity:0 forever. Threshold is now 0 with a positive
//     rootMargin, so anything approaching the viewport reveals.
//  3. No IntersectionObserver, a JS hiccup, or an observer that simply
//     never fires — a safety timer force-reveals the content so nothing
//     can stay hidden indefinitely.
//
// Delays are also clamped: a long stagger looks elegant on a fast
// connection and looks broken on a slow one.
const MAX_DELAY_MS = 160;
const FAILSAFE_REVEAL_MS = 600;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Reveal({
  children,
  delay = 0,
  duration = 600,
  distance = 20,
  direction = "up",
  once = true,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // Reading the media query in the initialiser means reduced-motion users
  // render visible on the very first paint.
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    // Nothing stays invisible forever, whatever the observer does.
    const failsafe = window.setTimeout(() => setVisible(true), FAILSAFE_REVEAL_MS);

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return () => window.clearTimeout(failsafe);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      // threshold 0 + positive rootMargin: reveal as soon as any part of
      // the element approaches the viewport, however tall it is.
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [once]);

  const offsetX = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const offsetY = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const appliedDelay = Math.min(delay, MAX_DELAY_MS);

  // The hidden state must never be baked into the server HTML. The server
  // cannot know the visitor's motion preference, so emitting opacity:0 here
  // would leave reduced-motion users (and anyone whose JS is slow or fails)
  // staring at a blank section. Instead the server renders the content
  // plainly and `data-reveal` opts in to the animation; globals.css hides it
  // only under `prefers-reduced-motion: no-preference`, where JS is about to
  // reveal it anyway.
  const style: React.CSSProperties = {
    opacity: visible ? 1 : undefined,
    transform: visible ? "translate3d(0,0,0)" : `translate3d(${offsetX}px, ${offsetY}px, 0)`,
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${appliedDelay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${appliedDelay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={style}
      data-reveal=""
      data-visible={visible ? "" : undefined}
    >
      {children}
    </Tag>
  );
}
