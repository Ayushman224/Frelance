import { carePlan } from "@/data/pricingIndia";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { usePricingContact } from "./usePricingContact";

export function CarePlan() {
  const discuss = usePricingContact();

  return (
    <Section id="care" tone="muted" labelledBy="care-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/50" aria-hidden="true" />
              {carePlan.label}
            </p>
            <h2 id="care-title" className="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              {carePlan.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{carePlan.description}</p>

            <div className="mt-8 rounded-3xl bg-ink-950 p-7 text-slate-400 shadow-lift">
              <p className="text-sm">Monthly plan</p>
              <p className="mt-1 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-extrabold text-white">{carePlan.price}</span>
                <span className="text-slate-400">{carePlan.period}</span>
              </p>
              <p className="mt-4 flex items-start gap-2.5 rounded-xl bg-white/5 px-4 py-3 text-sm leading-relaxed text-slate-300 ring-1 ring-white/10">
                <Icon name="alert" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                Optional monthly service. Not included in the initial website development price.
              </p>
              <Button
                className="mt-6 w-full sm:w-auto"
                icon="arrow-right"
                onClick={() =>
                  discuss({
                    need: "hosting-maintenance",
                    message: `I'm interested in the ${carePlan.label} plan (${carePlan.price}${carePlan.period}). My website: `,
                  })
                }
              >
                Add Website Care
              </Button>
            </div>
          </Reveal>

          <div className="grid content-start gap-5 sm:grid-cols-2">
            {carePlan.groups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 80}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name={group.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Icon name="check" strokeWidth={2.5} className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal delay={160} className="rounded-3xl border border-dashed border-brand-300 bg-brand-50/40 p-6 sm:col-span-2">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                  <Icon name="trending" className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{carePlan.growthTitle}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{carePlan.growthIntro}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Examples of monthly growth work">
                {carePlan.growth.map((g) => (
                  <li key={g} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                    {g}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                <Icon name="alert" className="mt-0.5 size-3.5 shrink-0" />
                {carePlan.growthNote}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
