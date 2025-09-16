"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Map, BookOpen, Users, Shield, BarChart3, ArrowRight } from "lucide-react"

export function FeaturesSection() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const features = [
    {
      icon: FileText,
      title: { en: "Anonymous Reporting", ne: "गुमनाम रिपोर्टिङ" },
      description: {
        en: "Report corruption safely with multiple layers of anonymity protection",
        ne: "गुमनामताको धेरै तहको सुरक्षाका साथ भ्रष्टाचार सुरक्षित रूपमा रिपोर्ट गर्नुहोस्",
      },
      color: "text-primary",
    },
    {
      icon: Map,
      title: { en: "Geographic Mapping", ne: "भौगोलिक नक्साङ्कन" },
      description: {
        en: "Visualize corruption patterns across districts and municipalities",
        ne: "जिल्ला र नगरपालिकाहरूमा भ्रष्टाचारका ढाँचाहरू देख्नुहोस्",
      },
      color: "text-secondary",
    },
    {
      icon: BarChart3,
      title: { en: "Data Analytics", ne: "डाटा विश्लेषण" },
      description: {
        en: "Track trends, patterns, and impact of corruption across government departments",
        ne: "सरकारी विभागहरूमा भ्रष्टाचारको प्रवृत्ति, ढाँचा र प्रभाव ट्र्याक गर्नुहोस्",
      },
      color: "text-chart-3",
    },
    {
      icon: BookOpen,
      title: { en: "Know Your Rights", ne: "आफ्ना अधिकारहरू जान्नुहोस्" },
      description: {
        en: "Learn about RTI procedures, legal protections, and complaint processes",
        ne: "RTI प्रक्रिया, कानुनी सुरक्षा र उजुरी प्रक्रियाहरूको बारेमा जान्नुहोस्",
      },
      color: "text-chart-5",
    },
    {
      icon: Users,
      title: { en: "Community Verification", ne: "समुदायिक प्रमाणीकरण" },
      description: {
        en: "Reports verified by community members and civil society organizations",
        ne: "समुदायका सदस्यहरू र नागरिक समाजका संस्थाहरूद्वारा प्रमाणित रिपोर्टहरू",
      },
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: { en: "Legal Support", ne: "कानुनी सहायता" },
      description: {
        en: "Connect with human rights lawyers and legal aid organizations",
        ne: "मानव अधिकार वकिलहरू र कानुनी सहायता संस्थाहरूसँग जडान गर्नुहोस्",
      },
      color: "text-primary",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "en" ? "Powerful Tools for Transparency" : "पारदर्शिताका लागि शक्तिशाली उपकरणहरू"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "en"
              ? "Built specifically for Nepal's unique challenges with cultural sensitivity and technical excellence"
              : "सांस्कृतिक संवेदनशीलता र प्राविधिक उत्कृष्टताका साथ नेपालका अनौठा चुनौतीहरूका लागि विशेष रूपमा निर्मित"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title[language]}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="group">
            {language === "en" ? "Get Started Today" : "आज नै सुरु गर्नुहोस्"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
