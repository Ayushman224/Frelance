import { site, mailtoUrl } from "@/data/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { LegalLayout, type LegalSection } from "./LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: (
      <>
        <p>When you submit the contact form or email Clitchly, we collect the information you choose to provide, such as:</p>
        <ul>
          <li>Your name, business name and email address</li>
          <li>Your country and website address</li>
          <li>Details about your project, budget and message</li>
        </ul>
        <p>Basic technical data (such as browser type and pages visited) may be collected by the hosting provider or analytics tools if enabled.</p>
      </>
    ),
  },
  {
    heading: "How we use your information",
    body: (
      <ul>
        <li>To respond to your enquiry and discuss your project</li>
        <li>To prepare proposals, quotes and project communication</li>
        <li>To improve this website</li>
      </ul>
    ),
  },
  {
    heading: "Third-party services",
    body: (
      <p>
        This website may use third-party providers for hosting, form delivery and analytics. [TODO: list the providers you use, e.g.
        your hosting platform, form service and analytics tool, with links to their privacy policies.] These providers process data
        on our behalf and only as needed to deliver their service.
      </p>
    ),
  },
  {
    heading: "Data retention",
    body: <p>We keep enquiry information only as long as needed to respond, deliver services and meet legal or accounting obligations.</p>,
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Depending on where you live (for example under GDPR, UK GDPR or CCPA), you may have the right to access, correct or delete
        your personal data. To make a request, contact us using the details below.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this policy? Email{" "}
        <a href={mailtoUrl} className="font-semibold text-brand-700 hover:underline">
          {site.email}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  useDocumentMeta({ title: `Privacy Policy | ${site.name}`, description: `Privacy policy for ${site.name}'s website and services.` });
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="[TODO: date]"
      intro={
        <p>
          This policy explains how {site.name} ("we", "us") collects and uses personal information through this website. We only
          collect what's needed to respond to enquiries and deliver services.
        </p>
      }
      sections={sections}
    />
  );
}
