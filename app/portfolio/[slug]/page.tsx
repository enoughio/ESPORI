"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle,  Users, Code } from "lucide-react"
import { Metadata } from "next"

// Project data - in a real app, this would come from a database or CMS
const projects = [
  {
    id: 1,
    slug: "fintech-revolution",
    title: "Fintech Revolution",
    subtitle: "AI-Powered Banking Platform",
    description:
      "A cutting-edge banking platform that leverages artificial intelligence to provide personalized financial insights and recommendations.",
    client: "Global Finance Corp",
    timeline: "6 months",
    team: "8 specialists",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
    challenge:
      "Global Finance Corp needed to modernize their digital banking platform to compete with emerging fintech startups. Their existing system was outdated, lacked personalization features, and couldn't provide the real-time insights that customers increasingly expect.",
    solution:
      "We developed an AI-powered banking platform that analyzes transaction data to provide personalized financial insights and recommendations. The platform includes a modern, intuitive interface, real-time transaction monitoring, and predictive analytics for spending patterns.",
    results: [
      "35% increase in user engagement",
      "28% reduction in customer service inquiries",
      "42% improvement in customer satisfaction scores",
      "Successful migration of 1.2M users to the new platform",
    ],
    testimonial: {
      quote:
        "The Espori team delivered a solution that transformed our digital banking experience. The AI-powered insights have given us a competitive edge and significantly improved customer satisfaction.",
      author: "Sarah Johnson",
      position: "CTO, Global Finance Corp",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=Banking+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Mobile+App+View",
      "/placeholder.svg?height=600&width=800&text=Analytics+Platform",
    ],
    category: ["web", "ai", "ui-ux"],
    nextProject: "healthcare-companion",
    prevProject: "smart-city-initiative",
  },
  {
    id: 2,
    slug: "healthcare-companion",
    title: "Healthcare Companion",
    subtitle: "Patient Management System",
    description:
      "A comprehensive patient management system that streamlines healthcare processes and improves patient outcomes through intuitive interfaces.",
    client: "MediCare Health Network",
    timeline: "8 months",
    team: "10 specialists",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "FHIR API"],
    challenge:
      "MediCare Health Network was struggling with fragmented patient data across multiple systems, leading to inefficiencies, potential errors, and poor patient experiences. They needed a unified solution that would streamline workflows while ensuring compliance with healthcare regulations.",
    solution:
      "We developed a comprehensive patient management system that centralizes all patient data, automates administrative tasks, and provides intuitive interfaces for both healthcare providers and patients. The system includes secure messaging, appointment scheduling, medical record access, and integration with existing healthcare systems.",
    results: [
      "40% reduction in administrative time",
      "62% improvement in appointment scheduling efficiency",
      "30% decrease in missed appointments",
      "95% positive feedback from healthcare providers",
    ],
    testimonial: {
      quote:
        "The Healthcare Companion has revolutionized how we manage patient care. The intuitive interface and comprehensive features have improved efficiency and allowed our staff to focus more on patient care rather than administrative tasks.",
      author: "Dr. Michael Chen",
      position: "Medical Director, MediCare Health Network",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=Patient+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Provider+Interface",
      "/placeholder.svg?height=600&width=800&text=Mobile+App",
    ],
    category: ["software", "ui-ux"],
    nextProject: "ecommerce-reinvented",
    prevProject: "fintech-revolution",
  },
  {
    id: 3,
    slug: "ecommerce-reinvented",
    title: "E-commerce Reinvented",
    subtitle: "Immersive Shopping Experience",
    description:
      "An innovative e-commerce platform that creates immersive shopping experiences through advanced visualization and personalization.",
    client: "StyleTrend Retail",
    timeline: "5 months",
    team: "7 specialists",
    technologies: ["React", "Next.js", "Three.js", "Node.js", "MongoDB", "AWS"],
    challenge:
      "StyleTrend Retail was facing increasing competition in the online fashion market and needed to differentiate their digital shopping experience. Traditional e-commerce interfaces weren't effectively showcasing their products or engaging customers in a memorable way.",
    solution:
      "We created an immersive e-commerce platform featuring 3D product visualization, virtual try-on capabilities, and AI-powered personalized recommendations. The platform includes a responsive design for all devices, seamless checkout process, and integration with their inventory management system.",
    results: [
      "53% increase in time spent on site",
      "47% higher conversion rate",
      "32% increase in average order value",
      "68% reduction in product return rate",
    ],
    testimonial: {
      quote:
        "Espori transformed our online store into an immersive shopping destination. The 3D visualization and virtual try-on features have dramatically reduced our return rates while increasing sales. Our customers love the experience!",
      author: "Emily Rodriguez",
      position: "Digital Director, StyleTrend Retail",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=3D+Product+View",
      "/placeholder.svg?height=600&width=800&text=Virtual+Try-On",
      "/placeholder.svg?height=600&width=800&text=Mobile+Experience",
    ],
    category: ["web", "mobile", "ui-ux"],
    nextProject: "smart-city-initiative",
    prevProject: "healthcare-companion",
  },
  {
    id: 4,
    slug: "smart-city-initiative",
    title: "Smart City Initiative",
    subtitle: "Urban Planning Dashboard",
    description:
      "A data-driven dashboard for urban planners to visualize and optimize city resources, traffic flow, and public services.",
    client: "Metropolis Urban Development",
    timeline: "9 months",
    team: "12 specialists",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "PostgreSQL", "Google Cloud"],
    challenge:
      "Metropolis Urban Development needed a comprehensive solution to manage and optimize city resources in real-time. They were collecting vast amounts of data from IoT sensors throughout the city but lacked the tools to analyze this data effectively and make informed decisions.",
    solution:
      "We developed a data-driven dashboard that aggregates and visualizes data from various city systems including traffic, public transportation, energy usage, waste management, and emergency services. The platform uses AI to predict patterns, identify inefficiencies, and recommend optimizations.",
    results: [
      "25% reduction in traffic congestion",
      "18% decrease in energy consumption",
      "30% improvement in emergency response times",
      "42% increase in public transportation efficiency",
    ],
    testimonial: {
      quote:
        "The Smart City dashboard has transformed how we manage urban resources. The real-time insights and predictive analytics have helped us make data-driven decisions that significantly improve the quality of life for our citizens.",
      author: "David Kim",
      position: "Chief Urban Planner, Metropolis Urban Development",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=City+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Traffic+Analysis",
      "/placeholder.svg?height=600&width=800&text=Resource+Management",
    ],
    category: ["software", "ai"],
    nextProject: "fintech-revolution",
    prevProject: "ecommerce-reinvented",
  },
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

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the current project
  const project = projects.find((p) => p.slug === slug)

  // If project not found, return 404
  if (!project) {
    notFound()
  }

  // Find next and previous projects
  const nextProject = projects.find((p) => p.slug === project.nextProject)
  const prevProject = projects.find((p) => p.slug === project.prevProject)

  const overviewRef = useRef<HTMLDivElement>(null)
  const challengeRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const challengeInView = useInView(challengeRef, { once: true, amount: 0.3 })
  const solutionInView = useInView(solutionRef, { once: true, amount: 0.3 })
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.3 })
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 })

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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.category.map((cat) => (
                <Badge key={cat} className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  {cat === "web"
                    ? "Web"
                    : cat === "mobile"
                      ? "Mobile"
                      : cat === "software"
                        ? "Software"
                        : cat === "ai"
                          ? "AI/ML"
                          : cat === "ui-ux"
                            ? "UI/UX"
                            : cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              {project.title}
            </h1>
            <p className="text-2xl text-white mb-6">{project.subtitle}</p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section ref={overviewRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden glass-card">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                Project Overview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Project Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Users className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">Client</h3>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    {/* <Calendar className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" /> */}
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">Timeline</h3>
                      <p className="text-muted-foreground">{project.timeline}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Users className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">Team</h3>
                      <p className="text-muted-foreground">{project.team}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Code className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">Technologies</h3>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-primary/30 text-primary/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={challengeRef} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={challengeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  The Challenge
                </Badge>
                <h2 className="text-3xl font-bold mb-6 text-white">Problem Statement</h2>
                <Card className="border-none glass-card">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div ref={solutionRef} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  Our Solution
                </Badge>
                <h2 className="text-3xl font-bold mb-6 text-white">How We Solved It</h2>
                <Card className="border-none glass-card">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{project.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Results</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Impact & Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solution delivered measurable results and significant improvements for {project.client}.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <CardContent className="p-6 flex items-start space-x-4 h-full">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-none glass-card">
                <CardContent className="p-8">
                  <svg className="h-10 w-10 text-primary/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <p className="text-lg mb-6 italic text-white/90">"{project.testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <p className="font-bold text-white">{project.testimonial.author}</p>
                      <p className="text-sm text-primary/80">{project.testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Gallery */}
      <section ref={galleryRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Project Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual highlights from the {project.title} project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden glass-card group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    View Full Size
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next/Previous Projects */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-2 flex items-center">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Project
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-white">{prevProject.title}</h3>
                    <p className="text-muted-foreground mb-4">{prevProject.subtitle}</p>
                    <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80">
                      <Link href={`/portfolio/${prevProject.slug}`}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-2 flex items-center justify-end">
                      Next Project
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-white">{nextProject.title}</h3>
                    <p className="text-muted-foreground mb-4">{nextProject.subtitle}</p>
                    <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80">
                      <Link href={`/portfolio/${nextProject.slug}`}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to build your own success story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with a custom solution tailored to your business
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:border-primary text-primary hover:text-primary"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

