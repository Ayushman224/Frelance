import type { IconName } from "@/components/ui/Icon";
import type { FaqItem, ServiceNeed } from "@/types";

/**
 * Content for the unlisted /pricing page (Indian clients, INR).
 * Prices are minimum starting points for the standard scope; everything else is quoted per project.
 */

export const pricingNote =
  "Starting price for the standard scope shown below. Your final quote is based on the features and customization your business requires.";

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface PackageTier {
  id: "starter" | "business" | "ai";
  name: string;
  label: string;
  description: string;
  startingPrice: string;
  priceNote: string;
  inherits?: string;
  groups: FeatureGroup[];
  /** Short clarification shown under the inclusions. */
  scopeNote?: string;
  highlight?: "popular" | "premium";
  need: ServiceNeed;
}

export const packageCta = "Discuss Your Requirements";

export const packages: PackageTier[] = [
  {
    id: "starter",
    name: "Starter Website",
    label: "Perfect for getting your business online",
    description:
      "A professional, responsive website designed to establish your online presence and make it easy for customers to find and contact your business.",
    startingPrice: "₹11,990",
    priceNote: "Final pricing depends on your requirements.",
    groups: [
      {
        title: "Website",
        items: [
          "3–5 responsive pages",
          "Modern and clean website design",
          "Mobile, tablet and desktop responsive design",
          "Home page",
          "About page/section",
          "Services page/section",
          "Contact page/section",
          "WhatsApp contact button",
          "Contact/enquiry form",
          "Google Maps integration",
          "Social media links",
        ],
      },
      {
        title: "Basic SEO & setup",
        items: [
          "Basic SEO setup",
          "SEO-friendly page structure",
          "Page titles and meta descriptions",
          "Proper heading structure",
          "Image optimization",
          "SEO-friendly URLs",
          "Sitemap",
          "Robots.txt",
          "Google Search Console setup",
          "Google Analytics setup",
          "Basic speed optimization",
          "SSL setup",
          "Deployment support",
        ],
      },
    ],
    scopeNote: "Standard scope includes 3–5 pages. Additional requirements are quoted separately.",
    need: "new-website",
  },
  {
    id: "business",
    name: "Business Website + SEO",
    label: "For businesses ready to grow online",
    description:
      "A fully customized business website with SEO foundations designed to improve your online presence, generate enquiries and support long-term growth.",
    startingPrice: "₹21,990",
    priceNote: "Final pricing depends on your requirements.",
    inherits: "Everything in Starter, plus:",
    highlight: "popular",
    groups: [
      {
        title: "Website",
        items: [
          "5–10 pages",
          "Fully customized UI/UX",
          "Professional business-focused design",
          "Advanced responsive layouts",
          "Services sections",
          "Portfolio/gallery",
          "Testimonials/reviews",
          "FAQ section",
          "Lead-generation sections",
          "Advanced contact/enquiry forms",
          "WhatsApp integration",
          "Blog/CMS setup where required",
          "Strong calls-to-action",
          "Social media integration",
        ],
      },
      {
        title: "SEO",
        items: [
          "Everything in Basic SEO",
          "Keyword research for core services",
          "Service-focused SEO structure",
          "Local SEO foundations",
          "Google Search Console",
          "Google Analytics",
          "Schema markup where appropriate",
          "Internal linking structure",
          "Image SEO",
          "Technical SEO foundations",
          "Page speed optimization",
          "SEO-friendly content structure",
          "Search engine indexing setup",
          "Conversion-focused page structure",
        ],
      },
    ],
    scopeNote: "SEO setup and optimization designed to improve search visibility and website performance.",
    need: "new-website",
  },
  {
    id: "ai",
    name: "AI + Automation",
    label: "For businesses that want more than a website",
    description:
      "A high-performance website combined with AI and business automation to capture enquiries, answer customer questions and reduce repetitive manual work.",
    startingPrice: "₹49,990",
    priceNote: "Final pricing depends on the AI agent, automation workflows, integrations and business requirements.",
    inherits: "Everything in Business Website + SEO, plus:",
    highlight: "premium",
    groups: [
      {
        title: "AI",
        items: [
          "AI website agent/chatbot",
          "Business-specific knowledge base",
          "FAQ handling",
          "Service/product information",
          "Lead capture",
          "Lead qualification",
          "AI-assisted customer responses",
          "Website AI integration",
          "Custom AI behaviour based on agreed requirements",
        ],
      },
      {
        title: "Automation",
        items: [
          "Lead capture automation",
          "Email automation",
          "Form-to-lead workflows",
          "Google Sheets/Excel integration",
          "CRM integration where applicable",
          "Automated notifications",
          "Appointment/enquiry workflows",
          "Custom business automation",
          "API integrations where required",
          "Data processing automation",
        ],
      },
      {
        title: "Advanced",
        items: [
          "Custom workflows",
          "Custom dashboards where required",
          "Reporting systems where required",
          "Database integrations",
          "Third-party integrations",
          "Advanced conversion optimization",
        ],
      },
    ],
    need: "ai-agent",
  },
];

