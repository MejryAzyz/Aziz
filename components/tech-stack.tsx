"use client"

import { useState } from "react"
import {
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Gauge,
  LineChart,
  Server,
  TerminalSquare,
  Workflow,
   Coffee,      // Java
  Layers,      // Symfony
  Triangle,    // Angular
  Table,  
  
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  icon: typeof Cloud
  level: number
  category: "Orchestration" | "Automation" | "Iac" | "Observability" | "CI/CD" | "Systems" | "Backend" | "Frontend" | "Database"
}

const skills: Skill[] = [
  { name: "Kubernetes", icon: Boxes, level: 90, category: "Orchestration" },
  { name: "Docker", icon: Container, level: 92, category: "Orchestration" },
  { name: "OpenStack(Heat)", icon: Server, level: 80, category: "Iac" },
  { name: "Ansible", icon: Workflow, level: 78, category: "Automation" },
  { name: "Linux", icon: TerminalSquare, level: 88, category: "Systems" },
  { name: "Prometheus", icon: Gauge, level: 78, category: "Observability" },
  { name: "Grafana", icon: LineChart, level: 80, category: "Observability" },
  { name: "GitHub Actions", icon: GitBranch, level: 86, category: "CI/CD" },
  { name: "CI/CD", icon: GitBranch, level: 82, category: "CI/CD" },
 { name: "Java", icon: Coffee, level: 80, category: "Backend" },
{ name: "Symfony", icon: Layers, level: 75, category: "Backend" },
{ name: "Angular", icon: Triangle, level: 78, category: "Frontend" },
{ name: "MySQL", icon: Table, level: 82, category: "Database" },
]

const categories = ["All", "Orchestration", "Automation", "Iac", "Observability", "CI/CD", "Systems", "Backend", "Frontend", "Database"] as const
export function TechStack() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All")

  return (
    <section id="stack" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
       <SectionHeading
          index="04 — Technical Expertise"
          title="Skills"
        />

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
              filter === c
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const dimmed = filter !== "All" && s.category !== filter
          return (
            <div
              key={s.name}
              className={cn(
                "glass relative overflow-hidden rounded-2xl border border-border p-5 transition-all duration-300",
                dimmed ? "opacity-35" : "opacity-100 hover:border-primary/40",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{s.category}</div>
                </div>
                <span className="ml-auto font-mono text-sm text-primary"></span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-700"
                  style={{ width: dimmed ? "0%" : `` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
