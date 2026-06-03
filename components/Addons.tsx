"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Calendar, CreditCard, Mail, Image as ImageIcon, Zap, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function AddOns() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const items = [
    {
      icon: Search,
      name: "SEO accelerator",
      price: "$149/mo",
      priceVal: 149,
      priceType: "monthly",
      d: "Local SEO strategy, directory citations, and detailed monthly search performance reports.",
      color: "oklch(0.7 0.18 45)", // Warm Orange
    },
    {
      icon: ImageIcon,
      name: "Pro photography brief",
      price: "$0",
      priceVal: 0,
      priceType: "free",
      d: "A customized shot list and photographic direction guide tailored to your brand for your photographer.",
      color: "oklch(0.7 0.18 140)", // Emerald Green
    },
    {
      icon: Mail,
      name: "Email + Google Workspace",
      price: "$12/mo",
      priceVal: 12,
      priceType: "monthly",
      d: "Professional custom business email accounts (e.g., info@yourbusiness.com.au) via Google Workspace.",
      color: "oklch(0.6 0.15 220)", // Sky Blue
    },
    {
      icon: Calendar,
      name: "Online bookings",
      price: "$49 once",
      priceVal: 49,
      priceType: "once",
      d: "Complete setup and design integration with popular scheduling engines like Calendly or Square.",
      color: "oklch(0.65 0.16 290)", // Royal Purple
    },
    {
      icon: CreditCard,
      name: "Stripe payments",
      price: "$79 once",
      priceVal: 79,
      priceType: "once",
      d: "Integrate Stripe payments to securely accept booking deposits, payments, or sell simple products.",
      color: "oklch(0.62 0.17 320)", // Magenta / Pink
    },
    {
      icon: Globe,
      name: "Hosting + maintenance",
      price: "$19/mo",
      priceVal: 19,
      priceType: "monthly",
      d: "Lightning-fast Australian hosting, automated weekly backups, SSL certificates, and core system updates.",
      color: "oklch(0.62 0.15 170)", // Mint Green
    },
  ];

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const basePrice = 99;
  
  const monthlyTotal = items
    .filter((it) => selectedAddons.includes(it.name) && it.priceType === "monthly")
    .reduce((sum, it) => sum + it.priceVal, 0);

  const onceOffTotal = items
    .filter((it) => selectedAddons.includes(it.name) && it.priceType === "once")
    .reduce((sum, it) => sum + it.priceVal, 0);

  return (
    <Section id="addons" className="relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute right-0 bottom-0 h-96 w-96 -translate-y-12 translate-x-32 rounded-full bg-brand/5 blur-3xl" aria-hidden />

      <SectionHeader
        eyebrow="Optional add-ons"
        title={
          <>
            Grow at your pace.
            <br />
            <span className="text-gradient">Add only what you need.</span>
          </>
        }
        subtitle="Estimate your ideal plan by selecting from our high-value additions below."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const isSelected = selectedAddons.includes(it.name);
          return (
            <motion.div
              key={it.name}
              onClick={() => toggleAddon(it.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5, ease }}
              className={`group relative flex cursor-pointer items-start gap-4 rounded-3xl p-5 shadow-soft transition-all duration-300 select-none ${
                isSelected
                  ? "bg-surface-elevated ring-2 ring-foreground shadow-elevated"
                  : "bg-surface-elevated/60 hover:bg-surface-elevated hairline hover:-translate-y-0.5 hover:shadow-elevated"
              }`}
            >
              {/* Colored Icon box */}
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl transition-transform group-hover:scale-105"
                style={{
                  backgroundColor: `${it.color}15`, // Soft color tint
                  color: it.color,
                }}
              >
                <it.icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1 pr-6">
                <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-brand-glow">
                  {it.name}
                </h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{it.d}</p>
                <div className="mt-3">
                  <span className="inline-block rounded-full hairline bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-foreground">
                    {it.price}
                  </span>
                </div>
              </div>

              {/* Checkbox indicator */}
              <div className="absolute right-5 top-5">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                    isSelected
                      ? "bg-foreground border-foreground scale-110"
                      : "border-muted-foreground/30 bg-transparent group-hover:border-foreground/60"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="h-3 w-3 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pricing estimator summary */}
      <AnimatePresence>
        {selectedAddons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 rounded-3xl p-6 md:p-8 glass hairline flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow"
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-glow">
                <Sparkles className="h-3.5 w-3.5 fill-brand-glow/20" /> ESTIMATED PROJECT SUMMARY
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">Your Custom Platform</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-md">
                Selected: {selectedAddons.join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center w-full md:w-auto justify-between md:justify-end">
              <div className="text-left md:text-right">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Once-off Setup</div>
                <div className="text-3xl font-semibold text-foreground mt-0.5">
                  ${basePrice + onceOffTotal}
                </div>
                <div className="text-[9px] text-muted-foreground mt-0.5">Includes base site (${basePrice})</div>
              </div>
              {monthlyTotal > 0 && (
                <div className="text-left md:text-right border-l pl-6 border-hairline">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Monthly support</div>
                  <div className="text-3xl font-semibold text-gradient mt-0.5">
                    ${monthlyTotal}/mo
                  </div>
                </div>
              )}
              <a
                href="#pricing"
                className="rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-soft hover:shadow-elevated w-full md:w-auto text-center cursor-pointer"
              >
                Lock in this plan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
