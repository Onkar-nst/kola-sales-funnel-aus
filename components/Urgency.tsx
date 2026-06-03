"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Urgency() {
  return (
    <section className="relative px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-14 text-center text-background shadow-elevated md:px-16 md:py-20"
      >
        {/* Background elements identical to CTA.tsx */}
        <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px 300px at 30% 0%, oklch(0.7 0.17 280 / 0.7), transparent 60%), radial-gradient(500px 250px at 80% 100%, oklch(0.74 0.16 35 / 0.55), transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Active Urgency Tag */}
          

          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.02em] text-balance text-background sm:text-5xl md:text-6xl lg:text-7xl">
            Only 5 websites a week.
          </h2>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-accent-coral/45 bg-accent-coral/20 px-6 py-2.5 text-base sm:text-lg font-semibold text-accent-coral animate-pulse">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-accent-coral" />
            2 Onboarding Slots Left
          </div>

          {/* Minimalist Slots Visual */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <div className="flex gap-2 text-2xl font-mono tracking-widest">
              <span className="text-background/30">●</span>
              <span className="text-background/30">●</span>
              <span className="text-background/30">●</span>
              <span className="text-accent-coral animate-pulse">○</span>
              <span className="text-accent-coral animate-pulse">○</span>
            </div>
            <span className="text-sm font-medium text-background/80">
              (3 of 5 slots booked)
            </span>
          </div>

          <div className="mt-12">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 rounded-full bg-background px-10 py-5 text-base font-bold text-foreground shadow-elevated transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Claim Your Spot
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
