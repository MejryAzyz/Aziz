"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { SectionLabel } from "./section-label"
import { Reveal } from "./reveal"

const steps = [
  {
    n: "01",
    title: "Infrastructure Design",
    desc: "Capacity planning, network segmentation and the high-level blueprint for the entire private cloud.",
    tech: ["Topology", "Capacity Planning", "IP Schema"],
  },
  {
    n: "02",
    title: "OpenStack Deployment",
    desc: "Bootstrapped the OpenStack control services and registered the hypervisor hosts into the cloud.",
    tech: ["OpenStack", "Keystone", "Glance"],
  },
  {
    n: "03",
    title: "Controller Node Setup",
    desc: "Configured identity, scheduling, image and dashboard services on the dedicated controller.",
    tech: ["Nova API", "Horizon", "RabbitMQ"],
  },
  {
    n: "04",
    title: "Compute Nodes",
    desc: "Provisioned four KVM hypervisor hosts and joined them to the Nova scheduler for VM placement.",
    tech: ["Nova", "KVM", "libvirt"],
  },
  {
    n: "05",
    title: "Storage Configuration",
    desc: "Deployed Cinder block storage to back virtual machines and persistent Kubernetes volumes.",
    tech: ["Cinder", "LVM", "Block Volumes"],
  },
  {
    n: "06",
    title: "Networking",
    desc: "Built tenant networks, routers, floating IPs and security groups with Neutron and Open vSwitch.",
    tech: ["Neutron", "Open vSwitch", "VLAN"],
  },
  {
    n: "07",
    title: "Kubernetes Cluster",
    desc: "Stood up a Kubernetes cluster on top of the OpenStack VMs — one master and two worker nodes.",
    tech: ["Kubernetes", "kubeadm", "Calico"],
  },
]

export function BuildTimeline() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionLabel index="03">Building the Cloud</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Seven steps from blueprint to running cloud
          </h2>
        </Reveal>

        <div className="relative mt-12 pl-10">
          {/* vertical line */}
          <div className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const isOpen = open === i
              return (
                <Reveal key={s.n} delay={i * 0.04}>
                  <div className="relative">
                    {/* dot */}
                    <span
                      className={`absolute -left-[38px] top-5 flex size-7 items-center justify-center rounded-full border bg-background font-mono text-[10px] transition ${
                        isOpen
                          ? "border-primary text-primary shadow-[0_0_18px_-4px_var(--primary)]"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {s.n}
                    </span>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`w-full rounded-xl border p-5 text-left transition ${
                        isOpen
                          ? "border-primary/40 bg-card"
                          : "border-border bg-card/40 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-medium text-foreground">{s.title}</h3>
                        <ChevronDown
                          className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
                              {s.desc}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {s.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-primary"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
