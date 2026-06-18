import type { Metadata } from "next"
import { HeroSection } from "@/components/layout/Homepage/HeroSection"
import { ServicesSection } from "@/components/layout/Homepage/ServicesSection"
import { PageCTA } from "@/components/layout/PageCTA"

export const metadata: Metadata = {
  alternates: { canonical: "https://karmeiquach.com" },
  openGraph: {
    url: "https://karmeiquach.com",
    type: "website",
    images: [{ url: "/assets/km.jpg", width: 1200, height: 630 }],
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
