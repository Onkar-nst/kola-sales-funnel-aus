"use client";

import { motion } from "framer-motion";
import { Section, Counter } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function Stats() {
  const items = [
    { k: 214, suffix: "%", v: "Avg. ROI in 30 days" },
    { k: 48, suffix: "h", v: "To launch your funnel" },
    { k: 98, suffix: "/100", v: "PageSpeed Score" },
    { k: 3, suffix: "x", v: "More local leads" },
  ];
  return (
    <Section>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease }}
            className="bg-surface-elevated p-8 text-center"
          >
            <div className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              <Counter to={it.k} suffix={it.suffix} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {it.v}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

