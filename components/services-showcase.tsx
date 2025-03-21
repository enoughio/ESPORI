"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Smartphone, Palette, Cloud } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "We build tailor-made software solutions that address your unique business challenges.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Creating seamless digital experiences across all platforms and devices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "AI & Cloud Solutions",
    description: "Harnessing the power of artificial intelligence and cloud computing to build intelligent systems.",
  },
]

export default function ServicesShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-all duration-300"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
          }}
        >
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <service.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      ))}
    </div>
  )
}

