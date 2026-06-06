"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  X, 
  Zap, 
  ArrowUpRight, 
  Clock, 
  TrendingUp, 
  Smartphone, 
  AlertCircle, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Calendar,
  Layers,
  MapPin,
  Check
} from "lucide-react";
import { Section, SectionHeader } from "./Primitives";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

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
      subtitle: "High-Performance B2B Catalog & Machinery Showcases",
      stats: {
        delivery: "72 Hours",
        pagespeed: "98/100",
        conversion: "+45%",
        mobile: "99%"
      },
      challenge: {
        title: "Slow & Friction-Heavy Machinery Catalog",
        text: "Laser Technologies had an outdated site with slow loading times for high-res machinery specifications, causing a high bounce rate. High-value search terms weren't ranking well on Google, leading to a high cost-per-lead for qualified B2B industrial buyer queries."
      },
      solution: {
        title: "Lightweight Headless Specs Index",
        text: "We built a customized, lightweight specs directory with instant client-side filtering. By applying static site generation (SSG) for machine model pages, we decreased load times to 0.4s and boosted organic search visibility."
      },
      gallery: [
        "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Laser-Technologies-Pvt.-Ltd.jpg",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
      ],
      featuresDelivered: [
        "Custom UI/UX Design",
        "Interactive Specs Filter",
        "Multi-Location SEO",
        "WhatsApp Live Chat",
        "Fast Load Optimization",
        "Interactive Google Maps",
        "SSL Security Setup",
        "B2B Inquiry Engine"
      ],
      results: {
        lighthouse: "98/100",
        loadTime: "0.4s",
        deliveryDuration: "72 Hours",
        responsiveness: "100% Score"
      },
      details: {
        industry: "Industrial Manufacturing",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["Next.js", "React JS", "Tailwind CSS", "WordPress REST API"],
        year: "2026"
      },
      outcome: "Generated 350+ B2B enquiries within the first 3 months of launch, decreasing cost-per-lead by 45%."
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
      subtitle: "Luxury Private Villa Immersive Showcase",
      stats: {
        delivery: "48 Hours",
        pagespeed: "97/100",
        conversion: "+60%",
        mobile: "100%"
      },
      challenge: {
        title: "High Third-Party OTA Commission Fees",
        text: "Clayton Holidays was heavily reliant on platforms like Airbnb and Booking.com, losing up to 20% of their booking revenue to commission fees. They needed a high-converting direct channel to drive fee-free customer bookings."
      },
      solution: {
        title: "Visual-First Direct Inquiry Funnel",
        text: "We built an immersive website showcasing Clayton villa's premium pool, views, and bedrooms. A streamlined mobile inquiry flow sends bookings directly to their WhatsApp team, cutting out intermediate fees."
      },
      gallery: [
        "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Clayton-Holidays.jpg",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800"
      ],
      featuresDelivered: [
        "Luxury Villa Showcase",
        "WhatsApp Direct Booking",
        "Responsive Gallery Grid",
        "One-Click Location Map",
        "Interactive Amenities",
        "High-Speed Asset Delivery",
        "SSL Security",
        "SEO Foundations"
      ],
      results: {
        lighthouse: "97/100",
        loadTime: "0.3s",
        deliveryDuration: "48 Hours",
        responsiveness: "100% Score"
      },
      details: {
        industry: "Hospitality & Leisure",
        location: "Lonavala, India",
        timeline: "48 Hours",
        techStack: ["React JS", "Tailwind CSS", "Framer Motion", "WhatsApp Business API"],
        year: "2026"
      },
      outcome: "Achieved a 60% increase in direct WhatsApp bookings, significantly reducing dependency on OTA platforms like Airbnb."
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
      subtitle: "Premium Organic Snacks E-Commerce Storefront",
      stats: {
        delivery: "72 Hours",
        pagespeed: "99/100",
        conversion: "+2.4%",
        mobile: "98%"
      },
      challenge: {
        title: "Friction-Heavy Shopping Experience",
        text: "Livyor's previous store had slow mobile loading speeds and a complicated, multi-step checkout process. This caused a massive drop-off at checkout, particularly for customers browsing on mobile devices."
      },
      solution: {
        title: "Optimized One-Page Funnel UX",
        text: "We completely optimized the checkout funnel and integrated a blazing fast cart side-drawer. We implemented advanced smart tags for filtering, allowing users to find healthy snacks instantly."
      },
      gallery: [
        "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Livyor.jpg",
        "https://images.unsplash.com/photo-1596489815182-748af815d909?q=80&w=800",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
        "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=800",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800"
      ],
      featuresDelivered: [
        "Custom Shopify Storefront",
        "Fast Cart Drawer",
        "Advanced Product Filters",
        "SEO Optimization",
        "Payment Gateway Integration",
        "Mobile First Responsive",
        "Analytics Dashboard",
        "Fast Checkout Engine"
      ],
      results: {
        lighthouse: "99/100",
        loadTime: "0.2s",
        deliveryDuration: "72 Hours",
        responsiveness: "98% Score"
      },
      details: {
        industry: "E-Commerce / Retail",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["Shopify Liquid", "Tailwind CSS", "React JS", "Headless Cart"],
        year: "2026"
      },
      outcome: "Increased conversion rate by 2.4% with a streamlined checkout process and optimized mobile experience."
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
      subtitle: "Premium Property Showcase & Lead Gen",
      stats: {
        delivery: "72 Hours",
        pagespeed: "99/100",
        conversion: "+300%",
        mobile: "99%"
      },
      challenge: {
        title: "Slow Overseas Load Times for NRI Buyers",
        text: "Veena Developers targets premium NRI (Non-Resident Indian) property buyers. However, their resource-heavy site loaded extremely slowly for overseas users, failing to convert international investors."
      },
      solution: {
        title: "Global CDN & Static Asset Rendering",
        text: "We developed a static website built with Next.js and distributed assets via an edge CDN. We compressed site models and high-res layout plans, which reduced loading times across the globe by 300%."
      },
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
      ],
      featuresDelivered: [
        "Custom Visual UI",
        "Global CDN Optimization",
        "Next.js Static Pages",
        "Interactive Floorplans",
        "Fast Lead Forms",
        "Mobile First Responsive",
        "Google Maps Setup",
        "SSL & Security Shield"
      ],
      results: {
        lighthouse: "99/100",
        loadTime: "0.2s",
        deliveryDuration: "72 Hours",
        responsiveness: "99% Score"
      },
      details: {
        industry: "Real Estate Development",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["Next.js", "React JS", "Tailwind CSS", "Cloudflare CDN"],
        year: "2026"
      },
      outcome: "Improved global page load speed by 300%, resulting in higher engagement from NRI property buyers."
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
      subtitle: "Interactive Storytelling Portfolio for Creative Agency",
      stats: {
        delivery: "48 Hours",
        pagespeed: "96/100",
        conversion: "+5 Clients",
        mobile: "100%"
      },
      challenge: {
        title: "Dry & Static Online Portfolio",
        text: "As a top creative agency, Purva Desai & Co's old website didn't showcase their animation and video skills. They struggled to win high-ticket corporate accounts because their online presence felt basic."
      },
      solution: {
        title: "Immersive Video Showreels & Motion",
        text: "We built an animation-heavy, visual-first WordPress site featuring video backgrounds, customized case study layouts, and sleek scroll animations to mirror their high-end creative identity."
      },
      gallery: [
        "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Purva-Desai-Co.jpg",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
        "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
      ],
      featuresDelivered: [
        "Video Background Setup",
        "Custom Motion Animations",
        "Creative Case Studies",
        "Responsive WordPress CMS",
        "Contact Leads Funnel",
        "Optimized Media Loader",
        "Fast Page Speed",
        "Social Feed Integration"
      ],
      results: {
        lighthouse: "96/100",
        loadTime: "0.5s",
        deliveryDuration: "48 Hours",
        responsiveness: "100% Score"
      },
      details: {
        industry: "Creative & Branding Agency",
        location: "Mumbai, India",
        timeline: "48 Hours",
        techStack: ["WordPress", "React JS", "Framer Motion", "Tailwind CSS"],
        year: "2026"
      },
      outcome: "Successfully positioned as a premium creative agency, leading to 5 new high-ticket client acquisitions in Q1."
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
      subtitle: "High-Performance WooCommerce Storefront",
      stats: {
        delivery: "72 Hours",
        pagespeed: "98/100",
        conversion: "+120%",
        mobile: "98%"
      },
      challenge: {
        title: "Page Transitions & Cart Abandonment",
        text: "Tazaari had slow page transitions and a clunky multi-step shopping checkout, causing a high cart abandonment rate. They needed an interface that felt as fast and fluid as a modern native app."
      },
      solution: {
        title: "AJAX Filter Grid & One-Page Checkout",
        text: "We built an optimized checkout process on WooCommerce and custom-designed the product grid with lightning-fast AJAX filtering, helping shoppers find fashion items instantly."
      },
      gallery: [
        "https://cms.kolacommunications.com/wp-content/uploads/2026/04/Tazaari.jpg",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800"
      ],
      featuresDelivered: [
        "WooCommerce Storefront",
        "AJAX Smart Filters",
        "One-Page Fast Checkout",
        "Asset Size Compression",
        "Instagram Feed Hook",
        "Mobile Commerce Optimization",
        "Secure Payment Gateways",
        "SSL Security setup"
      ],
      results: {
        lighthouse: "98/100",
        loadTime: "0.3s",
        deliveryDuration: "72 Hours",
        responsiveness: "98% Score"
      },
      details: {
        industry: "Fashion E-Commerce",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["WordPress", "WooCommerce API", "Tailwind CSS", "React JS"],
        year: "2026"
      },
      outcome: "Boosted monthly organic traffic by 120% and reduced cart abandonment rate by implementing a fast WooCommerce checkout."
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
      subtitle: "Scalable Enterprise ESG & Projects Portal",
      stats: {
        delivery: "72 Hours",
        pagespeed: "99/100",
        conversion: "100%",
        mobile: "99%"
      },
      challenge: {
        title: "Heavy Content Maintenance Overhead",
        text: "Sterlite Grid wanted to present power transmission projects and sustainability charts to global investors. However, updating pages was slow and required writing code, blocking swift investor updates."
      },
      solution: {
        title: "Headless Content Management",
        text: "We built a static enterprise website utilizing static site generation (SSG). A headless content editor enables team members to modify news, documents, and ESG details without technical overhead."
      },
      gallery: [
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
      ],
      featuresDelivered: [
        "Structured Headless CMS",
        "Investor Document Hub",
        "ESG Interactive Charts",
        "Global Enterprise Search",
        "Static Page Rendering",
        "Mobile First Responsive",
        "Enterprise SEO Setup",
        "SSL Security Shield"
      ],
      results: {
        lighthouse: "99/100",
        loadTime: "0.2s",
        deliveryDuration: "72 Hours",
        responsiveness: "99% Score"
      },
      details: {
        industry: "Energy Infrastructure",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["Next.js", "React JS", "Tailwind CSS", "Headless CMS"],
        year: "2026"
      },
      outcome: "Enhanced corporate communication and stakeholder engagement with a robust, accessible enterprise platform."
    }
  ], []);

  // Modal container scroll position for parallax cover image
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [modalScrollY, setModalScrollY] = useState(0);

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

  // Project navigation handlers
  const currentIndex = selectedCard ? cards.findIndex((c) => c.name === selectedCard.name) : -1;

  const handlePrevProject = () => {
    if (currentIndex > 0) {
      setSelectedCard(cards[currentIndex - 1]);
    } else {
      setSelectedCard(cards[cards.length - 1]);
    }
    // Reset scroll position inside modal
    setModalScrollY(0);
    if (modalContainerRef.current) {
      modalContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextProject = () => {
    if (currentIndex < cards.length - 1) {
      setSelectedCard(cards[currentIndex + 1]);
    } else {
      setSelectedCard(cards[0]);
    }
    // Reset scroll position inside modal
    setModalScrollY(0);
    if (modalContainerRef.current) {
      modalContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Keyboard navigation & ESC handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeLightboxIndex !== null) {
          setActiveLightboxIndex(null);
        } else {
          setSelectedCard(null);
        }
      } else if (e.key === "ArrowLeft") {
        if (activeLightboxIndex !== null && selectedCard) {
          setActiveLightboxIndex((prev) => 
            prev !== null ? (prev === 0 ? selectedCard.gallery.length - 1 : prev - 1) : null
          );
        } else if (selectedCard) {
          handlePrevProject();
        }
      } else if (e.key === "ArrowRight") {
        if (activeLightboxIndex !== null && selectedCard) {
          setActiveLightboxIndex((prev) => 
            prev !== null ? (prev === selectedCard.gallery.length - 1 ? 0 : prev + 1) : null
          );
        } else if (selectedCard) {
          handleNextProject();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCard, activeLightboxIndex, currentIndex]);

  // Duplicate cards for marquee
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
        <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused] cursor-pointer">
          {marqueeCards.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              onClick={() => setSelectedCard(c)}
              className="w-[280px] sm:w-[350px] shrink-0 group relative block overflow-hidden rounded-3xl hairline bg-surface-elevated p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-900 border border-hairline/10">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 280px, 350px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-lg"
          >
            {/* Subtle radial gradient background behind modal */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(11,15,20,0.5)_0%,_transparent_75%)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1050px] h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0B0F14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white flex flex-col custom-scrollbar"
              ref={modalContainerRef}
              onScroll={(e) => setModalScrollY(e.currentTarget.scrollTop)}
            >
              {/* 1. Hero Section */}
              <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden shrink-0">
                <motion.div 
                  className="absolute inset-0 w-full h-[120%]"
                  style={{ y: modalScrollY * 0.25 }}
                >
                  <Image
                    src={selectedCard.img}
                    alt={selectedCard.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/40 to-black/20" />

                {/* Close button top-right */}
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-6 top-6 z-10 rounded-full bg-black/60 p-2.5 text-white/80 hover:text-white hover:bg-black/80 transition-all border border-white/15 backdrop-blur-md cursor-pointer hover:scale-105"
                  aria-label="Close Case Study"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Hero Meta & Titles */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-[oklch(0.55_0.16_150)]/20 px-3.5 py-1 text-[10px] uppercase tracking-wider text-[oklch(0.65_0.19_150)] font-semibold border border-[oklch(0.55_0.16_150)]/30 backdrop-blur-md">
                      {selectedCard.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/70 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-white/50" /> {selectedCard.city}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold leading-none tracking-tight text-white mt-1">
                    {selectedCard.name}
                  </h3>
                  <p className="text-sm md:text-lg text-white/70 font-medium max-w-2xl">
                    {selectedCard.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body Contents */}
              <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col gap-10 md:gap-14 pb-28 md:pb-24">
                
                {/* 2. Stats Row (4 cards) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/[0.08] backdrop-blur-md shadow-inner flex flex-col justify-between group hover:border-[oklch(0.55_0.16_150)]/30 transition-colors">
                    <div className="flex items-center justify-between mb-3 text-white/40">
                      <span className="text-[10px] font-semibold uppercase tracking-wider">Delivery Time</span>
                      <Clock className="h-4.5 w-4.5 text-[oklch(0.65_0.19_150)]" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {selectedCard.stats.delivery}
                      </div>
                      <span className="text-[10px] text-white/40 font-medium">Concept to Live</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/[0.08] backdrop-blur-md shadow-inner flex flex-col justify-between group hover:border-[oklch(0.55_0.16_150)]/30 transition-colors">
                    <div className="flex items-center justify-between mb-3 text-white/40">
                      <span className="text-[10px] font-semibold uppercase tracking-wider">PageSpeed Score</span>
                      <Zap className="h-4.5 w-4.5 text-[oklch(0.65_0.19_150)]" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-[oklch(0.65_0.19_150)] leading-tight">
                        {selectedCard.stats.pagespeed}
                      </div>
                      <span className="text-[10px] text-white/40 font-medium">Core Web Vitals</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/[0.08] backdrop-blur-md shadow-inner flex flex-col justify-between group hover:border-[oklch(0.55_0.16_150)]/30 transition-colors">
                    <div className="flex items-center justify-between mb-3 text-white/40">
                      <span className="text-[10px] font-semibold uppercase tracking-wider">Conversion Increase</span>
                      <TrendingUp className="h-4.5 w-4.5 text-[oklch(0.65_0.19_150)]" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {selectedCard.stats.conversion}
                      </div>
                      <span className="text-[10px] text-white/40 font-medium">Enquiries & Sales</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/[0.08] backdrop-blur-md shadow-inner flex flex-col justify-between group hover:border-[oklch(0.55_0.16_150)]/30 transition-colors">
                    <div className="flex items-center justify-between mb-3 text-white/40">
                      <span className="text-[10px] font-semibold uppercase tracking-wider">Mobile Optimization</span>
                      <Smartphone className="h-4.5 w-4.5 text-[oklch(0.65_0.19_150)]" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {selectedCard.stats.mobile}
                      </div>
                      <span className="text-[10px] text-white/40 font-medium">Responsive Score</span>
                    </div>
                  </div>
                </div>

                {/* 3. Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-3xl bg-white/[0.04] p-6 md:p-8 border border-white/[0.08] backdrop-blur-md shadow-inner hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10 border border-red-500/25">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white">The Challenge</h4>
                    </div>
                    <h5 className="text-sm font-semibold text-white/90 mb-2">{selectedCard.challenge.title}</h5>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      {selectedCard.challenge.text}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/[0.04] p-6 md:p-8 border border-white/[0.08] backdrop-blur-md shadow-inner hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.55_0.16_150)]/10 border border-[oklch(0.55_0.16_150)]/25">
                        <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.19_150)]" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white">The Solution</h4>
                    </div>
                    <h5 className="text-sm font-semibold text-white/90 mb-2">{selectedCard.solution.title}</h5>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      {selectedCard.solution.text}
                    </p>
                  </div>
                </div>

                {/* 4. Project Gallery */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Large Featured Image */}
                    <div 
                      onClick={() => setActiveLightboxIndex(0)}
                      className="md:col-span-3 relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group cursor-pointer"
                    >
                      <Image
                        src={selectedCard.gallery[0]}
                        alt={`${selectedCard.name} Featured`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 970px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-black/60 border border-white/10 text-xs font-semibold backdrop-blur-md">View Gallery Fullscreen</span>
                      </div>
                    </div>

                    {/* 4 Supporting Images */}
                    {selectedCard.gallery.slice(1, 5).map((imgUrl, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveLightboxIndex(idx + 1)}
                        className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.08] bg-neutral-900 group cursor-pointer"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${selectedCard.name} Screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] px-3 py-1.5 rounded-full bg-black/60 border border-white/10 font-semibold backdrop-blur-md">Zoom</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Features Delivered */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Features Delivered</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCard.featuresDelivered.map((feat) => (
                      <div 
                        key={feat} 
                        className="flex items-center gap-2.5 text-xs text-white/80 bg-white/[0.03] px-4 py-3 rounded-xl border border-white/[0.06] hover:border-white/10 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.19_150)] shrink-0" />
                        <span className="font-medium leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Results Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Performance Audit Results</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/[0.06] flex flex-col justify-between">
                      <div className="text-3xl font-extrabold text-[oklch(0.65_0.19_150)] mb-1">
                        {selectedCard.results.lighthouse}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/95 leading-tight">Lighthouse Score</div>
                        <span className="text-[10px] text-white/40 font-medium">Performance Rating</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/[0.06] flex flex-col justify-between">
                      <div className="text-3xl font-extrabold text-white mb-1">
                        {selectedCard.results.loadTime}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/95 leading-tight">Fully Loaded</div>
                        <span className="text-[10px] text-white/40 font-medium">Speed Index (CDN Edge)</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/[0.06] flex flex-col justify-between">
                      <div className="text-3xl font-extrabold text-white mb-1">
                        {selectedCard.results.deliveryDuration}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/95 leading-tight">Delivery Time</div>
                        <span className="text-[10px] text-white/40 font-medium">Concept to Production</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/[0.06] flex flex-col justify-between">
                      <div className="text-3xl font-extrabold text-white mb-1">
                        {selectedCard.results.responsiveness}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/95 leading-tight">Responsiveness</div>
                        <span className="text-[10px] text-white/40 font-medium">Fluid Breakpoints</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Project Details */}
                <div className="border-t border-white/10 pt-8">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1">Industry</div>
                      <div className="text-sm font-semibold text-white/90">{selectedCard.details.industry}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1">Location</div>
                      <div className="text-sm font-semibold text-white/90">{selectedCard.details.location}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1">Timeline</div>
                      <div className="text-sm font-semibold text-white/90">{selectedCard.details.timeline}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1">Year</div>
                      <div className="text-sm font-semibold text-white/90">{selectedCard.details.year}</div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1">Tech Stack</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedCard.details.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="inline-block bg-white/[0.04] text-white/70 text-[10px] font-medium px-2 py-0.5 rounded border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. CTA Section */}
                <div className="mt-4 flex flex-col md:flex-row items-center gap-6 border-t border-white/10 pt-8">
                  {/* Visit Website button with glow effect */}
                  <a
                    href={selectedCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden w-full md:w-auto md:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black py-4 px-8 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.55_0.16_150)] to-[oklch(0.65_0.19_150)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                      Visit Live Website
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>

                  {/* Project Navigation */}
                  <div className="flex items-center justify-between w-full md:w-auto md:gap-6 bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 px-4 md:px-6">
                    <button
                      onClick={handlePrevProject}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] p-2 rounded-full transition-all cursor-pointer"
                      title="Previous Project (Left Arrow)"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Prev</span>
                    </button>
                    
                    <span className="text-xs font-bold text-white/50 select-none">
                      Project {currentIndex + 1} of {cards.length}
                    </span>

                    <button
                      onClick={handleNextProject}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] p-2 rounded-full transition-all cursor-pointer"
                      title="Next Project (Right Arrow)"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Mobile Sticky CTA at Bottom */}
              <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/95 to-transparent border-t border-white/[0.05] flex gap-3 z-30">
                <a
                  href={selectedCard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0B0F14] py-3.5 text-xs font-bold shadow-[0_4px_16px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  Visit Website
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="inline-flex items-center justify-center rounded-full bg-[#0B0F14] border border-white/10 px-6 py-3.5 text-xs font-semibold text-white/80 cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Fullscreen Gallery Lightbox */}
      <AnimatePresence>
        {activeLightboxIndex !== null && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="text-sm font-bold text-white/60 select-none">
                Image {activeLightboxIndex + 1} of {selectedCard.gallery.length}
              </span>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="rounded-full bg-white/10 p-2.5 text-white/80 hover:text-white hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Left/Right Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => 
                  prev !== null ? (prev === 0 ? selectedCard.gallery.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-6 rounded-full bg-white/10 p-3 text-white/80 hover:text-white hover:bg-white/20 transition-all border border-white/10 cursor-pointer z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => 
                  prev !== null ? (prev === selectedCard.gallery.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-6 rounded-full bg-white/10 p-3 text-white/80 hover:text-white hover:bg-white/20 transition-all border border-white/10 cursor-pointer z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Lightbox Image */}
            <div 
              className="relative w-full max-w-[90vw] h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCard.gallery[activeLightboxIndex]}
                alt={`${selectedCard.name} Fullscreen view`}
                fill
                sizes="90vw"
                className="object-contain select-none"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </Section>
  );
}
