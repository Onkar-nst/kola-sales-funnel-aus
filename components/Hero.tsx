"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Menu, Coffee } from "lucide-react";

const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=33",
    "https://i.pravatar.cc/80?img=15",
    "https://i.pravatar.cc/80?img=54",
    "https://i.pravatar.cc/80?img=8",
];

const tickerItems = [
    { icon: "🎯", t: "HIGH PERFORMANCE SALES FUNNELS" },
    { icon: "⚡", t: "LIVE IN 48 HOURS" },
    { icon: "📈", t: "LEAD GENERATION & CONVERSION" },
    { icon: "💻", t: "HAND CODED NEXT JS SITES" },
    { icon: "🇦🇺", t: "100% SYDNEY CRAFTED" },
];

export function Hero() {
    const bgImage = "/hero-bg.png";

    return (
        <section
            id="top"
            className="relative bg-neutral-950 overflow-hidden min-h-[100svh] flex flex-col pt-16 pb-24 md:pb-40"
        >
            {/* background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Kola Communications Banner"
                    className="w-full h-full object-cover brightness-[0.45] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>

            {/* main hero layout */}
            <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-none w-full px-6 md:px-12 lg:px-16 py-12 md:py-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
                    {/* LEFT COLUMN: copy and CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        {/* ── avatars ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex -space-x-3 mb-4"
                        >
                            {avatars.map((a, i) => (
                                <div
                                    key={i}
                                    className="relative h-[52px] w-[52px] rounded-full p-[3px] bg-neutral-950"
                                    style={{ zIndex: avatars.length - i }}
                                >
                                    <div className="h-full w-full rounded-full p-[2px] bg-[#101729]">
                                        <div className="h-full w-full rounded-full overflow-hidden grayscale">
                                            <img
                                                src={a}
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* ── scrolling ticker ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative overflow-hidden max-w-[540px] mb-6 w-full"
                            style={{
                                maskImage:
                                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                            }}
                        >
                            <div className="flex marquee whitespace-nowrap">
                                {[...tickerItems, ...tickerItems, ...tickerItems].map((it, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-2 px-4 text-[11px] font-semibold text-white/60 tracking-[0.12em] uppercase font-display"
                                    >
                                        <span>{it.icon}</span>
                                        <span>{it.t}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── headline ── */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="font-display text-white text-[1.8rem] sm:text-[2.2rem] md:text-[clamp(2.5rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-0.04em]"
                        >
                            We <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">code,</span> you{" "}
                            <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">grow</span>
                            <br />
                            that&apos;s the deal
                        </motion.h1>

                        {/* ── CTA ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-8"
                        >
                            <a
                                href="#pricing"
                                className="inline-flex overflow-hidden rounded-xl group active:scale-95 transition-transform"
                            >
                                <div className="bg-[#101729] text-white px-6 py-3.5 text-[15px] font-bold transition-colors group-hover:bg-[#101729]/90">
                                    Get My Website
                                </div>
                                <div className="bg-[#101729] text-white px-4 py-3.5 flex items-center border-l border-white/15 transition-colors group-hover:bg-[#101729]/90">
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Real Kola Communications Website Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative w-full h-[320px] sm:h-auto flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full h-full max-w-[550px] mx-auto flex items-center justify-center sm:block">
                            <div className="absolute inset-0 bg-black/5 blur-[50px] dark:bg-white/5" aria-hidden />

                            {/* === DESKTOP WINDOW === */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden sm:block relative z-10 w-full sm:w-[85%] overflow-hidden rounded-xl border border-border/80 bg-background shadow-2xl"
                            >
                                {/* Top Browser Bar */}
                                <div className="flex items-center justify-between border-b border-border/60 bg-surface-elevated/50 px-4 py-2.5">
                                    <div className="flex gap-1.5">
                                        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                    </div>

                                    <div className="flex h-6 w-full max-w-[200px] items-center justify-center gap-1.5 rounded-md border border-border/50 bg-background px-2 text-[10px] font-medium text-muted-foreground/80">
                                        <Lock className="h-2.5 w-2.5" />
                                        kolacommunications.com
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-sm bg-border/50" />
                                        <div className="h-3 w-3 rounded-sm bg-border/50" />
                                    </div>
                                </div>

                                {/* Desktop Website Preview */}
                                <div className="relative bg-background p-5 sm:p-6 pb-0">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 2, ease: "circOut" }}
                                        className="absolute top-0 left-0 h-[2px] w-full origin-left bg-brand"
                                    />

                                    {/* Kola Navbar */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="mb-8 flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                src="https://kolacommunications.com/KolaFavicon.jpg"
                                                alt="Kola Favicon"
                                                className="h-4.5 w-4.5 rounded object-cover"
                                            />
                                            <span className="text-[11px] font-bold tracking-tight text-foreground">Kola</span>
                                        </div>
                                        <div className="hidden items-center gap-4 sm:flex text-[9px] font-medium text-muted-foreground">
                                            <span>Our Work</span>
                                            <span>Pricing</span>
                                            <span>FAQ</span>
                                        </div>
                                        <div className="hidden items-center gap-2 sm:flex">
                                            <span className="text-[9px] font-medium text-foreground">Sydney</span>
                                            <div className="rounded bg-brand px-2.5 py-1 text-[9px] font-semibold text-white">Start Project</div>
                                        </div>
                                        <Menu className="h-4 w-4 text-muted-foreground sm:hidden" />
                                    </motion.div>

                                    {/* Kola Hero Content Area */}
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4, duration: 0.4 }}
                                            className="mb-4 flex items-center gap-1.5 rounded-full border border-border/85 bg-surface-elevated px-2.5 py-0.5 text-[8px] font-semibold text-muted-foreground"
                                        >
                                            🇦🇺 Sydney Crafted & Coded
                                        </motion.div>

                                        <motion.h2
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, duration: 0.5 }}
                                            className="mb-3 max-w-[90%] text-[20px] font-bold leading-tight tracking-tight text-foreground sm:text-[24px]"
                                        >
                                            We <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">code,</span> you <span className="bg-gradient-to-r from-[oklch(0.75_0.12_260)] to-[oklch(0.70_0.15_300)] bg-clip-text text-transparent">grow</span>
                                        </motion.h2>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.8, duration: 0.5 }}
                                            className="mb-6 max-w-[80%] text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]"
                                        >
                                            Blazing fast Next.js sales funnels for local Aussie businesses. Hand-crafted in under 48 hours. Built for maximum conversions.
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                            className="mb-8 flex w-full justify-center gap-3"
                                        >
                                            <div className="flex h-8 items-center justify-center rounded-md bg-brand px-4 text-[10px] font-semibold text-white">
                                                Get My $99 Website
                                            </div>
                                            <div className="flex h-8 items-center justify-center gap-1.5 rounded-md border border-border px-4 text-[10px] font-semibold text-foreground">
                                                Book a Call
                                            </div>
                                        </motion.div>

                                        {/* Desktop: Analytics & Performance Dashboard Mockup */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2, duration: 0.7 }}
                                            className="relative mt-2 flex h-[190px] w-full max-w-[95%] overflow-hidden rounded-t-xl border-x border-t border-border/60 bg-surface-elevated/20 shadow-2xl"
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                                alt="Kola Funnel Performance Metrics"
                                                className="w-full h-full object-cover object-top opacity-85 transition-transform duration-700 hover:scale-102"
                                            />

                                            {/* Magic Overlays: Tints the image beautifully */}
                                            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay pointer-events-none" aria-hidden />
                                            <div className="absolute inset-0 bg-brand/5 pointer-events-none" aria-hidden />

                                            {/* Fade out at the bottom edge */}
                                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* === MOBILE PHONE MOCKUP (Overlapping Bottom Right) === */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
                                className="relative mx-auto sm:absolute sm:-bottom-6 sm:-right-4 z-20 w-[180px] sm:w-[150px] overflow-hidden rounded-[24px] border-[6px] border-slate-900 bg-background shadow-2xl"
                            >
                                {/* Dynamic Island Notch */}
                                <div className="absolute left-1/2 top-1.5 z-30 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-900" />

                                <div className="flex h-[280px] flex-col px-3 pt-7 select-none text-foreground">
                                    {/* Mobile Nav */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                src="https://kolacommunications.com/KolaFavicon.jpg"
                                                alt="Kola Favicon"
                                                className="h-3.5 w-3.5 rounded object-cover"
                                            />
                                            <span className="text-[7px] font-bold tracking-tight text-foreground">Kola</span>
                                        </div>
                                        <Menu className="h-3 w-3 text-foreground" />
                                    </div>

                                    {/* Mobile Content */}
                                    <div className="flex flex-col items-center text-center mt-1">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8, duration: 0.4 }}
                                            className="mb-2 flex items-center gap-1 rounded-full border border-border/80 bg-surface-elevated px-1.5 py-0.5 text-[5px] font-semibold text-muted-foreground"
                                        >
                                            ⚡ 100% Performance
                                        </motion.div>

                                        <h3 className="mb-1.5 max-w-[95%] text-[10px] font-bold leading-tight tracking-tight text-foreground">
                                            Websites that convert.
                                        </h3>

                                        <p className="mb-3 max-w-[90%] text-[5px] leading-relaxed text-muted-foreground">
                                            Sydney-coded Next.js speed.
                                        </p>

                                        <div className="mb-4 flex w-full justify-center gap-1.5">
                                            <div className="flex h-4 items-center justify-center rounded-[2px] bg-brand px-2 text-[5px] font-semibold text-white">
                                                Start Project
                                            </div>
                                            <div className="flex h-4 items-center justify-center gap-1 rounded-[2px] border border-border px-2 text-[5px] font-semibold text-foreground">
                                                Features
                                            </div>
                                        </div>

                                        {/* Mobile: Real Analytics Section */}
                                        <div className="relative mt-auto flex h-[110px] w-full overflow-hidden rounded-t-lg border-x border-t border-border/60 bg-surface-elevated/20 shadow-inner">
                                            <img
                                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                                alt="Kola Funnel Performance Metrics Mobile"
                                                className="w-full h-full object-cover object-top opacity-85"
                                            />

                                            {/* Magic Overlays */}
                                            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay pointer-events-none" aria-hidden />
                                            <div className="absolute inset-0 bg-brand/5 pointer-events-none" aria-hidden />
                                            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}