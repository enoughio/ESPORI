"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Jamie Chen",
    position: "CTO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sophia Rodriguez",
    position: "Design Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    position: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TeamIntro() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {team.map((member, index) => (
        <div
          key={member.name}
          className="group relative overflow-hidden rounded-lg"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
          }}
        >
          <div className="aspect-square relative">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-white/80">{member.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

