"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/content";
import { resolveTechIcon } from "@/data/skill-icons";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section tone="base">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="card-surface rounded-3xl p-6 shadow-soft sm:p-7"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const { icon: Icon, color, adaptive } = resolveTechIcon(skill);
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brand/50"
                    >
                      <Icon
                        className={cn("h-3.5 w-3.5 shrink-0", adaptive && "text-ink")}
                        style={adaptive ? undefined : { color }}
                      />
                      {skill}
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
