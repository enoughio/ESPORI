import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Espori | Innovate. Build. Scale. Elevate Your Business",
  description:
    "Espori is where technology meets innovation. From AI-driven applications to stunning UI/UX design, we create solutions that accelerate your success.",
  keywords:
    "software agency, AI solutions, custom software, web development, mobile app development, UI/UX design, cloud solutions",
  openGraph: {
    title: "Espori | Innovate. Build. Scale. Elevate Your Business",
    description:
      "Espori is where technology meets innovation. From AI-driven applications to stunning UI/UX design, we create solutions that accelerate your success.",
    url: "https://espori.com",
    siteName: "Espori",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espori Software Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espori | Innovate. Build. Scale. Elevate Your Business",
    description:
      "Espori is where technology meets innovation. From AI-driven applications to stunning UI/UX design, we create solutions that accelerate your success.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground">
            <ScrollToTop />
            <Header />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'