import { problems } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

const outcomes = [
  { label: "Attract", icon: "search", text: "Found and trusted" },
  { label: "Inform", icon: "layout", text: "Clear services & next steps" },
  { label: "Capture", icon: "inbox", text: "Enquiries that reach you" },
] as const;

export function Problem() {
  return (
    <Section id="problem" tone="muted" labelledBy="problem-title">
      <Container>
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="Your website should do more than just exist."
          description="Many small-business websites look fine but quietly lose customers — through slow pages, unclear next steps and enquiries that get handled by hand."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              as="article"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                <Icon name={p.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-rose-400" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-3xl bg-ink-950 p-8 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <p className="font-display text-xl leading-snug font-semibold text-balance text-white sm:text-2xl">
              I help turn a basic online presence into a system that{" "}
              <span className="text-brand-300">attracts, informs and captures</span> potential customers.
            </p>
            <ol className="grid grid-cols-3 gap-3" aria-label="How a better website works">
              {outcomes.map((o) => (
                <li key={o.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <Icon name={o.icon} className="mx-auto size-5 text-brand-300" />
                  <p className="mt-2 text-sm font-semibold text-white">{o.label}</p>
                  <p className="mt-1 hidden text-xs text-slate-400 sm:block">{o.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
