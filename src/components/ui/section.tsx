import { cn } from "@/lib/utils";

const toneClass = {
  base: "bg-bg text-ink",
  tint: "bg-surface-2 text-ink",
  invert:
    "bg-gradient-to-br from-[oklch(62.3%_0.214_259.815)] to-[oklch(34%_0.15_259.815)] text-white",
} as const;

export type SectionTone = keyof typeof toneClass;

export function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", toneClass[tone], className)}>
      {children}
    </section>
  );
}
