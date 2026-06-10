import { Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer"

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
