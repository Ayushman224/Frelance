import { Link } from "@/lib/router";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={site.logo}
      alt=""
      width={36}
      height={36}
      className={cn("size-9 rounded-xl object-cover shadow-[inset_0_1px_0_rgb(255_255_255/0.25)]", className)}
    />
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
