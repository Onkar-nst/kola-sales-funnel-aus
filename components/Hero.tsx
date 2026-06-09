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
    const bgImage = "/taj-mahal-bg.png";

    return (
        <section
            id="top"
            className="relative bg-neutral-950 overflow-hidden min-h-[100svh] flex flex-col pt-16 pb-28 md:pb-48"
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
                    <div className="lg:col-span-8 flex flex-col items-start pt-12 md:pt-24 lg:pt-32">
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
                                <div className="bg-white text-neutral-950 px-6 py-3.5 text-[15px] font-bold transition-colors group-hover:bg-neutral-100">
                                    Get My Website
                                </div>
                                <div className="bg-white text-neutral-950 px-4 py-3.5 flex items-center border-l border-neutral-200 transition-colors group-hover:bg-neutral-100">
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}