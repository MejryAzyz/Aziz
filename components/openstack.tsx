import { Architecture } from "@/components/cloudaura/architecture"
import { BuildTimeline } from "@/components/cloudaura/build-timeline (1)"
import { Hero } from "@/components/cloudaura/hero (1)"
import { OpsCenter } from "@/components/cloudaura/ops-center (1)"
import { Pipeline } from "@/components/cloudaura/pipeline (1)"
import { Observability } from "@/components/cloudaura/observability (1)"
import { Transformation } from "@/components/cloudaura/transformation (1)"
import { YallaTN } from "@/components/cloudaura/yallatn (1)"
import { Results } from "@/components/cloudaura/results (1)"



const sections = [
  { id: "hero", label: "CloudAura" },
  { id: "architecture", label: "Architecture" },
  { id: "build", label: "Build" },
  { id: "ops", label: "Operations" },
  { id: "pipeline", label: "CI/CD" },
    { id: "observability", label: "Observability" },
  { id: "impact", label: "Impact" },
  { id: "yallatn", label: "YallaTN" },
  { id: "results", label: "Results" },
]

export function OpenStack() {
  return (
    <section id="openstack" className="relative w-full overflow-x-hidden bg-background">
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center justify-end gap-2"
            aria-label={section.label}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition group-hover:opacity-100">
              {section.label}
            </span>
            <span className="size-2 rounded-full bg-muted-foreground/40 transition group-hover:scale-150 group-hover:bg-primary" />
          </a>
        ))}
      </nav>

            <div id="hero"><Hero /></div>
            <div id="architecture"><Architecture /></div>

      <div id="build"><BuildTimeline /></div>

            <div id="ops"><OpsCenter /></div>

            <div id="pipeline"><Pipeline /></div>

           <div id="observability"><Observability /></div>

            <div id="impact"><Transformation /></div>
                  <div id="yallatn"><YallaTN /></div>


            <div id="results"><Results /></div>

    </section>
  )
}
