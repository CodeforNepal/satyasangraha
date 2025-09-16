import { Header } from "@/components/header"
import { EducationalContent } from "@/components/educational-content"
import { Footer } from "@/components/footer"

export default function LearnPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <EducationalContent />
      </div>
      <Footer />
    </main>
  )
}
