import { site } from "@/data/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { CarePlan } from "@/sections/pricing/CarePlan";
import { ComparisonTable } from "@/sections/pricing/ComparisonTable";
import { CustomRequirements } from "@/sections/pricing/CustomRequirements";
import { HowItWorks } from "@/sections/pricing/HowItWorks";
import { PackageCards } from "@/sections/pricing/PackageCards";
import { PaymentStructure } from "@/sections/pricing/PaymentStructure";
import { PricingCta } from "@/sections/pricing/PricingCta";
import { PricingFaq } from "@/sections/pricing/PricingFaq";
import { PricingHero } from "@/sections/pricing/PricingHero";

/** Unlisted INR pricing page: reachable only via /pricing, never linked from the nav or footer. */
export default function PricingPage() {
  useDocumentMeta({
    title: `Pricing | ${site.name}`,
    description:
      "Website, SEO, AI agent and automation packages for Indian businesses. Starting prices in ₹ with a custom proposal based on your requirements.",
    noIndex: true,
  });

  return (
    <>
      <PricingHero />
      <PackageCards />
      <ComparisonTable />
      <CarePlan />
      <CustomRequirements />
      <HowItWorks />
      <PaymentStructure />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
