"use client";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};




export function Marquee() {
  const items = [
    "Cafés",
    "Plumbers",
    "Florists",
    "Personal trainers",
    "Dentists",
    "Mechanics",
    "Photographers",
    "Real estate",
    "Lawyers",
    "Stylists",
    "Builders",
    "Bakeries",
    "Yoga studios",
    "Accountants",
  ];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-hairline bg-surface py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Built for Australian small businesses
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="flex w-max gap-10 marquee">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 font-display text-2xl font-medium tracking-tight text-foreground/40 md:text-3xl"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

