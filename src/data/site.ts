/**
 * Central place for brand details.
 * Replace remaining TODO values (LinkedIn, GitHub) before treating social as live.
 */
export const site = {
  name: "Clitchly",
  title: "Web Development & Automation",
  tagline: "Web Development & Automation",
  domain: "clitchly.vercel.app",
  email: "ayushmantripathi224@gmail.com",
  // WhatsApp in international format, digits only (no +)
  whatsappNumber: "918318007109",
  whatsappMessage: "Hi Clitchly, I'd like to discuss a project for my business.",
  logo: "/logo.png",
  location: "Based in India · Working with clients worldwide",
  social: {
    // TODO: replace with your real profile URLs
    linkedin: "https://www.linkedin.com/in/YOUR-PROFILE",
    github: "https://github.com/YOUR-USERNAME",
  },
  defaultTitle: "Clitchly | Web Development, Automation & AI Agents",
  defaultDescription:
    "Professional websites, AI agents and business automation for small businesses and startups.",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailtoUrl = `mailto:${site.email}`;
