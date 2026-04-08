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
    problem: "Organizations struggled with manual key tracking leading to security risks and lost keys.",
    solution: "Built IoT-enabled key management with BLE integration and real-time tracking dashboard.",
    impact: "Reduced key loss incidents by 90% and improved audit compliance.",
    category: "IoT",
    tech: ["Kotlin", "BLE", "MVVM", "Room"],
    image: "/projects/key-cabinet.png",
  },
  {
    title: "UACHub Door Access",
    problem: "Legacy access systems lacked modern authentication and were prone to breaches.",
    solution: "Developed biometric door access with Socket.io for instant sync across devices.",
    impact: "Enhanced security for 50+ enterprise locations with 99.9% uptime.",
    category: "IoT",
    tech: ["Kotlin", "Socket.io", "Clean Architecture"],
    image: "/projects/door-access.jpg",
  },
  {
    title: "Corium IoT Apps",
    problem: "Managing multiple IoT devices required switching between different apps.",
    solution: "Created unified suite for smart device management with MQTT protocol.",
    impact: "Streamlined operations for 10,000+ connected devices.",
    category: "IoT",
    tech: ["Kotlin", "MQTT", "Jetpack", "Coroutines"],
    image: "/projects/corium.jpg",
  },
  {
    title: "Results Wellness",
    problem: "Users abandoned fitness apps due to complex interfaces and lack of motivation.",
    solution: "Designed intuitive workout tracker with gamification and progress visualization.",
    impact: "Achieved 4.5 star rating with 60% user retention improvement.",
    category: "Utility",
    tech: ["Kotlin", "Firebase", "MVVM", "Charts"],
    image: "/projects/fitness.jpg",
  },
  {
    title: "Super Face",
    problem: "Manual attendance systems were time-consuming and prone to buddy punching.",
    solution: "Implemented ML Kit facial recognition with offline capability and sync.",
    impact: "Eliminated attendance fraud, saving 2+ hours daily for HR teams.",
    category: "Utility",
    tech: ["Kotlin", "ML Kit", "Room", "Retrofit"],
    image: "/projects/attendance.jpg",
  },
  {
    title: "Bookie",
    problem: "Fantasy sports apps suffered from laggy updates and poor real-time experience.",
    solution: "Built real-time platform with Socket.io and optimized data streaming.",
    impact: "Handled 100K+ concurrent users during peak sporting events.",
    category: "Entertainment",
    tech: ["Kotlin", "Socket.io", "In-App Billing"],
    image: "/projects/fantasy.jpg",
  },
  {
    title: "Tonk Offline",
    problem: "Players wanted to enjoy card games without internet dependency.",
    solution: "Developed AI-powered opponents with custom view animations for smooth gameplay.",
    impact: "500K+ downloads with 4.2 star rating on Play Store.",
    category: "Entertainment",
    tech: ["Java", "Custom Views", "SQLite"],
    image: "/projects/card-game.jpg",
  },
  {
    title: "New Feelings Bakery",
    problem: "Local bakery lost sales due to phone-only ordering system.",
    solution: "Built e-commerce app with Google Pay integration and delivery tracking.",
    impact: "Increased online orders by 300% within first quarter.",
    category: "E-commerce",
    tech: ["Kotlin", "Firebase", "Google Pay"],
    image: "/projects/bakery.jpg",
  },
  {
    title: "Jain Super Mart",
    problem: "Grocery delivery lacked real-time inventory visibility causing order cancellations.",
    solution: "Created app with live inventory sync and intelligent routing.",
    impact: "Reduced order cancellations by 75% and delivery time by 30%.",
    category: "E-commerce",
    tech: ["Kotlin", "Retrofit", "MVVM", "Maps"],
    image: "/projects/grocery.jpg",
  },
  {
    title: "Navsari Market App",
    problem: "Local vendors had no digital presence to reach customers beyond foot traffic.",
    solution: "Built marketplace platform connecting vendors with push notification alerts.",
    impact: "Onboarded 200+ vendors serving 15K+ active customers.",
    category: "E-commerce",
    tech: ["Kotlin", "Firebase", "Notifications"],
    image: "/projects/market.jpg",
  },
  {
    title: "Hindi Stories Offline",
    problem: "Users in low-connectivity areas couldn't access Hindi story content.",
    solution: "Developed offline-first app with TTS support and smart caching.",
    impact: "1M+ downloads with strong engagement in rural markets.",
    category: "Entertainment",
    tech: ["Java", "TTS", "SQLite", "Ads"],
    image: "/projects/stories-hindi.jpg",
  },
  {
    title: "English Audio Stories",
    problem: "Audio story apps had poor streaming performance and no offline mode.",
    solution: "Built ExoPlayer-powered streaming with progressive download support.",
    impact: "Achieved 98% playback success rate with offline listening feature.",
    category: "Entertainment",
    tech: ["Kotlin", "ExoPlayer", "Room"],
    image: "/projects/audio-stories.jpg",
  },
  {
    title: "Status & Quotes App",
    problem: "Users wanted easy way to share curated content across social platforms.",
    solution: "Created content curation app with one-tap multi-platform sharing.",
    impact: "Generated 10M+ social shares with viral growth loop.",
    category: "Utility",
    tech: ["Kotlin", "Firebase", "Share API"],
    image: "/projects/quotes.jpg",
  },
  {
    title: "Weight Loss Yoga",
    problem: "Yoga beginners struggled to follow complex routines without guidance.",
    solution: "Built video-guided sessions with progress tracking and reminders.",
    impact: "Helped 50K+ users achieve fitness goals with 85% completion rate.",
    category: "Utility",
    tech: ["Kotlin", "Video Player", "Notifications"],
    image: "/projects/yoga.jpg",
  },
]

