"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type CheckoutFormProps = {
  planName: string;
  dueOnce: number;
  monthlyTotal: number;
  selectedAddons: string[];
  onBack: () => void;
};

export function CheckoutForm({
  planName,
  dueOnce,
  monthlyTotal,
  selectedAddons,
  onBack,
}: CheckoutFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl bg-background p-8 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[oklch(0.55_0.16_150_/_0.12)] text-[oklch(0.42_0.14_150)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em]">
          Checkout request sent.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          We will review your details and send the confirmed project invoice before
          any payment is taken.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl bg-background p-6 md:p-9"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to add-ons
      </button>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Step 2 of 2 · Your project
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em]">
          Tell us about your project.
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {planName} plan, Rs. {dueOnce.toLocaleString("en-IN")} one time
          {monthlyTotal > 0 ? ` + Rs. ${monthlyTotal.toLocaleString("en-IN")}/mo` : ""}. No payment is taken here.
        </p>
      </div>

      <section className="mt-8">
        <SectionLabel step="1">Your details</SectionLabel>
        <div className="mt-5 grid gap-x-5 gap-y-5 sm:grid-cols-2">
          <Field label="Full name" id="checkout-name">
            <Input id="checkout-name" name="name" className="h-11 rounded-xl" placeholder="Your name" required />
          </Field>
          <Field label="Business name (optional)" id="checkout-business">
            <Input id="checkout-business" name="business" className="h-11 rounded-xl" placeholder="Business name" />
          </Field>
          <Field label="Your phone number" id="checkout-whatsapp">
            <Input id="checkout-whatsapp" name="whatsapp" type="tel" className="h-11 rounded-xl" placeholder="+91 ..." defaultValue="+91 " required />
          </Field>
          <Field label="Your email address" id="checkout-email">
            <Input id="checkout-email" name="email" type="email" className="h-11 rounded-xl" placeholder="you@business.in" required />
          </Field>
        </div>
      </section>

      <section className="mt-8 border-t border-hairline pt-8">
        <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field label="What type of business are you?" id="checkout-business-type">
          <Select id="checkout-business-type" name="businessType">
            <option value="">Select one</option>
            <option>Service Business</option>
            <option>Retail</option>
            <option>Clinic or Healthcare</option>
            <option>Real Estate</option>
            <option>Education</option>
            <option>Restaurant</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field label="How did you find us?" id="checkout-source">
          <Select id="checkout-source" name="source">
            <option value="">Select one</option>
            <option>Google</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Referral</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field label="Current website or domain (optional)" id="checkout-domain">
          <Input id="checkout-domain" name="domain" className="h-11 rounded-xl" placeholder="yourbusiness.in" />
        </Field>
        </div>
      </section>

      <section className="mt-8 border-t border-hairline pt-8">
        <SectionLabel step="2">Anything else?</SectionLabel>
        <div className="mt-5 grid gap-5">
          <Field label="Do you have any business file, menu, catalog? (optional)" id="checkout-file">
            <Input
              id="checkout-file"
              name="file"
              type="file"
              className="cursor-pointer rounded-xl file:mr-4 file:py-1 file:px-3 file:rounded-md file:border file:border-border file:bg-secondary file:text-foreground hover:file:bg-secondary/80 text-muted-foreground pt-2 pb-2 h-auto"
            />
          </Field>
          <Field label="Project notes (optional)" id="checkout-notes">
            <Textarea
              id="checkout-notes"
              name="notes"
              rows={4}
              className="rounded-xl"
              placeholder="Tell us what you sell, your target customers, and anything you need on the site."
            />
          </Field>
        </div>
      </section>

      {selectedAddons.length > 0 && (
        <div className="mt-8 rounded-2xl bg-surface p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selected add-ons
          </p>
          <p className="mt-2 text-sm font-medium">{selectedAddons.join(", ")}</p>
        </div>
      )}

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
      >
        Submit and get your quote within 24 hours
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function SectionLabel({
  step,
  children,
}: {
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-xs font-semibold text-background">
        {step}
      </span>
      <h4 className="font-display text-lg font-semibold tracking-[-0.01em] text-foreground">
        {children}
      </h4>
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-[13px] font-medium text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

function Select({
  id,
  name,
  children,
  value,
  onChange,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const controlled = value !== undefined;
  return (
    <select
      id={id}
      name={name}
      {...(controlled ? { value, onChange } : { defaultValue: "" })}
      required
      className="h-11 w-full rounded-xl border border-input bg-transparent px-3.5 py-1 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 cursor-pointer"
    >
      {children}
    </select>
  );
}
