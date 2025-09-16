"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, FileText, Camera, Mic, CheckCircle, ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react"

interface ReportData {
  category: string
  department: string
  location: string
  district: string
  amount: string
  description: string
  evidence: File[]
  anonymityLevel: "full" | "partial" | "identified"
  contactMethod: string
  contactInfo: string
}

export function ReportingForm() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [currentStep, setCurrentStep] = useState(1)
  const [reportData, setReportData] = useState<ReportData>({
    category: "",
    department: "",
    location: "",
    district: "",
    amount: "",
    description: "",
    evidence: [],
    anonymityLevel: "full",
    contactMethod: "",
    contactInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reportId, setReportId] = useState<string | null>(null)

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const categories = [
    { en: "I paid a bribe", ne: "मैले घुस दिएँ", value: "paid_bribe" },
    { en: "I refused to pay", ne: "मैले घुस दिन अस्वीकार गरेँ", value: "refused_bribe" },
    { en: "I witnessed corruption", ne: "मैले भ्रष्टाचार देखेँ", value: "witnessed" },
    { en: "System worked properly", ne: "प्रणाली राम्रोसँग काम गर्यो", value: "positive" },
    { en: "Corruption prevented", ne: "भ्रष्टाचार रोकियो", value: "prevented" },
  ]

  const departments = [
    { en: "Passport Office", ne: "राहदानी कार्यालय", value: "passport" },
    { en: "Land Revenue Office", ne: "मालपोत कार्यालय", value: "land_revenue" },
    { en: "Traffic Police", ne: "ट्राफिक प्रहरी", value: "traffic" },
    { en: "Municipality", ne: "नगरपालिका", value: "municipality" },
    { en: "Education Department", ne: "शिक्षा विभाग", value: "education" },
    { en: "Health Department", ne: "स्वास्थ्य विभाग", value: "health" },
    { en: "Customs Office", ne: "भन्सार कार्यालय", value: "customs" },
    { en: "Other", ne: "अन्य", value: "other" },
  ]

  const districts = [
    "Kathmandu",
    "Lalitpur",
    "Bhaktapur",
    "Pokhara",
    "Chitwan",
    "Jhapa",
    "Morang",
    "Sunsari",
    "Dhanusha",
    "Mahottari",
    "Sarlahi",
    "Rautahat",
    "Bara",
    "Parsa",
    "Makwanpur",
    "Sindhuli",
    "Ramechhap",
    "Dolakha",
    "Sindhupalchok",
    "Kavrepalanchok",
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate report ID
    const id = `SAT-${Date.now().toString().slice(-6)}`
    setReportId(id)
    setIsSubmitting(false)
    setCurrentStep(totalSteps + 1) // Move to success step
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{language === "en" ? "What happened?" : "के भयो?"}</h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Select the category that best describes your experience"
                  : "तपाईंको अनुभवलाई राम्रोसँग वर्णन गर्ने श्रेणी छान्नुहोस्"}
              </p>
            </div>

            <div className="grid gap-4">
              {categories.map((category) => (
                <Card
                  key={category.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    reportData.category === category.value ? "ring-2 ring-primary border-primary" : ""
                  }`}
                  onClick={() => setReportData({ ...reportData, category: category.value })}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          reportData.category === category.value
                            ? "bg-primary border-primary"
                            : "border-muted-foreground"
                        }`}
                      />
                      <span className="font-medium">{category[language]}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {language === "en" ? "Where did this happen?" : "यो कहाँ भयो?"}
              </h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Help us understand the location and department involved"
                  : "स्थान र सम्बन्धित विभाग बुझ्न हामीलाई मद्दत गर्नुहोस्"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="department">{language === "en" ? "Department/Office" : "विभाग/कार्यालय"}</Label>
                <Select
                  value={reportData.department}
                  onValueChange={(value) => setReportData({ ...reportData, department: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={language === "en" ? "Select department" : "विभाग छान्नुहोस्"} />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">{language === "en" ? "District" : "जिल्ला"}</Label>
                <Select
                  value={reportData.district}
                  onValueChange={(value) => setReportData({ ...reportData, district: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={language === "en" ? "Select district" : "जिल्ला छान्नुहोस्"} />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="location">
                  {language === "en" ? "Specific Location (Optional)" : "विशिष्ट स्थान (वैकल्पिक)"}
                </Label>
                <Input
                  id="location"
                  placeholder={
                    language === "en" ? "e.g., Main office, Counter 3, etc." : "जस्तै: मुख्य कार्यालय, काउन्टर ३, आदि"
                  }
                  value={reportData.location}
                  onChange={(e) => setReportData({ ...reportData, location: e.target.value })}
                />
              </div>

              {(reportData.category === "paid_bribe" || reportData.category === "refused_bribe") && (
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="amount">{language === "en" ? "Amount (NPR)" : "रकम (रुपैयाँ)"}</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder={language === "en" ? "Enter amount" : "रकम लेख्नुहोस्"}
                    value={reportData.amount}
                    onChange={(e) => setReportData({ ...reportData, amount: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{language === "en" ? "Tell us more" : "हामीलाई थप भन्नुहोस्"}</h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Provide details about what happened. The more information, the better we can help."
                  : "के भयो भनेर विस्तारमा भन्नुहोस्। जति धेरै जानकारी, त्यति राम्रो हामी मद्दत गर्न सक्छौं।"}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">{language === "en" ? "Description" : "विवरण"}</Label>
                <Textarea
                  id="description"
                  placeholder={
                    language === "en"
                      ? "Describe what happened, when it occurred, who was involved, and any other relevant details..."
                      : "के भयो, कहिले भयो, को संलग्न थियो, र अन्य सान्दर्भिक विवरणहरू वर्णन गर्नुहोस्..."
                  }
                  className="min-h-32"
                  value={reportData.description}
                  onChange={(e) => setReportData({ ...reportData, description: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <Label>{language === "en" ? "Evidence (Optional)" : "प्रमाण (वैकल्पिक)"}</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <Camera className="h-6 w-6 mb-2" />
                    <span className="text-sm">{language === "en" ? "Upload Photo" : "फोटो अपलोड"}</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <FileText className="h-6 w-6 mb-2" />
                    <span className="text-sm">{language === "en" ? "Upload Document" : "कागजात अपलोड"}</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <Mic className="h-6 w-6 mb-2" />
                    <span className="text-sm">{language === "en" ? "Voice Recording" : "आवाज रेकर्डिङ"}</span>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "All evidence is encrypted and stored securely. Only verified investigators can access it."
                    : "सबै प्रमाणहरू एन्क्रिप्ट गरिएका छन् र सुरक्षित रूपमा भण्डारण गरिएका छन्। केवल प्रमाणित अनुसन्धानकर्ताहरूले मात्र पहुँच गर्न सक्छन्।"}
                </p>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{language === "en" ? "Privacy & Safety" : "गोपनीयता र सुरक्षा"}</h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Choose your level of anonymity and how we can contact you if needed"
                  : "आफ्नो गुमनामताको स्तर र आवश्यक परेमा हामीले कसरी सम्पर्क गर्न सक्छौं भनेर छान्नुहोस्"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Label>{language === "en" ? "Anonymity Level" : "गुमनामताको स्तर"}</Label>
                <div className="space-y-3">
                  {[
                    {
                      value: "full",
                      title: { en: "Completely Anonymous", ne: "पूर्ण रूपमा गुमनाम" },
                      description: {
                        en: "No contact information required. Maximum privacy protection.",
                        ne: "कुनै सम्पर्क जानकारी आवश्यक छैन। अधिकतम गोपनीयता सुरक्षा।",
                      },
                      icon: EyeOff,
                    },
                    {
                      value: "partial",
                      title: { en: "Partial Anonymity", ne: "आंशिक गुमनामता" },
                      description: {
                        en: "Contact info encrypted, only accessible to verified investigators.",
                        ne: "सम्पर्क जानकारी एन्क्रिप्ट गरिएको, केवल प्रमाणित अनुसन्धानकर्ताहरूलाई पहुँचयोग्य।",
                      },
                      icon: Eye,
                    },
                    {
                      value: "identified",
                      title: { en: "Identified Reporter", ne: "पहिचान गरिएको रिपोर्टर" },
                      description: {
                        en: "Willing to be contacted directly for follow-up and verification.",
                        ne: "फलोअप र प्रमाणीकरणको लागि प्रत्यक्ष सम्पर्क गर्न इच्छुक।",
                      },
                      icon: Shield,
                    },
                  ].map((option) => (
                    <Card
                      key={option.value}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        reportData.anonymityLevel === option.value ? "ring-2 ring-primary border-primary" : ""
                      }`}
                      onClick={() => setReportData({ ...reportData, anonymityLevel: option.value as any })}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 mt-1 ${
                              reportData.anonymityLevel === option.value
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <option.icon className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{option.title[language]}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{option.description[language]}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {reportData.anonymityLevel !== "full" && (
                <div className="space-y-4">
                  <Label>{language === "en" ? "Contact Method" : "सम्पर्क विधि"}</Label>
                  <Select
                    value={reportData.contactMethod}
                    onValueChange={(value) => setReportData({ ...reportData, contactMethod: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={language === "en" ? "Select contact method" : "सम्पर्क विधि छान्नुहोस्"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">{language === "en" ? "Email" : "इमेल"}</SelectItem>
                      <SelectItem value="phone">{language === "en" ? "Phone" : "फोन"}</SelectItem>
                      <SelectItem value="viber">Viber</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>

                  {reportData.contactMethod && (
                    <div className="space-y-2">
                      <Label htmlFor="contactInfo">
                        {reportData.contactMethod === "email"
                          ? language === "en"
                            ? "Email Address"
                            : "इमेल ठेगाना"
                          : language === "en"
                            ? "Phone Number"
                            : "फोन नम्बर"}
                      </Label>
                      <Input
                        id="contactInfo"
                        type={reportData.contactMethod === "email" ? "email" : "tel"}
                        placeholder={
                          reportData.contactMethod === "email"
                            ? language === "en"
                              ? "your@email.com"
                              : "तपाईंको@इमेल.com"
                            : language === "en"
                              ? "+977-98XXXXXXXX"
                              : "+९७७-९८XXXXXXXX"
                        }
                        value={reportData.contactInfo}
                        onChange={(e) => setReportData({ ...reportData, contactInfo: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {language === "en" ? "Review & Submit" : "समीक्षा र पेश गर्नुहोस्"}
              </h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Please review your report before submitting"
                  : "कृपया पेश गर्नु अघि आफ्नो रिपोर्ट समीक्षा गर्नुहोस्"}
              </p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === "en" ? "Category" : "श्रेणी"}
                    </Label>
                    <p className="font-medium">{categories.find((c) => c.value === reportData.category)?.[language]}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === "en" ? "Department" : "विभाग"}
                    </Label>
                    <p className="font-medium">
                      {departments.find((d) => d.value === reportData.department)?.[language]}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === "en" ? "District" : "जिल्ला"}
                    </Label>
                    <p className="font-medium">{reportData.district}</p>
                  </div>
                  {reportData.amount && (
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">
                        {language === "en" ? "Amount" : "रकम"}
                      </Label>
                      <p className="font-medium">NPR {reportData.amount}</p>
                    </div>
                  )}
                </div>

                {reportData.description && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === "en" ? "Description" : "विवरण"}
                    </Label>
                    <p className="text-sm mt-1 p-3 bg-muted rounded-md">{reportData.description}</p>
                  </div>
                )}

                <div>
                  <Label className="text-sm font-medium text-muted-foreground">
                    {language === "en" ? "Privacy Level" : "गोपनीयता स्तर"}
                  </Label>
                  <Badge variant="secondary" className="ml-2">
                    {reportData.anonymityLevel === "full"
                      ? language === "en"
                        ? "Completely Anonymous"
                        : "पूर्ण रूपमा गुमनाम"
                      : reportData.anonymityLevel === "partial"
                        ? language === "en"
                          ? "Partial Anonymity"
                          : "आंशिक गुमनामता"
                        : language === "en"
                          ? "Identified Reporter"
                          : "पहिचान गरिएको रिपोर्टर"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <div className="text-sm">
                <p className="font-medium mb-1">
                  {language === "en" ? "Your Safety is Our Priority" : "तपाईंको सुरक्षा हाम्रो प्राथमिकता हो"}
                </p>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "All reports are encrypted and stored securely. We follow international best practices for whistleblower protection."
                    : "सबै रिपोर्टहरू एन्क्रिप्ट गरिएका छन् र सुरक्षित रूपमा भण्डारण गरिएका छन्। हामी व्हिसलब्लोअर सुरक्षाको लागि अन्तर्राष्ट्रिय उत्कृष्ट अभ्यासहरू पालना गर्छौं।"}
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (reportId) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-chart-5 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Report Submitted Successfully" : "रिपोर्ट सफलतापूर्वक पेश गरियो"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === "en"
                ? "Thank you for your courage in reporting corruption. Your report has been securely submitted."
                : "भ्रष्टाचार रिपोर्ट गर्ने साहसको लागि धन्यवाद। तपाईंको रिपोर्ट सुरक्षित रूपमा पेश गरिएको छ।"}
            </p>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <Label className="text-sm font-medium text-muted-foreground">
                {language === "en" ? "Report ID" : "रिपोर्ट ID"}
              </Label>
              <p className="text-lg font-mono font-bold text-primary">{reportId}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "en"
                  ? "Save this ID to track your report's progress"
                  : "आफ्नो रिपोर्टको प्रगति ट्र्याक गर्न यो ID सुरक्षित राख्नुहोस्"}
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full">
                {language === "en" ? "Track Report Status" : "रिपोर्ट स्थिति ट्र्याक गर्नुहोस्"}
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                {language === "en" ? "Submit Another Report" : "अर्को रिपोर्ट पेश गर्नुहोस्"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{language === "en" ? "Report Corruption" : "भ्रष्टाचार रिपोर्ट गर्नुहोस्"}</h1>
          <Badge variant="outline">
            {language === "en" ? `Step ${currentStep} of ${totalSteps}` : `चरण ${currentStep} को ${totalSteps}`}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Form Content */}
      <Card>
        <CardContent className="p-8">{renderStep()}</CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === "en" ? "Previous" : "अघिल्लो"}
        </Button>

        {currentStep === totalSteps ? (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !reportData.category || !reportData.department}
            className="min-w-32"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                {language === "en" ? "Submitting..." : "पेश गर्दै..."}
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                {language === "en" ? "Submit Report" : "रिपोर्ट पेश गर्नुहोस्"}
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !reportData.category) ||
              (currentStep === 2 && (!reportData.department || !reportData.district))
            }
          >
            {language === "en" ? "Next" : "अर्को"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
