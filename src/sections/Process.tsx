import { processSteps } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Process() {
  return (
    <Section id="process" tone="muted" labelledBy="process-title">
      <Container>
        <SectionHeader
          id="process-title"
          eyebrow="How it works"
          title="A simple, transparent process."
          description="You'll always know what's happening, what's next and what it costs."
        />

        <ol className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <span
            className="absolute top-8 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:items-center lg:text-center">
                <span className="relative flex size-16 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50 text-brand-700">
                  <Icon name={step.icon} className="size-6" />
                  <span className="absolute -top-2 -right-2 rounded-full bg-ink-950 px-2 py-0.5 font-mono text-[11px] font-semibold text-white">
                    {step.number}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
