import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Family Photography Montreal",
  description:
    "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
  alternates: { canonical: "/portfolio/family" },
  openGraph: {
    title: "Family Photography — Kar-Mei Quach",
    description:
      "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
    url: "/portfolio/family",
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
