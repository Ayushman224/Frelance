/**
 * Central place for personal details and placeholders.
 * Replace every value marked TODO before going live.
 */
export const site = {
  name: "Ayushman Tripathi",
  title: "Web Developer & Automation Engineer",
  tagline: "Web Development & Automation",
  // TODO: replace with your real domain
  domain: "YOURDOMAIN.com",
  email: "ayushmantripathi224@gmail.com",
  // WhatsApp in international format, digits only (no +)
  whatsappNumber: "918318007109",
  whatsappMessage: "Hi Ayushman, I'd like to discuss a project for my business.",
  // TODO: add a professional portrait to /public (e.g. "/portrait.webp"). Leave empty to show the monogram placeholder.
  portrait: "" as string,
  location: "Based in India · Working with clients worldwide",
  social: {
    // TODO: replace with your real profile URLs
    linkedin: "https://www.linkedin.com/in/YOUR-PROFILE",
    github: "https://github.com/YOUR-USERNAME",
  },
  defaultTitle: "Ayushman Tripathi | Web Development, Automation & AI Agents",
  defaultDescription:
    "Professional websites, AI agents and business automation for small businesses and startups.",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailtoUrl = `mailto:${site.email}`;
