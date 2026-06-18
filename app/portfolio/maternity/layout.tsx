import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Maternity",
  description:
    "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
  alternates: { canonical: "https://karmeiquach.com/portfolio/maternity" },
  openGraph: {
    title: "Maternity Photography — Kar-Mei Quach",
    description:
      "Maternity photography by Kar-Mei Quach — tender, intimate sessions honouring the beauty of expectation in Montreal.",
    url: "https://karmeiquach.com/portfolio/maternity",
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
