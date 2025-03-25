import Head from "next/head";
import ServicesPageClient from "./ServicesPageClient"

export const metadata = {
  title: "Our Services | Espori Software Agency",
  description:
    "Discover Espori's range of services, including custom software development, web & mobile apps, UI/UX design, and AI & cloud solutions. Empower your business with cutting-edge technology.",
  keywords: "custom software, web development, mobile apps, UI/UX design, AI solutions, cloud computing, Espori services",
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Software Development",
            provider: {
              "@type": "Organization",
              name: "Espori",
              url: "https://espori.com",
            },
          })}
        </script>
        <meta
          name="google-site-verification"
          content="BHRdFfuNPFy9qCc02vXLPelSoPmv3HRl1azmNvxPp6k"
        />
      </Head>
      <ServicesPageClient />
    </>
  )
}

