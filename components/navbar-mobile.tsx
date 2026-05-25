"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/Logo_2.png"
import { Menu, X, ChevronDown } from "lucide-react"

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
      <button
        className="uppercase tracking-widest text-sm flex items-center gap-1"
        onClick={handleToggle}
      >
        {label}
        <ChevronDown
          size={14}
          className={`${shouldAnimate ? "transition-transform duration-300" : ""} ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`flex flex-col items-center gap-4 overflow-hidden ${shouldAnimate ? "transition-all duration-300 ease-in-out" : ""} ${
          open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none mt-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            className="uppercase tracking-widest text-xs text-muted-foreground"
            href={item.href}
            onClick={onClose}
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-5 py-3">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image src={Logo} alt="Logo" width={90} height={90} />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="p-2 relative w-10 h-10 flex items-center justify-center"
        >
          <Menu
            size={28}
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={28}
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-background flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image src={Logo} alt="Logo" width={90} height={90} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 w-10 h-10 flex items-center justify-center"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          <Link className="uppercase tracking-widest text-sm" href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link className="uppercase tracking-widest text-sm" href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link className="uppercase tracking-widest text-sm" href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <MobileNavDropdown label="Portfolio" items={portfolioItems} onClose={() => setMobileOpen(false)} isMenuOpen={mobileOpen} />
          <Link className="uppercase tracking-widest text-sm" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <MobileNavDropdown label="More" items={moreItems} onClose={() => setMobileOpen(false)} isMenuOpen={mobileOpen} />
        </nav>
      </div>
    </div>
  )
}

export default NavbarMobile
