"use client"

import { Link, useLocation } from "wouter"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { PillButton } from "./PillButton"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Payments", href: "/payments" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "ZtakeX", href: "/ztakex" },
  { label: "Developers", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [location] = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/70 dark:bg-gray-900/60 border-b border-white/30 dark:border-white/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer" data-testid="link-home">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Ztake
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "px-4 py-2 rounded-[20px] text-sm font-medium transition-all duration-200 cursor-pointer",
                    "hover:backdrop-blur-xl hover:bg-white/40 dark:hover:bg-white/10",
                    location === link.href || location.startsWith(link.href + "/")
                      ? "backdrop-blur-xl bg-white/50 dark:bg-white/15 text-primary shadow-sm"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[16px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <PillButton variant="ghost" href="/contact" testId="button-contact-sales">
                Contact Sales
              </PillButton>
              <PillButton variant="default" href="/contact" testId="button-get-started">
                Get Started
              </PillButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-[16px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/80 dark:bg-gray-900/70 border-t border-white/30 dark:border-white/15">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "block px-4 py-3 rounded-[20px] text-sm font-medium transition-all duration-200 cursor-pointer",
                    location === link.href || location.startsWith(link.href + "/")
                      ? "backdrop-blur-xl bg-white/60 dark:bg-white/15 text-primary shadow-sm"
                      : "text-foreground/70 hover:backdrop-blur-xl hover:bg-white/40 dark:hover:bg-white/10",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <PillButton variant="outline" href="/contact" testId="mobile-button-contact">
                Contact Sales
              </PillButton>
              <PillButton variant="default" href="/contact" testId="mobile-button-start">
                Get Started
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
