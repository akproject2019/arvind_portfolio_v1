"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Code2, Layers, Cpu, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Award,
    title: "6+ Years",
    description: "Enterprise Experience",
    highlight: "Senior Level",
  },
  {
    icon: Code2,
    title: "Kotlin & Java",
    description: "Expert Proficiency",
    highlight: "100+ Apps",
  },
  {
    icon: Layers,
    title: "MVVM/MVI",
    description: "Clean Architecture",
    highlight: "Best Practices",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "40% Crash Reduction",
    highlight: "Optimization",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLanding(false), 800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <motion.section
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {showLanding && (
        <motion.div
          initial={{ opacity: 1, scale: 1.03 }}
          animate={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="absolute inset-0 z-20 bg-background/90 backdrop-blur-sm pointer-events-none"
        />
      )}
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-accent font-medium mb-2"
            >
              Get To Know
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="glass border-border/50 p-6 lg:p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
                <CardContent className="p-0">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    A results-driven <span className="text-primary font-semibold">Senior Android Developer</span> with over{" "}
                    <span className="text-primary font-semibold">6+ years of proven expertise</span> in architecting and deploying 
                    enterprise-scale mobile solutions. I transform complex business requirements into intuitive, 
                    high-performance applications that serve millions of users.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Mastery in <span className="text-accent font-semibold">Kotlin, Jetpack Compose, Clean Architecture</span>, 
                    and cutting-edge Android technologies. Committed to engineering excellence through SOLID principles, 
                    comprehensive testing, and performance optimization that reduces crash rates by up to 40%.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As a technical leader, I drive team success through strategic code reviews, mentorship programs, 
                    and establishing best practices. Passionate about building scalable systems that not only meet 
                    today&apos;s demands but anticipate tomorrow&apos;s challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass border-border/50 p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 group cursor-default card-shine">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <item.icon className="h-7 w-7 text-primary transition-transform duration-300" />
                      </div>
                      <h3 className="font-bold text-xl mb-1 gradient-text">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <span className="inline-block text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">
                        {item.highlight}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
