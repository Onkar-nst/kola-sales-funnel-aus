import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Showcase } from "@/components/Showcase";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/Process";
import { Scarcity } from "@/components/Scarcity";
import { ResultsFAQ } from "@/components/ResultsFAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { PhoneCall } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16 md:pb-0">
      <Nav />
      <Hero />
      <TrustBar />
      <Pricing />
      <HowItWorks />
      <Showcase />
      <ResultsFAQ />
      <ProblemSolution />
      <Scarcity />
      <CTA />
      <Footer />

      {/* Floating Mobile Sticky CTA Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden bg-background/90 backdrop-blur-md border border-hairline p-2.5 rounded-2xl flex gap-2.5 shadow-elevated">
        <a
          href="#pricing"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-foreground py-3 text-xs font-bold text-background shadow-soft"
        >
          Get My $99 Website
        </a>
        <a
          href="https://calendly.com/kola-communications"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-surface-elevated text-foreground"
          aria-label="Book a call"
        >
          <PhoneCall className="h-4.5 w-4.5" />
        </a>
      </div>
    </main>
  );
}
