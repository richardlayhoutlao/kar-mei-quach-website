import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family | Kar-Mei Quach Photography",
  description:
    "Montreal family photographer. Warm, candid portraits that capture the chaos, love, and connection of family life.",
  alternates: { canonical: "/portfolio/family" },
  openGraph: {
    title: "Family Portfolio | Kar-Mei Quach Photography",
    description:
      "Warm, candid family portraits in Montreal by Kar-Mei Quach.",
    url: "/portfolio/family",
  },
}

export default function FamilyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
