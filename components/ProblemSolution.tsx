"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";
import { EyeOff, Eye, ShieldAlert, ShieldCheck, PhoneOff, Zap, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProblemSolution() {
  const points = [
    {
      problemIcon: EyeOff,
      problemTitle: "Completely Invisible Online",
      problemDesc: "Local customers searching for your services on Google can't find you. High-paying leads go straight to your competitors.",
      solutionIcon: Eye,
      solutionTitle: "Instant Google Presence",
      solutionDesc: "We build a fully optimized digital storefront that puts your business right in front of local clients when they search.",
      number: "01",
    },
    {
      problemIcon: ShieldAlert,
      problemTitle: "Losing Trust & Credibility",
      problemDesc: "Modern customers expect a website. Without one, you look unofficial, and trust goes to competitors who have one.",
      solutionIcon: ShieldCheck,
      solutionTitle: "Bespoke Brand Authority",
      solutionDesc: "A premium, custom site that showcases your reviews and expertise to prove you are the go-to local expert.",
      number: "02",
    },
    {
      problemIcon: PhoneOff,
      problemTitle: "No Automated Lead Flow",
      problemDesc: "Relying purely on offline word-of-mouth means your business stops growing whenever you aren't chasing leads.",
      solutionIcon: Zap,
      solutionTitle: "24/7 Enquiry Autopilot",
      solutionDesc: "A conversion-focused lead capture system that pulls in enquiries and quotes for you even when you're on the job.",
      number: "03",
    },
  ];

  return (
    <Section id="problem-solution" className="bg-surface/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-brand/6 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <SectionHeader
        eyebrow="The Problem & Solution"
        title="Why local websites fail & how we fix it."
        subtitle="We build custom, high-performance digital storefronts that put your business on the map and automatically convert local clicks into paying customers."
      />

      <div className="mt-8 flex flex-col gap-5 relative z-10">
        {points.map((point, i) => {
          const PIcon = point.problemIcon;
          const SIcon = point.solutionIcon;
          return (
            <motion.div
              key={point.problemTitle}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease }}
              className="group relative"
            >
              {/* Hover glow outline */}
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-destructive/20 via-transparent to-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-[1px]" />

              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] overflow-hidden rounded-[27px] border border-hairline/60 bg-surface-elevated/80 backdrop-blur-sm shadow-soft transition-all duration-500 group-hover:shadow-elevated group-hover:border-hairline">

                {/* Problem Side */}
                <div className="p-6 md:p-8 relative overflow-hidden">
                  {/* Background tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/[0.06] to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-destructive/5 blur-2xl pointer-events-none" aria-hidden />

                  <div className="relative z-10">
                    {/* Step number + badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-destructive/8 text-destructive text-[11px] font-bold font-display tracking-tight border border-destructive/10">
                        {point.number}
                      </span>
                      <span className="inline-flex rounded-full bg-destructive/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-destructive border border-destructive/10">
                        The Problem
                      </span>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive/15 to-destructive/5 text-destructive border border-destructive/10 shadow-soft transition-transform duration-300 group-hover:scale-105">
                        <PIcon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground tracking-tight">
                          {point.problemTitle}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {point.problemDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                <div className="hidden md:flex items-center justify-center px-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-hairline to-transparent" />
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand/15 to-brand/5 text-brand border border-brand/15 shadow-soft"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-hairline to-transparent" />
                  </div>
                </div>

                {/* Arrow Connector (Mobile) */}
                <div className="flex md:hidden items-center justify-center py-1">
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-hairline to-transparent" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4, ease }}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand/15 to-brand/5 text-brand border border-brand/15 rotate-90"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </motion.div>
                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-hairline to-transparent" />
                  </div>
                </div>

                {/* Solution Side */}
                <div className="p-6 md:p-8 relative overflow-hidden">
                  {/* Background tint */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-brand/[0.06] to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-brand/5 blur-2xl pointer-events-none" aria-hidden />

                  <div className="relative z-10">
                    {/* Step number + badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/8 text-brand text-[11px] font-bold font-display tracking-tight border border-brand/10">
                        {point.number}
                      </span>
                      <span className="inline-flex rounded-full bg-brand/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand border border-brand/10">
                        Our Solution
                      </span>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 text-brand border border-brand/10 shadow-soft transition-transform duration-300 group-hover:scale-105">
                        <SIcon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground tracking-tight">
                          {point.solutionTitle}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {point.solutionDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
