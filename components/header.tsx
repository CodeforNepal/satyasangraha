"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Globe } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ne" : "en")
  }

  const navItems = [
    {
      en: "Report",
      ne: "रिपोर्ट",
      href: "/report",
    },
    {
      en: "Explore",
      ne: "अन्वेषण",
      href: "/explore",
    },
    {
      en: "Learn",
      ne: "सिक्नुहोस्",
      href: "/learn",
    },
    {
      en: "Support",
      ne: "सहयोग",
      href: "/support",
    },
    {
      en: "About",
      ne: "बारेमा",
      href: "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  {language === "en" ? "सत्यसंग्रह" : "Satyasangraha"}
                </span>
                <span className="text-xs text-muted-foreground">powered by Code for Nepal (This is a work in progress)</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item[language]}
              </a>
            ))}
          </nav>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "नेपाली" : "English"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item[language]}
                </a>
              ))}
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="justify-start px-2">
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "नेपाली" : "English"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
