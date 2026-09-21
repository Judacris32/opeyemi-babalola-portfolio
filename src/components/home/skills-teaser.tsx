"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TeaserHeader } from "@/components/ui/teaser-header";
import { skillGroups } from "@/data/content";
import { resolveTechIcon } from "@/data/skill-icons";
import { cn } from "@/lib/utils";

const highlight = [
  "TypeScript",
  "Go",
  "Python",
  "Next.js",
  "OpenAI",
  "Anthropic",
  "Ollama",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "GraphQL",
  "GitHub Actions",
];

export function SkillsTeaser() {
  const allSkills = skillGroups.flatMap((g) => g.skills);
  const shown = highlight.filter((s) => allSkills.includes(s));

  return (
    <Section tone="base">
      <Container>
        <TeaserHeader
          eyebrow="Toolbox"
          title="Technical Expertise and Stack"
          subtitle="A comprehensive overview of the technologies, tools, and strategic proficiencies I use to engineer world-class digital solutions."
          href="/skills"
          linkLabel="See the full toolkit"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {shown.map((skill) => {
            const { icon: Icon, color, adaptive } = resolveTechIcon(skill);
            return (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                <Icon
                  className={cn("h-4 w-4 shrink-0", adaptive && "text-ink")}
                  style={adaptive ? undefined : { color }}
                />
                {skill}
              </span>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
