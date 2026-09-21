"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TeaserHeader } from "@/components/ui/teaser-header";
import { experience } from "@/data/content";

export function ExperienceTeaser() {
  const current = experience.filter((e) => e.current).slice(0, 2);

  return (
    <Section tone="base">
      <Container>
        <TeaserHeader
          eyebrow="Experience"
          title="Where I&rsquo;ve worked and what I&rsquo;ve built"
          subtitle="From a Lagos-headquartered bank to fintech startups to the AI registry I founded, backend systems that need to hold under real load."
          href="/experience"
          linkLabel="See the full timeline"
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {current.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-surface rounded-3xl p-6 shadow-soft sm:p-7"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Current
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink sm:text-xl">
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-gold">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
