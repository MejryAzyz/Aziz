import { SectionHeading } from "@/components/section-heading"

const SKILL_GROUPS = [
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Pulumi", "Ansible", "CloudFormation"],
  },
  {
    category: "CI/CD & Automation",
    skills: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo Rollouts"],
  },
  {
    category: "Observability",
    skills: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
  },
  {
    category: "Languages & Scripting",
    skills: ["Python", "Go", "Bash", "TypeScript"],
  },
]

const CORE = [
  { label: "AWS & Cloud Architecture", level: 92 },
  { label: "Kubernetes & Containers", level: 88 },
  { label: "Terraform / IaC", level: 90 },
  { label: "CI/CD Pipelines", level: 85 },
]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="05 — Skills"
        title="My toolbox"
        subtitle="The technologies I reach for to build and operate cloud platforms."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        {/* proficiency bars */}
        <div className="space-y-6">
          {CORE.map((c) => (
            <div key={c.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{c.label}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {c.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${c.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* skill chips by category */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((g) => (
            <div
              key={g.category}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
