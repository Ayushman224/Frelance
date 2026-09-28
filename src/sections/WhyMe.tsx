import { whyMe } from "@/data/content";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function WhyMe() {
  return (
    <Section id="why" tone="muted" labelledBy="why-title">
      <Container>
        <SectionHeader
          id="why-title"
          eyebrow="Why work with us"
          title="A development partner who understands small business."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {whyMe.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 60}
              className={cn(
                "rounded-2xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-lift lg:col-span-2",
                i === 3 && "lg:col-start-2",
                i === whyMe.length - 1 && "sm:col-span-2 lg:col-span-2",
              )}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
