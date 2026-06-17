import type { Metadata } from "next"
import { FaqSection } from "@/components/layout/Faq/FaqSection"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, what to expect on shoot day, delivery timelines, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Kar-Mei Quach Photography",
    description:
      "Answers to common questions about booking, what to expect on shoot day, delivery timelines, and more.",
    url: "/faq",
  },
}

const Page = () => <FaqSection />

export default Page
