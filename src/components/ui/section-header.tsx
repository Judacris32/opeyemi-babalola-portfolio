"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("mx-auto flex max-w-2xl flex-col items-center text-center", className)}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
