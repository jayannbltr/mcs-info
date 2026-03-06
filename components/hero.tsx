"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const bubbles = [
  { text: "おはよう ございます", flag: "🇯🇵", top: "8%", left: "10%", delay: 0, hasIcon: true },
  { text: "Xin chào", flag: "🇻🇳", top: "10%", left: "72%", delay: 0.3, hasIcon: false },
  { text: "你好", flag: "🇨🇳", top: "40%", left: "85%", delay: 0.9, hasIcon: true },
  { text: "Hi team!", flag: "🇺🇸", top: "70%", left: "68%", delay: 1.5, hasIcon: true },
]

const leftBubbles = [
  { text: "Kumusta?", flag: "🇵🇭", top: "55%", left: "5%", delay: 1.2, hasIcon: true, isChar: false },
  // { text: "大三", flag: "🇯🇵", top: "50%", left: "16%", delay: 0.8, isChar: true, hasIcon: false },
]

// const japaneseBubble = { text: "こんにちは", top: "32%", left: "44%", delay: 0.5 }

export function Hero() {
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
              Break Language Barriers.{" "}
              <em className="not-italic text-primary">Instantly.</em>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg lg:mx-0">
            Enable seamless multilingual communication with real-time translation for teams around the world.
          </p>

          <div className="mt-5 flex flex-col items-center gap-3.5 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
            <a
              href="#demo"
              className= "inline-flex w-full items-center justify-center gap-2.5 rounded-xl border-2 border-primary bg-transparent px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-7 sm:py-3 sm:text-base"
            >
              Request a Demo
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="#partner"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Apply for Founding Partner Program
            </a>
          </div>
        </div>

        {/* Mobile/Tablet illustration - Simplified floating bubbles */}
        <div
          className={`relative mx-auto mt-6 hidden h-[240px] w-full max-w-md sm:mt-8 sm:h-[280px] md:h-[320px] lg:hidden transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {/* Simplified mobile bubbles */}
          <div className="animate-float absolute left-[10%] top-[15%]" style={{ animationDelay: "0s", animationDuration: "3s" }}>
            <div className="rounded-2xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-white/20 text-xs">大三</div>
                <span>Guten Tag</span>
                <span className="text-sm sm:text-base">🇩🇪</span>
              </div>
            </div>
          </div>

          <div className="animate-float absolute right-[10%] top-[10%]" style={{ animationDelay: "0.3s", animationDuration: "3.5s" }}>
            <div className="rounded-2xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-sm">
              <div className="flex items-center gap-2">
                <span>Bonjour</span>
                <span className="text-sm sm:text-base">🇫🇷</span>
              </div>
            </div>
          </div>

          <div className="animate-float absolute left-1/2 top-[40%] -translate-x-1/2" style={{ animationDelay: "0.5s", animationDuration: "3.2s" }}>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md">
              こんにちは
            </div>
          </div>

          {/* <div className="animate-float absolute bottom-[25%] left-[15%]" style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-xs">🇵🇭</span>
                <span className="text-sm font-medium text-gray-900">Hi!</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs">🇫🇷</span>
                <span className="text-sm text-gray-600">Bonjour</span>
              </div>
            </div>
          </div> */}

          <div className="animate-float absolute bottom-[20%] right-[12%]" style={{ animationDelay: "0.9s", animationDuration: "3.3s" }}>
            <div className="rounded-2xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-white/20 text-xs">大三</div>
                <span>Hola</span>
                <span className="text-sm sm:text-base">🇪🇸</span>
              </div>
            </div>
          </div>

          <div className="animate-float absolute left-1/2 top-[60%] -translate-x-1/2" style={{ animationDelay: "1.2s", animationDuration: "4s" }}>
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-lg">
              大三
            </div> */}
          </div>
        </div>

        {/* Desktop - Full monitor with floating bubbles */}
        <div
          className={`relative flex min-h-[400px] w-full items-center justify-center sm:min-h-[500px] lg:min-h-[600px] transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {/* World Globe Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Glow effect behind globe */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] md:h-[620px] md:w-[620px] lg:h-[720px] lg:w-[720px] xl:h-[870px] xl:w-[870px] rounded-full bg-primary/5 blur-3xl" />
            <svg className="relative h-[400px] w-[400px] opacity-[0.15] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] xl:h-[850px] xl:w-[850px]" viewBox="0 0 400 400" fill="none">
              {/* Gradient definitions for 3D effect */}
              <defs>
                <radialGradient id="globeGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </radialGradient>
              </defs>

              {/* Globe sphere with gradient fill for 3D effect */}
              <circle cx="200" cy="200" r="180" fill="url(#globeGradient)" className="text-primary" />

              {/* Globe circle outline */}
              <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" className="text-primary" fill="none" />

              {/* Latitude lines (horizontal) */}
              <ellipse cx="200" cy="200" rx="180" ry="140" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />
              <ellipse cx="200" cy="200" rx="180" ry="90" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />
              <ellipse cx="200" cy="200" rx="180" ry="45" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />

              {/* Longitude lines (vertical) */}
              <ellipse cx="200" cy="200" rx="140" ry="180" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />
              <ellipse cx="200" cy="200" rx="90" ry="180" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />
              <ellipse cx="200" cy="200" rx="45" ry="180" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-80" fill="none" />

              {/* Equator and Prime Meridian (main grid lines) */}
              <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-70" />
              <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.8" className="text-primary opacity-70" />

              {/* Continent outlines - simplified */}
              <path d="M 250 150 Q 270 140 280 160 L 290 170 Q 285 180 275 175 L 260 170 Z" fill="currentColor" className="text-primary opacity-30" />
              <path d="M 150 180 Q 170 170 180 185 L 185 200 Q 175 210 165 200 L 155 190 Z" fill="currentColor" className="text-primary opacity-30" />
              <path d="M 200 120 Q 220 110 230 130 L 235 145 Q 225 155 215 145 L 205 135 Z" fill="currentColor" className="text-primary opacity-30" />
              <path d="M 180 250 Q 200 240 210 260 L 215 275 Q 205 285 195 275 L 185 265 Z" fill="currentColor" className="text-primary opacity-30" />

              {/* Dots for cities/locations */}
              {[
                { cx: 240, cy: 160 },
                { cx: 160, cy: 190 },
                { cx: 280, cy: 210 },
                { cx: 190, cy: 260 },
                { cx: 220, cy: 130 },
                { cx: 170, cy: 140 },
                { cx: 250, cy: 240 },
              ].map((dot, i) => (
                <circle key={i} cx={dot.cx} cy={dot.cy} r="2" fill="currentColor" className="text-primary opacity-50" />
              ))}
            </svg>

            {/* Flags around the globe */}
            <div className="absolute left-[5%] top-[15%] text-3xl opacity-40 xl:text-4xl">🇯🇵</div>
            <div className="absolute right-[8%] top-[20%] text-3xl opacity-40 xl:text-4xl">🇺🇸</div>
            <div className="absolute left-[12%] top-[45%] text-3xl opacity-40 xl:text-4xl">🇩🇪</div>
            <div className="absolute right-[10%] top-[50%] text-3xl opacity-40 xl:text-4xl">🇬🇧</div>
            <div className="absolute left-[8%] bottom-[20%] text-3xl opacity-40 xl:text-4xl">🇫🇷</div>
            <div className="absolute right-[6%] bottom-[15%] text-3xl opacity-40 xl:text-4xl">🇪🇸</div>
            <div className="absolute left-[40%] top-[8%] text-3xl opacity-40 xl:text-4xl">🇻🇳</div>
            <div className="absolute right-[35%] bottom-[10%] text-3xl opacity-40 xl:text-4xl">🇵🇭</div>
            <div className="absolute left-[18%] top-[30%] text-3xl opacity-40 xl:text-4xl">🇨🇳</div>
            <div className="absolute right-[20%] top-[35%] text-3xl opacity-40 xl:text-4xl">🇰🇷</div>
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
                      <div className="text-xs font-semibold text-gray-900 xl:text-sm">Multilingual Chat System</div>
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
                          <span className="text-[8px] font-medium text-gray-700 xl:text-[10px]">Japanese</span>
                          <span className="text-[10px] xl:text-xs">🇯🇵</span>
                        </div>
                        <svg className="h-2 w-2 text-gray-400 xl:h-3 xl:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-1.5 py-0.5 xl:gap-1.5 xl:px-2 xl:py-1">
                          <span className="text-[8px] font-medium text-gray-700 xl:text-[10px]">English</span>
                          <span className="text-[10px] xl:text-xs">🇬🇧</span>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="space-y-2 xl:space-y-3">
                        <div className="rounded-lg bg-gray-100 px-2 py-1.5 xl:px-3 xl:py-2">
                          <div className="text-[9px] font-medium text-gray-900 xl:text-[11px]">こんにちは</div>
                        </div>
                        <div className="text-[8px] text-gray-500 xl:text-[9px]">Translating...</div>
                        <div className="self-end rounded-lg bg-primary/10 px-2 py-1.5 xl:px-3 xl:py-2">
                          <div className="text-[9px] text-gray-900 xl:text-[11px]">Hello</div>
                        </div>
                      </div>

                      {/* User list on right */}
                      {/* <div className="absolute right-2 top-14 w-[90px] space-y-1.5 xl:right-4 xl:top-20 xl:w-[120px] xl:space-y-2">
                        <div className="flex items-center gap-1.5 xl:gap-2">
                          <div className="h-4 w-4 rounded-full bg-primary xl:h-5 xl:w-5" />
                          <span className="text-[8px] text-gray-600 xl:text-[9px]">User 1 🇯🇵</span>
                        </div>
                        <div className="flex items-center gap-1.5 xl:gap-2">
                          <div className="h-4 w-4 rounded-full bg-blue-500 xl:h-5 xl:w-5" />
                          <span className="text-[8px] text-gray-600 xl:text-[9px]">User 2 🇵🇭</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="mx-auto mt-0.5 h-6 w-24 bg-gradient-to-b from-gray-700 to-gray-800 xl:mt-1 xl:h-8 xl:w-32" />
              <div className="mx-auto h-1.5 w-36 rounded-b-lg bg-gray-800 shadow-lg xl:h-2 xl:w-48" />
            </div>
          </div>

          {/* Floating coral/red speech bubbles - right side */}
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
                  {/* {bubble.hasIcon && (
                    // <div className="flex h-5 w-5 items-center justify-center rounded bg-white/20 text-[10px] xl:h-6 xl:w-6 xl:text-xs">
                    //   大三
                    // </div>
                  )} */}
                  <span>{bubble.text}</span>
                  {bubble.flag && <span className="text-sm xl:text-base">{bubble.flag}</span>}
                </div>
              </div>
              {/* Speech bubble tail */}
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
              {bubble.isChar ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-lg xl:h-12 xl:w-12 xl:text-sm">
                  {bubble.text}
                </div>
              ) : (
                <>
                  <div className="rounded-2xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg xl:px-4 xl:py-2.5 xl:text-sm">
                    <div className="flex items-center gap-1.5 xl:gap-2">
                      {/* <div className="flex h-5 w-5 items-center justify-center rounded bg-white/20 text-[10px] xl:h-6 xl:w-6 xl:text-xs">
                        大三
                      </div> */}
                      <span>{bubble.text}</span>
                      {bubble.flag && <span className="text-sm xl:text-base">{bubble.flag}</span>}
                    </div>
                  </div>
                  <div className="ml-4 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary xl:ml-6 xl:border-l-[8px] xl:border-r-[8px] xl:border-t-[10px]" />
                </>
              )}
            </div>
          ))}

          {/* Japanese bubble (white variant) */}
          {/* <div
            className="animate-float absolute z-20"
            style={{
              top: japaneseBubble.top,
              left: japaneseBubble.left,
              animationDelay: `${japaneseBubble.delay}s`,
              animationDuration: "3.5s",
            }}
          >
            <div className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-md xl:px-4 xl:py-2 xl:text-sm">
              {japaneseBubble.text}
            </div>
          </div> */}

          {/* Bottom left - Hi/Bonjour white bubble */}
          <div
            className="animate-float absolute z-20"
            style={{ top: "78%", left: "14%", animationDelay: "1.8s", animationDuration: "3.8s" }}
          >
            {/* <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-lg xl:px-4 xl:py-3">
              <div className="flex items-center gap-1.5 xl:gap-2">
                <span className="text-[10px] xl:text-xs">🇵🇭</span>
                <span className="text-xs font-medium text-gray-900 xl:text-sm">Hi!</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 xl:mt-1 xl:gap-2">
                <span className="text-[10px] xl:text-xs">🇫🇷</span>
                <span className="text-xs text-gray-600 xl:text-sm">Bonjour</span>
              </div>
            </div> */}
          </div>

          {/* Decorative dots in background */}
          <div className="absolute left-[10%] top-[25%] h-2 w-2 rounded-full bg-primary/10" />
          <div className="absolute right-[18%] top-[40%] h-3 w-3 rounded-full bg-primary/10" />
          <div className="absolute left-[15%] bottom-[30%] h-2 w-2 rounded-full bg-primary/10" />
          <div className="absolute right-[22%] bottom-[25%] h-2.5 w-2.5 rounded-full bg-primary/10" />
        </div>
      </div>
    </section>
  )
}
