import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Couples | Kar-Mei Quach Photography",
  description:
    "Montreal couples photographer. Relaxed, authentic portrait sessions for partners who want images as real as their love.",
  alternates: { canonical: "/portfolio/couple" },
  openGraph: {
    title: "Couples Portfolio | Kar-Mei Quach Photography",
    description:
      "Relaxed, authentic couples portrait sessions in Montreal photographed by Kar-Mei Quach.",
    url: "/portfolio/couple",
  },
}

export default function CoupleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
