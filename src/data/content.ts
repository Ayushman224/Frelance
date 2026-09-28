import type { AuditItem, FaqItem, ProblemCard, ProcessStep, ValueCard, WorkflowNode } from "@/types";

export const problems: ProblemCard[] = [
  {
    title: "Outdated Website",
    icon: "clock",
    description: "First impressions happen online. An old design quietly tells visitors to look elsewhere.",
    points: ["Dated design", "Poor mobile experience", "Slow to load"],
  },
  {
    title: "Lost Leads",
    icon: "inbox",
    description: "Visitors arrive, but the path to contacting you or requesting a quote isn't obvious.",
    points: ["Unclear next step", "Difficult quote process", "Buried contact details"],
  },
  {
    title: "Manual Work",
    icon: "clipboard",
    description: "Enquiries get copied between inboxes, spreadsheets and phones by hand — and things slip.",
    points: ["Leads handled manually", "No automated follow-up", "Repetitive admin"],
  },
  {
    title: "No Online Conversion System",
    icon: "target",
    description: "Your site isn't working for you after hours, and it's hard to update when things change.",
    points: ["No AI assistant", "Hard to maintain", "No lead tracking"],
  },
];

export const auditItems: AuditItem[] = [
  { title: "Mobile Experience", icon: "smartphone", description: "Layout, tap targets and readability on phones." },
  { title: "Website Speed", icon: "gauge", description: "Load time, image weight and hosting setup." },
  { title: "User Experience", icon: "pointer", description: "Navigation, clarity and visual hierarchy." },
  { title: "Lead Capture", icon: "inbox", description: "How easily visitors can become enquiries." },
  { title: "SEO Basics", icon: "search", description: "Titles, descriptions, headings and structure." },
  { title: "Contact / Quote Flow", icon: "message", description: "Friction in forms, calls-to-action and follow-up." },
  { title: "Automation Opportunities", icon: "workflow", description: "Manual steps that could run on their own." },
  { title: "AI Agent Opportunities", icon: "bot", description: "Questions an assistant could answer for you." },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    short: "Tell Me",
    title: "Tell Me What You Need",
    icon: "chat",
    description: "Tell me about your business, your current situation and what you want to achieve.",
    points: [
      "What does your business do?",
      "What are you trying to improve?",
      "Do you need a new website or redesign?",
      "Do you need SEO, AI or automation?",
      "What problems are you currently facing?",
    ],
    label: "Start with a conversation.",
  },
  {
    number: "02",
    short: "Understand",
    title: "I Understand Your Business",
    icon: "search",
    description: "Before suggesting a solution, I understand how your business works and what your customers need.",
    points: [
      "Business goals",
      "Target customers",
      "Current website/system",
      "Required pages and functionality",
      "Existing tools and workflows",
      "Technical requirements",
    ],
    label: "Understand first. Build second.",
  },
  {
    number: "03",
    short: "Proposal",
    title: "You Get a Custom Proposal",
    icon: "file",
    description: "Your project is scoped around your actual requirements rather than forcing you into a fixed package.",
    points: ["Project scope", "Features", "Integrations", "SEO requirements", "AI / automation requirements", "Timeline", "Final project price"],
    note: "Starting prices are shown on the pricing page. The final quote is based on the agreed requirements.",
  },
  {
    number: "04",
    short: "Build",
    title: "We Build It",
    icon: "code",
    description: "Once the scope and payment terms are confirmed, development begins.",
    flow: ["Design", "Development", "Integration", "Testing"],
    points: [
      "Custom UI/UX",
      "Responsive development",
      "Feature implementation",
      "Integrations",
      "SEO setup",
      "AI / automation where required",
      "Testing",
    ],
  },
  {
    number: "05",
    short: "Review",
    title: "Review & Refine",
    icon: "eye",
    description: "You see the progress, provide feedback and we refine the agreed scope before launch.",
    flow: ["Build", "Preview", "Feedback", "Refinement"],
    points: ["Review progress", "Test functionality", "Provide feedback", "Fix issues", "Final quality check"],
    note: "Revisions are handled according to the agreed project scope.",
  },
  {
    number: "06",
    short: "Launch & Support",
    title: "Launch & Keep Growing",
    icon: "rocket",
    description: "Once everything is approved, your website or system goes live.",
    flow: ["Launch", "Maintain", "Optimize", "Grow"],
    points: [
      "Final deployment",
      "Domain connection",
      "Hosting setup",
      "SSL",
      "Final testing",
      "Handover",
      "Ongoing maintenance if required",
      "SEO/content optimization if required",
    ],
  },
];

