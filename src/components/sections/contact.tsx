"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/content";

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // No backend is wired up behind this site yet, so the form hands the
    // message to the visitor's own email client, pre-filled and ready to
    // send -- nothing is silently lost, and no third-party form service
    // or API key is required to make this work.
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <Section tone="base">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[oklch(62.3%_0.214_259.815)] to-[oklch(34%_0.15_259.815)] px-6 py-16 text-center shadow-soft-dark sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Open to the right conversation
          </span>

          <h2 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Have a system that needs to hold under real weight?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-balance text-white/85">
            Whether it&rsquo;s an ML pipeline, an AI product backend, or infrastructure
            that&rsquo;s starting to creak, Opeyemi&rsquo;s happy to talk it through.
          </p>

          <form onSubmit={handleSubmit} className="relative mx-auto mt-10 max-w-xl text-left">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-gold focus:bg-white/15"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-gold focus:bg-white/15"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="sr-only">
                What are you building?
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you building?"
                className="w-full resize-none rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-gold focus:bg-white/15"
              />
            </div>

            <button
              type="submit"
              className="btn-hover-gold mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[oklch(62.3%_0.214_259.815)] shadow-pill sm:w-auto"
            >
              <Send className="h-4 w-4" strokeWidth={2.5} />
              Send the message
            </button>

            <p className="mt-3 text-xs text-white/70" role="status">
              {sent
                ? "Opening your email app with this pre-filled — send it from there."
                : `Opens your email app, addressed to ${profile.email} and ready to send.`}
            </p>
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/15 pt-8 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-gold-contrast hover:border-gold"
            >
              <Mail className="h-4 w-4" strokeWidth={2.5} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-gold-contrast hover:border-gold"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {profile.phone}
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
