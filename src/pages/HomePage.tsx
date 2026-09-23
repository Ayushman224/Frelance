import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { About } from "@/sections/About";
import { AiAgent } from "@/sections/AiAgent";
import { Audit } from "@/sections/Audit";
import { Automation } from "@/sections/Automation";
import { Contact } from "@/sections/Contact";
import { DemoShowcase } from "@/sections/DemoShowcase";
import { Faq } from "@/sections/Faq";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Problem } from "@/sections/Problem";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { ValueStrip } from "@/sections/ValueStrip";
import { WhyMe } from "@/sections/WhyMe";
import { Work } from "@/sections/Work";

export default function HomePage() {
  useDocumentMeta();

  return (
    <>
      <Hero />
      <ValueStrip />
      <Problem />
      <Services />
      <Audit />
      <Work />
      <DemoShowcase />
      <AiAgent />
      <Automation />
      <Process />
      <Pricing />
      <About />
      <WhyMe />
      <Faq />
      <Contact />
    </>
  );
}
