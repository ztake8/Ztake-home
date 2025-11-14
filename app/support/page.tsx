import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react'

export default function Support() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Support & Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you succeed with Ztake Payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8" glow>
              <MessageCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Live Chat</h3>
              <p className="text-muted-foreground">
                Chat with our support team available 24/7
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <Mail className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Email Support</h3>
              <p className="text-muted-foreground">
                support@ztake.in - Response within 2 hours
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <Phone className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Phone Support</h3>
              <p className="text-muted-foreground">
                +91 9220592512 - Available 24/7
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <HelpCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Help Center</h3>
              <p className="text-muted-foreground">
                Browse our comprehensive FAQ and guides
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How do I get started?', a: 'Sign up for an account and follow our integration guide to get started.' },
                { q: 'What payment methods do you support?', a: 'We support 180+ payment methods including UPI, cards, wallets, and net banking.' },
                { q: 'What is your uptime guarantee?', a: 'We maintain a 99.9% uptime SLA for all our services.' },
                { q: 'Is my data secure?', a: 'Yes, we use bank-grade encryption and maintain PCI DSS Level 1 certification.' },
              ].map((faq, i) => (
                <div key={i} className="pb-6 border-b border-border last:border-0">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
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
