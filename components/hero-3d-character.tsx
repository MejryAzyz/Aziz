"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function Hero3DCharacter() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 40 })

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    let raf = 0
    const handle = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        // clamp to [-1, 1] around the center
        const nx = Math.max(-1, Math.min(1, (px - 0.5) * 2))
        const ny = Math.max(-1, Math.min(1, (py - 0.5) * 2))
        setTilt({
          ry: nx * 14,
          rx: -ny * 12,
          gx: 50 + nx * 28,
          gy: 40 + ny * 24,
        })
      })
    }
    const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 40 })

    window.addEventListener("pointermove", handle)
    el.addEventListener("pointerleave", reset)
    return () => {
      window.removeEventListener("pointermove", handle)
      el.removeEventListener("pointerleave", reset)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative flex items-end justify-center"
      style={{ perspective: "1100px" }}
    >
      {/* reactive glow that follows the cursor */}
      <div
        aria-hidden="true"
        className="animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] rounded-full bg-primary/40 blur-[90px]"
        style={{ left: `${tilt.gx}%`, top: `${tilt.gy}%` }}
      />
      {/* orbiting ring for depth */}
      <div
        aria-hidden="true"
        className="animate-spin-slow pointer-events-none absolute left-1/2 top-[46%] h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20"
      />

      {/* the tilting character group */}
      <div
        className="animate-float-3d relative will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* ground shadow that shifts with tilt */}
        <div
          aria-hidden="true"
          className="absolute -bottom-2 left-1/2 h-6 w-[58%] -translate-x-1/2 rounded-[50%] bg-foreground/40 blur-xl"
          style={{
            transform: `translateX(${tilt.ry * 1.6}px) scale(${1 - Math.abs(tilt.ry) * 0.01})`,
          }}
        />
        <Image
          src="/images/alex-character.png"
          alt="3D cartoon illustration of Aziz, a cloud engineer, smiling and pointing upward"
          width={612}
          height={918}
          priority
          className="relative h-auto w-[62vw] max-w-[440px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          style={{ transform: "translateZ(60px)" }}
        />
      </div>
    </div>
  )
}
