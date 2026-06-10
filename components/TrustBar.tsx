"use client";

import { motion } from "framer-motion";
import { Counter } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function TrustBar() {
  const items = [
    {
      k: 72,
      suffix: "h",
      v: "Average Delivery Time",
      sub: ["Live & fully tested", "No long agency waits"],
    },
    {
      k: 4.8,
      suffix: "/5",
      v: "Client Satisfaction Score",
      sub: ["Verified client reviews", "Real Indian businesses"],
    },
    {
      k: 150,
      suffix: "+",
      v: "Websites Delivered",
      sub: ["Across India & abroad", "Local traders to brands"],
    },
    {
      k: 100,
      suffix: "%",
      v: "On-Time Delivery Rate",
      sub: ["Fixed delivery dates", "We deliver when we promise"],
    },
  ];

  return (
    <section className="relative z-20 -mt-16 md:-mt-28 mx-auto max-w-8xl w-full px-6 md:px-12 lg:px-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200/70">
          {items.map((it, i) => (
            <motion.div
              key={it.v}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="bg-white text-center flex flex-col items-center justify-center px-4 py-8 md:py-10"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-[3.2rem] font-semibold tracking-tight text-black">
                <Counter to={it.k!} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-600">
                {it.v}
              </div>
              <div className="hidden md:block mt-3 h-px w-10 bg-neutral-200" />
              <ul className="hidden md:flex mt-3 flex-col items-center gap-1">
                {it.sub.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] font-medium text-neutral-400"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
