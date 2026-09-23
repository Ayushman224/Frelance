import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "brand" | "neutral" | "amber" | "emerald" | "dark";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-600/15",
  neutral: "bg-slate-100 text-slate-700 ring-slate-900/10",
  amber: "bg-amber-50 text-amber-800 ring-amber-600/20",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  dark: "bg-white/5 text-slate-300 ring-white/10",
};

export function Badge({ tone = "neutral", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Prominent label for fictional or scripted content. */
export function DemoLabel({ children = "Demo Concept — Not a Client Project", className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-amber-500" aria-hidden="true" />
      {children}
    </span>
  );
}
