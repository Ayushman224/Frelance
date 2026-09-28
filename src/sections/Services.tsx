import { services } from "@/data/services";
import { useContactIntent } from "@/lib/contactIntent";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Services() {
  const { requestContact } = useContactIntent();

  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHeader
          id="services-title"
          eyebrow="Services"
          title="Everything you need to build a stronger online presence."
          description="Websites, ads, social media, SEO, AI and automation — built and looked after by one team you can talk to directly."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              as="article"
              delay={(i % 3) * 70}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-100">
                <Icon name={s.icon} className="size-[1.35rem]" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-600">{s.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${s.title} includes`}>
                {s.includes.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                    <Icon name="check" className="size-3 text-brand-600" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <button
                  type="button"
                  onClick={() => requestContact({ need: s.need, message: `I'd like to discuss: ${s.title}.` })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-500"
                  aria-label={`Discuss this service: ${s.title}`}
                >
                  Discuss this service
                  <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
