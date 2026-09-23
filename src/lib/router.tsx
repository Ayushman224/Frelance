import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from "react";

/**
 * Minimal client-side router (History API). Enough for a handful of pages without
 * pulling in a routing dependency. Hosting must rewrite unknown paths to /index.html.
 */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

function getLocationKey() {
  return window.location.pathname + window.location.hash;
}

export function useLocation() {
  const key = useSyncExternalStore(subscribe, getLocationKey, () => "/");
  const hashIndex = key.indexOf("#");
  return {
    pathname: hashIndex === -1 ? key : key.slice(0, hashIndex),
    hash: hashIndex === -1 ? "" : key.slice(hashIndex + 1),
  };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string) {
  if (id === "home" || id === "") {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    return true;
  }
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  // Move focus for keyboard and screen-reader users without jumping the scroll position.
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  return true;
}

export function navigate(to: string, { replace = false } = {}) {
  const url = new URL(to, window.location.origin);
  const samePath = url.pathname === window.location.pathname;
  const id = url.hash.slice(1);

  if (samePath && url.hash) {
    const next = id === "home" ? url.pathname : url.pathname + url.hash;
    window.history.replaceState(null, "", next);
    scrollToSection(id);
    return;
  }

  const next = url.pathname + url.search + url.hash;
  if (replace) window.history.replaceState(null, "", next);
  else window.history.pushState(null, "", next);
  listeners.forEach((l) => l());
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
