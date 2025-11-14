import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Terms & Conditions</h1>
          
          <p className="text-muted-foreground mb-6">Last Updated: 21/11/2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-foreground">
                By accessing and using the Ztake Website or services, you expressly agree to and consent to being irrevocably bound by these Terms and Conditions. If you do not agree with any of these terms, you must immediately cease accessing and/or using the Ztake Website or Services.
              </p>
              <p className="mt-4 text-foreground">
                Your continued use of the Ztake Website signifies your confirmation to these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">2. About Ztake</h2>
              <p className="text-foreground">
                Ztake Payments India Private Limited is a company incorporated under the Companies Act, 2013, with registered office at Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India 201305.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">3. Registration Requirements</h2>
              <p className="text-foreground">
                To use Ztake services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground">
                <li>You are above 18 years of age</li>
                <li>You are an Indian citizen or legal resident of India</li>
                <li>You are qualified to enter into a legally binding contract</li>
                <li>You will disclose your exact business category</li>
                <li>All information provided is true, correct, and authorized</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">4. Payment Processing</h2>
              <p className="text-foreground">
                Ztake shall collect payments into an Escrow Account and settle funds within T+2 days, where "T" represents the transaction date. Settlement cycle is subject to bank approval and may vary based on transaction type and risk parameters.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">5. Prohibited Activities</h2>
              <p className="text-foreground">
                You shall not use Ztake Services for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground">
                <li>Unlawful or illegal purposes</li>
                <li>Fraudulent transactions</li>
                <li>Restricted or prohibited business categories</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Money laundering or terrorist financing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">6. Termination</h2>
              <p className="text-foreground">
                Ztake may terminate Services with 30 days notice. Immediate termination may occur for breach of terms or illegal activities. Termination does not release you from payment obligations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
              <p className="text-foreground">
                Ztake's liability shall not exceed the amount of fees earned in the preceding month. Ztake shall not be liable for indirect, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">8. Contact Information</h2>
              <p className="text-foreground">
                For questions about these Terms and Conditions:
              </p>
              <div className="mt-4 p-4 bg-accent/20 dark:bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-foreground"><strong>Email:</strong> support@ztake.in</p>
                <p className="text-foreground"><strong>Phone:</strong> +91 9220592512</p>
                <p className="text-foreground"><strong>Care Team:</strong> care@ztake.in</p>
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
