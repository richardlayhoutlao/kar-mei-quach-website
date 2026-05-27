import Link from "next/link"
import { HeartHandshake, Baby, Home, Smile, type LucideIcon } from "lucide-react"
import { FeatureCard } from "@/components/ui/FeatureCard"

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: HeartHandshake,
    title: "Couples",
    description:
      "Focused on real connection and emotion, these sessions are designed to feel natural. I capture moments that reflect warmth, intimacy, and timelessness.",
  },
  {
    icon: Baby,
    title: "Maternity",
    description:
      "Maternity sessions are calm, natural, and deeply personal. The goal is to create soft and heartfelt images showcasing excitement and anticipation.",
  },
  {
    icon: Home,
    title: "Family",
    description:
      "Family sessions are relaxed and guided by real interaction rather than poses. I capture natural moments of laughter, movement, and interaction. The result is timeless images that reflect your family as they truly are.",
  },
  {
    icon: Smile,
    title: "Kids",
    description:
      "Kids sessions are candid, playful, and guided by their energy. By allowing space for curiosity and their personality to shine, I capture authentic expressions and moments that feel true to who they are.",
  },
]

const Page = () => (
  <main>
    {/* Hero */}
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">
      <img
        src="https://images-pw.pixieset.com/elementfield/e4Y9xK4/HoFamily4-54101c77-2500.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-800/90 via-neutral-600/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-background to-transparent dark:hidden" />
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20 flex flex-col items-center text-center">
        <h2 className="text-white/70 text-[10px] tracking-[0.45em] uppercase mb-5 font-medium">
          Couples&nbsp;&nbsp;·&nbsp;&nbsp;Maternity&nbsp;&nbsp;·&nbsp;&nbsp;Family&nbsp;&nbsp;·&nbsp;&nbsp;Kids
        </h2>
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.1] tracking-tight mb-8">
          When Vision Meets Memories
        </h3>
        <Link
          href="/about"
          className="group inline-flex items-center gap-3 text-white/90 text-[10px] tracking-[0.35em] uppercase"
        >
          More About Me
          <span className="block h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-14 group-hover:bg-white/80" />
        </Link>
      </div>
    </section>

    {/* Services */}
    <section className="px-8 md:px-16 lg:px-24 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h1 className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium">
            What I Do
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, i) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              Icon={Icon}
              isLeft={i % 2 === 0}
              isBottom={i >= 2}
            />
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default Page
