"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
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
                    <li>
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-white">Collaboration</h4>
                      </div>
                      <p className="text-muted-foreground">
                        We believe the best solutions come from diverse perspectives working together.
                      </p>
                    </li>
                    <li>
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-white">Integrity</h4>
                      </div>
                      <p className="text-muted-foreground">
                        We are transparent, honest, and accountable in all our interactions.
                      </p>
                    </li>
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-white">Excellence</h4>
                      </div>
                      <p className="text-muted-foreground">
                        We strive for the highest quality in everything we deliver.
                      </p>
                    </li>
                    <li>
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-white">Impact</h4>
                      </div>
                      <p className="text-muted-foreground">
                        We measure our success by the positive difference we make for our clients and users.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet the people behind Espori</h2>
            <p className="text-lg text-muted-foreground">
              A collective of forward-thinking designers, developers, and strategists dedicated to creating exceptional
              digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                position: "Founder & CEO",
                bio: "With over 15 years of experience in tech leadership, Alex founded Espori to create meaningful digital solutions.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0,
              },
              {
                name: "Jamie Chen",
                position: "CTO",
                bio: "Jamie leads our technical strategy and ensures we're using the right technologies to solve our clients' problems.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.1,
              },
              {
                name: "Sophia Rodriguez",
                position: "Design Director",
                bio: "Sophia brings a human-centered approach to design, creating intuitive and beautiful digital experiences.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.2,
              },
              {
                name: "David Kim",
                position: "Lead Developer",
                bio: "David's expertise in software architecture ensures our solutions are robust, scalable, and maintainable.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.3,
              },
              {
                name: "Emma Wilson",
                position: "Project Manager",
                bio: "Emma ensures our projects run smoothly, on time, and within budget while exceeding client expectations.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.4,
              },
              {
                name: "Marcus Johnson",
                position: "AI Specialist",
                bio: "Marcus brings cutting-edge AI and machine learning expertise to our most innovative projects.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.5,
              },
              {
                name: "Olivia Garcia",
                position: "UX Researcher",
                bio: "Olivia's research helps us understand user needs and behaviors to create more effective solutions.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.6,
              },
              {
                name: "Ryan Patel",
                position: "Frontend Developer",
                bio: "Ryan crafts beautiful, responsive interfaces that bring our designs to life across all devices.",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.7,
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: member.delay }}
              >
                <Card className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm text-white/90">{member.bio}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-white">{member.name}</h3>
                    <p className="text-sm text-primary/80 mb-3">{member.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Join Our Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team. If you're passionate about technology
                and creating exceptional digital experiences, we'd love to hear from you.
              </p>
              <Button
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Work Culture */}
      <section ref={cultureRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Culture</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                A culture of creativity and continuous learning
              </h2>
              <p className="text-lg text-muted-foreground">
                At Espori, we nurture a culture that values innovation, collaboration, and personal growth. We believe
                that the best work happens when people are empowered, supported, and challenged to reach their full
                potential.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team members are encouraged to experiment, learn from failures, and share their knowledge with
                others. We invest in professional development and create opportunities for everyone to grow their skills
                and expertise.
              </p>
              <Button
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Link href="/contact">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-lg overflow-hidden glass-card">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Culture${i}`}
                    alt={`Espori culture ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animation opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How we work</h2>
            <p className="text-lg text-muted-foreground">
              Our proven process ensures we deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Strategy",
                description:
                  "We start by understanding your business, goals, and challenges to develop a strategic roadmap.",
                color: "cyan",
                delay: 0,
              },
              {
                number: "02",
                title: "Design & Prototyping",
                description: "We create user-centered designs and interactive prototypes to visualize the solution.",
                color: "blue",
                delay: 0.2,
              },
              {
                number: "03",
                title: "Development & Testing",
                description:
                  "Our engineers build the solution using modern technologies, with rigorous testing throughout.",
                color: "purple",
                delay: 0.4,
              },
              {
                number: "04",
                title: "Deployment & Support",
                description: "We launch your solution and provide ongoing support and optimization.",
                color: "cyan",
                delay: 0.6,
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: step.delay }}
              >
                <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className={`text-4xl font-bold text-${step.color}-400 mb-4`}>{step.number}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with innovative digital solutions.
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 neon-border"
            >
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

