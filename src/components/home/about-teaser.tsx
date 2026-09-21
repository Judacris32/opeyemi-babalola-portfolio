"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/content";

export function AboutTeaser() {
  return (
    <Section tone="tint">
      <Container>
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            About
          </span>
        </div>

        {/* Two cards, side by side on larger screens: a full-size photo card
            and a matching text card. Fixed white/black/navy styling here is
            deliberate -- a clean, editorial printed-bio look that holds
            steady whether the site is in light or dark mode. A soft,
            diffused shadow (rather than a flat drop shadow) and a thin
            accent rule keep it feeling considered instead of templated. */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5"
          >
            <div className="relative h-[360px] w-full sm:h-[440px] lg:h-full lg:min-h-[26rem]">
              <Image
                src="/images/opeyemi-portrait.jpg"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center rounded-[2rem] bg-white p-10 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5 sm:p-12"
          >
            <span className="mb-5 block h-[3px] w-12 rounded-full bg-blue-700" />
            <h3 className="text-balance font-display text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
              An engineer who stays until it works in production
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-900 sm:text-lg text-justify">
              For six years I&rsquo;ve worked in two worlds that rarely sit with
              the same person: the unglamorous discipline of keeping backend
              systems standing, and the newer challenge of wiring large language
              models into products people actually depend on. These days that
              means Wardscribe, the registry I founded so AI agents can find
              and trust each other, instead of every team building that trust
              layer alone.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
            >
              Read the full story
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
