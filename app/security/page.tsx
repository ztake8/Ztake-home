import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react'

export default function Security() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Security & Compliance</h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade security to protect your business and customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8" glow>
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Certifications</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ PCI DSS Level 1</li>
                <li>✓ ISO 27001</li>
                <li>✓ SOC 2 Type II</li>
                <li>✓ GDPR Compliant</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <Lock className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Encryption</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ AES-256 Encryption</li>
                <li>✓ TLS 1.3</li>
                <li>✓ End-to-End Encryption</li>
                <li>✓ Tokenization</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <Eye className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Monitoring</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 24/7 Monitoring</li>
                <li>✓ Real-time Alerts</li>
                <li>✓ Fraud Detection</li>
                <li>✓ Security Audits</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <AlertCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Data Protection</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Data Backup</li>
                <li>✓ Disaster Recovery</li>
                <li>✓ Access Controls</li>
                <li>✓ Incident Response</li>
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-6">Your Data, Your Control</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We take security seriously. Your payment data is encrypted, tokenized, and never stored on our servers. 
              We comply with all major security standards and regulations to ensure your business and your customers' 
              data is protected.
            </p>
            <p className="text-lg text-muted-foreground">
              For detailed security information, please contact our security team at care@ztake.in
            </p>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
