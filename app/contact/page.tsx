import type { Metadata } from "next"
import { ContactSection } from "@/components/layout/Contact/ContactSection"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to book or just have questions? Reach out to Kar-Mei Quach — Montreal portrait photographer.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Kar-Mei Quach Photography",
    description:
      "Ready to book or just have questions? Reach out to Kar-Mei Quach — Montreal portrait photographer.",
    url: "/contact",
  },
}

const Page = () => <ContactSection />

export default Page