/** What a custom quote is based on — shown as a compact list, not a price calculator. */
export const quoteFactors = [
  "Number of pages",
  "Design complexity",
  "Custom UI/UX",
  "Content",
  "Functionality",
  "Integrations",
  "Forms",
  "Booking systems",
  "Payment systems",
  "SEO",
  "Ads",
  "Social media",
  "Automation",
  "AI",
  "APIs",
  "CRM",
  "Database",
  "Admin dashboards",
  "Third-party services",
  "Other custom needs",
];

/** `true` = standard, `false` = not in standard scope, "Custom" = depends on scope. */
export type ComparisonCell = boolean | "Custom";

export const comparisonRows: { feature: string; values: [ComparisonCell, ComparisonCell, ComparisonCell] }[] = [
  { feature: "Responsive website", values: [true, true, true] },
  { feature: "Custom design", values: [false, true, true] },
  { feature: "WhatsApp integration", values: [true, true, true] },
  { feature: "Contact/enquiry forms", values: [true, true, true] },
  { feature: "Basic SEO", values: [true, true, true] },
  { feature: "Advanced SEO", values: [false, true, true] },
  { feature: "Blog/CMS", values: [false, true, true] },
  { feature: "Analytics", values: [true, true, true] },
  { feature: "Search Console", values: [true, true, true] },
  { feature: "Conversion optimization", values: [false, true, true] },
  { feature: "AI agent", values: [false, "Custom", true] },
  { feature: "Automation", values: [false, "Custom", true] },
  { feature: "CRM/API integrations", values: [false, "Custom", true] },
  { feature: "Custom workflows", values: [false, "Custom", true] },
  { feature: "SEO / Google visibility", values: ["Custom", true, true] },
  { feature: "Paid ads", values: [false, "Custom", "Custom"] },
  { feature: "Social media", values: [false, "Custom", "Custom"] },
];

export const carePlan = {
  label: "Website Care & Growth",
  title: "Keep your website running. Keep improving your reach.",
  description: "Keep your website secure, maintained and continuously optimized after launch.",
  price: "₹3,500",
  period: "/month",
  groups: [
    {
      title: "Website care",
      icon: "server",
      items: [
        "Hosting management",
        "SSL",
        "Basic backups",
        "Website monitoring",
        "Basic security checks",
        "Technical maintenance",
        "Minor bug fixes",
        "Small content updates",
        "Deployment support",
      ],
    },
    {
      title: "Optimization",
      icon: "gauge",
      items: [
        "Website performance checks",
        "Mobile optimization checks",
        "Basic SEO monitoring",
        "Google Search Console monitoring",
        "Analytics review",
        "Conversion improvement suggestions",
        "CTA improvements",
        "Website improvement recommendations",
      ],
    },
  ] satisfies { title: string; icon: IconName; items: string[] }[],
  growthTitle: "Content / reach",
  growthIntro: "Content and SEO growth work can be discussed based on your monthly requirements.",
  growth: [
    "Blog publishing",
    "New service pages",
    "Location pages",
    "FAQ updates",
    "Content updates",
    "SEO content",
    "Internal linking",
    "Image optimization",
    "Landing-page improvements",
  ],
  growthNote:
    "Content creation, extensive SEO work and larger website changes may require a separate quote depending on the monthly scope.",
};

