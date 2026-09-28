import type { IconName } from "@/components/ui/Icon";

export interface NavItem {
  label: string;
  /** Section id on the home page */
  id: string;
}

export type ServiceNeed =
  | "new-website"
  | "redesign"
  | "improvements"
  | "ai-agent"
  | "automation"
  | "hosting-maintenance"
  | "paid-ads"
  | "social-media"
  | "seo"
  | "other";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  includes: string[];
  need: ServiceNeed;
}

export interface ProblemCard {
  title: string;
  description: string;
  icon: IconName;
  points: string[];
}

export interface AuditItem {
  title: string;
  description: string;
  icon: IconName;
}

export type ProjectCategory = "web" | "automation" | "wordpress";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  /** Path to a screenshot in /public or an imported asset. Leave undefined to show the built-in placeholder visual. */
  image?: string;
  imageAlt?: string;
  /** Only set this when a real, public URL exists. */
  liveUrl?: string;
  /** Marks a card whose content still needs to be replaced with a real project. */
  isPlaceholder?: boolean;
  caseStudy: {
    overview: string;
    highlights: string[];
    role: string;
  };
}

export interface ProcessStep {
  number: string;
  /** Short name shown on the workflow node, e.g. "Tell Me" */
  short: string;
  title: string;
  description: string;
  icon: IconName;
  points: string[];
  /** Small tagline shown under the points */
  label?: string;
  /** Important clarification, e.g. about pricing or revisions */
  note?: string;
  /** Mini progression, e.g. Design → Development → Testing */
  flow?: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  summary: string;
  features: string[];
  recommended?: boolean;
  need: ServiceNeed;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: IconName;
}

export interface WorkflowNode {
  label: string;
  caption: string;
  icon: IconName;
}

export interface ContactFormValues {
  name: string;
  businessName: string;
  email: string;
  country: string;
  website: string;
  need: ServiceNeed | "";
  budget: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
