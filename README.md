# Ayushman Tripathi — Freelance Website

Business website for acquiring small-business clients for web development, AI agents, automation, hosting and maintenance.

Built with **React 19, TypeScript, Vite and Tailwind CSS 4**. No UI, icon or router libraries — everything is local and lightweight.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to /dist
npm run preview    # serve the production build locally
```

## Before you go live — replace the placeholders

| What | Where |
| --- | --- |
| Email, domain, WhatsApp number, LinkedIn, GitHub, portrait | `src/data/site.ts` |
| Domain in canonical / Open Graph / JSON-LD tags | `index.html` |
| Domain in `robots.txt` and `sitemap.xml` | `public/` |
| Project descriptions, screenshots, live URLs | `src/data/projects.ts` |
| Project 4 placeholder ("Custom E-commerce / Web Platform") | `src/data/projects.ts` (`isPlaceholder: true`) |
| Privacy Policy and Terms (dates, providers, payment terms) | `src/pages/PrivacyPage.tsx`, `src/pages/TermsPage.tsx` |
| Social share image | `public/og-image.png` (1200×630; editable source in `public/og-image.svg`) |

**Screenshots:** put images in `public/projects/` and set `image: "/projects/my-project.webp"` and `imageAlt` on the project. Without an image, a clean illustrated placeholder is shown.

**Live links:** only set `liveUrl` when a real public URL exists. Otherwise the card shows a "Project Case Study" button that opens a details dialog.

## Contact form

The form validates input and posts JSON to `VITE_CONTACT_ENDPOINT`. Until that is set, it **does not pretend to send**: visitors see a clear notice and a one-click "Send via email" button that opens their email app with the form contents pre-filled.

1. Create a form endpoint (e.g. [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), Getform, or your own API route).
2. Copy `.env.example` to `.env.local` and set:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-id
# Only if your provider needs a public access key (e.g. Web3Forms):
VITE_CONTACT_ACCESS_KEY=
```

3. Set the same variables in your hosting provider's environment settings and redeploy.

Anything prefixed with `VITE_` ends up in the public bundle, so never put private secrets there. The integration point is `submitContactRequest()` in `src/lib/contact.ts`.

## Demos (clearly labeled)

- **Austin GreenScape** (`/demo/austin-greenscape`) — a fictional landscaping website, labeled "Demo Concept — Not a Client Project". Its estimate form sends nothing and says so. It is `noindex` and excluded in `robots.txt`.
- **AI agent chat** — a scripted conversation with preset replies, labeled as a demo and "not connected to a live AI".

## Deployment

This is a single-page app with client-side routes (`/privacy`, `/terms`, `/demo/...`), so the host must serve `index.html` for unknown paths:

- **Netlify:** handled by `public/_redirects`
- **Vercel:** handled by `vercel.json`
- **Cloudflare Pages:** handles SPA fallback automatically
- **Other hosts:** configure a rewrite from `/*` to `/index.html`

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, Logo
    ui/          Button, Section, Badge, Icon, Accordion, Modal, FormField, Reveal, ...
    AgentChatDemo.tsx, ProjectVisual.tsx, LandscapeArt.tsx, ErrorBoundary.tsx
  sections/      One file per homepage section (Hero, Services, Work, AiAgent, Pricing, Contact, ...)
  pages/         HomePage, DemoPage, PrivacyPage, TermsPage, NotFoundPage
  data/          All site copy and content as typed data (edit content here)
  hooks/         useInView, useScrollSpy, useScrolled, useDocumentMeta
  lib/           router, contact form integration, contact prefill context, cn()
  types/         Shared TypeScript types
```

Most content changes (services, pricing, FAQ, process steps, projects) only need edits in `src/data/`.
