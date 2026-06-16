import type { ReactNode } from "react"

export function SectionLabel({
  index,
  children,
}: {
  index: string
  children: ReactNode
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur">
      <span className="font-mono text-xs text-primary">{index}</span>
      <span className="h-3 w-px bg-border" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}
