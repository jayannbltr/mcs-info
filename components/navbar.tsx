"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const languages = [
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "ja", label: "JP", fullLabel: "日本語" },
]

export function Navbar() {
  const t = useTranslations("navbar")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  // Load saved language on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale")
    const lang = languages.find((l) => l.code === savedLocale) || languages[0]
    setCurrentLanguage(lang)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLanguage(lang)
    setLanguageOpen(false)
    localStorage.setItem("locale", lang.code)
    window.location.reload()
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="EASYCOM JAPAN PHILIPPINES INC."
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t("services")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t("aboutUs")}
              </a>
            </li>
          </ul>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              aria-label="Select language"
            >
              <span>{currentLanguage.label}</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {languageOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLanguageOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-md border border-border bg-card shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                        currentLanguage.code === lang.code
                          ? "font-semibold text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span>{lang.fullLabel}</span>
                      <span className="text-xs">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            {t("contactUs")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("services")}
            </a>
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("aboutUs")}
            </a>

            {/* Mobile Language Selector */}
            <div className="border-t border-border pt-3 mt-2">
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                {t("language")}
              </div>
              <div className="flex flex-col gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang)
                      setMobileOpen(false)
                    }}
                    className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-secondary ${
                      currentLanguage.code === lang.code
                        ? "text-primary bg-secondary"
                        : "text-foreground"
                    }`}
                  >
                    {lang.fullLabel} ({lang.label})
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("contactUs")}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
