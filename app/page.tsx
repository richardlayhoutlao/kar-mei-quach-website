import Image from "next/image"
import Link from "next/link"
import {
  HeartHandshake,
  Baby,
  Home,
  Smile,
  type LucideIcon,
} from "lucide-react"
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
    <section className="relative h-[calc(100vh-7rem)] min-h-[560px] w-full overflow-hidden lg:h-[calc(100vh-15rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-16 bottom-0 bg-linear-to-t from-neutral-800/90 via-neutral-600/30 to-transparent" />

          <Image
            src="/White.png"
            alt="Hero"
            width={1440}
            height={960}
            className="hidden lg:block mx-auto"
          />
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-12 lg:pb-0">
        <div className="flex flex-col items-center px-8 pb-12 text-center text-white md:px-16 md:pb-16 lg:px-24 lg:pb-20">
          <Image
            src="/White.png"
            alt="Hero"
            width={1440}
            height={960}
            className="block lg:hidden"
          />
          <h2 className="mb-5 text-[8px] font-medium tracking-[0.45em] uppercase sm:text-[10px]">
            Couples · Maternity · Family · Kids
          </h2>
          <h3 className="mb-8 max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            When Vision Meets Memories
          </h3>
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
          >
            More About Me
            <span className="block h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-14 group-hover:bg-white/80" />
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    {/* <section className="px-8 md:px-16 lg:px-24 py-20 md:py-32">
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
    </section> */}
  </main>
)

export default Page
