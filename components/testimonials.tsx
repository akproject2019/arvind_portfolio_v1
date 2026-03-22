"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Engineering Manager",
    company: "Meredot Technologies",
    content: "Arvind is an exceptional Android developer with a deep understanding of modern architecture patterns. His ability to deliver high-quality, scalable solutions consistently exceeded our expectations.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Product Lead",
    company: "FinTech Startup",
    content: "Working with Arvind was a game-changer for our mobile banking app. His expertise in security and performance optimization helped us achieve a 4.8 star rating on Play Store.",
    avatar: "PS",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "HealthTech Solutions",
    content: "Arvind's technical leadership and mentoring skills are outstanding. He not only delivered exceptional code but also elevated the entire team's capabilities.",
    avatar: "MC",
  },
  {
    name: "Anita Desai",
    role: "Senior Product Manager",
    company: "E-commerce Platform",
    content: "The shopping app Arvind built for us handles millions of users seamlessly. His attention to detail and user experience focus made all the difference.",
    avatar: "AD",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-accent font-medium mb-2"
            >
              What People Say
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Client <span className="gradient-text">Testimonials</span>
            </motion.h2>
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <CardContent className="p-8 lg:p-12">
                    <Quote className="h-12 w-12 text-primary/30 mb-6" />
                    
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                      &ldquo;{testimonials[current].content}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonials[current].avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials[current].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[current].role} at {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrent(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
