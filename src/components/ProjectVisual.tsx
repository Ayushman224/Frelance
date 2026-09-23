import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Shows the project screenshot, or a clean illustrated placeholder until a real screenshot is added. */
export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        className={cn("aspect-[16/10] w-full object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Illustration representing ${project.title}`}
      className={cn("relative aspect-[16/10] w-full overflow-hidden", backgrounds[project.category], className)}
    >
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center p-6" aria-hidden="true">
        {project.category === "automation" ? <AutomationArt /> : project.category === "wordpress" ? <SiteArt /> : <AppArt />}
      </div>
    </div>
  );
}

const backgrounds: Record<Project["category"], string> = {
  web: "bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900",
  automation: "bg-gradient-to-br from-ink-900 via-slate-900 to-emerald-950",
  wordpress: "bg-gradient-to-br from-ink-900 via-ink-800 to-sky-950",
};

function AppArt() {
  return (
    <div className="flex w-full max-w-[16rem] gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-2.5 shadow-2xl backdrop-blur">
      <div className="flex w-10 flex-col gap-1.5 rounded-lg bg-white/5 p-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("h-1.5 rounded", i === 0 ? "bg-brand-400" : "bg-white/15")} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="h-2 w-16 rounded bg-white/30" />
          <span className="size-4 rounded-full bg-brand-400/70" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-7 rounded-md bg-white/10" />
          ))}
        </div>
        <span className="h-12 rounded-md bg-gradient-to-r from-brand-500/30 to-brand-400/10" />
      </div>
    </div>
  );
}

function AutomationArt() {
  const nodes = ["file", "code", "database", "chart"] as const;
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {nodes.map((n, i) => (
        <div key={n} className="flex items-center gap-1.5 sm:gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-emerald-300 shadow-xl sm:size-12">
            <Icon name={n} className="size-5" />
          </span>
          {i < nodes.length - 1 && <span className="flow-line h-0.5 w-4 opacity-70 sm:w-6" />}
        </div>
      ))}
    </div>
  );
}

function SiteArt() {
  return (
    <div className="w-full max-w-[15rem] overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-slate-50 px-2.5 py-1.5">
        <span className="h-1.5 w-10 rounded bg-slate-400" />
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1 w-4 rounded bg-slate-300" />
          ))}
        </span>
      </div>
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 px-3 py-4">
        <span className="block h-2 w-24 rounded bg-white/90" />
        <span className="mt-1.5 block h-1.5 w-16 rounded bg-white/60" />
        <span className="mt-2.5 block h-3 w-12 rounded-full bg-white" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-8 rounded bg-slate-100" />
        ))}
      </div>
    </div>
  );
}
