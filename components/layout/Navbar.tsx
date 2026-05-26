import NavbarDesktop from "@/components/layout/NavbarDesktop"
import NavbarMobile from "@/components/layout/NavbarMobile"

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
  <header className="relative z-10 w-full">
    <NavbarDesktop portfolioItems={portfolioItems} moreItems={moreItems} />
    <NavbarMobile portfolioItems={portfolioItems} moreItems={moreItems} />
  </header>
)

export default Navbar
