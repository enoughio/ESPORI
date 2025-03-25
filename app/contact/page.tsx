import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Espori Software Agency | Bhopal, Madhya Pradesh",
  description:
    "Get in touch with our software development team in Bhopal, Madhya Pradesh. We offer custom software, web, and mobile app development services.",
  keywords:
    "contact, software development services, custom software Bhopal, web development Madhya Pradesh, mobile app Bhopal, software agency India, IT services MP",
  openGraph: {
    title: "Contact Us | Espori Software Agency | Bhopal, Madhya Pradesh",
    description:
      "Get in touch with our software development team in Bhopal, Madhya Pradesh. We offer custom software, web, and mobile app development services.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espori Contact Us",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

