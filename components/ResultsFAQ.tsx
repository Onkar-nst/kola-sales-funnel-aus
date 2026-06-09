"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Quote,
  MessageCircle,
  HelpCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
  Lock,
  Menu,
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import { useIsMobile } from "@/hooks/use-mobile";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────── Simplified Review Data (8 items for 2 pages of 4) ─────────────────────── */

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
}

const reviews: ReviewItem[] = [
  // Page 1
  {
    quote: "Launched Tuesday, had 14 high-ticket quote requests by Friday.",
    name: "David Fletcher",
    role: "Flooring · MEL",
  },
  {
    quote: "Our conversion rate jumped 300% in the first month.",
    name: "Sofia Zevana",
    role: "Retail · SYD",
  },
  {
    quote: "Loads instantly on mobile. Delivered a masterpiece in 48h.",
    name: "Dr. Marcus Lim",
    role: "Dental · BNE",
  },
  {
    quote: "Clean, fast, and works perfectly. Best decision for our studio.",
    name: "Sarah Mitchell",
    role: "Yoga · PER",
  },
  // Page 2
  {
    quote: "Form enquiries started landing in our inbox within 24 hours.",
    name: "Liam O'Connor",
    role: "Landscaping · ADL",
  },
  {
    quote: "Our Google search ranking shot up to page 1 in under two weeks.",
    name: "Emma Watson",
    role: "Accounting · SYD",
  },
  {
    quote: "Simple, fast, and gorgeous design. The team was incredibly responsive.",
    name: "Ryan Reynolds",
    role: "Fitness · MEL",
  },
  {
    quote: "Amazing service! Our customers love the mobile booking interface.",
    name: "Chloe Tanaka",
    role: "Café · BNE",
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

/* ─────────────────────── FAQ Accordion Item ─────────────────────── */

function MinimalFAQItem({
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
    <div className="border-b border-hairline/60 py-4 transition-all duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-2 text-left cursor-pointer group"
      >
        <span
          className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
            isOpen ? "text-neutral-900" : "text-foreground/80 group-hover:text-foreground"
          }`}
        >
          {f.q}
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline/60 transition-all duration-300 ${
            isOpen ? "bg-black border-black text-white rotate-45" : "bg-transparent text-muted-foreground group-hover:border-neutral-900 group-hover:text-neutral-900"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
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
            <div className="pt-2 pb-3 pr-8">
              <p className="text-[13.5px] leading-[1.8] text-muted-foreground font-medium">{f.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export function ResultsFAQ() {
  const isMobile = useIsMobile();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [activePage, setActivePage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // On mobile, no FAQ is open by default — it only opens on click.
  useEffect(() => {
    if (isMobile) setOpenFAQ(null);
  }, [isMobile]);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  // Auto-slide effect for pages of 4 testimonials
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  const handlePrev = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  const pageStartIndex = activePage * cardsPerPage;
  const visibleReviews = reviews.slice(pageStartIndex, pageStartIndex + cardsPerPage);

  return (
    <section id="results-faq" className="relative px-6 py-24 bg-surface/30 overflow-hidden border-y border-hairline/60">
      {/* Subtle background glow bubbles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-neutral-900/[0.02] blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-neutral-900/[0.02] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-none w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* ═══════════════ LEFT COLUMN: Sleek Minimal FAQ ═══════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col items-start gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/60 px-3 py-1 text-[11px] font-semibold text-neutral-900 shadow-soft">
                  <HelpCircle className="h-3.5 w-3.5" /> FAQs
                </div>
                <AnimatedHeading 
                  lines={["Got questions?", "We got answers."]}
                  className="text-balance text-3xl font-bold leading-[1.05] tracking-[-0.03em] md:text-4xl font-display"
                />
                <p className="max-w-md text-muted-foreground text-[13px] font-medium leading-relaxed">
                  Everything you need to know about our $99 website launch package, process, hosting, and guarantees.
                </p>
              </div>

              <div className="flex flex-col mt-4">
                {faqs.map((f, i) => (
                  <MinimalFAQItem
                    key={f.q}
                    f={f}
                    i={i}
                    isOpen={openFAQ === i}
                    onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════ RIGHT COLUMN: Preview animation (Moved from Hero) ═══════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full hidden sm:flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[550px] mx-auto flex items-center justify-center sm:block">
                <div className="absolute inset-0 bg-black/5 blur-[50px] dark:bg-white/5" aria-hidden />

                {/* === DESKTOP WINDOW === */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="hidden sm:block relative z-10 w-full sm:w-[85%] overflow-hidden rounded-xl border border-border/80 bg-background shadow-2xl"
                >
                  {/* Top Browser Bar */}
                  <div className="flex items-center justify-between border-b border-border/60 bg-surface-elevated/50 px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                    </div>

                    <div className="flex h-6 w-full max-w-[200px] items-center justify-center gap-1.5 rounded-md border border-border/50 bg-background px-2 text-[10px] font-medium text-muted-foreground/80">
                      <Lock className="h-2.5 w-2.5" />
                      kolacommunications.com
                    </div>

                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-sm bg-border/50" />
                      <div className="h-3 w-3 rounded-sm bg-border/50" />
                    </div>
                  </div>

                  {/* Desktop Website Preview */}
                  <div className="relative bg-background p-5 sm:p-6 pb-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "circOut" }}
                      className="absolute top-0 left-0 h-[2px] w-full origin-left bg-brand"
                    />

                    {/* Kola Navbar */}
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <img
                          src="https://kolacommunications.com/KolaFavicon.jpg"
                          alt="Kola Favicon"
                          className="h-4.5 w-4.5 rounded object-cover"
                        />
                        <span className="text-[11px] font-bold tracking-tight text-foreground">Kola</span>
                      </div>
                      <div className="hidden items-center gap-4 sm:flex text-[9px] font-medium text-muted-foreground">
                        <span>Our Work</span>
                        <span>Pricing</span>
                        <span>FAQ</span>
                      </div>
                      <div className="hidden items-center gap-2 sm:flex">
                        <span className="text-[9px] font-medium text-foreground">Sydney</span>
                        <div className="rounded bg-brand px-2.5 py-1 text-[9px] font-semibold text-white">Start Project</div>
                      </div>
                      <Menu className="h-4 w-4 text-muted-foreground sm:hidden" />
                    </div>

                    {/* Kola Hero Content Area */}
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex items-center gap-1.5 rounded-full border border-border/85 bg-surface-elevated px-2.5 py-0.5 text-[8px] font-semibold text-muted-foreground">
                        🇦🇺 Sydney Crafted & Coded
                      </div>

                      <h2 className="mb-3 max-w-[90%] text-[20px] font-bold leading-tight tracking-tight text-foreground sm:text-[24px]">
                        We <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">code,</span> you <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">grow</span>
                      </h2>

                      <p className="mb-6 max-w-[80%] text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
                        Blazing fast Next.js sales funnels for local Aussie businesses. Hand-crafted in under 48 hours. Built for maximum conversions.
                      </p>

                      <div className="mb-8 flex w-full justify-center gap-3">
                        <div className="flex h-8 items-center justify-center rounded-md bg-brand px-4 text-[10px] font-semibold text-white">
                          Get My $99 Website
                        </div>
                        <div className="flex h-8 items-center justify-center gap-1.5 rounded-md border border-border px-4 text-[10px] font-semibold text-foreground">
                          Book a Call
                        </div>
                      </div>

                      {/* Desktop: Analytics & Performance Dashboard Mockup */}
                      <div className="relative mt-2 flex h-[190px] w-full max-w-[95%] overflow-hidden rounded-t-xl border-x border-t border-border/60 bg-surface-elevated/20 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                          alt="Kola Funnel Performance Metrics"
                          className="w-full h-full object-cover object-top opacity-85 transition-transform duration-700 hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay pointer-events-none" aria-hidden />
                        <div className="absolute inset-0 bg-brand/5 pointer-events-none" aria-hidden />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* === MOBILE PHONE MOCKUP (Overlapping Bottom Right) === */}
                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="relative mx-auto sm:absolute sm:-bottom-6 sm:-right-4 z-20 w-[180px] sm:w-[150px] overflow-hidden rounded-[24px] border-[6px] border-slate-900 bg-background shadow-2xl"
                >
                  <div className="absolute left-1/2 top-1.5 z-30 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-900" />

                  <div className="flex h-[280px] flex-col px-3 pt-7 select-none text-foreground">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <img
                          src="https://kolacommunications.com/KolaFavicon.jpg"
                          alt="Kola Favicon"
                          className="h-3.5 w-3.5 rounded object-cover"
                        />
                        <span className="text-[7px] font-bold tracking-tight text-foreground">Kola</span>
                      </div>
                      <Menu className="h-3 w-3 text-foreground" />
                    </div>

                    <div className="flex flex-col items-center text-center mt-1">
                      <div className="mb-2 flex items-center gap-1 rounded-full border border-border/80 bg-surface-elevated px-1.5 py-0.5 text-[5px] font-semibold text-muted-foreground">
                        ⚡ 100% Performance
                      </div>

                      <h3 className="mb-1.5 max-w-[95%] text-[10px] font-bold leading-tight tracking-tight text-foreground">
                        Websites that convert.
                      </h3>

                      <p className="mb-3 max-w-[90%] text-[5px] leading-relaxed text-muted-foreground">
                        Sydney-coded Next.js speed.
                      </p>

                      <div className="mb-4 flex w-full justify-center gap-1.5">
                        <div className="flex h-4 items-center justify-center rounded-[2px] bg-brand px-2 text-[5px] font-semibold text-white">
                          Start Project
                        </div>
                        <div className="flex h-4 items-center justify-center gap-1 rounded-[2px] border border-border px-2 text-[5px] font-semibold text-foreground">
                          Features
                        </div>
                      </div>

                      <div className="relative mt-auto flex h-[110px] w-full overflow-hidden rounded-t-lg border-x border-t border-border/60 bg-surface-elevated/20 shadow-inner">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                          alt="Kola Funnel Performance Metrics Mobile"
                          className="w-full h-full object-cover object-top opacity-85"
                        />
                        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay pointer-events-none" aria-hidden />
                        <div className="absolute inset-0 bg-brand/5 pointer-events-none" aria-hidden />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Minimal Sub-CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-hairline/60 bg-surface-elevated/70 px-6 py-5 backdrop-blur-md shadow-soft"
            >
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
                  <MessageCircle className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Still have questions?
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                    We're here to help you get started.
                  </p>
                </div>
              </div>
              <a
                href="https://calendly.com/kola-communications"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-black hover:bg-neutral-900 px-5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 whitespace-nowrap"
              >
                Book a 15 Min Call →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
