import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids | Kar-Mei Quach Photography",
  description:
    "Montreal kids photographer. Playful, unposed portraits that preserve childhood exactly as it is — fleeting and full of wonder.",
  alternates: { canonical: "/portfolio/kids" },
  openGraph: {
    title: "Kids Portfolio | Kar-Mei Quach Photography",
    description:
      "Playful, unposed kids portraits in Montreal by Kar-Mei Quach.",
    url: "/portfolio/kids",
  },
}

export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
