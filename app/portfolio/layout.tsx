import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Kar-Mei Quach Photography",
    template: "%s | Kar-Mei Quach Photography",
  },
  description:
    "Browse Kar-Mei Quach's photography portfolio — couples, maternity, family, and kids sessions captured in Montreal.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Kar-Mei Quach Photography",
    description:
      "Browse Kar-Mei Quach's photography portfolio — couples, maternity, family, and kids sessions captured in Montreal.",
    url: "/portfolio",
    images: [{ url: "/assets/km-og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function PortfolioLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
