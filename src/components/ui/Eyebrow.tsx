import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "navy" | "gold" | "cream";
  className?: string;
};

const tones = {
  navy: "text-navy",
  gold: "text-gold",
  cream: "text-cream/80",
} as const;

export function Eyebrow({ children, tone = "gold", className }: Props) {
  return (
    <span
      className={`gold-rule inline-block uppercase text-eyebrow ${tones[tone]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
