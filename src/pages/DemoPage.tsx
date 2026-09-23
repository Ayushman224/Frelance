import { useState, type FormEvent } from "react";
import { demoBusiness } from "@/data/demoBusiness";
import { site } from "@/data/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Link } from "@/lib/router";
import { LandscapeArt } from "@/components/LandscapeArt";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

const demoNav = [
  { label: "Services", id: "demo-services" },
  { label: "How it works", id: "demo-process" },
  { label: "Service area", id: "demo-area" },
  { label: "Free estimate", id: "demo-estimate" },
];

export default function DemoPage() {
  useDocumentMeta({
    title: "Austin GreenScape — Demo Concept | Ayushman Tripathi",
    description: "A fictional landscaping website concept designed by Ayushman Tripathi to demonstrate small-business web design. Not a client project.",
    noIndex: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <div className="sticky top-0 z-50 border-b border-amber-300 bg-amber-50 text-amber-950">
        <Container className="flex flex-col gap-2 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-semibold">
            <span className="size-2 rounded-full bg-amber-500" aria-hidden="true" />
            Demo Concept — Not a Client Project
            <span className="hidden font-normal text-amber-800 md:inline">· Fictional business designed by {site.name}</span>
          </p>
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
              <Icon name="arrow-left" className="size-4" />
              Back to main site
            </Link>
            <Link to="/#contact" className="rounded-full bg-amber-900 px-3 py-1 text-xs font-semibold text-white hover:bg-amber-800">
              Get a site like this
            </Link>
          </div>
        </Container>
      </div>

      <header className="border-b border-slate-100 bg-white">
        <Container className="flex h-16 items-center justify-between gap-6">
          <a href="#demo-top" className="flex items-center gap-2 font-display text-lg font-bold text-emerald-900">
            <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Icon name="leaf" className="size-4" />
            </span>
            {demoBusiness.name}
          </a>
          <nav aria-label="Demo site" className="hidden md:block">
            <ul className="flex gap-6 text-sm font-medium text-slate-600">
              {demoNav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-emerald-700">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#demo-estimate"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500"
          >
            {demoBusiness.cta}
          </a>
        </Container>
      </header>

      <main id="main">
        <section id="demo-top" aria-labelledby="demo-hero-title" className="relative overflow-hidden">
          <LandscapeArt className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" aria-hidden="true" />
          <Container className="relative py-20 sm:py-28">
            <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">{demoBusiness.industry}</p>
            <h1 id="demo-hero-title" className="mt-4 max-w-2xl text-4xl leading-tight font-extrabold text-emerald-950 sm:text-5xl">
              {demoBusiness.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">{demoBusiness.subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo-estimate"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-500"
              >
                {demoBusiness.cta}
                <Icon name="arrow-right" className="size-4" />
              </a>
              <a
                href="#demo-services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-900/15 bg-white/80 px-6 font-semibold text-emerald-950 hover:bg-white"
              >
                View Services
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-emerald-950/80">
              {["Residential & commercial", "Free on-site estimates", "Serving Austin, TX"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check-circle" className="size-4 text-emerald-600" />
                  {t}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section id="demo-services" aria-labelledby="demo-services-title" className="scroll-mt-28 bg-emerald-50/40 py-20">
          <Container>
            <h2 id="demo-services-title" className="text-center text-3xl font-bold text-emerald-950 sm:text-4xl">
              Our services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Everything your outdoor space needs, from weekly mowing to full redesigns.</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {demoBusiness.services.map((s) => (
                <article key={s.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-emerald-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="demo-process" aria-labelledby="demo-process-title" className="scroll-mt-28 py-20">
          <Container>
            <h2 id="demo-process-title" className="text-center text-3xl font-bold text-emerald-950 sm:text-4xl">
              How it works
            </h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {demoBusiness.steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-slate-200 p-6">
                  <span className="font-mono text-sm font-semibold text-emerald-600">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-emerald-950">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="demo-area" aria-labelledby="demo-area-title" className="scroll-mt-28 bg-emerald-950 py-20 text-emerald-100">
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 id="demo-area-title" className="text-3xl font-bold text-white sm:text-4xl">
                Proudly serving Austin and nearby areas
              </h2>
              <p className="mt-4 text-emerald-100/80">Not sure if we cover your neighborhood? Request an estimate and we'll let you know.</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {demoBusiness.serviceArea.map((a) => (
                <li key={a} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm">
                  <Icon name="map-pin" className="size-4 text-emerald-300" />
                  {a}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section id="demo-estimate" aria-labelledby="demo-estimate-title" className="scroll-mt-28 py-20">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 id="demo-estimate-title" className="text-3xl font-bold text-emerald-950 sm:text-4xl">
                Get a free estimate
              </h2>
              <p className="mt-4 text-slate-600">Tell us a little about your property and we'll get back to you with next steps.</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="size-4 text-emerald-600" />
                  {demoBusiness.phone} <span className="text-slate-400">(demo number)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="size-4 text-emerald-600" />
                  {demoBusiness.email} <span className="text-slate-400">(demo)</span>
                </li>
              </ul>
            </div>
            <DemoEstimateForm />
          </Container>
        </section>

        <section aria-labelledby="demo-cta-title" className="border-t border-slate-200 bg-slate-50 py-16">
          <Container className="flex flex-col items-center gap-5 text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Demo concept by {site.name}</p>
            <h2 id="demo-cta-title" className="max-w-2xl text-2xl font-bold text-slate-900 sm:text-3xl">
              Want a website like this for your business?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 font-semibold text-white hover:bg-brand-500"
              >
                Get a Free Consultation
                <Icon name="arrow-right" className="size-4" />
              </Link>
              <Link to="/" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 font-semibold text-slate-900 hover:bg-slate-50">
                Back to main site
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
        <Container className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>{demoBusiness.name} is a fictional business created for demonstration purposes.</p>
          <p>Designed & built by {site.name}</p>
        </Container>
      </footer>
    </div>
  );
}

function DemoEstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get("demo-name")).trim() || !String(data.get("demo-zip")).trim()) {
      setError("Please enter your name and ZIP code.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
        <Icon name="check-circle" className="size-8 text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-emerald-950">Demo only — nothing was sent.</h3>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
          In a real build, this request would be emailed to the business owner, saved to Google Sheets or a CRM, and the customer
          would receive an automatic confirmation.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-emerald-700 hover:underline">
          Try the form again
        </button>
      </div>
    );
  }

  const input =
    "mt-1.5 block h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <p className="sm:col-span-2 rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-900">
        Demo form — submissions are not sent anywhere.
      </p>
      <label className="text-sm font-medium text-slate-800">
        Name
        <input name="demo-name" autoComplete="name" className={input} placeholder="Your name" />
      </label>
      <label className="text-sm font-medium text-slate-800">
        ZIP code
        <input name="demo-zip" inputMode="numeric" autoComplete="postal-code" className={input} placeholder="78704" />
      </label>
      <label className="text-sm font-medium text-slate-800 sm:col-span-2">
        Service
        <select name="demo-service" className={input} defaultValue={demoBusiness.services[0].title}>
          {demoBusiness.services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-800 sm:col-span-2">
        Details
        <textarea name="demo-details" rows={4} className={`${input} h-auto py-3`} placeholder="Property size, timing, anything else we should know" />
      </label>
      {error && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-600 sm:col-span-2">
          <Icon name="alert" className="size-4" />
          {error}
        </p>
      )}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-500 sm:col-span-2"
      >
        {demoBusiness.cta}
        <Icon name="arrow-right" className="size-4" />
      </button>
    </form>
  );
}
