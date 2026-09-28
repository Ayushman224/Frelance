import { demoBusiness } from "@/data/demoBusiness";
import { LandscapeArt } from "@/components/LandscapeArt";
import { DemoLabel } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { useContactIntent } from "@/lib/contactIntent";
import { Link } from "@/lib/router";

const demoPath = "/demo/austin-greenscape";

const features = [
  "Clear services and service area",
  "Prominent free-estimate call-to-action",
  "Mobile-first layout for on-the-go customers",
  "Quote form ready to connect to email, CRM or Sheets",
];

export function DemoShowcase() {
  const { requestContact } = useContactIntent();

  return (
    <Section id="demo" tone="muted" labelledBy="demo-title" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <DemoLabel />
            <h2 id="demo-title" className="mt-5 text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              See what we can build for your business.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              I create custom business websites around how your customers actually search, compare and get in touch. Here's a
              concept I designed for a fictional landscaping company to show the approach.
            </p>
            <ul className="mt-7 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.95rem] text-slate-700">
                  <Icon name="check-circle" className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to={demoPath} size="lg" icon="arrow-right">
                View Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  requestContact({ need: "new-website", message: "I'd like a website like the Austin GreenScape demo for my business." })
                }
              >
                I want one like this
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link to={demoPath} className="group block rounded-2xl" aria-label="Open the Austin GreenScape demo website (demo concept)">
              <BrowserFrame url="austingreenscape.example" className="transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-white text-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                    <span className="flex items-center gap-2 font-display text-sm font-bold text-emerald-800">
                      <span className="flex size-6 items-center justify-center rounded-md bg-emerald-600 text-white">
                        <Icon name="leaf" className="size-3.5" />
                      </span>
                      {demoBusiness.name}
                    </span>
                    <span className="hidden gap-4 text-[11px] font-medium text-slate-500 sm:flex">
                      <span>Services</span>
                      <span>Service Area</span>
                      <span>Contact</span>
                    </span>
                  </div>

                  <div className="relative overflow-hidden">
                    <LandscapeArt className="absolute inset-0 h-full w-full" />
                    <div className="relative bg-gradient-to-r from-white/95 via-white/80 to-white/10 px-5 py-9 sm:px-7 sm:py-12">
                      <p className="text-[10px] font-semibold tracking-widest text-emerald-700 uppercase">Landscaping & Lawn Care</p>
                      <p className="mt-2 max-w-[16rem] font-display text-xl leading-tight font-extrabold sm:text-2xl">
                        {demoBusiness.headline}
                      </p>
                      <span className="mt-4 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow">
                        {demoBusiness.cta}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-4 sm:p-5">
                    {demoBusiness.services.map((s) => (
                      <div key={s.title} className="rounded-xl border border-slate-100 bg-emerald-50/50 p-3">
                        <Icon name={s.icon} className="size-4 text-emerald-700" />
                        <p className="mt-2 text-xs font-semibold">{s.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserFrame>
            </Link>
            <p className="mt-4 text-center text-xs text-slate-500">
              Fictional business created for demonstration. Not a client project.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
