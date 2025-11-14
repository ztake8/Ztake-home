import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Users, Zap, Globe } from 'lucide-react'

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of digital payments in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8 text-center" glow>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Great Team</h3>
              <p className="text-muted-foreground">
                Work with talented engineers, designers, and product managers
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Fast Growth</h3>
              <p className="text-muted-foreground">
                Opportunity to grow your skills and career rapidly
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Build products that impact millions of businesses
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {[
                { title: 'Senior Backend Engineer', dept: 'Engineering' },
                { title: 'Frontend Engineer (React)', dept: 'Engineering' },
                { title: 'Product Manager', dept: 'Product' },
                { title: 'Sales Executive', dept: 'Sales' },
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between pb-6 border-b border-border last:border-0">
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.dept}</p>
                  </div>
                  <PillButton variant="outline" href="/contact">Apply</PillButton>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
