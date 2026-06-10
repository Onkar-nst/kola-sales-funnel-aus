"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Scarcity() {
  const [weekDateStr, setWeekDateStr] = useState("this month");

  useEffect(() => {
    // Dynamically display the current month
    const now = new Date();
    const formatted = now.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
    setWeekDateStr(formatted);
  }, []);

  return (
    <section id="availability" className="relative px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-14 text-center text-background shadow-elevated md:px-16 md:py-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" aria-hidden />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 300px at 30% 0%, oklch(0.7 0.17 280 / 0.7), transparent 60%), radial-gradient(500px 250px at 80% 100%, oklch(0.74 0.16 35 / 0.55), transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-background/90">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-coral animate-pulse" />
            Limited Monthly Intake
          </div>

          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-balance text-background sm:text-3xl md:text-4xl">
            We take on a maximum of 8 projects per month.
          </h2>

          <p className="mt-2.5 max-w-lg text-balance text-xs leading-relaxed text-background/85">
            This is not a gimmick. Every website we build gets our full attention, no juggling 20 clients at once, no outsourcing to junior developers. When we take your project, it gets done properly.
          </p>

          {/* Availability Status Card */}
          <div className="mt-6 w-full max-w-sm rounded-2xl border border-background/15 bg-background/5 p-4 text-left">
            <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-background/70">
              <span>{weekDateStr}</span>
              <span className="text-accent-coral font-bold">5 of 8 spots taken</span>
            </div>

            {/* Custom Progress Bar */}
            <div className="mt-2 relative h-2.5 w-full overflow-hidden rounded-full bg-background/20">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "62.5%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, ease }}
                className="h-full rounded-full bg-accent-coral"
              />
            </div>

            <div className="mt-3 flex justify-between items-center text-[10px] text-background/80">
              <span>Next kickoff: Immediate</span>
              <span className="font-semibold text-accent-coral">3 spots left this month</span>
            </div>
          </div>

          {/* Quality Rationale Grid */}
          <div className="mt-6 w-full max-w-sm border-t border-background/10 pt-5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-background/50 text-center mb-3">
              Why We Cap Intake:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {[
                "Founder reviews every project",
                "Fast revision turnaround",
                "Guaranteed 72 hour delivery",
                "Custom built, no templates",
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-background/10 text-background">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[11px] font-medium text-background/90">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-xs font-semibold text-foreground shadow-elevated transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Check availability for this month
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
