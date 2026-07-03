import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Kids",
  description:
    "Children's photography by Kar-Mei Quach — spirited, natural sessions that celebrate kids exactly as they are, in Montreal.",
  alternates: { canonical: `${SITE_URL}/portfolio/kids` },
  openGraph: {
    title: "Kids Photography — Kar-Mei Quach",
    description:
      "Children's photography by Kar-Mei Quach — spirited, natural sessions that celebrate kids exactly as they are, in Montreal.",
    url: `${SITE_URL}/portfolio/kids`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
