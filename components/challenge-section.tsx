import { DollarSign, Clock, AlertTriangle, ShieldOff } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const challenges = [
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description:
      "Heavy reliance on interpreters and bilingual staffing inflates budgets significantly.",
  },
  {
    icon: Clock,
    title: "Delayed Responses",
    description:
      "Translation bottlenecks slow down every interaction between multilingual teams.",
  },
  {
    icon: AlertTriangle,
    title: "Miscommunication Risk",
    description:
      "Nuances lost in translation directly impact service quality and client relationships.",
  },
  {
    icon: ShieldOff,
    title: "Security Fragmentation",
    description:
      "Using multiple external tools creates data leakage risks and compliance gaps.",
  },
]

export function ChallengeSection() {
  return (
    <section className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              The Problem
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Cross-Border Communication Is Broken
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Companies operating between Japan and the Philippines face daily friction
              from fragmented tools and manual translation workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Top accent on hover */}
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
