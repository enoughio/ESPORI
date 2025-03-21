"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "software", name: "Software" },
  { id: "ai", name: "AI/ML" },
  { id: "ui-ux", name: "UI/UX" },
]

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
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Showcasing our expertise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of successful projects and see how we've helped our clients achieve their goals.
            </p>
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

