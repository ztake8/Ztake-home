import { GlassCard } from "./glass-card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <GlassCard className="p-8" hover>
      <div className="mb-6">
        <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-foreground/90 mb-6 leading-relaxed italic">{quote}</p>
      <div className="border-t border-white/20 dark:border-white/10 pt-4">
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role} at {company}
        </div>
      </div>
    </GlassCard>
  )
}
