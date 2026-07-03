import type { Metadata } from "next"
import { ContactSection } from "@/components/layout/Contact/ContactSection"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a session or get in touch with Kar-Mei Quach — Montreal photographer available for couples, maternity, family, and kids photography.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Kar-Mei Quach",
    description:
      "Book a session or get in touch with Kar-Mei Quach — Montreal photographer.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

const Page = () => <ContactSection />

export default Page
