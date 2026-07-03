import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_URL } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Kar-Mei Quach Photography",
    template: "%s | Kar-Mei Quach Photography",
  },
  description:
    "Browse Kar-Mei Quach's photography portfolio — couples, maternity, family, and kids sessions captured in Montreal.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: "Portfolio — Kar-Mei Quach Photography",
    description:
      "Browse Kar-Mei Quach's photography portfolio — couples, maternity, family, and kids sessions captured in Montreal.",
    url: `${SITE_URL}/portfolio`,
    type: "website",
    images: [{ url: `${SITE_URL}/assets/commons/km.jpg`, width: 1200, height: 630 }],
  },
}

export default function PortfolioLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
