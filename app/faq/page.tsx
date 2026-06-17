import type { Metadata } from "next"
import { FaqSection } from "@/components/layout/Faq/FaqSection"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, sessions, and what to expect when working with Kar-Mei Quach Photography in Montreal.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Kar-Mei Quach Photography",
    description:
      "Answers to common questions about booking, sessions, and what to expect when working with Kar-Mei Quach Photography in Montreal.",
    url: "/faq",
    images: [{ url: "/assets/km-og-image.jpg", width: 1200, height: 630 }],
  },
}

const Page = () => <FaqSection />

export default Page
