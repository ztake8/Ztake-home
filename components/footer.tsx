import Link from "next/link"
import { Twitter, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Payment Gateway", href: "/payments" },
      { label: "Subscriptions", href: "/subscriptions" },
      { label: "ZtakeX Banking", href: "/ztakex" },
      { label: "Capital", href: "/capital" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.ztake.in" },
      { label: "API Reference", href: "https://docs.ztake.in" },
      { label: "SDKs", href: "https://docs.ztake.in" },
      { label: "Webhooks", href: "https://docs.ztake.in" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Support", href: "/support" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-accent/20 dark:from-gray-900 dark:to-gray-950 border-t border-white/30 dark:border-white/15">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/">
              <div className="inline-block cursor-pointer">
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white-IspcAk6S1P5sn9M9E4I2o86pzPJHjq.png"
                    alt="Ztake"
                    width={48}
                    height={48}
                    className="dark:hidden"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ztake-cxPoCHdxN6bMEVDEaFzRfqlcSmAoqT.png"
                    alt="Ztake"
                    width={48}
                    height={48}
                    className="hidden dark:block"
                  />
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Empowering modern businesses to get paid instantly.</p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-[14px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-[14px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sale@ztake.in"
                className="p-2 rounded-[14px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                          {link.label}
                        </div>
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                          {link.label}
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/30 dark:border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ztake Payments. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with precision in India</span>
              <span className="hidden md:inline">•</span>
              <a href="mailto:care@ztake.in" className="hover:text-foreground transition-colors">
                care@ztake.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
