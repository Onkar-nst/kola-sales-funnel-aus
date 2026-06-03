"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";


const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-x-0 top-3 z-50 px-3"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 transition-all ${scrolled ? "glass hairline shadow-soft" : "bg-transparent"
          }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-sm md:text-lg font-semibold tracking-tight">
          <img
            src="https://kolacommunications.com/KolaFavicon.jpg"
            alt="Kola Communications Logo"
            className="h-8 w-8 rounded-lg object-cover shadow-soft"
          />
          <div className="flex flex-col items-start leading-none hidden sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">Kola Communications</span>
            <span className="text-[10px] font-medium text-muted-foreground mt-0.5 flex items-center gap-1">
              🇦🇺 Sydney, AU
            </span>
          </div>
        </a>

        {/* ── Navigation Links ── */}
        <div className="hidden md:flex items-center">
          <a href="#about" className="px-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-r border-border/50">About</a>
          <a href="#solutions" className="px-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-r border-border/50">Solutions</a>
          <div className="px-4 flex items-center gap-1 cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-r border-border/50">
            Products <ChevronDown className="h-3 w-3" />
          </div>
          <a href="#resources" className="px-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#0f172a] px-5 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02] sm:text-sm sm:px-6 sm:py-2.5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

