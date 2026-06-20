"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight, Layers, Sparkles, X } from "lucide-react"
import { TOUR_OPEN_EVENT, TOUR_SLIDES, type TourSlide } from "@/lib/tour-slides"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SESSION_KEY = "deployment-tour-dismissed"

function SlideMedia({
  src,
  iframeSrc,
  alt,
  label,
  icon: Icon,
}: {
  src?: string
  iframeSrc?: string
  alt: string
  label: string
  icon: TourSlide["icon"]
}) {
  const [failed, setFailed] = useState(false)

  if (iframeSrc) {
    return (
      <div className="relative w-full overflow-hidden rounded-xl border border-border bg-secondary/20">
        <iframe
          src={iframeSrc}
          title={alt}
          className="h-[400px] w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    )
  }

  if (!src || failed) {
    return (
      <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-secondary/30 px-6 text-center">
        <div className="mb-3 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Screenshot
        </p>
        <p className="mt-1 max-w-xs text-sm text-foreground">{label}</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary/20">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 560px"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export function DeploymentTour() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY)
    if (!dismissed) {
      const timer = window.setTimeout(() => setOpen(true), 600)
      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const openTour = () => {
      setIndex(0)
      setOpen(true)
    }

    window.addEventListener(TOUR_OPEN_EVENT, openTour)
    return () => window.removeEventListener(TOUR_OPEN_EVENT, openTour)
  }, [])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1")
    setOpen(false)
  }, [])

  const slide = TOUR_SLIDES[index]
  const isFirst = index === 0
  const isLast = index === TOUR_SLIDES.length - 1
  const Icon = slide.icon

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss()
      if (event.key === "ArrowRight" && !isLast) setIndex((current) => current + 1)
      if (event.key === "ArrowLeft" && !isFirst) setIndex((current) => current - 1)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, dismiss, isFirst, isLast])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="deployment-tour-title"
          aria-describedby="deployment-tour-description"
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-3 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-black/50"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                Deployment walkthrough
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                aria-label="Close tour"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
              <div className="relative hidden overflow-hidden border-r border-border bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(to_bottom,rgba(15,23,42,0.35),transparent)] lg:block">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.character}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex h-full min-h-[420px] items-center justify-center px-4"
                  >
                    <Image
                      src={slide.character}
                      alt="Aziz guiding you through the deployment stack"
                      width={320}
                      height={480}
                      className="h-auto max-h-[75%] w-auto max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex min-h-0 flex-col">
                <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
                  <div className="mb-4 flex items-center gap-3 lg:hidden">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary/30">
                      <Image
                        src={slide.character}
                        alt=""
                        width={64}
                        height={64}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Slide {slide.id} — {slide.topic}
                      </p>
                      <p className="text-xs text-muted-foreground">Let me walk you through this stack.</p>
                    </div>
                  </div>

                  <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-primary lg:block">
                    Slide {slide.id} — {slide.topic}
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 space-y-4"
                    >
                      <div>
                        <h2
                          id="deployment-tour-title"
                          className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                        >
                          {slide.title}
                        </h2>
                        <p
                          id="deployment-tour-description"
                          className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                        >
                          {slide.description}
                        </p>
                      </div>

                      <SlideMedia
                        src={slide.screenshot}
                        iframeSrc={slide.iframeSrc}
                        alt={slide.screenshotLabel}
                        label={slide.screenshotLabel}
                        icon={Icon}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="border-t border-border px-4 py-4 sm:px-6">
                  <div className="mb-4 flex items-center justify-center gap-1.5">
                    {TOUR_SLIDES.map((item, slideIndex) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Go to slide ${item.id}: ${item.topic}`}
                        onClick={() => setIndex(slideIndex)}
                        className={cn(
                          "h-1.5 rounded-full transition-all",
                          slideIndex === index
                            ? "w-6 bg-primary"
                            : "w-1.5 bg-border hover:bg-muted-foreground/50",
                        )}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={dismiss}
                      className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition hover:text-foreground"
                    >
                      Skip tour
                    </button>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={isFirst}
                        onClick={() => setIndex((current) => current - 1)}
                        className="gap-1"
                      >
                        <ChevronLeft className="size-4" />
                        Back
                      </Button>

                      {isLast ? (
                        <Button type="button" size="sm" onClick={dismiss} className="gap-1">
                          <Layers className="size-4" />
                          Explore portfolio
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => setIndex((current) => current + 1)}
                          className="gap-1"
                        >
                          Next
                          <ChevronRight className="size-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
