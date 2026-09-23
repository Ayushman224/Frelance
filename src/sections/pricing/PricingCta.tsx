import { packageCta } from "@/data/pricingIndia";
import { whatsappUrl } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { usePricingContact } from "./usePricingContact";

export function PricingCta() {
  const discuss = usePricingContact();

  return (
    <section aria-labelledby="pricing-cta-title" className="bg-white pb-20 sm:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
          <div
            className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(56_102_246/0.3),transparent)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="pricing-cta-title" className="text-3xl font-bold text-balance text-white sm:text-4xl">
              Not sure which package you need?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">That's completely fine.</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              Tell us what your business does, what you currently have and what you want to achieve. We'll help define the right
              scope and prepare a custom proposal based on your actual requirements.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                icon="arrow-right"
                onClick={() =>
                  discuss({
                    message:
                      "I'm not sure which package I need. What my business does, what I currently have and what I want to achieve: ",
                  })
                }
              >
                {packageCta}
              </Button>
              <Button size="lg" variant="dark-outline" href={whatsappUrl} external iconLeft="whatsapp" aria-label="Chat on WhatsApp (opens in a new tab)">
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-5 text-sm text-slate-500">No obligation. Just a conversation about your requirements.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
