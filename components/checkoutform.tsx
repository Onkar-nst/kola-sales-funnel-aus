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
      className="rounded-3xl bg-background p-5 md:p-6"
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
          Checkout form
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em]">
          Tell us where to send your invoice.
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {planName} plan, ${dueOnce} due once
          {monthlyTotal > 0 ? ` + $${monthlyTotal}/mo` : ""}.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" id="checkout-name">
          <Input id="checkout-name" name="name" placeholder="Your name" required />
        </Field>
        <Field label="Email" id="checkout-email">
          <Input id="checkout-email" name="email" type="email" placeholder="you@business.com.au" required />
        </Field>
        <Field label="Phone" id="checkout-phone">
          <Input id="checkout-phone" name="phone" type="tel" placeholder="+61 ..." required />
        </Field>
        <Field label="Business name" id="checkout-business">
          <Input id="checkout-business" name="business" placeholder="Business name" required />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Current website or domain" id="checkout-domain">
          <Input id="checkout-domain" name="domain" placeholder="yourbusiness.com.au" />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Project notes" id="checkout-notes">
          <Textarea
            id="checkout-notes"
            name="notes"
            rows={4}
            placeholder="Tell us what you sell, your target customers, and anything you need on the site."
          />
        </Field>
      </div>

      {selectedAddons.length > 0 && (
        <div className="mt-5 rounded-2xl bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selected add-ons
          </p>
          <p className="mt-2 text-sm font-medium">{selectedAddons.join(", ")}</p>
        </div>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
      >
        Submit checkout request
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
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
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
