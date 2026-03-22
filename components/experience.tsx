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
    summary: "Led Android development initiatives, collaborating with cross-functional teams to deliver high-quality mobile applications using modern architecture patterns and best practices.",
    description: [
      "Collaborated with product, design, and QA teams to deliver high-quality features on time",
      "Led code reviews and mentored junior developers on Android best practices",
      "Built scalable applications using Kotlin, Jetpack libraries, and Coroutines",
      "Implemented MVVM architecture with Clean Code principles for maintainable codebase",
      "Optimized app performance and reduced crash rates through proactive monitoring",
    ],
  },
  {
    company: "YesQuest",
    role: "Senior Android Developer",
    location: "Remote",
    duration: "Oct 2023 - Mar 2024",
    summary: "Specialized in hardware-integrated Android applications for IoT solutions, building real-time communication systems and optimizing performance for resource-constrained devices.",
    description: [
      "Developed hardware-integrated Android applications for IoT solutions",
      "Built real-time communication systems using Socket.io for instant data sync",
      "Optimized app performance for resource-constrained embedded devices",
      "Implemented secure data transmission protocols for hardware communication",
      "Worked on scalable solutions handling multiple device connections",
    ],
  },
  {
    company: "Artoon Solutions Pvt Ltd",
    role: "Android Developer → Senior Android Developer",
    location: "Ahmedabad, Gujarat",
    duration: "Aug 2018 - Oct 2023",
    summary: "Grew from Junior to Senior Developer over 5 years, leading end-to-end Android project development, mentoring team members, and delivering multiple successful client projects across various domains.",
    description: [
      "Progressed from Junior to Senior Developer over 5+ years of dedicated growth",
      "Led end-to-end Android project development from concept to Play Store deployment",
      "Mentored team members and conducted technical interviews for new hires",
      "Delivered multiple client projects across e-commerce, fitness, gaming, and utility domains",
      "Implemented complex features including payment integrations, real-time updates, and offline sync",
      "Established coding standards and best practices for the Android team",
    ],
  },
  {
    company: "Webglame Infotech LLP",
    role: "Android Developer Intern → Android Developer",
    location: "Navsari, Gujarat",
    duration: "Jun 2017 - Aug 2018",
    summary: "Started professional journey as an intern, building foundational skills in Android development with Java and transitioning to a full-time developer role.",
    description: [
      "Started as an intern and successfully transitioned to full-time Android Developer",
      "Built foundational skills in Android development with Java and Android SDK",
      "Developed multiple small-scale Android applications for local businesses",
      "Learned industry best practices in mobile app development lifecycle",
      "Gained hands-on experience with REST APIs, SQLite, and UI/UX implementation",
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
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-border md:-translate-x-px rounded-full">
        {/* Larger animated dot with glow */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
          className="absolute top-8 -left-3 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg shadow-primary/40 animate-pulse-ring"
        >
          <div className="absolute inset-1 rounded-full bg-background/30" />
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        </motion.div>
      </div>

      {/* Card - Increased width */}
      <div className={`md:w-[calc(50%-1rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"} pl-10 md:pl-0`}>
        <Card 
          className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] hover:-translate-y-2 group cursor-pointer card-shine relative"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-accent font-semibold">{experience.role}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 hover:border-primary/30 transition-colors">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{experience.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 hover:border-accent/30 transition-colors">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="font-medium">{experience.duration}</span>
              </div>
            </div>

            {/* Summary - Always visible */}
            <p className="text-muted-foreground leading-relaxed">
              {experience.summary}
            </p>

            {/* Expanded details */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pt-5 mt-5 border-t border-border/50">
                {experience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Click hint */}
            <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground/60">
              <span>Click to {isExpanded ? "collapse" : "expand"} details</span>
            </div>
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
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Over 6+ years of progressive experience in Android development, growing from intern to senior developer
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto space-y-10">
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
