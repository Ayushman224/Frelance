import { skills } from "@/data/content";
import { site } from "@/data/site";
import { useContactIntent } from "@/lib/contactIntent";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";

export function About() {
  const { requestContact } = useContactIntent();

  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <figure className="relative">
              <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand-100 to-slate-100" aria-hidden="true" />
              <div
                role="img"
                aria-label={`${site.name} logo`}
                className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 shadow-lift"
              >
                <div className="bg-grid absolute inset-0" aria-hidden="true" />
                <img src={site.logo} alt="" width={160} height={160} className="relative size-40 rounded-[1.75rem] object-cover shadow-lift" />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold text-slate-900">{site.name}</p>
                <p className="text-xs text-slate-500">{site.title}</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/50" aria-hidden="true" />
              About
            </p>
            <h2 id="about-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              We are Clitchly.
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-slate-600">
              <p>
                Clitchly builds professional websites, AI agents and automation systems that help businesses create better digital
                experiences and spend less time on repetitive work.
              </p>
              <p>
                Our work spans front-end development with React and TypeScript, backend and API work with Node.js, and data and
                automation workflows with Python and SQL — as well as WordPress sites for businesses that want to manage content
                themselves. We also deploy to cloud platforms like AWS and build AI agents that plug into real business processes.
              </p>
              <p className="font-medium text-slate-800">
                We work directly with clients and focus on clear communication, practical solutions and reliable delivery.
              </p>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technical skills">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <Icon name="map-pin" className="size-4" />
              {site.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button icon="arrow-right" onClick={() => requestContact()}>
                Work with us
              </Button>
              <Button href={site.social.linkedin} external variant="outline" iconLeft="linkedin" aria-label="LinkedIn profile (opens in a new tab)">
                LinkedIn
              </Button>
              <Button href={site.social.github} external variant="outline" iconLeft="github" aria-label="GitHub profile (opens in a new tab)">
                GitHub
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
