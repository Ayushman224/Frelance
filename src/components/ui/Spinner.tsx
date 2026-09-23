import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export function Spinner({ className, label }: { className?: string; label?: string }) {
  return (
    <span role={label ? "status" : undefined} className="inline-flex items-center gap-2">
      <Icon name="loader" className={cn("size-4 animate-spin", className)} />
      {label && <span className="sr-only">{label}</span>}
    </span>
  );
}

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center text-slate-500">
      <Spinner className="size-6" label="Loading page" />
    </div>
  );
}
