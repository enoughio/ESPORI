"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Share, Bookmark, Heart, MessageSquare } from "lucide-react"

// Blog post data - in a real app, this would come from a CMS
const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is transforming the software development process and what it means for developers and businesses.",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the software development industry, transforming how we build, test, and deploy applications. As we move further into the digital age, AI's role in software development continues to expand, offering new possibilities and challenges for developers and businesses alike.</p>
      
      <h2>AI-Assisted Coding</h2>
      <p>One of the most significant impacts of AI on software development is in the coding process itself. AI-powered code completion tools like GitHub Copilot and TabNine are changing how developers write code, offering intelligent suggestions based on context and patterns. These tools can:</p>
      <ul>
        <li>Suggest entire functions or blocks of code</li>
        <li>Identify potential bugs or inefficiencies</li>
        <li>Reduce repetitive coding tasks</li>
        <li>Help developers learn new languages or frameworks</li>
      </ul>
      
      <p>As these tools continue to evolve, we can expect them to become even more sophisticated, potentially automating significant portions of the coding process while allowing developers to focus on more complex, creative aspects of software development.</p>
      
      <h2>Automated Testing and Quality Assurance</h2>
      <p>AI is also transforming software testing and quality assurance. Traditional testing methods can be time-consuming and may not catch all potential issues. AI-powered testing tools can:</p>
      <ul>
        <li>Automatically generate test cases based on code changes</li>
        <li>Identify areas of code most likely to contain bugs</li>
        <li>Perform visual regression testing</li>
        <li>Analyze user behavior to prioritize testing efforts</li>
      </ul>
      
      <p>These capabilities not only speed up the testing process but also improve the overall quality of software by catching issues that might otherwise go unnoticed.</p>
      
      <h2>Predictive Analytics for Project Management</h2>
      <p>AI is helping project managers make more informed decisions about software development projects. By analyzing data from past projects, AI can:</p>
      <ul>
        <li>Predict potential delays or bottlenecks</li>
        <li>Estimate more accurate timelines and resource requirements</li>
        <li>Identify risk factors that might affect project success</li>
        <li>Suggest optimal team compositions for specific projects</li>
      </ul>
      
      <p>These insights allow for more effective project planning and resource allocation, ultimately leading to more successful project outcomes.</p>
      
      <h2>Low-Code/No-Code Development</h2>
      <p>AI is powering the rise of low-code and no-code development platforms, making software development more accessible to non-developers. These platforms use AI to:</p>
      <ul>
        <li>Translate natural language descriptions into functional code</li>
        <li>Automatically generate user interfaces based on data models</li>
        <li>Suggest workflows and business logic</li>
        <li>Optimize application performance</li>
      </ul>
      
      <p>As these platforms become more powerful, they will enable a broader range of people to create software solutions, potentially democratizing software development.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI offers numerous benefits for software development, it also presents challenges that must be addressed:</p>
      <ul>
        <li><strong>Quality and Reliability:</strong> AI-generated code may not always be optimal or secure, requiring human oversight.</li>
        <li><strong>Skill Evolution:</strong> Developers will need to adapt their skills to work effectively with AI tools.</li>
        <li><strong>Ethical Considerations:</strong> Issues around bias in AI, intellectual property, and job displacement must be carefully considered.</li>
        <li><strong>Security Implications:</strong> AI can help identify security vulnerabilities, but it can also be used to exploit them.</li>
      </ul>
      
      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect AI to become an integral part of the software development lifecycle. Rather than replacing developers, AI will likely augment their capabilities, handling routine tasks while allowing humans to focus on innovation, problem-solving, and the human aspects of software design.</p>
      
      <p>As AI continues to evolve, we may see the emergence of new development paradigms that fundamentally change how software is created. Developers who embrace AI as a collaborative tool rather than viewing it as a threat will be well-positioned to thrive in this new landscape.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI into software development represents a significant shift in how we create and maintain software. By embracing these technologies and addressing the challenges they present, developers and businesses can leverage AI to build better software more efficiently, ultimately delivering greater value to users.</p>
      
      <p>The future of software development is a collaborative partnership between human creativity and AI capabilities, combining the best of both to push the boundaries of what's possible in software.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200&text=AI+in+Software+Development",
    category: ["ai", "development"],
    author: "Alex Morgan",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Alex Morgan is the Founder & CEO of Espori with over 15 years of experience in tech leadership. He specializes in AI and emerging technologies.",
    date: "March 15, 2024",
    readTime: "8 min read",
    relatedPosts: [2, 5, 6],
    tags: ["Artificial Intelligence", "Software Development", "Machine Learning", "Future Tech", "Coding"],
  },
  {
    id: 2,
    slug: "creating-accessible-digital-experiences",
    title: "Creating Accessible Digital Experiences",
    excerpt:
      "Learn the best practices for designing and developing accessible websites and applications that everyone can use.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["design", "development"],
    author: "Sophia Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 5,
    slug: "rise-of-serverless-architecture",
    title: "The Rise of Serverless Architecture",
    excerpt:
      "Explore the benefits and challenges of serverless architecture and how it's changing the way we build applications.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["cloud", "development"],
    author: "David Kim",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 20, 2024",
    readTime: "9 min read",
  },
  {
    id: 6,
    slug: "machine-learning-for-business-intelligence",
    title: "Machine Learning for Business Intelligence",
    excerpt: "How businesses can leverage machine learning to gain insights and make data-driven decisions.",
    image: "/placeholder.svg?height=600&width=800",
    category: ["ai", "business"],
    author: "Marcus Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 15, 2024",
    readTime: "8 min read",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the current post
  const post = blogPosts.find((p) => p.slug === slug)

  // If post not found, return 404
  if (!post) {
    notFound()
  }

  // Find related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id) && p.id !== post.id)
    : []

  const contentRef = useRef<HTMLDivElement>(null)
  const authorRef = useRef<HTMLDivElement>(null)
  const relatedRef = useRef<HTMLDivElement>(null)

  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const authorInView = useInView(authorRef, { once: true, amount: 0.5 })
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.3 })

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
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.category.map((cat) => (
                <Badge key={cat} className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  {cat === "ai"
                    ? "AI & Machine Learning"
                    : cat === "development"
                      ? "Development"
                      : cat === "design"
                        ? "Design"
                        : cat === "cloud"
                          ? "Cloud Computing"
                          : cat === "business"
                            ? "Business"
                            : cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">{post.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border border-primary/20">
                  <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{post.author}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {/* <Calendar className="h-3 w-3 mr-1" /> */}
                    {post.date} · <Clock className="h-3 w-3 mx-1" /> {post.readTime}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden glass-card"
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section ref={contentRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />

              {/* Tags */}
              {post.tags && (
                <div className="mt-12 pt-8 border-t border-border/40">
                  <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-primary/30 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & Engagement */}
              <div className="mt-12 pt-8 border-t border-border/40">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      124
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      36
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div ref={authorRef} className="mt-12 pt-8 border-t border-border/40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={authorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none glass-card">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white text-center md:text-left">{post.author}</h3>
                        <p className="text-muted-foreground mb-4">
                          {post.authorBio || `${post.author} is a contributor at Espori.`}
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/author/${post.author.toLowerCase().replace(/\s+/g, "-")}`}>
                            View All Posts
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Table of Contents */}
                <Card className="border-none glass-card mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Table of Contents</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          AI-Assisted Coding
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Automated Testing and Quality Assurance
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Predictive Analytics for Project Management
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Low-Code/No-Code Development
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Challenges and Considerations
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          The Future Landscape
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Conclusion
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-none glass-card mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Subscribe to Our Newsletter</h3>
                    <p className="text-muted-foreground mb-4">
                      Get the latest insights and tech news delivered to your inbox.
                    </p>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary focus:outline-none"
                      />
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="border-none glass-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        Artificial Intelligence
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        Web Development
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        UX Design
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        Cloud Computing
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        Machine Learning
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary/80">
                        Mobile Apps
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section ref={relatedRef} className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Related Articles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore more articles on similar topics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {relatedPost.category.map((cat) => (
                            <Badge
                              key={cat}
                              className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                            >
                              {cat === "ai"
                                ? "AI"
                                : cat === "development"
                                  ? "Dev"
                                  : cat === "design"
                                    ? "Design"
                                    : cat === "cloud"
                                      ? "Cloud"
                                      : cat === "business"
                                        ? "Business"
                                        : cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">{relatedPost.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2 border border-primary/20">
                            <Image
                              src={relatedPost.authorImage || "/placeholder.svg"}
                              alt={relatedPost.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white">{relatedPost.author}</p>
                            <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                          </div>
                        </div>
                        <Button variant="link" asChild className="group p-0 text-primary hover:text-primary/80">
                          <Link href={`/blog/${relatedPost.slug}`}>
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
          </div>
        </section>
      )}

      {/* CTA */}
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
              Ready to transform your digital presence?
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

