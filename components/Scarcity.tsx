"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const TOTAL_SPOTS = 8;

// Tiny deterministic PRNG (mulberry32) so the same seed always yields the same
// sequence — keeps the number stable across refreshes and SSR/client renders.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Compute "spots taken" for the current day:
// • A random base (2–4) is decided at the start of each week.
// • Every other day after that, the count creeps up by +1 or +2 (randomly).
// • Hard-capped at TOTAL_SPOTS - 1, so there is ALWAYS at least 1 spot left
//   (the month never shows as fully booked).
function computeSpotsTaken(now: Date): number {
  const weekStart = new Date(now);
  weekStart.setHours(0, 0, 0, 0);
  const dayOfWeek = weekStart.getDay(); // 0 Sun … 6 Sat
  const daysSinceMonday = (dayOfWeek + 6) % 7;
  weekStart.setDate(weekStart.getDate() - daysSinceMonday);

  const dayMs = 86_400_000;
  const daysIntoWeek = Math.floor((now.getTime() - weekStart.getTime()) / dayMs);
  const increments = Math.floor(daysIntoWeek / 2); // bump "every other day"

  // Seed on the week (day-index of Monday) so the whole week shares one sequence.
  const weekSeed = Math.floor(weekStart.getTime() / dayMs);
  const rng = mulberry32(weekSeed);

  let taken = 2 + Math.floor(rng() * 3); // base 2–4
  for (let i = 0; i < increments; i++) {
    taken += rng() < 0.5 ? 1 : 2;
  }

  return Math.min(Math.max(taken, 1), TOTAL_SPOTS - 1); // 1 … 7 (never full)
}

export function Scarcity() {
  const [weekDateStr, setWeekDateStr] = useState("this month");
  const [spotsTaken, setSpotsTaken] = useState(5);

  useEffect(() => {
    // Dynamically display the current month + compute live availability.
    const now = new Date();
    setWeekDateStr(
      now.toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
    );
    setSpotsTaken(computeSpotsTaken(now));
  }, []);

  const spotsLeft = TOTAL_SPOTS - spotsTaken;
  const takenPercent = (spotsTaken / TOTAL_SPOTS) * 100;

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
              <span className="text-accent-coral font-bold">{spotsTaken} of {TOTAL_SPOTS} spots taken</span>
            </div>

            {/* Custom Progress Bar */}
            <div className="mt-2 relative h-2.5 w-full overflow-hidden rounded-full bg-background/20">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${takenPercent}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, ease }}
                className="h-full rounded-full bg-accent-coral"
              />
            </div>

            <div className="mt-3 flex justify-between items-center text-[10px] text-background/80">
              <span>Next kickoff: Immediate</span>
              <span className="font-semibold text-accent-coral">
                {spotsLeft} {spotsLeft === 1 ? "spot" : "spots"} left this month
              </span>
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
        </div>
      </motion.div>
    </section>
  );
}
