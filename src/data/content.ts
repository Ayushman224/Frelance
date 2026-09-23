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
  { number: "01", title: "Discovery", icon: "chat", description: "Understand your business, customers and goals." },
  { number: "02", title: "Plan", icon: "layout", description: "Define pages, functionality and integrations." },
  { number: "03", title: "Build", icon: "code", description: "Design and develop the solution." },
  { number: "04", title: "Launch", icon: "rocket", description: "Deploy, connect domain and test everything." },
  { number: "05", title: "Improve", icon: "trending", description: "Monitor, maintain and add automation/AI when useful." },
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
    description: "I recommend what your business actually needs, not the most complicated option.",
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
    description: "Launch is the start. I stay available for updates, fixes and improvements.",
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
      "Yes. I can redesign it, improve mobile experience and speed, fix bugs, or add better quote and contact flows — without necessarily rebuilding from scratch.",
  },
  {
    question: "Can you work with my existing domain?",
    answer:
      "Yes. You keep full ownership of your domain. I'll connect the new website to it and configure DNS, SSL and email records carefully so nothing breaks.",
  },
  {
    question: "Can you host the website?",
    answer:
      "Yes. I can set up reliable hosting and deployment for you, or deploy to a hosting provider you already use. Hosting support is included in the maintenance plan.",
  },
  {
    question: "Can you add an AI chatbot?",
    answer:
      "Yes. I build AI website agents that answer common questions from your own business information, qualify enquiries and pass leads to you. They're configured to hand off to you rather than guess.",
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
      "Yes — international clients are my focus, including the USA, Canada, UK, Australia and UAE. I work remotely, schedule calls around your time zone and communicate in clear English.",
  },
];
