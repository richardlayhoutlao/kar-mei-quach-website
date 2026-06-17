import type { Metadata } from "next"
import { HeroSection } from "@/components/layout/Homepage/HeroSection"
import { ServicesSection } from "@/components/layout/Homepage/ServicesSection"
import { PageCTA } from "@/components/layout/PageCTA"

export const metadata: Metadata = {
  title: "Kar-Mei Quach | Montreal Photographer",
  description:
    "Montreal photographer capturing couples, maternity, families, and kids with warmth and intention. Book your session today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kar-Mei Quach | Montreal Photographer",
    description:
      "Montreal photographer capturing couples, maternity, families, and kids with warmth and intention.",
    url: "/",
  },
}

const Page = () => (
  <>
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
    <PageCTA line1="Let's make something" line2="beautiful." />
  </>
)

export default Page
