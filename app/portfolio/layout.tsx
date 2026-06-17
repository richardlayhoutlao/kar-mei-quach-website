import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Kar-Mei Quach's portrait work — couples, maternity, family, and kids sessions photographed in Montreal.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Kar-Mei Quach Photography",
    description:
      "Browse Kar-Mei Quach's portrait work — couples, maternity, family, and kids sessions photographed in Montreal.",
    url: "/portfolio",
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
