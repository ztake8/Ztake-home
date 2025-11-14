import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[28px] overflow-visible",
        "backdrop-blur-[40px] backdrop-saturate-[180%]",
        "bg-white/60 dark:bg-gray-900/50",
        "border border-white/30 dark:border-white/15",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]",
        hover &&
          "hover:scale-[1.02] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.5)] transition-all duration-300 ease-out cursor-pointer",
        glow && "ring-1 ring-white/50 dark:ring-white/20",
        className,
      )}
      data-testid="glass-card"
    >
      {glow && (
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent pointer-events-none" />
      )}
      {children}
    </div>
  )
}
