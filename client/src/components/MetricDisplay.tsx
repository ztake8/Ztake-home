import { GlassCard } from "./GlassCard"
import { cn } from "@/lib/utils"

interface MetricDisplayProps {
  value: string
  label: string
  className?: string
}

export function MetricDisplay({ value, label, className }: MetricDisplayProps) {
  return (
    <GlassCard className={cn("p-8 text-center", className)} glow>
      <div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2"
        data-testid={`metric-value-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {value}
      </div>
      <div
        className="text-sm text-muted-foreground font-medium"
        data-testid={`metric-label-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {label}
      </div>
    </GlassCard>
  )
}
