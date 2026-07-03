import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Family",
  description:
    "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
  alternates: { canonical: `${SITE_URL}/portfolio/family` },
  openGraph: {
    title: "Family Photography — Kar-Mei Quach",
    description:
      "Family photography by Kar-Mei Quach — candid, warm sessions that capture how your family feels right now, in Montreal.",
    url: `${SITE_URL}/portfolio/family`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
