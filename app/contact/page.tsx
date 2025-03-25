"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Metadata } from "next"



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


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const formInView = useInView(formRef, { once: true, amount: 0.3 })
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 })
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

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
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Let's start a conversation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to discuss your project? Get in touch with our team to see how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={formRef}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Get in touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <Card className="border-none glass-card bg-green-900/20">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                      <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
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
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-white">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 123-4567"
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-white">
                              Company
                            </label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Acme Inc."
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-white">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            rows={6}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
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
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>

            <div ref={infoRef}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Contact information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  You can also reach out to us directly using the information below.
                </p>

                <div className="space-y-6">
                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                        <p className="text-muted-foreground mb-1">For general inquiries:</p>
                        <a href="mailto:contact@espori.com" className="text-primary hover:underline">
                          contact@espori.com
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1">For support:</p>
                        <a href="mailto:support@espori.com" className="text-primary hover:underline">
                          support@espori.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Phone</h3>
                        <p className="text-muted-foreground mb-1">Main office:</p>
                        <a href="tel:+12345678900" className="text-primary hover:underline">
                          +1 (234) 567-8900
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Office</h3>
                        <p className="text-muted-foreground mb-1">Headquarters:</p>
                        <address className="not-italic text-muted-foreground">
                          123 Innovation Way
                          <br />
                          Tech District
                          <br />
                          San Francisco, CA 94103
                          <br />
                          United States
                        </address>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Hours</h3>
                        <p className="text-muted-foreground mb-1">Monday - Friday:</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM PST</p>
                        <p className="text-muted-foreground mt-2 mb-1">Response time:</p>
                        <p className="text-muted-foreground">We aim to respond to all inquiries within 24 hours.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section ref={mapRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Visit our office</h2>
            <p className="text-lg text-muted-foreground">
              We're located in the heart of San Francisco's Tech District.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-lg overflow-hidden glass-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913217412364!3d37.76200627116926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647887789259!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Espori office location"
            ></iframe>
          </motion.div>
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
              Have a project in mind? Let's build something amazing.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you transform your ideas into reality. Let's start the conversation
              today.
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 neon-border"
            >
              <a href="mailto:contact@espori.com">
                Email Us Directly
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

