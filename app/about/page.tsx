import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Users, Target, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Ztake</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future of digital payments in India and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8 text-center" glow>
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Empower businesses of all sizes to accept payments securely and efficiently
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                Create a world where payment acceptance is simple, secure, and accessible to all
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Trust, Innovation, and Customer-first approach in everything we do
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ztake Payments was founded to solve the payment processing challenges faced by Indian businesses. 
                We recognized that existing solutions were either too complex or too expensive for startups and SMEs.
              </p>
              <p>
                Today, Ztake powers thousands of businesses processing millions of transactions daily. 
                Our platform has helped merchants increase their success rates, reduce fraud, and grow their businesses.
              </p>
              <p>
                We continue to innovate and expand our offerings to meet the evolving needs of our customers.
              </p>
            </div>
          </GlassCard>

          <div>
            <h2 className="text-3xl font-bold mb-8">Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Active Merchants</p>
              </GlassCard>
              <GlassCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">₹500Cr+</div>
                <p className="text-muted-foreground">Transactions Processed</p>
              </GlassCard>
              <GlassCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime SLA</p>
              </GlassCard>
              <GlassCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">180+</div>
                <p className="text-muted-foreground">Payment Methods</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
