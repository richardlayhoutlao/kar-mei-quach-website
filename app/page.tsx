import { HeroSection } from "@/components/layout/Homepage/HeroSection"
import { ServicesSection } from "@/components/layout/Homepage/ServicesSection"
import { PageCTA } from "@/components/layout/PageCTA"

const Page = () => (
  <>
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
    <PageCTA line1="Let's make" line2="New Memories." />
  </>
)

export default Page
