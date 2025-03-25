"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowRight,
  Send,
  Calendar,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Store email in a variable for easy changes later
const CONTACT_EMAIL = "aniketj.developer@gmail.com"

const openPositions = [
  {
    title: "Frontend Developer",
    department: "Development",
    location: "Bhopal (Remote)",
    type: "Full Time",
    description: "We're looking for a frontend developer with experience in React, Next.js, and modern CSS frameworks.",
    requirements: [
      "3+ years of experience with React",
      "Proficiency in TypeScript",
      "Experience with Next.js",
      "Strong UI/UX sensibilities",
      "Familiarity with Tailwind CSS",
    ],
  },
  {
    title: "Backend Developer",
    department: "Development",
    location: "Bhopal (Remote)",
    type: "Full Time",
    description: "Join our backend team to build scalable and reliable APIs and services.",
    requirements: [
      "3+ years of experience with Node.js or Python",
      "Experience with database design and optimization",
      "Familiarity with cloud services (AWS, GCP, Azure)",
      "Understanding of microservice architecture",
      "Knowledge of API security best practices",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Bhopal (Remote)",
    type: "Full Time",
    description: "Help us create beautiful, intuitive interfaces that users love.",
    requirements: [
      "Portfolio demonstrating UI/UX design skills",
      "Proficiency in Figma or Adobe XD",
      "Experience with design systems",
      "Understanding of accessibility standards",
      "Ability to translate business requirements into design solutions",
    ],
  },
]

export default function CareersPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const formRef = useRef<HTMLDivElement>(null)
  const positionsRef = useRef<HTMLDivElement>(null)
  const cultureRef = useRef<HTMLDivElement>(null)

  const formInView = useInView(formRef, { once: true, amount: 0.3 })
  const positionsInView = useInView(positionsRef, { once: true, amount: 0.3 })
  const cultureInView = useInView(cultureRef, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, resume: e.target.files?.[0] || null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      // In a real implementation, you would send this data to your server
      // For now, we'll simulate a successful submission
      console.log(`Sending application to ${CONTACT_EMAIL} with form data:`, formState)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume: null,
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Career Opportunities at Espori
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our team of passionate professionals and help us build innovative software solutions that make a
              difference.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
              >
                <a href="#open-positions">
                  <span className="relative z-10">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section ref={cultureRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Why Join Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Building the future together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Espori, we're more than just a software agency. We're a community of passionate individuals working
              together to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Work with cutting-edge technologies and contribute to innovative solutions.",
                icon: <Lightbulb className="h-8 w-8 text-cyan-400" aria-hidden="true" />,
                color: "cyan",
                delay: 0,
              },
              {
                title: "Growth",
                description: "Continuous learning and career development opportunities.",
                icon: <GraduationCap className="h-8 w-8 text-blue-400" aria-hidden="true" />,
                color: "blue",
                delay: 0.2,
              },
              {
                title: "Collaboration",
                description: "Diverse team of talented professionals working together.",
                icon: <Users className="h-8 w-8 text-purple-400" aria-hidden="true" />,
                color: "purple",
                delay: 0.4,
              },
              {
                title: "Work-Life Balance",
                description: "Flexible work arrangements to ensure a healthy work-life balance.",
                icon: <Calendar className="h-8 w-8 text-cyan-400" aria-hidden="true" />,
                color: "cyan",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group"
              >
                <div className="mb-4 glass-light inline-block p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">Our culture</h3>
              <p className="text-lg text-muted-foreground">
                We foster a culture of innovation, collaboration, and continuous learning. Our team members are
                encouraged to experiment, share ideas, and grow both personally and professionally.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in work-life balance and provide flexible working arrangements to ensure our team members can
                perform at their best while maintaining a healthy personal life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Collaborative work environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Flexible working hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Regular team events and activities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative h-[400px] rounded-lg overflow-hidden glass-card"
            >
              <Image
                src="/placeholder.svg?height=800&width=600&text=Team+Culture"
                alt="Espori team culture"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" ref={positionsRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join our growing team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="border-primary/30 text-primary/80">
                            {position.department}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary/80">
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary/80">
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button
                          asChild
                          className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a href="#application-form">
                            <span className="relative z-10">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          </a>
                        </Button>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{position.description}</p>

                    <div>
                      <h4 className="font-bold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: openPositions.length * 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-muted-foreground mb-6">
              Don't see a position that matches your skills? Send us your resume anyway!
            </p>
            <Button
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
            >
              <a href="#application-form">
                <span className="relative z-10">
                  Submit Open Application
                  <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" ref={formRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Application Form
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Apply to join our team</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to apply for a position at Espori. We'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <Card className="border-none glass-card bg-green-900/20">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Application Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest in joining Espori. We'll review your application and get in touch with
                    you soon.
                  </p>
                  <Button
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <span className="relative z-10">Submit Another Application</span>
                    <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none glass-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-medium text-white">
                          Position <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formState.position}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-background/50 border border-border/50 focus:border-primary rounded-md"
                          aria-required="true"
                        >
                          <option value="">Select a position</option>
                          {openPositions.map((pos, idx) => (
                            <option key={idx} value={pos.title}>
                              {pos.title}
                            </option>
                          ))}
                          <option value="Other">Other / Open Application</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="resume" className="text-sm font-medium text-white">
                        Resume / CV <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={handleFileChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                        accept=".pdf,.doc,.docx"
                        aria-required="true"
                      />
                      <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Cover Letter / Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about yourself, your experience, and why you want to join Espori..."
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    {formError && (
                      <div className="text-red-400 text-sm" role="alert">
                        {formError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center relative z-10 group">
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] group-hover:scale-110 transition-transform" />
                          Submit Application
                          <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">Ready to grow with us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our team of talented professionals and help us build innovative software solutions that make a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
              >
                <a href="#application-form">
                  <span className="relative z-10 flex items-center">
                    Apply Now
                    <BriefcaseBusiness className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:border-primary text-primary hover:text-primary relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

