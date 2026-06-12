"use client";

import { Mail, Heart, Calendar, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="relative border-t border-hairline bg-surface px-6 pt-16 pb-24 md:pb-20 overflow-hidden"
      style={{ paddingBottom: "calc(3rem + env(safe-area-inset-bottom))" }}
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">
          
          {/* Brand & Mission Statement (Human, Authentic) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground">
              <img
                src="https://kolacommunications.com/KolaFavicon.jpg"
                alt="Kola Communications Logo"
                className="h-8 w-8 rounded-xl object-cover shadow-soft border border-hairline"
              />
              Kola Communications
            </div>
            
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              We design and code outcome driven, conversion focused websites for Indian businesses. We don&apos;t use clunky page builders, templates, or one size fits all themes. Every site is built by hand in Mumbai to ensure blazing load speeds and dominant SEO performance.
            </p>

            <p className="mt-3 text-xs font-medium text-muted-foreground/80">
              Founded by Anmol Kanodia ·{" "}
              <a
                href="https://kolacommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                kolacommunications.com
              </a>
            </p>

            {/* Address, phone & GST */}
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                Mumbai, Maharashtra, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <a href="tel:+919999999999" className="transition-colors hover:text-foreground">
                  +91 99999 99999
                </a>
              </li>
            </ul>

            {/* Payment methods & GST */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {["UPI", "Razorpay", "Bank Transfer"].map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-hairline bg-surface-elevated px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {m}
                </span>
              ))}
              <span className="rounded-md border border-hairline bg-surface-elevated px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                GST No: XXXXXXXXXXXXXXX
              </span>
            </div>
          </div>

          {/* Quick Jumps */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground font-medium">
              <li>
                <a href="#about" className="transition-colors hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#showcase" className="transition-colors hover:text-foreground">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-foreground">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#results-faq" className="transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Real Contact/Booking */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Let&apos;s Chat
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <a href="mailto:hello@kolacommunications.com" className="transition-colors hover:text-foreground">
                  hello@kolacommunications.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <a 
                  href="https://calendly.com/kola-communications" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-colors hover:text-foreground"
                >
                  Book a 15m Call
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sincere Copyright & Details */}
        <div className="mt-16 pt-8 border-t border-hairline/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>© {new Date().getFullYear()} Kola Communications. All rights reserved.</span>
            <span className="text-[10px] text-muted-foreground/75">
              Registered Indian Business · Mumbai, Maharashtra
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/80">
            <span>Built by hand in Mumbai with</span>
            <Heart className="h-3 w-3 text-accent-coral fill-current" />
          </div>

        </div>
      </div>
    </footer>
  );
}
