"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Server,
  Cpu,
  Database,
  Network,
  Boxes,
  Minus,
  Plus,
  Maximize2,
} from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

type Layer = "physical" | "logical"

type Node = {
  id: string
  label: string
  sub: string
  icon: typeof Server
  // grid position
  col: string
  row: string
}

const diagrams: Record<Layer, { nodes: Node[]; desc: string }> = {
  physical: {
    desc: "Bare-metal layout: one controller orchestrating four compute hosts, dedicated storage and a managed network fabric.",
    nodes: [
      { id: "controller", label: "Controller Node", sub: "Keystone · Nova · Neutron API", icon: Server, col: "1 / 3", row: "1" },
      { id: "compute", label: "Compute Nodes ×4", sub: "Nova · KVM Hypervisor", icon: Cpu, col: "1", row: "2" },
      { id: "storage", label: "Storage", sub: "Cinder · Block Volumes", icon: Database, col: "2", row: "2" },
      { id: "network", label: "Networking", sub: "Neutron · OVS · VLAN", icon: Network, col: "1 / 3", row: "3" },
      { id: "k8s", label: "Kubernetes Cluster", sub: "1 Master · 2 Workers", icon: Boxes, col: "1 / 3", row: "4" },
    ],
  },
  logical: {
    desc: "Service topology: control plane, tenant network and the Kubernetes overlay running atop the OpenStack VMs.",
    nodes: [
      { id: "controller", label: "Control Plane", sub: "Identity · Scheduler · Dashboard", icon: Server, col: "1 / 3", row: "1" },
      { id: "network", label: "Tenant Network", sub: "Routers · Security Groups", icon: Network, col: "1", row: "2" },
      { id: "compute", label: "Compute Pool", sub: "Virtual Machines", icon: Cpu, col: "2", row: "2" },
      { id: "storage", label: "Persistent Volumes", sub: "PVC ↔ Cinder", icon: Database, col: "1", row: "3" },
      { id: "k8s", label: "K8s Overlay", sub: "Pods · Services · Ingress", icon: Boxes, col: "2", row: "3" },
    ],
  },
}

const details: Record<string, string> = {
  controller: "Runs the OpenStack control services — identity, scheduling and the API endpoints that every request flows through.",
  compute: "Four hypervisor hosts running Nova + KVM, providing the virtual machines that power the entire platform.",
  storage: "Cinder block storage delivering persistent volumes to VMs and Kubernetes workloads alike.",
  network: "Neutron + Open vSwitch handle tenant isolation, routing, floating IPs and security groups.",
  k8s: "A Kubernetes cluster (1 master, 2 workers) deployed on top of the OpenStack VMs to orchestrate containers.",
}

export function Architecture() {
  const [layer, setLayer] = useState<Layer>("physical")
  const [zoom, setZoom] = useState(1)
  const [active, setActive] = useState<string | null>("controller")

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionLabel index="02">Architecture Showcase</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            One platform, viewed from every layer
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Switch between the physical and logical architecture, zoom in, and
            inspect each component to see how CloudAura fits together.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            {/* viewer */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="inline-flex rounded-lg border border-border bg-background/60 p-1">
                  {(["physical", "logical"] as Layer[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLayer(l)}
                      className={`rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
                        layer === l
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))}
                    className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:text-foreground"
                    aria-label="Zoom out"
                  >
                    <Minus className="size-4" />
                  </button>
                  <button
                    onClick={() => setZoom(1)}
                    className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:text-foreground"
                    aria-label="Reset zoom"
                  >
                    <Maximize2 className="size-4" />
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
                    className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:text-foreground"
                    aria-label="Zoom in"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              <div className="grid-bg relative h-[460px] overflow-auto p-6">
                <motion.div
                  animate={{ scale: zoom }}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  style={{ transformOrigin: "top center" }}
                  className="mx-auto grid max-w-md origin-top gap-3"
                >
                  <AnimatePresence mode="popLayout">
                    {diagrams[layer].nodes.map((n) => {
                      const Icon = n.icon
                      const isActive = active === n.id
                      return (
                        <motion.button
                          key={layer + n.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4 }}
                          onClick={() => setActive(n.id)}
                          style={{ gridColumn: n.col, gridRow: n.row }}
                          className={`group relative flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                            isActive
                              ? "border-primary bg-primary/10 shadow-[0_0_30px_-8px_var(--primary)]"
                              : "border-border bg-card/80 hover:border-primary/40"
                          }`}
                        >
                          <div
                            className={`flex size-10 shrink-0 items-center justify-center rounded-lg border transition ${
                              isActive
                                ? "border-primary/50 bg-primary/20 text-primary"
                                : "border-border bg-background/60 text-muted-foreground group-hover:text-primary"
                            }`}
                          >
                            <Icon className="size-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-foreground">
                              {n.label}
                            </div>
                            <div className="truncate font-mono text-[11px] text-muted-foreground">
                              {n.sub}
                            </div>
                          </div>
                          {isActive && (
                            <span className="absolute right-3 top-3 size-2 animate-pulse rounded-full bg-primary" />
                          )}
                        </motion.button>
                      )
                    })}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* details */}
            <div className="flex flex-col rounded-2xl border border-border bg-card/40 p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {layer} view
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {diagrams[layer].desc}
              </p>
              <div className="my-5 h-px w-full bg-border" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold capitalize text-foreground">
                    {active}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active ? details[active] : "Select a component to inspect."}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {Object.keys(details).map((k) => (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] capitalize transition ${
                      active === k
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
