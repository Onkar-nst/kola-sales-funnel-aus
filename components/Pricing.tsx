"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Shield,
  Globe,
  Code2,
  Calendar,
  CreditCard,
  Mail,
  Search,
  Sparkles,
  Images,
  BarChart3,
  LineChart,
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
import { useIsMobile } from "@/hooks/use-mobile";

const ease = [0.22, 1, 0.36, 1] as const;

type TierName = "Starter" | "Professional" | "Growth";

// Per-tier add-on pricing. Either a price (with cadence) or free (optionally with a note).
type AddonPrice =
  | { amount: number; cadence: "/month" | " one time" }
  | { free: true; note?: string };

const addons: {
  icon: typeof Search;
  name: string;
  d: string;
  pricing: Record<TierName, AddonPrice>;
}[] = [
  {
    icon: Search,
    name: "Advanced SEO",
    d: "Technical + local SEO, Google Business Profile optimisation, monthly performance report.",
    pricing: {
      Starter: { amount: 12500, cadence: "/month" },
      Professional: { amount: 12500, cadence: "/month" },
      Growth: { free: true, note: "Free for 1 month" },
    },
  },
  {
    icon: Calendar,
    name: "Calendar Integration",
    d: "Calendly, Cal.com, or custom booking form setup.",
    pricing: {
      Starter: { amount: 3500, cadence: " one time" },
      Professional: { amount: 3500, cadence: " one time" },
      Growth: { free: true },
    },
  },
  {
    icon: Mail,
    name: "Professional email (1 GB) (1 Year)",
    d: "Professional business email on your own domain for a year.",
    pricing: {
      Starter: { free: true },
      Professional: { free: true },
      Growth: { free: true },
    },
  },
  {
    icon: Globe,
    name: "Free hosting & domain (1 year)",
    d: "Indian server hosting, SSL, and your domain for the first year.",
    pricing: {
      Starter: { free: true },
      Professional: { free: true },
      Growth: { free: true },
    },
  },
  {
    icon: Images,
    name: "Licensed Images",
    d: "Premium licensed stock imagery sourced for your website.",
    pricing: {
      Starter: { amount: 2000, cadence: " one time" },
      Professional: { amount: 2000, cadence: " one time" },
      Growth: { free: true },
    },
  },
  {
    icon: Sparkles,
    name: "Logo Design",
    d: "3 logo concepts, 2 revision rounds, all file formats.",
    pricing: {
      Starter: { amount: 5000, cadence: " one time" },
      Professional: { amount: 5000, cadence: " one time" },
      Growth: { amount: 5000, cadence: " one time" },
    },
  },
  {
    icon: BarChart3,
    name: "Google Analytics",
    d: "Full Google Analytics 4 setup and configuration.",
    pricing: {
      Starter: { amount: 1500, cadence: " one time" },
      Professional: { free: true },
      Growth: { free: true },
    },
  },
  {
    icon: LineChart,
    name: "Google Search Console",
    d: "Search Console setup, sitemap submission, and indexing.",
    pricing: {
      Starter: { amount: 1500, cadence: " one time" },
      Professional: { amount: 1500, cadence: " one time" },
      Growth: { free: true },
    },
  },
];

type StorePlatform = "wordpress" | "shopify" | "custom";

const STORE_PLATFORMS: { key: StorePlatform; label: string }[] = [
  { key: "wordpress", label: "WordPress (WooCommerce)" },
  { key: "shopify", label: "Shopify" },
  { key: "custom", label: "Custom website" },
];

// When no online store is needed, only website platforms apply (no Shopify, no WooCommerce).
const NO_STORE_PLATFORMS: { key: StorePlatform; label: string }[] = [
  { key: "wordpress", label: "WordPress" },
  { key: "custom", label: "Custom website" },
];

// E-commerce add-on is a one-time Rs. 7,500 only on Starter; free on Professional & Growth.
const STORE_PRICE_STARTER = 7500;

type Feature = {
  label: string;
  /** false = not included in this tier (shown crossed out in red) */
  included?: boolean;
  /** true = highlighted bonus (bold + "Bonus" badge) */
  bonus?: boolean;
};

type Tier = {
  name: string;
  tag: string;
  price: number;
  original: number;
  cta: string;
  highlight: boolean;
  features: Feature[];
};

