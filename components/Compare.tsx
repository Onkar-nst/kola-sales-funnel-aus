"use client";

import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function Compare() {
  const rows = [
    { f: "Custom design", us: true, wix: false, agency: true },
    { f: "Mobile-first build", us: true, wix: true, agency: true },
    { f: "48-hour delivery", us: true, wix: false, agency: false },
    { f: "Australian designers", us: true, wix: false, agency: true },
    { f: "Lead-capture forms", us: true, wix: "Limited", agency: true },
    { f: "SEO foundations", us: true, wix: "Add-on", agency: true },
    { f: "You own the code", us: true, wix: false, agency: "Sometimes" },
    { f: "Up-front cost", us: "$99", wix: "$0 + $30/mo", agency: "$3,000+" },
    { f: "30-day money-back", us: true, wix: false, agency: false },
  ];
  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow="Compared"
        title={
          <>
            Why pay $3,000 for what we deliver in <span className="text-gradient">48 hours?</span>
          </>
        }
      />
      <div className="overflow-hidden rounded-3xl hairline bg-surface-elevated shadow-soft">
        <div className="grid grid-cols-4 gap-px bg-hairline text-sm">
          <div className="bg-surface-elevated p-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Feature
          </div>
          <div className="bg-foreground p-4 text-center text-xs font-semibold uppercase tracking-widest text-background">
            Kola
          </div>
          <div className="bg-surface-elevated p-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            DIY builders
          </div>
          <div className="bg-surface-elevated p-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Agency
          </div>
          {rows.map((r, i) => (
            <RowCells key={i} row={r} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Cell({ v, highlight = false }: { v: boolean | string; highlight?: boolean }) {
  return (
    <div
      className={`p-4 text-center text-sm ${
        highlight ? "bg-foreground/[0.03]" : "bg-surface-elevated"
      }`}
    >
      {v === true ? (
        <Check className="mx-auto h-4 w-4 text-[oklch(0.55_0.16_150)]" />
      ) : v === false ? (
        <X className="mx-auto h-4 w-4 text-muted-foreground/60" />
      ) : (
        <span className="text-foreground/80">{v}</span>
      )}
    </div>
  );
}
export function RowCells({ row }: { row: { f: string; us: boolean | string; wix: boolean | string; agency: boolean | string } }) {
  return (
    <>
      <div className="bg-surface-elevated p-4 text-sm">{row.f}</div>
      <Cell v={row.us} highlight />
      <Cell v={row.wix} />
      <Cell v={row.agency} />
    </>
  );
}

