import clsx from "clsx";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "outline-light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 py-3 text-[15px] font-semibold transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight",
        variant === "primary" &&
          "bg-accent text-white shadow-[0_8px_30px_-10px_rgb(217_72_15/0.7)] hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-line bg-white/[0.03] text-ink hover:border-white/20 hover:bg-white/[0.06]",
        variant === "light" && "bg-white text-[#1a0e08] hover:bg-white/90",
        variant === "outline-light" && "border border-white/40 text-white hover:bg-white/10",
        className,
      )}
    >
      {children}
    </a>
  );
}
