import type { Metadata } from "next"
import { FaqSection } from "@/components/layout/Faq/FaqSection"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, sessions, and what to expect when working with Kar-Mei Quach Photography in Montreal.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ — Kar-Mei Quach Photography",
    description:
      "Answers to common questions about booking, sessions, and what to expect when working with Kar-Mei Quach Photography in Montreal.",
    url: `${SITE_URL}/faq`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/km.jpg`, width: 1200, height: 630 }],
  },
}

const Page = () => <FaqSection />

export default Page
