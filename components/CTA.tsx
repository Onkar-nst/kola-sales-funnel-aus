"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <Section id="final-cta" className="!py-24 border-t border-hairline bg-surface/10 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 conic-glow h-[350px] w-[500px] pointer-events-none opacity-20" />

      <div className="mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5 fill-current" />
            Ready?
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Get your website live this week.
          </h2>
          
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Join 150+ Australian businesses with a premium, custom hand coded website. From A$99. Delivered in 48 hours. 100% risk free 30 Day Money Back Guarantee.
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get My $99 Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://calendly.com/kola-communications"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full hairline bg-surface-elevated px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface cursor-pointer"
            >
              Book a 15 Minute Call
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-medium">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[oklch(0.55_0.16_150)]" /> 30 Day Money Back
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[oklch(0.55_0.16_150)]" /> Premium Custom Design
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[oklch(0.55_0.16_150)]" /> Sydney-Coded Quality
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
