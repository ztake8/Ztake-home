"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X, LogIn } from 'lucide-react'
import { useTheme } from "./theme-provider"
import { PillButton } from "./pill-button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { label: "Payments", href: "/payments" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "ZtakeX", href: "/ztakex" },
  { label: "Developers", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleLoginClick = () => {
    window.location.href = "https://ztake.in/login"
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/70 dark:bg-gray-900/60 border-b border-white/30 dark:border-white/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative w-7 h-7">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white-IspcAk6S1P5sn9M9E4I2o86pzPJHjq.png"
                  alt="Ztake"
                  width={28}
                  height={28}
                  className="dark:hidden"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ztake-cxPoCHdxN6bMEVDEaFzRfqlcSmAoqT.png"
                  alt="Ztake"
                  width={28}
                  height={28}
                  className="hidden dark:block"
                />
              </div>
              <div className="text-xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent tracking-tight">
                ZTAKE
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
                    pathname === link.href || pathname?.startsWith(link.href + "/")
                      ? "backdrop-blur-xl bg-white/50 dark:bg-white/15 text-primary shadow-sm"
                      : "text-foreground/70 hover:text-foreground",
                  )}
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
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <PillButton variant="ghost" href="/contact">
                Contact Sales
              </PillButton>
              <button
                onClick={handleLoginClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-600/80 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Login to Ztake"
              >
                <span>Login</span>
                <LogIn className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-[16px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 shadow-sm"
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
                    pathname === link.href || pathname?.startsWith(link.href + "/")
                      ? "backdrop-blur-xl bg-white/60 dark:bg-white/15 text-primary shadow-sm"
                      : "text-foreground/70 hover:backdrop-blur-xl hover:bg-white/40 dark:hover:bg-white/10",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <PillButton variant="outline" href="/contact">
                Contact Sales
              </PillButton>
              <button
                onClick={handleLoginClick}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full backdrop-blur-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-600/80 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Login to Ztake"
              >
                <span>Login</span>
                <LogIn className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
