import { Button } from "@/components/ui/button"
import Link from "next/link"

const links = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/couple", label: "Portfolio – Couple" },
  { href: "/portfolio/maternity", label: "Portfolio – Maternity" },
  { href: "/portfolio/family", label: "Portfolio – Family" },
  { href: "/portfolio/kids", label: "Portfolio – Kids" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
]

export default function Page() {
  return (
    <div>
      <div className="p-6">
        <ul className="flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
      <img src="https://images-pw.pixieset.com/elementfield/e4Y9xK4/HoFamily4-54101c77-2500.jpg" alt=""></img>
      <div>
        <section>
          <div>
            <h2>Couples, Maternity, Family, Kids</h2>
            <h3>When Vision Meets Memories</h3>
            <a href="/about">More About Me</a>
          </div>
        </section>

        <section>
          <div>
            <h1>What I Do</h1>
          </div>

          <div>
            <h4>01.</h4>
            <h2>Couples</h2>
            <p>
              Focused on real connection and emotion, these sessions are designed
              to feel natural. I capture moments that reflect warmth, intimacy,
              and timelessness.
            </p>
          </div>

          <div>
            <h4>02.</h4>
            <h2>Maternity</h2>
            <p>
              Maternity sessions are calm, natural, and deeply personal. The goal
              is to create soft and heartfelt images showcasing excitement and
              anticipation.
            </p>
          </div>

          <div>
            <h4>03.</h4>
            <h2>Family</h2>
            <p>
              Family sessions are relaxed and guided by real interaction rather
              than poses. I capture natural moments of laughter, movement, and
              interaction. The result is timeless images that reflect your family
              as they truly are.
            </p>
          </div>

          <div>
            <h4>04.</h4>
            <h2>Kids</h2>
            <p>
              Kids sessions are candid, playful, and guided by their energy. By
              allowing space for curiosity and their personality to shine, I
              capture authentic expressions and moments that feel true to who
              they are.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
