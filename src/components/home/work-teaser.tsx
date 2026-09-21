"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TeaserHeader } from "@/components/ui/teaser-header";
import { projects } from "@/data/content";

export function WorkTeaser() {
  const featured = projects.slice(0, 3);

  return (
    <Section tone="tint">
      <Container>
        <TeaserHeader
          eyebrow="Selected work"
          title="Products i've built end to end"
          subtitle="A registry for AI agents. A memory layer that follows a conversation across models. His own, start to finish."
          href="/work"
          linkLabel="See all the work"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-surface flex flex-col rounded-3xl p-6 shadow-soft"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                {project.url && (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" strokeWidth={2.5} />
                )}
              </div>
              <p className="mt-1 text-xs font-medium text-gold">{project.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description.length > 120
                  ? `${project.description.slice(0, 117)}…`
                  : project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
