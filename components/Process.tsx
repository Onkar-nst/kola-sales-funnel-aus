"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Code2, Eye, Rocket } from "lucide-react";
import { Section } from "./Primitives";
import AnimatedHeading from "./AnimatedHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft } = scrollContainerRef.current;
    const cardElement = scrollContainerRef.current.firstElementChild;
    if (cardElement) {
      const cardWidth = cardElement.getBoundingClientRect().width + 24; // 24px is gap-6
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, steps.length - 1)));
    }
  };

  return (
    <Section id="how" className="bg-surface relative overflow-hidden">
      {/* Subtle light accent */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-neutral-900/[0.02] blur-3xl" aria-hidden />

      <div className="mb-14 flex flex-col gap-4 text-center items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/60 px-3 py-1 text-[11px] font-semibold text-neutral-900 shadow-soft">
          Your Journey
        </div>
        <AnimatedHeading
          lines={["What happens after", "you get started."]}
          className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl text-center"
        />
        <p className="max-w-xl text-balance text-muted-foreground">
          Transparent onboarding with zero guesswork. Here is exactly how we deliver your site.
        </p>
      </div>
      
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 scrollbar-none -mx-8 px-[5vw] md:px-8 scroll-px-[5vw] md:scroll-px-0 mt-12"
      >
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="group relative overflow-hidden rounded-3xl hairline bg-surface-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated border border-neutral-200/60 snap-start shrink-0 w-[82vw] sm:w-[60vw] md:w-auto"
            >
              {/* Giant background numbers */}
              <div className="absolute right-4 top-2 select-none font-display text-8xl font-bold text-foreground/[0.02] transition-colors duration-300 group-hover:text-black/[0.04]">
                {s.n}
              </div>

              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800 transition-colors duration-300 group-hover:bg-black group-hover:text-white border border-neutral-200/30">
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-black">
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

      {/* Mobile Scroll Indicator Dots */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (scrollContainerRef.current) {
                const cardElement = scrollContainerRef.current.firstElementChild;
                if (cardElement) {
                  const cardWidth = cardElement.getBoundingClientRect().width + 24; // 24px is gap-6
                  scrollContainerRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: "smooth",
                  });
                }
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx ? "w-5 bg-foreground" : "w-1.5 bg-foreground/20"
            }`}
            aria-label={`Go to step ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
