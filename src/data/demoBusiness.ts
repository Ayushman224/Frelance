import type { IconName } from "@/components/ui/Icon";

/** Fictional business used for the demo concept. Not a client. */
export const demoBusiness = {
  name: "Austin GreenScape",
  industry: "Landscaping & Lawn Care",
  headline: "Professional Landscaping in Austin, TX",
  subheadline:
    "Reliable lawn care, thoughtful landscape design and year-round garden maintenance for homes and businesses across Austin.",
  cta: "Get a Free Estimate",
  phone: "(512) 000-0000",
  email: "hello@austingreenscape.example",
  serviceArea: ["Downtown Austin", "South Congress", "Zilker", "East Austin", "Round Rock", "Cedar Park"],
  services: [
    {
      title: "Lawn Care",
      icon: "leaf",
      description: "Weekly or bi-weekly mowing, edging and trimming to keep your lawn healthy and sharp.",
    },
    {
      title: "Landscape Design",
      icon: "layout",
      description: "Custom planting plans, native Texas plants and hardscape layouts designed for the local climate.",
    },
    {
      title: "Tree Trimming",
      icon: "tree",
      description: "Careful pruning and shaping for healthier trees, better light and safer properties.",
    },
    {
      title: "Garden Maintenance",
      icon: "flower",
      description: "Seasonal clean-ups, mulching, weeding and bed care so your garden looks great all year.",
    },
  ] satisfies { title: string; icon: IconName; description: string }[],
  steps: [
    { title: "Request an estimate", description: "Tell us about your property and what you need." },
    { title: "On-site visit", description: "We walk the property and confirm scope and pricing." },
    { title: "Scheduled service", description: "Your crew arrives on time and leaves the site tidy." },
  ],
};
