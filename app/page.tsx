import type { Metadata } from "next"
import { HeroSection } from "@/components/layout/Homepage/HeroSection"
import { ServicesSection } from "@/components/layout/Homepage/ServicesSection"
import { PageCTA } from "@/components/layout/PageCTA"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
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
