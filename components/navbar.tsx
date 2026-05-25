import NavbarDesktop from "@/components/navbar-desktop"
import NavbarMobile from "@/components/navbar-mobile"

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
  <header className="w-full">
    <NavbarDesktop portfolioItems={portfolioItems} moreItems={moreItems} />
    <NavbarMobile portfolioItems={portfolioItems} moreItems={moreItems} />
  </header>
)

export default Navbar
