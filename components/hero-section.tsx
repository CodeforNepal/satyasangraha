"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, TrendingUp, Shield } from "lucide-react"

export function HeroSection() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const stats = [
    {
      icon: AlertTriangle,
      value: "2,847",
      label: { en: "Reports Filed", ne: "रिपोर्टहरू दायर" },
      color: "text-primary",
    },
    {
      icon: Shield,
      value: "156",
      label: { en: "Cases Prevented", ne: "रोकिएका मुद्दाहरू" },
      color: "text-chart-5",
    },
    {
      icon: TrendingUp,
      value: "NPR 2.3M",
      label: { en: "Bribes Refused", ne: "अस्वीकार गरिएको घुस" },
      color: "text-secondary",
    },
    {
      icon: Users,
      value: "12,450",
      label: { en: "Active Citizens", ne: "सक्रिय नागरिकहरू" },
      color: "text-accent",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center nepal-pattern">
      <div className="mountain-silhouette absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
              <span className="text-primary">सत्यसंग्रह</span>
              <br />
              <span className="text-secondary text-2xl md:text-3xl">Truth-Force for Nepal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {language === "en"
                ? "Empowering Nepali citizens to report corruption, demand transparency, and build a better future through technology."
                : "प्रविधिको माध्यमबाट भ्रष्टाचार रिपोर्ट गर्न, पारदर्शिताको माग गर्न र राम्रो भविष्य निर्माण गर्न नेपाली नागरिकहरूलाई सशक्त बनाउने।"}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <AlertTriangle className="mr-2 h-5 w-5" />
              {language === "en" ? "Report Corruption" : "भ्रष्टाचार रिपोर्ट गर्नुहोस्"}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <TrendingUp className="mr-2 h-5 w-5" />
              {language === "en" ? "Explore Data" : "डाटा अन्वेषण गर्नुहोस्"}
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label[language]}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-chart-5" />
              <span>{language === "en" ? "Anonymous & Secure" : "गुमनाम र सुरक्षित"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-secondary" />
              <span>{language === "en" ? "Community Verified" : "समुदायद्वारा प्रमाणित"}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>{language === "en" ? "Real Impact" : "वास्तविक प्रभाव"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
