"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { Activity, ArrowRight, Brain, Check, GitBranch, Globe, Layers, Network, ShieldCheck, Sparkles, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { OpenStack } from "@/components/openstack"
import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"


type Project = {
  name: string
  status: "production" | "staging"
  region: string
  description: string
  architecture: string
  stack: string[]
  services: string[]
  monitoring: string
  cicd: string
}

const projects: Project[] = [
  {
    name: "CloudAura",
    status: "production",
    region: "eu-west-1",
    description:
      "Self-service infrastructure portal that lets teams provision isolated OpenStack tenants with one click, backed by GitOps reconciliation.",
    architecture: "Microservices on K8s · OpenStack backend",
    stack: ["Kubernetes", "Terraform", "OpenStack", "Go", "Next.js"],
    services: ["Provisioning API", "Tenant Operator", "Quota Service"],
    monitoring: "Prometheus + Grafana + Loki",
    cicd: "GitHub Actions → ArgoCD",
  },
  {
    name: "YallaTN",
    status: "production",
    region: "us-east-1",
    description:
      "Event-driven marketplace platform handling catalog, orders and payments with autoscaling microservices and zero-downtime deploys.",
    architecture: "Event-driven microservices on EKS",
    stack: ["AWS EKS", "Kafka", "PostgreSQL", "Redis", "Docker"],
    services: ["Catalog", "Orders", "Payments", "Notifications"],
    monitoring: "CloudWatch + Prometheus",
    cicd: "GitHub Actions → Helm + Canary",
  },
  {
    name: "TRIPIFLY",
    status: "staging",
    region: "ap-south-1",
    description:
      "Drop-in observability stack module that wires metrics, logs and traces into any cluster with a single Terraform apply.",
    architecture: "Reusable Terraform module + Helm charts",
    stack: ["Terraform", "Prometheus", "Grafana", "Tempo", "Helm"],
    services: ["Metrics Pipeline", "Log Shipper", "Alerting"],
    monitoring: "Self-instrumented (dogfooding)",
    cicd: "Atlantis plan/apply",
  },
  {
    name: "FoodLik",
    status: "production",
    region: "eu-north-1",
    description:
      "B2B agri-food marketplace focused on direct producer access, traceability, and AI-assisted business growth.",
    architecture: "Marketplace platform with AI and business tooling",
    stack: ["Angular", "Spring Boot", "MySQL", "AI/ML"],
    services: ["Marketplace", "Traceability", "Analytics"],
    monitoring: "Product analytics + platform monitoring",
    cicd: "GitHub Actions → deployment pipeline",
  },
]

function StatusBadge({ status }: { status: Project["status"] }) {
  const prod = status === "production"
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider " +
        (prod
          ? "border-chart-3/40 bg-chart-3/10 text-chart-3"
          : "border-chart-4/40 bg-chart-4/10 text-chart-4")
      }
    >
      <span className={"size-1.5 rounded-full " + (prod ? "bg-chart-3" : "bg-chart-4")} />
      {status}
    </span>
  )
}

function Row({ icon: Icon, label, value }: { icon: typeof Layers; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5 border-t border-border py-2.5">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-primary" />
      <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  )
}

