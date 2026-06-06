"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";
import { Code2, Compass, Layers, ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Solution() {
  const differentiators = [
    {
      icon: Code2,
      title: "Hand Coded, No Templates",
      desc: "Zero bloated page builders, buggy plugins, or visual templates. Built with clean, modern React code that loads in under 1 second. Your competitors' heavy WordPress sites simply cannot compete.",
    },
    {
      icon: Compass,
      title: "Conversion First Architecture",
      desc: "Strategic layouts, high visibility interactive elements, clickable direct response buttons, and trust markers placed exactly where visitors make their final purchasing decisions.",
    },
    {
      icon: Layers,
      title: "Optimised for Ads (Google & Meta)",
      desc: "Perfect structure for paid campaigns. Lightning fast load times improve your Google Ads Quality Score, lowering your cost per click and stretching your marketing budget further.",
    },
    {
      icon: ShieldCheck,
      title: "Ongoing Performance & Support",
      desc: "Optional lightning fast local Australian hosting, SEO fine tuning, and reliable on demand maintenance so you can focus on running your business, while your website runs 24/7.",
    },
  ];

  return (
    <Section id="solution" className="relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 conic-glow h-[400px] w-[600px] pointer-events-none opacity-40" />

      <SectionHeader
        eyebrow="The Solution"
        title="Websites hand crafted for high performance."
        subtitle="We don't use clunky page builders, slow templates, or artificial generators. Every line of code is written by hand in Sydney to ensure your business loads instantly, ranks on Google, and converts traffic into customer enquiries."
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {differentiators.map((diff, i) => {
          const Icon = diff.icon;
          return (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="flex gap-6 rounded-3xl bg-surface-elevated p-8 hairline hover:shadow-soft transition-all hover:scale-[1.005]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#101729]/10 text-[#101729]">
                <Icon className="h-6 w-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {diff.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
