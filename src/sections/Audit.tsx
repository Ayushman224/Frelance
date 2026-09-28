import { useState } from "react";
import { auditItems } from "@/data/content";
import { useContactIntent } from "@/lib/contactIntent";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";

export function Audit() {
  const { requestContact } = useContactIntent();
  const [selected, setSelected] = useState<Set<string>>(() => new Set(auditItems.map((a) => a.title)));

  const toggle = (title: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  const requestReview = () => {
    const areas = auditItems.filter((a) => selected.has(a.title)).map((a) => a.title);
    requestContact({
      need: "improvements",
      message: `I'd like a free website review.${areas.length ? ` Areas I'm most interested in: ${areas.join(", ")}.` : ""}\n\nMy website: `,
    });
  };

  return (
    <Section id="audit" tone="muted" labelledBy="audit-title" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/50" aria-hidden="true" />
              Free website review
            </p>
            <h2 id="audit-title" className="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Already have a website?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Clitchly can identify what may be stopping visitors from becoming customers.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
              Choose the areas you care about most. We'll review your site and send back clear, practical recommendations — no
              obligation to hire us.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" icon="arrow-right" onClick={requestReview}>
                Request a Free Website Review
              </Button>
              <p className="text-sm text-slate-500" aria-live="polite">
                {selected.size} of {auditItems.length} areas selected
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-lift">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Icon name="search" className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Website review checklist</p>
                    <p className="text-xs text-slate-500">Select the areas to include</p>
                  </div>
                </div>
                <div className="hidden h-2 w-28 overflow-hidden rounded-full bg-slate-200 sm:block" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-brand-500 transition-all duration-500"
                    style={{ width: `${(selected.size / auditItems.length) * 100}%` }}
                  />
                </div>
              </div>

              <fieldset className="grid gap-1 p-2 sm:grid-cols-2">
                <legend className="sr-only">Areas to review</legend>
                {auditItems.map((item) => {
                  const checked = selected.has(item.title);
                  return (
                    <label
                      key={item.title}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-xl p-3.5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-500",
                        checked ? "bg-brand-50/60" : "hover:bg-slate-50",
                      )}
                    >
                      <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(item.title)} />
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                          checked ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300 bg-white",
                        )}
                        aria-hidden="true"
                      >
                        {checked && <Icon name="check" className="size-3.5" strokeWidth={3} />}
                      </span>
                      <span>
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                          <Icon name={item.icon} className="size-4 text-slate-400" />
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{item.description}</span>
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
