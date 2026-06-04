"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Zap, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  const cards = useMemo(() => [
    {
      tag: "Industrial Manufacturing",
      name: "Laser Technologies",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.78 0.08 220), oklch(0.48 0.12 250))",
      url: "https://www.lasertechnologies.co.in/",
      img: "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Laser-Technologies-Pvt.-Ltd.jpg",
      description:
        "A leading industrial laser machinery manufacturer and supplier serving automotive, aerospace, fabrication, and engineering industries across India. We designed and developed a high-performance website showcasing their fiber laser cutting, welding, marking, engraving, CO2, and UV laser solutions while generating qualified industrial enquiries.",
      features: [
        "Machine Specification Catalog",
        "Industrial Product Showcases",
        "Multi-Location Business Presence",
        "SEO-Optimized Lead Generation",
      ],
      performance: "98 / 100",
      delivery: "72 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "Hospitality",
      name: "Clayton Holidays",
      city: "Lonavala",
      grad: "linear-gradient(135deg, oklch(0.82 0.08 95), oklch(0.58 0.12 45))",
      url: "https://claytonholidays.com/",
      img: "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Clayton-Holidays.jpg",
      description:
        "A luxury private pool villa nestled in the Western Ghats of Lonavala. We designed an immersive, visual-first website that showcases the property's premium amenities, scenic surroundings, and exclusive stay experience while driving direct booking enquiries.",
      features: [
        "Luxury Villa Showcase",
        "WhatsApp Booking Integration",
        "Immersive Visual Experience",
        "Direct Enquiry Conversion",
      ],
      performance: "97 / 100",
      delivery: "48 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "E-Commerce",
      name: "Livyor",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.78 0.12 145), oklch(0.55 0.15 110))",
      url: "https://livyor.com/",
      img: "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Livyor.jpg",
      description:
        "A premium healthy snacks and dry fruits brand offering nuts, seeds, and wellness products across India. We developed a scalable Shopify store focused on smooth navigation, fast checkout experiences, and high-converting product discovery.",
      features: [
        "Shopify Store Development",
        "Advanced Product Filtering",
        "Optimized Checkout Flow",
        "Mobile Commerce Experience",
      ],
      performance: "99 / 100",
      delivery: "72 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "Real Estate",
      name: "Veena Developers",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.76 0.08 35), oklch(0.50 0.10 20))",
      url: "https://veenadevelopers.com/",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      description:
        "One of Mumbai's established real estate developers known for premium residential and redevelopment projects. We built a custom-coded website featuring immersive property showcases, global performance optimization, and a premium browsing experience for homebuyers.",
      features: [
        "Property Project Showcase",
        "Global CDN Optimization",
        "Premium Visual Experience",
        "High-Speed Page Delivery",
      ],
      performance: "99 / 100",
      delivery: "72 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "Creative Agency",
      name: "Purva Desai & Co",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.78 0.18 330), oklch(0.50 0.22 290))",
      url: "https://purvadesai.com",
      img: "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Purva-Desai-Co.jpg",
      description:
        "A creative social media and branding agency helping businesses grow through impactful digital campaigns. We crafted a portfolio first WordPress website with immersive animations, video storytelling, and premium project showcases to elevate brand perception.",
      features: [
        "Video Showreel Homepage",
        "Interactive Animations",
        "Project Portfolio System",
        "Creative Case Study Pages",
      ],
      performance: "96 / 100",
      delivery: "48 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "Fashion E-Commerce",
      name: "Tazaari",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.82 0.12 30), oklch(0.55 0.18 10))",
      url: "https://tazaari.com/",
      img: "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Tazaari.jpg",
      description:
        "An online fashion brand offering stylish clothing for men and women. We developed a modern WooCommerce-powered shopping platform focused on seamless product discovery, secure transactions, and conversion-driven user journeys.",
      features: [
        "WooCommerce Store",
        "Advanced Product Filters",
        "Secure Payment Gateway",
        "Conversion-Optimized Checkout",
      ],
      performance: "98 / 100",
      delivery: "72 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    },
    {
      tag: "Energy Infrastructure",
      name: "Sterlite Grid",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.72 0.10 220), oklch(0.48 0.14 250))",
      url: "https://www.sterlitegrid.com/",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
      description:
        "A leading power transmission infrastructure company connecting critical energy networks across India. We developed a modern enterprise website that highlights infrastructure projects, sustainability initiatives, and stakeholder communication through a scalable digital experience.",
      features: [
        "Infrastructure Project Portfolio",
        "Investor Information Hub",
        "Sustainability Reporting",
        "Enterprise Content Management",
      ],
      performance: "99 / 100",
      delivery: "72 hours",
      techStack: [
        "Website Development",
        "Custom-Coded Website",
        "React JS",
        "Tailwind CSS",
        "Web Design",
      ],
    }
    // {
    //   tag: "Retail",
    //   name: "Bloom Florists",
    //   city: "Brisbane",
    //   grad: "linear-gradient(135deg, oklch(0.82 0.14 340), oklch(0.6 0.18 320))",
    //   url: "https://example.com/bloom",
    //   img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop",
    //   description: "A boutique florist studio creating unique botanical arrangements. We delivered a visual portfolio catalog integrated with a custom ordering helper to streamline wedding and event inquiries.",
    //   features: [
    //     "Artistic Portfolio Grids",
    //     "Visual Consultation Flow",
    //     "Optimized Media Loader",
    //     "Social Feed Integration",
    //   ],
    //   performance: "98 / 100",
    //   delivery: "48 hours",
    // },
    // {
    //   tag: "Wellness",
    //   name: "North Yoga",
    //   city: "Perth",
    //   grad: "linear-gradient(135deg, oklch(0.78 0.11 160), oklch(0.5 0.14 180))",
    //   url: "https://example.com/northyoga",
    //   img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop",
    //   description: "A modern, minimalist yoga studio. We designed an inviting digital workspace incorporating interactive timetable scheduling and simple membership sign-up options.",
    //   features: [
    //     "Live Calendar timetable",
    //     "Calming Visual Layout",
    //     "Membership Signup Forms",
    //     "One-click Google Maps",
    //   ],
    //   performance: "99 / 100",
    //   delivery: "48 hours",
    // },
  ], []);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  // Duplicate cards for seamless looping in horizontal marquee
  const marqueeCards = useMemo(() => [...cards, ...cards], [cards]);

  return (
    <Section id="showcase" className="!pb-0 overflow-hidden">
      <SectionHeader
        eyebrow="Our Work"
        title={
          <>
            Real websites.
            <br />
            <span className="text-gradient">Real Aussie businesses.</span>
          </>
        }
        subtitle="Every single one of these custom websites was designed, hand coded, and launched in under 48 hours."
      />

      <div className="relative w-full py-4 mt-8">
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" /> */}

        <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused] cursor-pointer">
          {marqueeCards.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              onClick={() => setSelectedCard(c)}
              className="w-[280px] sm:w-[350px] shrink-0 group relative block overflow-hidden rounded-3xl hairline bg-surface-elevated p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white border border-hairline/10">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground backdrop-blur-xs border border-hairline/25">
                  {c.tag}
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <div className="text-base font-semibold text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.city}</div>
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full hairline bg-surface-elevated transition-all group-hover:bg-foreground group-hover:text-background">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[90dvh] overflow-y-auto rounded-3xl sm:rounded-[2rem] border border-hairline bg-surface-elevated shadow-elevated"
            >
              {/* Header Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-white border-b border-hairline flex items-center justify-center">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-4 top-4 rounded-full bg-foreground/10 p-2 text-foreground hover:bg-foreground/20 transition-colors backdrop-blur-xs border border-hairline/20 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body Details */}
              <div 
                className="p-6 sm:p-8 flex flex-col gap-6"
                style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block rounded-full bg-foreground/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-foreground border border-hairline/25">
                      {selectedCard.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{selectedCard.city}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-foreground">
                    {selectedCard.name}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Project Overview</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedCard.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-surface p-4 border border-hairline/40">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Performance</h4>
                    <div className="flex items-center gap-1.5 text-[oklch(0.65_0.19_150)] font-bold text-base">
                      <Zap className="h-4 w-4 fill-[oklch(0.65_0.19_150)]" /> PageSpeed {selectedCard.performance}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-surface p-4 border border-hairline/40">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Delivery Time</h4>
                    <div className="text-base font-semibold text-foreground">
                      Delivered in {selectedCard.delivery}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCard.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-foreground/80 bg-surface/50 px-3.5 py-2 rounded-xl border border-hairline/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCard.techStack?.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-surface-elevated px-2.5 py-1.5 text-[11px] font-medium text-foreground/90 border border-hairline/30 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-medium text-background hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer"
                  >
                    Visit live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-full hairline bg-surface px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {/* Scroll spacer to prevent WebKit scroll clipping */}
                <div className="h-2 sm:h-4 shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
