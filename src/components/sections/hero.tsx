"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="isolate relative overflow-hidden bg-bg pb-20 pt-36 sm:pb-28 sm:pt-44">
      {/* Background photo. `isolate` above gives this section its own stacking
          context so this -z-10 layer paints above the section's own bg-bg
          background (instead of behind it) and still stays behind the
          in-flow content below. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Fade the photo into the page bg toward the bottom. In light mode
            the photo's sky is already close to the page bg, so a light,
            theme-matched fade is enough. In dark mode the sky is much
            brighter than the page's white text, so it needs a real neutral
            scrim (not just a tinted one) to keep that text readable. */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/35 via-bg/30 to-bg dark:from-black/60 dark:via-black/40 dark:to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/45 via-transparent to-bg/45 dark:from-black/40 dark:via-transparent dark:to-black/40" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-brand [text-shadow:0_1px_16px_var(--bg)] sm:text-sm"
        >
          Senior Software &amp; ML Systems Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 max-w-4xl text-balance font-hero text-4xl font-bold leading-[1.1] tracking-tight text-ink [text-shadow:0_4px_28px_var(--bg)] sm:text-3xl md:text-4xl"
        >
          Hey, I'm Opeyemi. I build reliable software and ML systems, ranging from large-scale banking infrastructure to AI agent tooling.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="/work"
            className="btn-hover-gold inline-flex items-center gap-2 rounded-full bg-btn-bg px-6 py-3.5 text-sm font-semibold text-btn-ink shadow-pill"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold hover:text-gold-contrast hover:border-gold"
          >
            Get In Touch
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
