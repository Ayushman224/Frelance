import { useContactIntent } from "@/lib/contactIntent";
import { AgentChat, LeadSummary, useAgentDemo } from "@/components/AgentChatDemo";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";

const capabilities: { icon: IconName; text: string }[] = [
  { icon: "chat", text: "Answers common questions from your own business information" },
  { icon: "target", text: "Qualifies enquiries with the questions you'd ask" },
  { icon: "inbox", text: "Captures contact details and quote requests" },
  { icon: "bell", text: "Notifies you instantly by email, Sheets or CRM" },
];

export function AiAgent() {
  const { requestContact } = useContactIntent();
  const demo = useAgentDemo();

  return (
    <Section id="ai-agents" tone="dark" labelledBy="ai-title" className="overflow-hidden">
      <div
        className="absolute top-0 right-0 h-[40rem] w-[40rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.18),transparent)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_auto_1fr] lg:gap-x-16">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase">
              <span className="h-px w-6 bg-brand-300/60" aria-hidden="true" />
              AI website agents
            </p>
            <h2 id="ai-title" className="text-3xl font-bold text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Turn your website into a 24/7 sales assistant.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              An AI website agent can answer common questions, qualify enquiries and capture customer information even when
              you're unavailable.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c.text} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                    <Icon name={c.icon} className="size-4" />
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center">
            <AgentChat demo={demo} />
          </Reveal>

          <Reveal delay={80} className="lg:col-start-1 lg:row-start-2">
            <LeadSummary demo={demo} />
          </Reveal>

          <Reveal delay={120} className="lg:col-start-1 lg:row-start-3">
            <Button size="lg" icon="arrow-right" onClick={() => requestContact({ need: "ai-agent" })}>
              Add an AI Agent to My Website
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
