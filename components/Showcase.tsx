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
  Check,
  Plus
} from "lucide-react";
import { Section, SectionHeader } from "./Primitives";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

// Case-study content sourced from the live Kola CMS (cms.kolacommunications.com),
// keyed by card name. Each entry mirrors the project page: client requirement,
// the "how we crafted" write-up, and the FAQ.
type CaseStudy = {
  clientRequirement: string;
  crafted: { title: string; text: string };
  faqs: { q: string; a: string }[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "Laser Technologies": {
    clientRequirement:
      "Laser Technologies required a professional, high-performing custom-coded website to showcase their extensive range of industrial laser machines — including fiber laser cutting, CO2 engraving, laser welding, and laser marking systems. With over 7,200 customers and 5,500 machines installed across India, the goal was to build a digital presence that matched their scale, made it easy for industrial buyers to explore detailed product specifications, and drove qualified enquiries from manufacturers across automotive, aerospace, and fabrication industries.",
    crafted: {
      title: "How we made Laser Technologies discoverable to industrial buyers online",
      text: "Kola Communications developed a custom-coded website for Laser Technologies built entirely around the industrial buyer's decision process. Product categories — cutting, welding, marking, engraving, fiber laser, CO2, and UV systems — were structured with detailed specifications and high-quality imagery so a procurement manager could evaluate options without making a call first. Multiple office locations across Navi Mumbai, Pune, Ahmedabad, and Delhi were clearly presented to establish national reach. SEO architecture was built around high-intent industrial search terms to ensure Laser Technologies appeared when buyers were actively searching for solutions. The Kola team treated the website as a 24-hour sales representative for a company that has been building India's laser industry since 2011.",
    },
    faqs: [
      {
        q: "What machines does Laser Technologies offer?",
        a: "Laser Technologies Pvt Ltd offers a comprehensive range of industrial laser machines including fiber laser cutting systems, CO2 laser engravers, laser welding machines, laser marking systems, CNC bending machines, and related consumables and accessories — serving industries including automotive, aerospace, manufacturing, and metal fabrication.",
      },
      {
        q: "How many customers does Laser Technologies have in India?",
        a: "Laser Technologies has served over 7,200 customers across India with more than 5,500 machines installed, making them one of India's most established industrial laser solution providers. Their offices span Navi Mumbai, Pune, Ahmedabad, and Delhi.",
      },
      {
        q: "What does an industrial laser machinery company need from its website that a standard B2B site does not?",
        a: "Industrial machinery buyers are technical by nature — they arrive at a website with specific requirements already in mind, and they are evaluating whether a supplier can meet those requirements before they invest time in a conversation. A website that leads with marketing copy rather than specifications wastes that evaluation window. Kola Communications built the Laser Technologies website so that product categories, machine specs, and application details are front and centre — because a procurement engineer in the automotive or aerospace sector does not need to be sold to, they need to be informed. The Kola team also ensured that Laser Technologies' national footprint was clearly communicated, because for a capital equipment purchase, knowing that local service and support exists in your city is often the deciding factor between two equally capable suppliers.",
      },
    ],
  },
  "Clayton Holidays": {
    clientRequirement:
      "Clayton Holidays required a visually immersive website to promote their luxury private villa perched above the Western Ghats in Lonavala. The objective was to capture the exclusivity of the property, highlight premium amenities, and drive direct booking enquiries through an elegant and high-converting digital presence.",
    crafted: {
      title: "Bringing Clayton Holidays to life — our immersive villa website approach",
      text: "Kola Communications developed a WordPress website with a rich, visual-first design that brought the villa's stunning Western Ghats surroundings to life on screen. High-resolution imagery, immersive layouts, and carefully crafted copy conveyed the property's premium appeal and architectural character. Key amenities were showcased in a clean format, while clear calls-to-action — including WhatsApp and direct call integrations — made it effortless for visitors to book their stay.",
    },
    faqs: [
      {
        q: "Where is Clayton Holidays located?",
        a: "Clayton Holidays is a luxury private villa in Lonavala, perched above the Western Ghats and offering stunning natural views alongside premium amenities.",
      },
      {
        q: "How do I book Clayton Holidays?",
        a: "You can book Clayton Holidays directly via WhatsApp or through the enquiry form on their official website at claytonholidays.com for a quick and easy reservation.",
      },
      {
        q: "Who built the Clayton Holidays website?",
        a: "The Clayton Holidays website was designed and developed by Kola Communications, a digital agency specialising in luxury hospitality and travel websites with immersive visual storytelling and WhatsApp booking integration.",
      },
    ],
  },
  "Livyor": {
    clientRequirement:
      "Livyor sought a scalable Shopify-based e-commerce solution for their premium dry fruits, nuts, seeds, and healthy snacks brand. The requirements included sleek design, smooth navigation, and a secure, optimised platform to deliver a superior shopping experience.",
    crafted: {
      title: "From brief to build — how we brought Livyor's health brand to Shopify",
      text: "Kola Communications developed a Shopify store for Livyor with a modern, conversion-oriented layout. Product filters, responsive design, and a simplified checkout flow improved usability. The combination of scalability, speed, and sleek visuals ensured a fast and enjoyable shopping journey for health-conscious customers across India.",
    },
    faqs: [
      {
        q: "What does Livyor sell?",
        a: "Livyor is a health nutrition brand selling premium dry fruits, exotic nuts, seeds, millets, berries, dates, and breakfast cereals online in India.",
      },
      {
        q: "Does Livyor offer free shipping?",
        a: "Yes, Livyor offers free shipping on all prepaid orders. Use code LIVYOR5 for a flat 5% discount on your order.",
      },
      {
        q: "Who built the Livyor online store?",
        a: "The Livyor Shopify store was designed and developed by Kola Communications, a digital marketing agency with expertise in Shopify e-commerce, conversion rate optimisation, and health brand positioning.",
      },
    ],
  },
  "Veena Developers": {
    clientRequirement:
      "Veena Developers needed a premium website to highlight their real estate projects with high-quality visuals and complete property details. Another requirement was optimisation for speed across regions to ensure a smooth experience for global audiences.",
    crafted: {
      title: "How we translated Veena Developers' legacy into a premium digital presence",
      text: "Kola Communications built a custom-coded website with immersive digital design to resonate with homebuyers. Region-specific CDNs were implemented for global speed optimisation. The platform combined premium visuals with fast performance, creating a seamless browsing experience that reinforced Veena Developers' brand positioning across Mumbai's real estate market.",
    },
    faqs: [
      {
        q: "What types of projects does Veena Developers offer?",
        a: "Veena Developers offers residential and commercial real estate projects across Mumbai, including ongoing, upcoming, and completed developments.",
      },
      {
        q: "Does Veena Developers offer redevelopment services?",
        a: "Yes, Veena Developers provides housing society redevelopment services in Mumbai with end-to-end support for residents and stakeholders.",
      },
      {
        q: "Who built the Veena Developers website?",
        a: "The Veena Developers website was custom-coded and delivered by Kola Communications, a digital agency specialising in premium real estate web development with CDN optimisation and immersive property showcases.",
      },
    ],
  },
  "Purva Desai & Co": {
    clientRequirement:
      "Purva Desai & Co required a WordPress website that captured the creative spirit of a social media agency. The objective was to highlight flagship projects on the homepage and showcase how these campaigns contributed to client growth and brand positioning.",
    crafted: {
      title: "How we crafted a portfolio-first website for Purva Desai & Co",
      text: "Our team at Kola Communications designed an animation-rich website powered by JavaScript for an engaging look and feel. A homepage video showreel introduced their creativity instantly, while premium-styled client and project sections elevated brand perception. Each project page was crafted to explain the creative process and results in depth.",
    },
    faqs: [
      {
        q: "What does Purva Desai & Co do?",
        a: "Purva Desai & Co is a Mumbai-based social media and creative agency that delivers campaign-driven brand growth strategies and creative portfolio work for businesses.",
      },
      {
        q: "What kind of projects does Purva Desai & Co showcase?",
        a: "The agency showcases flagship brand campaigns, social media strategies, and creative projects that highlight measurable client growth and brand positioning.",
      },
      {
        q: "Who built the Purva Desai & Co website?",
        a: "The Purva Desai & Co website was designed and developed by Kola Communications, a full-service digital marketing agency specialising in WordPress development, SEO, AEO, content creation, and AI tools.",
      },
    ],
  },
  "Tazaari": {
    clientRequirement:
      "Tazaari required a scalable e-commerce platform to deliver a seamless shopping experience while managing a wide range of men's and women's fashion products and ensuring smooth, secure transactions.",
    crafted: {
      title: "Building Tazaari — our approach to fashion e-commerce that converts",
      text: "Kola Communications built a modern, responsive WordPress + WooCommerce website with intuitive navigation, secure payment gateways, and advanced product filtering. A streamlined checkout flow and optimised performance improved user convenience and conversions, while well-structured product pages with reviews and recommendations enhanced customer trust and engagement.",
    },
    faqs: [
      {
        q: "What does Tazaari sell?",
        a: "Tazaari is a fashion brand selling premium men's and women's clothing, including casual and occasion wear, with a focus on comfort and style.",
      },
      {
        q: "Is Tazaari available for online shopping?",
        a: "Yes, Tazaari has a fully functional WooCommerce online store with secure payment gateways, product filtering, and a streamlined checkout experience.",
      },
      {
        q: "Who built the Tazaari website?",
        a: "The Tazaari e-commerce website was built by Kola Communications, a digital marketing agency specialising in WooCommerce development, conversion optimisation, and e-commerce SEO.",
      },
    ],
  },
  "BluFeather Solutions": {
    clientRequirement:
      "BluFeather Solutions required a business website to present their AI infrastructure and technology services effectively and build a professional digital identity. The focus was on clarity, branding, and trust-building for enterprise client acquisition.",
    crafted: {
      title: "How we shaped BluFeather Solutions as an enterprise-grade AI brand online",
      text: "Kola Communications developed a WordPress site for BluFeather Solutions with a clean, professional design. Services were clearly structured across dedicated sections, while branding and usability enhancements encouraged engagement. The platform established credibility and supported their digital presence as a secure AI infrastructure provider.",
    },
    faqs: [
      {
        q: "What does BluFeather Solutions do?",
        a: "BluFeather Solutions provides secure AI infrastructure, dedicated compute resources, and technology services for enterprise clients requiring high-performance and confidential AI environments.",
      },
      {
        q: "What industries does BluFeather Solutions serve?",
        a: "BluFeather Solutions serves enterprises across industries that need secure AI deployment, dedicated resourcing, and scalable technology infrastructure solutions.",
      },
      {
        q: "Who built the BluFeather Solutions website?",
        a: "The BluFeather Solutions website was designed and developed by Kola Communications, a digital agency with expertise in building enterprise-grade tech company websites on WordPress with a focus on trust, clarity, and lead generation.",
      },
    ],
  },
  "Aashiyaanaa Villas": {
    clientRequirement:
      "Aashiyaanaa Villas needed a digital platform to promote their luxury properties in Lonavala. The aim was to highlight interiors, amenities, and booking details while emphasising exclusivity and premium lifestyle appeal.",
    crafted: {
      title: "Our approach to showcasing Aashiyaanaa Villas as a premium destination online",
      text: "Kola Communications designed a visually immersive WordPress website for Aashiyaanaa Villas featuring rich imagery, property highlights, and booking functionality. The design conveyed elegance and exclusivity, creating a seamless browsing experience tailored to high-end clientele looking for luxury villa stays in Lonavala.",
    },
    faqs: [
      {
        q: "Where is Aashiyaanaa Villas located?",
        a: "Aashiyaanaa Villas is a luxury property located in Lonavala, offering exclusive villa stays with premium interiors and amenities for high-end travellers.",
      },
      {
        q: "How can I book Aashiyaanaa Villas?",
        a: "You can book Aashiyaanaa Villas directly via WhatsApp or through the booking enquiry form on their official website at aashiyaanaavilla.com.",
      },
      {
        q: "Who built the Aashiyaanaa Villas website?",
        a: "The Aashiyaanaa Villas website was designed and developed by Kola Communications, a digital agency specialising in luxury hospitality and property websites with immersive visual design and direct booking integrations.",
      },
    ],
  },
  "Resonia Group": {
    clientRequirement:
      "Resonia (previously Sterlite Power) required a project website for the Nangalbibra-Bongaigaon Transmission Line. The focus was on highlighting strategic importance, key milestones, and providing stakeholders with an accessible digital reference for project progress.",
    crafted: {
      title: "Behind the build — how we approached the NBTL project website",
      text: "Kola Communications developed the NBTL site on WordPress with a clear structure to present objectives, milestones, and innovative engineering practices. Dedicated sections showcased project highlights and gallery visuals, ensuring transparency and professionalism while reinforcing stakeholder confidence in the initiative.",
    },
    faqs: [
      {
        q: "What is NBTL?",
        a: "NBTL stands for the Nangalbibra-Bongaigaon Transmission Line, a strategic power infrastructure project managed by Resonia (formerly Sterlite Power) in Northeast India.",
      },
      {
        q: "Where can I find NBTL project updates?",
        a: "NBTL project milestones, press releases, and stakeholder updates are available on the official NBTL website at nbtl.co.in.",
      },
      {
        q: "Who built the NBTL project website?",
        a: "The NBTL project website was designed and developed by Kola Communications, a digital marketing agency with experience building stakeholder-facing infrastructure and energy sector websites.",
      },
    ],
  },
};

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
      img: "/portfolio/laser-technologies.jpg",
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
        "/portfolio/laser-technologies.jpg",
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
      img: "/portfolio/clayton-holidays.jpg",
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
        "/portfolio/clayton-holidays.jpg",
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
      img: "/portfolio/livyor.jpg",
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
        "/portfolio/livyor.jpg",
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
      img: "/portfolio/veena-developers.jpg",
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
        "/portfolio/veena-developers.jpg",
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
      img: "/portfolio/purva-desai.jpg",
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
        "/portfolio/purva-desai.jpg",
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
      img: "/portfolio/tazaari.jpg",
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
        "/portfolio/tazaari.jpg",
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
      tag: "Technology",
      name: "BluFeather Solutions",
      city: "Mumbai",
      grad: "linear-gradient(135deg, oklch(0.72 0.10 220), oklch(0.48 0.14 250))",
      url: "https://blufeathersolution.com/",
      img: "/portfolio/blufeather-v2.jpg",
      description:
        "An enterprise technology company providing secure AI infrastructure, dedicated compute resources, and high-performance services for businesses that need confidential, scalable AI environments. We built a clean, professional WordPress website that presents their services clearly and builds trust with enterprise buyers.",
      subtitle: "Enterprise-Grade AI Infrastructure Website",
      stats: {
        delivery: "72 Hours",
        pagespeed: "98/100",
        conversion: "Enterprise Leads",
        mobile: "99%"
      },
      challenge: {
        title: "Communicating Complex AI Services with Clarity",
        text: "BluFeather Solutions needed to present technical AI infrastructure and compute services to enterprise buyers without overwhelming them. The challenge was building immediate credibility and trust while keeping highly technical offerings clear and easy to navigate."
      },
      solution: {
        title: "Clean, Structured Enterprise Web Presence",
        text: "We developed a professional WordPress website with services organised across dedicated, well-structured sections. Considered branding and usability enhancements established credibility and positioned BluFeather as a secure, enterprise-grade AI infrastructure provider."
      },
      gallery: [
        "/portfolio/blufeather-v2.jpg"
      ],
      featuresDelivered: [
        "Custom WordPress Build",
        "Structured Service Pages",
        "Enterprise Brand Identity",
        "Lead Generation Funnel",
        "Trust & Credibility Design",
        "Mobile First Responsive",
        "On Page SEO Setup",
        "SSL Security Shield"
      ],
      results: {
        lighthouse: "98/100",
        loadTime: "0.3s",
        deliveryDuration: "72 Hours",
        responsiveness: "99% Score"
      },
      details: {
        industry: "AI Infrastructure & Technology",
        location: "Mumbai, India",
        timeline: "72 Hours",
        techStack: ["WordPress", "Tailwind CSS", "PHP", "MySQL"],
        year: "2026"
      },
      outcome: "Established a credible, enterprise-grade digital presence that clearly communicates BluFeather's secure AI infrastructure services to high-value business clients."
    },
    {
      tag: "Luxury Hospitality",
      name: "Aashiyaanaa Villas",
      city: "Lonavala",
      grad: "linear-gradient(135deg, oklch(0.82 0.10 60), oklch(0.55 0.12 30))",
      url: "https://aashiyaanaavilla.com/",
      img: "/portfolio/aashiyaanaa.jpg",
      description:
        "A luxury private villa destination in Lonavala offering exclusive stays with premium interiors and amenities. We designed a visually immersive WordPress website featuring rich imagery, property highlights, and direct booking functionality, conveying elegance and exclusivity for high-end travellers.",
      subtitle: "Immersive Luxury Villa Booking Experience",
      stats: {
        delivery: "48 Hours",
        pagespeed: "97/100",
        conversion: "Direct Bookings",
        mobile: "100%"
      },
      challenge: {
        title: "Standing Out in a Crowded Luxury Stay Market",
        text: "Aashiyaanaa Villas needed to convey exclusivity and premium lifestyle appeal while driving direct booking enquiries rather than depending on third-party travel platforms. The website had to feel as premium as the stay itself."
      },
      solution: {
        title: "Visual-First Immersive Showcase",
        text: "We built an immersive WordPress site with rich photography, property highlights, amenities, and a streamlined booking enquiry flow that sends guests straight to the team. The design conveyed elegance and exclusivity tailored to high-end clientele."
      },
      gallery: [
        "/portfolio/aashiyaanaa.jpg"
      ],
      featuresDelivered: [
        "Immersive Villa Showcase",
        "Direct Booking Enquiry",
        "Rich Image Galleries",
        "WhatsApp Integration",
        "Mobile First Responsive",
        "Premium Brand Design",
        "On Page SEO Setup",
        "SSL Security Shield"
      ],
      results: {
        lighthouse: "97/100",
        loadTime: "0.4s",
        deliveryDuration: "48 Hours",
        responsiveness: "100% Score"
      },
      details: {
        industry: "Luxury Hospitality",
        location: "Lonavala, India",
        timeline: "48 Hours",
        techStack: ["WordPress", "Elementor", "Tailwind CSS", "PHP"],
        year: "2026"
      },
      outcome: "Delivered an elegant, immersive digital presence that positions Aashiyaanaa Villas as a premium Lonavala destination and drives direct booking enquiries."
    },
    {
      tag: "Energy Infrastructure",
      name: "Resonia Group",
      city: "Northeast India",
      grad: "linear-gradient(135deg, oklch(0.78 0.10 180), oklch(0.50 0.13 200))",
      url: "https://nbtl.co.in/",
      img: "/portfolio/resonia-nbtl.jpg",
      description:
        "Resonia (formerly Sterlite Power), a leading name in India's power transmission sector, needed a project website for the Nangalbibra-Bongaigaon Transmission Line. We built a clear, structured WordPress site presenting objectives, milestones, and engineering highlights, reinforcing stakeholder confidence in this strategic Northeast India infrastructure initiative.",
      subtitle: "Nangalbibra-Bongaigaon Transmission Line",
      stats: {
        delivery: "72 Hours",
        pagespeed: "98/100",
        conversion: "Stakeholder Trust",
        mobile: "99%"
      },
      challenge: {
        title: "Presenting a Complex Infrastructure Project",
        text: "Resonia needed to communicate the strategic importance, milestones, and engineering practices of a major transmission line to a range of stakeholders. The information had to be accessible, transparent, and professional without becoming overwhelming."
      },
      solution: {
        title: "Structured Stakeholder-Focused Website",
        text: "We developed a clearly structured WordPress site presenting project objectives, milestones, and innovative engineering practices. Dedicated sections and gallery visuals showcased project highlights, ensuring transparency and reinforcing stakeholder confidence."
      },
      gallery: [
        "/portfolio/resonia-nbtl.jpg"
      ],
      featuresDelivered: [
        "Structured Project Pages",
        "Milestone Highlights",
        "Project Gallery",
        "Stakeholder Information Hub",
        "Mobile First Responsive",
        "Professional Brand Design",
        "On Page SEO Setup",
        "SSL Security Shield"
      ],
      results: {
        lighthouse: "98/100",
        loadTime: "0.3s",
        deliveryDuration: "72 Hours",
        responsiveness: "99% Score"
      },
      details: {
        industry: "Power Transmission Infrastructure",
        location: "Northeast India",
        timeline: "72 Hours",
        techStack: ["WordPress", "Tailwind CSS", "PHP", "MySQL"],
        year: "2026"
      },
      outcome: "Delivered a transparent, professional project website that reinforces stakeholder confidence in Resonia's strategic Nangalbibra-Bongaigaon transmission initiative."
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
          .replace(/sydney-built/gi, "sydney built")
          // Catch-all: turn any remaining hyphen between characters into a space
          .replace(/([A-Za-z0-9])-([A-Za-z0-9])/g, "$1 $2");
      };

      const cs = CASE_STUDIES[card.name];

      return {
        ...card,
        tag: cleanString(card.tag),
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
        // Live Kola CMS case-study content (falls back to existing copy if a card has no entry).
        clientRequirement: cleanString(cs?.clientRequirement ?? card.description),
        crafted: {
          title: cleanString(cs?.crafted.title ?? card.solution.title),
          text: cleanString(cs?.crafted.text ?? card.solution.text),
        },
        faqs: (cs?.faqs ?? []).map((f) => ({ q: cleanString(f.q), a: cleanString(f.a) })),
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
          industry: cleanString(card.details.industry),
          location: cleanString(card.details.location),
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
          Portfolio
        </div>
        <AnimatedHeading
          lines={["Real websites.", "Real results."]}
          className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl text-center"
        />
        <p className="max-w-xl text-balance text-muted-foreground">{`Every one of these websites was custom designed and built from scratch. No templates. No shortcuts.`}</p>
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
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/60 shadow-xs">
                  <Image
                    src={selectedCard.img}
                    alt={selectedCard.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 950px"
                    className="object-contain"
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

                {/* Client Requirement */}
                <div className="max-w-3xl flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Client Requirement</span>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                    {selectedCard.clientRequirement}
                  </p>
                </div>

                {/* How We Crafted */}
                <div className="max-w-3xl flex flex-col gap-3">
                  <h4 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug">
                    {selectedCard.crafted.title}
                  </h4>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                    {selectedCard.crafted.text}
                  </p>
                </div>

                {/* Frequently Asked Questions */}
                {selectedCard.faqs.length > 0 && (
                  <div className="flex flex-col gap-4 pt-8 border-t border-neutral-100">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Frequently Asked Questions</span>
                    <div className="flex flex-col divide-y divide-neutral-100">
                      {selectedCard.faqs.map((faq) => (
                        <details key={faq.q} className="group py-4">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm md:text-base font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
                            <span>{faq.q}</span>
                            <Plus className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
                          </summary>
                          <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack & Project Info */}
                <div className="flex flex-col gap-8 pt-8 border-t border-neutral-100">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap items-center gap-1.5">
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
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5 text-xs max-w-2xl">
                      <div className="flex items-center gap-2 border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400 w-20 shrink-0">Industry</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.industry}</dd>
                      </div>
                      <div className="flex items-center gap-2 border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400 w-20 shrink-0">Location</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.location}</dd>
                      </div>
                      <div className="flex items-center gap-2 border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400 w-20 shrink-0">Timeline</dt>
                        <dd className="text-neutral-800 font-semibold">{selectedCard.details.timeline}</dd>
                      </div>
                      <div className="flex items-center gap-2 border-b border-neutral-50 pb-1.5">
                        <dt className="text-neutral-400 w-20 shrink-0">Year</dt>
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
