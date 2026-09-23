import { navItems } from "@/data/navigation";
import { site, mailtoUrl } from "@/data/site";
import { Link } from "@/lib/router";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { Logo } from "./Logo";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, icon: "linkedin" },
  { label: "GitHub", href: site.social.github, icon: "github" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-slate-400">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed">
              Websites, AI agents and business automation for small businesses in the USA, Canada, UK, Australia, UAE and beyond.
            </p>
            <a href={mailtoUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white">
              <Icon name="mail" className="size-4" />
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Navigation</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/#${item.id}`} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Connect</h2>
            <ul className="mt-4 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    <Icon name={s.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">Available for new projects worldwide.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
