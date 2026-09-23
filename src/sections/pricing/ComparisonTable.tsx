import { comparisonRows, packages, type ComparisonCell } from "@/data/pricingIndia";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

const columns = [
  { name: "Starter", pkg: packages[0] },
  { name: "Business", pkg: packages[1] },
  { name: "AI + Automation", pkg: packages[2] },
];

export function ComparisonTable() {
  return (
    <Section id="compare" labelledBy="compare-title">
      <Container>
        <SectionHeader
          id="compare-title"
          eyebrow="Compare"
          title="What's included in each package."
          description="A simple overview of the standard scope. Anything outside it can be added to your custom proposal."
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">Feature comparison of the Starter, Business and AI + Automation packages</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="sticky left-0 z-10 w-[34%] bg-white px-5 py-5 font-semibold text-slate-500 sm:px-6">
                    Feature
                  </th>
                  {columns.map((c, i) => (
                    <th key={c.name} scope="col" className={cn("px-4 py-5 text-center align-bottom", i === 1 && "bg-brand-50/70")}>
                      {i === 1 && (
                        <span className="mb-2 inline-block rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                          Most Popular
                        </span>
                      )}
                      <span className="block font-display text-base font-bold text-slate-900">{c.name}</span>
                      <span className="mt-0.5 block text-xs font-medium text-slate-500">from {c.pkg.startingPrice}+</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60">
                    <th scope="row" className="sticky left-0 z-10 bg-white px-5 py-4 font-medium text-slate-800 sm:px-6">
                      {row.feature}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className={cn("px-4 py-4 text-center", i === 1 && "bg-brand-50/40")}>
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Cell value={true} /> Included as standard
            </span>
            <span className="flex items-center gap-1.5">
              <Cell value="Custom" /> Depends on your requirements
            </span>
            <span className="flex items-center gap-1.5">
              <Cell value={false} /> Not in standard scope
            </span>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 sm:hidden">Swipe sideways to see all packages.</p>
        </Reveal>
      </Container>
    </Section>
  );
}

function Cell({ value }: { value: ComparisonCell }) {
  if (value === true)
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
        <Icon name="check" className="size-3.5" strokeWidth={3} title="Included" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex font-semibold text-slate-300">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not in standard scope</span>
      </span>
    );
  return (
    <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-600/15 ring-inset">
      {value}
    </span>
  );
}
