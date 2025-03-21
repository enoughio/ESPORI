"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Fintech Revolution",
    subtitle: "AI-Powered Banking Platform",
    description:
      "A cutting-edge banking platform that leverages artificial intelligence to provide personalized financial insights and recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Fintech",
    link: "/portfolio/fintech-revolution",
  },
  {
    id: 2,
    title: "Healthcare Companion",
    subtitle: "Patient Management System",
    description:
      "A comprehensive patient management system that streamlines healthcare processes and improves patient outcomes through intuitive interfaces.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Healthcare",
    link: "/portfolio/healthcare-companion",
  },
  {
    id: 3,
    title: "E-commerce Reinvented",
    subtitle: "Immersive Shopping Experience",
    description:
      "An innovative e-commerce platform that creates immersive shopping experiences through advanced visualization and personalization.",
    image: "/placeholder.svg?height=600&width=800",
    category: "E-commerce",
    link: "/portfolio/ecommerce-reinvented",
  },
  {
    id: 4,
    title: "Smart City Initiative",
    subtitle: "Urban Planning Dashboard",
    description:
      "A data-driven dashboard for urban planners to visualize and optimize city resources, traffic flow, and public services.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Smart City",
    link: "/portfolio/smart-city-initiative",
  },
]

export default function FeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group"
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
                <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-white/80">{project.subtitle}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80">
                <Link href={project.link}>
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

