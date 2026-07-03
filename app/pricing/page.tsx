import type { Metadata } from "next"
import { PricingSection } from "@/components/layout/Pricing/PricingSection"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for couples, maternity, family, and children photography sessions in Montreal.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Photography Pricing — Kar-Mei Quach",
    description:
      "Transparent pricing for couples, maternity, family, and children photography sessions in Montreal.",
    url: `${SITE_URL}/pricing`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

const Page = () => <PricingSection />

export default Page
