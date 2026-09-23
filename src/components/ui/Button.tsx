import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { Link } from "@/lib/router";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light" | "dark-outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_8px_20px_-8px_rgb(36_73_235/0.6)] hover:bg-brand-500",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  light: "bg-white text-slate-900 hover:bg-slate-100",
  "dark-outline": "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-[0.95rem] gap-2",
};

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children"> {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconLeft?: IconName;
  /** Internal route, e.g. "/demo/austin-greenscape" or "/#contact" */
  to?: string;
  /** Regular link (mailto:, tel:, external URL) */
  href?: string;
  /** Opens href in a new tab */
  external?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconLeft,
  to,
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} className="size-4" />}
      {children}
      {icon && <Icon name={icon} className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={rest["aria-label"]}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={rest["aria-label"]}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
