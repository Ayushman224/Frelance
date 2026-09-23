import { site } from "@/data/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFoundPage() {
  useDocumentMeta({ title: `Page not found | ${site.name}`, noIndex: true });
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">This page doesn't exist.</h1>
      <p className="mt-3 max-w-md text-slate-600">The link may be broken or the page may have moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" icon="arrow-right">
          Go to homepage
        </Button>
        <Button to="/#contact" variant="outline">
          Contact me
        </Button>
      </div>
    </Container>
  );
}
