"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"

type Line = { prompt?: boolean; text?: string; content?: React.ReactNode }

function JsonLine({ children }: { children: React.ReactNode }) {
  return <div className="whitespace-pre-wrap break-words">{children}</div>
}

const script: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "Cloud Computing & IT Architecture student at ESPRIT." },
  { prompt: true, text: "cat ./contact.json" },
  {
    content: (
      <div className="pl-4">
        <JsonLine>{"{"}</JsonLine>
        <JsonLine>
          <span className="text-sky-300">  "name"</span>
          <span className="text-slate-300">: </span>
          <span className="text-pink-300">"Mouhamed Aziz Mejri"</span>
          <span className="text-slate-400">,</span>
        </JsonLine>
        <JsonLine>
          <span className="text-sky-300">  "born"</span>
          <span className="text-slate-300">: </span>
          <span className="text-amber-300">2002</span>
          <span className="text-slate-400">,</span>
        </JsonLine>
        <JsonLine>
          <span className="text-sky-300">  "hometown"</span>
          <span className="text-slate-300">: </span>
          <span className="text-pink-300">"Tunis, Tunisia"</span>
          <span className="text-slate-400">,</span>
        </JsonLine>
        <JsonLine>
          <span className="text-sky-300">  "languages"</span>
          <span className="text-slate-300">: </span>
          <span className="text-cyan-300">[</span>
          <span className="text-emerald-300">"Arabic"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-300">"French"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-300">"English"</span>
          <span className="text-cyan-300">]</span>
        </JsonLine>
        <JsonLine>{"}"}</JsonLine>
      </div>
    ),
  },
  { prompt: true, text: "cat ./future.log" },
  { text: "Targeting Cloud & DevOps engineering opportunities,with a strong interest in Kubernetes, platform engineering,cloud architecture and infrastructure automation" },
  { prompt: true, text: "ls ./links" },
  { text: "github/  linkedin/  resume.pdf" },
]

const links = [
  { icon: GithubIcon, label: "GitHub", value: "https://github.com/MejryAzyz", href: "https://github.com/MejryAzyz" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "https://www.linkedin.com/in/mejry-azyz/", href: "https://www.linkedin.com/in/mejry-azyz/" },
  { icon: FileText, label: "Résumé", value: "download resume.pdf", href: "#" },
  { icon: Mail, label: "Email", value: "MouhamedAZIZ.MEJRI@esprit.tn", href: "mailto:MouhamedAZIZ.MEJRI@esprit.tn" },
]

function Terminal() {
  const [shown, setShown] = useState<Line[]>([])
  const [typed, setTyped] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const { inView } = useTerminalInView(ref)

  useEffect(() => {
    if (!inView) return
    let li = 0
    let ci = 0
    let cancelled = false

    const run = () => {
      if (cancelled) return
      if (li >= script.length) return
      const line = script[li]
      if (line.prompt) {
       if (ci <= (line.text?.length ?? 0)) {
  setTyped(line.text?.slice(0, ci) ?? "")
          ci++
          setTimeout(run, 38)
        } else {
          setShown((s) => [...s, line])
          setTyped("")
          ci = 0
          li++
          setTimeout(run, 200)
        }
      } else {
        setShown((s) => [...s, line])
        li++
        setTimeout(run, 320)
      }
    }
    const t = setTimeout(run, 400)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[28px] border border-border bg-card text-card-foreground shadow-[0_28px_80px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-[#0b1020] dark:text-slate-200 dark:shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3 dark:border-white/8 dark:bg-white/[0.03]">
        <span className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
        <span className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
        <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
        <span className="ml-2 font-mono text-xs tracking-[0.18em] text-muted-foreground dark:text-slate-400">Command Line</span>
      </div>
      <div className="min-h-[320px] p-6 font-mono text-[15px] leading-8 text-foreground sm:p-7 dark:text-slate-200">
        {shown.map((l, i) => (
          <div key={i} className={l.prompt ? "text-foreground dark:text-slate-100" : "pl-6 text-muted-foreground dark:text-slate-300"}>
            {l.prompt ? <span className="mr-2 text-cyan-400">→</span> : null}
            {l.content ?? l.text}
          </div>
        ))}
        {typed !== "" || shown.length < script.length ? (
          <div className="text-foreground dark:text-slate-100">
            <span className="mr-2 text-cyan-400">→</span>
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[0.55rem] translate-y-[0.15em] bg-cyan-400 animate-blink" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

function useTerminalInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
  return { inView }
}

export function CommandCenter() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading
        index="01 — Background"
        title="About me"
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Terminal />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-card-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-secondary/70 dark:border-white/10 dark:bg-[#0b1020] dark:text-slate-100 dark:hover:bg-[#101936]"
            >
                <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-600 ring-1 ring-cyan-400/20 transition-transform group-hover:scale-105 dark:text-cyan-300">
                <l.icon className="size-5" />
              </span>
              <div className="min-w-0">
                  <div className="font-medium text-foreground dark:text-slate-100">{l.label}</div>
                  <div className="truncate font-mono text-xs text-cyan-700/80 dark:text-cyan-300/75">{l.value}</div>
              </div>
                <span className="ml-auto font-mono text-muted-foreground transition-transform group-hover:translate-x-1 dark:text-slate-500">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
