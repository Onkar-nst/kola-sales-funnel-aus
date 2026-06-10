"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";
import { ZapOff, Target, PhoneOff } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Problem() {
  const problems = [
    {
      icon: ZapOff,
      title: "Slow & Outdated",
      desc: "Customers tap your Google Ad, wait 5 seconds for your site to load, and leave. You paid for that click, but they never even saw your offer.",
      badge: "Kills Google Ad Quality Score",
    },
    {
      icon: Target,
      title: "Not Built to Convert",
      desc: "A pretty website means nothing if there's no clear path from visitor to paying customer. If your phone number isn't clickable and your forms are long, you lose them.",
      badge: "Wasted Traffic & Ad Spend",
    },
    {
      icon: PhoneOff,
      title: "Invisible on Mobile",
      desc: "Over 70% of local searches in Australia happen on phones. If your site doesn't load instantly and work flawlessly on mobile, you're turning away 7 out of 10 prospects.",
      badge: "Losing Mobile Prospects",
    },
  ];

  return (
    <Section id="problem" className="bg-surface/30">
      <SectionHeader
        eyebrow="The Problem"
        title={
          <>
            Why most local business websites<br />
            fail to win customers.
          </>
        }
        subtitle="Many local business websites are built on heavy templates or clunky DIY builders. They load slowly, confuse mobile visitors, and fail to turn clicks into enquiries. You paid for that traffic, so your website needs to earn them."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {problems.map((prob, i) => {
          const Icon = prob.icon;
          return (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface-elevated p-8 hairline transition-all hover:shadow-soft hover:scale-[1.01]"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {prob.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {prob.desc}
                </p>
              </div>

              <div className="mt-8">
                <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive/80">
                  {prob.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
