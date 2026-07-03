"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import LogoLight from "@/public/assets/commons/km-logo.png"
import LogoDark from "@/public/assets/commons/km-logo-dark-mode.png"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

type NavItem = { title: string; href: string }

type NavbarDesktopProps = {
  portfolioItems: NavItem[]
  moreItems: NavItem[]
}

const linkClass =
  "text-[11px] tracking-[0.3em] uppercase text-foreground/75 hover:text-foreground transition-colors duration-200"

const NavbarDesktop = ({ portfolioItems, moreItems }: NavbarDesktopProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-60 px-8 lg:px-16 xl:px-24">

      {/* Left */}
      <div className="flex items-center justify-end gap-10 xl:gap-14">
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/about" className={linkClass}>About</Link>
        <Link href="/pricing" className={linkClass}>Pricing</Link>
      </div>

      {/* Logo */}
      <Link href="/" className="flex flex-col items-center mx-6 xl:mx-14 gap-2">
        <Image src={mounted && resolvedTheme === "dark" ? LogoDark : LogoLight} alt="Kar-Mei Quach Photography logo" width={150} height={150} priority className="w-[110px] xl:w-[150px]" />
        <div className="flex flex-col items-center leading-tight font-hey-eloise">
          <span className="text-[18px] xl:text-[22px] tracking-[0.03em] uppercase text-foreground/80">Kar-Mei Quach</span>
          <span className="text-[18px] xl:text-[22px] tracking-[0.03em] uppercase text-foreground/80">Photography</span>
        </div>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-10 xl:gap-14">

        {/* Portfolio dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
        >
          <button className={`${linkClass} inline-flex items-center gap-2`} onClick={() => setPortfolioOpen(v => !v)}>
            Portfolio
            <motion.svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <motion.path
                d="M6 9 L12 15 L18 9"
                animate={{ d: portfolioOpen ? "M6 15 L12 9 L18 15" : "M6 9 L12 15 L18 9" }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.svg>
          </button>
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-200 ${
              portfolioOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
            }`}
          >
            <div className="flex flex-col bg-white/95 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden min-w-[140px]">
              {portfolioItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setPortfolioOpen(false); setMoreOpen(false) }} className="text-[11px] tracking-[0.3em] uppercase text-neutral-800/60 hover:text-neutral-900 w-full text-center px-6 py-3 hover:bg-neutral-200 transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/contact" className={linkClass}>Contact</Link>

        {/* More dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button className={`${linkClass} inline-flex items-center gap-2`} onClick={() => setMoreOpen(v => !v)}>
            More
            <motion.svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <motion.path
                d="M6 9 L12 15 L18 9"
                animate={{ d: moreOpen ? "M6 15 L12 9 L18 15" : "M6 9 L12 15 L18 9" }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.svg>
          </button>
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-200 ${
              moreOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
            }`}
          >
            <div className="flex flex-col bg-white/95 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden min-w-[160px]">
              {moreItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setPortfolioOpen(false); setMoreOpen(false) }} className="text-[11px] tracking-[0.3em] uppercase text-neutral-800/60 hover:text-neutral-900 w-full text-center px-6 py-3 hover:bg-neutral-200 transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-foreground/40 hover:text-foreground transition-colors duration-200"
          aria-label="Toggle theme"
        >
          <div className="relative size-6">
            <Sun
              size={24}
              className={`absolute inset-0 transition-all duration-500 ${
                mounted && resolvedTheme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
              }`}
            />
            <Moon
              size={24}
              className={`absolute inset-0 transition-all duration-500 ${
                mounted && resolvedTheme === "dark" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
          </div>
        </button>

      </div>
    </div>
  )
}

export default NavbarDesktop
