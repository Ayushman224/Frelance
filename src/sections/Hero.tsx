import { whatsappUrl } from "@/data/site";
import { useContactIntent } from "@/lib/contactIntent";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { HeroVisual } from "./HeroVisual";

const credibility = ["Web Development", "Automation", "AI Agents", "Hosting"];

export function Hero() {
  const { requestContact } = useContactIntent();

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink-950 text-slate-300 outline-none">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="absolute top-[-20%] left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.22),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 pt-14 pb-24 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-24 lg:pb-32">
        <div className="max-w-2xl">
          <p className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="size-1.5 animate-pulse-soft rounded-full bg-emerald-400" aria-hidden="true" />
            Taking on new projects · Working with clients worldwide
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl leading-[1.08] font-extrabold text-balance text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Websites that help small businesses{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 bg-clip-text text-transparent">
              get more customers.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-400">
            Clitchly builds professional websites, AI-powered agents and business automation systems that help small businesses turn
            online visitors into real enquiries.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" icon="arrow-right" onClick={() => requestContact()}>
              Get a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="dark-outline"
              href={whatsappUrl}
              external
              iconLeft="whatsapp"
              aria-label="Chat on WhatsApp (opens in a new tab)"
            >
              Chat on WhatsApp
            </Button>
          </div>
          <Link
            to="/#work"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            View my work
            <Icon name="arrow-right" className="size-4" />
          </Link>

          <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-400" aria-label="Services offered">
            {credibility.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && <span className="size-1 rounded-full bg-slate-600" aria-hidden="true" />}
                {c}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
