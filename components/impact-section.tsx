"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, TrendingDown, CheckCircle } from "lucide-react"

export function ImpactSection() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const successStories = [
    {
      location: { en: "Kathmandu Municipality", ne: "काठमाडौं महानगरपालिका" },
      date: "2025-01-15",
      impact: { en: "Reduced passport processing bribes by 80%", ne: "राहदानी प्रक्रियामा घुस ८०% कम" },
      description: {
        en: "Community reporting led to investigation and policy changes in passport office procedures",
        ne: "सामुदायिक रिपोर्टिङले राहदानी कार्यालयको प्रक्रियामा अनुसन्धान र नीतिगत परिवर्तन ल्यायो",
      },
      status: "resolved",
    },
    {
      location: { en: "Pokhara Sub-Metropolitan", ne: "पोखरा उपमहानगरपालिका" },
      date: "2025-01-10",
      impact: { en: "NPR 500K saved in construction contracts", ne: "निर्माण ठेक्कामा ५ लाख रुपैयाँ बचत" },
      description: {
        en: "Transparent bidding process implemented after corruption reports in road construction",
        ne: "सडक निर्माणमा भ्रष्टाचारको रिपोर्ट पछि पारदर्शी बोलपत्र प्रक्रिया लागू",
      },
      status: "in-progress",
    },
    {
      location: { en: "Chitwan District", ne: "चितवन जिल्ला" },
      date: "2025-01-05",
      impact: { en: "Education fund misuse prevented", ne: "शिक्षा कोषको दुरुपयोग रोकियो" },
      description: {
        en: "School committee corruption exposed, leading to proper fund allocation for student scholarships",
        ne: "विद्यालय समितिको भ्रष्टाचार पर्दाफास, छात्रवृत्तिको लागि उचित कोष बाँडफाँड",
      },
      status: "resolved",
    },
  ]

  const impactMetrics = [
    {
      value: "NPR 12.5M",
      label: { en: "Corruption Prevented", ne: "रोकिएको भ्रष्टाचार" },
      change: "+23%",
      trend: "up",
    },
    {
      value: "89%",
      label: { en: "Report Response Rate", ne: "रिपोर्ट प्रतिक्रिया दर" },
      change: "+15%",
      trend: "up",
    },
    {
      value: "156",
      label: { en: "Policy Changes", ne: "नीतिगत परिवर्तनहरू" },
      change: "+45%",
      trend: "up",
    },
    {
      value: "75",
      label: { en: "Districts Covered", ne: "समेटिएका जिल्लाहरू" },
      change: "+8",
      trend: "up",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Impact Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "en" ? "Real Impact, Real Change" : "वास्तविक प्रभाव, वास्तविक परिवर्तन"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-12">
            {language === "en"
              ? "See how citizen reporting is creating measurable change across Nepal"
              : "नागरिक रिपोर्टिङले नेपालभर कसरी मापनयोग्य परिवर्तन ल्याइरहेको छ हेर्नुहोस्"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label[language]}</div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingDown className="h-3 w-3 mr-1 text-chart-5" />
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === "en" ? "Recent Success Stories" : "हालैका सफलताका कथाहरू"}
          </h3>

          <div className="space-y-6">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{story.location[language]}</span>
                        <Badge variant={story.status === "resolved" ? "default" : "secondary"} className="ml-auto">
                          {story.status === "resolved" ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {language === "en" ? "Resolved" : "समाधान भयो"}
                            </>
                          ) : (
                            <>
                              <Calendar className="h-3 w-3 mr-1" />
                              {language === "en" ? "In Progress" : "प्रगतिमा"}
                            </>
                          )}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-semibold text-primary mb-2">{story.impact[language]}</h4>

                      <p className="text-muted-foreground text-sm leading-relaxed">{story.description[language]}</p>
                    </div>

                    <div className="text-xs text-muted-foreground md:text-right">
                      {new Date(story.date).toLocaleDateString(language === "en" ? "en-US" : "ne-NP")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
