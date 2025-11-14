import { GlassCard } from "./glass-card"

interface MetricDisplayProps {
  value: string
  label: string
}

export function MetricDisplay({ value, label }: MetricDisplayProps) {
  return (
    <GlassCard className="p-8 text-center" glow>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </GlassCard>
  )
}
