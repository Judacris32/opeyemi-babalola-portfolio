"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const principles = [
  {
    icon: Wrench,
    title: "Battle-tested over hype",
    description:
      "I use tools because they actually hold up under load, not because they're trending on Twitter. If it's in my stack, it's because something else broke first and this fixed it for good.",
  },
  {
    icon: Layers,
    title: "Keep it simple and focused",
    description:
      "I prefer boring, reliable tools over giant frameworks that try to solve everything. Clear Go services and straightforward APIs beat magic abstractions any day.",
  },
  {
    icon: ShieldCheck,
    title: "Production proof",
    description:
      "Everything here has run in systems handling real users and real traffic, not just local hobby projects or tutorial apps.",
  },
];

export function SkillsPhilosophy() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeader
          eyebrow="The approach"
          title="Why I choose what I use"
          subtitle="This isn't a trophy case of every tool I've ever opened, it's just the core stack I trust to get work done."
          className="mb-12 sm:mb-14"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface rounded-3xl p-7 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand/70 text-brand-contrast">
                <principle.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {principle.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}