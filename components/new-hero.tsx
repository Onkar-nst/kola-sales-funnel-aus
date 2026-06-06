"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=33",
    "https://i.pravatar.cc/80?img=15",
    "https://i.pravatar.cc/80?img=54",
    "https://i.pravatar.cc/80?img=8",
];

const tickerItems = [
    { icon: "🎯", t: "RECRUITMENT & TALENT ACQUISITION" },
    { icon: "📄", t: "CV SCRUTINY" },
    { icon: "🤝", t: "INTERVIEW COORDINATION" },
    { icon: "✦", t: "QUALITY CANDIDATE PLACEMENT" },
];

export function Hero() {
    const bgImage =
        "https://framerusercontent.com/images/Q94oslWo6RLM85eXJ5lNnH2FMc.jpg?width=1920&height=1080";

    return (
        <section
            id="top"
            className="relative bg-ink overflow-hidden h-[100svh] flex flex-col"
        >
            {/* background image */}
            <div className="absolute inset-0">
                <Image
                    src={bgImage}
                    alt="JRV Consulting"
                    fill
                    className="object-cover brightness-[0.62] contrast-[1.1]"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-ink/20 to-transparent" />
            </div>

            {/* spacer pushes content to lower ~40% of viewport */}
            <div className="flex-1" />

            {/* all hero content lives here */}
            <div className="relative mx-auto max-w-[1400px] w-full px-6 pb-14 lg:pb-20">
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
                            className="relative h-[52px] w-[52px] rounded-full p-[3px] bg-[#0c1f1a]"
                            style={{ zIndex: avatars.length - i }}
                        >
                            <div className="h-full w-full rounded-full p-[2px] bg-lime">
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
                    className="relative overflow-hidden max-w-[520px] mb-6"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    }}
                >
                    <div className="flex marquee-track whitespace-nowrap">
                        {[...tickerItems, ...tickerItems, ...tickerItems].map((it, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 text-[11px] font-medium text-lime tracking-[0.12em] uppercase font-display"
                            >
                                <span>{it.icon}</span>
                                <span>{it.t}</span>
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* ── headline + description row ── */}
                <div className="grid lg:grid-cols-12 gap-8 items-end">
                    {/* left: heading + CTA */}
                    <div className="lg:col-span-7">
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="font-display text-white text-[2.4rem] md:text-[clamp(2.8rem,6.2vw,5.6rem)] leading-[0.95] tracking-[-0.04em]"
                        >
                            We <span className="text-lime">place,</span> you{" "}
                            <span className="text-lime">grow</span>
                            <br />
                            — that&apos;s the deal
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-8"
                        >
                            <a
                                href="#contact"
                                className="inline-flex overflow-hidden rounded-md group active:scale-95 transition-transform"
                            >
                                <div className="bg-lime text-[#0f2b2c] px-6 py-3.5 text-[15px] font-bold transition-colors group-hover:bg-white">
                                    Get in Touch
                                </div>
                                <div className="bg-lime text-[#0f2b2c] px-4 py-3.5 flex items-center border-l border-black/15 transition-colors group-hover:bg-white">
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* right: description */}
                    <div className="lg:col-span-5 lg:pb-2">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lime text-[17px] md:text-[19px] leading-[1.45] lg:text-right max-w-sm ml-auto font-medium"
                        >
                            JRV Consulting helps organisations manage their most valuable
                            asset , people. Quality candidate placement, calibrated to your
                            culture and goals, every step of the way.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

