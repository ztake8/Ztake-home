import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Code, BookOpen, GitBranch } from 'lucide-react'

export default function Docs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to integrate Ztake Payments into your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-8" glow>
              <Code className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">API Reference</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive REST API documentation with examples in multiple languages
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                View API Docs →
              </a>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <BookOpen className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Guides</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step integration guides for web, mobile, and custom implementations
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Read Guides →
              </a>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <GitBranch className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">SDKs & Tools</h3>
              <p className="text-muted-foreground mb-4">
                Official SDKs for JavaScript, Python, Ruby, Java, and Go with example projects
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Browse SDKs →
              </a>
            </GlassCard>
          </div>

          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Get Your API Keys</h3>
                <p className="text-muted-foreground mb-4">
                  Sign up for a Ztake account and generate your API keys from the dashboard
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. Install SDKs</h3>
                <p className="text-muted-foreground mb-4">
                  Install the Ztake SDK for your platform (JavaScript, Python, etc.)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Integrate Payment Flow</h3>
                <p className="text-muted-foreground mb-4">
                  Follow our guides to integrate the payment checkout into your application
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">4. Test & Deploy</h3>
                <p className="text-muted-foreground">
                  Use test keys to verify your integration, then go live with production keys
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