export function Pricing() {
  const isMobile = useIsMobile();
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [needsStore, setNeedsStore] = useState<"yes" | "no" | null>(null);
  const [storePlatform, setStorePlatform] = useState<StorePlatform | null>(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft } = scrollContainerRef.current;
    const cardElement = scrollContainerRef.current.firstElementChild;
    if (cardElement) {
      const cardWidth = cardElement.getBoundingClientRect().width + 16; // 16px is gap-4
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, tiers.length - 1)));
    }
  };

  const dialogContentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showCheckoutForm) {
      if (dialogContentRef.current) dialogContentRef.current.scrollTop = 0;
      if (leftColRef.current) leftColRef.current.scrollTop = 0;
    }
  }, [showCheckoutForm]);

  const tiers: Tier[] = [
    {
      name: "Starter",
      tag: "Best for small businesses",
      price: 7999,
      original: 14999,
      cta: "Get My Website →",
      highlight: false,
      features: [
        { label: "Upto 2 pages" },
        { label: "Mobile & tablet responsive" },
        { label: "Contact form" },
        { label: "72 hour delivery" },
        { label: "1 revision round" },
        { label: "Professional email (1 GB)" },
        { label: "Free hosting & domain (1 year)" },
        { label: "Website Maintenance", included: false },
        { label: "SEO setup", included: false },
        { label: "Email Integration", included: false },
        { label: "E-commerce Functionality", included: false },
        { label: "Google Analytics", included: false },
        { label: "Google Search Console", included: false },
        { label: "WhatsApp chat button", included: false },
        { label: "Google Maps & social embeds", included: false },
        { label: "Dedicated project manager", included: false },
        { label: "Licensed images", included: false },
      ],
    },
    {
      name: "Professional",
      tag: "Most popular",
      price: 24999,
      original: 39999,
      cta: "Get My Website →",
      highlight: true,
      features: [
        { label: "Up to 5 pages" },
        { label: "Mobile & tablet responsive" },
        { label: "Contact Form with Email Integration" },
        { label: "E-commerce Functionality", bonus: true },
        { label: "Website Maintenance 1 Month free", bonus: true },
        { label: "5 to 7 working days delivery" },
        { label: "3 revision rounds" },
        { label: "Professional email (1 GB)" },
        { label: "Free hosting & domain (1 year)" },
        { label: "On Page SEO" },
        { label: "WhatsApp chat button" },
        { label: "Google Maps & social embeds" },
        { label: "Google Analytics" },
        { label: "Dedicated project manager", included: false },
        { label: "Google Search Console", included: false },
        { label: "Advanced On-Page SEO", included: false },
        { label: "Licensed images", included: false },
      ],
    },
    {
      name: "Growth",
      tag: "For established brands",
      price: 59999,
      original: 89999,
      cta: "Book a Call →",
      highlight: false,
      features: [
        { label: "Up to 10 pages" },
        { label: "Mobile & tablet responsive" },
        { label: "Contact Form with Email Integration" },
        { label: "Advanced On-Page SEO", bonus: true },
        { label: "Licensed images" , bonus: true},
        { label: "Dedicated project manager" , bonus: true},
        { label: "Google Search Console" , bonus: true},
        { label: "WhatsApp chat button" },
        { label: "10 to 14 working days delivery" },
        { label: "5 revision rounds" },
        { label: "Professional email (1 GB)" },
        { label: "Free hosting & domain (1 year)" },
        { label: "Website Maintenance 3 Month free" },
        { label: "E-commerce Functionality" },
        { label: "Google Maps & social embeds" },
        { label: "Google Analytics" },
      ],
    },
  ];

  // Resolve every add-on to the price for the currently selected tier (defaults to Starter).
  const tierName = (selectedTier?.name ?? "Starter") as TierName;
  const resolvedAddons = useMemo(
    () =>
      addons.map((addon) => {
        const p = addon.pricing[tierName];
        return "free" in p
          ? { name: addon.name, icon: addon.icon, d: addon.d, free: true, amount: 0, cadence: "", note: p.note }
          : { name: addon.name, icon: addon.icon, d: addon.d, free: false, amount: p.amount, cadence: p.cadence, note: undefined };
      }),
    [tierName],
  );

  // Render order: unselected add-ons stay on top, selected ones (incl. free/included) sink to the bottom.
  const displayAddons = useMemo(() => {
    const isSelected = (addon: (typeof resolvedAddons)[number]) =>
      addon.free || selectedAddons.includes(addon.name);
    return resolvedAddons
      .map((addon, index) => ({ addon, index }))
      .sort((a, b) => {
        const diff = Number(isSelected(a.addon)) - Number(isSelected(b.addon));
        return diff !== 0 ? diff : a.index - b.index;
      })
      .map((entry) => entry.addon);
  }, [resolvedAddons, selectedAddons]);

  const selectedAddonItems = useMemo(
    () => resolvedAddons.filter((addon) => !addon.free && selectedAddons.includes(addon.name)),
    [resolvedAddons, selectedAddons],
  );
  // Add-ons that are free on the selected plan — always shown as included in the order summary.
  const freeAddonItems = useMemo(
    () => resolvedAddons.filter((addon) => addon.free),
    [resolvedAddons],
  );
  const oneTimeAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("one time"))
    .reduce((sum, addon) => sum + addon.amount, 0);
  const monthlyAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("/mo"))
    .reduce((sum, addon) => sum + addon.amount, 0);

  // E-commerce store: charged only on Starter, free on Professional & Growth.
  const storeIsPaid = selectedTier?.name === "Starter" && needsStore === "yes";
  const storePrice = storeIsPaid ? STORE_PRICE_STARTER : 0;
  const storeSummaryLabel =
    needsStore === "yes"
      ? `Online store${storePlatform ? ` · ${STORE_PLATFORMS.find((p) => p.key === storePlatform)?.label}` : ""}`
      : needsStore === "no" && storePlatform
        ? `Website platform · ${NO_STORE_PLATFORMS.find((p) => p.key === storePlatform)?.label}`
        : null;

  const dueOnceTotal = (selectedTier?.price ?? 0) + oneTimeAddonTotal + storePrice;

  const openCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setSelectedAddons([]);
    setNeedsStore(null);
    setStorePlatform(null);
    setShowCheckoutForm(false);
  };

  // Open the checkout dialog from elsewhere (e.g. the nav "Start Project" button).
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ tier?: string }>).detail;
      const tier = tiers.find((t) => t.name === detail?.tier) ?? tiers[1];
      openCheckout(tier);
    };
    window.addEventListener("kola:open-checkout", handler);
    return () => window.removeEventListener("kola:open-checkout", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <span className="text-[oklch(0.704_0.04_256.788)]">Transparent pricing.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.25 0.08 260), oklch(0.20 0.06 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              No&nbsp;
            </span>
            <motion.span
              initial={{ filter: "blur(8px)", opacity: 0.5 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 3.0, ease: "easeOut" }}
              className="inline-block bg-clip-text text-transparent mx-1.5"
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.25 0.08 260), oklch(0.20 0.06 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              hidden
            </motion.span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.25 0.08 260), oklch(0.20 0.06 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              &nbsp;charges, ever.
            </span>
          </>
        }
        subtitle="Every package is fixed price. What you see is what you pay, in full, upfront, in INR. No dollar conversions. No hidden extras. Just a website that works."
      />

      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pt-5 pb-6 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pt-0 md:pb-0 scrollbar-none -mx-8 px-[4vw] md:px-8 scroll-px-[4vw] md:scroll-px-0"
      >
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={isMobile ? { duration: 0 } : { delay: i * 0.08, duration: 0.6, ease }}
            className={`relative flex flex-col rounded-3xl p-5 sm:p-7 shadow-soft transition-all hover:-translate-y-1 snap-start shrink-0 w-[80vw] sm:w-[62vw] md:w-auto ${t.highlight
              ? "bg-foreground text-background shadow-elevated"
              : "hairline bg-surface-elevated"
              }`}
          >
            {t.highlight && (
              <span className="absolute z-10 -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[oklch(0.62_0.19_280)] to-[oklch(0.55_0.21_310)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-glow">
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
            <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
              <span className={`text-sm line-through ${t.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                Rs. {t.original.toLocaleString("en-IN")}
              </span>
              <span className="font-display text-[2.5rem] sm:text-5xl font-semibold tracking-[-0.04em] whitespace-nowrap leading-none">
                Rs. {t.price.toLocaleString("en-IN")}
              </span>
            </div>
            <p className={`mt-1.5 text-xs font-medium ${t.highlight ? "text-background/60" : "text-muted-foreground"}`}>
              One time payment
            </p>
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
                const missing = feat.included === false;
                const bonus = feat.bonus === true;
                return (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2.5 ${bonus
                        ? t.highlight
                          ? "rounded-xl bg-gradient-to-r from-amber-400/15 to-amber-500/15 border border-amber-400/30 px-3 py-1.5 -mx-1 shadow-soft"
                          : "rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-3 py-1.5 -mx-1 border border-amber-500/20 shadow-soft"
                        : missing
                          ? t.highlight
                            ? "text-background/40"
                            : "text-muted-foreground"
                          : t.highlight
                            ? "text-background/85"
                            : "text-foreground"
                      }`}
                  >
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full ${bonus
                          ? t.highlight
                            ? "bg-amber-400 text-foreground"
                            : "bg-amber-600 text-white"
                          : missing
                            ? "bg-red-500/15 text-red-500"
                            : "bg-emerald-500 text-white"
                        }`}
                    >
                      {missing ? <X className="h-2.5 w-2.5" strokeWidth={3} /> : <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                    </span>
                    {bonus ? (
                      <span className={`font-bold ${t.highlight ? "text-amber-100" : "text-amber-900 dark:text-amber-200"}`}>
                        {feat.label}
                      </span>
                    ) : (
                      <span className={missing ? "line-through" : ""}>{feat.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scroll Indicator Dots */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-1 mb-4">
        {tiers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (scrollContainerRef.current) {
                const cardElement = scrollContainerRef.current.firstElementChild;
                if (cardElement) {
                  const cardWidth = cardElement.getBoundingClientRect().width + 16; // 16px is gap-4
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
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="mt-8 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5" /> 30 Day Money Back Guarantee
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5" /> You own 100% of the website
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CreditCard className="h-3.5 w-3.5" /> UPI, Razorpay & bank transfer
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
        <DialogContent ref={dialogContentRef} className="max-h-[90dvh] max-w-4xl overflow-y-auto md:overflow-hidden rounded-3xl border-transparent p-0 shadow-elevated">
          {selectedTier && (
            <div className="grid bg-surface-elevated md:grid-cols-[1fr_0.78fr] md:max-h-[90dvh]">
              <div
                ref={leftColRef}
                className="p-6 md:p-8 md:max-h-[90dvh] md:overflow-y-auto scrollbar-none"
                style={showCheckoutForm ? { paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" } : undefined}
              >
                {showCheckoutForm ? (
                  <CheckoutForm
                    planName={selectedTier.name}
                    dueOnce={dueOnceTotal}
                    monthlyTotal={monthlyAddonTotal}
                    selectedAddons={[
                      ...(storeSummaryLabel ? [storeSummaryLabel] : []),
                      ...selectedAddonItems.map((addon) => addon.name),
                    ]}
                    onBack={() => setShowCheckoutForm(false)}
                  />
                ) : (
                  <>
                    <DialogHeader>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Step 1 of 2 · Add-ons
                      </p>
                      <DialogTitle className="mt-2 font-display text-3xl tracking-[-0.02em]">
                        Almost there, customise your package
                      </DialogTitle>
                      <DialogDescription className="text-[15px] leading-relaxed">
                        Add anything extra you need below, or skip straight to checkout. No payment is taken here.
                      </DialogDescription>
                    </DialogHeader>

                    {/* Part 1 — Online store (E-commerce) */}
                    <div className="mt-8 rounded-3xl hairline bg-surface-elevated p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold">Do you need an online store?</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            E-commerce functionality to sell products and take payments online.
                          </p>
                        </div>
                        {needsStore && (
                          <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold">
                            {needsStore === "no" || storePrice === 0
                              ? "Free"
                              : `Rs. ${storePrice.toLocaleString("en-IN")}`}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {(["yes", "no"] as const).map((opt) => {
                          const active = needsStore === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setNeedsStore(opt);
                                // Shopify only applies to online stores — clear it when switching to "no".
                                if (opt === "no" && storePlatform === "shopify") setStorePlatform(null);
                              }}
                              className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold capitalize transition-all cursor-pointer ${active
                                ? "bg-foreground text-background"
                                : "hairline bg-surface-elevated hover:bg-background"
                                }`}
                            >
                              <span
                                className={`grid h-4 w-4 place-items-center rounded-full border ${active ? "border-background" : "border-hairline"
                                  }`}
                              >
                                {active && <span className="h-1.5 w-1.5 rounded-full bg-background" />}
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {needsStore && (
                        <div className="mt-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            Choose your platform
                          </p>
                          <div className="mt-3 grid gap-2.5">
                            {(needsStore === "yes" ? STORE_PLATFORMS : NO_STORE_PLATFORMS).map((p) => {
                              const active = storePlatform === p.key;
                              return (
                                <button
                                  key={p.key}
                                  type="button"
                                  onClick={() => setStorePlatform(p.key)}
                                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition-all cursor-pointer ${active
                                    ? "bg-background ring-1 ring-foreground/15 shadow-soft"
                                    : "hairline bg-surface-elevated hover:bg-background"
                                    }`}
                                >
                                  <span
                                    className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${active ? "border-foreground bg-foreground text-background" : "border-hairline"
                                      }`}
                                  >
                                    {active && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                                  </span>
                                  <span className="font-medium">{p.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 grid gap-3.5">
                      {displayAddons.map((addon) => {
                        const Icon = addon.icon;
                        // Items that are free on the selected plan are shown as included and not toggleable.
                        const free = addon.free;
                        const selected = free || selectedAddons.includes(addon.name);

                        return (
                          <button
                            key={addon.name}
                            type="button"
                            disabled={free}
                            onClick={() => toggleAddon(addon.name)}
                            className={`flex items-start gap-4 rounded-3xl p-5 text-left transition-all cursor-pointer ${selected
                              ? "bg-background ring-1 ring-foreground/15 shadow-soft"
                              : "hairline bg-surface-elevated hover:bg-background"
                              } ${free ? "cursor-default opacity-90" : ""}`}
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-start justify-between gap-3">
                                <span className="font-semibold">{addon.name}</span>
                                <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold">
                                  {free ? (
                                    addon.note ?? "Free"
                                  ) : (
                                    <>
                                      Rs. {addon.amount.toLocaleString("en-IN")}
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
                className={`bg-foreground p-6 text-background md:p-8 md:max-h-[90dvh] md:overflow-y-auto overscroll-contain scrollbar-none ${showCheckoutForm ? "hidden md:block" : ""}`}
                style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
                  Order summary
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{selectedTier.name}</h3>
                <div className="mt-6 space-y-3 text-sm border-b border-background/10 pb-4">
                  <SummaryRow label={`${selectedTier.name} website package`} value={`Rs. ${selectedTier.price.toLocaleString("en-IN")}`} />
                  {selectedTier.features
                    .filter((feat) => feat.included !== false)
                    .slice(0, 4)
                    .map((feat) => (
                      <SummaryRow
                        key={feat.label}
                        label={feat.label}
                        value="Included"
                      />
                    ))}
                  {storeSummaryLabel && (
                    <SummaryRow
                      label={storeSummaryLabel}
                      value={
                        needsStore === "no"
                          ? "Included"
                          : storePrice > 0
                            ? `Rs. ${storePrice.toLocaleString("en-IN")}`
                            : <FreeTag />
                      }
                    />
                  )}
                  {freeAddonItems.map((addon) => (
                    <SummaryRow
                      key={addon.name}
                      label={addon.name}
                      value={addon.note ? <span className="text-amber-400 font-bold">{addon.note}</span> : <FreeTag />}
                    />
                  ))}
                  {selectedAddonItems.map((addon) => (
                    <SummaryRow
                      key={addon.name}
                      label={addon.name}
                      value={`Rs. ${addon.amount.toLocaleString("en-IN")}${addon.cadence}`}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-2">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-background/45">Your package total</p>
                      <p className="mt-1 font-display text-4xl font-semibold tracking-[-0.04em]">
                        Rs. {dueOnceTotal.toLocaleString("en-IN")}
                      </p>
                    </div>
                    {monthlyAddonTotal > 0 && (
                      <div className="text-right">
                        <p className="text-xs text-background/45">Monthly</p>
                        <p className="mt-1 text-2xl font-semibold">Rs. {monthlyAddonTotal.toLocaleString("en-IN")}/mo</p>
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

function FreeTag() {
  return <span className="text-amber-400 font-bold">Free</span>;
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