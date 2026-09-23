import { faqs } from "@/data/content";
import { site, mailtoUrl } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader
            id="faq-title"
            eyebrow="FAQ"
            title="Questions business owners often ask."
            align="left"
          />
          <Reveal delay={80}>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
              Can't find your answer? Email{" "}
              <a href={mailtoUrl} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                {site.email}
              </a>{" "}
              and I'll get back to you.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </Section>
  );
}
