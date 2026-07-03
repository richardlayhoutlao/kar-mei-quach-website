import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Couple",
  description:
    "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
  alternates: { canonical: `${SITE_URL}/portfolio/couple` },
  openGraph: {
    title: "Couples Photography — Kar-Mei Quach",
    description:
      "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
    url: `${SITE_URL}/portfolio/couple`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
