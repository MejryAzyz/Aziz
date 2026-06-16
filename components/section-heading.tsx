import type { ReactNode } from "react"

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: ReactNode
  subtitle?: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
        {index}
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
