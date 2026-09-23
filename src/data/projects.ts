import type { Project, ProjectCategory } from "@/types";

/**
 * Personal / project work. Replace descriptions, add `image` (e.g. "/projects/web-platform.webp")
 * and set `liveUrl` ONLY when a real public URL exists.
 */
export const projects: Project[] = [
  {
    id: "business-web-platform",
    title: "Business Web Platform",
    category: "web",
    description: "Responsive web application with dynamic user flows, authentication and database integration.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      overview:
        "A responsive web application built with a component-based React architecture, covering account access, multi-step user flows and data stored in a database.",
      highlights: [
        "Authentication and protected user areas",
        "Dynamic, multi-step user flows and forms",
        "Database-backed data views",
        "Reusable, typed UI components that work across screen sizes",
      ],
      role: "Front-end architecture, UI development and integration with backend services.",
    },
  },
  {
    id: "automation-data-workflow",
    title: "Automation & Data Workflow",
    category: "automation",
    description: "Automation workflows for data processing, database operations and operational reporting.",
    tech: ["Python", "SQL", "Excel", "AWS"],
    caseStudy: {
      overview:
        "A set of automation workflows that take operational data from files and databases, process it consistently and produce reports that previously required manual work.",
      highlights: [
        "Python scripts for repeatable data processing",
        "SQL queries for database operations and reconciliation",
        "Excel-based reporting outputs for non-technical teams",
        "Cloud resources on AWS for storage and scheduled jobs",
      ],
      role: "Workflow design, scripting, SQL and reporting.",
    },
  },
  {
    id: "wordpress-business-website",
    title: "WordPress Business Website",
    category: "wordpress",
    description: "Responsive business website development and customization.",
    tech: ["WordPress", "Elementor"],
    caseStudy: {
      overview:
        "A business website built on WordPress with Elementor, customised so the owner can update content without touching code.",
      highlights: [
        "Responsive page layouts for desktop, tablet and mobile",
        "Service pages and contact forms",
        "Theme and Elementor customisation",
        "Editor-friendly structure for future content updates",
      ],
      role: "Design implementation, customisation and setup.",
    },
  },
  {
    // TODO: replace this placeholder with one of your real projects
    id: "custom-web-platform",
    title: "Custom E-commerce / Web Platform",
    category: "web",
    description: "A custom online store or web platform. Full case study is being prepared.",
    tech: ["React", "Node.js", "APIs"],
    isPlaceholder: true,
    caseStudy: {
      overview: "This case study is being prepared and will be published soon.",
      highlights: ["Product or service catalogue", "Checkout or booking flow", "Admin and content management", "Third-party API integrations"],
      role: "Full-stack development.",
    },
  },
];

export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Apps" },
  { value: "automation", label: "Automation" },
  { value: "wordpress", label: "WordPress" },
];
