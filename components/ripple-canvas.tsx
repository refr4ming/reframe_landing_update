"use client"

import { useEffect, useRef } from "react"

interface Ripple {
  x: number
  y: number
  r: number
  max: number
  a: number
  spd: number
}

export function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let W = 0
    let H = 0
    let animId: number
    let intervalId: ReturnType<typeof setInterval>
    const ripples: Ripple[] = []

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }

    function addRipple() {
      ripples.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0,
        max: Math.random() * 200 + 100,
        a: 0.14,
        spd: Math.random() * 0.65 + 0.3,
      })
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rpl = ripples[i]
        rpl.r += rpl.spd
        rpl.a = 0.14 * (1 - rpl.r / rpl.max)
        if (rpl.a <= 0) {
          ripples.splice(i, 1)
          continue
        }
        ctx!.beginPath()
        ctx!.arc(rpl.x, rpl.y, rpl.r, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(140,200,170,${rpl.a})`
        ctx!.lineWidth = 0.6
        ctx!.stroke()

        ctx!.beginPath()
        ctx!.arc(rpl.x, rpl.y, rpl.r * 0.5, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(255,210,140,${rpl.a * 0.3})`
        ctx!.lineWidth = 0.35
        ctx!.stroke()
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    addRipple()
    addRipple()
    addRipple()
    intervalId = setInterval(addRipple, 2000)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(intervalId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
