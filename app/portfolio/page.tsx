"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Metadata } from "next"

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "software", name: "Software" },
  { id: "ai", name: "AI/ML" },
  { id: "ui-ux", name: "UI/UX" },
]



export const metadata: Metadata = {
  title:
    "Espori | We Build Custom Software and Signatures websites for bussines",
  description:
    "Espori is a top-tier software agency based in Bhopal, India, offering global clients innovative solutions in web development, mobile apps, UI/UX design, AI solutions, and digital marketing. We help startups, small businesses, and enterprises establish a strong online presence and scale their operations.",
  keywords:
    "software agency in India, web development, mobile app development, AI solutions, UI/UX design, SEO services, digital marketing, branding, cloud computing, startup solutions, small business websites, SaaS development, AI-driven applications, IT consulting, tech solutions, custom software development, enterprise software, business automation, website builder, Bhopal, Madhya Predesh, M.P., SEO, wordpress, wp, fast website, website for bussines, marketing agency, best software agency in Bhopal, full-stack development, website maintenance, eCommerce solutions, cross-platform apps, progressive web apps (PWA), cloud migration services, machine learning solutions, chatbot development, fintech software development, healthtech solutions, EdTech software development, blockchain development, DevOps services, cybersecurity solutions, MVP development for startups, NoCode/LowCode development, software testing and QA, social media marketing, PPC advertising, performance marketing, mobile-first web design, CRM and ERP development, B2B and B2C solutions software agency in USA, software agency in Denver, software agency in USA, web development USA, mobile app development USA, AI solutions USA, UI/UX design USA, software agency Denver, best software company in California, tech solutions USA, cloud computing USA, SaaS development USA, AI-driven applications USA, IT consulting USA, software agency in UK, web development London, AI solutions UK, custom software development UK, startup solutions UK, enterprise software UK, business automation UK, SEO services UK, digital marketing UK, small business websites UK, software agency Australia, web development Sydney, mobile app development Australia, AI and cloud solutions Australia, branding solutions Australia, tech consulting Australia, machine learning Australia, chatbot development Australia, blockchain development Australia, fintech software development Australia, healthtech software Australia, EdTech software development Australia, DevOps services Australia, MVP development USA, B2B and B2C solutions USA, cross-platform apps USA, NoCode/LowCode development USA, software testing USA, digital transformation services USA, SaaS solutions UK, cloud migration USA, marketing agency Denver, startup marketing USA, website design for startups USA, AI-powered applications USA, CRM development USA, best software agency in Sydney, full-stack development California, SEO and branding for startups USA.",
  openGraph: {
    title: "Espori | Custom Software, Web Development & Digital Solutions",
    description:
      "Espori is a leading software agency offering global clients top-notch services in web and mobile development, UI/UX design, AI solutions, and digital marketing. We empower startups and businesses with technology-driven solutions.",
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
    title: "Espori | Custom Software, Web Development & Digital Solutions",
    description:
      "Espori provides AI-driven applications, web development, mobile apps, UI/UX design, SEO, and branding solutions for startups, small businesses, and enterprises worldwide.",
    images: ["/images/og-image.jpg"],
  },
};

const projects = [
  {
    id: 1,
    title: "Fintech Revolution",
    subtitle: "AI-Powered Banking Platform",
    description:
      "A cutting-edge banking platform that leverages artificial intelligence to provide personalized financial insights and recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["web", "ai", "ui-ux"],
    link: "/portfolio/fintech-revolution",
    slug: "fintech-revolution",
  },
  {
    id: 2,
    title: "Healthcare Companion",
    subtitle: "Patient Management System",
    description:
      "A comprehensive patient management system that streamlines healthcare processes and improves patient outcomes through intuitive interfaces.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["software", "ui-ux"],
    link: "/portfolio/healthcare-companion",
    slug: "healthcare-companion",
  },
  {
    id: 3,
    title: "E-commerce Reinvented",
    subtitle: "Immersive Shopping Experience",
    description:
      "An innovative e-commerce platform that creates immersive shopping experiences through advanced visualization and personalization.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["web", "mobile", "ui-ux"],
    link: "/portfolio/ecommerce-reinvented",
    slug: "ecommerce-reinvented",
  },
  {
    id: 4,
    title: "Smart City Initiative",
    subtitle: "Urban Planning Dashboard",
    description:
      "A data-driven dashboard for urban planners to visualize and optimize city resources, traffic flow, and public services.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["software", "ai"],
    link: "/portfolio/smart-city-initiative",
    slug: "smart-city-initiative",
  },
  {
    id: 5,
    title: "AI-Powered Chatbot",
    subtitle: "Customer Service Solution",
    description:
      "An intelligent chatbot that uses natural language processing to provide instant customer support and reduce response times.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["ai", "software"],
    link: "/portfolio/ai-chatbot",
    slug: "ai-chatbot",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    subtitle: "Secure Financial Management",
    description:
      "A secure and intuitive mobile banking application that allows users to manage their finances on the go.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["mobile", "ui-ux"],
    link: "/portfolio/mobile-banking",
    slug: "mobile-banking",
  },
  {
    id: 7,
    title: "Supply Chain Management",
    subtitle: "Logistics Optimization Platform",
    description:
      "A comprehensive platform that optimizes supply chain operations using real-time data and predictive analytics.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["software", "ai"],
    link: "/portfolio/supply-chain",
    slug: "supply-chain",
  },
  {
    id: 8,
    title: "Educational Platform",
    subtitle: "Interactive Learning Experience",
    description:
      "An interactive educational platform that makes learning engaging and accessible for students of all ages.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["web", "mobile", "ui-ux"],
    link: "/portfolio/educational-platform",
    slug: "educational-platform",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <>
    <head>
    <meta
          name="google-site-verification"
          content="BHRdFfuNPFy9qCc02vXLPelSoPmv3HRl1azmNvxPp6k"
        />
    </head>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>

        {/* Add animated grid background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-primary/10 rounded-md aspect-square"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  delay: Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Work</Badge>
            <h1 className=" text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Showcasing our expertise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of successful projects and see how we've helped our clients achieve their goals.
            </p>

            {/* Add animated devices illustration */}
            {/* <motion.div
              className="relative h-32 mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-primary/20 rounded-md border border-primary/30"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
              <motion.div
                className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-16 bg-blue-500/20 rounded-md border border-blue-500/30"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
              <motion.div
                className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-12 bg-purple-500/20 rounded-md border border-purple-500/30"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    : "border-primary/50 hover:border-primary text-primary hover:text-primary"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="py-8 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group h-full"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.category.map((cat) => (
                          <Badge key={cat} className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                            {categories.find((c) => c.id === cat)?.name}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.subtitle}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80 mt-auto">
                      <Link href={`/portfolio/${project.slug}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animation opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-10 md:p-16 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">
              Ready to build your next digital solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing that drives real results for your business.
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 neon-border"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

