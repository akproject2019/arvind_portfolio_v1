"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedCounter } from "./animated-counter"
import { Smartphone, Users, Star, Code2 } from "lucide-react"

const stats = [
  {
    icon: Code2,
    value: 6,
    suffix: "+",
    label: "Years Experience",
    description: "Building Android apps",
  },
  {
    icon: Smartphone,
    value: 15,
    suffix: "+",
    label: "Apps Delivered",
    description: "Production apps shipped",
  },
  {
    icon: Users,
    value: 1,
    suffix: "M+",
    label: "Users Reached",
    description: "Active app users",
  },
  {
    icon: Star,
    value: 4.5,
    suffix: "",
    label: "Avg Rating",
    description: "Play Store rating",
    decimals: 1,
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="glass border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
