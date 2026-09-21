"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/content";
import { resolveTechIcon } from "@/data/skill-icons";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section tone="base">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group card-surface relative flex flex-col rounded-3xl p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-none sm:p-8"
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-10 rounded-3xl"
                  aria-label={`Open ${project.name}`}
                />
              )}

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {project.name}
                </h3>
                {project.url && (
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-contrast">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                )}
              </div>

              <div className="mt-1.5 flex items-center gap-2">
                <p className="text-sm font-medium text-brand">{project.tagline}</p>
                {project.status && (
                  <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => {
                  const { icon: Icon, color, adaptive } = resolveTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-ink"
                    >
                      <Icon
                        className={cn("h-3.5 w-3.5 shrink-0", adaptive && "text-ink")}
                        style={adaptive ? undefined : { color }}
                      />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
