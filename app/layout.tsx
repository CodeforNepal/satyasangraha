import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "सत्यसंग्रह | Satyasangraha - Anti-Corruption Platform Nepal",
  description:
    "A civic technology platform for reporting corruption and promoting transparency in Nepal. Built by Code For Nepal.",
  generator: "v0.app",
  keywords: ["Nepal", "corruption", "transparency", "civic technology", "Code For Nepal"],
  authors: [{ name: "Code For Nepal" }],
  openGraph: {
    title: "सत्यसंग्रह | Satyasangraha",
    description: "Fighting corruption through technology in Nepal",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
