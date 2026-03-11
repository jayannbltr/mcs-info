"use client"

import { useTranslations } from "next-intl"
import { DollarSign, Clock, AlertTriangle, ShieldOff, Globe, Lock, Users, Smartphone, Shield, Check, X, Zap, ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

// Challenge Section
export function ChallengeSectionTranslated() {
  const t = useTranslations("challenge")

  const challenges = [
    { icon: DollarSign, title: t("cost.title"), description: t("cost.description") },
    { icon: Clock, title: t("delays.title"), description: t("delays.description") },
    { icon: AlertTriangle, title: t("miscommunication.title"), description: t("miscommunication.description") },
    { icon: ShieldOff, title: t("security.title"), description: t("security.description") },
  ]

  return (
    <section className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("label")}
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t("subheading")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Advantage Section
export function AdvantageSectionTranslated() {
  const t = useTranslations("advantage")

  return (
    <section className="py-24 lg:py-28" style={{ backgroundColor: '#F8E7E6' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 shadow-lg lg:p-16">
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />
            <div className="relative z-10">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {t("label")}
              </span>
              <h2 className="mb-5 font-serif text-3xl tracking-tight text-foreground lg:text-4xl">
                {t("heading")}
              </h2>
              <p className="max-w-3xl text-base leading-[1.75] text-muted-foreground lg:text-lg">
                {t("description")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// Capabilities Section
export function CapabilitiesSectionTranslated() {
  const t = useTranslations("capabilities")
  const tCta = useTranslations("cta")

  const capabilities = [
    {
      icon: Globe,
      title: t("realtime.title"),
      description: t("realtime.description"),
      span: true,
    },
    {
      icon: Lock,
      title: t("workspace.title"),
      description: t("workspace.description"),
      span: false,
    },
    {
      icon: Users,
      title: t("control.title"),
      description: t("control.description"),
      span: false,
    },
    {
      icon: Smartphone,
      title: t("responsive.title"),
      description: t("responsive.description"),
      span: false,
    },
    {
      icon: Shield,
      title: t("security.title"),
      description: t("security.description"),
      span: false,
    },
  ]

  return (
    <section id="capabilities" className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("label")}
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t("subheading")}
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
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {tCta("requestDemo")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// Footer Translated
export function FooterTranslated() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground lg:px-8">
        {t("copyright")}
      </div>
    </footer>
  )
}

// Business Value Section
export function BusinessValueSectionTranslated() {
  const t = useTranslations("businessValue")

  const values = [
    { num: "01", title: t("reduceCost.title"), description: t("reduceCost.description"), span: false },
    { num: "02", title: t("improveSpeed.title"), description: t("improveSpeed.description"), span: false },
    { num: "03", title: t("enhanceQuality.title"), description: t("enhanceQuality.description"), span: false },
    { num: "04", title: t("collaboration.title"), description: t("collaboration.description"), span: false },
    { num: "05", title: t("confidentiality.title"), description: t("confidentiality.description"), span: true },
  ]

  return (
    <section id="value" className="relative bg-fixed py-24 lg:py-28" style={{ backgroundColor: '#F8E7E6' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("label")}
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("heading")}
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
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-500 text-sm font-bold text-white">
                  {item.num}
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Use Case Section
export function UseCaseSectionTranslated() {
  const t = useTranslations("useCase")

  const steps = [
    t("steps.step1"),
    t("steps.step2"),
    t("steps.step3"),
    t("steps.step4"),
    t("steps.step5"),
  ]

  return (
    <section id="usecase" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("label")}
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Chat demo */}
          <ScrollReveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

              <div className="flex flex-col gap-3.5">
                {/* Japanese message */}
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm">
                    {"\u{1F1EF}\u{1F1F5}"}
                  </div>
                  <div className="rounded-xl border border-border bg-secondary p-3 max-w-xs">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {t("japanese")}
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
                    {t("instantTranslation")}
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
                      {t("autoTranslatedEnglish")}
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
                      {t("english")}
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
                    {t("instantTranslation")}
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
                      {t("autoTranslatedJapanese")}
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
                {t("contentHeading")}{" "}
                <em className="font-serif italic text-primary">{t("contentHeadingAccent")}</em>
              </h2>
              <p className="mb-7 text-base leading-relaxed text-muted-foreground">
                {t("description")}
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

// Founding Partner Section
export function FoundingPartnerSectionTranslated() {
  const t = useTranslations("foundingPartner")

  const benefits = [
    t("benefits.discount"),
    t("benefits.earlyAccess"),
    t("benefits.support"),
    t("benefits.influence"),
  ]

  return (
    <section id="partner" className="py-24 lg:py-28" style={{ backgroundColor: '#F8E7E6' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <ScrollReveal>
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {t("label")}
              </span>
              <h2 className="mb-5 font-serif text-3xl tracking-tight text-foreground lg:text-4xl xl:text-5xl">
                {t("heading").split("Chateaze").map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-primary">Chateaze</span>
                    </span>
                  ) : part
                ))}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("description").includes("Founding Partner Program")
                  ? t("description").split("Founding Partner Program").map((part, i, arr) => (
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <span className="font-bold">Founding Partner Program</span>
                        </span>
                      ) : part
                    ))
                  : t("description").split("創設パートナープログラム").map((part, i, arr) => (
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <span className="font-bold">創設パートナープログラム</span>
                        </span>
                      ) : part
                    ))
                }
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column - Benefits Card */}
          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-lg">
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {t("benefitsHeading")}
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {i === 0 ? (
                        <>
                          <span className="font-bold">30% discount for the first 3 months</span>
                        </>
                      ) : (
                        benefit
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-xl bg-secondary p-4">
                <p className="text-sm font-semibold text-foreground">
                  {t("limitedNotice")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("applyNotice")}
                </p>
              </div>

              <a
                href="/partner-program"
                className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t("applyNow")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// Comparison Section
export function ComparisonSectionTranslated() {
  const t = useTranslations("comparison")

  const rows = [
    {
      feature: t("rows.translation.feature"),
      mcs: t("rows.translation.mcs"),
      mcsPositive: true,
      traditional: t("rows.translation.traditional"),
      tradPositive: false,
    },
    {
      feature: t("rows.isolation.feature"),
      mcs: t("rows.isolation.mcs"),
      mcsPositive: true,
      traditional: t("rows.isolation.traditional"),
      tradPositive: false,
    },
    {
      feature: t("rows.optimization.feature"),
      mcs: t("rows.optimization.mcs"),
      mcsPositive: true,
      traditional: t("rows.optimization.traditional"),
      tradPositive: false,
    },
    {
      feature: t("rows.confidentiality.feature"),
      mcs: t("rows.confidentiality.mcs"),
      mcsPositive: true,
      traditional: t("rows.confidentiality.traditional"),
      tradPositive: null,
    },
    {
      feature: t("rows.structure.feature"),
      mcs: t("rows.structure.mcs"),
      mcsPositive: true,
      traditional: t("rows.structure.traditional"),
      tradPositive: null,
    },
  ]

  return (
    <section id="compare" className="border-t border-border pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("label")}
            </span>
            <h2 className="text-balance font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary" />

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="w-[35%] px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    {t("tableHeaders.feature")}
                  </th>
                  <th className="bg-primary/[0.05] px-6 py-4 text-left text-sm font-semibold text-primary">
                    {t("tableHeaders.mcs")}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    {t("tableHeaders.traditional")}
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
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="bg-primary/[0.02] px-6 py-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {row.mcsPositive && <Check className="h-4 w-4 text-emerald-500" />}
                        {row.mcs}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {row.tradPositive === false && <X className="h-4 w-4 text-primary" />}
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

// CTA Section
export function CtaSectionTranslated() {
  const t = useTranslations("cta")

  return (
    <section id="demo" className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-6 md:p-10 lg:p-16 text-center">
            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl text-balance font-serif text-2xl md:text-3xl lg:text-5xl tracking-tight text-primary-foreground">
                {t("heading")}
              </h2>
              <p className="mx-auto mt-6 md:mt-8 lg:mt-10 max-w-lg text-sm md:text-base lg:text-lg leading-relaxed text-primary-foreground/80">
                {t("description")}
              </p>
              <div className="mt-6 md:mt-8 lg:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-card px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {t("requestDemo")}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/partner-program"
                  className="inline-flex items-center gap-2.5 rounded-xl border-2 border-primary-foreground bg-transparent px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:shadow-lg"
                >
                  {t("applyPartner")}
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
