import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Code, GitBranch, BookOpen, Zap } from 'lucide-react'

export default function Developers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Built for
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Developers
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive APIs and SDKs with excellent documentation and support
          </p>
          <PillButton variant="default" size="lg" href="/docs">
            View API Docs
          </PillButton>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              icon={Code}
              title="RESTful APIs"
              description="Well-designed APIs with comprehensive documentation"
            />
            <FeatureCard
              icon={GitBranch}
              title="Multiple SDKs"
              description="JavaScript, Python, Ruby, Java, Go, and more"
            />
            <FeatureCard
              icon={BookOpen}
              title="Great Docs"
              description="Detailed guides and examples for quick integration"
            />
            <FeatureCard
              icon={Zap}
              title="Fast Integration"
              description="Get up and running in minutes, not days"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Languages</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['JavaScript', 'Python', 'Ruby', 'Java', 'Go', 'PHP'].map((lang) => (
              <GlassCard key={lang} className="p-8 text-center">
                <div className="text-2xl font-bold">{lang}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
