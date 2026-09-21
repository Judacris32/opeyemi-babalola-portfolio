import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Section tone="tint" className="overflow-hidden pb-14 pt-36 sm:pb-16 sm:pt-44">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[100px]" />
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </Container>
    </Section>
  );
}
