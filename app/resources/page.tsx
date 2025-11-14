import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { BookOpen, Video, FileText } from 'lucide-react'

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about payments and grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Guides */}
            <GlassCard className="p-8" glow>
              <BookOpen className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Guides</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step integration guides and best practices
              </p>
              <a
                href="/assistant?topic=integration-guides"
                className="text-primary font-semibold hover:blink"
              >
                Read Guides →
              </a>
            </GlassCard>

            {/* Video Tutorials */}
            <GlassCard className="p-8" glow>
              <Video className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Video tutorials for quick learning
              </p>
              <a
                href="/assistant?topic=video-tutorials"
                className="text-primary font-semibold hover:blink"
              >
                Watch Videos →
              </a>
            </GlassCard>

            {/* Blog */}
            <GlassCard className="p-8" glow>
              <FileText className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Blog</h3>
              <p className="text-muted-foreground mb-4">
                Industry insights and payment trends
              </p>
              <a
                href="/assistant?topic=blog"
                className="text-primary font-semibold hover:blink"
              >
                Read Blog →
              </a>
            </GlassCard>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
