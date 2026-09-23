import { useId, useState } from "react";
import { packageCta, packages, quoteFactors, type PackageTier } from "@/data/pricingIndia";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { usePricingContact } from "./usePricingContact";

/** Roughly equal collapsed height across cards regardless of how many feature groups they have. */
const COLLAPSED_ITEMS = 12;

export function PackageCards() {
  return (
    <section id="packages" aria-label="Pricing packages" className="relative bg-slate-50 pb-20 sm:pb-24">
      <Container className="relative -mt-28 lg:-mt-32">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft sm:p-8">
          <p className="text-sm font-semibold text-slate-900">Your custom quote is based on what you actually need</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Factors considered in your quote">
            {quoteFactors.map((f) => (
              <li key={f} className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            You don't need to work out the price yourself — tell us what you need and we'll prepare the proposal.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: PackageTier }) {
  const [expanded, setExpanded] = useState(false);
  const discuss = usePricingContact();
  const baseId = useId();
  const dark = pkg.highlight === "premium";
  const popular = pkg.highlight === "popular";

  const total = pkg.groups.reduce((n, g) => n + g.items.length, 0);
  const perGroup = Math.ceil(COLLAPSED_ITEMS / pkg.groups.length);
  const hidden = pkg.groups.reduce((n, g) => n + Math.max(0, g.items.length - perGroup), 0);

  const startConversation = (intro: string) =>
    discuss({
      need: pkg.need,
      message: `${intro} ${pkg.name} package (starting from ${pkg.startingPrice}+). About my business and what I need: `,
    });

  return (
    <article
      aria-labelledby={`${baseId}-name`}
      className={cn(
        "group relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8",
        dark
          ? "bg-ink-950 text-slate-300 shadow-lift ring-1 ring-white/10"
          : popular
            ? "bg-white shadow-lift ring-2 ring-brand-600"
            : "border border-slate-200 bg-white shadow-soft hover:shadow-lift",
      )}
    >
      {dark && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.28),transparent)]" />
        </div>
      )}
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3.5 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-md">
          Most Popular
        </span>
      )}

      <div className="relative">
        <h2
          id={`${baseId}-name`}
          className={cn("font-sans text-sm font-semibold tracking-[0.12em] uppercase", dark ? "text-brand-300" : "text-brand-700")}
        >
          {pkg.name}
        </h2>
        <p className={cn("mt-2 min-h-12 font-display text-lg leading-snug font-semibold", dark ? "text-white" : "text-slate-900")}>
          {pkg.label}
        </p>

        <div className="mt-5">
          <p className={cn("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Starting from</p>
          <p className="mt-1 flex items-baseline gap-1">
            <span className={cn("font-display text-4xl font-extrabold tracking-tight sm:text-[2.6rem]", dark ? "text-white" : "text-slate-900")}>
              {pkg.startingPrice}
            </span>
            <span className={cn("text-2xl font-bold", dark ? "text-brand-300" : "text-brand-600")}>+</span>
          </p>
          <p className={cn("mt-2 min-h-10 text-sm leading-relaxed", dark ? "text-slate-400" : "text-slate-600")}>{pkg.priceNote}</p>
        </div>

        <p className={cn("mt-4 min-h-[4.5rem] text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>{pkg.description}</p>

        <Button
          variant={dark || popular ? "primary" : "secondary"}
          size="lg"
          className="mt-6 w-full"
          icon="arrow-right"
          onClick={() => startConversation("I'm interested in the")}
        >
          {packageCta}
        </Button>
      </div>

      <div className={cn("relative mt-8 border-t pt-7", dark ? "border-white/10" : "border-slate-100")}>
        <p className={cn("mb-5 flex items-center gap-2 text-sm font-semibold", dark ? "text-white" : "text-slate-900")}>
          <Icon name={pkg.inherits ? "plus" : "check-circle"} className={cn("size-4", dark ? "text-brand-300" : "text-brand-600")} strokeWidth={2.5} />
          {pkg.inherits ?? "What's included"}
        </p>

        <div id={`${baseId}-features`} className="space-y-6">
          {pkg.groups.map((group) => {
            const items = expanded ? group.items : group.items.slice(0, perGroup);
            return (
              <div key={group.title}>
                <h3 className={cn("font-sans text-xs font-semibold tracking-[0.12em] uppercase", dark ? "text-slate-400" : "text-slate-500")}>
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="check"
                        strokeWidth={2.5}
                        className={cn("mt-0.5 size-4 shrink-0", dark ? "text-brand-300" : "text-brand-600")}
                      />
                      <span className={dark ? "text-slate-200" : "text-slate-700"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls={`${baseId}-features`}
            className={cn(
              "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
              dark ? "text-brand-300 hover:text-brand-200" : "text-brand-700 hover:text-brand-500",
            )}
          >
            {expanded ? "Show fewer inclusions" : `Show all ${total} inclusions`}
            <Icon name="chevron-down" className={cn("size-4 transition-transform duration-300", expanded && "rotate-180")} />
          </button>
        )}

        {pkg.scopeNote && (
          <p className={cn("mt-5 flex items-start gap-2 text-xs leading-relaxed", dark ? "text-slate-400" : "text-slate-500")}>
            <Icon name="alert" className="mt-0.5 size-3.5 shrink-0" />
            {pkg.scopeNote}
          </p>
        )}
      </div>

      <div className={cn("relative mt-7 rounded-2xl p-5", dark ? "bg-white/[0.04] ring-1 ring-white/10" : "bg-slate-50 ring-1 ring-slate-200/70")}>
        <h3 className={cn("font-sans text-sm font-semibold", dark ? "text-white" : "text-slate-900")}>
          Need something beyond the standard package?
        </h3>
        <p className={cn("mt-1.5 text-xs leading-relaxed", dark ? "text-slate-400" : "text-slate-600")}>
          Every business has different requirements. Tell us what you need, and we'll prepare a custom proposal based on the actual
          scope of your project.
        </p>
        <button
          type="button"
          onClick={() => startConversation("I need something beyond the standard scope of the")}
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
            dark ? "text-brand-300 hover:text-brand-200" : "text-brand-700 hover:text-brand-500",
          )}
        >
          {packageCta}
          <Icon name="arrow-right" className="size-4" />
        </button>
      </div>
    </article>
  );
}
