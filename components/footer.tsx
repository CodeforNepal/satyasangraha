"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [email, setEmail] = useState("")

  const footerSections = [
    {
      title: { en: "Platform", ne: "प्लेटफर्म" },
      links: [
        { en: "Report Corruption", ne: "भ्रष्टाचार रिपोर्ट", href: "/report" },
        { en: "Explore Data", ne: "डाटा अन्वेषण", href: "/explore" },
        { en: "Success Stories", ne: "सफलताका कथाहरू", href: "/stories" },
        { en: "API Access", ne: "API पहुँच", href: "/api" },
      ],
    },
    {
      title: { en: "Resources", ne: "स्रोतहरू" },
      links: [
        { en: "Know Your Rights", ne: "आफ्ना अधिकारहरू", href: "/rights" },
        { en: "Legal Support", ne: "कानुनी सहायता", href: "/legal" },
        { en: "Safety Guide", ne: "सुरक्षा गाइड", href: "/safety" },
        { en: "FAQ", ne: "बारम्बार सोधिने प्रश्नहरू", href: "/faq" },
      ],
    },
    {
      title: { en: "Organization", ne: "संस्था" },
      links: [
        { en: "About Code For Nepal", ne: "Code For Nepal बारे", href: "/about" },
        { en: "Our Team", ne: "हाम्रो टोली", href: "/team" },
        { en: "Partners", ne: "साझेदारहरू", href: "/partners" },
        { en: "Contact", ne: "सम्पर्क", href: "/contact" },
      ],
    },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xl font-bold">सत्यसंग्रह</div>
                <div className="text-sm opacity-80">Satyasangraha</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              {language === "en"
                ? "Empowering Nepali citizens to fight corruption through technology and transparency."
                : "प्रविधि र पारदर्शिताको माध्यमबाट भ्रष्टाचारविरुद्ध लड्न नेपाली नागरिकहरूलाई सशक्त बनाउने।"}
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder={language === "en" ? "Your email address" : "तपाईंको इमेल ठेगाना"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button type="submit" variant="outline" size="sm" className="w-full bg-transparent">
                <Mail className="h-4 w-4 mr-2" />
                {language === "en" ? "Subscribe" : "सदस्यता लिनुहोस्"}
              </Button>
            </form>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title[language]}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                    >
                      {link[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{language === "en" ? "Address" : "ठेगाना"}</div>
                <div className="text-sm opacity-80">Kathmandu, Nepal</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{language === "en" ? "Email" : "इमेल"}</div>
                <div className="text-sm opacity-80">hello@codefornepal.org</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{language === "en" ? "Support" : "सहयोग"}</div>
                <div className="text-sm opacity-80">24/7 {language === "en" ? "Available" : "उपलब्ध"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2025 Code For Nepal. {language === "en" ? "All rights reserved." : "सबै अधिकार सुरक्षित।"}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-80">{language === "en" ? "Follow us:" : "हामीलाई फलो गर्नुहोस्:"}</span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
