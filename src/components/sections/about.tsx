"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { education, profile } from "@/data/content";

export function About() {
  return (
    <Section tone="base">
      <Container>
        {/* Two cards, side by side: a full-size photo card and a matching
            text card. Fixed white/black/navy styling here is deliberate --
            a clean, editorial printed-bio look that holds steady whether
            the site is in light or dark mode. A soft, diffused shadow
            (rather than a flat drop shadow), a thin accent rule under the
            heading, and a hairline-divided credentials/contact block read
            as a considered, professional layout rather than a template. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5"
          >
            <div className="relative h-[420px] w-full sm:h-[480px] lg:h-full lg:min-h-[32rem]">
              <Image
                src="/images/opeyemi-portrait.jpg"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 pt-14">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-[oklch(82.8%_0.189_84.429)]" strokeWidth={2.5} />
                  {profile.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center rounded-[2rem] bg-white p-10 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5 sm:p-12 lg:p-14"
          >
            <span className="mb-5 block h-[3px] w-12 rounded-full bg-blue-700" />
            <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
              About Me
            </h2>

            <div className="mt-5 flex flex-col gap-5 text-justify">
              <p className="text-lg leading-relaxed text-neutral-900">
                I&rsquo;ve spent the last six years moving between two worlds that
                rarely get handled well by the same person: the unglamorous backend
                work of keeping systems up, and the newer problem of wiring large
                language models into products that real people depend on. I&rsquo;ve
                done both, often on the same team.
              </p>
              <p className="leading-relaxed text-neutral-700">
                I led backend transformation on Primus Plus, Access Bank&rsquo;s
                corporate and personal banking platform, for a customer base north
                of 52 million across Africa. I&rsquo;ve built LLM chat backends that
                route across OpenAI, Anthropic, Google and Groq without the app
                knowing the difference. And as founder of Wardscribe, I&rsquo;m
                building the registry that lets AI agents find, trust and talk to
                each other, starting from an open standard rather than a walled
                garden.
              </p>
              <p className="leading-relaxed text-neutral-700">
                I hold a Master&rsquo;s in Computing from Edge Hill University and
                a Bachelor&rsquo;s from the University of Ilorin, and now lead the
                MLOps community in Liverpool, where meetups run on the same
                principle as my code: skip the theory that doesn&rsquo;t ship.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6">
              {education.map((e) => (
                <div key={e.school} className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" strokeWidth={2} />
                  <p className="text-sm leading-snug text-neutral-700">
                    <span className="font-semibold text-neutral-900">{e.degree}</span>
                    {" — "}
                    {e.school}, {e.year}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-200 pt-6 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-medium text-neutral-900 transition-colors hover:text-blue-700"
              >
                <Mail className="h-4 w-4 text-blue-700" strokeWidth={2} />
                {profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
