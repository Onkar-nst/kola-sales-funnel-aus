"use client";

import { motion } from "framer-motion";
import { Section } from "./Primitives";
import { Zap, Users, Monitor, FileText, Calendar, TrendingUp, Star, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProblemSolution() {
  const steps = [
    {
      id: "01",
      title: "Traffic",
      description: "People find your business on Google, Maps, or Ads.",
      icon: Users,
    },
    {
      id: "02",
      title: "Website",
      description: "A fast, professional website makes the right impression.",
      icon: Monitor,
    },
    {
      id: "03",
      title: "Enquiry Form",
      description: "Visitors take action with a simple enquiry or booking.",
      icon: FileText,
    },
    {
      id: "04",
      title: "Booked Call",
      description: "You respond faster and book more jobs.",
      icon: Calendar,
    },
    {
      id: "05",
      title: "Paying Customer",
      description: "Happy customers. More reviews. More growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <Section id="how-it-works" className="bg-surface/30 overflow-hidden relative py-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-brand/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#101729]/10 px-3 py-1.5 mb-6 border border-[#101729]/20 shadow-sm"
          >
            <Zap className="h-3.5 w-3.5 text-[#101729] fill-brand/20" />
            <span className="text-[13px] font-semibold tracking-wide text-[#101729]">How It Works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground mb-5"
          >
            Your Website. <span className="text-[#101729] text-gradient">Your Customer Machine.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            We don't just build websites. We build conversion engines<br className="hidden md:block"/> that turn local traffic into paying customers.
          </motion.p>
        </div>

        {/* Steps Flow */}
        <div className="w-full relative">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-y-10 lg:gap-x-6 xl:gap-x-8 w-full relative z-10">
            {/* Background Dashed Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 border-t-2 border-dashed border-[#101729]/20 -translate-y-1/2 z-0" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <div key={step.id} className="relative flex-1 flex flex-col w-full max-w-[300px] lg:max-w-none mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease }}
                    className="relative w-full h-full rounded-[24px] bg-surface-elevated p-6 shadow-soft border border-hairline transition-all hover:shadow-elevated hover:-translate-y-1 z-10 group flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#101729]/10 text-[#101729] border border-[#101729]/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-[#101729]/10 px-3 py-1 text-[11px] font-bold text-[#101729] border border-[#101729]/10">
                        {step.id}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connectors (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-1/2 left-full ml-3 xl:ml-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20 pointer-events-none">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-elevated border border-[#101729]/20 text-[#101729] shadow-sm"
                      >
                        <ArrowRight className="h-3 w-3" />
                      </motion.div>
                    </div>
                  )}

                  {/* Connectors (Mobile) */}
                  {!isLast && (
                    <div className="lg:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#101729]/5 text-[#101729] rotate-90 border border-[#101729]/10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Result Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6, ease }}
          className="mt-16 md:mt-20 w-full max-w-4xl mx-auto flex items-center justify-center p-5 rounded-2xl bg-[#101729]/5 border border-[#101729]/10 shadow-soft"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#101729]/20 text-[#101729] shrink-0">
              <Star className="h-3.5 w-3.5 fill-brand" />
            </div>
            <span className="text-[15px] md:text-base font-medium text-foreground tracking-tight">
              <span className="font-bold text-[#101729]">Result:</span> More enquiries. More bookings. More revenue.
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
