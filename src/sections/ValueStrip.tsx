import { valueStrip } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

export function ValueStrip() {
  return (
    <div className="border-y border-slate-200 bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-6" aria-label="What we offer">
          {valueStrip.map((v) => (
            <li
              key={v.label}
              className="flex items-center justify-center gap-3 bg-white px-3 py-6 text-sm font-semibold text-slate-800 md:flex-col md:gap-2.5 md:text-center lg:flex-row lg:text-left"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon name={v.icon} className="size-[1.1rem]" />
              </span>
              {v.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
