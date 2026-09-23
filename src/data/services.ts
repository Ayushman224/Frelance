import type { Service, ServiceNeed } from "@/types";

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Modern, responsive websites designed around your business, services and customers.",
    icon: "globe",
    need: "new-website",
    includes: ["Custom design", "Responsive development", "Contact forms", "Service pages", "Gallery", "Maps", "Basic SEO"],
  },
  {
    id: "redesign",
    title: "Website Redesign & Improvement",
    description: "Improve an existing website's design, usability, mobile experience and conversion flow.",
    icon: "refresh",
    need: "redesign",
    includes: ["UI improvements", "Mobile optimization", "Performance improvements", "Forms", "Conversion improvements", "Bug fixing"],
  },
  {
    id: "ai-agents",
    title: "AI Website Agents",
    description: "AI assistants that answer common questions, qualify enquiries and capture potential customers.",
    icon: "bot",
    need: "ai-agent",
    includes: ["FAQ answering", "Lead qualification", "Quote collection", "Appointment requests", "Lead notifications"],
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Automate repetitive tasks so you spend less time handling manual work.",
    icon: "workflow",
    need: "automation",
    includes: ["Forms", "Email notifications", "Google Sheets", "CRM integrations", "APIs", "Python automation", "Data workflows"],
  },
  {
    id: "hosting",
    title: "Hosting & Deployment",
    description: "Get your website deployed, secured and maintained.",
    icon: "server",
    need: "hosting-maintenance",
    includes: ["Domain setup", "Hosting", "SSL", "Deployment", "Monitoring", "Updates"],
  },
  {
    id: "maintenance",
    title: "Ongoing Maintenance",
    description: "Keep your website running smoothly after launch.",
    icon: "wrench",
    need: "hosting-maintenance",
    includes: ["Updates", "Bug fixes", "Small changes", "Monitoring", "Technical support"],
  },
];

export const needOptions: { value: ServiceNeed; label: string }[] = [
  { value: "new-website", label: "I need a new website" },
  { value: "redesign", label: "I need a website redesign" },
  { value: "improvements", label: "I need website improvements" },
  { value: "ai-agent", label: "I need an AI agent" },
  { value: "automation", label: "I need automation" },
  { value: "hosting-maintenance", label: "I need hosting/maintenance" },
  { value: "other", label: "Other" },
];

export const valueStrip = [
  { label: "Responsive Websites", icon: "smartphone" },
  { label: "AI Agents", icon: "bot" },
  { label: "Business Automation", icon: "workflow" },
  { label: "Fast Deployment", icon: "rocket" },
  { label: "Ongoing Support", icon: "lifebuoy" },
] as const;
