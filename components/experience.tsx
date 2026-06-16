import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const EXPERIENCE = [
  {
    period: "2023 — 2024",
    role: "Final Year Project (PFE)",
    company: "SONEDE",
    detail:
     "Built two enterprise web applications — a complaint tracking portal and a customer self-service portal serving thousands of registered users.",
    tags: ["React.js", "Spring Boot", "MySQL", "SQL Server"],
  },
  {
    period: "JAN — FEB 2023",
    role: "Full Stack Developer Intern",
    company: "Polina",
    detail:
      "Developed a web-based system to digitize and manage commercial contracts, replacing manual processes. Designed RESTful APIs and optimized a SQL Server database for efficient contract storage and retrieval.",
    tags: [".NET", "SQL Server", "JavaScript", "REST APIs"],
  },
  {
    period: "JAN — FEB 2022",
    role: "Sales & Operations Intern",
    company: "Tunisie Telecom",
    detail:
      "Supported sales strategy execution and competitive intelligence tracking across product lines. Collaborated cross-functionally with technical and commercial teams on customer engagement initiatives.",
    tags: ["Sales Strategy", "Competitive Intelligence", "Cross-functional"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04 — Internships"
          title="Experience"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {EXPERIENCE.map((e) => (
            <article
              key={e.company}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {e.period}
              </div>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                {e.role}
              </h3>
              <div className="text-sm font-medium text-muted-foreground">
                {e.company}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {e.detail}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
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
