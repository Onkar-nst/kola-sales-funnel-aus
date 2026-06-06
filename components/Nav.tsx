"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/* ── Genie vanish / materialize animation variants ── */
const genieHeader = {
  hidden: { opacity: 0, y: -30, scale: 0.92, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const genieChild = {
  hidden: { opacity: 0, y: -12, scale: 0.85, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const navLinks = [
  { label: "Our Work", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#results-faq" },
];

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
      variants={genieHeader}
      initial="hidden"
      animate="visible"
      className={`fixed inset-x-0 top-0 z-50 w-full h-16 transition-all duration-300 border-b bg-background text-foreground border-hairline ${
        scrolled ? "shadow-soft bg-background/95 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* ── Brand Logo & Text ── */}
        <motion.a
          href="#top"
          onClick={(e) => handleScroll(e, "#top")}
          custom={0}
          variants={genieChild}
          initial="hidden"
          animate="visible"
          className="flex h-full items-center gap-3 px-6 hover:bg-surface transition-all border-r border-hairline"
        >
          <img
            src="https://kolacommunications.com/KolaFavicon.jpg"
            alt="Kola Favicon"
            className="h-8 w-8 rounded-lg object-cover border border-hairline"
          />
          <img
            src="https://oskiqdthpejzihtjybwc.supabase.co/storage/v1/object/public/kola-website%20images/logo-2.png"
            alt="Kola Communications Logo"
            className="h-8 w-auto object-contain"
          />
        </motion.a>

        {/* ── Desktop Navigation Menu ── */}
        <div className="hidden md:flex h-full items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              custom={i + 1}
              variants={genieChild}
              initial="hidden"
              animate="visible"
              className="flex h-full items-center px-6 text-xs font-bold uppercase tracking-wider text-foreground/75 hover:text-foreground hover:bg-surface border-r border-hairline transition-all"
            >
              {link.label}
            </motion.a>
          ))}

          {/* Solid Action CTA block on far right using brand color */}
          <motion.a
            href="#lead-capture"
            onClick={(e) => handleScroll(e, "#lead-capture")}
            custom={navLinks.length + 1}
            variants={genieChild}
            initial="hidden"
            animate="visible"
            className="flex h-full items-center justify-center bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest px-8 transition-all"
          >
            Start Project
          </motion.a>
        </div>

        {/* ── Mobile Menu Toggle Button ── */}
        <motion.button
          custom={1}
          variants={genieChild}
          initial="hidden"
          animate="visible"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden h-full px-6 items-center justify-center border-l border-hairline hover:bg-surface text-foreground transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground/85 hover:bg-surface border-b border-hairline/60 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#lead-capture"
                onClick={(e) => handleScroll(e, "#lead-capture")}
                className="flex items-center justify-center bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest py-5 transition-all"
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
