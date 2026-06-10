"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { Section } from "./Primitives";
import AnimatedHeading from "./AnimatedHeading";

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
          <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-semibold text-neutral-900">
            <Sparkles className="h-3.5 w-3.5 fill-current" />
            Ready?
          </div>
          
          <AnimatedHeading
            lines={["Your website, live by Friday.", "Let's make it happen."]}
            className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]"
          />

          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Join 100+ Indian businesses growing online with Kola Communications. From Rs. 7,999, no hidden charges, no surprises.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-8 py-4 text-sm font-semibold shadow-soft transition-all hover:bg-neutral-900 active:scale-[0.98] cursor-pointer"
            >
              Get My Website Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full hairline bg-surface-elevated px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              Or chat with us on WhatsApp
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-medium">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-neutral-900" /> 30 Day Money Back
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-neutral-900" /> Premium Custom Design
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-neutral-900" /> GST Invoice Provided
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}






