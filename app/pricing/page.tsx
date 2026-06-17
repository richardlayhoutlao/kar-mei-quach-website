import type { Metadata } from "next"
import { PricingSection } from "@/components/layout/Pricing/PricingSection"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Photography packages for couples, maternity, families, and kids in Montreal. Transparent pricing, no surprises.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Kar-Mei Quach Photography",
    description:
      "Photography packages for couples, maternity, families, and kids in Montreal. Transparent pricing, no surprises.",
    url: "/pricing",
  },
}

const Page = () => <PricingSection />

export default Page
