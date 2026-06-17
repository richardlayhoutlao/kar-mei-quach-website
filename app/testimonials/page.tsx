import type { Metadata } from "next"
import { TestimonialsSection } from "@/components/layout/Testimonials/TestimonialsSection"
import { PageCTA } from "@/components/layout/PageCTA"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from clients who've worked with Kar-Mei Quach Photography in Montreal — real stories, real moments.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials — Kar-Mei Quach Photography",
    description:
      "Hear from clients who've worked with Kar-Mei Quach Photography in Montreal.",
    url: "/testimonials",
    images: [{ url: "/assets/km-og-image.jpg", width: 1200, height: 630 }],
  },
}

const Page = () => (
  <>
    <TestimonialsSection />
    <PageCTA line1="Words straight" line2="from the heart." />
  </>
)

export default Page
