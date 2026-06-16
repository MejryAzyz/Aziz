"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Server, Cpu, Boxes, Network, GitBranch, Gauge, Cloud, Check } from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

function Counter({ to, label, icon: Icon }: { to: number; label: string; icon: typeof Server }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1)
      setV(Math.round(p * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card/50 p-6">
      <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="mt-5 font-mono text-5xl font-semibold tabular-nums text-foreground">{v}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

const flags = [
  { label: "CI/CD Automated", icon: GitBranch },
  { label: "Monitoring Enabled", icon: Gauge },
  { label: "Cloud-Native Deployment", icon: Cloud },
]

export function Results() {
  return (
    <section className="relative px-6 py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionLabel index="09">Results</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            What CloudAura delivered
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Reveal delay={0.0}><Counter to={1} label="Controller Node" icon={Server} /></Reveal>
          <Reveal delay={0.05}><Counter to={4} label="Compute Nodes" icon={Cpu} /></Reveal>
          <Reveal delay={0.1}><Counter to={1} label="Kubernetes Master" icon={Boxes} /></Reveal>
          <Reveal delay={0.15}><Counter to={2} label="Worker Nodes" icon={Network} /></Reveal>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {flags.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-5">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                  <Check className="ml-auto size-5 text-primary" />
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* closing statement */}
        <Reveal delay={0.1} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-10 text-center sm:p-16">
            <div
              className="absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
              style={{ background: "var(--primary)" }}
            />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-3xl text-balance text-2xl font-medium leading-snug text-foreground sm:text-4xl"
            >
              "CloudAura was not just a project. It was the foundation that
              brought <span className="text-primary">YallaTN</span> to life."
            </motion.blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
