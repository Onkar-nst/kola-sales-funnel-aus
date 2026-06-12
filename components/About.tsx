import Image from "next/image";
import team from "@/app/team.jpg";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const cards = [
    { t: "Custom, Never Templated", d: "Every business gets a site built around what they actually need, not a template filled in with their logo and colour." },
    { t: "One Team, One Price", d: "We handle design, development, content structure, SEO setup, and launch. No coordinating between five different people." },
    { t: "Built For Your Industry", d: "We've built for clinics, consultants, real estate firms, coaches, exporters, and D2C brands across India." },
];

export function About() {
    return (
        <section id="about" className="dark bg-black text-white border-y border-neutral-900">
            <div className="mx-auto max-w-none w-full px-6 md:px-12 lg:px-16 py-24 md:py-32">
                {/* Section Header */}
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white inline-block rounded-full animate-pulse" /> About Kola
                </div>
                
                <div className="grid lg:grid-cols-12 gap-10 items-start border-b border-neutral-900 pb-16">
                    <AnimatedHeading
                        lines={["We're Kola Communications,", "a Mumbai based agency that has delivered 150+ websites."]}
                        className="lg:col-span-7 font-display text-balance text-[clamp(1.8rem,4.2vw,3.2rem)] leading-[1.1] tracking-[-0.02em]"
                    />
                    <div className="lg:col-span-5 text-neutral-400 text-[15px] leading-relaxed">
                        <p>
                            We don&apos;t believe in one size fits all websites. Every business we work with gets a site built around what they actually need, not a template filled in with their logo and colour.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-flex items-center gap-2 mt-8 rounded-full bg-white text-black pl-5 pr-2.5 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-soft group"
                        >
                            Get Started
                            <span className="rounded-full bg-black/10 p-1.5"><ArrowRight className="h-3.5 w-3.5" /></span>
                        </a>
                    </div>
                </div>

                {/* Boxy Grid (Non-segregated, separated by borders) */}
                <div className="grid md:grid-cols-3 gap-0 border-b border-neutral-900">
                    {cards.map((c) => (
                        <div 
                            key={c.t} 
                            className="py-12 md:py-16 md:px-8 first:md:pl-0 last:md:pr-0 border-b border-neutral-900 md:border-b-0 md:border-r border-neutral-900 last:border-r-0"
                        >
                            <div className="rounded bg-white/[0.04] border border-white/10 px-3 py-1.5 inline-block font-mono text-[10px] text-white uppercase tracking-wider font-bold">
                                {c.t}
                            </div>
                            <p className="mt-6 text-neutral-400 text-[14.5px] leading-relaxed">{c.d}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Image Block */}
                <div className="mt-16 relative rounded-3xl overflow-hidden border border-neutral-900 shadow-elevated">
                    <Image 
                        src={team} 
                        alt="Kola Communications team" 
                        className="w-full h-[420px] md:h-[560px] object-cover" 
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-8 left-8 font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        KOLA<span className="text-neutral-400 font-medium">COMMUNICATIONS</span><span className="text-white">.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
