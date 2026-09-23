import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  url?: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}

export function BrowserFrame({ url, tone = "light", className, children }: BrowserFrameProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border shadow-lift",
        dark ? "border-white/10 bg-ink-900" : "border-slate-200 bg-white",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3 border-b px-4 py-2.5", dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50")}>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div
            className={cn(
              "mx-auto flex min-w-0 max-w-xs flex-1 items-center justify-center truncate rounded-md px-3 py-1 text-[11px]",
              dark ? "bg-white/5 text-slate-400" : "bg-white text-slate-500 ring-1 ring-slate-200",
            )}
          >
            {url}
          </div>
        )}
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
