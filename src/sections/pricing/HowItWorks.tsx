import { quoteSteps } from "@/data/pricingIndia";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="dark" labelledBy="how-title">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeader
          id="how-title"
          tone="dark"
          eyebrow="How it works"
          title="From your requirements to a clear proposal."
          description="Starting price → tell us what you need → we review your requirements → custom proposal → final invoice."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quoteSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(i % 3) * 80}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="font-display text-sm font-bold text-brand-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
