import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://karmeiquach.com"),
  title: {
    default: "Kar-Mei Quach - Montreal Photographer",
    template: "%s | Kar-Mei Quach",
  },
  description:
    "Capturing candid moments filled with genuine emotion, feeling, and connection for couples, maternity, family, and kids photography.",
  keywords: [
    "Montreal photographer",
    "Montreal photography",
    "couples photographer Montreal",
    "maternity photographer Montreal",
    "family photographer Montreal",
    "children photographer Montreal",
    "Kar-Mei Quach",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Kar-Mei Quach Photography",
    title: "Kar-Mei Quach - Montreal Photographer",
    description:
      "Capturing candid moments filled with genuine emotion, feeling, and connection for couples, maternity, family, and kids photography.",
    images: [{ url: "/assets/km.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kar-Mei Quach - Montreal Photographer",
    description:
      "Capturing candid moments filled with genuine emotion, feeling, and connection for couples, maternity, family, and kids photography.",
    images: ["/assets/km.jpg"],
  },
  robots: { index: true, follow: true },
}

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

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
      <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
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
