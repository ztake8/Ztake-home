import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { ShoppingCart, BookOpen, Briefcase, Building2 } from 'lucide-react'

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tailored payment solutions for different industries
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={ShoppingCart}
              title="E-commerce"
              description="Optimize checkout for maximum conversion rates"
            />
            <FeatureCard
              icon={BookOpen}
              title="Education"
              description="Manage fees, tuition, and course payments"
            />
            <FeatureCard
              icon={Briefcase}
              title="SaaS"
              description="Recurring billing and subscription management"
            />
            <FeatureCard
              icon={Building2}
              title="Enterprises"
              description="Custom solutions and dedicated support"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
