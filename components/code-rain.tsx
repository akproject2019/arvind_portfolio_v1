"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const codeSnippets = [
  "fun main()",
  "suspend fun",
  "val data =",
  "class App",
  "@Composable",
  "viewModel",
  "LazyColumn",
  "remember {",
  "mutableStateOf",
  "Flow<T>",
  "Room.db",
  "Retrofit",
  "Hilt",
  "coroutine",
  "sealed class",
  "data class",
  "interface",
  "override fun",
  "LiveData",
  "StateFlow",
  "collectAsState",
  "navigation",
  "rememberSaveable",
  "LaunchedEffect",
  "Material3",
]

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const fontSize = 14
    const columns = Math.floor(canvas.width / 120)
    const drops: number[] = Array(columns).fill(1)
    const snippetIndices: number[] = Array(columns).fill(0).map(() => 
      Math.floor(Math.random() * codeSnippets.length)
    )

    const draw = () => {
      ctx.fillStyle = theme === "dark" 
        ? "rgba(12, 12, 20, 0.05)" 
        : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px "Geist Mono", monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const snippet = codeSnippets[snippetIndices[i]]
        const x = i * 120 + 20
        const y = drops[i] * fontSize
        
        // Gradient effect for each character
        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y)
        if (theme === "dark") {
          gradient.addColorStop(0, "rgba(99, 102, 241, 0.8)")
          gradient.addColorStop(1, "rgba(34, 211, 238, 0.3)")
        } else {
          gradient.addColorStop(0, "rgba(79, 70, 229, 0.6)")
          gradient.addColorStop(1, "rgba(6, 182, 212, 0.2)")
        }
        ctx.fillStyle = gradient
        
        ctx.fillText(snippet, x, y)

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
          snippetIndices[i] = Math.floor(Math.random() * codeSnippets.length)
        }
        drops[i] += 0.5
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearInterval(interval)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  )
}
