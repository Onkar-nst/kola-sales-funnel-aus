"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 w-full h-16 transition-all duration-300 border-b bg-background text-foreground border-hairline ${
        scrolled ? "shadow-soft bg-background/95 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* ── Brand Logo & Text ── */}
        <a 
          href="#top" 
          onClick={(e) => handleScroll(e, "#top")} 
          className="flex h-full items-center gap-3 px-6 hover:bg-surface transition-all border-r border-hairline"
        >
          <img
            src="https://kolacommunications.com/KolaFavicon.jpg"
            alt="Kola Communications Logo"
            className="h-8 w-8 rounded-lg object-cover border border-hairline"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[14px] font-bold tracking-tight text-foreground font-display">Kola Communications</span>
            <span className="text-[8px] font-semibold text-muted-foreground mt-0.5 uppercase tracking-widest">
              🇦🇺 Sydney, AU
            </span>
          </div>
        </a>

        {/* ── Desktop Navigation Menu ── */}
        <div className="hidden md:flex h-full items-center">
          <a
            href="#showcase"
            onClick={(e) => handleScroll(e, "#showcase")}
            className="flex h-full items-center px-6 text-xs font-bold uppercase tracking-wider text-foreground/75 hover:text-foreground hover:bg-surface border-r border-hairline transition-all"
          >
            Our Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="flex h-full items-center px-6 text-xs font-bold uppercase tracking-wider text-foreground/75 hover:text-foreground hover:bg-surface border-r border-hairline transition-all"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "#pricing")}
            className="flex h-full items-center px-6 text-xs font-bold uppercase tracking-wider text-foreground/75 hover:text-foreground hover:bg-surface border-r border-hairline transition-all"
          >
            Pricing
          </a>
          <a
            href="#results-faq"
            onClick={(e) => handleScroll(e, "#results-faq")}
            className="flex h-full items-center px-6 text-xs font-bold uppercase tracking-wider text-foreground/75 hover:text-foreground hover:bg-surface border-r border-hairline transition-all"
          >
            FAQ
          </a>

          {/* Solid Action CTA block on far right using brand color */}
          <a
            href="#lead-capture"
            onClick={(e) => handleScroll(e, "#lead-capture")}
            className="flex h-full items-center justify-center bg-[#101729] text-white font-bold text-xs uppercase tracking-widest px-8 hover:bg-[#101729]/90 transition-all"
          >
            Start Project
          </a>
        </div>

        {/* ── Mobile Menu Toggle Button ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden h-full px-6 items-center justify-center border-l border-hairline hover:bg-surface text-foreground transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Menu Overlay / Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full bg-background border-b border-hairline md:hidden z-40 overflow-hidden"
          >
            <div className="flex flex-col">
              <a
                href="#showcase"
                onClick={(e) => handleScroll(e, "#showcase")}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/85 hover:bg-surface border-b border-hairline/60 transition-all"
              >
                Our Work
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/85 hover:bg-surface border-b border-hairline/60 transition-all"
              >
                About
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "#pricing")}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/85 hover:bg-surface border-b border-hairline/60 transition-all"
              >
                Pricing
              </a>
              <a
                href="#results-faq"
                onClick={(e) => handleScroll(e, "#results-faq")}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/85 hover:bg-surface border-b border-hairline/60 transition-all"
              >
                FAQ
              </a>
              <a
                href="#lead-capture"
                onClick={(e) => handleScroll(e, "#lead-capture")}
                className="flex items-center justify-center bg-[#101729] text-white font-bold text-xs uppercase tracking-widest py-5 hover:bg-[#101729]/90 transition-all"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
