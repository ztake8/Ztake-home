import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No setup fees. No monthly charges. Pay only for transactions processed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">2%</div>
                <p className="text-muted-foreground">Per transaction</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Instant settlements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Basic analytics</span>
                </li>
              </ul>
              <PillButton variant="outline" size="lg" href="/contact" className="w-full">
                Get Started
              </PillButton>
            </GlassCard>

            <GlassCard className="p-8 border-2 border-primary" glow>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">1.5%</div>
                <p className="text-muted-foreground">Per transaction</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>T+0 settlements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <PillButton variant="default" size="lg" href="/contact" className="w-full">
                Get Started
              </PillButton>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">Custom</div>
                <p className="text-muted-foreground">Volume-based pricing</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Custom features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <PillButton variant="outline" size="lg" href="/contact" className="w-full">
                Contact Sales
              </PillButton>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
