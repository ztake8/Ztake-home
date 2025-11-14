import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { BarChart3, Clock, Users, TrendingUp } from 'lucide-react'

export default function Subscriptions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Subscription
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Manage recurring billing and subscription plans with automated dunning and retention
          </p>
          <PillButton variant="default" size="lg" href="/contact">
            Start Recurring Billing
          </PillButton>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              icon={Clock}
              title="Flexible Billing"
              description="Support monthly, quarterly, and annual billing cycles"
            />
            <FeatureCard
              icon={Users}
              title="Customer Portal"
              description="Let customers manage their subscriptions themselves"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Smart Dunning"
              description="Automated retry logic for failed payments"
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics"
              description="Track churn, MRR, and lifetime value"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
