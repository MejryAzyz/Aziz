"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Server, Cpu, Database, Network, Globe, Cog, Brain, Container } from "lucide-react"
import { SectionLabel } from "./section-label"

const morph = [
  { infra: { label: "Controller", icon: Server }, app: { label: "Frontend", icon: Globe } },
  { infra: { label: "Compute", icon: Cpu }, app: { label: "Backend API", icon: Cog } },
  { infra: { label: "Storage", icon: Database }, app: { label: "Database", icon: Database } },
  { infra: { label: "Network", icon: Network }, app: { label: "AI Engine", icon: Brain } },
]

export function Transformation() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const infraOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0])
  const appOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1])
  const containerScale = useTransform(scrollYProgress, [0.4, 0.65], [0.6, 1])
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <section ref={ref} className="relative px-6 py-32">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionLabel index="07">The Moment It Became Real</SectionLabel>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            From Infrastructure to Real Impact
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            CloudAura was never built for demonstration alone. It became the
            hosting platform for a real application. Scroll, and watch the
            infrastructure transform into a running product.
          </p>
        </div>

        {/* progress rail */}
        <div className="mx-auto mt-14 h-1 w-full max-w-md overflow-hidden rounded-full bg-border">
          <motion.div className="h-full rounded-full bg-primary" style={{ width: progressWidth }} />
        </div>
        <div className="mx-auto mt-3 flex w-full max-w-md justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Infrastructure</span>
          <span>Application</span>
        </div>

        {/* morph grid */}
        <div className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {morph.map((m, i) => {
            const InfraIcon = m.infra.icon
            const AppIcon = m.app.icon
            return (
              <div
                key={i}
                className="relative flex h-36 items-center justify-center rounded-2xl border border-border bg-card/50"
              >
                <motion.div style={{ opacity: infraOpacity }} className="absolute flex flex-col items-center gap-2">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-background/60 text-muted-foreground">
                    <InfraIcon className="size-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{m.infra.label}</span>
                </motion.div>
                <motion.div style={{ opacity: appOpacity }} className="absolute flex flex-col items-center gap-2">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary shadow-[0_0_24px_-8px_var(--primary)]">
                    <AppIcon className="size-6" />
                  </div>
                  <span className="font-mono text-xs text-primary">{m.app.label}</span>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* cluster filling with containers */}
        <motion.div
          style={{ scale: containerScale, opacity: appOpacity }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/30 bg-card/60 p-6"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Container className="size-4" />
            Kubernetes Cluster · YallaTN namespace
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 260, damping: 18 }}
                className="flex aspect-square items-center justify-center rounded-md border border-primary/30 bg-primary/10"
              >
                <Container className="size-4 text-primary/80" />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
