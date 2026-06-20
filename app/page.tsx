import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Studies } from "@/components/studies"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { OpenStack } from "@/components/openstack"
import { CommandCenter } from "@/components/command-center"
import { Contact } from "@/components/contact"
import { TechStack } from "@/components/tech-stack"
import { CloudProjects } from "@/components/project"
import { DeploymentTour } from "@/components/deployment-tour"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <DeploymentTour />
      {/* grain texture overlay */}
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-soft-light"
      />
      <Hero />
      <Marquee />
      <CommandCenter />
      <CloudProjects />

      <Studies />
      <Experience />
      <TechStack />
      
      
      <Contact />
    </main>
  )
}
