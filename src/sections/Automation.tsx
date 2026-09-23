import { automationExamples, workflowNodes } from "@/data/content";
import { useContactIntent } from "@/lib/contactIntent";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Automation() {
  const { requestContact } = useContactIntent();

  return (
    <Section id="automation" labelledBy="automation-title">
      <Container>
        <SectionHeader
          id="automation-title"
          eyebrow="Business automation"
          title="Less manual work. More time for your business."
          description="Every enquiry can flow from your website to the right place automatically — logged, organised and sent to you without copy-pasting."
        />

        <Reveal className="mt-14">
          <div className="bg-grid-light relative rounded-3xl border border-slate-200 bg-slate-50/60 p-5 sm:p-8">
            <ol className="flex flex-col items-stretch lg:flex-row" aria-label="Example automation workflow">
              {workflowNodes.map((node, i) => {
                const last = i === workflowNodes.length - 1;
                return (
                  <li key={node.label} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-stretch">
                    <div
                      className={cn(
                        "flex w-full items-center gap-3 rounded-2xl border bg-white p-4 shadow-soft lg:flex-col lg:justify-start lg:gap-3 lg:px-3 lg:py-5 lg:text-center",
                        last ? "border-brand-300 ring-4 ring-brand-500/10" : "border-slate-200",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-xl",
                          last ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700",
                        )}
                      >
                        <Icon name={node.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{node.label}</span>
                        <span className="mt-0.5 block text-xs text-slate-500">{node.caption}</span>
                      </span>
                      <span className="ml-auto font-mono text-[11px] text-slate-400 lg:hidden" aria-hidden="true">
                        0{i + 1}
                      </span>
                    </div>
                    {!last && (
                      <span className="flex items-center justify-center py-1 lg:self-center lg:px-1 lg:py-0" aria-hidden="true">
                        <span className="flow-line-v h-6 w-0.5 lg:hidden" />
                        <span className="flow-line hidden h-0.5 w-5 lg:block" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h3 className="text-xl font-bold">Examples of what can be automated</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {automationExamples.map((ex) => (
                <li key={ex.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800">
                  <Icon name={ex.icon} className="size-4 text-brand-600" />
                  {ex.title}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl bg-ink-950 p-8 text-slate-400">
            <Icon name="workflow" className="size-7 text-brand-300" />
            <p className="mt-4 font-display text-xl font-semibold text-white">Have a repetitive task that eats your week?</p>
            <p className="mt-2 text-sm leading-relaxed">
              Tell me how it works today. I'll suggest a practical way to automate it with the tools you already use.
            </p>
            <Button className="mt-6" icon="arrow-right" onClick={() => requestContact({ need: "automation" })}>
              Discuss an Automation
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
