import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { About } from "@/components/sections/about";
import { Community } from "@/components/sections/community";

export const metadata: Metadata = {
  title: "About",
  description:
    "Opeyemi Babalola is a Senior Software & ML Systems Engineer based in Liverpool, UK. six years across banking, fintech and AI infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An engineer who stays until it works in production"
        subtitle="Not just the demo. The version that survives real traffic, real users, and the 2am pager."
      />
      <About />
      <Community />
    </>
  );
}
