import { Header } from "@/components/header"
import { ReportingForm } from "@/components/reporting-form"
import { Footer } from "@/components/footer"

export default function ReportPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ReportingForm />
      </div>
      <Footer />
    </main>
  )
}
