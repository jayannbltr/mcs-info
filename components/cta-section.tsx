import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function CtaSection() {
  return (
    <section id="demo" className="py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-6 md:p-10 lg:p-16 text-center">
            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl text-balance font-serif text-2xl md:text-3xl lg:text-5xl tracking-tight text-primary-foreground">
                Transform Your Cross-Border Communication
              </h2>
              <p className="mx-auto mt-6 md:mt-8 lg:mt-10 max-w-lg text-sm md:text-base lg:text-lg leading-relaxed text-primary-foreground/80">
                Empower your teams to collaborate globally without language barriers.
                Discover how MCS can support your organization.
              </p>
              <div className="mt-6 md:mt-8 lg:mt-9">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-card px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
