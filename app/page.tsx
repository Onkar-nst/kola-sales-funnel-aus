import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
// import { ProblemSolution } from "@/components/ProblemSolution";
import { Showcase } from "@/components/Showcase";
import { HowItWorks } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Scarcity } from "@/components/Scarcity";
import { ResultsFAQ } from "@/components/ResultsFAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-foreground pb-16 md:pb-0">
      <Nav />
      <Hero />
      <TrustBar />
      <Pricing />
      <About />
      <Showcase />
      <Scarcity />
      <HowItWorks/>
      <ResultsFAQ />
      {/* <ProblemSolution /> */}

      {/* CTA is desktop only; Footer shows on all viewports at the very end */}
      <div className="hidden md:block">
        <CTA />
      </div>
      <Footer />

      {/* Floating Mobile Sticky CTA Bar, hidden so mobile ends at the FAQ */}
      <div className="hidden fixed bottom-4 left-4 right-4 z-40 bg-background/90 backdrop-blur-md border border-hairline p-2.5 rounded-2xl gap-2.5 shadow-elevated">
        <a
          href="#pricing"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-foreground py-3 text-xs font-bold text-background shadow-soft"
        >
          Get My Website
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

      {/* Sticky WhatsApp button, fixed bottom-right on every page */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-105 active:scale-95"
        style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
