"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"

const categories = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI & Machine Learning" },
  { id: "development", name: "Development" },
  { id: "design", name: "Design" },
  { id: "cloud", name: "Cloud Computing" },
  { id: "business", name: "Business" },
]

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is transforming the software development process and what it means for developers and businesses.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["ai", "development"],
    author: "Alex Morgan",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 15, 2024",
    readTime: "8 min read",
    featured: true,
    slug: "future-of-ai-in-software-development",
  },
  {
    id: 2,
    title: "Creating Accessible Digital Experiences",
    excerpt:
      "Learn the best practices for designing and developing accessible websites and applications that everyone can use.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["design", "development"],
    author: "Sophia Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 10, 2024",
    readTime: "6 min read",
    featured: false,
    slug: "creating-accessible-digital-experiences",
  },
  {
    id: 3,
    title: "Cloud Architecture Best Practices",
    excerpt:
      "Discover the key principles and best practices for designing robust, scalable, and secure cloud architectures.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["cloud", "development"],
    author: "Jamie Chen",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 5, 2024",
    readTime: "10 min read",
    featured: false,
    slug: "cloud-architecture-best-practices",
  },
  {
    id: 4,
    title: "Design Systems: Building for Scale",
    excerpt: "How to create and maintain design systems that enable teams to build consistent and scalable products.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["design", "business"],
    author: "Olivia Garcia",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2024",
    readTime: "7 min read",
    featured: false,
    slug: "design-systems-building-for-scale",
  },
  {
    id: 5,
    title: "The Rise of Serverless Architecture",
    excerpt:
      "Explore the benefits and challenges of serverless architecture and how it's changing the way we build applications.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["cloud", "development"],
    author: "David Kim",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 20, 2024",
    readTime: "9 min read",
    featured: false,
    slug: "rise-of-serverless-architecture",
  },
  {
    id: 6,
    title: "Machine Learning for Business Intelligence",
    excerpt: "How businesses can leverage machine learning to gain insights and make data-driven decisions.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["ai", "business"],
    author: "Marcus Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 15, 2024",
    readTime: "8 min read",
    featured: false,
    slug: "machine-learning-for-business-intelligence",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredPosts = blogPosts.filter(
    (post) =>
      (activeCategory === "all" || post.category.includes(activeCategory)) &&
      (searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const featuredPost = blogPosts.find((post) => post.featured)

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
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
              Latest Insights & Tech Trends
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest in technology, design, and business insights from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.category.map((cat) => (
                        <Badge key={cat} className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {categories.find((c) => c.id === cat)?.name}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center mb-6">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border border-primary/20">
                        <Image
                          src={featuredPost.authorImage || "/placeholder.svg"}
                          alt={featuredPost.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{featuredPost.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {featuredPost.date} · {featuredPost.readTime}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 w-fit"
                    >
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  size="sm"
                  className={
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                      : "border-primary/50 hover:border-primary text-primary hover:text-primary"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={ref} className="py-8 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {post.category.map((cat) => (
                            <Badge
                              key={cat}
                              className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                            >
                              {categories.find((c) => c.id === cat)?.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2 border border-primary/20">
                            <Image
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80">
                          <Link href={`/blog/${post.slug}`}>
                            Read
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found. Please try another search or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">Stay Updated on Tech Trends!</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tech news, and updates from our team.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

