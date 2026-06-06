"use client";

import { motion } from "framer-motion";
import { Counter } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function TrustBar() {
  const items = [
    { 
      k: 48, 
      suffix: "h", 
      v: "Average delivery time", 
      isCounter: true,
      subPoints: ["Rapid concept to live pipeline", "Zero stress turnaround"]
    },
    { 
      k: 4.2, 
      suffix: "/5", 
      v: "Google rating", 
      isCounter: true,
      subPoints: ["Rated by local business owners", "Direct customer support"]
    },
    { 
      k: 150, 
      suffix: "+", 
      v: "Aussie businesses launched", 
      isCounter: true,
      subPoints: ["Nationwide reach across AU", "From startups to local legends"]
    },
    { 
      k: 99.9, 
      suffix: "%", 
      v: "Uptime SLA Guarantee", 
      isCounter: true,
      subPoints: ["99.9% uptime guaranteed", "Cloudflare edge secure"]
    },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-14 mx-auto max-w-none w-full px-6 md:px-12 lg:px-16 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline border border-hairline bg-surface-elevated shadow-elevated rounded-3xl overflow-hidden">
        {items.map((it, i) => (
          <motion.div
            key={it.v}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease }}
            className="p-6 md:p-8 text-center flex flex-col justify-between items-center bg-surface-elevated min-h-[190px] md:min-h-[220px]"
          >
            {/* Number and title label */}
            <div className="flex flex-col items-center justify-center flex-1 w-full">
              <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground flex items-center justify-center">
                <Counter to={it.k!} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground max-w-[200px] leading-tight">
                {it.v}
              </div>
            </div>
            
            {/* Sub points dividers */}
            <div className="mt-4 pt-3.5 border-t border-hairline/60 w-full flex flex-col items-center">
              <ul className="space-y-1 text-left w-full max-w-[190px]">
                {it.subPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-[10.5px] text-muted-foreground/80 font-semibold leading-tight">
                    <span className="h-1 w-1 rounded-full bg-brand shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
