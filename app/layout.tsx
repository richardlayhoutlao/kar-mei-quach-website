import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karmeiquach.com"),
  title: {
    default: "Kar-Mei Quach | Montreal Photographer",
    template: "%s | Kar-Mei Quach Photography",
  },
  description:
    "Montreal-based photographer specialising in couples, maternity, family, and kids portraits. Timeless images made with intention.",
  keywords: [
    "Montreal photographer",
    "Montreal family photographer",
    "Montreal couples photographer",
    "Montreal maternity photographer",
    "portrait photographer Montreal",
    "Kar-Mei Quach",
  ],
  authors: [{ name: "Kar-Mei Quach" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.karmeiquach.com",
    siteName: "Kar-Mei Quach Photography",
    title: "Kar-Mei Quach | Montreal Photographer",
    description:
      "Montreal-based photographer specialising in couples, maternity, family, and kids portraits. Timeless images made with intention.",
    images: [
      {
        url: "/Other/km.jpg",
        width: 1200,
        height: 630,
        alt: "Kar-Mei Quach Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kar-Mei Quach | Montreal Photographer",
    description:
      "Montreal-based photographer specialising in couples, maternity, family, and kids portraits.",
    images: ["/Other/km.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cn("antialiased font-sans", montserrat.variable)}
  >
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/cop1nlv.css" />
    </head>
    <body>
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
