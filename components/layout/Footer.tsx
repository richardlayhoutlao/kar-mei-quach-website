"use client"

import Link from "next/link"
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
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
]

const Footer = () => {
  return (
  <footer>

    {/* ── Cream info band ── */}
    <motion.div
      className="bg-transparent px-8 md:px-16 lg:px-24 xl:px-48 py-10 md:py-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

        {/* Single row: brand left, nav right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-black/10">
          <Link href="/" className="font-hey-eloise text-[22px] tracking-[0.03em] uppercase text-foreground/70 shrink-0 hover:opacity-80 transition-opacity duration-200">
            Kar-Mei Quach - Photography
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
