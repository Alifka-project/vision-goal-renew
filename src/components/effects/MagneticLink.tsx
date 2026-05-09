"use client";

import Link from "next/link";
import { useRef, type ReactNode, type ComponentProps } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className" | "ref">;

export function MagneticLink({
  href,
  children,
  className = "",
  strength = 0.25,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      className={`inline-block transition-transform duration-200 ease-editorial will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
