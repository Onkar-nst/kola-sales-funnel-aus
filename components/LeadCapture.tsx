"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone, Building2, MapPin, Globe } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function LeadCapture() {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    city: "",
    hasWebsite: "",
    contactInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.industry || !formData.contactInfo) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <Section id="lead-capture" className="relative overflow-hidden bg-background">
      <SectionHeader
        eyebrow="Get Started"
        title="Tell us about your business."
        subtitle="Not ready to purchase directly? Share a few details about your services, and our Sydney team will send you a tailored website recommendation and performance plan within 24 hours."
      />

      <div className="mx-auto max-w-xl relative z-10 mt-8">
        <motion.div
          layout
          className="rounded-3xl bg-surface-elevated p-8 md:p-10 hairline shadow-elevated"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Business Name */}
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Business Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground/60" />
                    <input
                      id="businessName"
                      type="text"
                      required
                      placeholder="e.g. Sydney Dental Care"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-2xl bg-surface/50 border border-hairline py-3 pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-[#101729] focus:bg-surface focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                {/* Industry Select */}
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Industry / Category <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="industry"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full rounded-2xl bg-surface/50 border border-hairline py-3 px-4 text-sm text-foreground outline-none transition-all focus:border-[#101729] focus:bg-surface focus:ring-1 focus:ring-brand appearance-none"
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="Trades">Trades & Construction</option>
                    <option value="Hospitality">Hospitality (Café, Restaurant)</option>
                    <option value="Health">Health, Medical & Beauty</option>
                    <option value="Retail">Retail & Local Shops</option>
                    <option value="Professional">Professional Services (Agency, Consulting)</option>
                    <option value="Other">Other Aussie Business</option>
                  </select>
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label htmlFor="city" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Your City / Suburb
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground/60" />
                    <input
                      id="city"
                      type="text"
                      placeholder="e.g. Melbourne, VIC"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-2xl bg-surface/50 border border-hairline py-3 pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-[#101729] focus:bg-surface focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                {/* Current Website? */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Do you have a current website?
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-foreground">
                      <input
                        type="radio"
                        name="hasWebsite"
                        value="yes"
                        checked={formData.hasWebsite === "yes"}
                        onChange={() => setFormData({ ...formData, hasWebsite: "yes" })}
                        className="h-4 w-4 accent-brand"
                      />
                      Yes, it needs a redesign
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-foreground">
                      <input
                        type="radio"
                        name="hasWebsite"
                        value="no"
                        checked={formData.hasWebsite === "no"}
                        onChange={() => setFormData({ ...formData, hasWebsite: "no" })}
                        className="h-4 w-4 accent-brand"
                      />
                      No, starting fresh
                    </label>
                  </div>
                </div>

                {/* Contact Email or Phone */}
                <div className="space-y-2">
                  <label htmlFor="contactInfo" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Your Phone or Email <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground/60" />
                    <input
                      id="contactInfo"
                      type="text"
                      required
                      placeholder="e.g. name@company.com.au or 0400 000 000"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full rounded-2xl bg-surface/50 border border-hairline py-3 pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-[#101729] focus:bg-surface focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 rounded-2xl bg-foreground py-4 text-sm font-medium text-background transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <span>Get My Free Recommendation</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  🔒 No spam. No pushy sales calls. Just a high-value review from our local team.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease }}
                className="text-center py-8"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#101729]/10 text-[#101729] mb-6">
                  <CheckCircle2 className="h-10 w-10 stroke-[1.5]" />
                </div>
                <h3 className="text-brandxl font-semibold text-foreground tracking-tight">
                  Strategy Request Received!
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto">
                  Our Sydney team is already reviewing your details and will get back to you with a personalized recommendation within 24 hours.
                </p>

                <div className="mt-8 border-t border-hairline pt-6">
                  <p className="text-xs text-muted-foreground">
                    Want to secure a build slot immediately instead?
                  </p>
                  <a
                    href="#pricing"
                    className="inline-block mt-3 text-xs font-semibold text-[#101729] hover:underline"
                  >
                    View Pricing & Packages →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
