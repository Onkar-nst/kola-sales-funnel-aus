"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";


const ease = [0.22, 1, 0.36, 1] as const;
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
// };

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className="inline-flex items-center gap-2 rounded-full hairline bg-surface-elevated/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
    >
      <Sparkles className="h-3.5 w-3.5 text-brand" />
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`mb-14 flex flex-col gap-4 ${a}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-xl text-balance text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function PrimaryCTA({ children, href = "#pricing" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02] active:scale-[0.99]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function GhostCTA({ children, href = "#included" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full hairline bg-surface-elevated px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
    >
      {children}
    </a>
  );
}

/* Animated number counter */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 20 });
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(() => {
    const decimalPlaces = to.toString().split(".")[1]?.length || 0;
    return spring.on("change", (v) => {
      setVal(v.toFixed(decimalPlaces));
    });
  }, [spring, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

