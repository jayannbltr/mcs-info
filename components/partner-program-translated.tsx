"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Navbar } from "./navbar"
import { ArrowRight, CheckCircle2, Users, Zap, Target, Phone, Award, DollarSign } from "lucide-react"

export function PartnerProgramTranslated() {
  const t = useTranslations("partnerProgram")

  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    country: "",
    employees: "",
    name: "",
    email: "",
    phone: "",
    usecase: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const required = ["company", "industry", "country", "employees", "name", "email", "usecase"]
    const newErrors: Record<string, boolean> = {}
    let valid = true

    required.forEach((field) => {
      if (!formData[field as keyof typeof formData]?.trim()) {
        newErrors[field] = true
        valid = false
      }
    })

    setErrors(newErrors)

    if (!valid) {
      setSubmitStatus({
        type: 'error',
        message: t("applicationForm.errors.requiredFields")
      })
      return
    }

    // Submit to API
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/partner-program', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application')
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: t("applicationForm.success")
      })

      // Reset form
      setFormData({
        company: "",
        industry: "",
        country: "",
        employees: "",
        name: "",
        email: "",
        phone: "",
        usecase: "",
        message: "",
      })
      setErrors({})

      // Scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById('submit-status')
        successElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }))
    }
  }

  const heroBenefits = [
    t("hero.benefits.earlyAccess"),
    t("hero.benefits.discount"),
    t("hero.benefits.limited")
  ]

  const credibilityTags = [
    t("credibility.tags.multilingual"),
    t("credibility.tags.crossBorder"),
    t("credibility.tags.international")
  ]

  const benefits = [
    { icon: DollarSign, title: t("benefits.discount.title"), desc: t("benefits.discount.description") },
    { icon: Zap, title: t("benefits.earlyAccess.title"), desc: t("benefits.earlyAccess.description") },
    { icon: Target, title: t("benefits.onboarding.title"), desc: t("benefits.onboarding.description") },
    { icon: Users, title: t("benefits.feedback.title"), desc: t("benefits.feedback.description") },
    { icon: Phone, title: t("benefits.access.title"), desc: t("benefits.access.description") },
    { icon: Award, title: t("benefits.status.title"), desc: t("benefits.status.description") }
  ]

  const criteria = [
    t("whoIsThisFor.criteria.multiLanguage"),
    t("whoIsThisFor.criteria.crossBorder"),
    t("whoIsThisFor.criteria.earlyAccess"),
    t("whoIsThisFor.criteria.feedback"),
    t("whoIsThisFor.criteria.commitment")
  ]

  const applicantTypes = [
    t("whoIsThisFor.applicantTypes.midSized"),
    t("whoIsThisFor.applicantTypes.japanese"),
    t("whoIsThisFor.applicantTypes.startups"),
    t("whoIsThisFor.applicantTypes.technology"),
    t("whoIsThisFor.applicantTypes.international")
  ]

  const steps = [
    { num: "1", title: t("howItWorks.steps.step1.title"), desc: t("howItWorks.steps.step1.description") },
    { num: "2", title: t("howItWorks.steps.step2.title"), desc: t("howItWorks.steps.step2.description") },
    { num: "3", title: t("howItWorks.steps.step3.title"), desc: t("howItWorks.steps.step3.description") },
    { num: "4", title: t("howItWorks.steps.step4.title"), desc: t("howItWorks.steps.step4.description") },
    { num: "5", title: t("howItWorks.steps.step5.title"), desc: t("howItWorks.steps.step5.description") }
  ]

  const duringPilot = [
    t("pilotTerms.during.items.discount"),
    t("pilotTerms.during.items.invoice"),
    t("pilotTerms.during.items.onboarding"),
    t("pilotTerms.during.items.access")
  ]

  const afterPilot = [
    t("pilotTerms.after.items.pricing"),
    t("pilotTerms.after.items.billing"),
    t("pilotTerms.after.items.platformAccess"),
    t("pilotTerms.after.items.recognition")
  ]

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar alwaysWhite />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-primary/5 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-6">
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl mb-6 text-foreground">
                {t("hero.heading")}<span className="text-primary">{t("hero.headingAccent")}</span>{t("hero.headingEnd")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                {t("hero.subheading")}
              </p>
              <ul className="space-y-3 mb-8">
                {heroBenefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {t("hero.ctaApply")}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  {t("hero.ctaHow")}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-border bg-card/50 p-8 shadow-lg backdrop-blur-sm">
                <div className="mb-4 h-3 w-2/3 rounded bg-primary" />
                <div className="mb-3 h-3 w-full rounded bg-muted" />
                <div className="mb-8 rounded-lg border border-border overflow-hidden">
                  <Image
                    src="/platform-workspace.png"
                    alt={t("hero.imageAlt")}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="h-3 w-1/3 rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("credibility.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {credibilityTags.map((tag, i) => (
              <span key={i} className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM EXPLANATION */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("explanation.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("explanation.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t("explanation.subheading")}
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border-l-4 border-primary bg-secondary p-8">
              <h3 className="text-xl font-bold mb-3">{t("explanation.earlyAccess.title")}</h3>
              <p className="text-muted-foreground">{t("explanation.earlyAccess.description")}</p>
            </div>
            <div className="rounded-xl border-l-4 border-primary bg-secondary p-8">
              <h3 className="text-xl font-bold mb-3">{t("explanation.whatYouGet.title")}</h3>
              <p className="text-muted-foreground">{t("explanation.whatYouGet.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("benefits.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-foreground">{t("benefits.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t("benefits.subheading")}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg">
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("benefits.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("whoIsThisFor.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("whoIsThisFor.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t("whoIsThisFor.subheading")}
          </p>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ul className="space-y-4">
                {criteria.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-border pb-4 last:border-0">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">{t("whoIsThisFor.typicalApplicants")}</h3>
              <div className="flex flex-wrap gap-3">
                {applicantTypes.map((tag, i) => (
                  <span key={i} className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM PREVIEW */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary text-center">{t("platformPreview.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-center">{t("platformPreview.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-center">
            {t("platformPreview.subheading")}
          </p>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                <Image
                  src="/platform-workspace.png"
                  alt={t("platformPreview.workspace")}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">{t("platformPreview.workspace")}</p>
            </div>
            <div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-52 flex flex-col gap-3">
                <Image
                  src="/platform-message.png"
                  alt={t("platformPreview.messaging")}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">{t("platformPreview.messaging")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("howItWorks.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("howItWorks.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t("howItWorks.subheading")}
          </p>
          <div className="mb-12 grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {i < 4 && (
                  <ArrowRight className="absolute top-6 -right-3 hidden h-6 w-6 text-primary md:block" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("howItWorks.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* PILOT TERMS */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("pilotTerms.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-foreground">{t("pilotTerms.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">{t("pilotTerms.subheading")}</p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">{t("pilotTerms.during.title")}</h3>
              <ul className="space-y-4">
                {duringPilot.map((item, j) => (
                  <li key={j} className="flex gap-3 border-b border-border pb-4 text-foreground last:border-0">
                    <span className="text-primary">—</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">{t("pilotTerms.after.title")}</h3>
              <ul className="space-y-4">
                {afterPilot.map((item, j) => (
                  <li key={j} className="flex gap-3 border-b border-border pb-4 text-foreground last:border-0">
                    <span className="text-primary">—</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="py-20 lg:py-24 bg-primary text-center text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("scarcity.heading")}</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            {t("scarcity.description")}
          </p>
          <div className="mb-6 flex justify-center gap-3 flex-wrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-11 w-11 rounded-lg border-2 ${
                  i < 3 ? "border-white/50 bg-white/90" : "border-white/30 bg-white/10"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-primary-foreground/80 mb-8">{t("scarcity.slotsRemaining")}</p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t("scarcity.cta")}
          </a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("applicationForm.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("applicationForm.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("applicationForm.subheading")}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder={t("applicationForm.fields.companyPlaceholder")}
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.company ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="industry" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.industry")}
                </label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.industry ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">{t("applicationForm.fields.industryPlaceholder")}</option>
                  <option>{t("applicationForm.fields.industryOptions.technology")}</option>
                  <option>{t("applicationForm.fields.industryOptions.manufacturing")}</option>
                  <option>{t("applicationForm.fields.industryOptions.retail")}</option>
                  <option>{t("applicationForm.fields.industryOptions.financial")}</option>
                  <option>{t("applicationForm.fields.industryOptions.healthcare")}</option>
                  <option>{t("applicationForm.fields.industryOptions.logistics")}</option>
                  <option>{t("applicationForm.fields.industryOptions.professional")}</option>
                  <option>{t("applicationForm.fields.industryOptions.other")}</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.country")}
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder={t("applicationForm.fields.countryPlaceholder")}
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.country ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="employees" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.employees")}
                </label>
                <select
                  id="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.employees ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">{t("applicationForm.fields.employeesPlaceholder")}</option>
                  <option>{t("applicationForm.fields.employeesOptions.range1")}</option>
                  <option>{t("applicationForm.fields.employeesOptions.range2")}</option>
                  <option>{t("applicationForm.fields.employeesOptions.range3")}</option>
                  <option>{t("applicationForm.fields.employeesOptions.range4")}</option>
                  <option>{t("applicationForm.fields.employeesOptions.range5")}</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("applicationForm.fields.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.name ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t("applicationForm.fields.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.email ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder={t("applicationForm.fields.phonePlaceholder")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div>
                <label htmlFor="usecase" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("applicationForm.fields.usecase")}
                </label>
                <select
                  id="usecase"
                  value={formData.usecase}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.usecase ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">{t("applicationForm.fields.usecasePlaceholder")}</option>
                  <option>{t("applicationForm.fields.usecaseOptions.communication")}</option>
                  <option>{t("applicationForm.fields.usecaseOptions.collaboration")}</option>
                  <option>{t("applicationForm.fields.usecaseOptions.support")}</option>
                  <option>{t("applicationForm.fields.usecaseOptions.operations")}</option>
                  <option>{t("applicationForm.fields.usecaseOptions.other")}</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t("applicationForm.fields.message")}
              </label>
              <textarea
                id="message"
                placeholder={t("applicationForm.fields.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
              />
            </div>
            {submitStatus.type && (
              <div
                id="submit-status"
                className={`rounded-lg border p-4 ${
                  submitStatus.type === 'success'
                    ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200'
                    : 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200'
                }`}
              >
                <p className="font-semibold">{submitStatus.message}</p>
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? t("applicationForm.submitting") : t("applicationForm.submitButton")}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                {t("applicationForm.requiredNote")}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-24 bg-secondary text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">{t("finalCta.label")}</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">{t("finalCta.heading")}</h2>
          <p className="text-muted-foreground text-lg mb-4">
            {t("finalCta.description")}
          </p>
          <p className="text-primary font-bold mb-8">
            {t("finalCta.notice")}
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t("finalCta.cta")}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary py-8 text-center text-sm text-muted-foreground">
        <p>{t("footer.copyright")}</p>
      </footer>
    </div>
  )
}
