"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export default function StatsCounter({ value, suffix = "", label, delay = 0 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000 // 2 seconds
    const step = Math.floor(duration / value)

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += 1
        setCount(start)

        if (start >= value) {
          clearInterval(interval)
        }
      }, step)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
        <CardContent className="p-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
            {count}
            {suffix}
          </h3>
          <p className="text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

