"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const bubbles = [
  { text: "おはよう ございます", flag: "🇯🇵", top: "8%", left: "10%", delay: 0, hasIcon: true },
  { text: "Xin chào", flag: "🇻🇳", top: "10%", left: "72%", delay: 0.3, hasIcon: false },
  { text: "你好", flag: "🇨🇳", top: "40%", left: "85%", delay: 0.9, hasIcon: true },
  { text: "Hi team!", flag: "🇺🇸", top: "70%", left: "68%", delay: 1.5, hasIcon: true },
]

const leftBubbles = [
  { text: "Kumusta?", flag: "🇵🇭", top: "55%", left: "5%", delay: 1.2, hasIcon: true, isChar: false },
]

export function HeroTranslated() {
  const t = useTranslations("hero")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pb-8 pt-16 sm:pb-12 sm:pt-20 md:pt-28 lg:pb-24 lg:pt-40">
      {/* World map background - very subtle */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] sm:opacity-[0.06] lg:opacity-[0.03]">
        <svg className="h-full w-full" viewBox="0 0 1200 600" fill="none">
          {/* Simplified world map paths - dots pattern */}
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i % 20) * 60 + ((i * 17) % 40)
            const y = Math.floor(i / 20) * 150 + ((i * 23) % 80)
            return <circle key={i} cx={x} cy={y} r="2" fill="currentColor" className="text-muted-foreground" />
          })}
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-3 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left column - Text content */}
        <div className={`text-center lg:text-left transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h1 className="font-serif text-3xl leading-[1.2] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.08]">
            <span className="text-balance">
              {t("heading")}{" "}
              <em className="not-italic text-primary">{t("headingAccent")}</em>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg lg:mx-0">
            {t("subheading")}
          </p>

          <div className="mt-5 flex flex-col items-center gap-3.5 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              {t("requestDemo")}
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/5 sm:w-auto sm:px-7 sm:py-3 sm:text-base"
            >
              {t("exploreFeatures")}
            </a>
          </div>
        </div>

        {/* Desktop - Full monitor with floating bubbles */}
        <div
          className={`relative flex min-h-[400px] w-full items-center justify-center sm:min-h-[500px] lg:min-h-[600px] transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {/* World Globe Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="h-[400px] w-[400px] opacity-[0.08] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] xl:h-[850px] xl:w-[850px]" viewBox="0 0 400 400" fill="none">
              {/* Globe circle */}
              <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              {/* Latitude/Longitude lines omitted for brevity */}
            </svg>

            {/* Flags around the globe */}
            <div className="absolute left-[5%] top-[15%] text-2xl opacity-20 xl:text-3xl">🇯🇵</div>
            <div className="absolute right-[8%] top-[20%] text-2xl opacity-20 xl:text-3xl">🇺🇸</div>
            {/* Other flags omitted for brevity */}
          </div>

          {/* Desktop Monitor Mockup */}
          <div
            className="animate-float relative z-10"
            style={{ animationDelay: "0.4s", animationDuration: "5s" }}
          >
            {/* Monitor screen */}
            <div className="w-[280px] perspective-1000 sm:w-[340px] md:w-[380px] xl:w-[480px]">
              <div className="transform-gpu rounded-lg border-[6px] border-gray-800 bg-white shadow-2xl xl:border-8">
                {/* Screen content - Chat Interface */}
                <div className="aspect-[16/10] overflow-hidden rounded-sm bg-gray-50">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-2 xl:px-4 xl:py-3">
                    <div className="flex items-center gap-2">
                      <div className="text-xs font-semibold text-gray-900 xl:text-sm">{t("chatTitle")}</div>
                    </div>
                    <div className="flex items-center gap-1.5 xl:gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500 xl:h-2 xl:w-2" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 xl:h-2 xl:w-2" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 xl:h-2 xl:w-2" />
                    </div>
                  </div>

                  {/* Main content area with sidebar */}
                  <div className="flex h-[calc(100%-44px)] xl:h-[calc(100%-52px)]">
                    {/* Sidebar */}
                    <div className="w-[140px] border-r border-gray-200 bg-gray-800 p-2 xl:w-[180px] xl:p-3">
                      <div className="space-y-1.5 xl:space-y-2">
                        <div className="rounded bg-gray-700 px-1.5 py-1 text-[8px] text-white xl:px-2 xl:py-1.5 xl:text-[10px]">
                          # general
                        </div>
                        <div className="rounded px-1.5 py-1 text-[8px] text-gray-400 xl:px-2 xl:py-1.5 xl:text-[10px]">
                          # random
                        </div>
                        <div className="rounded px-1.5 py-1 text-[8px] text-gray-400 xl:px-2 xl:py-1.5 xl:text-[10px]">
                          # support
                        </div>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div className="flex-1 p-2 xl:p-4">
                      {/* Language selector */}
                      <div className="mb-2 flex items-center gap-1.5 xl:mb-3 xl:gap-2">
                        <div className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-1.5 py-0.5 xl:gap-1.5 xl:px-2 xl:py-1">
                          <span className="text-[8px] font-medium text-gray-700 xl:text-[10px]">{t("japanese")}</span>
                          <span className="text-[10px] xl:text-xs">🇯🇵</span>
                        </div>
                        <svg className="h-2 w-2 text-gray-400 xl:h-3 xl:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-1.5 py-0.5 xl:gap-1.5 xl:px-2 xl:py-1">
                          <span className="text-[8px] font-medium text-gray-700 xl:text-[10px]">{t("english")}</span>
                          <span className="text-[10px] xl:text-xs">🇬🇧</span>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="space-y-2 xl:space-y-3">
                        <div className="rounded-lg bg-gray-100 px-2 py-1.5 xl:px-3 xl:py-2">
                          <div className="text-[9px] font-medium text-gray-900 xl:text-[11px]">こんにちは</div>
                        </div>
                        <div className="text-[8px] text-gray-500 xl:text-[9px]">{t("translating")}</div>
                        <div className="self-end rounded-lg bg-primary/10 px-2 py-1.5 xl:px-3 xl:py-2">
                          <div className="text-[9px] text-gray-900 xl:text-[11px]">Hello</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="mx-auto mt-0.5 h-6 w-24 bg-gradient-to-b from-gray-700 to-gray-800 xl:mt-1 xl:h-8 xl:w-32" />
              <div className="mx-auto h-1.5 w-36 rounded-b-lg bg-gray-800 shadow-lg xl:h-2 xl:w-48" />
            </div>
          </div>

          {/* Floating coral/red speech bubbles */}
          {bubbles.map((bubble, i) => (
            <div
              key={i}
              className="animate-float absolute z-20"
              style={{
                top: bubble.top,
                left: bubble.left,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${3 + (i % 3) * 0.5}s`,
              }}
            >
              <div className="rounded-2xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg xl:px-4 xl:py-2.5 xl:text-sm">
                <div className="flex items-center gap-1.5 xl:gap-2">
                  <span>{bubble.text}</span>
                  {bubble.flag && <span className="text-sm xl:text-base">{bubble.flag}</span>}
                </div>
              </div>
              <div className="ml-4 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary xl:ml-6 xl:border-l-[8px] xl:border-r-[8px] xl:border-t-[10px]" />
            </div>
          ))}

          {/* Left side bubbles */}
          {leftBubbles.map((bubble, i) => (
            <div
              key={`left-${i}`}
              className="animate-float absolute z-20"
              style={{
                top: bubble.top,
                left: bubble.left,
                animationDelay: `${bubble.delay}s`,
                animationDuration: "3.5s",
              }}
            >
              <div className="rounded-2xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg xl:px-4 xl:py-2.5 xl:text-sm">
                <div className="flex items-center gap-1.5 xl:gap-2">
                  <span>{bubble.text}</span>
                  {bubble.flag && <span className="text-sm xl:text-base">{bubble.flag}</span>}
                </div>
              </div>
              <div className="ml-4 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary xl:ml-6 xl:border-l-[8px] xl:border-r-[8px] xl:border-t-[10px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
