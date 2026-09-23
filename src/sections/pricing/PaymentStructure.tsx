import { paymentPlans, paymentTerms } from "@/data/pricingIndia";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

const shades = ["bg-brand-700", "bg-brand-500", "bg-brand-300"];
const chips = ["bg-brand-700 text-white", "bg-brand-500 text-white", "bg-brand-100 text-brand-800 ring-1 ring-inset ring-brand-200"];

export function PaymentStructure() {
  return (
    <Section id="payments" tone="muted" labelledBy="payments-title">
      <Container>
        <SectionHeader
          id="payments-title"
          eyebrow="Payments"
          title="How payments work"
          description="Simple milestone-based payments, so you pay as the project progresses."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paymentPlans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 80} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                {plan.milestones.map((m, j) => (
                  <span key={m.label} className={cn("h-full border-r-2 border-white last:border-0", shades[j])} style={{ width: `${m.percent}%` }} />
                ))}
              </div>
              <ol className="mt-6 space-y-4">
                {plan.milestones.map((m, j) => (
                  <li key={m.label} className="flex items-center gap-4">
                    <span className={cn("flex h-11 w-16 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold", chips[j])}>
                      {m.percent}%
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{m.label}</span>
                      <span className="block text-sm text-slate-500">{m.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 rounded-3xl bg-ink-950 p-7 sm:p-8">
          <h3 className="flex items-center gap-2.5 font-sans text-sm font-semibold text-white">
            <Icon name="shield" className="size-5 text-brand-300" />
            Good to know
          </h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {paymentTerms.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
