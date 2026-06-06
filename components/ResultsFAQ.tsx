"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Quote,
  TrendingUp,
  ChevronDown,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────── Review Data ─────────────────────── */

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  avatarGrad: string;
  metricValue: string;
}

const reviews: ReviewItem[] = [
  {
    quote:
      "Launched on Tuesday, and had 14 high ticket quote requests by Friday. It completely changed our business.",
    name: "David Fletcher",
    role: "Flooring · Melbourne",
    avatarGrad: "from-blue-500 to-indigo-600",
    metricValue: "14 Leads / 3 Days",
  },
  {
    quote:
      "Our conversion rate from paid traffic jumped 300% in the first month. The direct form integration is incredibly smooth.",
    name: "Sofia Zevana",
    role: "Boutique Retail · Sydney",
    avatarGrad: "from-purple-500 to-pink-600",
    metricValue: "+300% CVR",
  },
  {
    quote:
      "We needed a website that loads instantly on mobile and lets patients book with 2 taps. Kola delivered a masterpiece in 48 hours.",
    name: "Dr. Marcus Lim",
    role: "Dental Clinic · Brisbane",
    avatarGrad: "from-emerald-500 to-teal-600",
    metricValue: "45 Patients/mo",
  },
  {
    quote: "Clean, fast, and works perfectly on mobile. Best decision for our yoga studio.",
    name: "Sarah Mitchell",
    role: "North Yoga · Perth",
    avatarGrad: "from-orange-400 to-red-500",
    metricValue: "Top Tier",
  }
];

/* ─────────────────────── FAQ Data ─────────────────────── */

const faqs = [
  {
    q: "What exactly do I get for A$99?",
    a: "The Launch package includes a fully designed and hand coded 1 page custom website, custom contact forms with instant email notifications, Google Maps integration, basic on page SEO, social media links, and 48 hour delivery. There are absolutely no hidden setup fees or surprise costs.",
  },
  {
    q: "Is the A$99 a deposit or the full price?",
    a: "It is the full price. This is not a deposit or a subscription hook. You pay A$99 once, and we deliver your custom hand coded website live in 48 hours. If you choose to host it with us, Australian hosting starts at A$19/month, or we can export the raw code for you to host anywhere.",
  },
  {
    q: "What happens after I pay?",
    a: "You'll be directed to a short 5 minute online questionnaire where you can share details about your business, logo, preferred colors, and contact info. Our Sydney team reviews it instantly, starts coding, and sends you a live preview link to request revisions within 24 hours.",
  },
  {
    q: "Can I upgrade my site later?",
    a: "Yes, completely! Our websites are modular and hand coded. You can start with the A$99 Launch package and add extra pages, blog setups, Stripe payment checkouts, or advanced booking systems as your business grows. We never lock you into rigid, slow page builder templates.",
  },
  {
    q: "Do I own 100% of the website and code?",
    a: "Yes, 105%. Unlike clunky proprietary platforms (like Squarespace, Wix, or Shopify) that own the framework your site runs on, you own all of the raw hand coded HTML/React files. You can export the code and host it anywhere you want, forever.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "We offer a 100% risk free 30 Day Money Back Guarantee. If we deliver your preview link and you don't like the design or feel it's not a fit, just let us know. We will refund your payment in full, immediately. No questions asked.",
  },
];

/* ─────────────────────── Components ─────────────────────── */

