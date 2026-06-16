"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Activity, Cpu, Database, Network, Server } from "lucide-react"

const nodes = [
  { id: "ctrl", x: 50, y: 28, label: "Controller", icon: Server },
  { id: "c1", x: 20, y: 55, label: "Compute", icon: Cpu },
  { id: "c2", x: 38, y: 78, label: "Compute", icon: Cpu },
  { id: "net", x: 80, y: 50, label: "Network", icon: Network },
  { id: "store", x: 64, y: 80, label: "Storage", icon: Database },
  { id: "k8s", x: 84, y: 22, label: "K8s", icon: Activity },
]

const links: [string, string][] = [
  ["ctrl", "c1"],
  ["ctrl", "c2"],
  ["ctrl", "net"],
  ["ctrl", "k8s"],
  ["net", "store"],
  ["c2", "store"],
  ["net", "k8s"],
]

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!
}

function LiveMetric({
  label,
  value,
  suffix,
  decimals = 0,
  base,
  jitter,
}: {
  label: string
  value: number
  suffix: string
  decimals?: number
  base: number
  jitter: number
}) {
  const [v, setV] = useState(value)
  useEffect(() => {
    const t = setInterval(() => {
      setV(base + Math.random() * jitter)
    }, 1600)
    return () => clearInterval(t)
  }, [base, jitter])
  return (
    <div className="rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-mono text-lg tabular-nums text-foreground">
        {v.toFixed(decimals)}
        <span className="ml-0.5 text-sm text-primary">{suffix}</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* topology background */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-70" />
      <div
        className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--primary)" }}
      />

      <div className="pointer-events-none absolute inset-0">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.78 0.13 200)" stopOpacity="0.05" />
              <stop offset="50%" stopColor="oklch(0.78 0.13 200)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.78 0.13 200)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {links.map(([a, b], i) => {
            const na = nodeById(a)
            const nb = nodeById(b)
            return (
              <line
                key={i}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="url(#linkGrad)"
                strokeWidth="0.25"
                strokeDasharray="1.5 2.5"
                className="animate-dash"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            )
          })}
        </svg>
      </div>

      {/* floating nodes */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {nodes.map((n, i) => {
          const Icon = n.icon
          return (
            <motion.div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-card/80 text-primary shadow-[0_0_24px_-6px_var(--primary)] backdrop-blur">
                  <Icon className="size-5" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{n.label}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gradient animate-flow text-balance text-6xl font-semibold tracking-tight sm:text-8xl lg:text-[9rem]"
        >
          CLOUDAURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl"
        >
          Private Cloud Infrastructure Platform
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          A complete cloud-native platform built using OpenStack, Kubernetes,
          CI/CD automation and observability tools.
        </motion.p>

        
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll the lifecycle</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
