"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Espori transformed our business with their innovative software solutions. Their team's expertise and dedication to our project exceeded our expectations. The AI-powered features they implemented have significantly improved our customer engagement.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Global",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    quote:
      "Working with Espori was a game-changer for our company. Their attention to detail and commitment to quality resulted in a product that our customers love. The mobile app they developed has seen a 200% increase in user engagement.",
    author: "Michael Chen",
    position: "CEO, Innovate Partners",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    quote:
      "The team at Espori delivered a solution that not only met our requirements but also provided additional value we hadn't even considered. Their UI/UX expertise transformed our outdated platform into a modern, intuitive experience.",
    author: "Emily Rodriguez",
    position: "Product Director, NextGen Solutions",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none glass-card">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-primary/30 mb-4" />
                    <p className="text-lg mb-6 italic text-white/90">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-primary/20">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.author}</h4>
                        <p className="text-sm text-primary/80">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

