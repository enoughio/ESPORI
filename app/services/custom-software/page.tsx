"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CustomSoftwarePage() {
  const overviewRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const caseStudyRef = useRef<HTMLDivElement>(null)
  
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })
  const techInView = useInView(techRef, { once: true, amount: 0.3 })
  const caseStudyInView = useInView(caseStudyRef, { once: true, amount: 0.3 })

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
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Custom Software Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We build high-performance software tailored to your business needs, from enterprise applications to specialized tools that streamline your operations.
            </p>
            <Button size="lg" asChild className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
              <Link href="/contact">
                Get a Custom Solution
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section ref={overviewRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                Overview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tailored solutions for your unique business challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Off-the-shelf software often falls short of addressing your specific business needs. Our custom software development services deliver solutions precisely tailored to your requirements, workflows, and goals.
              </p>
              <p className="text-lg text-muted-foreground">
                We work closely with you to understand your business challenges and develop software that not only solves your immediate problems but also scales with your growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Enterprise applications that streamline operations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Workflow automation to increase efficiency</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Integration with existing systems and third-party services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Scalable architecture that grows with your business</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden glass-card">
                <Image 
                  src="/placeholder.svg?height=800&width=600" 
                  alt="Custom software development" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
<section className="py-16 md:py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
        Industries We Serve
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Expertise across diverse sectors
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        We've delivered custom software solutions for clients across various industries, each with their unique challenges and requirements.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Finance",
          description: "Secure banking platforms, payment processing systems, and financial management tools.",
          delay: 0,
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          title: "Healthcare",
          description: "Patient management systems, medical record solutions, and healthcare analytics platforms.",
          delay: 0.1,
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 01-8 0m8 0v10m-8 0V7m8 10H8" />
            </svg>
          ),
          title: "Education",
          description: "E-learning platforms, student management systems, and virtual classroom solutions.",
          delay: 0.2,
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h11M9 21V3m0 18l-6-6m6 6l6-6" />
            </svg>
          ),
          title: "Logistics",
          description: "Supply chain management, fleet tracking, and warehouse automation solutions.",
          delay: 0.3,
        },
      ].map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: industry.delay }}
          className="p-6 bg-background rounded-lg shadow-lg text-center"
        >
          <div className="mb-4">{industry.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
          <p className="text-muted-foreground">{industry.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

</>
  )
}

