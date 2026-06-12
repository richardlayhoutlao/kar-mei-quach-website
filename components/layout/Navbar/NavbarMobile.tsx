"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import LogoLight from "@/public/KM_logo.png"
import LogoDark from "@/public/KM_logo_dark_mode.png"
import { X, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

type NavItem = { title: string; href: string }

type NavbarMobileProps = {
  portfolioItems: NavItem[]
  moreItems: NavItem[]
}

type MobileNavDropdownProps = {
  label: string
  items: NavItem[]
  onClose: () => void
  isMenuOpen: boolean
}

const linkClass = "text-[13px] tracking-[0.3em] uppercase text-foreground/75 hover:text-foreground transition-colors duration-200"

const MobileNavDropdown = ({ label, items, onClose, isMenuOpen }: MobileNavDropdownProps) => {
  const [open, setOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      setShouldAnimate(false)
      setOpen(false)
    }
  }, [isMenuOpen])

  const handleToggle = () => {
    setShouldAnimate(true)
    setOpen(!open)
  }

  return (
    <div className="flex flex-col items-center">
      <button className={`${linkClass} relative cursor-pointer`} onClick={handleToggle}>
        {label}
        <motion.svg
          className="absolute top-1/2 -translate-y-1/2 -right-5"
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <motion.path
            d="M6 9 L12 15 L18 9"
            animate={{ d: open ? "M6 15 L12 9 L18 15" : "M6 9 L12 15 L18 9" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </motion.svg>
      </button>
      <div
        className={`flex flex-col items-center gap-4 overflow-hidden ${shouldAnimate ? "transition-all duration-300 ease-in-out" : ""} ${
          open ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none mt-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

const NavbarMobile = ({ portfolioItems, moreItems }: NavbarMobileProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <div className="lg:hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" onClick={close} className="flex flex-col items-center gap-1">
          <Image src={mounted && resolvedTheme === "dark" ? LogoDark : LogoLight} alt="Logo" width={90} height={90} priority />
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[8px] tracking-[0.2em] uppercase text-foreground/80">Kar-Mei Quach</span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-foreground/80">Photography</span>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="text-foreground/75 hover:text-foreground transition-colors duration-200 p-1 cursor-pointer"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#faf7f4] flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" onClick={close} className="flex flex-col items-center gap-1">
            <Image src={mounted && resolvedTheme === "dark" ? LogoDark : LogoLight} alt="Logo" width={90} height={90} priority />
            <div className="flex flex-col items-center leading-tight font-hey-eloise">
              <span className="text-[18px] tracking-[0.03em] uppercase text-foreground/80">Kar-Mei Quach</span>
              <span className="text-[18px] tracking-[0.03em] uppercase text-foreground/80">Photography</span>
            </div>
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="text-foreground/75 hover:text-foreground transition-colors duration-200 p-1"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-7">
          <Link href="/" onClick={close} className={linkClass}>Home</Link>
          <Link href="/about" onClick={close} className={linkClass}>About</Link>
          <Link href="/pricing" onClick={close} className={linkClass}>Pricing</Link>
          <MobileNavDropdown label="Portfolio" items={portfolioItems} onClose={close} isMenuOpen={mobileOpen} />
          <Link href="/contact" onClick={close} className={linkClass}>Contact</Link>
          <MobileNavDropdown label="More" items={moreItems} onClose={close} isMenuOpen={mobileOpen} />
        </nav>
      </div>

    </div>
  )
}

export default NavbarMobile
