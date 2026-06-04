"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border border-hairline/30 shadow-elevated" 
            : "bg-transparent"
          }`}
      >
        <a href="#top" onClick={(e) => handleScroll(e, "#top")} className="flex items-center gap-3 font-display text-sm md:text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <img
            src="https://kolacommunications.com/KolaFavicon.jpg"
            alt="Kola Communications Logo"
            className="h-9 w-9 rounded-xl object-cover shadow-soft border border-hairline/20"
          />
          <div className="flex flex-col items-start leading-none hidden sm:flex">
            <span className="text-[15px] font-bold tracking-tight text-foreground">Kola Communications</span>
            <span className="text-[10px] font-medium text-muted-foreground mt-1 flex items-center gap-1 uppercase tracking-widest">
              🇦🇺 Sydney, AU
            </span>
          </div>
        </a>

        {/* ── Navigation Links ── */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/40 backdrop-blur-sm border border-hairline/20">
          <a href="#showcase" onClick={(e) => handleScroll(e, "#showcase")} className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-surface transition-all">Our Work</a>
          <a href="#how" onClick={(e) => handleScroll(e, "#how")} className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-surface transition-all">Process</a>
          <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-surface transition-all">Pricing</a>
          <a href="#results-faq" onClick={(e) => handleScroll(e, "#results-faq")} className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-surface transition-all">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#lead-capture"
            onClick={(e) => {
              handleScroll(e, "#lead-capture");
              // Add a pulse effect to the form when navigated
              setTimeout(() => {
                const form = document.querySelector("#lead-capture");
                if (form) {
                  form.classList.add("ring-4", "ring-brand/50", "transition-all", "duration-500");
                  setTimeout(() => form.classList.remove("ring-4", "ring-brand/50"), 1000);
                }
              }, 500);
            }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background shadow-elevated sm:text-sm sm:px-6 sm:py-2.5 cursor-pointer"
          >
            <span>Start Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}

