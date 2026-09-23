import { pricingNote } from "@/data/pricingIndia";
import { Link } from "@/lib/router";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

const points: { icon: IconName; text: string }[] = [
  { icon: "layout", text: "Starting prices, not fixed packages" },
  { icon: "clipboard", text: "Custom proposal before work begins" },
  { icon: "calendar", text: "Milestone-based payments" },
];

export function PricingHero() {
  return (
    <section aria-labelledby="pricing-page-title" className="relative overflow-hidden bg-ink-950 text-slate-300">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="absolute top-[-30%] left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.22),transparent)]"
        aria-hidden="true"
      />
      <Container className="relative pt-16 pb-36 text-center sm:pt-20 lg:pt-24 lg:pb-44">
        <p className="reveal is-visible mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
          <span className="size-1.5 rounded-full bg-brand-400" aria-hidden="true" />
          Pricing · India
        </p>
        <h1 id="pricing-page-title" className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-extrabold text-balance text-white sm:text-5xl lg:text-[3.5rem]">
          Simple pricing.{" "}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 bg-clip-text text-transparent">
            Built around your business.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-400">
          Choose a starting package and customize it around what your business actually needs.
        </p>

        <p className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left text-sm leading-relaxed text-slate-300">
          <Icon name="alert" className="mt-0.5 size-4 shrink-0 text-brand-300" />
          {pricingNote}
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
          {points.map((p) => (
            <li key={p.text} className="flex items-center gap-2">
              <Icon name={p.icon} className="size-4 text-brand-300" />
              {p.text}
            </li>
          ))}
        </ul>

        <Link
          to="/pricing#compare"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 underline-offset-4 hover:text-brand-200 hover:underline"
        >
          Compare packages
          <Icon name="chevron-down" className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
