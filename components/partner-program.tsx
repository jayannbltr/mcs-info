"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "./navbar"
import { ArrowRight, CheckCircle2, Users, Zap, Target, Phone, Award, DollarSign } from "lucide-react"

export function PartnerProgram() {
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
        message: 'Please complete all required fields before submitting.'
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
        message: 'Thank you for applying! The MCS team will contact you soon.'
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
                Founding Partner Program
              </div>
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl mb-6 text-foreground">
                Become a <span className="text-primary">Founding Partner</span> of MCS
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Join a limited group of organizations participating in the pilot launch of the MCS platform and help shape the future of multilingual collaboration.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Early access to the platform",
                  "30% launch discount for the first 3 months",
                  "Limited to 10 companies only"
                ].map((item, i) => (
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
                  Apply for Partner Program
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  See How It Works
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
                    alt="MCS Platform Messaging Interface"
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
            Designed for organizations working across languages and borders. MCS enables teams to communicate, coordinate, and collaborate — regardless of language.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "🌐 Multilingual Communication",
              "🤝 Cross-Border Collaboration",
              "🏢 International Team Coordination"
            ].map((tag, i) => (
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
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">About the Program</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">What is the Founding Partner Program?</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A unique early-access opportunity for a small group of forward-thinking organizations.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Early Access Opportunity",
                desc: "The MCS Founding Partner Program invites a small group of organizations to participate in the pilot launch of the MCS platform. Selected partners gain early platform access and work directly with the product team to help refine the system before full commercial rollout."
              },
              {
                title: "What You Get in Return",
                desc: "In return, partners receive a limited-time launch incentive — a 30% discount on the first 3 months of subscription — along with priority onboarding support and a direct line to the MCS product team throughout the pilot phase."
              }
            ].map((card, i) => (
              <div key={i} className="rounded-xl border-l-4 border-primary bg-secondary p-8">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Program Benefits</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-foreground">Founding Partner Benefits</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Everything you receive as a confirmed MCS Founding Partner.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              { icon: DollarSign, title: "30% Launch Discount", desc: "Receive a 30% discount on the first 3 months of your MCS subscription." },
              { icon: Zap, title: "Early Platform Access", desc: "Be among the first organizations to use the MCS system before full public launch." },
              { icon: Target, title: "Priority Onboarding Support", desc: "Our team assists directly with your setup, configuration, and onboarding process." },
              { icon: Users, title: "Product Feedback Influence", desc: "Your direct feedback helps shape the MCS product roadmap and feature priorities." },
              { icon: Phone, title: "Direct Product Team Access", desc: "Communicate directly with the MCS product team throughout the pilot period." },
              { icon: Award, title: "Founding Partner Status", desc: "Be recognized as a founding organization that helped build the MCS platform." }
            ].map((benefit, i) => (
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
              Apply for the Program
            </a>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Ideal Participants</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">Who This Program is For</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            This program is best suited for organizations ready to move quickly and collaborate closely with the MCS team.
          </p>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ul className="space-y-4">
                {[
                  "Operate across multiple languages",
                  "Work with international or cross-border teams",
                  "Want early access to emerging communication technology",
                  "Are willing to provide structured product feedback",
                  "Can commit to a 3-month pilot engagement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-border pb-4 last:border-0">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Typical Applicants Include</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Mid-sized Companies",
                  "Japanese Companies in PH",
                  "Startups",
                  "Technology Companies",
                  "International Operations Teams"
                ].map((tag, i) => (
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
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary text-center">Platform Preview</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-center">See the MCS Platform in Action</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-center">
            A first look at what your team will be working with during the pilot.
          </p>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                <Image
                  src="/platform-workspace.png"
                  alt="MCS Platform Workspace Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">Workspace Dashboard</p>
            </div>
            <div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-52 flex flex-col gap-3">
                <Image
                  src="/platform-message.png"
                  alt="MCS Real-Time Multilingual Messaging"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">Real-Time Multilingual Messaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Program Process</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">How the Program Works</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Five simple steps from application to pilot activation.
          </p>
          <div className="mb-12 grid gap-6 md:grid-cols-5">
            {[
              { num: "1", title: "Submit Application", desc: "Complete the short application form below." },
              { num: "2", title: "Qualification Review", desc: "Our team reviews your application within 3 business days." },
              { num: "3", title: "Product Walkthrough", desc: "Attend a live walkthrough of the MCS platform." },
              { num: "4", title: "Partner Confirmation", desc: "Receive your Founding Partner confirmation and invoice." },
              { num: "5", title: "Start 3-Month Pilot", desc: "Your team is onboarded and the pilot begins." }
            ].map((step, i) => (
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
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* PILOT TERMS */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Pilot Program Structure</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-foreground">Pilot Program Terms</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Simple, transparent terms for Founding Partners.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "During the Pilot (3 Months)",
                items: [
                  "30% discounted subscription for the first 3 months",
                  "Pilot subscription invoiced upfront before activation",
                  "Priority onboarding support provided",
                  "Direct access to the MCS product team"
                ]
              },
              {
                title: "After the Pilot Period",
                items: [
                  "Subscription continues at standard pricing",
                  "Billing shifts to regular monthly subscription",
                  "Continued platform access with full feature set",
                  "Retained Founding Partner recognition"
                ]
              }
            ].map((card, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex gap-3 border-b border-border pb-4 text-foreground last:border-0">
                      <span className="text-primary">—</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="py-20 lg:py-24 bg-primary text-center text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">Limited Founding Partner Slots</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            To ensure proper onboarding and close collaboration, the program is strictly limited to 10 organizations. Once slots are filled, the program will close.
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
          <p className="text-sm text-primary-foreground/80 mb-8">3 of 10 slots filled — 7 remaining</p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Secure Your Slot
          </a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Apply Now</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">Apply for the Founding Partner Program</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Complete the form below and our team will be in touch within 3 business days.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.company ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="industry" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Industry *
                </label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.industry ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">Select industry</option>
                  <option>Technology</option>
                  <option>Manufacturing</option>
                  <option>Retail / E-commerce</option>
                  <option>Financial Services</option>
                  <option>Healthcare</option>
                  <option>Logistics</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="e.g. Philippines, Japan"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.country ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="employees" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Number of Employees *
                </label>
                <select
                  id="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.employees ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">Select range</option>
                  <option>1–50</option>
                  <option>51–200</option>
                  <option>201–500</option>
                  <option>501–1,000</option>
                  <option>1,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.name ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.email ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+63 or +81..."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div>
                <label htmlFor="usecase" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Intended Use*
                </label>
                <select
                  id="usecase"
                  value={formData.usecase}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.usecase ? "border-destructive" : "border-input"
                  } bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10`}
                >
                  <option value="">Select inteded use</option>
                  <option>Multilingual team communication</option>
                  <option>Cross-border collaboration</option>
                  <option>International customer support</option>
                  <option>Internal operations across regions</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Anything else you'd like us to know?
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your team, language needs, or goals..."
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
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                * Required fields. By submitting, you agree to be contacted by the MCS team regarding your application.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-24 bg-secondary text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">Don't Miss Out</div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">Help Shape the Future of MCS</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Join the first group of organizations using the MCS platform and help define how multilingual collaboration is built.
          </p>
          <p className="text-primary font-bold mb-8">
            Apply today — only 10 founding partner slots available.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary py-8 text-center text-sm text-muted-foreground">
        <p>
          © 2025 <span className="text-primary font-semibold">MCS</span> — Multilingual Communication System. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
