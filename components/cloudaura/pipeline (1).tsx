"use client"

import { motion } from "motion/react"
import {
  GitFork,
  Hammer,
  FlaskConical,
  Container,
  Package,
  Boxes,
  HeartPulse,
  Rocket,
} from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

const stages = [
  { label: "GitHub", icon: GitFork },
  { label: "Build", icon: Hammer },
  { label: "Tests", icon: FlaskConical },
  { label: "Docker Images", icon: Container },
  { label: "Docker Hub", icon: Package },
  { label: "Kubernetes", icon: Boxes },
  { label: "Health Checks", icon: HeartPulse },
  { label: "Deployment", icon: Rocket },
]

function Connector({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-8 w-full md:h-px md:flex-1">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border md:left-0 md:top-1/2 md:h-px md:w-full md:translate-x-0 md:-translate-y-1/2" />
      {/* vertical particle (mobile) */}
      <motion.span
        className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)] md:hidden"
        animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay }}
      />
      {/* horizontal particle (desktop) */}
      <motion.span
        className="absolute top-1/2 hidden size-1.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)] md:block"
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay }}
      />
    </div>
  )
}

export function Pipeline() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionLabel index="05">CI/CD Pipeline</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            From commit to cluster, automatically
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every push triggers a fully automated pipeline. Watch the artifacts
            flow from source control all the way to a healthy deployment.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <div className="flex flex-col items-stretch md:flex-row md:items-center">
              {stages.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="contents md:flex md:flex-1 md:items-center"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:gap-2">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary shadow-[0_0_24px_-10px_var(--primary)]"
                      >
                        <Icon className="size-6" />
                      </motion.div>
                      <span className="font-mono text-xs text-muted-foreground md:text-center">
                        {s.label}
                      </span>
                    </div>
                    {i < stages.length - 1 && <Connector delay={i * 0.18} />}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
