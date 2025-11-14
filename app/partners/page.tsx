import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Users, TrendingUp, Globe } from 'lucide-react'

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Partnership Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your business by partnering with Ztake Payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8 text-center" glow>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Reseller Program</h3>
              <p className="text-muted-foreground mb-6">
                Become a Ztake reseller and earn competitive commissions
              </p>
              <PillButton variant="outline" href="/contact">Learn More</PillButton>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Affiliate Program</h3>
              <p className="text-muted-foreground mb-6">
                Refer customers and earn recurring commissions
              </p>
              <PillButton variant="outline" href="/contact">Join Now</PillButton>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Integration Partners</h3>
              <p className="text-muted-foreground mb-6">
                Integrate Ztake into your platform or app
              </p>
              <PillButton variant="outline" href="/contact">Partner With Us</PillButton>
            </GlassCard>
          </div>

          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Ztake?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We provide competitive commissions, marketing support, and a dedicated partner team to help you succeed.
            </p>
            <PillButton variant="default" size="lg" href="/contact">Get Started</PillButton>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
