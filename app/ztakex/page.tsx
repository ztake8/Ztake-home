import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Wallet, CreditCard, TrendingUp, Shield } from 'lucide-react'

export default function ZtakeX() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ZtakeX
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Business Banking
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete banking solutions for businesses - payouts, corporate cards, and more
          </p>
          <PillButton variant="default" size="lg" href="/contact">
            Get Business Banking
          </PillButton>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              icon={Wallet}
              title="Instant Payouts"
              description="Withdraw funds 24/7 with real-time settlements"
            />
            <FeatureCard
              icon={CreditCard}
              title="Corporate Cards"
              description="Virtual and physical cards for your team"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Business Analytics"
              description="Deep insights into your cash flow"
            />
            <FeatureCard
              icon={Shield}
              title="Security"
              description="Enterprise-grade security for your funds"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
