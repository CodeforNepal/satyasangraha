"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  BookOpen,
  Shield,
  Scale,
  Phone,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Download,
  Play,
  MapPin,
} from "lucide-react"

export function EducationalContent() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  const rightsGuides = [
    {
      title: { en: "Right to Information (RTI)", ne: "सूचनाको हक (RTI)" },
      description: {
        en: "Learn how to request government information and hold officials accountable",
        ne: "सरकारी जानकारी माग्ने र अधिकारीहरूलाई जवाफदेही बनाउने तरिका सिक्नुहोस्",
      },
      icon: FileText,
      color: "text-primary",
      content: {
        en: [
          "Every citizen has the right to access government information",
          "RTI requests must be responded to within 15 days",
          "Information officers are legally required to provide requested data",
          "Appeals can be made if requests are denied without valid reason",
        ],
        ne: [
          "प्रत्येक नागरिकलाई सरकारी जानकारी पाउने अधिकार छ",
          "RTI अनुरोधको १५ दिनभित्र जवाफ दिनुपर्छ",
          "सूचना अधिकारीहरूले कानुनी रूपमा माग गरिएको डाटा उपलब्ध गराउनुपर्छ",
          "वैध कारण बिना अनुरोध अस्वीकार गरेमा अपील गर्न सकिन्छ",
        ],
      },
    },
    {
      title: { en: "Legal Protections", ne: "कानुनी सुरक्षा" },
      description: {
        en: "Understand your legal rights and protections when reporting corruption",
        ne: "भ्रष्टाचार रिपोर्ट गर्दा तपाईंका कानुनी अधिकार र सुरक्षाहरू बुझ्नुहोस्",
      },
      icon: Shield,
      color: "text-secondary",
      content: {
        en: [
          "Whistleblower Protection Act provides legal immunity",
          "Anonymous reporting is legally protected",
          "Retaliation against reporters is a criminal offense",
          "Legal aid is available for corruption reporters",
        ],
        ne: [
          "व्हिसलब्लोअर संरक्षण ऐनले कानुनी उन्मुक्ति प्रदान गर्छ",
          "गुमनाम रिपोर्टिङ कानुनी रूपमा संरक्षित छ",
          "रिपोर्टरहरू विरुद्ध बदला लिनु फौजदारी अपराध हो",
          "भ्रष्टाचार रिपोर्टरहरूका लागि कानुनी सहायता उपलब्ध छ",
        ],
      },
    },
    {
      title: { en: "Complaint Procedures", ne: "उजुरी प्रक्रियाहरू" },
      description: {
        en: "Step-by-step guide to filing official complaints through proper channels",
        ne: "उचित माध्यमबाट आधिकारिक उजुरी दायर गर्ने चरणबद्ध गाइड",
      },
      icon: Scale,
      color: "text-chart-3",
      content: {
        en: [
          "File complaints with CIAA (Commission for Investigation of Abuse of Authority)",
          "Use Hello Sarkar portal for government service complaints",
          "Contact Ombudsman for administrative grievances",
          "Approach courts for serious corruption cases",
        ],
        ne: [
          "CIAA (अख्तियार दुरुपयोग अनुसन्धान आयोग) मा उजुरी दायर गर्नुहोस्",
          "सरकारी सेवा उजुरीका लागि Hello Sarkar पोर्टल प्रयोग गर्नुहोस्",
          "प्रशासनिक गुनासोका लागि लोकायुक्तलाई सम्पर्क गर्नुहोस्",
          "गम्भीर भ्रष्टाचारका मुद्दाहरूका लागि अदालतमा जानुहोस्",
        ],
      },
    },
  ]

  const safetyGuides = [
    {
      title: { en: "Digital Safety", ne: "डिजिटल सुरक्षा" },
      tips: {
        en: [
          "Use Tor browser for anonymous browsing",
          "Enable two-factor authentication on all accounts",
          "Use encrypted messaging apps like Signal",
          "Regularly clear browser history and cookies",
          "Use VPN services when accessing sensitive information",
        ],
        ne: [
          "गुमनाम ब्राउजिङका लागि Tor ब्राउजर प्रयोग गर्नुहोस्",
          "सबै खाताहरूमा दुई-कारक प्रमाणीकरण सक्षम गर्नुहोस्",
          "Signal जस्ता एन्क्रिप्टेड मेसेजिङ एपहरू प्रयोग गर्नुहोस्",
          "नियमित रूपमा ब्राउजर इतिहास र कुकीहरू सफा गर्नुहोस्",
          "संवेदनशील जानकारी पहुँच गर्दा VPN सेवाहरू प्रयोग गर्नुहोस्",
        ],
      },
    },
    {
      title: { en: "Physical Safety", ne: "शारीरिक सुरक्षा" },
      tips: {
        en: [
          "Meet contacts in public places only",
          "Inform trusted friends about your activities",
          "Keep evidence in multiple secure locations",
          "Document any threats or intimidation",
          "Have emergency contacts readily available",
        ],
        ne: [
          "सम्पर्कहरूलाई सार्वजनिक ठाउँहरूमा मात्र भेट्नुहोस्",
          "आफ्ना गतिविधिहरूको बारेमा विश्वसनीय साथीहरूलाई जानकारी दिनुहोस्",
          "प्रमाणहरू धेरै सुरक्षित ठाउँहरूमा राख्नुहोस्",
          "कुनै धम्की वा डरधाम्कीको कागजात राख्नुहोस्",
          "आपतकालीन सम्पर्कहरू तत्काल उपलब्ध राख्नुहोस्",
        ],
      },
    },
  ]

  const successStories = [
    {
      title: { en: "Passport Office Reform", ne: "राहदानी कार्यालय सुधार" },
      location: "Kathmandu",
      impact: { en: "80% reduction in bribery", ne: "घुसखोरीमा ८०% कमी" },
      description: {
        en: "Citizen reports led to investigation and complete overhaul of passport processing procedures, eliminating most corruption.",
        ne: "नागरिक रिपोर्टहरूले अनुसन्धान र राहदानी प्रक्रिया प्रक्रियाहरूको पूर्ण परिवर्तन ल्यायो, धेरैजसो भ्रष्टाचार हटाउँदै।",
      },
      date: "2024-12-15",
    },
    {
      title: { en: "School Fund Recovery", ne: "विद्यालय कोष फिर्ता" },
      location: "Chitwan",
      impact: { en: "NPR 2.5M recovered", ne: "२५ लाख रुपैयाँ फिर्ता" },
      description: {
        en: "Community reporting exposed misuse of education funds, leading to recovery and proper allocation for student programs.",
        ne: "सामुदायिक रिपोर्टिङले शिक्षा कोषको दुरुपयोग पर्दाफास गर्‍यो, फिर्ता र विद्यार्थी कार्यक्रमहरूका लागि उचित बाँडफाँड ल्यायो।",
      },
      date: "2024-11-28",
    },
    {
      title: { en: "Traffic Police Accountability", ne: "ट्राफिक प्रहरी जवाफदेहिता" },
      location: "Pokhara",
      impact: { en: "Systematic change implemented", ne: "व्यवस्थित परिवर्तन लागू" },
      description: {
        en: "Multiple reports of traffic police corruption led to new monitoring systems and disciplinary actions.",
        ne: "ट्राफिक प्रहरी भ्रष्टाचारका धेरै रिपोर्टहरूले नयाँ निगरानी प्रणाली र अनुशासनात्मक कारबाही ल्यायो।",
      },
      date: "2024-10-10",
    },
  ]

  const resources = [
    {
      title: { en: "Corruption Prevention Handbook", ne: "भ्रष्टाचार रोकथाम पुस्तिका" },
      type: "PDF",
      size: "2.3 MB",
      description: {
        en: "Comprehensive guide to identifying and preventing corruption in daily life",
        ne: "दैनिक जीवनमा भ्रष्टाचार पहिचान र रोकथामको व्यापक गाइड",
      },
    },
    {
      title: { en: "RTI Request Templates", ne: "RTI अनुरोध टेम्प्लेटहरू" },
      type: "DOC",
      size: "156 KB",
      description: {
        en: "Ready-to-use templates for filing RTI requests",
        ne: "RTI अनुरोधहरू दायर गर्नका लागि प्रयोग गर्न तयार टेम्प्लेटहरू",
      },
    },
    {
      title: { en: "Legal Rights Video Series", ne: "कानुनी अधिकार भिडियो श्रृंखला" },
      type: "Video",
      size: "45 min",
      description: {
        en: "Educational videos explaining citizen rights and legal protections",
        ne: "नागरिक अधिकार र कानुनी सुरक्षाहरू व्याख्या गर्ने शैक्षिक भिडियोहरू",
      },
    },
  ]

  const emergencyContacts = [
    {
      organization: { en: "CIAA Hotline", ne: "CIAA हटलाइन" },
      phone: "1111",
      description: { en: "24/7 corruption reporting", ne: "२४/७ भ्रष्टाचार रिपोर्टिङ" },
    },
    {
      organization: { en: "Human Rights Commission", ne: "मानव अधिकार आयोग" },
      phone: "01-4770000",
      description: { en: "Rights violations and protection", ne: "अधिकार उल्लङ्घन र संरक्षण" },
    },
    {
      organization: { en: "Legal Aid Committee", ne: "कानुनी सहायता समिति" },
      phone: "01-4200000",
      description: { en: "Free legal assistance", ne: "निःशुल्क कानुनी सहायता" },
    },
    {
      organization: { en: "Press Council Nepal", ne: "प्रेस काउन्सिल नेपाल" },
      phone: "01-4102030",
      description: { en: "Media support and protection", ne: "मिडिया सहयोग र संरक्षण" },
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          {language === "en" ? "Know Your Rights & Stay Safe" : "आफ्ना अधिकारहरू जान्नुहोस् र सुरक्षित रहनुहोस्"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          {language === "en"
            ? "Empower yourself with knowledge about your rights, legal protections, and safety measures when fighting corruption"
            : "भ्रष्टाचारविरुद्ध लड्दा आफ्ना अधिकारहरू, कानुनी सुरक्षा र सुरक्षा उपायहरूको ज्ञानले आफूलाई सशक्त बनाउनुहोस्"}
        </p>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="rights" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="rights">{language === "en" ? "Your Rights" : "तपाईंका अधिकारहरू"}</TabsTrigger>
          <TabsTrigger value="safety">{language === "en" ? "Safety Guide" : "सुरक्षा गाइड"}</TabsTrigger>
          <TabsTrigger value="success">{language === "en" ? "Success Stories" : "सफलताका कथाहरू"}</TabsTrigger>
          <TabsTrigger value="resources">{language === "en" ? "Resources" : "स्रोतहरू"}</TabsTrigger>
          <TabsTrigger value="help">{language === "en" ? "Get Help" : "सहायता पाउनुहोस्"}</TabsTrigger>
        </TabsList>

        <TabsContent value="rights" className="space-y-6">
          <div className="grid gap-6">
            {rightsGuides.map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <guide.icon className={`h-6 w-6 ${guide.color}`} />
                    {guide.title[language]}
                  </CardTitle>
                  <p className="text-muted-foreground">{guide.description[language]}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.content[language].map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-chart-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{language === "en" ? "File RTI Request" : "RTI अनुरोध दायर गर्नुहोस्"}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Use our guided tool to create and submit RTI requests"
                    : "RTI अनुरोधहरू सिर्जना र पेश गर्न हाम्रो निर्देशित उपकरण प्रयोग गर्नुहोस्"}
                </p>
                <Button size="sm">{language === "en" ? "Start RTI Request" : "RTI अनुरोध सुरु गर्नुहोस्"}</Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold">{language === "en" ? "Legal Consultation" : "कानुनी परामर्श"}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Connect with human rights lawyers for free consultation"
                    : "निःशुल्क परामर्शका लागि मानव अधिकार वकिलहरूसँग जडान गर्नुहोस्"}
                </p>
                <Button size="sm" variant="secondary">
                  {language === "en" ? "Find Legal Help" : "कानुनी सहायता खोज्नुहोस्"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          <div className="grid gap-6">
            {safetyGuides.map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    {guide.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {guide.tips[language].map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Checklist */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-destructive">
                <AlertTriangle className="h-6 w-6" />
                {language === "en" ? "Safety Checklist" : "सुरक्षा जाँचसूची"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="before">
                  <AccordionTrigger>{language === "en" ? "Before Reporting" : "रिपोर्ट गर्नु अघि"}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        ✓ {language === "en" ? "Secure your digital devices" : "आफ्ना डिजिटल उपकरणहरू सुरक्षित गर्नुहोस्"}
                      </li>
                      <li>✓ {language === "en" ? "Inform trusted contacts" : "विश्वसनीय सम्पर्कहरूलाई जानकारी दिनुहोस्"}</li>
                      <li>✓ {language === "en" ? "Backup evidence safely" : "प्रमाणहरू सुरक्षित रूपमा ब्याकअप गर्नुहोस्"}</li>
                      <li>✓ {language === "en" ? "Plan communication methods" : "सञ्चार विधिहरूको योजना बनाउनुहोस्"}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="during">
                  <AccordionTrigger>{language === "en" ? "During Investigation" : "अनुसन्धानको समयमा"}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ {language === "en" ? "Maintain anonymity protocols" : "गुमनामता प्रोटोकलहरू कायम राख्नुहोस्"}</li>
                      <li>✓ {language === "en" ? "Document any threats" : "कुनै धम्कीको कागजात राख्नुहोस्"}</li>
                      <li>
                        ✓ {language === "en" ? "Stay in contact with support network" : "सहयोग नेटवर्कसँग सम्पर्कमा रहनुहोस्"}
                      </li>
                      <li>✓ {language === "en" ? "Avoid predictable routines" : "अनुमानित दिनचर्याबाट बच्नुहोस्"}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="success" className="space-y-6">
          <div className="grid gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{story.location}</span>
                        <Badge variant="secondary" className="ml-auto">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {story.impact[language]}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-primary mb-2">{story.title[language]}</h3>

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

          {/* Impact Summary */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{language === "en" ? "Collective Impact" : "सामूहिक प्रभाव"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">NPR 45M+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === "en" ? "Corruption Prevented" : "रोकिएको भ्रष्टाचार"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">1,200+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === "en" ? "Cases Resolved" : "समाधान भएका मुद्दाहरू"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-chart-5 mb-2">89%</div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Success Rate" : "सफलता दर"}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        {resource.type === "PDF" && <FileText className="h-6 w-6 text-primary" />}
                        {resource.type === "DOC" && <FileText className="h-6 w-6 text-secondary" />}
                        {resource.type === "Video" && <Play className="h-6 w-6 text-chart-3" />}
                      </div>
                      <div>
                        <h3 className="font-semibold">{resource.title[language]}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description[language]}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{resource.type}</Badge>
                          <span className="text-xs text-muted-foreground">{resource.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      {language === "en" ? "Download" : "डाउनलोड"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* External Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ExternalLink className="h-6 w-6" />
                {language === "en" ? "External Resources" : "बाह्य स्रोतहरू"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">{language === "en" ? "Government Portals" : "सरकारी पोर्टलहरू"}</h4>
                  <div className="space-y-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      Hello Sarkar Portal
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      CIAA Official Website
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      RTI Portal Nepal
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">{language === "en" ? "Civil Society" : "नागरिक समाज"}</h4>
                  <div className="space-y-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      Transparency International Nepal
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      Freedom Forum
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      Open Knowledge Nepal
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help" className="space-y-6">
          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-destructive" />
                {language === "en" ? "Emergency Contacts" : "आपतकालीन सम्पर्कहरू"}
              </CardTitle>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Immediate help and support when you need it most"
                  : "तपाईंलाई सबैभन्दा धेरै आवश्यक पर्दा तत्काल सहायता र समर्थन"}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{contact.organization[language]}</h4>
                      <p className="text-sm text-muted-foreground">{contact.description[language]}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-lg text-primary">{contact.phone}</div>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
                        {language === "en" ? "Call Now" : "अहिले कल गर्नुहोस्"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Services */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-secondary" />
                  {language === "en" ? "Community Support" : "सामुदायिक सहयोग"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Connect with other citizens and activists for mutual support and guidance"
                    : "पारस्परिक सहयोग र मार्गदर्शनका लागि अन्य नागरिकहरू र कार्यकर्ताहरूसँग जडान गर्नुहोस्"}
                </p>
                <Button className="w-full">{language === "en" ? "Join Community" : "समुदायमा सामेल हुनुहोस्"}</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-chart-3" />
                  {language === "en" ? "Training Programs" : "तालिम कार्यक्रमहरू"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Participate in workshops and training sessions on corruption prevention"
                    : "भ्रष्टाचार रोकथामका कार्यशाला र तालिम सत्रहरूमा भाग लिनुहोस्"}
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  {language === "en" ? "View Programs" : "कार्यक्रमहरू हेर्नुहोस्"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? "Frequently Asked Questions" : "बारम्बार सोधिने प्रश्नहरू"}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="faq1">
                  <AccordionTrigger>
                    {language === "en"
                      ? "Is it safe to report corruption anonymously?"
                      : "गुमनाम रूपमा भ्रष्टाचार रिपोर्ट गर्नु सुरक्षित छ?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === "en"
                      ? "Yes, our platform uses advanced encryption and follows international best practices for whistleblower protection. Your identity is never stored or transmitted."
                      : "हो, हाम्रो प्लेटफर्मले उन्नत एन्क्रिप्शन प्रयोग गर्छ र व्हिसलब्लोअर संरक्षणका लागि अन्तर्राष्ट्रिय उत्कृष्ट अभ्यासहरू पालना गर्छ। तपाईंको पहिचान कहिल्यै भण्डारण वा प्रसारण गरिँदैन।"}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq2">
                  <AccordionTrigger>
                    {language === "en" ? "What happens after I submit a report?" : "मैले रिपोर्ट पेश गरेपछि के हुन्छ?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === "en"
                      ? "Reports are verified by our team and civil society partners, then forwarded to appropriate authorities. You'll receive updates on progress through your chosen communication method."
                      : "रिपोर्टहरू हाम्रो टोली र नागरिक समाजका साझेदारहरूद्वारा प्रमाणित गरिन्छ, त्यसपछि उपयुक्त अधिकारीहरूलाई पठाइन्छ। तपाईंले आफ्नो छानिएको सञ्चार विधिमार्फत प्रगतिको अपडेट पाउनुहुनेछ।"}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq3">
                  <AccordionTrigger>
                    {language === "en"
                      ? "Can I get legal support if I face retaliation?"
                      : "यदि मैले बदलाको सामना गरेमा के म कानुनी सहायता पाउन सक्छु?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === "en"
                      ? "Absolutely. We have partnerships with human rights lawyers and legal aid organizations who provide free support to corruption reporters facing any form of retaliation."
                      : "बिल्कुल। हामीसँग मानव अधिकार वकिलहरू र कानुनी सहायता संस्थाहरूसँग साझेदारी छ जसले कुनै पनि प्रकारको बदलाको सामना गर्ने भ्रष्टाचार रिपोर्टरहरूलाई निःशुल्क सहयोग प्रदान गर्छ।"}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
