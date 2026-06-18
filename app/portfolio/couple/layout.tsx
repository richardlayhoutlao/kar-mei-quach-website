import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Couple",
  description:
    "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
  alternates: { canonical: "https://karmeiquach.com/portfolio/couple" },
  openGraph: {
    title: "Couples Photography — Kar-Mei Quach",
    description:
      "Couples photography by Kar-Mei Quach — romantic, relaxed, and entirely authentic sessions in Montreal.",
    url: "https://karmeiquach.com/portfolio/couple",
    type: "website",
    images: [{ url: "/assets/km.jpg", width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
