import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3 className="text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-sans text-[0.95rem] font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:-outline-offset-2 sm:px-6"
              >
                {item.question}
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300",
                    isOpen && "rotate-180 border-brand-200 bg-brand-50 text-brand-600",
                  )}
                  aria-hidden="true"
                >
                  <Icon name="chevron-down" className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-slate-600 sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
