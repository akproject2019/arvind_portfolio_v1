"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = ["All", "IoT", "E-commerce", "Utility", "Entertainment"]

const projects = [
  {
    title: "Smart Key Cabinet",
    description: "IoT-enabled key management system with real-time tracking and access control.",
    category: "IoT",
    tech: ["Kotlin", "BLE", "MVVM", "Room"],
    image: "/projects/iot-cabinet.jpg",
  },
  {
    title: "UACHub Door Access",
    description: "Advanced door access control system with biometric authentication.",
    category: "IoT",
    tech: ["Kotlin", "Socket.io", "Clean Architecture"],
    image: "/projects/door-access.jpg",
  },
  {
    title: "Corium IoT Apps",
    description: "Suite of IoT integration applications for smart device management.",
    category: "IoT",
    tech: ["Kotlin", "MQTT", "Jetpack", "Coroutines"],
    image: "/projects/corium.jpg",
  },
  {
    title: "Results Wellness",
    description: "Comprehensive fitness tracking app with workout plans and progress monitoring.",
    category: "Utility",
    tech: ["Kotlin", "Firebase", "MVVM", "Charts"],
    image: "/projects/fitness.jpg",
  },
  {
    title: "Super Face",
    description: "Facial recognition attendance system for enterprise workforce management.",
    category: "Utility",
    tech: ["Kotlin", "ML Kit", "Room", "Retrofit"],
    image: "/projects/attendance.jpg",
  },
  {
    title: "Bookie",
    description: "Fantasy sports platform with real-time updates and competitive leagues.",
    category: "Entertainment",
    tech: ["Kotlin", "Socket.io", "In-App Billing"],
    image: "/projects/fantasy.jpg",
  },
  {
    title: "Tonk Offline",
    description: "Classic card game with offline multiplayer and AI opponents.",
    category: "Entertainment",
    tech: ["Java", "Custom Views", "SQLite"],
    image: "/projects/card-game.jpg",
  },
  {
    title: "New Feelings Bakery",
    description: "E-commerce platform for bakery with online ordering and delivery tracking.",
    category: "E-commerce",
    tech: ["Kotlin", "Firebase", "Google Pay"],
    image: "/projects/bakery.jpg",
  },
  {
    title: "Jain Super Mart",
    description: "Grocery delivery app with inventory management and payment integration.",
    category: "E-commerce",
    tech: ["Kotlin", "Retrofit", "MVVM", "Maps"],
    image: "/projects/grocery.jpg",
  },
  {
    title: "Navsari Market App",
    description: "Local marketplace connecting vendors with customers in Navsari region.",
    category: "E-commerce",
    tech: ["Kotlin", "Firebase", "Notifications"],
    image: "/projects/market.jpg",
  },
  {
    title: "Hindi Stories Offline",
    description: "Offline collection of Hindi stories with text-to-speech functionality.",
    category: "Entertainment",
    tech: ["Java", "TTS", "SQLite", "Ads"],
    image: "/projects/stories-hindi.jpg",
  },
  {
    title: "English Audio Stories",
    description: "Audio story platform with streaming and offline download capabilities.",
    category: "Entertainment",
    tech: ["Kotlin", "ExoPlayer", "Room"],
    image: "/projects/audio-stories.jpg",
  },
  {
    title: "Status & Quotes App",
    description: "Social sharing app for status updates and inspirational quotes.",
    category: "Utility",
    tech: ["Kotlin", "Firebase", "Share API"],
    image: "/projects/quotes.jpg",
  },
  {
    title: "Weight Loss Yoga",
    description: "Yoga and fitness app with guided sessions and progress tracking.",
    category: "Utility",
    tech: ["Kotlin", "Video Player", "Notifications"],
    image: "/projects/yoga.jpg",
  },
]

function ProjectCard({ project, index, isInView, onClick }: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
      layout
    >
      <Card 
        className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm"
            >
              <ExternalLink className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm"
            >
              <Github className="h-5 w-5 text-primary-foreground" />
            </motion.div>
          </div>
        </div>

        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent">
              {project.category}
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass border border-border/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 bg-gradient-to-br from-primary/30 to-accent/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary/20">{project.title.charAt(0)}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/20 text-accent">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-3">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          <h3 className="font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 group">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Live Demo
            </Button>
            <Button variant="outline" className="flex-1 group">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View Code
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-accent font-medium mb-2"
            >
              My Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category 
                    ? "shadow-lg shadow-primary/25" 
                    : "hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInView={isInView}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
