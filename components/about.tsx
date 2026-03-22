"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Layers, Cpu, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Award,
    title: "6+ Years",
    description: "Professional Experience",
  },
  {
    icon: Code2,
    title: "Kotlin & Java",
    description: "Expert Level",
  },
  {
    icon: Layers,
    title: "MVVM",
    description: "Clean Architecture",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Optimization Focus",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
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
                    Senior Android Developer with <span className="text-primary font-semibold">6+ years of experience</span> building 
                    scalable, user-centric mobile applications. I specialize in creating 
                    high-performance apps that deliver exceptional user experiences.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    My expertise spans across <span className="text-accent font-semibold">Kotlin, Java, Jetpack libraries</span>, 
                    and modern architectural patterns. I&apos;m passionate about writing clean, 
                    maintainable code and staying current with the latest Android developments.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Beyond coding, I enjoy mentoring fellow developers, conducting code reviews, 
                    and contributing to the Android community. I believe in continuous learning 
                    and pushing the boundaries of what&apos;s possible in mobile development.
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
                  <Card className="glass border-border/50 p-6 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-primary/15 group cursor-default">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-bold text-xl mb-1 gradient-text">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
