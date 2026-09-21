"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { recognitions } from "@/data/content";
import { cn } from "@/lib/utils";

export function Recognition() {
  return (
    <Section tone="base">
      <Container>
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <Newspaper className="h-3.5 w-3.5" strokeWidth={2.5} />
            Covered independently, not self-published
          </span>
        </div>

        {/* One row per recognition: the actual press screenshot on one
            side, the award context and a working link to the source on
            the other -- alternating sides so it reads as a considered
            editorial spread rather than a repeated card grid. */}
        <div className="mx-auto max-w-5xl divide-y divide-border">
          {recognitions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-1 items-center gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-14"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.outlet} coverage of ${item.title}`}
                className={cn(
                  "group block overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5",
                  i % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                  <Image
                    src={item.image}
                    alt={`Screenshot of ${item.outlet}'s coverage: ${item.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                  {item.program} · {item.year}
                </p>
                <h3 className="mt-3 text-balance font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{item.description}</p>

                <p className="mt-5 text-sm text-muted">
                  {item.outlet}
                  {item.byline ? ` · By ${item.byline}` : ""} · {item.date}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-75"
                >
                  {item.linkLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
