"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, ExternalLink, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MagneticWrapper } from "./magnetic-wrapper"

const titles = [
        "Senior Android Developer",
        "Kotlin Expert",
        "Mobile App Architect",
        "Clean Code Advocate",
]

const socialLinks = [
        { icon: Github, href: "https://github.com/ArvindKoli", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/ArvindKoli", label: "LinkedIn" },
]

export function Hero() {
        const [titleIndex, setTitleIndex] = useState(0)
        const [displayText, setDisplayText] = useState("")
        const [isDeleting, setIsDeleting] = useState(false)
        const [mounted, setMounted] = useState(false)

        useEffect(() => {
                setMounted(true)
        }, [])

        useEffect(() => {
                const currentTitle = titles[titleIndex]
                const timeout = setTimeout(
                        () => {
                                if (!isDeleting) {
                                        if (displayText.length < currentTitle.length) {
                                                setDisplayText(currentTitle.slice(0, displayText.length + 1))
                                        } else {
                                                setTimeout(() => setIsDeleting(true), 2000)
                                        }
                                } else {
                                        if (displayText.length > 0) {
                                                setDisplayText(displayText.slice(0, -1))
                                        } else {
                                                setIsDeleting(false)
                                                setTitleIndex((prev) => (prev + 1) % titles.length)
                                        }
                                }
                        },
                        isDeleting ? 50 : 100
                )
                return () => clearTimeout(timeout)
        }, [displayText, isDeleting, titleIndex])

        return (
                <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

                       

                        {/* Floating Orbs */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
                                <motion.div
                                        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                                />
                                <motion.div
                                        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                                />
                                <motion.div
                                        animate={{ x: [0, 50, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
                                />
                        </div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 lg:pt-28">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                                        {/* Profile Image */}
                                        <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                                className="relative group lg:ml-12"
                                        >
                                                <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                        className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/20"
                                                />
                                                <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                                        className="absolute -inset-12 rounded-full border border-accent/10"
                                                />

                                                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-primary/30">
                                                        <Image
                                                                src="/profile.png"
                                                                alt="Arvind Koli"
                                                                fill
                                                                className="object-cover object-top transition-all duration-700 group-hover:scale-125"
                                                                priority
                                                        />
                                                </div>

                                               {/* Floating badges */}
<motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -right-4 top-1/4 px-3 py-1.5 rounded-full glass border border-primary/30 text-sm font-medium text-primary"
>
    Kotlin
</motion.div>
<motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    className="absolute -left-4 bottom-1/3 px-3 py-1.5 rounded-full glass border border-accent/30 text-sm font-medium text-accent"
>
    Android
</motion.div>
<motion.div
    animate={{ y: [0, 50, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
    className="absolute -left-12 bottom-1/4 px-3 py-1.5 rounded-full glass border border-accent/30 text-sm font-medium text-accent"
>
    Dagger - Hilt
</motion.div>
<motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    className="absolute -right-8 bottom-1/4 px-3 py-1.5 rounded-full glass border border-primary/30 text-sm font-medium text-primary"
>
    Jetpack
</motion.div>
<motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    className="absolute -right-6 bottom-8 px-3 py-1.5 rounded-full glass border border-primary/30 text-sm font-medium text-primary"
>
    Coroutines
</motion.div>
<motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
    className="absolute -left-6 top-1/3 px-3 py-1.5 rounded-full glass border border-accent/30 text-sm font-medium text-accent"
>
    Room
</motion.div>
<motion.div
    animate={{ y: [0, 5, 0] }}
    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
    className="absolute -right-10 top-1/2 px-3 py-1.5 rounded-full glass border border-primary/30 text-sm font-medium text-primary"
>
    Compose
</motion.div>
                                        </motion.div>
                                        {/* Content */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="flex-1 text-center lg:text-left lg:ml-20"
                                        >
                                                <motion.div
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.1, type: "spring" }}
                                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
                                                >
                                                        <span className="relative flex h-3 w-3">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                        </span>
                                                        <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
                                                </motion.div>

                                                <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        className="text-accent font-medium mb-4 text-lg"
                                                >
                                                        Hello, I&apos;m
                                                </motion.p>

                                                <motion.h1
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 tracking-tight"
                                                >
                                                        <span className="gradient-text text-shimmer">Arvind Koli</span>
                                                </motion.h1>

                                                <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 h-10"
                                                >
                                                        <span>{displayText}</span>
                                                        <span className="animate-pulse text-primary">|</span>
                                                </motion.div>

                                                <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.5 }}
                                                        className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                                                >
                                                        Architecting enterprise-grade Android solutions that power millions of users.
                                                        6+ years delivering high-impact mobile experiences with cutting-edge Kotlin & Jetpack technologies.
                                                </motion.p>

                                                <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.6 }}
                                                        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                                                >
                                                        <MagneticWrapper>
                                                                <Button
                                                                        asChild
                                                                        size="lg"
                                                                        className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
                                                                >
                                                                        <a href="#projects">
                                                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                                                                <span className="relative z-10 flex items-center gap-2">
                                                                                        View Projects
                                                                                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
                                                                                </span>
                                                                        </a>
                                                                </Button>
                                                        </MagneticWrapper>

                                                        <MagneticWrapper>
                                                                <Button
                                                                        variant="outline"
                                                                        size="lg"
                                                                        asChild
                                                                        className="group hover:scale-105 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                                                                >
                                                                        <a href="/resume.pdf" download>
                                                                                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:animate-bounce" />
                                                                                Download Resume
                                                                        </a>
                                                                </Button>
                                                        </MagneticWrapper>

                                                        <MagneticWrapper>
                                                                <Button
                                                                        variant="ghost"
                                                                        size="lg"
                                                                        asChild
                                                                        className="group hover:scale-105 transition-all duration-300 hover:bg-primary/10 active:scale-95"
                                                                >
                                                                        <a href="#contact">
                                                                                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                                                                                Contact Me
                                                                        </a>
                                                                </Button>
                                                        </MagneticWrapper>
                                                </motion.div>

                                                {/* Social Links */}
                                                <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.7 }}
                                                        className="flex justify-center lg:justify-start gap-4"
                                                >
                                                        {socialLinks.map((link, index) => (
                                                                <MagneticWrapper key={link.label} strength={0.4}>
                                                                        <motion.a
                                                                                href={link.href}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                initial={{ opacity: 0, scale: 0 }}
                                                                                animate={{ opacity: 1, scale: 1 }}
                                                                                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                                                                                className="w-12 h-12 rounded-full glass border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                                                                        >
                                                                                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                                        </motion.a>
                                                                </MagneticWrapper>
                                                        ))}
                                                </motion.div>
                                        </motion.div>

                                        
                                </div>
                        </div>

                        {/* Scroll Indicator */}
                        <motion.a
    href="#about"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.5 }}
    className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group z-10 lg:ml-12"
>
    <span className="text-sm">Scroll Down</span>
    <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1"
    >
        <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-current rounded-full"
        />
    </motion.div>
</motion.a>
                </section>
        )
}