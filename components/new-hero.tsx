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
            className="relative bg-ink overflow-hidden min-h-[100svh] flex flex-col pt-16"
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

            {/* main hero layout */}
            <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-[1400px] w-full px-6 py-12 md:py-20">
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

                {/* ── headline + mockups row ── */}
                <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
                    {/* left: heading + CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="font-display text-foreground text-[2.4rem] md:text-[clamp(2.8rem,6.2vw,5.6rem)] leading-[0.95] tracking-[-0.04em]"
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

                    {/* RIGHT COLUMN: Coding and Mobile Display Mockups (Increased Size) */}
                    <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[580px]">
                            {/* === DESKTOP BROWSER MOCKUP showing Kola Website === */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 w-[95%] overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F14] shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
                            >
                                {/* Top Browser Bar */}
                                <div className="flex items-center justify-between border-b border-white/10 bg-[#0A0D12] px-4 py-3">
                                    <div className="flex gap-1.5">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                    </div>
                                    
                                    <div className="flex h-5.5 w-full max-w-[220px] items-center justify-center gap-1.5 rounded bg-[#131920] px-2.5 text-[9.5px] font-medium text-white/50 border border-white/5">
                                        <span className="text-[8px] text-[oklch(0.65_0.19_150)]">🔒</span> kolacommunications.com
                                    </div>

                                    <div className="flex gap-1">
                                        <span className="text-[8px] text-white/30 font-mono">AU</span>
                                    </div>
                                </div>

                                {/* Kola Website Mini Preview */}
                                <div className="bg-[#0f1117] h-[340px] overflow-hidden flex flex-col select-none">
                                    {/* Mini Nav */}
                                    <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-[#0a0c10]">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="https://kolacommunications.com/KolaFavicon.jpg"
                                                alt="Kola"
                                                className="h-4 w-4 rounded object-cover"
                                            />
                                            <span className="text-[9px] font-bold text-white tracking-tight">Kola Communications</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[7px] text-white/40">Our Work</span>
                                            <span className="text-[7px] text-white/40">Pricing</span>
                                            <span className="text-[7px] text-white/40">FAQ</span>
                                            <span className="bg-[oklch(0.55_0.16_150)] text-white text-[6.5px] font-bold px-2 py-0.5 rounded">Start Project</span>
                                        </div>
                                    </div>

                                    {/* Mini Hero Section */}
                                    <div className="flex-1 flex flex-col items-start justify-center px-6 pt-4 pb-2" style={{ background: "linear-gradient(135deg, #0a0f0a 0%, #0d1410 100%)" }}>
                                        <div className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.55_0.16_150)]/10 border border-[oklch(0.55_0.16_150)]/20 px-2 py-0.5 text-[6px] font-bold text-[oklch(0.65_0.19_150)] uppercase tracking-widest mb-2">
                                            🇦🇺 Sydney Crafted
                                        </div>
                                        <h2 className="text-[17px] font-extrabold leading-tight text-white tracking-tight mb-1">
                                            We <span className="text-[oklch(0.65_0.19_150)]">code,</span> you{" "}
                                            <span className="text-[oklch(0.65_0.19_150)]">grow</span>
                                        </h2>
                                        <p className="text-[7.5px] text-white/50 mb-3 max-w-[180px] leading-relaxed">
                                            Hand coded. Blazing fast. Live in 48 hours.
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-[oklch(0.55_0.16_150)] text-white text-[7px] font-bold px-3 py-1 rounded">Get My $99 Website</span>
                                            <span className="border border-white/10 text-white/60 text-[7px] font-medium px-2 py-1 rounded">Book a Call</span>
                                        </div>

                                        {/* Mini stats bar */}
                                        <div className="mt-4 flex gap-4 border-t border-white/5 pt-3 w-full">
                                            <div className="text-center">
                                                <div className="text-[9px] font-bold text-white">48h</div>
                                                <div className="text-[5.5px] text-white/35 uppercase tracking-wider">Delivery</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[9px] font-bold text-white">4.2/5</div>
                                                <div className="text-[5.5px] text-white/35 uppercase tracking-wider">Google</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[9px] font-bold text-white">150+</div>
                                                <div className="text-[5.5px] text-white/35 uppercase tracking-wider">Clients</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[9px] font-bold text-[oklch(0.65_0.19_150)]">$99</div>
                                                <div className="text-[5.5px] text-white/35 uppercase tracking-wider">From</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* === MOBILE PHONE MOCKUP (Increased Size & Overlapping Bottom Right) === */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.3 }}
                                className="absolute -bottom-10 right-0 z-20 w-[180px] overflow-hidden rounded-[28px] border-[6px] border-slate-900 bg-background shadow-2xl sm:w-[200px]"
                            >
                                {/* Dynamic Island Notch */}
                                <div className="absolute left-1/2 top-2 z-30 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-900" />
                                
                                <div className="flex h-[320px] flex-col bg-background text-foreground px-3 pt-8 select-none">
                                    {/* Kola logo and name inside phone */}
                                    <div className="mb-3.5 flex items-center justify-between border-b border-hairline/30 pb-2">
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                src="https://kolacommunications.com/KolaFavicon.jpg"
                                                alt="Kola Favicon"
                                                className="h-4.5 w-4.5 rounded-md object-cover border border-hairline"
                                            />
                                            <span className="text-[9px] font-bold text-foreground tracking-tight">Kola</span>
                                        </div>
                                        <span className="text-[6.5px] font-semibold text-muted-foreground uppercase tracking-widest">
                                            SYDNEY
                                        </span>
                                    </div>

                                    {/* Phone Body */}
                                    <div className="flex flex-col items-center text-center mt-1">
                                        <div className="inline-flex items-center gap-0.5 rounded-full bg-[#101729]/5 border border-[#101729]/10 px-2 py-0.5 text-[6px] font-bold text-[#101729] uppercase tracking-wider mb-1.5">
                                            Premium Sites
                                        </div>
                                        <h3 className="text-[12px] font-extrabold leading-tight text-foreground tracking-tight max-w-[95%]">
                                            Websites that <span className="text-[#101729]">convert.</span>
                                        </h3>
                                        <p className="text-[6px] text-muted-foreground mt-0.5 max-w-[90%] font-medium">
                                            Sydney coded, blazing fast, live in 48 hours.
                                        </p>

                                        {/* Trust Card */}
                                        <div className="mt-3.5 w-full bg-surface border border-hairline/60 rounded-md p-2 text-left">
                                            <div className="text-[7.5px] font-bold text-foreground">
                                                ⭐ 4.2/5 Google Rating
                                            </div>
                                            <div className="text-[6.5px] text-muted-foreground mt-0.5 leading-tight">
                                                Trusted by Aussie local businesses.
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <div className="mt-4 w-full rounded-md bg-[#101729] py-1.5 text-center text-white text-[8px] font-bold shadow-soft">
                                            Start Project
                                        </div>

                                        {/* Graphic bars */}
                                        <div className="mt-4 flex gap-1 w-full justify-between items-end">
                                            <div className="h-8 bg-[#101729]/5 border border-[#101729]/10 flex-1 rounded-sm" />
                                            <div className="h-5 bg-[#101729]/10 border border-[#101729]/20 flex-1 rounded-sm" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

