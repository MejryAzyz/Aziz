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
  logo: string   // 👈 add this
  status: string
  description: string
  stack: string[]
  
}

const projects: Project[] = [
  {
    name: "CloudAura",
    logo: "cloudaura.png",   // 👈 add this
    status: "Cloud",
    description:
      "Private cloud infrastructure built with OpenStack, Kubernetes, CI/CD automation and monitoring. Designed to host and operate cloud-native applications in a production-inspired environment.",
    stack: ["OpenStack", "Kubernetes", "Docker", "Ansible", "Prometheus", "Grafana", "GitHub Actions"],
    
  },
  {
    name: "YallaTN",
    logo: "yallatn.png",   // 👈 add this
    status: "Web",
    description:
      "AI-powered Tunisian tourism platform connecting travelers with destinations, communities, and local services across all 24 governorates — with personalized recommendations and a social layer.",
    stack: ["Angular", "Spring Boot", "Flask", "MySQL"],
    
  },
  {
    name: "TRIPIFLY",
    logo: "tripyfly.png",   // 👈 add this
    status: "ML",
    description:
      "AI-powered travel planning platform designed to simplify trip organization through personalized recommendations and intelligent itinerary generation.",
    stack: ["Python", "Flask", "React.js", "Random Forest", "SVD", "NLP", "MySQL"],
    
  },
  {
    name: "FoodLik",
    logo: "foodlik.png", 
    status: "entrepreneurship",
    description:
      "B2B agri-food marketplace eliminating intermediaries between Tunisian farmers and CHR professionals — built with AI recommendations, real-time traceability, and a full business plan defended before a jury.",
    stack: ["BMC", "SWOT", "TOWS", "Financial Plan", "Market Research"],
   
  },
]

function StatusBadge({ status }: { status: Project["status"] }) {
  const prod = status !== "production"
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
    ["11", "Sustainable Cities & Communities"],
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

  const features = ["Community module", "AI recommendation engine", "Digital Passport"]

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
                <Image src={src} alt={`YallaTN screenshot ${index + 1}`} width={1200} height={800} className="h-full w-full object-cover" />
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

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary/15 via-background to-card text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
      {label.slice(0, 2)}
    </div>
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


function FoodLikPopup() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const context = [
    ["Role", "Full Stack + Entrepreneur"],
    ["Type", "B2B Agri-Food Marketplace"],
    ["Year", "2025"],
  ]

  const problems = [
    ["30–60%", "price markup from intermediaries"],
    ["30%", "food waste from zero demand forecasting"],
    ["47,000", "restaurants with no direct producer access"],
  ]

  const solutions = ["AI-powered recommendations", "Real-time traceability", "Grouped ordering", "Analytics dashboard"]
  const businessCards = [["Starter", "Free"], ["Premium CHR", "150 TND/month"], ["Premium Agriculteur", "50 TND/month"]]
  const tech = ["Angular", "Spring Boot", "MySQL", "AI/ML"]
  const business = ["BMC", "SWOT", "TOWS", "Financial Plan", "Market Research"]

  return (
    <section className="relative w-full bg-background px-4 py-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
  <div className="relative aspect-[16/9] min-h-[320px] overflow-hidden">
    <video
      ref={videoRef}
      src="/foodlik/foodlik.mp4"
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
          {context.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
              <div className="mt-2 text-lg font-medium text-foreground">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-5" />

        <div className="grid gap-4 md:grid-cols-3">
          {problems.map(([value, label]) => (
            <article key={value} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-3xl font-semibold tracking-tight text-foreground">{value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </article>
          ))}
        </div>
        <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The Journey</div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {[
              ["Phase 1 — Idea to Concept", "Market research · Benchmarking · Competitive positioning · First pitch"],
              ["Phase 2 — Concept to Business", "BMC · Value proposition · Marketing strategy · Financial plan · Jury defense"],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-border bg-background/60 p-5">
                <div className="text-sm font-semibold text-foreground">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The Solution</div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item) => (
              <article key={item} className="rounded-2xl border border-border bg-background/60 p-5 text-sm font-medium text-foreground">{item}</article>
            ))}
          </div>
        </div>
        <div className="mt-5" />

        <div className="rounded-3xl border border-border bg-card/50 p-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Business Model</div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {businessCards.map(([name, price]) => (
              <article key={name} className="rounded-2xl border border-border bg-background/60 p-5">
                <div className="text-sm font-semibold text-foreground">{name}</div>
                <div className="mt-2 text-lg font-medium text-primary">{price}</div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-background/60 px-4 py-2">Breakeven Month 14</span>
            <span className="rounded-full border border-border bg-background/60 px-4 py-2">71K TND projected Year 2</span>
          </div>
        </div>
        <div className="mt-5" />

        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card/50 p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Assets grid</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[["/foodlik/foodlik2.png", "Business Model"], ["/foodlik/foodlik1.png", "Poster"], ["/foodlik/foodlik3.png", "Business assets"], ["/foodlik/foodlik4.png", "App screenshot"]].map(([src, caption]) => (
                <figure key={src} className="overflow-hidden rounded-2xl border border-border bg-background/60">
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-background to-card">
                    <Image src={src} alt={caption} width={1200} height={800} className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
 
          <div className="rounded-3xl border border-border bg-card/60 p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Tech + Business Stack</div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground">Tech: {tech.join(" · ")}</div>
              <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground">Business: {business.join(" · ")}</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export function CloudProjects() {
  const [activeProject, setActiveProject] = useState<"cloudaura" | "yallatn" | "tripifly" | "foodlik" | null>(null)

  return (
    <section id="projects" className="mx-auto max-w-[90rem] scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading
        index="02 — Selected Work"
        title="Projects"
      />

      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">
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
                    : p.name === "FoodLik"
                      ? () => setActiveProject("foodlik")
                  : undefined
            }
            role={p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" || p.name === "FoodLik" ? "button" : undefined}
            tabIndex={p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" || p.name === "FoodLik" ? 0 : undefined}
            onKeyDown={
              p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" || p.name === "FoodLik"
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setActiveProject(
                        p.name === "CloudAura"
                          ? "cloudaura"
                          : p.name === "YallaTN"
                            ? "yallatn"
                            : p.name === "TRIPIFLY"
                              ? "tripifly"
                              : "foodlik",
                      )
                    }
                  }
                : undefined
            }
            className={
              "glass group min-w-[86%] snap-start flex flex-col rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-background/40 lg:min-w-0 " +
              (p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" || p.name === "FoodLik" ? "cursor-pointer" : "")
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
<div className="size-12 overflow-hidden rounded-xl border border-border">
  <Image
    src={`/${p.logo}`}
    alt={p.name}
    width={48}
    height={48}
    className="h-full w-full object-cover"
  />
</div>                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{p.region}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            {(p.name === "CloudAura" || p.name === "YallaTN" || p.name === "TRIPIFLY" || p.name === "FoodLik") && (
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

           

            <div className="mt-auto flex items-center gap-2 pt-5 font-mono text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-chart-3" />
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
                  : activeProject === "tripifly"
                    ? "TripiFly project details"
                    : "FoodLik project details"
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
                ) : activeProject === "tripifly" ? (
                  <TripiFlyPopup />
                ) : (
                  <FoodLikPopup />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
