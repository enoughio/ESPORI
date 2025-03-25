"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PricingCards() {
  const plans = [
    {
      name: "Basic Website",
      price: "$200",
      description: "Perfect for small businesses just getting started online",
      features: ["Responsive design", "Up to 5 pages", "Contact form", "Basic SEO setup", "Mobile-friendly"],
      cta: "Get Started",
      popular: false,
      delay: 0,
    },
    {
      name: "Professional Website",
      price: "$500",
      description: "Ideal for growing businesses that need more features",
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "Content Management System",
        "Blog integration",
        "Social media integration",
        "Advanced SEO optimization",
        "Google Analytics setup",
      ],
      cta: "Choose Professional",
      popular: true,
      delay: 0.1,
    },
    {
      name: "E-commerce Website",
      price: "$1,200",
      description: "Complete solution for businesses selling products online",
      features: [
        "Everything in Professional",
        "E-commerce functionality",
        "Product catalog (up to 50 products)",
        "Secure payment gateway",
        "Inventory management",
        "Order tracking",
        "Customer accounts",
        "Email marketing integration",
      ],
      cta: "Choose E-commerce",
      popular: false,
      delay: 0.2,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: plan.delay }}
          whileHover={{ y: -10 }}
        >
          <Card
            className={`h-full flex flex-col relative overflow-hidden ${
              plan.popular ? "border-primary/50 shadow-lg shadow-primary/20" : "border-border/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

