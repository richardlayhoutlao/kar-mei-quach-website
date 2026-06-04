"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as const

const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const navItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
}

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Couple", href: "/portfolio/couple" },
  { label: "Maternity", href: "/portfolio/maternity" },
  { label: "Family", href: "/portfolio/family" },
  { label: "Kids", href: "/portfolio/kids" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
]

const Footer = () => {
  const router = useRouter()

  const handleBookSession = () => {
    router.push("/contact")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
  <footer>

    {/* ── Dark CTA band ── */}
    <div className="relative overflow-hidden bg-[#1c1917] px-8 md:px-16 lg:px-24 xl:px-48 py-24 md:py-36">

      {/* grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="relative max-w-5xl xl:max-w-screen-2xl mx-auto">
        <motion.p
          className="text-[9px] tracking-[0.5em] uppercase text-white/30 font-medium mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          It starts here.
        </motion.p>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.0] text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease, delay: 0.15 }}
        >
          Let&apos;s make<br />
          <span className="font-light italic text-white/50">New Memories.</span>
        </motion.h2>

        <motion.button
          onClick={handleBookSession}
          className="group inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
        >
          Book a session
          <span className="block h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-20 group-hover:bg-white/70" />
        </motion.button>
      </div>
    </div>

    {/* ── Cream info band ── */}
    <motion.div
      className="bg-[#faf7f4] px-8 md:px-16 lg:px-24 xl:px-48 py-10 md:py-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

        {/* Single row: brand left, nav right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-black/10">
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground hover:text-foreground/60 transition-colors duration-200 shrink-0"
          >
            Kar-Mei Quach
          </Link>

          <motion.nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            variants={navContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {navLinks.map(({ label, href }) => (
              <motion.div key={href} variants={navItem}>
                <Link
                  href={href}
                  className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Kar-Mei Quach. All rights reserved.
          </p>
        </div>

      </div>
    </motion.div>

  </footer>
  )
}

export default Footer
