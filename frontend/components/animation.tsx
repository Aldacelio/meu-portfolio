"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useTheme } from "next-themes"

export default function Animation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const rafRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()

  // UI Elements for animation
  const elementsRef = useRef<
    {
      type: string
      x: number
      y: number
      width: number
      height: number
      radius?: number
      color: string
      borderColor: string
      rotation: number
      speed: number
      opacity: number
    }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initElements()
      }
    }

    const context = canvas.getContext("2d")
    if (!context) return

    contextRef.current = context
    handleResize()

    // Initialize UI elements
    function initElements() {
      elementsRef.current = []
      const numElements = Math.min(window.innerWidth, window.innerHeight) < 768 ? 25 : 40

      for (let i = 0; i < numElements; i++) {
        // Determine element type
        const types = ["button", "card", "input", "toggle", "circle", "code"]
        const type = types[Math.floor(Math.random() * types.length)]

        let x = 0;
        let y = 0;

        // Random position
        if(canvas?.width && canvas?.height) {
            x = Math.random() * canvas.width
            y = Math.random() * canvas.height
        }
        

        // Size based on type
        let width, height, radius

        switch (type) {
          case "button":
            width = 60 + Math.random() * 80
            height = 30 + Math.random() * 20
            break
          case "card":
            width = 100 + Math.random() * 150
            height = 120 + Math.random() * 100
            break
          case "input":
            width = 120 + Math.random() * 100
            height = 30 + Math.random() * 15
            break
          case "toggle":
            width = 40 + Math.random() * 20
            height = 20 + Math.random() * 10
            break
          case "circle":
            radius = 15 + Math.random() * 30
            width = radius * 2
            height = radius * 2
            break
          case "code":
            width = 80 + Math.random() * 120
            height = 15 + Math.random() * 10
            break
          default:
            width = 50 + Math.random() * 50
            height = 50 + Math.random() * 50
        }

        // Colors from the site's palette
        const colors = [
          "rgba(99, 102, 241, 0.2)", // indigo-500
          "rgba(139, 92, 246, 0.2)", // violet-500
          "rgba(168, 85, 247, 0.2)", // purple-500
          "rgba(217, 70, 239, 0.2)", // fuchsia-500
        ]

        const borderColors = [
          "rgba(99, 102, 241, 0.5)", // indigo-500
          "rgba(139, 92, 246, 0.5)", // violet-500
          "rgba(168, 85, 247, 0.5)", // purple-500
          "rgba(217, 70, 239, 0.5)", // fuchsia-500
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]
        const borderColor = borderColors[Math.floor(Math.random() * borderColors.length)]

        // Random rotation and speed
        const rotation = Math.random() * Math.PI * 2
        const speed = 0.2 + Math.random() * 0.5

        // Random opacity
        const opacity = 0.1 + Math.random() * 0.3

        elementsRef.current.push({
          type,
          x,
          y,
          width,
          height,
          radius,
          color,
          borderColor,
          rotation,
          speed,
          opacity,
        })
      }
    }

    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const isDark = document.documentElement.classList.contains("dark")

      const gradient = context.createLinearGradient(0, 0, 0, canvas.height)

      if (isDark) {
        gradient.addColorStop(0, "rgba(15, 23, 42, 1)") // slate-900
        gradient.addColorStop(1, "rgba(30, 41, 59, 1)") // slate-800
      } else {
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)") // white
        gradient.addColorStop(1, "rgba(241, 245, 249, 1)") // slate-100
      }

      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update UI elements
      for (const element of elementsRef.current) {
        // Move elements
        element.y += Math.sin(element.rotation) * element.speed
        element.x += Math.cos(element.rotation) * element.speed

        // Wrap around screen
        if (element.x < -element.width) element.x = canvas.width + element.width
        if (element.x > canvas.width + element.width) element.x = -element.width
        if (element.y < -element.height) element.y = canvas.height + element.height
        if (element.y > canvas.height + element.height) element.y = -element.height

        // Mouse interaction - gentle push
        const dx = mouseRef.current.x - element.x
        const dy = mouseRef.current.y - element.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          element.x -= dx * force * 0.02
          element.y -= dy * force * 0.02
        }

        // Draw element based on type
        context.save()
        context.globalAlpha = element.opacity

        switch (element.type) {
          case "button":
            drawRoundedRect(
              context,
              element.x,
              element.y,
              element.width,
              element.height,
              8,
              element.color,
              element.borderColor,
            )
            break
          case "card":
            drawRoundedRect(
              context,
              element.x,
              element.y,
              element.width,
              element.height,
              12,
              element.color,
              element.borderColor,
            )
            // Add card details
            context.fillStyle = element.borderColor
            context.fillRect(element.x + 10, element.y + 10, element.width - 20, 10)
            context.fillRect(element.x + 10, element.y + 30, element.width / 2, 8)
            break
          case "input":
            drawRoundedRect(
              context,
              element.x,
              element.y,
              element.width,
              element.height,
              6,
              element.color,
              element.borderColor,
            )
            break
          case "toggle":
            drawRoundedRect(
              context,
              element.x,
              element.y,
              element.width,
              element.height,
              element.height / 2,
              element.color,
              element.borderColor,
            )
            // Draw toggle circle
            context.beginPath()
            const togglePos =
              Math.random() > 0.5 ? element.x + element.width - element.height / 2 : element.x + element.height / 2
            context.arc(togglePos, element.y + element.height / 2, element.height / 2 - 4, 0, Math.PI * 2)
            context.fillStyle = element.borderColor
            context.fill()
            break
          case "circle":
            context.beginPath()
            context.arc(element.x, element.y, element.radius!, 0, Math.PI * 2)
            context.fillStyle = element.color
            context.fill()
            context.strokeStyle = element.borderColor
            context.lineWidth = 2
            context.stroke()
            break
          case "code":
            // Draw code snippet
            drawRoundedRect(
              context,
              element.x,
              element.y,
              element.width,
              element.height,
              4,
              element.color,
              element.borderColor,
            )
            // Add code lines
            const numLines = Math.floor(element.width / 20)
            for (let i = 0; i < numLines; i++) {
              const lineWidth = 5 + Math.random() * 15
              context.fillStyle = element.borderColor
              context.fillRect(element.x + 5 + i * 20, element.y + 5, lineWidth, 5)
            }
            break
        }

        context.restore()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    // Helper function to draw rounded rectangles
    function drawRoundedRect(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
      fillColor: string,
      strokeColor: string,
    ) {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()

      ctx.fillStyle = fillColor
      ctx.fill()

      ctx.strokeStyle = strokeColor
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Touch move handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX
        mouseRef.current.y = e.touches[0].clientY
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    // Set initial mouse position to center
    mouseRef.current.x = window.innerWidth / 2
    mouseRef.current.y = window.innerHeight / 2

    // Start animation
    rafRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [theme])

  const scrollToContent = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
        <div className="hero-content max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
          Aldacélio Cavalcante
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-foreground/85">
            Desenvolvedor Full Stack especializado em criar soluções web modernas
          </p>
          <Button onClick={scrollToContent} className="animate-bounce mt-8" size="lg">
            <ArrowDown className="mr-2 h-4 w-4" />
            Explorar
          </Button>
        </div>
      </div>
    </section>
  )
}

