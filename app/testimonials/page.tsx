import type { Metadata } from "next"
import { TestimonialsSection } from "@/components/layout/Testimonials/TestimonialsSection"
import { PageCTA } from "@/components/layout/PageCTA"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from families, couples, and mothers who trusted Kar-Mei Quach to capture their most important moments.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials | Kar-Mei Quach Photography",
    description:
      "Hear from families, couples, and mothers who trusted Kar-Mei Quach to capture their most important moments.",
    url: "/testimonials",
  },
}

const Page = () => (
  <>
    <TestimonialsSection />
    <PageCTA line1="Words straight" line2="from the heart." />
  </>
)

export default Page
