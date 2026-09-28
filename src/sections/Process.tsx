import { Fragment, useEffect, useRef, useState, type RefObject } from "react";
import { processSteps } from "@/data/content";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import type { ProcessStep } from "@/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeader } from "@/components/ui/Section";

const TOTAL = processSteps.length;
const pad = (n: number) => String(n).padStart(2, "0");

/** Scroll distance (in viewport heights) spent on each step in the pinned desktop layout. */
const STEP_VH = 60;
/** Matches the navbar height at lg (4.5rem). */
const NAV_OFFSET = 72;

export function Process() {
  // The pinned layout needs enough vertical room for the stage; otherwise fall back to the stacked timeline.
  const pinned = useMediaQuery("(min-width: 1024px) and (min-height: 620px)");

  return (
    <section id="process" aria-labelledby="process-title" className="relative bg-ink-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
        <div className="absolute top-0 left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.18),transparent)]" />
      </div>

      <Container className="relative pt-20 sm:pt-24 lg:pt-28">
        <SectionHeader
          id="process-title"
          tone="dark"
          eyebrow="How we work"
          title="How We Turn Your Idea Into a Working Solution"
          description="From the first conversation to launch and ongoing support, every project follows a clear process."
        />
      </Container>

      {pinned ? <PinnedJourney /> : <StackedJourney />}

      <Container className="relative pb-20 sm:pb-24 lg:pb-28">
        <ProcessCta />
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- desktop */

function usePinnedProgress(trackRef: RefObject<HTMLDivElement | null>) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - (window.innerHeight - NAV_OFFSET);
      const progress = Math.min(1, Math.max(0, (NAV_OFFSET - rect.top) / scrollable));
      setActive(Math.min(TOTAL - 1, Math.floor(progress * TOTAL)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [trackRef]);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollable = rect.height - (window.innerHeight - NAV_OFFSET);
    const target = window.scrollY + rect.top - NAV_OFFSET + ((index + 0.15) / TOTAL) * scrollable;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
  };

  return { active, goTo };
}

function PinnedJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { active, goTo } = usePinnedProgress(trackRef);

  return (
    <div ref={trackRef} className="relative" style={{ height: `calc(100vh - ${NAV_OFFSET}px + ${TOTAL * STEP_VH}vh)` }}>
      <div className="sticky flex items-center" style={{ top: NAV_OFFSET, height: `calc(100vh - ${NAV_OFFSET}px)` }}>
        <Container className="grid grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] items-center gap-12 xl:gap-16">
          <div>
            <div className="flex items-end justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Workflow</p>
                <p className="mt-1 font-display text-sm font-semibold text-slate-300">Idea → Launch → Growth</p>
              </div>
              <p className="font-display text-3xl font-extrabold tabular-nums text-white" aria-live="polite" aria-atomic="true">
                {pad(active + 1)}
                <span className="text-lg text-slate-600"> / {pad(TOTAL)}</span>
              </p>
            </div>
            <WorkflowRail active={active} onSelect={goTo} />
          </div>

          <div className="relative">
            <div
              className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.14),transparent)]"
              aria-hidden="true"
            />
            <div className="relative grid rounded-3xl border border-white/10 bg-ink-900/80 p-8 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] backdrop-blur-sm xl:p-10">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={cn(
                    "col-start-1 row-start-1 transition-all duration-500 ease-out",
                    i === active ? "translate-y-0 opacity-100" : cn("pointer-events-none opacity-0", i < active ? "-translate-y-3" : "translate-y-3"),
                  )}
                >
                  <StepContent step={step} index={i} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function WorkflowRail({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <ol className="relative mt-7 space-y-5 xl:space-y-6" aria-label="Project workflow">
      <span className="absolute top-6 bottom-6 left-6 w-px -translate-x-1/2 bg-white/10" aria-hidden="true">
        <span
          className="absolute inset-0 origin-top bg-gradient-to-b from-brand-300 to-brand-600 shadow-[0_0_12px_rgb(92_139_253/0.7)] transition-transform duration-500 ease-out"
          style={{ transform: `scaleY(${active / (TOTAL - 1)})` }}
        />
      </span>
      {processSteps.map((step, i) => {
        const state = i < active ? "done" : i === active ? "active" : "todo";
        return (
          <li key={step.number} className="relative">
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-current={state === "active" ? "step" : undefined}
              className="group flex w-full items-center gap-4 rounded-2xl text-left"
            >
              <Node number={step.number} state={state} />
              <span className="min-w-0">
                <span
                  className={cn(
                    "block text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300",
                    state === "active" ? "text-brand-300" : "text-slate-600",
                  )}
                >
                  Step {step.number}
                </span>
                <span
                  className={cn(
                    "block font-display font-semibold transition-all duration-300",
                    state === "active" ? "text-lg text-white" : state === "done" ? "text-base text-slate-300" : "text-base text-slate-500 group-hover:text-slate-300",
                  )}
                >
                  {step.short}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function Node({ number, state }: { number: string; state: "done" | "active" | "todo" }) {
  return (
    <span
      className={cn(
        "relative flex size-12 shrink-0 items-center justify-center rounded-2xl border font-display text-sm font-bold transition-all duration-500",
        state === "active" &&
          "scale-110 border-brand-400 bg-brand-600 text-white shadow-[0_0_0_6px_rgb(56_102_246/0.15),0_10px_30px_-6px_rgb(56_102_246/0.8)]",
        state === "done" && "border-brand-400/40 bg-ink-900 text-brand-300",
        state === "todo" && "border-white/10 bg-ink-900 text-slate-500",
      )}
    >
      {state === "done" ? <Icon name="check" className="size-4" strokeWidth={3} title={`Step ${number} completed`} /> : number}
    </span>
  );
}

/* ----------------------------------------------------------------- shared */

function StepContent({ step, index, compact = false }: { step: ProcessStep; index: number; compact?: boolean }) {
  return (
    <div className="relative">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30",
              compact ? "size-11" : "size-14",
            )}
          >
            <Icon name={step.icon} className={compact ? "size-5" : "size-6"} />
          </span>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase">
            Step {index + 1} of {TOTAL}
          </p>
        </div>
        {!compact && (
          <span className="font-display text-7xl leading-none font-extrabold text-white/[0.06] select-none" aria-hidden="true">
            {step.number}
          </span>
        )}
      </div>

      <h3 className={cn("font-bold text-balance text-white", compact ? "mt-5 text-xl" : "mt-5 text-2xl xl:text-3xl")}>{step.title}</h3>
      <p className={cn("leading-relaxed text-slate-400", compact ? "mt-2 text-[0.95rem]" : "mt-3 text-base xl:text-lg")}>{step.description}</p>

      {step.flow && <MiniFlow items={step.flow} continuous={step.number === "06"} compact={compact} />}

      <ul className={cn("grid gap-x-6 gap-y-2.5", compact ? "mt-5" : "mt-6 sm:grid-cols-2")}>
        {step.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Icon name="check" strokeWidth={2.5} className="mt-0.5 size-4 shrink-0 text-brand-400" />
            {p}
          </li>
        ))}
      </ul>

      {step.note && (
        <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-brand-500/10 px-4 py-3 text-sm leading-relaxed text-brand-100 ring-1 ring-brand-400/20">
          <Icon name="alert" className="mt-0.5 size-4 shrink-0 text-brand-300" />
          {step.note}
        </p>
      )}

      {step.label && (
        <p className="mt-6 flex items-center gap-2.5 font-display text-sm font-semibold text-brand-300">
          <span className="h-px w-6 bg-brand-400/60" aria-hidden="true" />
          {step.label}
        </p>
      )}
    </div>
  );
}

/** Arrows sit between list items as presentational siblings, so the list stays readable to screen readers. */
function MiniFlow({ items, continuous, compact }: { items: string[]; continuous: boolean; compact: boolean }) {
  return (
    <ol className="mt-6 flex flex-wrap items-center gap-2" aria-label={continuous ? "After launch" : "Stages"}>
      {items.map((item, i) => (
        <Fragment key={item}>
          <li
            className={cn(
              "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium",
              continuous && i === 0 ? "bg-brand-600 text-white" : "bg-white/5 text-slate-200 ring-1 ring-white/10",
            )}
          >
            {(!continuous || compact) && <span className="font-mono text-[10px] text-brand-300">{i + 1}</span>}
            {continuous ? item.toUpperCase() : item}
          </li>
          {!compact && i < items.length - 1 && (
            <li aria-hidden="true" className="flex">
              <Icon name="arrow-right" className="size-3.5 shrink-0 text-brand-400/70" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}

/* ----------------------------------------------------------------- mobile */

function StackedJourney() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;
      const focus = window.innerHeight * 0.55;
      const rect = list.getBoundingClientRect();
      setFill(Math.min(rect.height, Math.max(0, focus - rect.top)));
      let current = 0;
      list.querySelectorAll<HTMLElement>(":scope > li").forEach((li, i) => {
        if (li.getBoundingClientRect().top <= focus) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Container className="relative mt-12 sm:mt-14">
      <div className="mx-auto max-w-2xl">
        <div className="sticky top-[4.75rem] z-10 mb-6 flex justify-center">
          <p
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-ink-900/90 px-4 py-2 text-xs font-medium text-slate-300 shadow-lg backdrop-blur"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="font-display font-bold tabular-nums text-white">
              {pad(active + 1)} <span className="text-slate-500">/ {pad(TOTAL)}</span>
            </span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            {processSteps[active].short}
          </p>
        </div>

        <ol ref={listRef} className="relative space-y-6" aria-label="Project workflow">
          <span className="absolute top-6 bottom-6 left-6 w-px -translate-x-1/2 overflow-hidden bg-white/10" aria-hidden="true">
            <span
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-brand-300 to-brand-600 shadow-[0_0_12px_rgb(92_139_253/0.7)]"
              style={{ height: fill }}
            />
          </span>
          {processSteps.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "todo";
            return (
              <li key={step.number} className="relative flex gap-4 sm:gap-5">
                <Node number={step.number} state={state} />
                <div
                  className={cn(
                    "min-w-0 flex-1 rounded-3xl border p-5 transition-colors duration-500 sm:p-6",
                    state === "active" ? "border-brand-400/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02]",
                  )}
                >
                  <StepContent step={step} index={i} compact />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Container>
  );
}

/* -------------------------------------------------------------------- CTA */

function ProcessCta() {
  return (
    <Reveal className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-12 text-center sm:px-12 lg:mt-12">
      <div
        className="absolute -top-24 left-1/2 h-48 w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.35),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_10px_30px_-6px_rgb(56_102_246/0.8)]">
          <Icon name="trending" className="size-5" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">Ready to get started?</h3>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-400">
          Tell us what you're building, what isn't working or what you'd like to improve.
        </p>
        <Button to="/#contact" size="lg" icon="arrow-right" className="mt-8">
          Discuss Your Requirements
        </Button>
        <p className="mx-auto mt-5 max-w-md text-sm text-slate-500">
          Let's start with a conversation. We'll help define the right solution for your business.
        </p>
      </div>
    </Reveal>
  );
}
