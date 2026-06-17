import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maternity | Kar-Mei Quach Photography",
  description:
    "Montreal maternity photographer. Beautiful, intimate portraits that celebrate the last quiet weeks before everything changes.",
  alternates: { canonical: "/portfolio/maternity" },
  openGraph: {
    title: "Maternity Portfolio | Kar-Mei Quach Photography",
    description:
      "Intimate maternity portraits in Montreal by Kar-Mei Quach — celebrating the calm before baby arrives.",
    url: "/portfolio/maternity",
  },
}

export default function MaternityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
