import { maintenancePlan, pricingPlans } from "@/data/pricing";
import type { PricingPlan } from "@/types";
import { useContactIntent } from "@/lib/contactIntent";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Pricing() {
  const { requestContact } = useContactIntent();
  const discuss = (plan: PricingPlan) =>
    requestContact({ need: plan.need, message: `I'm interested in the ${plan.name} package. Could you share pricing for my project? ` });

  return (
    <Section id="pricing" labelledBy="pricing-title">
      <Container>
        <SectionHeader
          id="pricing-title"
          eyebrow="Pricing"
          title="Clear packages. Tailored to your project."
          description="Every business is different, so pricing is based on your requirements — not fixed packages. Tell me what you need and you'll get a clear quote before any work begins."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.id}
              as="article"
              delay={i * 80}
              className={cn(
                "relative flex flex-col rounded-3xl p-8",
                plan.recommended ? "bg-ink-950 text-slate-300 shadow-lift ring-1 ring-ink-950" : "border border-slate-200 bg-white",
              )}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Recommended for most businesses
                </span>
              )}
              <h3 id={`plan-${plan.id}`} className={cn("font-sans text-sm font-semibold tracking-[0.12em] uppercase", plan.recommended ? "text-brand-300" : "text-brand-700")}>
                {plan.name}
              </h3>
              <p className="mt-5">
                <span className={cn("block font-display text-3xl font-extrabold tracking-tight", plan.recommended ? "text-white" : "text-slate-900")}>
                  Custom quote
                </span>
                <span className={cn("mt-1 block text-sm", plan.recommended ? "text-brand-300" : "text-brand-700")}>Contact to know pricing</span>
              </p>
              <p className={cn("mt-3 text-sm leading-relaxed", plan.recommended ? "text-slate-400" : "text-slate-600")}>{plan.summary}</p>
              <ul className={cn("mt-7 space-y-3 border-t pt-7 text-sm", plan.recommended ? "border-white/10" : "border-slate-100")}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      strokeWidth={2.5}
                      className={cn("mt-0.5 size-4 shrink-0", plan.recommended ? "text-brand-300" : "text-brand-600")}
                    />
                    <span className={plan.recommended ? "text-slate-200" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  variant={plan.recommended ? "primary" : "outline"}
                  className="w-full"
                  icon="arrow-right"
                  onClick={() => discuss(plan)}
                  aria-label={`Get a custom quote — ${plan.name}`}
                >
                  Get a Custom Quote
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <article
            aria-labelledby="plan-maintenance"
            className="grid items-center gap-6 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-brand-50/60 p-8 lg:grid-cols-[1fr_1.6fr_auto] lg:gap-10"
          >
            <div>
              <h3 id="plan-maintenance" className="font-sans text-sm font-semibold tracking-[0.12em] text-brand-700 uppercase">
                {maintenancePlan.name}
              </h3>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
                <span className="font-display text-2xl font-extrabold text-slate-900">Monthly plan</span>
                <span className="text-sm text-brand-700">Contact to know pricing</span>
              </p>
              <p className="mt-2 text-sm text-slate-600">{maintenancePlan.summary}</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {maintenancePlan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-700">
                  <Icon name="check" strokeWidth={2.5} className="size-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="secondary" icon="arrow-right" onClick={() => discuss(maintenancePlan)} aria-label="Get a custom quote — Maintenance">
              Get a Custom Quote
            </Button>
          </article>
        </Reveal>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <Icon name="alert" className="size-4 shrink-0" />
          Final pricing depends on project scope, functionality and integrations.
        </p>
      </Container>
    </Section>
  );
}
