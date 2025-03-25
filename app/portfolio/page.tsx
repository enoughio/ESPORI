import type { Metadata } from "next"
import PortfolioPageClient from "./PortfolioPageClient"

export const metadata: Metadata = {
  title: "Portfolio | Espori Software Development Agency | Bhopal, India",
  description:
    "Explore our portfolio of successful software development projects. We build custom software, mobile apps, and web applications for businesses in Bhopal and beyond.",
  keywords:
    "portfolio, case studies, software projects, custom software Bhopal, app development India, web development Madhya Pradesh, project showcase",
  openGraph: {
    title: "Portfolio | Espori Software Development Agency | Bhopal, India",
    description:
      "Explore our portfolio of successful software development projects. We build custom software, mobile apps, and web applications for businesses in Bhopal and beyond.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espori Portfolio",
      },
    ],
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