export const customExamples: { label: string; icon: IconName }[] = [
  { label: "Additional pages", icon: "file" },
  { label: "Custom functionality", icon: "code" },
  { label: "Integrations", icon: "plug" },
  { label: "Automation", icon: "workflow" },
  { label: "AI", icon: "bot" },
  { label: "Booking systems", icon: "calendar" },
  { label: "Payment systems", icon: "card" },
  { label: "Dashboards", icon: "chart" },
  { label: "Paid ads management", icon: "target" },
  { label: "Social media management", icon: "share" },
  { label: "SEO / Google visibility", icon: "search" },
];

export const quoteSteps = [
  { title: "Discuss Your Requirements", description: "Tell us about your business, goals and what you want your website or system to do." },
  { title: "Requirement Review", description: "We review the required pages, features, integrations, content and technical requirements." },
  { title: "Custom Proposal", description: "You receive a clear proposal with the final scope, price and timeline." },
  { title: "Confirm & Get Started", description: "Once the scope and payment terms are approved, development begins." },
  { title: "Development & Feedback", description: "We build, share progress and collect feedback according to the agreed scope." },
  { title: "Launch & Support", description: "Your website or system goes live, followed by the agreed support and maintenance." },
];

export const paymentPlans = [
  {
    title: "Projects up to ₹30,000",
    milestones: [
      { percent: 50, label: "Advance", detail: "To confirm the project and begin work" },
      { percent: 30, label: "Milestone", detail: "After the design/development milestone" },
      { percent: 20, label: "Before launch", detail: "Before the final launch" },
    ],
  },
  {
    title: "Projects above ₹30,000",
    milestones: [
      { percent: 40, label: "Advance", detail: "To confirm the project and begin work" },
      { percent: 30, label: "During development", detail: "At the agreed development milestone" },
      { percent: 30, label: "Before launch", detail: "Before the final launch" },
    ],
  },
];

export const paymentTerms = [
  "Final website deployment/handover happens after final payment.",
  "Domain, premium plugins, paid APIs, hosting upgrades and third-party services are billed separately unless explicitly included in the proposal.",
  "Scope changes after approval may affect price and timeline.",
  "Revisions and features are based on the agreed project scope.",
];

export const pricingFaqs: FaqItem[] = [
  {
    question: "Why do prices say “starting from”?",
    answer:
      "Each price is the minimum for the standard scope listed in that package. Every business is different, so after we discuss your requirements you'll receive a custom proposal with the final scope, price and timeline — before any work begins.",
  },
  {
    question: "Do I need to choose a package before contacting you?",
    answer:
      "No. Just tell us what your business does and what you want to achieve. We'll recommend the right starting point and prepare the quote for you — you don't have to work out the price yourself.",
  },
  {
    question: "What if I need something that isn't listed?",
    answer:
      "That's common. Extra pages, booking or payment systems, integrations, dashboards, AI or automation can all be included. We'll review your requirements and include them in your custom proposal.",
  },
  {
    question: "What is not included in the package price?",
    answer:
      "Domain registration, premium plugins or themes, paid APIs, hosting upgrades and other third-party services are billed separately unless they are explicitly included in your proposal.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Deployment support and SSL setup are included in every package. Ongoing hosting management, monitoring and maintenance are covered by the optional Website Care & Growth plan at ₹3,500/month.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Revisions and features are based on the agreed project scope. The proposal clearly lists what's included, so there are no surprises for either side.",
  },
  {
    question: "Do you guarantee Google rankings or leads?",
    answer:
      "No one can honestly guarantee rankings, traffic or leads. SEO setup and optimization are designed to improve search visibility and website performance, and the site is built to make it easy for visitors to contact you.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope. Your proposal includes a timeline based on the pages, features and integrations agreed — AI and automation projects usually take longer than a standard website.",
  },
  {
    question: "Are taxes included?",
    answer: "Any applicable taxes are stated clearly in your proposal and invoice.",
  },
];
