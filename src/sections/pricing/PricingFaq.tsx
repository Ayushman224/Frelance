import { pricingFaqs } from "@/data/pricingIndia";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function PricingFaq() {
  return (
    <Section id="pricing-faq" labelledBy="pricing-faq-title">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader id="pricing-faq-title" eyebrow="FAQ" title="Questions about pricing." align="left" />
          <Reveal delay={80}>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
              Revisions and features are based on the agreed project scope, and everything is written into your proposal before
              work begins.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Accordion items={pricingFaqs} />
        </Reveal>
      </Container>
    </Section>
  );
}
