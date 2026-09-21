import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Recognition } from "@/components/sections/recognition";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Independent recognition for Opeyemi Babalola's work in fintech and software engineering, from NiTA 2023 to Titans of Tech Africa 2025.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Industry-judged, not self-declared"
        subtitle="Two panels, in two different years, landed on the same conclusion independently and the press covered it before this site did."
      />
      <Recognition />
    </>
  );
}
