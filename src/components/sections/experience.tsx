"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";

const FEATURED_COUNT = 4;
const VISIBLE_HIGHLIGHTS = 3;

function RoleRow({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const hasMore = item.highlights.length > VISIBLE_HIGHLIGHTS;
  const visible = expanded ? item.highlights : item.highlights.slice(0, VISIBLE_HIGHLIGHTS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.05 }}
      className="grid grid-cols-1 gap-3 border-t border-border py-10 first:border-t-0 first:pt-0 sm:gap-6 lg:grid-cols-[200px_1fr] lg:gap-12 lg:py-12"
    >
      <div className="flex items-center justify-between gap-3 lg:block">
        <p className="text-sm font-medium text-muted">{item.period}</p>
        {item.current && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand lg:mt-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Current
          </span>
        )}
      </div>

      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {item.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand">
          {item.company}
          {item.location ? ` · ${item.location}` : ""}
        </p>

        <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>

        {visible.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {visible.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand transition-opacity hover:opacity-75"
          >
            {expanded ? "Show less" : `+${item.highlights.length - VISIBLE_HIGHLIGHTS} more`}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [showAll, setShowAll] = React.useState(false);
  const featured = experience.slice(0, FEATURED_COUNT);
  const earlier = experience.slice(FEATURED_COUNT);

  return (
    <Section tone="base">
      <Container>
        {/* A plain, divided list rather than a dotted timeline of boxed
            cards -- no badges, no rail. Reads as a considered editorial
            layout instead of an exported CV template. */}
        <div className="mx-auto max-w-3xl">
          {featured.map((item, i) => (
            <RoleRow key={item.company + item.period} item={item} index={i} />
          ))}

          <AnimatePresence initial={false}>
            {showAll &&
              earlier.map((item, i) => (
                <RoleRow
                  key={item.company + item.period}
                  item={item}
                  index={FEATURED_COUNT + i}
                />
              ))}
          </AnimatePresence>

          <div className="mt-2 flex justify-center border-t border-border pt-10">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              {showAll ? "Show fewer roles" : `Show ${earlier.length} earlier roles`}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-300", showAll && "rotate-180")}
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
