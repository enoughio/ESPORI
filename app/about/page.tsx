import type { Metadata } from "next"
import AboutPageClient from "./about-client"

export const metadata: Metadata = {
  title: "About Espori | Custom Software Development Agency | Bhopal, India",
  description:
    "Learn about Espori, a leading software development agency in Bhopal, India. We specialize in custom software, web and mobile app development, UI/UX design, and AI solutions.",
  keywords:
    "about us, software development agency, custom software company Bhopal, tech company Madhya Pradesh, IT services India, Espori team, software experts",
  openGraph: {
    title: "About Espori | Custom Software Development Agency | Bhopal, India",
    description:
      "Learn about Espori, a leading software development agency in Bhopal, India. We specialize in custom software, web and mobile app development, UI/UX design, and AI solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Espori",
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}

