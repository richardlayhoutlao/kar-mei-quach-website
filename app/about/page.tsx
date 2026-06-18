import type { Metadata } from "next"
import { AboutSection } from "@/components/layout/About/AboutSection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Kar-Mei Quach — a Montreal-based photographer with a passion for candid, intimate storytelling.",
  alternates: { canonical: "https://karmeiquach.com/about" },
  openGraph: {
    title: "About Kar-Mei Quach",
    description:
      "Get to know Kar-Mei Quach — a Montreal-based photographer with a passion for candid, intimate storytelling.",
    url: "https://karmeiquach.com/about",
    images: [{ url: "/assets/km-og-image.jpg", width: 1200, height: 630 }],
  },
}

const Page = () => <AboutSection />

export default Page
