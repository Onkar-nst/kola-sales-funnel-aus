"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Globe,
  Code2,
  Calendar,
  CreditCard,
  Mail,
  Search,
  CheckCircle,
} from "lucide-react";
import { Section, SectionHeader } from "./Primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckoutForm } from "@/components/checkoutform";

const ease = [0.22, 1, 0.36, 1] as const;

const addons = [
  {
    icon: Search,
    name: "SEO accelerator",
    price: 149,
    cadence: "/mo",
    d: "Local SEO strategy, citations, and monthly search reports.",
  },
  {
    icon: Calendar,
    name: "Online bookings",
    price: 49,
    cadence: " once",
    d: "Calendly, Square, or booking tool setup with styled sections.",
  },
  {
    icon: CreditCard,
    name: "Stripe payments",
    price: 79,
    cadence: " once",
    d: "Accept deposits, payments, or simple product purchases.",
  },
  {
    icon: Mail,
    name: "Google Workspace email",
    price: 12,
    cadence: "/mo",
    d: "Professional email setup for your business domain.",
  },
  {
    icon: Globe,
    name: "Hosting + maintenance",
    price: 19,
    cadence: "/mo",
    d: "Fast AU hosting, SSL, backups, and basic maintenance.",
  },
];

type Tier = {
  name: string;
  tag: string;
  price: number;
  original: number;
  cta: string;
  highlight: boolean;
  features: string[];
};

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showCheckoutForm && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0;
    }
  }, [showCheckoutForm]);

  const tiers: Tier[] = [
    {
      name: "Launch",
      tag: "Best for sole traders",
      price: 99,
      original: 1300,
      cta: "Get My $99 Website →",
      highlight: false,
      features: [
        "1-page custom website",
        "Mobile & tablet responsive",
        "Contact form + email alerts",
        "Google Maps & social embeds",
        "Basic SEO setup",
        "48-hour delivery",
        "1 round of same-day revisions",
        "Free hosting & domain (1 year)"
      ],
    },
    {
      name: "Growth",
      tag: "Most popular",
      price: 249,
      original: 2400,
      cta: "Get My Growth Website →",
      highlight: true,
      features: [
        "Up to 5-page custom website",
        "Everything in Launch package",
        "Google Analytics",
        "Booking / calendar integration",
        "Stripe or PayPal payments",
        "Newsletter signup / lead form",
        "Advanced on-page SEO",
        "2 rounds of revisions",
        "5-day delivery",
        "Free hosting & domain (1 year)"
      ],
    },
    {
      name: "Scale",
      tag: "For established brands",
      price: 499,
      original: 5000,
      cta: "Book a Call →",
      highlight: false,
      features: [
        "Up to 10-page custom website",
        "Everything in Growth package",
        "Google Analytics",
        "Google Search Console",
        "Full Blog / CMS setup",
        "Custom illustrations & icons",
        "Advanced SEO & speed optimization",
        "Priority Australian-based support",
        "Unlimited revisions (14 days)",
        "Free hosting & domain (1 year)"
      ],
    },
  ];

  const selectedAddonItems = useMemo(
    () => addons.filter((addon) => selectedAddons.includes(addon.name)),
    [selectedAddons],
  );
  const oneTimeAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("once"))
    .reduce((sum, addon) => sum + addon.price, 0);
  const monthlyAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("/mo"))
    .reduce((sum, addon) => sum + addon.price, 0);

  const openCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setSelectedAddons([]);
    setShowCheckoutForm(false);
  };

  const toggleAddon = (name: string) => {
    setSelectedAddons((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Transparent pricing.
            <br />
            <span className="text-gradient">No&nbsp;</span>
            <motion.span
              initial={{ filter: "blur(8px)", opacity: 0.5 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 3.0, ease: "easeOut" }}
              className="inline-block text-gradient mx-1.5"
            >
              hidden
            </motion.span>
            <span className="text-gradient">&nbsp;fees, ever.</span>
          </>
        }
        subtitle="One-time payment. GST included. No subscriptions. No lock-in contracts."
      />

      {/* Explainer Panel */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-3xl mb-12 rounded-3xl bg-surface p-6 md:p-8 hairline border-brand/20 shadow-soft"
      >
        <div className="flex flex-col md:flex-row gap-5 items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <CheckCircle className="h-6 w-6 stroke-[2]" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-foreground">
              What does the A$99 Launch offer include?
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The A$99 Launch package is a fully built, 1-page conversion website. It is <strong>not a deposit</strong> it is the complete price. You get a custom-designed, hand-coded, mobile-responsive website delivered in 48 hours. If you're not happy, you get a full refund within 30 days. No catches.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className={`relative flex flex-col rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 ${t.highlight
                ? "bg-foreground text-background shadow-elevated"
                : "hairline bg-surface-elevated"
              }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground shadow-glow">
                Most popular
              </span>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
              <span
                className={`text-[10px] uppercase tracking-widest ${t.highlight ? "text-background/60" : "text-muted-foreground"
                  }`}
              >
                {t.tag}
              </span>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className={`text-sm line-through ${t.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                A${t.original}
              </span>
              <span className="font-display text-6xl font-semibold tracking-[-0.04em]">
                A${t.price}
              </span>
            </div>
            <button
              type="button"
              onClick={() => openCheckout(t)}
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] cursor-pointer ${t.highlight
                  ? "bg-background text-foreground animate-pulse"
                  : "bg-foreground text-background"
                }`}
            >
              {t.cta}
            </button>
            <ul className="mt-7 space-y-3 px-1 text-sm">
              {t.features.map((feat) => {
                const isHosting = feat === "Google Analytics" || feat === "Google Search Console";
                return (
                  <li
                    key={feat}
                    className={`flex items-center gap-2.5 ${
                      isHosting
                        ? t.highlight
                          ? "rounded-xl bg-gradient-to-r from-amber-400/15 to-amber-500/15 text-amber-200 border border-amber-400/30 px-3 py-1.5 -mx-1 shadow-soft"
                          : "rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-800 dark:text-amber-300 px-3 py-1.5 -mx-1 border border-amber-500/20 shadow-soft"
                        : t.highlight
                          ? "text-background/85"
                          : "text-foreground"
                    }`}
                  >
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                        isHosting
                          ? t.highlight
                            ? "bg-amber-400 text-foreground"
                            : "bg-amber-600 text-white"
                          : t.highlight
                            ? "bg-background text-foreground"
                            : "bg-foreground text-background"
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className={isHosting ? "font-semibold text-[13px] flex items-center justify-between w-full" : ""}>
                      {isHosting ? (
                        <>
                          <span className={t.highlight ? "text-amber-100 font-bold" : "text-amber-900 dark:text-amber-200 font-bold"}>
                            {feat}
                          </span>
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold ${
                            t.highlight ? "bg-amber-400 text-foreground" : "bg-amber-600 text-white"
                          }`}>
                            Bonus
                          </span>
                        </>
                      ) : (
                        feat
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5" /> 30-Day Money-Back Guarantee
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5" /> You own 100% of the code
        </span>
        <span className="inline-flex items-center gap-1.5">
          {/* <Globe className="h-3.5 w-3.5" /> Australian hosting from $19/mo (optional) */}
        </span>
      </div>

      <Dialog
        open={Boolean(selectedTier)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedTier(null);
            setShowCheckoutForm(false);
          }
        }}
      >
        <DialogContent ref={dialogContentRef} className="max-h-[90dvh] max-w-4xl overflow-y-auto rounded-3xl border-hairline p-0 shadow-elevated">
          {selectedTier && (
            <div className="grid bg-surface-elevated md:grid-cols-[1fr_0.78fr]">
              <div 
                className="p-6 md:p-8"
                style={showCheckoutForm ? { paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" } : undefined}
              >
                {showCheckoutForm ? (
                  <CheckoutForm
                    planName={selectedTier.name}
                    dueOnce={selectedTier.price + oneTimeAddonTotal}
                    monthlyTotal={monthlyAddonTotal}
                    selectedAddons={selectedAddonItems.map((addon) => addon.name)}
                    onBack={() => setShowCheckoutForm(false)}
                  />
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle className="font-display text-3xl tracking-[-0.02em]">
                        Checkout: {selectedTier.name}
                      </DialogTitle>
                      <DialogDescription>
                        Choose optional add-ons before we prepare your project invoice.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 grid gap-3">
                      {addons.map((addon) => {
                        const Icon = addon.icon;
                        const includedWithGrowth =
                          selectedTier.name === "Growth" && addon.name === "Hosting + maintenance";
                        const selected = selectedAddons.includes(addon.name) || includedWithGrowth;

                        return (
                          <button
                            key={addon.name}
                            type="button"
                            disabled={includedWithGrowth}
                            onClick={() => toggleAddon(addon.name)}
                            className={`flex items-start gap-4 rounded-3xl p-4 text-left transition-all cursor-pointer ${selected
                                ? "bg-background ring-1 ring-foreground/15 shadow-soft"
                                : "hairline bg-surface-elevated hover:bg-background"
                              } ${includedWithGrowth ? "cursor-default opacity-90" : ""}`}
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-start justify-between gap-3">
                                <span className="font-semibold">{addon.name}</span>
                                <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold">
                                  {includedWithGrowth ? (
                                    <>
                                      <span className="mr-1 line-through opacity-50">A$19/mo</span>
                                      Free
                                    </>
                                  ) : (
                                    <>
                                      A${addon.price}
                                      {addon.cadence}
                                    </>
                                  )}
                                </span>
                              </span>
                              <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                                {addon.d}
                              </span>
                            </span>
                            <span
                              className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${selected ? "border-foreground bg-foreground text-background" : "border-hairline"
                                }`}
                            >
                              {selected && <Check className="h-3 w-3" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <aside 
                className={`bg-foreground p-6 text-background md:p-8 ${showCheckoutForm ? "hidden md:block" : ""}`}
                style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
                  Order summary
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{selectedTier.name}</h3>
                <div className="mt-6 space-y-3 text-sm border-b border-background/10 pb-4">
                  <SummaryRow label={`${selectedTier.name} website package`} value={`A$${selectedTier.price}`} />
                  {selectedTier.features.slice(0, 4).map((feat) => (
                    <SummaryRow
                      key={feat}
                      label={feat}
                      value="Included"
                    />
                  ))}
                  {selectedAddonItems.map((addon) => (
                    <SummaryRow
                      key={addon.name}
                      label={addon.name}
                      value={`A$${addon.price}${addon.cadence}`}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-2">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-background/45">Due once</p>
                      <p className="mt-1 font-display text-5xl font-semibold tracking-[-0.04em]">
                        A${selectedTier.price + oneTimeAddonTotal}
                      </p>
                    </div>
                    {monthlyAddonTotal > 0 && (
                      <div className="text-right">
                        <p className="text-xs text-background/45">Monthly</p>
                        <p className="mt-1 text-2xl font-semibold">A${monthlyAddonTotal}/mo</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(true)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    {showCheckoutForm ? "Complete the form" : "Continue checkout"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-4 text-center text-xs leading-relaxed text-background/45">
                    No payment is taken here. We confirm details first, then send the invoice.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-background/10 pb-3">
      <span className="text-background/65 text-xs truncate max-w-[200px]">{label}</span>
      <span className="shrink-0 font-semibold text-xs">{value}</span>
    </div>
  );
}
