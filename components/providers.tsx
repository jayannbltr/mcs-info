"use client"

import { NextIntlClientProvider } from "next-intl"
import { useState, useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<"en" | "ja">("en")
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem("locale") as "en" | "ja" | null
    const activeLocale = savedLocale || "en"
    setLocale(activeLocale)

    // Load messages for the active locale
    import(`../messages/${activeLocale}.json`).then((mod) => {
      setMessages(mod.default)
    })

    // Listen for locale changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "locale" && (e.newValue === "en" || e.newValue === "ja")) {
        setLocale(e.newValue)
        import(`../messages/${e.newValue}.json`).then((mod) => {
          setMessages(mod.default)
        })
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  if (!messages) {
    return null // or a loading spinner
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
