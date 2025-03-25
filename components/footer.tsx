import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Quote } from "lucide-react"

export default function Footer() {
  // Store email in a variable for easy changes later
  const CONTACT_EMAIL = "aniketj.developer@gmail.com"

  return (
    <footer className="bg-background/30 backdrop-blur-lg border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Espori
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Espori is where technology meets innovation. From AI-driven applications to stunning UI/UX design, we
              create solutions that accelerate your success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#custom-software"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#web-mobile"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web & Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#ai-cloud" className="text-muted-foreground hover:text-primary transition-colors">
                  AI & Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Inspirational Quote</h3>
            <div className="glass-card p-4 rounded-lg border border-primary/20">
              <Quote className="h-8 w-8 text-primary/60 mb-2" />
              <p className="text-muted-foreground italic mb-2">"The best way to predict the future is to create it."</p>
              <p className="text-sm text-primary/80 text-right">— Peter Drucker</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">For inquiries:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Espori. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

