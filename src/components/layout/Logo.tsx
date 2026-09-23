import { Link } from "@/lib/router";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25)]",
        className,
      )}
      aria-hidden="true"
    >
      AT
    </span>
  );
}

export function Logo({ tone = "dark", onClick }: { tone?: "dark" | "light"; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group inline-flex items-center gap-3 rounded-lg" aria-label={`${site.name} — home`}>
      <LogoMark />
      <span className="flex flex-col leading-tight">
        <span className={cn("font-display text-[0.95rem] font-bold tracking-tight", tone === "dark" ? "text-white" : "text-slate-900")}>
          {site.name}
        </span>
        <span className={cn("text-[11px] font-medium", tone === "dark" ? "text-slate-400" : "text-slate-500")}>{site.tagline}</span>
      </span>
    </Link>
  );
}
