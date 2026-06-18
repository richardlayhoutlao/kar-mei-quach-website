import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Family",
  description:
    "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
  alternates: { canonical: "https://karmeiquach.com/portfolio/family" },
  openGraph: {
    title: "Family Photography — Kar-Mei Quach",
    description:
      "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
    url: "https://karmeiquach.com/portfolio/family",
    type: "website",
    images: [{ url: "/assets/km.jpg", width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
