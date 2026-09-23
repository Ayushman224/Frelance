import { customExamples, packageCta } from "@/data/pricingIndia";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { usePricingContact } from "./usePricingContact";

export function CustomRequirements() {
  const discuss = usePricingContact();

  return (
    <Section id="custom" labelledBy="custom-title">
      <Container>
        <Reveal className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-white to-brand-50/60 p-7 shadow-soft sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/50" aria-hidden="true" />
              Custom requirements
            </p>
            <h2 id="custom-title" className="text-3xl font-bold text-balance sm:text-4xl">
              Need something custom?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Your business may need features that aren't listed in our standard packages.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you need additional pages, custom functionality, integrations, automation, AI, booking systems, payment
              systems, dashboards or something specific to your workflow, tell us what you need.
            </p>
            <Button
              size="lg"
              icon="arrow-right"
              className="mt-8"
              onClick={() => discuss({ need: "other", message: "I need some custom features. Here's what my business needs: " })}
            >
              {packageCta}
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              We'll review your requirements and provide a custom proposal before development begins.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3" aria-label="Examples of custom requirements">
            {customExamples.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name={c.icon} className="size-[18px]" />
                </span>
                {c.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
