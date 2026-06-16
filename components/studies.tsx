import { GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const STUDIES = [
  {
  period: "2020 — 2021",
  title: "Technical Baccalaureate (Bac Technique)",
  place: "Lycée Ben Arous, Tunisia",
  detail:
    "Focused on engineering sciences, technical design, mechanical and electrical systems, applied mathematics, and physics, developing strong analytical and problem-solving skills.",
},
  {
    period: "2021 — 2024",
    title: "Bachelor's Degree in Information Systems Development ",
    place: "Higher Institute of Technological Studies of Rades (ISET Rades)",
    detail:
      "Focused on the design, development, and management of information systems, including software engineering, databases, web technologies, and system analysis.",
  },
  {
    period: "2024 — 2027",
    title: "Engineer's Degree in Arctic Cloud Computing and Architecture",
    place: "ESPRIT (Ecole Supérieure Privée d'Ingénierie et de Technologies)",
    detail:
      "Specialized in cloud computing architecture, distributed systems, virtualization, cloud infrastructure, and scalable application deployment.",
  },

]

export function Studies() {
  return (
    <section id="studies" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="03 — Education"
        title="Studies"
      />

      <ol className="relative border-l border-border pl-6">
        {STUDIES.map((s) => (
          <li key={s.title} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
            </span>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {s.period}
            </div>
            <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
              {s.title}
            </h3>
            <div className="text-sm font-medium text-muted-foreground">
              {s.place}
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {s.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
