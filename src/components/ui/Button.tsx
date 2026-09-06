import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark" | "ghost-on-dark";

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "children">;

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-cream border-navy hover:bg-navy-deep hover:border-navy-deep",
  secondary:
    "bg-transparent text-navy border-navy hover:bg-navy hover:text-cream",
  ghost:
    "bg-transparent text-navy border-transparent hover:text-gold underline-offset-4 hover:underline",
  "on-dark":
    "bg-gold text-navy border-gold hover:bg-gold-hi hover:border-gold-hi",
  "ghost-on-dark":
    "bg-transparent text-cream border-transparent hover:text-gold-hi underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-sans font-medium tracking-wide border transition-colors duration-200 ease-editorial";

export function Button({ href, variant = "primary", children, className, ...rest }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </Link>
  );
}

// Same styling as Button, for real <button> actions (form submits) where
// there is no destination to navigate to.
export function ButtonAction({
  variant = "primary",
  children,
  className,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}
