"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

function useSeries(count: number, base: number, range: number, speed = 2000) {
  // Deterministic initial values so server and client markup match (no hydration mismatch).
  const [data, setData] = useState<number[]>(() =>
    Array.from({ length: count }, (_, i) => base + (range / 2) * (1 + Math.sin(i / 2.2))),
  )
  useEffect(() => {
    // Seed with live randomized data only after mount.
    setData(Array.from({ length: count }, () => base + Math.random() * range))
    const t = setInterval(() => {
      setData((prev) => [...prev.slice(1), base + Math.random() * range])
    }, speed)
    return () => clearInterval(t)
  }, [count, base, range, speed])
  return data
}

function AreaChart({ data, color }: { data: number[]; color: string }) {
  const w = 100
  const h = 38
  const max = Math.max(...data) * 1.1
  const min = Math.min(...data) * 0.9
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((d - min) / (max - min || 1)) * h
    return [x, y]
  })
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ")
  const area = `${line} L${w},${h} L0,${h} Z`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-20 w-full">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path d={area} fill={`url(#g-${color})`} animate={{ d: area }} transition={{ duration: 1 }} />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        animate={{ d: line }}
        transition={{ duration: 1 }}
      />
    </svg>
  )
}

function DashWindow({
  app,
  title,
  metric,
  unit,
  color,
  data,
  offset,
}: {
  app: string
  title: string
  metric: string
  unit: string
  color: string
  data: number[]
  offset: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6 + offset, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="rounded-xl border border-border bg-card/70 shadow-2xl backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-4/70" />
        <span className="size-2.5 rounded-full bg-chart-3/70" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">{app}</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-primary">
          live
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-end justify-between">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <span className="font-mono text-lg tabular-nums" style={{ color }}>
            {data[data.length - 1].toFixed(0)}
            <span className="ml-0.5 text-xs text-muted-foreground">{unit}</span>
          </span>
        </div>
        <div className="mt-2">
          <AreaChart data={data} color={color} />
        </div>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>{metric}</span>
          <span>last 60s</span>
        </div>
      </div>
    </motion.div>
  )
}

export function Observability() {
  const cpu = useSeries(24, 35, 45, 1800)
  const mem = useSeries(24, 55, 30, 2200)
  const health = useSeries(24, 92, 8, 2600)
  const reqs = useSeries(24, 800, 600, 1500)

  return (
 <section className="relative px-6 py-28">
  <div
    className="absolute left-1/2 top-1/2 h-[40vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
    style={{ background: "var(--accent)" }}
  />

  <div className="relative mx-auto max-w-6xl">
    <Reveal className="flex flex-col items-start gap-5">
      <SectionLabel index="06">Observability</SectionLabel>

      <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Full visibility, in real time
      </h2>

      <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Prometheus scrapes the metrics; Grafana brings them to life. Floating
        dashboards keep CPU, memory, cluster health and application traffic
        in constant view.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {[
        {
          title: "CPU Monitoring",
          image: "/prometheus.png",
        },
        {
          title: "Memory Monitoring",
          image: "/grafana.png",
        },
        
      ].map((dashboard, index) => (
        <Reveal key={dashboard.title} delay={0.05 * index}>
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur">
            <img
              src={dashboard.image}
              alt={dashboard.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
  )
}
