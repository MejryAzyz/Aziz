"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TOUR_OPEN_EVENT } from "@/lib/tour-slides"

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Studies", href: "#studies" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all sm:px-6 ${
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-sm font-bold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            A
          </span>
          <span className="hidden sm:inline">aziz.cloud</span>
        </a>

        <ul className="hidden items-center gap-1 text-[13px] font-medium text-muted-foreground md:flex">
          <li>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent(TOUR_OPEN_EVENT))}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Sparkles className="size-3.5 text-primary" />
              Your guide
            </button>
          </li>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent(TOUR_OPEN_EVENT))}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-[13px] font-semibold text-primary transition-colors hover:bg-primary/15 md:hidden"
          >
            <Sparkles className="size-3.5" />
            Your guide
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-flex"
          >
            Hire me
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
