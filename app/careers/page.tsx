import type { Metadata } from "next"
import CareersPageClient from "./careers-client"

export const metadata: Metadata = {
  title: "Careers | Join Our Team at Espori | Software Agency in Bhopal",
  description:
    "Join our team of talented professionals at Espori. We're looking for passionate individuals to help us build innovative software solutions in Bhopal, Madhya Pradesh.",
  keywords:
    "careers, jobs, software jobs in bhopal, tech careers, software development, hiring, Madhya Pradesh, India, tech jobs",
  openGraph: {
    title: "Careers | Join Our Team at Espori | Software Agency in Bhopal",
    description:
      "Join our team of talented professionals at Espori. We're looking for passionate individuals to help us build innovative software solutions in Bhopal, Madhya Pradesh.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espori Careers",
      },
    ],
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}

