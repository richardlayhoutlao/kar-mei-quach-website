"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/Logo_2.png"
import { Menu, X } from "lucide-react"

type NavItem = { title: string; href: string }

type NavbarMobileProps = {
  portfolioItems: NavItem[]
  moreItems: NavItem[]
}

const NavbarMobile = ({ portfolioItems, moreItems }: NavbarMobileProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-5 py-3">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image src={Logo} alt="Logo" width={90} height={90} />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="p-2"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col items-center gap-5 py-6 border-t">
          <Link className="uppercase tracking-widest text-sm" href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link className="uppercase tracking-widest text-sm" href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link className="uppercase tracking-widest text-sm" href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <div className="flex flex-col items-center gap-3">
            <span className="uppercase tracking-widest text-sm">Portfolio</span>
            {portfolioItems.map((item) => (
              <Link
                key={item.title}
                className="uppercase tracking-widest text-xs text-muted-foreground"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link className="uppercase tracking-widest text-sm" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="flex flex-col items-center gap-3">
            <span className="uppercase tracking-widest text-sm">More</span>
            {moreItems.map((item) => (
              <Link
                key={item.title}
                className="uppercase tracking-widest text-xs text-muted-foreground"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}

export default NavbarMobile
