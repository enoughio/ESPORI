"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Palette, Cloud, CheckCircle, ChevronRight } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import FeaturedWork from "@/components/featured-work"
import Testimonials from "@/components/testimonials"
import StatsCounter from "@/components/stats-counter"

export default function Home() {
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                Software Agency in Bhopal, India
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text"
            >
              We create efficient software solutions for businesses and early-stage startups.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We create efficient software for businesses and startups to streamline operations and boost growth. Our
              solutions are designed for scalability and ease of use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:border-primary text-primary hover:text-primary relative overflow-hidden"
              >
                <Link href="/portfolio">
                  <span className="relative z-10">View Our Work</span>
                  <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90 text-primary/70" />
        </div>
      </motion.section>

      {/* Rest of the home page content remains the same */}
      {/* Why Choose Espori? */}
      <section ref={statsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Why Choose Espori?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Building Trust Through Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped businesses of all sizes transform their digital presence
              and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter value={10} suffix="+" label="Years of Collective Experience" delay={0} />
            <StatsCounter value={50} suffix="+" label="Successful Projects" delay={0.2} />
            <StatsCounter value={15} suffix="+" label="Global Countries" delay={0.4} />
            <StatsCounter value={98} suffix="%" label="Client Satisfaction" delay={0.6} />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalability",
                description: "Solutions built for long-term success, designed to grow with your business.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                delay: 0,
              },
              {
                title: "Innovation-Driven",
                description: "Cutting-edge tech stack and methodologies that keep you ahead of the competition.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                delay: 0.2,
              },
              {
                title: "Client-First Approach",
                description: "Tailored solutions that address your specific business challenges and goals.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: item.delay + 0.5 }}
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
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end digital solutions tailored to your specific needs and goals.
            </p>
          </motion.div>

          {/* Updated to a hexagonal grid layout for visual distinction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Custom Software Development",
                description:
                  "We build high-performance software tailored to your business needs, from enterprise applications to specialized tools that streamline your operations.",
                icon: <Code className="h-8 w-8 text-cyan-400" aria-hidden="true" />,
                color: "cyan",
                features: ["Python, Java, Node.js, .NET, C++", "Healthcare, Finance, E-Commerce, Education"],
                link: "/services/custom-software",
                delay: 0.2,
              },
              {
                title: "Web & Mobile App Development",
                description:
                  "Creating intuitive, high-performance apps built for growth, from responsive websites to native mobile applications that engage your users.",
                icon: <Smartphone className="h-8 w-8 text-blue-400" aria-hidden="true" />,
                color: "blue",
                features: [
                  "React.js, Next.js, Flutter, Swift, Kotlin",
                  "Responsive & Scalable Apps for all screen sizes",
                ],
                link: "/services/web-mobile",
                delay: 0.4,
              },
              {
                title: "UI/UX Design",
                description:
                  "Designs that captivate and convert users into customers, combining aesthetics with functionality to create experiences that users love.",
                icon: <Palette className="h-8 w-8 text-purple-400" aria-hidden="true" />,
                color: "purple",
                features: ["Wireframing & Prototyping", "Interactive UI animations & User testing"],
                link: "/services/ui-ux",
                delay: 0.6,
              },
              {
                title: "AI & Cloud Solutions",
                description:
                  "Harness the power of AI & Cloud to unlock business potential with chatbots, predictive analysis, and automation solutions.",
                icon: <Cloud className="h-8 w-8 text-cyan-400" aria-hidden="true" />,
                color: "cyan",
                features: [
                  "AI & Machine Learning: Chatbots, Predictive Analysis",
                  "Cloud Computing: AWS, Google Cloud, Azure",
                ],
                link: "/services/ai-cloud",
                delay: 0.8,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/10 to-${service.color === "blue" ? "purple" : "blue"}-500/10 rounded-xl -z-10 blur-xl transition-opacity duration-300 opacity-50 group-hover:opacity-100`}
                ></div>
                <div
                  className={`glass-card p-8 rounded-xl border border-${service.color}-500/20 hover:border-${service.color}-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/10 h-full`}
                >
                  <div
                    className={`h-16 w-16 rounded-lg bg-${service.color}-500/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          className={`h-5 w-5 text-${service.color}-400 mr-2 flex-shrink-0 mt-0.5`}
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`group bg-gradient-to-r from-${service.color}-500 to-${service.color === "blue" ? "purple" : "blue"}-500 hover:from-${service.color}-600 hover:to-${service.color === "blue" ? "purple" : "blue"}-600 text-white border-0 transition-all duration-300`}
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work and see how we've helped our clients achieve their goals through innovative
              digital solutions.
            </p>
          </div>
          <FeaturedWork />
          <div className="text-center mt-12">
            <Button
              asChild
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
            >
              <Link href="/portfolio">
                View All Projects
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animation opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

