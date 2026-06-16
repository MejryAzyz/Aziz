import { Cloud, GitBranch, Server, Workflow } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const HIGHLIGHTS = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    text: "Designing fault-tolerant, multi-region systems on AWS & Azure.",
  },
  {
    icon: Workflow,
    title: "Infrastructure as Code",
    text: "Reproducible environments with Terraform, Pulumi & Ansible.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    text: "Zero-downtime pipelines with GitHub Actions & ArgoCD.",
  },
  {
    icon: Server,
    title: "Observability",
    text: "Metrics, logs & tracing with Prometheus, Grafana & OpenTelemetry.",
  },
]

const STATS = [
  { value: "3+", label: "Years hands-on" },
  { value: "40+", label: "Pipelines shipped" },
  { value: "99.9%", label: "Uptime delivered" },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="01 — About me"
        title="Engineering calm, scalable cloud systems"
        subtitle="I'm a cloud engineer who loves turning fragile, manual infrastructure into automated, observable, and resilient platforms. I care about reliability, cost efficiency, and developer experience in equal measure."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            My day-to-day blends architecture, automation, and a healthy dose of
            debugging at 2 a.m. I've migrated monoliths to containers, tamed
            Kubernetes clusters, and cut cloud bills without anyone noticing a
            thing — except finance.
          </p>
          <p>
            When I&apos;m not provisioning resources, I&apos;m writing internal
            tooling, mentoring teammates on DevOps practices, and exploring
            anything that makes shipping software safer and faster.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <div className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {h.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
