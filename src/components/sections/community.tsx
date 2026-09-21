"use client";

import { motion } from "framer-motion";
import { Network, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";
import { community } from "@/data/content";

const icons = [Network, Users];

export function Community() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeader
          eyebrow="Community"
          title="Work that happens outside the day job"
          subtitle="Standards he helps write, and a room in Liverpool he shows up to every month."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {community.map((item, i) => {
            const Icon = icons[i] ?? Network;
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card-surface flex flex-col items-center rounded-3xl p-8 text-center shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 text-brand">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.org}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{item.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
