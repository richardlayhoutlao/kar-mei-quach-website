import type { Metadata } from "next"
import { AboutSection } from "@/components/layout/About/AboutSection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kar-Mei Quach — Montreal-based photographer, mother of three, and creator of images that last a lifetime.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Kar-Mei Quach Photography",
    description:
      "Meet Kar-Mei Quach — Montreal-based photographer, mother of three, and creator of images that last a lifetime.",
    url: "/about",
  },
}

const Page = () => <AboutSection />

export default Page
