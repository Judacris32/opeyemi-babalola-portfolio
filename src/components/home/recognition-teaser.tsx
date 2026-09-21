"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { recognitions } from "@/data/content";

export function RecognitionTeaser() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeader
          eyebrow="In the press"
          title="A few shoutouts worth sharing"
          subtitle="Some recent features and award panels that noticed the work before I even got around to putting them on my own site."
          className="mb-12 sm:mb-14"
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {recognitions.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-surface group overflow-hidden rounded-3xl shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                <Image
                  src={item.image}
                  alt={`Screenshot of ${item.outlet}'s coverage: ${item.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                  {item.program} · {item.year}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">{item.title}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/recognition"
            className="btn-hover-gold inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow-pill"
          >
            See all features & press
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}