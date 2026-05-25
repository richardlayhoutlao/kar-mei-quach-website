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

const portfolioItems = [
  { title: "Couple", href: "/portfolio/couple" },
  { title: "Maternity", href: "/portfolio/maternity" },
  { title: "Family", href: "/portfolio/family" },
  { title: "Kids", href: "/portfolio/kids" },
]

const moreItems = [
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQ", href: "/faq" },
]

export default function Navbar() {
  return (
      <NavigationMenu viewport={false} className=" flex justify-center w-full max-w-full h-60">
        <NavigationMenuList className="gap-10">
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
  )
}
