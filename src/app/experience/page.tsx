import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Opeyemi Babalola's roles across banking, fintech, crypto and AI infrastructure since 2018.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="From a Lagos-headquartered bank to fintech startups to the AI registry I founded, backend systems that need to hold under real load."
      />
      <Experience />
    </>
  );
}
