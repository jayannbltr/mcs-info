import { Globe, Lock, Users, Smartphone, Shield } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const capabilities = [
  {
    icon: Globe,
    title: "Real-Time Multilingual Messaging",
    description:
      "Instantly translate conversations across English, Japanese, and Chinese within channels, groups, or individual discussions. Every message is delivered in each participant's language.",
    span: true,
  },
  {
    icon: Lock,
    title: "Workspace-Based Data Isolation",
    description:
      "Each organization operates within a dedicated workspace ensuring confidentiality and preventing cross-client data exposure.",
    span: false,
  },
  {
    icon: Users,
    title: "Structured Communication Control",
    description:
      "Manage conversations through controlled channels and segmented groups with role-based access permissions.",
    span: false,
  },
  {
    icon: Smartphone,
    title: "Responsive Web & Mobile Access",
    description:
      "Optimized interface for distributed teams working across multiple locations and devices.",
    span: false,
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Encrypted communication, permission management, and secure cloud infrastructure built for enterprise environments.",
    span: false,
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Platform
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Core Capabilities
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Purpose-built for cross-border enterprise communication.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ScrollReveal
              key={cap.title}
              delay={i * 80}
              className={cap.span ? "lg:col-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Top accent on hover */}
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
