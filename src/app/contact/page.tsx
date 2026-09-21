import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Opeyemi Babalola.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        subtitle="Systems questions, ML infrastructure, or just a good conversation about AI agent standards, My inbox is open."
      />
      <Contact />
    </>
  );
}