export const workflowNodes: WorkflowNode[] = [
  { label: "Website Form", caption: "Visitor requests a quote", icon: "form" },
  { label: "Lead Captured", caption: "Details validated & stored", icon: "inbox" },
  { label: "Automation", caption: "Rules route the enquiry", icon: "workflow" },
  { label: "CRM / Google Sheets", caption: "Lead logged automatically", icon: "sheet" },
  { label: "Email / Notification", caption: "Instant alert sent", icon: "bell" },
  { label: "Business Owner", caption: "You follow up, fast", icon: "user" },
];

export const automationExamples: { title: string; icon: ValueCard["icon"] }[] = [
  { title: "Quote request automation", icon: "file" },
  { title: "Lead notifications", icon: "bell" },
  { title: "Appointment requests", icon: "calendar" },
  { title: "Customer follow-up", icon: "mail" },
  { title: "Data processing", icon: "database" },
  { title: "API integrations", icon: "plug" },
  { title: "Reporting automation", icon: "chart" },
];

export const whyMe: ValueCard[] = [
  {
    title: "Direct Communication",
    icon: "chat",
    description: "You talk to the person building your project — no account managers, no hand-offs.",
  },
  {
    title: "Practical Solutions",
    icon: "check-circle",
    description: "We recommend what your business actually needs, not the most complicated option.",
  },
  {
    title: "Modern Technology",
    icon: "code",
    description: "Fast, secure, maintainable builds using current, well-supported tools.",
  },
  {
    title: "Business-Focused Development",
    icon: "target",
    description: "Every page and feature is designed around turning visitors into enquiries.",
  },
  {
    title: "Ongoing Support",
    icon: "lifebuoy",
    description: "Launch is the start. We stay available for updates, fixes and improvements.",
  },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "SQL",
  "WordPress",
  "AWS",
  "APIs",
  "Automation",
  "AI Agents",
];

export const faqs: FaqItem[] = [
  {
    question: "How long does a website take?",
    answer:
      "A starter business website usually takes one to two weeks once your content is ready. Larger sites or projects with integrations take longer. You'll get a clear timeline before any work begins.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Yes. We can redesign it, improve mobile experience and speed, fix bugs, or add better quote and contact flows — without necessarily rebuilding from scratch.",
  },
  {
    question: "Can you work with my existing domain?",
    answer:
      "Yes. You keep full ownership of your domain. We'll connect the new website to it and configure DNS, SSL and email records carefully so nothing breaks.",
  },
  {
    question: "Can you host the website?",
    answer:
      "Yes. We can set up reliable hosting and deployment for you, or deploy to a hosting provider you already use. Hosting support is included in the maintenance plan.",
  },
  {
    question: "Can you add an AI chatbot?",
    answer:
      "Yes. We build AI website agents that answer common questions from your own business information, qualify enquiries and pass leads to you. They're configured to hand off to you rather than guess.",
  },
  {
    question: "Can you connect my website to CRM or Google Sheets?",
    answer:
      "Yes. Form submissions and leads can flow automatically into Google Sheets, popular CRMs, email or other tools via their APIs or automation platforms.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Monthly maintenance covers hosting support, updates, bug fixes, small content changes and monitoring, so your site stays healthy after launch.",
  },
  {
    question: "Can you work with businesses outside India?",
    answer:
      "Yes — international clients are a focus, including the USA, Canada, UK, Australia and UAE. We work remotely, schedule calls around your time zone and communicate in clear English.",
  },
];
