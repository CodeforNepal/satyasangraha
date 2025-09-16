"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  Building,
  Calendar,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  FileText,
} from "lucide-react"

export function DataDashboard() {
  const [language, setLanguage] = useState<"en" | "ne">("en")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("6months")

  // Mock data for visualization
  const corruptionByDepartment = [
    { name: language === "en" ? "Passport Office" : "राहदानी कार्यालय", reports: 245, prevented: 89, amount: 1250000 },
    { name: language === "en" ? "Traffic Police" : "ट्राफिक प्रहरी", reports: 189, prevented: 156, amount: 890000 },
    { name: language === "en" ? "Municipality" : "नगरपालिका", reports: 167, prevented: 78, amount: 2100000 },
    { name: language === "en" ? "Land Revenue" : "मालपोत", reports: 134, prevented: 45, amount: 1800000 },
    { name: language === "en" ? "Education" : "शिक्षा", reports: 98, prevented: 67, amount: 650000 },
    { name: language === "en" ? "Health" : "स्वास्थ्य", reports: 87, prevented: 34, amount: 780000 },
  ]

  const corruptionTrends = [
    { month: "Jul", reports: 156, prevented: 45, resolved: 89 },
    { month: "Aug", reports: 189, prevented: 67, resolved: 123 },
    { month: "Sep", reports: 234, prevented: 89, resolved: 156 },
    { month: "Oct", reports: 198, prevented: 78, resolved: 134 },
    { month: "Nov", reports: 167, prevented: 56, resolved: 145 },
    { month: "Dec", reports: 145, prevented: 67, resolved: 112 },
  ]

  const districtData = [
    { name: "Kathmandu", value: 456, color: "#DC143C" },
    { name: "Lalitpur", value: 234, color: "#003893" },
    { name: "Bhaktapur", value: 123, color: "#F59E0B" },
    { name: "Pokhara", value: 189, color: "#10b981" },
    { name: "Chitwan", value: 167, color: "#8B5CF6" },
    { name: "Others", value: 678, color: "#6B7280" },
  ]

  const impactMetrics = [
    {
      title: { en: "Total Reports", ne: "कुल रिपोर्टहरू" },
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: { en: "Corruption Prevented", ne: "रोकिएको भ्रष्टाचार" },
      value: "NPR 12.5M",
      change: "+23%",
      trend: "up",
      icon: CheckCircle,
      color: "text-chart-5",
    },
    {
      title: { en: "Cases Resolved", ne: "समाधान भएका मुद्दाहरू" },
      value: "1,234",
      change: "+18%",
      trend: "up",
      icon: TrendingUp,
      color: "text-secondary",
    },
    {
      title: { en: "Active Districts", ne: "सक्रिय जिल्लाहरू" },
      value: "75",
      change: "+8",
      trend: "up",
      icon: MapPin,
      color: "text-accent",
    },
  ]

  const recentReports = [
    {
      id: "SAT-001234",
      category: { en: "Bribe Refused", ne: "घुस अस्वीकार" },
      department: { en: "Passport Office", ne: "राहदानी कार्यालय" },
      district: "Kathmandu",
      amount: 5000,
      status: "verified",
      date: "2025-01-15",
    },
    {
      id: "SAT-001235",
      category: { en: "Corruption Prevented", ne: "भ्रष्टाचार रोकियो" },
      department: { en: "Municipality", ne: "नगरपालिका" },
      district: "Pokhara",
      amount: 50000,
      status: "investigating",
      date: "2025-01-14",
    },
    {
      id: "SAT-001236",
      category: { en: "System Worked", ne: "प्रणाली काम गर्यो" },
      department: { en: "Traffic Police", ne: "ट्राफिक प्रहरी" },
      district: "Lalitpur",
      amount: 0,
      status: "positive",
      date: "2025-01-13",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {language === "en" ? "Corruption Data Explorer" : "भ्रष्टाचार डाटा अन्वेषक"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {language === "en"
              ? "Real-time insights into corruption patterns across Nepal"
              : "नेपालभरका भ्रष्टाचारका ढाँचाहरूमा वास्तविक समयको अन्तर्दृष्टि"}
          </p>
        </div>

        <div className="flex gap-3">
          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={language === "en" ? "All Districts" : "सबै जिल्लाहरू"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{language === "en" ? "All Districts" : "सबै जिल्लाहरू"}</SelectItem>
              <SelectItem value="kathmandu">Kathmandu</SelectItem>
              <SelectItem value="pokhara">Pokhara</SelectItem>
              <SelectItem value="chitwan">Chitwan</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">{language === "en" ? "1 Month" : "१ महिना"}</SelectItem>
              <SelectItem value="3months">{language === "en" ? "3 Months" : "३ महिना"}</SelectItem>
              <SelectItem value="6months">{language === "en" ? "6 Months" : "६ महिना"}</SelectItem>
              <SelectItem value="1year">{language === "en" ? "1 Year" : "१ वर्ष"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.title[language]}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
              <div className="flex items-center mt-4">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-chart-5 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                )}
                <span className={`text-sm font-medium ${metric.trend === "up" ? "text-chart-5" : "text-destructive"}`}>
                  {metric.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  {language === "en" ? "from last month" : "गत महिनादेखि"}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">{language === "en" ? "Overview" : "सिंहावलोकन"}</TabsTrigger>
          <TabsTrigger value="departments">{language === "en" ? "Departments" : "विभागहरू"}</TabsTrigger>
          <TabsTrigger value="geography">{language === "en" ? "Geography" : "भूगोल"}</TabsTrigger>
          <TabsTrigger value="trends">{language === "en" ? "Trends" : "प्रवृत्तिहरू"}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Corruption Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  {language === "en" ? "Corruption Trends" : "भ्रष्टाचारका प्रवृत्तिहरू"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={corruptionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="reports"
                      stackId="1"
                      stroke="#DC143C"
                      fill="#DC143C"
                      fillOpacity={0.6}
                      name={language === "en" ? "Reports" : "रिपोर्टहरू"}
                    />
                    <Area
                      type="monotone"
                      dataKey="prevented"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name={language === "en" ? "Prevented" : "रोकिएको"}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* District Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {language === "en" ? "Reports by District" : "जिल्ला अनुसार रिपोर्टहरू"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={districtData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {districtData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {language === "en" ? "Recent Reports" : "हालैका रिपोर्टहरू"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <span className="font-medium">{report.category[language]}</span>
                        <span className="text-sm text-muted-foreground">
                          {report.department[language]} • {report.district}
                        </span>
                      </div>
                      {report.amount > 0 && <Badge variant="outline">NPR {report.amount.toLocaleString()}</Badge>}
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={
                          report.status === "verified"
                            ? "default"
                            : report.status === "positive"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {report.status === "verified" && (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {language === "en" ? "Verified" : "प्रमाणित"}
                          </>
                        )}
                        {report.status === "investigating" && (
                          <>
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            {language === "en" ? "Investigating" : "अनुसन्धानमा"}
                          </>
                        )}
                        {report.status === "positive" && (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {language === "en" ? "Positive" : "सकारात्मक"}
                          </>
                        )}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(report.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                {language === "en" ? "Corruption by Department" : "विभाग अनुसार भ्रष्टाचार"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={corruptionByDepartment} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="reports" fill="#DC143C" name={language === "en" ? "Reports" : "रिपोर्टहरू"} />
                  <Bar dataKey="prevented" fill="#10b981" name={language === "en" ? "Prevented" : "रोकिएको"} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corruptionByDepartment.slice(0, 6).map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm">{dept.name}</h3>
                    <Building className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === "en" ? "Reports" : "रिपोर्टहरू"}
                      </span>
                      <span className="font-medium">{dept.reports}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === "en" ? "Prevented" : "रोकिएको"}
                      </span>
                      <span className="font-medium text-chart-5">{dept.prevented}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">{language === "en" ? "Amount" : "रकम"}</span>
                      <span className="font-medium">NPR {(dept.amount / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="geography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {language === "en" ? "Geographic Distribution" : "भौगोलिक वितरण"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={districtData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#DC143C" />
                  </BarChart>
                </ResponsiveContainer>

                <div className="space-y-4">
                  <h4 className="font-semibold">{language === "en" ? "Top Districts" : "शीर्ष जिल्लाहरू"}</h4>
                  {districtData.slice(0, 5).map((district, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: district.color }} />
                        <span className="font-medium">{district.name}</span>
                      </div>
                      <Badge variant="outline">{district.value} reports</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {language === "en" ? "Corruption Trends Over Time" : "समयसँगै भ्रष्टाचारका प्रवृत्तिहरू"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={corruptionTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="reports"
                    stroke="#DC143C"
                    strokeWidth={3}
                    name={language === "en" ? "Reports Filed" : "दायर गरिएका रिपोर्टहरू"}
                  />
                  <Line
                    type="monotone"
                    dataKey="prevented"
                    stroke="#10b981"
                    strokeWidth={3}
                    name={language === "en" ? "Corruption Prevented" : "रोकिएको भ्रष्टाचार"}
                  />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#003893"
                    strokeWidth={3}
                    name={language === "en" ? "Cases Resolved" : "समाधान भएका मुद्दाहरू"}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Trend Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-chart-5 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{language === "en" ? "Reporting Increase" : "रिपोर्टिङ वृद्धि"}</h3>
                <p className="text-2xl font-bold text-chart-5 mb-1">+23%</p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "More citizens reporting" : "धेरै नागरिकहरूले रिपोर्ट गर्दै"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{language === "en" ? "Resolution Rate" : "समाधान दर"}</h3>
                <p className="text-2xl font-bold text-secondary mb-1">78%</p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Cases resolved successfully" : "सफलतापूर्वक समाधान भएका मुद्दाहरू"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{language === "en" ? "Money Saved" : "बचत भएको पैसा"}</h3>
                <p className="text-2xl font-bold text-primary mb-1">NPR 12.5M</p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Corruption prevented" : "रोकिएको भ्रष्टाचार"}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
