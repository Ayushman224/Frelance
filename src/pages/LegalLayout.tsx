import type { ReactNode } from "react";
import { Link } from "@/lib/router";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

export function LegalLayout({ title, updated, intro, sections }: { title: string; updated: string; intro: ReactNode; sections: LegalSection[] }) {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
          <Icon name="arrow-left" className="size-4" />
          Back to home
        </Link>
        <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-12">
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Template:</strong> this page is a starting point. Review and customise it (ideally with legal advice) before
            publishing.
          </p>
          <h1 className="mt-8 text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="mt-6 text-[0.95rem] leading-relaxed text-slate-600">{intro}</div>
          {sections.map((s) => (
            <section key={s.heading} className="mt-9">
              <h2 className="text-xl font-bold">{s.heading}</h2>
              <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-slate-600 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </Container>
    </div>
  );
}
