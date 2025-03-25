"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare } from "lucide-react"

// Store email in a variable for easy changes later
const CONTACT_EMAIL = "aniketj.developer@gmail.com"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      // In a real implementation, you would send this data to your server
      // For now, we'll simulate a successful submission
      console.log(`Sending email to ${CONTACT_EMAIL} with form data:`, formState)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("There was an error submitting your message. Please try again.")
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
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

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

            {/* Animated contact methods */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: <Mail className="h-5 w-5" aria-hidden="true" />, text: "Email Us", delay: 0 },
                { icon: <Phone className="h-5 w-5" aria-hidden="true" />, text: "Call Us", delay: 0.1 },
                { icon: <MessageSquare className="h-5 w-5" aria-hidden="true" />, text: "Chat With Us", delay: 0.2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + item.delay }}
                  className="glass-card px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
              >
                <a href="#contact-form">
                  <span className="relative z-10">
                    Get in Touch
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-16 md:py-24 relative overflow-hidden">
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
                      <CheckCircle className="h-16 w-16 text-green-400 mb-4" aria-hidden="true" />
                      <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden group"
                        onClick={() => setIsSubmitted(false)}
                      >
                        <span className="relative z-10">
                          Send Another Message
                          <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
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
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
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
                            aria-required="true"
                          />
                        </div>

                        {formError && (
                          <div className="text-red-400 text-sm" role="alert">
                            {formError}
                          </div>
                        )}

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden group"
                          disabled={isSubmitting}
                          aria-label={isSubmitting ? "Sending message..." : "Send message"}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
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
                            <span className="flex items-center justify-center relative z-10">
                              <Send
                                className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] group-hover:scale-110 transition-transform"
                                aria-hidden="true"
                              />
                              Send Message
                              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
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
                      <Mail className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                        <p className="text-muted-foreground mb-1">For all inquiries:</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Phone</h3>
                        <p className="text-muted-foreground mb-1">Main office:</p>
                        <a href="tel:+919876543210" className="text-primary hover:underline">
                          +91 98765 43210
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Office</h3>
                        <p className="text-muted-foreground mb-1">Headquarters:</p>
                        <address className="not-italic text-muted-foreground">
                          254 E2, Area Colony
                          <br />
                          Bhopal, Madhya Pradesh 462011
                          <br />
                          India
                        </address>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Hours</h3>
                        <p className="text-muted-foreground mb-1">Monday - Friday:</p>
                        <p className="text-muted-foreground">10:00 AM - 6:00 PM IST</p>
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
            <p className="text-lg text-muted-foreground">We're located in the heart of Bhopal, Madhya Pradesh.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-lg overflow-hidden glass-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58693.19602302915!2d77.38562441744386!3d23.25933249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1647887789259!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Espori office location in Bhopal, Madhya Pradesh"
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
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 neon-border relative overflow-hidden"
            >
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <span className="relative z-10 flex items-center">
                  Email Us Directly
                  <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

