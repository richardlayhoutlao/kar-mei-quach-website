import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Maternity Photography Montreal",
  description:
    "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
  alternates: { canonical: "/portfolio/maternity" },
  openGraph: {
    title: "Maternity Photography — Kar-Mei Quach",
    description:
      "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
    url: "/portfolio/maternity",
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