function YallaPopup() {
  const sdgs = [
  
    ["08", "Decent Work & Economic Growth"],
    ["09", "Industry, Innovation & Infrastructure"],
    ["10", "Reduced Inequalities"],
    ["11", "	Sustainable Cities & Communities"],
    ["12", "Responsible Consumption & Production"],
    ["17", "Partnerships for the Goals"],
  ]
const videoRef = useRef<HTMLVideoElement>(null)
const [isMuted, setIsMuted] = useState(true)

const toggleMute = () => {
  if (videoRef.current) {
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(!isMuted)
  }
}

  const features = [
    "Community module",
    "AI recommendation engine",
    "Digital Passport",
  ]

  return (
    <section className="relative w-full bg-background px-4 py-6 sm:px-6">
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
  <div className="relative aspect-[16/9] min-h-[320px] overflow-hidden">
    <video
      ref={videoRef}
      src="/videos/yallatn.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <button
      onClick={toggleMute}
      className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-sm transition hover:bg-black/70"
    >
      {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      {isMuted ? "Unmute" : "Mute"}
    </button>
  </div>
</div>

  <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Role", "Full Stack + AI"],
            ["Stack", "Angular · Spring Boot · Flask · MySQL"],
            ["Year", "2025"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
              <div className="mt-2 text-lg font-medium text-foreground">{value}</div>
            </div>
          ))}
        </div>
  <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["No smart discovery", "Users cannot quickly find the right match or event."],
            ["Disconnected ecosystem", "Community, bookings and recommendations were fragmented."],
            ["Weak digital platforms", "The experience was not built for modern participation."],
            ["Regional inequality", "Access and visibility were not balanced across regions."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
  <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowRight className="size-4" />
            What I built
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-border bg-background/50 p-5">
                <Check className="size-4 text-primary" />
                <div className="mt-3 text-sm font-medium text-foreground">{feature}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5" />

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "/yallaTn/hama.png",
              "/yallaTn/ml.png",
              "/yallaTn/post.png",
              "/yallaTn/pass.jpg",

            ].map((src, index) => (
              <figure key={src + index} className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/15 via-background to-card">
                  <Image
                    src={src}
                    alt={`YallaTN screenshot ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  Screenshot {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">SDG badges</div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {sdgs.map(([num, label]) => (
                <div key={num} className="rounded-2xl border border-border bg-background/60 p-4 text-center">
                  <div className="text-2xl font-semibold text-foreground">{num}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">Tech stack</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Angular", "Spring Boot", "Flask", "MySQL"].map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground">
                  {tech}
                </span>
              ))}
            </div>
                        <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">GitHub Repository</div>
<div className="mt-4">
  <a
    href="https://github.com/MejryAzyz/YallaTn"
    target="_blank"
    rel="noopener noreferrer"
    className="font-mono text-sm text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
  >
    github.com/MejryAzyz/YallaTn ↗
  </a>
</div>
          </div>
          
        </div>
    </section>
  )
}

function TripiFlyPopup() {
  const models = [
    ["Random Forest", "Classifies destinations by travel profile"],
    ["SVD", "Finds latent preferences from user-item interactions"],
    ["Linear Regression", "Predicts budget and trip fit signals"],
    ["LDA / NLP", "Extracts themes from unstructured reviews"],
  ]

  const problemCards = [
    "No personalization",
    "Budget blindness",
    "Activity mismatch",
    "Unstructured reviews",
  ]
const videoRef = useRef<HTMLVideoElement>(null)
const [isMuted, setIsMuted] = useState(true)

const toggleMute = () => {
  if (videoRef.current) {
function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary/15 via-background to-card text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
      {label.slice(0, 2)}
    </div>
  )
}
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(!isMuted)
  }
}

  const stats = [
    ["100K+", "records in training dataset"],
    ["6", "ML models evaluated"],
    ["4", "core AI features shipped"],
  ]

  return (
    <section className="relative w-full bg-background px-4 py-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
  <div className="relative aspect-[16/9] min-h-[320px] overflow-hidden">
    <video
      ref={videoRef}
      src="/tripyfly/tripy.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <button
      onClick={toggleMute}
      className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-sm transition hover:bg-black/70"
    >
      {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      {isMuted ? "Unmute" : "Mute"}
    </button>
  </div>
</div>

        <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Role", "ML Engineer + Full Stack"],
            ["Stack", "Python · Flask · React.js"],
            ["Year", "2024–2025"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
              <div className="mt-2 text-lg font-medium text-foreground">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-sm font-semibold text-foreground">{item}</div>
            </article>
          ))}
        </div>
        <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Brain className="size-4" />
            The AI Engine
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {models.map(([name, desc]) => (
              <article key={name} className="rounded-2xl border border-border bg-background/60 p-5">
                <div className="text-sm font-semibold text-foreground">{name}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowRight className="size-4" />
            Problems Solved
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background/60 p-5 text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-3xl font-semibold tracking-tight text-foreground">{value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-5" />

        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card/50 p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Screenshots + branding</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["/tripyfly/trip1.png", "Platform screenshot"],
                ["/tripyfly/trip2.png", "Platform screenshot"],
                ["/tripyfly/trip3.png", "Brand asset"],
                ["/tripyfly/trip4.png", "Brand asset"],
              ].map(([src, caption]) => (
                <figure key={src} className="overflow-hidden rounded-2xl border border-border bg-background/60">
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-background to-card">
                    <Image
                      src={src}
                      alt={caption}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Tech stack</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Python",
                "Flask",
                "React.js",
                "Random Forest",
                "SVD",
                "NLP",
                "MySQL",
              ].map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export function CloudProjects() {
  const [activeProject, setActiveProject] = useState<"cloudaura" | "yallatn" | "tripifly" | null>(null)

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading
        index="03 — Cloud Projects"
        title="Deployments"
        subtitle="Each project, framed as a deployment card — architecture, stack, services, monitoring and delivery pipeline at a glance."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            onClick={
              p.name === "CloudAura"
                ? () => setActiveProject("cloudaura")
                : p.name === "YallaTN"
                  ? () => setActiveProject("yallatn")
                  : p.name === "TRIPIFLY"
                    ? () => setActiveProject("tripifly")
                  : undefined
            }
            role={p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" ? "button" : undefined}
            tabIndex={p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" ? 0 : undefined}
            onKeyDown={
              p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY"
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setActiveProject(
                        p.name === "CloudAura"
                          ? "cloudaura"
                          : p.name === "YallaTN"
                            ? "yallatn"
                            : "tripifly",
                      )
                    }
                  }
                : undefined
            }
            className={
              "glass group flex flex-col rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-background/40 " +
              (p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" ? "cursor-pointer" : "")
            }
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{p.region}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            {(p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY") && (
              <div className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                Click for full project details
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-foreground">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <Row icon={Network} label="Arch" value={p.architecture} />
              <Row icon={Layers} label="Services" value={p.services.join(", ")} />
              <Row icon={Activity} label="Monitor" value={p.monitoring} />
              <Row icon={GitBranch} label="CI/CD" value={p.cicd} />
            </div>

            <div className="mt-auto flex items-center gap-2 pt-5 font-mono text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-chart-3" />
              health checks passing
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={
              activeProject === "cloudaura"
                ? "CloudAura project details"
                : activeProject === "yallatn"
                  ? "YallaTN project details"
                  : "TripiFly project details"
            }
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-black/50"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                aria-label="Close project details"
              >
                <X className="size-4" />
              </button>
              <div className="max-h-[92vh] overflow-auto">
                {activeProject === "cloudaura" ? (
                  <OpenStack />
                ) : activeProject === "yallatn" ? (
                  <YallaPopup />
                ) : (
                  <TripiFlyPopup />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