// ===== FIXED: Device Mockup Component =====
function DeviceMockup({ title }: { title: string }) {
  return (
    <div className="relative w-24 h-44 mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-black rounded-[16px] border-[6px] border-black shadow-2xl overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20" />

        {/* Screen Content */}
        <div className="w-full flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-2 pt-5 pb-3">
          {/* App Icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2 shadow-lg flex-shrink-0">
            <span className="text-lg font-bold text-white">{title.charAt(0)}</span>
          </div>

          {/* App Name */}
          <div className="text-center min-w-0 flex-shrink-0 mb-2">
            <p className="text-white text-[9px] font-semibold truncate max-w-[80px]">{title.split(" ").slice(0, 2).join(" ")}</p>
            <p className="text-primary text-[7px] mt-0.5">App</p>
          </div>

          {/* Dummy UI Elements */}
          <div className="w-full space-y-1.5 flex-shrink-0">
            <div className="h-1.5 bg-primary/30 rounded-full mx-1"></div>
            <div className="h-1.5 bg-primary/20 rounded-full mx-1 w-4/5"></div>
            <div className="h-1.5 bg-primary/30 rounded-full mx-1 w-3/5"></div>
          </div>
        </div>

        {/* Speaker */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-black rounded-full z-30" />

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-[16px] opacity-20 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
// ===== END: Device Mockup Component =====

function ProjectCard({ project, index, isInView, onClick }: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
      layout
    >
      <Card
        className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.04] hover:shadow-2xl hover:shadow-primary/25 group cursor-pointer h-full card-shine !pt-0"
        onClick={onClick}
      >
        {/* Device Mockup Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center"
          >
            <DeviceMockup title={project.title} />
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <motion.div
              initial={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm hover:bg-background/30 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm hover:bg-background/30 transition-colors"
            >
              <Github className="h-5 w-5 text-primary-foreground" />
            </motion.div>
          </div>
        </div>

        <CardContent className="p-3 sm:p-4 md:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-xs sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30">
              {project.category}
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
          </div>
          <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 line-clamp-2">
            <span className="font-medium text-foreground/80">Impact:</span> {project.impact}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors">
                {t}
              </span>
            ))}
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
        <div className="relative bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <DeviceMockup title={project.title} />
          </motion.div>
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
          <span className="text-sm font-semibold px-3 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4">{project.title}</h2>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h4 className="text-sm font-semibold text-destructive mb-1">The Problem</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="text-sm font-semibold text-primary mb-1">The Solution</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="text-sm font-semibold text-accent mb-1">The Impact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
            </div>
          </div>

          <h3 className="font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 group hover:shadow-lg hover:shadow-primary/25 transition-all">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              Live Demo
            </Button>
            <Button variant="outline" className="flex-1 group hover:border-primary hover:text-primary hover:shadow-lg transition-all">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-6" />
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
    <section id="projects" className="lg:py-32 relative overflow-hidden bg-secondary/30">
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
                className={`transition-all duration-300 ${activeCategory === category
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