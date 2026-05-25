"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/Logo_2.png"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

type NavItem = { title: string; href: string }

type NavbarDesktopProps = {
  portfolioItems: NavItem[]
  moreItems: NavItem[]
}

const NavbarDesktop = ({ portfolioItems, moreItems }: NavbarDesktopProps) => (
  <div className="hidden lg:flex justify-center">
    <NavigationMenu viewport={false} className="flex justify-center w-full max-w-full h-60">
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
        <NavigationMenuItem>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={150} height={150} />
          </Link>
        </NavigationMenuItem>
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
      </NavigationMenuList>
    </NavigationMenu>
  </div>
)

export default NavbarDesktop
