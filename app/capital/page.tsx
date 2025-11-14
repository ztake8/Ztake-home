import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Zap, TrendingUp } from 'lucide-react'

export default function Capital() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Ztake Capital</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick, affordable financing for growing businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8" glow>
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Quick Funding</h3>
              <p className="text-muted-foreground mb-6">
                Get funded in 24 hours with minimal documentation. No collateral required.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Instant approval</li>
                <li>✓ Flexible repayment</li>
                <li>✓ Competitive rates</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <TrendingUp className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Grow Your Business</h3>
              <p className="text-muted-foreground mb-6">
                Use capital to scale your operations, inventory, and marketing.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Flexible terms</li>
                <li>✓ No prepayment penalties</li>
                <li>✓ Repeat funding available</li>
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Apply for Ztake Capital today and get the funds you need to grow your business.
            </p>
            <PillButton variant="default" size="lg" href="/contact">Apply Now</PillButton>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
