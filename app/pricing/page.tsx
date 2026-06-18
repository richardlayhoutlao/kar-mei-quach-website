import type { Metadata } from "next"
import { PricingSection } from "@/components/layout/Pricing/PricingSection"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for couples, maternity, family, and children photography sessions in Montreal.",
  alternates: { canonical: "https://karmeiquach.com/pricing" },
  openGraph: {
    title: "Photography Pricing — Kar-Mei Quach",
    description:
      "Transparent pricing for couples, maternity, family, and children photography sessions in Montreal.",
    url: "https://karmeiquach.com/pricing",
    type: "website",
    images: [{ url: "/assets/km.jpg", width: 1200, height: 630 }],
  },
}

const Page = () => <PricingSection />

export default Page
