"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Logo from "@/public/Logo_2.png"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu"

type NavItem = { title: string; href: string }

type NavbarDesktopProps = {
  portfolioItems: NavItem[]
  moreItems: NavItem[]
}

const NavbarDesktop = ({ portfolioItems, moreItems }: NavbarDesktopProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
  <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-60 lg:gap-8 xl:gap-12 2xl:gap-16">
    <NavigationMenu viewport={false} className="justify-end ml-auto">
      <NavigationMenuList className="lg:gap-8 xl:gap-12 2xl:gap-16">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="uppercase" href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="uppercase" href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="uppercase" href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <Link href="/">
      <Image src={Logo} alt="Logo" width={150} height={150} />
    </Link>

    <NavigationMenu viewport={false} className="justify-start mr-auto">
      <NavigationMenuList className="lg:gap-8 xl:gap-12 2xl:gap-16">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent className="left-1/2 -translate-x-1/2">
            <ul className="grid w-30">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link className="uppercase justify-center" href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="uppercase" href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">More</NavigationMenuTrigger>
          <NavigationMenuContent className="left-1/2 -translate-x-1/2">
            <ul className="grid w-30">
              {moreItems.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link className="uppercase justify-center" href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden xl:flex">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="cursor-pointer p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            <div className="relative size-6">
              <Sun
                size={24}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  mounted && resolvedTheme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                }`}
              />
              <Moon
                size={24}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  mounted && resolvedTheme === "dark" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </div>
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  )
}

export default NavbarDesktop
