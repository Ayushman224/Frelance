import { lazy, Suspense, useEffect, useRef } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/ui/Spinner";
import { ContactIntentProvider } from "@/lib/contactIntent";
import { scrollToSection, useLocation } from "@/lib/router";
import HomePage from "@/pages/HomePage";

const DemoPage = lazy(() => import("@/pages/DemoPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function resolvePage(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  switch (path) {
    case "/":
      return <HomePage />;
    case "/demo/austin-greenscape":
      return <DemoPage />;
    case "/privacy":
      return <PrivacyPage />;
    case "/terms":
      return <TermsPage />;
    case "/pricing":
      return <PricingPage />;
    default:
      return <NotFoundPage />;
  }
}

function useScrollOnNavigate(pathname: string) {
  const first = useRef(true);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const isFirst = first.current;
    first.current = false;

    if (!hash) {
      if (!isFirst) window.scrollTo(0, 0);
      return;
    }
    // Target may live in a lazily loaded page; retry for a short while until it renders.
    let frame = 0;
    let tries = 0;
    const attempt = () => {
      if (scrollToSection(hash) || tries++ > 60) return;
      frame = requestAnimationFrame(attempt);
    };
    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
}

export default function App() {
  const { pathname } = useLocation();
  useScrollOnNavigate(pathname);
  const isDemo = pathname.startsWith("/demo/");

  return (
    <ContactIntentProvider>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lift focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ErrorBoundary>
        {isDemo ? (
          <Suspense fallback={<PageLoader />}>{resolvePage(pathname)}</Suspense>
        ) : (
          <>
            <Navbar />
            <main id="main" className="outline-none" tabIndex={-1}>
              <Suspense fallback={<PageLoader />}>{resolvePage(pathname)}</Suspense>
            </main>
            <Footer />
          </>
        )}
      </ErrorBoundary>
    </ContactIntentProvider>
  );
}
