"use client";

import { motion } from "framer-motion";
import { Section, Counter } from "./Primitives";
import { CheckCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function TrustBar() {
  const items = [
    { k: 48, suffix: "h", v: "Average delivery time", isCounter: true },
    { k: 4.2, suffix: "/5", v: "Google rating", isCounter: true },
    { k: 150, suffix: "+", v: "Aussie businesses launched", isCounter: true },
    { text: "Reliable", v: "Always Online", isCounter: false },
  ];

  return (
    <Section className="!py-8 bg-surface/50">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease }}
            className="bg-surface-elevated p-6 text-center flex flex-col justify-center items-center min-h-[140px]"
          >
            <div className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl text-foreground flex items-center gap-1.5 justify-center">
              {it.isCounter ? (
                <Counter to={it.k!} suffix={it.suffix} />
              ) : (
                <span className="flex items-center gap-1.5 text-brand">
                  <CheckCircle className="h-6 w-6 stroke-[2.5]" />
                  {it.text}
                </span>
              )}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground max-w-[200px]">
              {it.v}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
