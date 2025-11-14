import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">Last Updated: 21/11/2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-foreground">
                Ztake Tech Private Limited ("Ztake", "Us", "We", or "Our") operates as a Payment Aggregator and provides payouts and verification services, among others, to e-commerce marketplaces, educational institutions, financial institutions, web aggregators, and other partners.
              </p>
              <p className="mt-4 text-foreground">
                Our registered office is located at: Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India.
              </p>
              <p className="mt-4 text-foreground">
                We are committed to ensuring a secure data processing environment and providing a reliable payment process infrastructure for our customers. This Privacy Policy outlines how we collect, process, use, store, and share Your Personal Data when You access or use Our website, software, mobile application, payment infrastructure, or any related services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">2. Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Contact Information: Full name, email, phone, address</li>
                <li>Financial Information: Bank account number, UPI ID, card details</li>
                <li>Identification Information: PAN, Aadhaar, GST, photograph</li>
                <li>Transaction Data: Payment ID, transaction amount, date, merchant name</li>
                <li>Device & Log Data: IP address, browser type, device model, OS, location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">3. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li><strong>Right to Review and Correct:</strong> You may review and request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent by contacting us at care@ztake.in</li>
                <li><strong>Right to Information:</strong> You may request details of how we process your Personal Data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">4. Data Security</h2>
              <p className="text-foreground">
                We adhere to internationally recognized standards including ISO/IEC 27001, PCI DSS, and SOC 2. We conduct periodic audits by certified professionals to ensure compliance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">5. Contact Us</h2>
              <p className="text-foreground">
                For any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-accent/20 dark:bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-foreground"><strong>Email:</strong> care@ztake.in</p>
                <p className="text-foreground"><strong>Phone:</strong> +91 9220592512</p>
                <p className="text-foreground"><strong>Website:</strong> www.ztake.in</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
