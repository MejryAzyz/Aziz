import { ArrowRight, Cloud } from "lucide-react"
import { Hero3DCharacter } from "@/components/hero-3d-character"
import { SiteNav } from "@/components/site-nav"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <SiteNav />

      {/* background grid + ambient glows */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-12 pt-28">
        {/* availability pill */}
        <div className="z-20 mx-auto mb-6 flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for cloud & DevOps roles
        </div>

        {/* Headline — character head overlaps from behind */}
        <h1 className="relative z-10 text-center font-heading font-bold uppercase leading-[0.85] tracking-tight text-foreground text-pretty [font-size:clamp(2.75rem,11vw,8rem)]">
          Cloud
          <span className="mx-3 inline-flex items-center text-primary">
            <Cloud className="h-[0.8em] w-[0.8em]" strokeWidth={2.5} />
          </span>
          Engineer
        </h1>

        {/* The 3D character breaking through */}
        <div className="relative z-20 -mt-[8vw] flex justify-center sm:-mt-[6vw]">
          <Hero3DCharacter />
        </div>

        {/* subtitle + CTAs */}
        <div className="relative z-30 -mt-4 flex flex-col items-center gap-6 sm:-mt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-balance text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
            I&apos;m <span className="font-semibold text-foreground">Aziz</span> — Cloud Computing & IT Architecture student passionate about building scalable infrastructure, automating workflows, and turning complex ideas into reliable systems.
            
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-card/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
