import NavbarDesktop from "@/components/layout/Navbar/NavbarDesktop"
import NavbarMobile from "@/components/layout/Navbar/NavbarMobile"

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

const Navbar = () => (
  <header className="relative z-20 w-full bg-white dark:bg-background">
    <NavbarDesktop portfolioItems={portfolioItems} moreItems={moreItems} />
    <NavbarMobile portfolioItems={portfolioItems} moreItems={moreItems} />
  </header>
)

export default Navbar
