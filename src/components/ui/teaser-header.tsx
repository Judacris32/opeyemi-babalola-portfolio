import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function TeaserHeader({
  eyebrow,
  title,
  subtitle,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-14">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-balance leading-relaxed text-muted">{subtitle}</p>
      )}
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-75"
      >
        {linkLabel}
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </Link>
    </div>
  );
}
