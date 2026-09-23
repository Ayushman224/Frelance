import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "white" | "muted" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  muted: "bg-slate-50",
  dark: "bg-ink-950 text-slate-300",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}

export function Section({ id, tone = "white", className, labelledBy, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-20 outline-none sm:py-24 lg:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({ id, eyebrow, title, description, align = "center", tone = "light", className }: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase",
            dark ? "text-brand-300" : "text-brand-600",
          )}
        >
          <span className={cn("h-px w-6", dark ? "bg-brand-300/60" : "bg-brand-600/50")} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed text-pretty sm:text-lg", dark ? "text-slate-400" : "text-slate-600")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
