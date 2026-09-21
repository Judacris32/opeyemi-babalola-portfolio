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
        title=" Press and industry recognition for my work"
        subtitle="Independent recognition for my work in fintech and software engineering, from NiTA 2023 to Titans of Tech Africa 2025."
      />
      <Recognition />
    </>
  );
}
