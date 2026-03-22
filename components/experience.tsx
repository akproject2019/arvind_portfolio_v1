"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Grow Solutions",
    role: "Senior Android Developer",
    location: "Surat, Gujarat",
    duration: "May 2024 - May 2025",
    description: [
      "Collaborated with product, design, and QA teams to deliver high-quality features",
      "Led code reviews and mentored junior developers on best practices",
      "Built scalable applications using Kotlin, Jetpack libraries, and Coroutines",
      "Implemented MVVM architecture with Clean Code principles",
    ],
  },
  {
    company: "YesQuest",
    role: "Senior Android Developer",
    location: "Remote",
    duration: "Oct 2023 - Mar 2024",
    description: [
      "Developed hardware-integrated Android applications for IoT solutions",
      "Built real-time communication systems using Socket.io",
      "Optimized app performance for resource-constrained devices",
      "Implemented secure data transmission protocols",
    ],
  },
  {
    company: "Artoon Solutions Pvt Ltd",
    role: "Android Developer → Senior Android Developer",
    location: "Ahmedabad, Gujarat",
    duration: "Aug 2018 - Oct 2023",
    description: [
      "Progressed from Junior to Senior Developer over 5 years",
      "Led end-to-end Android project development and deployment",
      "Mentored team members and conducted technical interviews",
      "Delivered multiple client projects across various domains",
    ],
  },
  {
    company: "Webglame Infotech LLP",
    role: "Android Developer Intern → Android Developer",
    location: "Navsari, Gujarat",
    duration: "Jun 2017 - Aug 2018",
    description: [
      "Started as an intern and transitioned to full-time developer",
      "Built foundational skills in Android development with Java",
      "Developed multiple small-scale Android applications",
      "Learned best practices in mobile app development",
    ],
  },
]

function ExperienceCard({ experience, index, isInView }: { experience: typeof experiences[0]; index: number; isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
        <div className="absolute top-8 -left-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
      </div>

      {/* Card */}
      <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} pl-8 md:pl-0`}>
        <Card 
          className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-accent font-medium text-sm">{experience.role}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground"
              >
                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {experience.duration}
              </div>
            </div>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 pt-4 border-t border-border">
                {experience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-accent font-medium mb-2"
            >
              My Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