function ReviewCard({ r, i }: { r: ReviewItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.05, duration: 0.5, ease }}
      className="group relative flex flex-col justify-between rounded-[22px] border border-hairline/50 bg-surface-elevated/70 p-6 backdrop-blur-sm transition-all duration-400 hover:shadow-elevated hover:border-[#101729]/20"
    >
      {/* Top glow bar on hover */}
      <div className="absolute inset-x-4 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Metric + Stars row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-xl bg-[oklch(0.55_0.16_150)/0.08] px-3 py-1.5 border border-[oklch(0.55_0.16_150)/0.10]">
            <TrendingUp className="h-3.5 w-3.5 text-[oklch(0.55_0.16_150)]" />
            <span className="text-[12px] font-bold text-[oklch(0.55_0.16_150)]">
              {r.metricValue}
            </span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="h-3 w-3 fill-current text-accent-coral" />
            ))}
          </div>
        </div>

        {/* Quote */}
        <Quote className="h-5 w-5 text-[#101729]/15 mb-2 rotate-180" />
        <blockquote className="text-[14px] leading-[1.75] text-foreground/90 font-semibold">
          &ldquo;{r.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-hairline/40 pt-4">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.avatarGrad} font-bold text-white text-xs shadow-soft`}
        >
          {r.name[0]}
        </span>
        <div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            {r.name}
            <CheckCircle2 className="h-3.5 w-3.5 text-[oklch(0.55_0.16_150)]" />
          </div>
          <div className="text-[11px] text-muted-foreground font-medium">{r.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({
  f,
  i,
  isOpen,
  onToggle,
}: {
  f: { q: string; a: string };
  i: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.05, duration: 0.45, ease }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-surface-elevated shadow-soft border border-[#101729]/15"
          : "bg-surface-elevated/40 border border-hairline/40 hover:border-hairline hover:bg-surface-elevated/70"
      }`}
    >
      {/* Active indicator */}
      {isOpen && (
        <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#101729]" />
      )}

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold font-display transition-all duration-300 ${
              isOpen
                ? "bg-[#101729] text-white shadow-soft"
                : "bg-surface-elevated text-muted-foreground border border-hairline/60 group-hover:text-[#101729] group-hover:border-[#101729]/20"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-[14px] font-semibold leading-snug transition-colors duration-300 ${
              isOpen ? "text-foreground" : "text-foreground/75 group-hover:text-foreground"
            }`}
          >
            {f.q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
            isOpen
              ? "bg-[#101729]/10 text-[#101729]"
              : "bg-surface text-muted-foreground border border-hairline/40 group-hover:border-[#101729]/15"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[4.5rem]">
              <p className="text-[13px] leading-[1.85] text-muted-foreground">{f.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export function ResultsFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const leftReviews = [reviews[0], reviews[1]];
  const rightReviews = [reviews[2], reviews[3]];

  return (
    <section id="results-faq" className="relative px-6 py-20 bg-surface/20 overflow-hidden border-y border-hairline/60">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#101729]/5 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-accent-coral/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-none w-full px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ═══════════════ LEFT COLUMN: 2 Testimonials ═══════════════ */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 shadow-soft">
              <Star className="h-3.5 w-3.5" /> Testimonials
            </div>
            <h3 className="text-lg font-bold text-foreground mt-2 font-display">What Clients Say</h3>
          </div>
          {leftReviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>

        {/* ═══════════════ MIDDLE COLUMN: FAQ ═══════════════ */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#101729]/10 bg-[#101729]/5 px-3 py-1 text-[11px] font-semibold text-[#101729] shadow-soft">
              <HelpCircle className="h-3.5 w-3.5" /> FAQs
            </div>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-4xl">
              Got questions? <span className="text-[#101729] text-gradient">We got answers.</span>
            </h2>
            <p className="max-w-md text-balance text-muted-foreground font-medium text-xs">
              Everything you need to know about our $99 website, process, hosting, and guarantees.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 mt-2">
            {faqs.map((f, i) => (
              <FAQItem
                key={f.q}
                f={f}
                i={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[20px] border border-hairline/50 bg-surface-elevated/80 px-6 py-5 backdrop-blur-md shadow-soft"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#101729]/10 text-[#101729]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Still have questions?
                </p>
                <p className="text-[13px] text-muted-foreground mt-0.5 font-medium">
                  We are here to help.
                </p>
              </div>
            </div>
            <a
              href="https://calendly.com/kola-communications"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0f172a] px-5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20 whitespace-nowrap"
            >
              Book a 15 Minute Call →
            </a>
          </motion.div>
        </div>

        {/* ═══════════════ RIGHT COLUMN: 2 Testimonials ═══════════════ */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 shadow-soft">
              <Star className="h-3.5 w-3.5" /> Testimonials
            </div>
            <h3 className="text-lg font-bold text-foreground mt-2 font-display">Proven Results</h3>
          </div>
          {rightReviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i + 2} />
          ))}
        </div>

      </div>
    </section>
  );
}
