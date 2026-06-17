import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kids",
  description:
    "Children's photography by Kar-Mei Quach — spirited, natural sessions that celebrate kids exactly as they are, in Montreal.",
  alternates: { canonical: "/portfolio/kids" },
  openGraph: {
    title: "Kids Photography — Kar-Mei Quach",
    description:
      "Children's photography by Kar-Mei Quach — spirited, natural sessions that celebrate kids exactly as they are, in Montreal.",
    url: "/portfolio/kids",
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
