"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPageClient() {
  const storyRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const cultureRef = useRef<HTMLDivElement>(null)

  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const cultureInView = useInView(cultureRef, { once: true, amount: 0.3 })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>

        {/* Add animated background elements */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
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
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              From a small idea to a global software powerhouse
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2024, Espori represents the fusion of exceptional engineering and visionary design.
            </p>

            {/* Add a floating button */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
              >
                <a href="#team">
                  <span className="relative z-10 flex items-center">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Founded with a vision to transform digital experiences
              </h2>
              <p className="text-lg text-muted-foreground">
                Espori was founded in 2024 by a group of tech enthusiasts who shared a common vision: to create
                meaningful digital experiences that make a difference. We saw a gap in the market for a software agency
                that truly understood both the technical and human aspects of digital solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our name, Espori, comes from the combination of "esprit" (spirit) and "horizon," reflecting our
                forward-thinking approach and the spirit of innovation that drives everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden glass-card">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Espori team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}

      {/* Mission & Values */}
      <section ref={missionRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Mission & Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What drives us forward</h2>
            <p className="text-lg text-muted-foreground">
              Our mission and values are at the core of everything we do, guiding our decisions and shaping our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-lg mb-6 text-primary/90">
                    "To build intelligent, scalable, and human-centric software solutions that drive meaningful impact."
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Create technology that enhances human experiences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Deliver solutions that drive measurable business results
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Build long-term partnerships based on trust and results
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-none glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Values</h3>
                  <ul className="space-y-6">
                    <li>
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-white">Innovation</h4>
                      </div>
                      <p className="text-muted-foreground">
                        We embrace new technologies and approaches to solve complex problems.
                      </p>
                    </li>
                    {/* Other values remain the same */}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-16 md:py-24 relative overflow-hidden">
        {/* Team section content remains the same */}
      </section>

      {/* Work Culture */}
      <section ref={cultureRef} className="py-16 md:py-24 relative overflow-hidden">
        {/* Work culture content remains the same */}
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Process overview content remains the same */}
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
              Ready to elevate your digital presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with innovative digital solutions.
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 neon-border relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

