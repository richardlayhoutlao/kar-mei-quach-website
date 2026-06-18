import type { Metadata } from "next"
import { AboutSection } from "@/components/layout/About/AboutSection"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Kar-Mei Quach — a Montreal-based photographer with a passion for candid, intimate storytelling.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Kar-Mei Quach",
    description:
      "Get to know Kar-Mei Quach — a Montreal-based photographer with a passion for candid, intimate storytelling.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/km.jpg`, width: 1200, height: 630 }],
  },
}

const Page = () => <AboutSection />

export default Page
