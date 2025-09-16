import { Header } from "@/components/header"
import { DataDashboard } from "@/components/data-dashboard"
import { Footer } from "@/components/footer"

export default function ExplorePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DataDashboard />
      </div>
      <Footer />
    </main>
  )
}
