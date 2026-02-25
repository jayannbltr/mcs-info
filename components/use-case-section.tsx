import { Check, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const steps = [
  "Japanese managers communicate in Japanese",
  "Philippine team members respond in English",
  "Messages are translated in real time within the same workspace",
  "Channels separate operations, QA, and client discussions",
  "Confidential data remains isolated within the company workspace",
]

export function UseCaseSection() {
  return (
    <section id="usecase" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              In Practice
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {"Japan\u2013Philippines Operational Collaboration"}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Chat demo */}
          <ScrollReveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

              <div className="flex flex-col gap-3.5">
                {/* Japanese message */}
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm">
                    {"\u{1F1EF}\u{1F1F5}"}
                  </div>
                  <div className="rounded-xl border border-border bg-secondary p-3 max-w-xs">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Japanese
                    </span>
                    <span className="text-[13px] leading-relaxed text-foreground">
                      {"今月のレポートを確認してください。修正が必要な箇所があります。"}
                    </span>
                  </div>
                </div>

                {/* Translation divider */}
                <div className="flex items-center gap-3 px-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Zap className="h-3 w-3 text-primary" />
                    MCS instant translation
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Auto-translated message */}
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm text-emerald-600">
                    {"->"}
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 max-w-xs">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                      {"Auto-translated \u00B7 English"}
                    </span>
                    <span className="text-[13px] leading-relaxed text-foreground">
                      {"Please check this month's report. There are areas that need revision."}
                    </span>
                  </div>
                </div>

                {/* Philippine response */}
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm">
                    {"\u{1F1F5}\u{1F1ED}"}
                  </div>
                  <div className="rounded-xl border border-border bg-secondary p-3 max-w-xs">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                      English
                    </span>
                    <span className="text-[13px] leading-relaxed text-foreground">
                      {"Understood! I'll review the report and send the revisions by end of day."}
                    </span>
                  </div>
                </div>

                {/* Translation divider */}
                <div className="flex items-center gap-3 px-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Zap className="h-3 w-3 text-primary" />
                    MCS instant translation
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Auto-translated Japanese */}
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm text-emerald-600">
                    {"->"}
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 max-w-xs">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                      {"自動翻訳 \u00B7 日本語"}
                    </span>
                    <span className="text-[13px] leading-relaxed text-foreground">
                      {"承知しました！レポートを確認し、本日中に修正をお送りします。"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={100}>
            <div>
              <h2 className="mb-5 font-serif text-3xl tracking-tight text-foreground lg:text-4xl">
                Seamless Communication,{" "}
                <em className="font-serif italic text-primary">Zero Friction</em>
              </h2>
              <p className="mb-7 text-base leading-relaxed text-muted-foreground">
                A Japanese headquarters managing a customer support team in the
                Philippines uses MCS to eliminate language-driven delays entirely.
              </p>
              <div className="flex flex-col gap-3">
                {steps.map((step) => (
                  <div key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
