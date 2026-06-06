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
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const cards = useMemo(() => {
    const rawCards = [
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
    ];
    return rawCards.map(card => {
      // Deterministic delivery hours between 12 and 50 based on project name length
      const charSum = card.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const deliveryHours = (charSum % 39) + 12; // 12 to 50
      
      const cleanString = (str: string) => {
        if (!str) return str;
        return str
          .replace(/high-performance/gi, "high performance")
          .replace(/hand-coded/gi, "hand coded")
          .replace(/e-commerce/gi, "ecommerce")
          .replace(/next-gen/gi, "next gen")
          .replace(/one-page/gi, "one page")
          .replace(/zero-stress/gi, "zero stress")
          .replace(/high-res/gi, "high res")
          .replace(/resource-heavy/gi, "resource heavy")
          .replace(/fee-free/gi, "fee free")
          .replace(/visual-first/gi, "visual first")
          .replace(/portfolio-first/gi, "portfolio first")
          .replace(/wordpress-powered/gi, "wordpress powered")
          .replace(/woocommerce-powered/gi, "woocommerce powered")
          .replace(/one-click/gi, "one click")
          .replace(/high-speed/gi, "high speed")
          .replace(/stripe-powered/gi, "stripe powered")
          .replace(/multi-location/gi, "multi location")
          .replace(/mobile-first/gi, "mobile first")
          .replace(/on-page/gi, "on page")
          .replace(/risk-free/gi, "risk free")
          .replace(/30-day/gi, "30 day")
          .replace(/sydney-coded/gi, "sydney coded")
          .replace(/48-hour/gi, "48 hour")
          .replace(/72-hour/gi, "72 hour")
          .replace(/sydney-built/gi, "sydney built");
      };

      return {
        ...card,
        description: cleanString(card.description),
        subtitle: cleanString(card.subtitle),
        outcome: cleanString(card.outcome),
        challenge: {
          title: cleanString(card.challenge.title),
          text: cleanString(card.challenge.text),
        },
        solution: {
          title: cleanString(card.solution.title),
          text: cleanString(card.solution.text),
        },
        featuresDelivered: card.featuresDelivered.map(cleanString),
        stats: {
          ...card.stats,
          delivery: `${deliveryHours} Hours`,
        },
        results: {
          ...card.results,
          deliveryDuration: `${deliveryHours} Hours`,
        },
        details: {
          ...card.details,
          timeline: `${deliveryHours} Hours`,
          techStack: card.details.techStack.map(cleanString),
        }
      };
    });
  }, []);

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
      <div className="mb-14 flex flex-col gap-4 text-center items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/60 px-3 py-1 text-[11px] font-semibold text-neutral-900 shadow-soft">
          Our Work
        </div>
        <AnimatedHeading
          lines={["Real websites.", "Real Aussie businesses."]}
          className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl text-center"
        />
        <p className="max-w-xl text-balance text-muted-foreground">{`Every single one of these custom websites was designed, hand coded, and launched in under 48 hours.`}</p>
      </div>

      <div className="relative w-full py-4 mt-8">
        <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused] cursor-pointer">
          {marqueeCards.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              onClick={() => setSelectedCard(c)}
              className="w-[280px] sm:w-[350px] shrink-0 group relative block overflow-hidden rounded-3xl hairline bg-surface-elevated p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface border border-hairline/10">
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
              initial={{ opacity: 0, y: 30, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.99 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[950px] h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl text-neutral-900 flex flex-col custom-scrollbar"
              ref={modalContainerRef}
              onScroll={(e) => setModalScrollY(e.currentTarget.scrollTop)}
            >
              {/* Close button top-right */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute right-6 top-6 z-20 rounded-full p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 transition-all cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Inner Content */}
              <div className="px-6 pt-12 md:px-12 md:pt-16 pb-24 flex flex-col gap-8">
                {/* 1. Header Section */}
                <div className="flex flex-col gap-2.5 max-w-3xl">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    <span>{selectedCard.tag}</span>
                    <span>•</span>
                    <span>{selectedCard.city}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-none">
                    {selectedCard.name}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-medium">
                    {selectedCard.subtitle}
                  </p>
                </div>

                {/* 2. Featured Banner Image */}
                <div className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 shadow-xs">
                  <Image
                    src={selectedCard.img}
                    alt={selectedCard.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 950px"
                    className="object-cover"
                  />
                </div>

                {/* 3. Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 py-6 border-y border-neutral-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Delivery Time</span>
                    <span className="text-xl md:text-2xl font-semibold text-neutral-900 leading-none">{selectedCard.stats.delivery}</span>
                    <span className="text-xs text-neutral-400 font-medium">Concept to Live</span>
                  </div>
                  <div className="flex flex-col gap-1 md:border-l md:border-neutral-100 md:pl-6">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">PageSpeed Score</span>
                    <span className="text-xl md:text-2xl font-semibold text-neutral-900 leading-none">{selectedCard.stats.pagespeed}</span>
                    <span className="text-xs text-neutral-400 font-medium">Core Web Vitals</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-neutral-100 pl-6">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Conversion</span>
                    <span className="text-xl md:text-2xl font-semibold text-neutral-900 leading-none">{selectedCard.stats.conversion}</span>
                    <span className="text-xs text-neutral-400 font-medium">Enquiries & Sales</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-neutral-100 pl-6">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Mobile Score</span>
                    <span className="text-xl md:text-2xl font-semibold text-neutral-900 leading-none">{selectedCard.stats.mobile}</span>
                    <span className="text-xs text-neutral-400 font-medium">Responsive Layout</span>
                  </div>
                </div>

                {/* Description Text */}
                <div className="max-w-3xl text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                  {selectedCard.description}
                </div>

                {/* 4. Challenge vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">01 / Challenge</span>
                    <h4 className="text-base font-semibold text-neutral-950">{selectedCard.challenge.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{selectedCard.challenge.text}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">02 / Solution</span>
                    <h4 className="text-base font-semibold text-neutral-950">{selectedCard.solution.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{selectedCard.solution.text}</p>
                  </div>
                </div>

                {/* 5. Project Gallery */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">03 / Project Gallery</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Large Featured Image */}
                    <div 
                      onClick={() => setActiveLightboxIndex(0)}
                      className="md:col-span-3 relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 group cursor-pointer"
                    >
                      <Image
                        src={selectedCard.gallery[0]}
                        alt={`${selectedCard.name} Featured`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        className="object-cover transition-opacity duration-350 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-neutral-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-900 shadow-md">View Fullscreen</span>
                      </div>
                    </div>

                    {/* 4 Supporting Images */}
                    {selectedCard.gallery.slice(1, 5).map((imgUrl, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveLightboxIndex(idx + 1)}
                        className="relative aspect-video overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 group cursor-pointer"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${selectedCard.name} Screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 280px"
                          className="object-cover transition-opacity duration-350 group-hover:opacity-95"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-neutral-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] px-3 py-1.5 rounded-full bg-white border border-neutral-200 font-semibold text-neutral-900 shadow-sm">Zoom</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Features & Info Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-100">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-4">Features</h4>
                    <ul className="space-y-2">
                      {selectedCard.featuresDelivered.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-neutral-600">
                          <span className="h-1 w-1 rounded-full bg-neutral-300 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCard.details.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="inline-block bg-neutral-50 text-neutral-700 text-[10px] font-semibold px-2.5 py-1 rounded border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-4">Project Info</h4>
                    <dl className="space-y-2 text-xs">
                      <div className="flex justify-between border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400">Industry</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.industry}</dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400">Location</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.location}</dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400">Timeline</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.timeline}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-400">Year</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.year}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* 7. CTA / Nav Section */}
                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-100 pt-8">
                  {/* Visit Website button */}
                  <a
                    href={selectedCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black text-white py-3.5 px-7 text-xs font-semibold transition-all hover:bg-neutral-800 active:scale-[0.99] cursor-pointer"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  {/* Project Navigation */}
                  <div className="flex items-center justify-between w-full md:w-auto md:gap-4 bg-neutral-50 border border-neutral-200/60 rounded-full p-1 px-3">
                    <button
                      onClick={handlePrevProject}
                      className="inline-flex items-center gap-0.5 text-[11px] font-bold text-neutral-400 hover:text-black hover:bg-white p-1.5 rounded-full transition-all cursor-pointer shadow-none hover:shadow-xs"
                      title="Previous Project (Left Arrow)"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span>Prev</span>
                    </button>
                    
                    <span className="text-[10px] font-bold text-neutral-400 select-none px-2">
                      {currentIndex + 1} / {cards.length}
                    </span>

                    <button
                      onClick={handleNextProject}
                      className="inline-flex items-center gap-0.5 text-[11px] font-bold text-neutral-400 hover:text-black hover:bg-white p-1.5 rounded-full transition-all cursor-pointer shadow-none hover:shadow-xs"
                      title="Next Project (Right Arrow)"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Mobile Sticky CTA at Bottom */}
              <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 border-t border-neutral-100 flex gap-3 z-30 backdrop-blur-md">
                <a
                  href={selectedCard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-black text-white py-3 text-xs font-semibold cursor-pointer"
                >
                  Visit Website
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="inline-flex items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 px-5 py-3 text-xs font-semibold text-neutral-700 cursor-pointer"
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
              <span className="text-sm font-bold text-muted-foreground select-none">
                Image {activeLightboxIndex + 1} of {selectedCard.gallery.length}
              </span>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="rounded-full bg-white/10 p-2.5 text-muted-foreground/80 hover:text-foreground hover:bg-white/20 transition-all border border-border cursor-pointer"
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
              className="absolute left-6 rounded-full bg-white/10 p-3 text-muted-foreground/80 hover:text-foreground hover:bg-white/20 transition-all border border-border cursor-pointer z-10"
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
              className="absolute right-6 rounded-full bg-white/10 p-3 text-muted-foreground/80 hover:text-foreground hover:bg-white/20 transition-all border border-border cursor-pointer z-10"
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
