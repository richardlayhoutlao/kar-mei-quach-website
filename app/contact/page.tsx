import type { Metadata } from "next"
import { ContactSection } from "@/components/layout/Contact/ContactSection"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a session or get in touch with Kar-Mei Quach — Montreal photographer available for couples, maternity, family, and kids photography.",
  alternates: { canonical: "https://karmeiquach.com/contact" },
  openGraph: {
    title: "Contact Kar-Mei Quach",
    description:
      "Book a session or get in touch with Kar-Mei Quach — Montreal photographer.",
    url: "https://karmeiquach.com/contact",
    images: [{ url: "/assets/km-og-image.jpg", width: 1200, height: 630 }],
  },
}

const Page = () => <ContactSection />

export default Page
