"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";
import { Check, X, Sparkles, ShieldAlert } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeInItem = {
  hidden: { opacity: 0, x: -16, filter: "blur(4px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
};

const fadeInItemRight = {
  hidden: { opacity: 0, x: 16, filter: "blur(4px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
};

export function WhoThisIsFor() {
  const isFor = [
    "Local Australian businesses (trades, café, retail, clinic)",
    "You need a professional, high-converting online presence",
    "You want a premium website without DIY frustration",
    "You run ads and need a high-ROI landing page",
    "You want it delivered fast — within 48 hours",
  ];

  const isNotFor = [
    "You need a complex custom web app or SaaS dashboard",
    "You want a slow, generic drag-and-drop template",
    "You need a massive 500+ product e-commerce store",
    "You're looking for the cheapest outsourced work possible",
  ];

  return (
    <Section id="qualification" className="bg-surface/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand/8 blur-[100px]" />
        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-destructive/6 blur-[100px]" />
      </div>

      <SectionHeader
        eyebrow="Qualification"
        title="Is this service a fit for your business?"
        subtitle="We value our time and yours. Here is a transparent look at who we can achieve massive success for, and who we are not the right fit for."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 relative z-10">
        {/* Is For You Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="group relative"
        >
          {/* Gradient border glow effect */}
          <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-brand/40 via-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

          <div className="relative rounded-[27px] bg-surface-elevated/90 backdrop-blur-sm p-8 md:p-10 border border-brand/15 shadow-soft overflow-hidden transition-all duration-500 group-hover:shadow-elevated group-hover:border-brand/30">
            {/* Subtle inner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" aria-hidden />

            <div className="relative z-10">
              {/* Header with icon */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/15 shadow-soft">
                  <Sparkles className="h-5 w-5 text-brand" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">
                    Perfect Match
                  </span>
                  <span className="text-lg font-semibold text-foreground tracking-tight">
                    This is for you if…
                  </span>
                </div>
              </div>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-3.5"
              >
                {isFor.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInItem}
                    className="group/item flex items-start gap-3.5 rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-brand/[0.04]"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/10 text-brand ring-1 ring-brand/10 group-hover/item:ring-brand/25 transition-all duration-300 group-hover/item:scale-110">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-[14px] leading-relaxed text-foreground/90 font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>

        {/* Is NOT For You Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="group relative"
        >
          {/* Gradient border glow effect */}
          <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-destructive/30 via-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

          <div className="relative rounded-[27px] bg-surface-elevated/90 backdrop-blur-sm p-8 md:p-10 border border-destructive/10 shadow-soft overflow-hidden transition-all duration-500 group-hover:shadow-elevated group-hover:border-destructive/20">
            {/* Subtle inner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-destructive/4 rounded-full blur-3xl pointer-events-none" aria-hidden />

            <div className="relative z-10">
              {/* Header with icon */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive/15 to-destructive/5 border border-destructive/10 shadow-soft">
                  <ShieldAlert className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-destructive">
                    Not the right fit
                  </span>
                  <span className="text-lg font-semibold text-foreground tracking-tight">
                    This is NOT for you if…
                  </span>
                </div>
              </div>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-3.5"
              >
                {isNotFor.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInItemRight}
                    className="group/item flex items-start gap-3.5 rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-destructive/[0.04]"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-destructive/15 to-destructive/5 text-destructive ring-1 ring-destructive/10 group-hover/item:ring-destructive/25 transition-all duration-300 group-hover/item:scale-110">
                      <X className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-[14px] leading-relaxed text-muted-foreground font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
