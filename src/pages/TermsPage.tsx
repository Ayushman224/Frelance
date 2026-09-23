import { site, mailtoUrl } from "@/data/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { LegalLayout, type LegalSection } from "./LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Use of this website",
    body: <p>You may browse this website for personal and business information purposes. Please don't misuse it or attempt to disrupt its operation.</p>,
  },
  {
    heading: "Services and quotes",
    body: (
      <>
        <p>
          Prices shown on this website are starting prices for guidance only. Final pricing depends on project scope, functionality
          and integrations and is confirmed in a written proposal or agreement before work begins.
        </p>
        <p>[TODO: describe your payment terms, deposits, revisions and delivery process, or reference your project agreement.]</p>
      </>
    ),
  },
  {
    heading: "Demo content",
    body: (
      <p>
        Demonstrations on this website — including the Austin GreenScape website and the AI assistant conversation — are fictional
        concepts created to show capabilities. They do not represent real clients, businesses or results.
      </p>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        The content and design of this website belong to {site.name} unless stated otherwise. Ownership of client project deliverables
        is defined in each project agreement.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        This website is provided "as is". To the extent permitted by law, {site.name} is not liable for any loss arising from use of
        this website. [TODO: review with local legal requirements.]
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these terms? Email{" "}
        <a href={mailtoUrl} className="font-semibold text-brand-700 hover:underline">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  useDocumentMeta({ title: `Terms | ${site.name}`, description: `Website terms for ${site.name}.` });
  return (
    <LegalLayout
      title="Terms"
      updated="[TODO: date]"
      intro={<p>These terms apply to your use of this website. By using it, you agree to them.</p>}
      sections={sections}
    />
  );
}
