import { useEffect, useState } from "react";
import { navItems } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrolled } from "@/hooks/useScrolled";
import { useContactIntent } from "@/lib/contactIntent";
import { cn } from "@/lib/cn";
import { navigate, useLocation } from "@/lib/router";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { Logo } from "./Logo";

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useScrollSpy(sectionIds, isHome);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { requestContact } = useContactIntent();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    navigate(id === "home" ? "/#home" : `/#${id}`);
  };

  const cta = () => {
    setOpen(false);
    requestContact();
  };

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-white/10 bg-ink-950/90 backdrop-blur-xl" : "border-transparent bg-ink-950",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo onClick={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button onClick={cta} size="sm" icon="arrow-right">
              Get a Free Consultation
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            <Icon name={open ? "x" : "menu"} className="size-5" />
          </button>
        </div>
      </Container>
    </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-ink-950 transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="px-5 py-6">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-white/5">
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  className={cn(
                    "flex items-center justify-between py-4 font-display text-lg font-semibold",
                    isHome && active === item.id ? "text-white" : "text-slate-300",
                  )}
                >
                  {item.label}
                  <Icon name="arrow-right" className="size-4 text-slate-500" />
                </a>
              </li>
            ))}
          </ul>
          <Button onClick={cta} size="lg" className="mt-8 w-full" icon="arrow-right">
            Get a Free Consultation
          </Button>
        </nav>
      </div>
    </>
  );
}
