import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Skills } from "@/components/sections/skills";
import { SkillsPhilosophy } from "@/components/sections/skills-philosophy";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The languages, clouds and model providers Opeyemi Babalola reaches for again and again.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Toolbox"
        title="Technical Expertise and Stack"
        subtitle="A comprehensive overview of the technologies, tools, and strategic proficiencies I use to engineer world-class digital solutions."
      />
      <Skills />
      <SkillsPhilosophy />
    </>
  );
}
