import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products Opeyemi Babalola built end to end: Wardscribe, Meanas, Vent.help, Azath and Coordin8.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Products I've built end to end"
        subtitle="A registry for AI agents. A memory layer that follows a conversation across models. A scanner that catches secrets before they ship. Start to finish."
      />
      <Projects />
    </>
  );
}
