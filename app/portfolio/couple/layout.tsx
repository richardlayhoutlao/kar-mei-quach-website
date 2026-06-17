import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Couple",
  description:
    "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
  alternates: { canonical: "/portfolio/couple" },
  openGraph: {
    title: "Couples Photography — Kar-Mei Quach",
    description:
      "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
    url: "/portfolio/couple",
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
