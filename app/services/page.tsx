import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Palette, Cloud } from "lucide-react"
import ContactBanner from "@/components/contact-banner"

export const metadata = {
  title: "Services | Espori Software Agency",
  description:
    "Explore our comprehensive range of software development services including custom software, web & mobile apps, UI/UX design, and AI & cloud solutions.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive digital solutions for your business</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer end-to-end services to help you transform your ideas into powerful digital experiences.
            </p>
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

