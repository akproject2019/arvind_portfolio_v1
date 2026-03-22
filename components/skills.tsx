"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Smartphone, 
  Database, 
  Cloud, 
  Layers, 
  Zap, 
  Code2,
  Cpu,
  Globe,
  Flame,
  Box,
  Wifi,
  CreditCard
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 90 },
      { name: "XML", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "Android SDK", level: 95 },
      { name: "Jetpack Compose", level: 85 },
      { name: "Retrofit", level: 90 },
      { name: "Dagger Hilt", level: 85 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "Room DB", level: 90 },
      { name: "SQLite", level: 85 },
      { name: "SharedPrefs", level: 95 },
      { name: "DataStore", level: 80 },
    ],
  },
  {
    title: "Firebase Services",
    icon: Flame,
    skills: [
      { name: "FCM", level: 90 },
      { name: "Crashlytics", level: 90 },
      { name: "Analytics", level: 85 },
      { name: "Remote Config", level: 80 },
    ],
  },
  {
    title: "Architecture",
    icon: Box,
    skills: [
      { name: "MVVM", level: 95 },
      { name: "Clean Architecture", level: 90 },
      { name: "SOLID Principles", level: 90 },
      { name: "Repository Pattern", level: 90 },
    ],
  },
  {
    title: "Integrations",
    icon: Wifi,
    skills: [
      { name: "Google Ads", level: 85 },
      { name: "In-App Billing", level: 85 },
      { name: "Socket.io", level: 80 },
      { name: "Chromecast", level: 75 },
    ],
  },
]

const additionalSkills = [
  { name: "Coroutines", icon: Zap },
  { name: "Flow", icon: Zap },
  { name: "Volley", icon: Globe },
  { name: "Fast Networking", icon: Globe },
  { name: "Vimeo Player", icon: Smartphone },
  { name: "Google Pay UK", icon: CreditCard },
  { name: "IoT Integration", icon: Cpu },
  { name: "REST APIs", icon: Cloud },
]

function SkillCard({ category, index, isInView }: { category: typeof skillCategories[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
    >
      <Card 
        className="glass border-border/50 h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <category.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-lg">{category.title}</h3>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView && isHovered ? { width: `${skill.level}%` } : isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />

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
              What I Know
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Also Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 hover:border-primary/50 transition-colors cursor-default"
                >
                  <skill.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
