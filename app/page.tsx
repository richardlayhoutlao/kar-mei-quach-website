import { HeroSection } from "@/components/layout/Homepage/HeroSection"
import { ServicesSection } from "@/components/layout/Homepage/ServicesSection"
import { PageCTA } from "@/components/layout/PageCTA"

const Page = () => (
  <>
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
    <PageCTA line1="Make them" line2="Real." />
  </>
)

export default Page
