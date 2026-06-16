"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Cloud,
  Boxes,
  Container,
  Settings2,
  Gauge,
  LineChart,
  GitBranch,
} from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

const services = [
  {
    name: "OpenStack",
    icon: Cloud,
    purpose: "Private IaaS providing compute, network and storage.",
    config: "Controller + 4 compute nodes, KVM hypervisor.",
    contribution: "The foundation every other layer runs on.",
  },
  {
    name: "Kubernetes",
    icon: Boxes,
    purpose: "Container orchestration across the cluster.",
    config: "1 master, 2 workers, Calico CNI.",
    contribution: "Schedules, scales and heals YallaTN workloads.",
  },
  {
    name: "Docker",
    icon: Container,
    purpose: "Packaging applications into portable images.",
    config: "Multi-stage builds.",
    contribution: "Reproducible artifacts shipped to the cluster.",
  },
  {
    name: "Ansible",
    icon: Settings2,
    purpose: "Automated Kubernetes installation and cluster bootstrapping.",
    config: "Playbooks for installing Kubernetes components and configuring cluster nodes.",
    contribution: "Automated cluster initialization, node setup, and repeatable deployment workflows.",
  },
  {
    name: "Prometheus",
    icon: Gauge,
    purpose: "Metrics collection & alerting time-series DB.",
    config: "Node + kube-state exporters, alert rules.",
    contribution: "The data source behind every dashboard.",
  },
  {
    name: "Grafana",
    icon: LineChart,
    purpose: "Visualization of cluster & application metrics.",
    config: "Dashboards for CPU, memory & cluster health.",
    contribution: "Real-time visibility into the platform.",
  },
  {
    name: "GitHub Actions",
    icon: GitBranch,
    purpose: "Continuous integration & delivery automation.",
    config: "Build → test → push → deploy workflows.",
    contribution: "Ships code from commit to cluster hands-free.",
  },
]

export function OpsCenter() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="relative px-6 py-28">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionLabel index="04">Cloud Operations Center</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            The stack running the platform
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every tool is a live component of the operations center. Hover or
            tap to reveal its purpose, configuration and contribution.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            const isActive = active === i
            return (
              <Reveal key={s.name} delay={i * 0.05}>
                <motion.div
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  className={`group relative h-full cursor-pointer overflow-hidden rounded-2xl border p-5 transition ${
                    isActive
                      ? "border-primary/50 bg-card"
                      : "border-border bg-card/40 hover:border-primary/30"
                  }`}
                >
                  {/* shimmer accent */}
                  <span
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl border transition ${
                        isActive
                          ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_22px_-6px_var(--primary)]"
                          : "border-border bg-background/60 text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-medium text-foreground">{s.name}</h3>
                    <span
                      className={`ml-auto size-2 rounded-full transition ${
                        isActive ? "animate-pulse bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
                          {[
                            ["Purpose", s.purpose],
                            ["Config", s.config],
                            ["Contribution", s.contribution],
                          ].map(([k, v]) => (
                            <div key={k}>
                              <dt className="font-mono text-[10px] uppercase tracking-widest text-primary">
                                {k}
                              </dt>
                              <dd className="text-muted-foreground">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isActive && (
                    <p className="mt-4 line-clamp-1 text-sm text-muted-foreground">
                      {s.purpose}
                    </p>
                  )}
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
