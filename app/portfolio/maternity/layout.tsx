import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Maternity",
  description:
    "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
  alternates: { canonical: `${SITE_URL}/portfolio/maternity` },
  openGraph: {
    title: "Maternity Photography — Kar-Mei Quach",
    description:
      "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
    url: `${SITE_URL}/portfolio/maternity`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
