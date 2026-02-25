import { Check, X } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const rows = [
  {
    feature: "Real-Time Multilingual Translation",
    mcs: "Built-in natively",
    mcsPositive: true,
    traditional: "Requires external tools",
    tradPositive: false,
  },
  {
    feature: "Workspace-Level Isolation",
    mcs: "Dedicated per organization",
    mcsPositive: true,
    traditional: "Shared environments",
    tradPositive: false,
  },
  {
    feature: "Cross-Border Optimization",
    mcs: "Designed for JP\u2013PH ops",
    mcsPositive: true,
    traditional: "General-purpose only",
    tradPositive: false,
  },
  {
    feature: "Data Confidentiality Control",
    mcs: "Structured access mgmt",
    mcsPositive: true,
    traditional: "Limited",
    tradPositive: null,
  },
  {
    feature: "Enterprise Messaging Structure",
    mcs: "Channels + Groups",
    mcsPositive: true,
    traditional: "Basic",
    tradPositive: null,
  },
]

export function ComparisonSection() {
  return (
    <section id="compare" className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Why MCS
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              MCS vs Traditional Tools
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            {/* Top accent */}
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="w-[35%] px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    Feature
                  </th>
                  <th className="bg-primary/[0.05] px-6 py-4 text-left text-sm font-semibold text-primary">
                    MCS Platform
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    Traditional Chat Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`${
                      i !== rows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="bg-primary/[0.02] px-6 py-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {row.mcsPositive && (
                          <Check className="h-4 w-4 text-emerald-500" />
                        )}
                        {row.mcs}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {row.tradPositive === false && (
                          <X className="h-4 w-4 text-primary" />
                        )}
                        <span className={row.tradPositive === null ? "opacity-60" : ""}>
                          {row.traditional}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
