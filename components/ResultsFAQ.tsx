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
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [activePage, setActivePage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

          {/* ═══════════════ RIGHT COLUMN: Testimonials 4 Visible + Slide ═══════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/60 px-3 py-1 text-[11px] font-semibold text-neutral-900 shadow-soft">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Testimonials
                </div>
                <h3 className="text-2xl font-bold text-foreground font-display tracking-tight mt-1">Proven Results</h3>
                <p className="text-muted-foreground text-[13px] font-medium">
                  Hear what business owners say about the Kola speed & results.
                </p>
              </div>

              {/* Testimonials 2x2 Grid with Page Slide Transition */}
              <div 
                className="relative w-full overflow-hidden min-h-[360px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePage}
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                  >
                    {visibleReviews.map((r) => (
                      <div
                        key={r.name}
                        className="relative flex flex-col justify-between rounded-2xl border border-hairline/60 bg-surface-elevated p-5 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-neutral-300"
                      >
                        {/* Subtle top indicator bar */}
                        <div className="absolute inset-x-5 top-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                        
                        <div>
                          {/* Quote */}
                          <Quote className="h-4.5 w-4.5 text-neutral-300 mb-2.5 rotate-180 shrink-0" />
                          <blockquote className="text-[12.5px] leading-[1.65] text-foreground/90 font-semibold tracking-tight mb-4">
                            &ldquo;{r.quote}&rdquo;
                          </blockquote>
                        </div>

                        {/* Author Detail */}
                        <div className="flex flex-col border-t border-hairline/40 pt-3.5">
                          <div className="flex items-center gap-1 text-[12.5px] font-bold text-foreground">
                            {r.name}
                            <CheckCircle2 className="h-3 w-3 text-neutral-900 shrink-0" />
                          </div>
                          <div className="text-[10px] text-muted-foreground font-semibold mt-0.5">{r.role}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination controls for pages of 4 */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-2 px-1">
                  {/* Dots indicator */}
                  <div className="flex gap-1.5 items-center">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePage(i)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          activePage === i ? "w-6 bg-black" : "w-2 bg-neutral-200 hover:bg-neutral-300"
                        }`}
                        aria-label={`Go to page ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow navigation buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline/60 bg-surface-elevated text-muted-foreground hover:text-black hover:border-neutral-300 hover:bg-surface transition-all cursor-pointer shadow-soft"
                      aria-label="Previous testimonials page"
                    >
                      <ChevronLeft className="h-4.5 w-4.5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline/60 bg-surface-elevated text-muted-foreground hover:text-black hover:border-neutral-300 hover:bg-surface transition-all cursor-pointer shadow-soft"
                      aria-label="Next testimonials page"
                    >
                      <ChevronRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

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
