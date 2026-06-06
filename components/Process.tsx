"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code2, Eye, Rocket } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: ClipboardList,
      t: "Tell Us About Your Brand",
      d: "Complete a simple 5 minute online questionnaire about your services, target areas, and business style. No technical jargon.",
    },
    {
      n: "02",
      icon: Code2,
      t: "We Hand-Code Your Site",
      d: "Our local Sydney team builds your site entirely from scratch. Fully responsive, optimized for lightning fast loading, and conversion ready.",
    },
    {
      n: "03",
      icon: Eye,
      t: "Review & Refine Same Day",
      d: "We send you a private live preview link. Request any changes, and we will update your site immediately. You must be 100% happy.",
    },
    {
      n: "04",
      icon: Rocket,
      t: "Go Live & Get Enquiries",
      d: "We connect your domain, test contact forms, secure the site, and push it live. You're ready to capture paid traffic leads.",
    },
  ];

  return (
    <Section id="how" className="bg-surface relative overflow-hidden">
      {/* Subtle light accent */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#101729]/5 blur-3xl animate-pulse" aria-hidden />

      <SectionHeader
        eyebrow="Your Journey"
        title={
          <>
            What happens after <span className="text-gradient">you pay.</span>
          </>
        }
        subtitle="Transparent onboarding with zero guesswork. Here is exactly how we deliver your site."
      />
      
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4 mt-12">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="group relative overflow-hidden rounded-3xl hairline bg-surface-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              {/* Giant background numbers */}
              <div className="absolute right-4 top-2 select-none font-display text-8xl font-bold text-foreground/[0.03] transition-colors duration-300 group-hover:text-[#101729]/5">
                {s.n}
              </div>

              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground/5 text-foreground transition-colors duration-300 group-hover:bg-[#101729] group-hover:text-[#101729]-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#101729]">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
