"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Globe, Cog, Database, Brain, Container, Boxes, Gauge, GitBranch, Check } from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

const services = [
  { label: "Frontend", icon: Globe, desc: "User-facing web & mobile experience." },
  { label: "Backend", icon: Cog, desc: "REST API & business logic services." },
  { label: "Database", icon: Database, desc: "Persistent data on Cinder volumes." },
  { label: "AI Recommendation Engine", icon: Brain, desc: "Personalized match & venue suggestions." },
]

const connections = [
  { label: "Docker", icon: Container },
  { label: "Kubernetes", icon: Boxes },
  { label: "Monitoring", icon: Gauge },
  { label: "CI/CD", icon: GitBranch },
]

const features = [
  "Discover & book football matches in real time",
  "AI-powered venue and teammate recommendations",
  "Live availability synced across the platform",
  "Auto-scaled on Kubernetes during peak hours",
]

export function YallaTN() {
  return (
    <section className="relative px-6 py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <SectionLabel index="08">YallaTN Deployment</SectionLabel>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Powered by <span className="text-primary">CloudAura</span>
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            YallaTN is the real-world workload running on the platform — a sports
            and events app for Tunisia, fully embedded inside the CloudAura
            architecture.
          </p>
        </Reveal>

        {/* screenshots */}
        <Reveal delay={0.1} className="mt-14">
          <div className="grid items-center gap-5 lg:grid-cols-[1.7fr_1fr]">
            <motion.div
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-chart-4/70" />
                <span className="size-2.5 rounded-full bg-chart-3/70" />
                <span className="mx-auto rounded-md bg-background/60 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                  app.yallatn.cloudaura.io
                </span>
              </div>
              <Image
                src="/yallatn-web.png"
                alt="YallaTN web dashboard with venue map and AI recommendations"
                width={1200}
                height={750}
                className="h-auto w-full"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -6 }}
              className="mx-auto w-48 overflow-hidden rounded-[2rem] border-4 border-border bg-card/60 shadow-2xl sm:w-56"
            >
              <Image
                src="/yallatn-app.png"
                alt="YallaTN mobile app home screen"
                width={400}
                height={840}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </Reveal>

        {/* services + connections */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Application Services</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="rounded-xl border border-border bg-background/50 p-4">
                      <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="mt-3 text-sm font-medium text-foreground">{s.label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Connected To</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {connections.map((c) => {
                  const Icon = c.icon
                  return (
                    <div key={c.label} className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3">
                      <Icon className="size-5 text-primary" />
                      <span className="text-sm text-foreground">{c.label}</span>
                    </div>
                  )
                })}
              </div>
              <div className="my-5 h-px w-full bg-border" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Features</h3>
              <ul className="mt-4 space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
