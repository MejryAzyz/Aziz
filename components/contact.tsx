"use client"

import { Mail, Send } from "lucide-react"
import { useState } from "react"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-card/30 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
          06 — Contact
        </span>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground text-balance sm:text-6xl">
          Let&apos;s build something reliable
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-muted-foreground">
          Looking for a cloud engineer who sweats the details? Drop your email
          and I&apos;ll get back to you within a day.
        </p>

        <form
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105"
          >
            {sent ? "Thanks!" : "Send"}
            <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-3">
          {[
            { icon: Mail, label: "Email", href: "mailto:MouhamedAZIZ.MEJRI@esprit.tn" },
            { icon: GithubIcon, label: "GitHub", href: "https://github.com/MejryAzyz" },
            { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/mejry-azyz" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aziz — Cloud Engineer. 
        </p>
      </div>
    </section>
  )
}
