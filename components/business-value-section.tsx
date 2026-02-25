import { ScrollReveal } from "./scroll-reveal"

const values = [
  {
    num: "01",
    title: "Reduce Operational Cost",
    description:
      "Minimize reliance on manual translation and additional bilingual staffing overhead.",
  },
  {
    num: "02",
    title: "Improve Response Speed",
    description:
      "Enable direct communication without waiting for interpretation layers or handoffs.",
  },
  {
    num: "03",
    title: "Enhance Service Quality",
    description:
      "Maintain consistency and accuracy in messaging across regions and languages.",
  },
  {
    num: "04",
    title: "Strengthen Cross-Border Collaboration",
    description:
      "Align headquarters and overseas teams effortlessly with seamless, real-time communication and collaboration.",
  },
  {
    num: "05",
    title: "Protect Client Confidentiality",
    description:
      "Dedicated workspaces ensure secure, isolated information handling with enterprise-grade access controls.",
    span: true,
  },
]

export function BusinessValueSection() {
  return (
    <section id="value" className="relative bg-fixed py-24 lg:py-28" style={{ backgroundColor: '#F8E7E6' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Impact
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Business Value for Organizations
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {values.map((item, i) => (
            <ScrollReveal
              key={item.num}
              delay={i * 80}
              className={item.span ? "md:col-span-2" : ""}
            >
              <div className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Top accent on hover */}
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-500 text-sm font-bold text-white">
                  {item.num}
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
