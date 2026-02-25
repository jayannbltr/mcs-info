import { ScrollReveal } from "./scroll-reveal"

export function AdvantageSection() {
  return (
    <section className="py-24 lg:py-28" style={{ backgroundColor: '#F8E7E6' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 shadow-lg lg:p-16">
            {/* Top accent */}
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

            <div className="relative z-10">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                The Solution
              </span>
              <h2 className="mb-5 font-serif text-3xl tracking-tight text-foreground lg:text-4xl">
                The MCS Advantage
              </h2>
              <p className="max-w-3xl text-base leading-[1.75] text-muted-foreground lg:text-lg">
                MCS enables real-time multilingual communication within secure, isolated
                workspaces. Teams communicate in their preferred language while the system
                translates instantly within structured channels and groups — no external
                tools, no delays, no data exposure.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
