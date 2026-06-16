import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const PROJECTS = [
  {
    title: "Multi-Region EKS Platform",
    description:
      "Production-grade Kubernetes platform spanning three AWS regions with automated failover, GitOps deploys via ArgoCD, and self-healing nodes.",
    tags: ["AWS", "EKS", "Terraform", "ArgoCD"],
    metric: "99.99% uptime",
  },
  {
    title: "Serverless Data Pipeline",
    description:
      "Event-driven ingestion handling 5M events/day with Lambda, Kinesis, and DynamoDB — fully observable and scaled to zero when idle.",
    tags: ["Lambda", "Kinesis", "DynamoDB"],
    metric: "5M events/day",
  },
  {
    title: "Cost Optimization Engine",
    description:
      "Internal tool that analyzes usage and right-sizes resources automatically, trimming monthly cloud spend across teams.",
    tags: ["Python", "Cost Explorer", "Grafana"],
    metric: "-38% cloud spend",
  },
  {
    title: "Zero-Downtime CI/CD",
    description:
      "Blue-green delivery pipeline with automated rollbacks, canary analysis, and security scanning baked into every merge.",
    tags: ["GitHub Actions", "Docker", "Argo Rollouts"],
    metric: "12 min lead time",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02 — Projects"
          title="Things I've built & automated"
          subtitle="A selection of infrastructure and platform work I'm proud of."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {p.metric}
                </span>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
