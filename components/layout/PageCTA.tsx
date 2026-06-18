"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as const

interface PageCTAProps {
  readonly line1: string
  readonly line2: string
  readonly eyebrow?: string
  readonly buttonLabel?: string
}

export function PageCTA({ line1, line2, eyebrow = "It starts here.", buttonLabel = "Book a session" }: PageCTAProps) {
  const router = useRouter()

  const handleBookSession = () => {
    router.push("/contact")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative overflow-hidden px-8 md:px-16 lg:px-24 xl:px-48 py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 dark:hidden" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(232, 228, 244, 0.45) 35%, rgba(232, 228, 244, 0.45) 65%, transparent 100%)" }} />

      <div className="relative max-w-5xl xl:max-w-screen-2xl mx-auto">
        <motion.p
          className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground font-medium mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight font-hey-eloise leading-[1.0] text-foreground mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease, delay: 0.15 }}
        >
          {line1}<br />
          <span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">{line2}</span>
        </motion.h2>

        <motion.div
          className="mt-12 pt-10 border-t border-foreground/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          <button
            onClick={handleBookSession}
            className="inline-flex items-center text-[10px] tracking-[0.4em] uppercase border border-foreground/30 hover:border-foreground/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300 cursor-pointer px-8 py-4"
          >
            {buttonLabel}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
