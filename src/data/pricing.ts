import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Website",
    summary: "A professional online presence for a new or small business.",
    need: "new-website",
    features: [
      "Professional business website",
      "Responsive design",
      "Up to 5 core pages",
      "Contact form",
      "Google Maps",
      "Mobile optimization",
      "Deployment",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    summary: "More features to showcase your work and capture quote requests.",
    need: "new-website",
    recommended: true,
    features: [
      "Everything in Starter",
      "Gallery",
      "Reviews section",
      "Quote request system",
      "Analytics",
      "Basic SEO",
      "More customization",
    ],
  },
  {
    id: "automation-ai",
    name: "Automation / AI",
    summary: "Connect your website to the tools and workflows behind your business.",
    need: "ai-agent",
    features: [
      "Website integration",
      "Lead capture",
      "Automation workflows",
      "AI assistant",
      "Notifications",
      "API / CRM integration",
    ],
  },
];

export const maintenancePlan: PricingPlan = {
  id: "maintenance",
  name: "Maintenance",
  summary: "Keep your website secure, updated and running smoothly.",
  need: "hosting-maintenance",
  features: ["Hosting support", "Updates", "Bug fixes", "Small changes", "Monitoring"],
};
