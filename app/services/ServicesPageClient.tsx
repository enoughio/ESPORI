"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Palette, Cloud } from "lucide-react"
import ContactBanner from "@/components/contact-banner"
import { motion } from "framer-motion"
import PricingCards from "@/components/pricing-cards"

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>

        {/* Add animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Comprehensive digital solutions for your business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer end-to-end services to help you transform your ideas into powerful digital experiences.
            </p>

            {/* Add floating icons */}
            <div className="relative h-20 mx-auto mb-8">
              {[
                { icon: <Code className="h-8 w-8 text-cyan-400" />, left: "10%", delay: 0 },
                { icon: <Smartphone className="h-8 w-8 text-blue-400" />, left: "30%", delay: 0.5 },
                { icon: <Palette className="h-8 w-8 text-purple-400" />, left: "50%", delay: 1 },
                { icon: <Cloud className="h-8 w-8 text-cyan-400" />, left: "70%", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 glass-card p-3 rounded-full"
                  style={{ left: item.left }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 3,
                    delay: item.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Custom Software Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Custom Software Development</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We build tailor-made software solutions that address your unique business challenges, from enterprise
                  applications to specialized tools that streamline your operations.
                </p>
                <Button asChild className="group">
                  <Link href="/services/custom-software">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Web & Mobile App Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Web & Mobile App Development</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Creating seamless digital experiences across all platforms and devices, from responsive websites to
                  native mobile applications that engage your users.
                </p>
                <Button asChild className="group">
                  <Link href="/services/web-mobile">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="UI/UX Design" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="h-12 w-12 rounded-lg bg-teal-600/20 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold">UI/UX Design</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Beautiful interfaces that deliver exceptional user experiences, combining aesthetics with
                  functionality to create designs that users love.
                </p>
                <Button asChild className="group">
                  <Link href="/services/ui-ux">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI & Cloud Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="h-12 w-12 rounded-lg bg-amber-600/20 flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold">AI & Cloud Solutions</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Harnessing the power of artificial intelligence and cloud computing to build intelligent systems that
                  transform your business.
                </p>
                <Button asChild className="group">
                  <Link href="/services/ai-cloud">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Website Design Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect website package for your business needs and budget.
            </p>
          </div>

          <PricingCards />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What sets us apart</h2>
            <p className="text-lg text-muted-foreground">
              We combine technical expertise with strategic thinking to deliver solutions that drive real business
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description:
                  "Our team of experienced engineers and designers use the latest technologies and best practices to build robust, scalable solutions.",
              },
              {
                title: "Strategic Approach",
                description:
                  "We don't just build what you ask for—we help you define what you need through strategic consulting and planning.",
              },
              {
                title: "User-Centered Design",
                description:
                  "We put users at the center of everything we create, ensuring intuitive, engaging experiences that drive adoption.",
              },
              {
                title: "Agile Methodology",
                description:
                  "Our iterative approach allows for flexibility, transparency, and continuous improvement throughout the development process.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We build lasting relationships with our clients, providing ongoing support and evolution of your digital solutions.",
              },
              {
                title: "Measurable Results",
                description:
                  "We focus on delivering solutions that achieve tangible business outcomes and ROI for your organization.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our technology stack</h2>
            <p className="text-lg text-muted-foreground">
              We use the latest technologies and frameworks to build modern, scalable, and maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "TypeScript",
              "AWS",
              "Azure",
              "Google Cloud",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "Docker",
              "Kubernetes",
              "TensorFlow",
              "PyTorch",
              "Flutter",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">A proven approach to delivering successful projects</h2>
              <p className="text-lg text-muted-foreground">
                Our structured yet flexible process ensures we deliver high-quality solutions that meet your business
                objectives while adapting to your specific needs.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Discovery & Strategy</h3>
                    <p className="text-muted-foreground">
                      Understanding your business, goals, and challenges to develop a strategic roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Design & Prototyping</h3>
                    <p className="text-muted-foreground">
                      Creating user-centered designs and interactive prototypes to visualize the solution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Development & Testing</h3>
                    <p className="text-muted-foreground">
                      Building the solution using modern technologies, with rigorous testing throughout.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Deployment & Support</h3>
                    <p className="text-muted-foreground">
                      Launching your solution and providing ongoing support and optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </>
  )
}

