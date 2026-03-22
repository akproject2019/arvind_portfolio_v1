"use client"

import { motion } from "framer-motion"
import { Heart, Linkedin, Mail, Github, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/arvind-koli-9546a5a8/", 
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:arvindkoli45@gmail.com", 
    label: "Email" 
  },
  { 
    icon: Github, 
    href: "#", 
    label: "GitHub" 
  },
]

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="relative overflow-hidden border-t border-border/50 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="inline-block text-2xl font-bold gradient-text mb-4">
                Arvind Koli
              </a>
              <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
                Senior Android Developer passionate about building scalable, high-performance 
                mobile applications. Based in Navsari, Gujarat, India.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a 
                    href="mailto:arvindkoli45@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    arvindkoli45@gmail.com
                  </a>
                </li>
                <li>Navsari, Gujarat</li>
                <li>India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              &copy; {new Date().getFullYear()} Arvind Koli. Built with 
              <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
              using Next.js
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? "auto" : "none"
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="icon"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full shadow-lg shadow-primary/25 hover:scale-110 transition-transform"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </Button>
      </motion.div>
    </>
  )
}
