"use client"

import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("Please enter a valid email address.")

  function isValidEmail(val: string) {
    return val.includes("@") && val.includes(".")
  }

  async function handleJoin() {
    if (!email || !isValidEmail(email)) {
      setStatus("error")
      setErrorMsg("Please enter a valid email address.")
      setTimeout(() => setStatus("idle"), 2500)
      return
    }
    setStatus("loading")
    try {
      const response = await fetch("https://formspree.io/f/xjgpngkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setErrorMsg("Something went wrong. Please try again.")
        setTimeout(() => setStatus("idle"), 2500)
      }
    } catch (error) {
      setStatus("error")
      setErrorMsg("Network error. Please try again.")
      setTimeout(() => setStatus("idle"), 2500)
    }
  }

  return (
    <section
      id="waitlist"
      className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Glows */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(255,210,120,0.14) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "10%",
          left: "30%",
          width: 400,
          height: 300,
          background: "radial-gradient(ellipse, rgba(100,180,140,0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Logo with pulsing rings */}
      <div
        className="relative w-36 h-36 mx-auto mb-10 flex items-center justify-center"
        style={{ animation: "fadeUp 0.9s ease both 0.05s" }}
      >
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            border: "0.5px solid rgba(255,210,120,0.18)",
            animation: "pulseRing 3.5s ease-out infinite",
          }}
          aria-hidden="true"
        />
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            border: "0.5px solid rgba(140,200,170,0.11)",
            animation: "pulseRing 3.5s ease-out 1.2s infinite",
          }}
          aria-hidden="true"
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lotus2-vDT8o0NwOPMDg9z41RBs5SmdguxRVI.png"
          alt="Reframe — nature-inspired stress management"
          width={140}
          height={140}
          className="rounded-full object-cover relative z-10"
          style={{
            filter: "drop-shadow(0 0 40px rgba(255,210,120,0.5))",
            animation: "floatY 7s ease-in-out infinite",
          }}
          priority
        />
      </div>

      {/* Eyebrow */}
      <p
        className="text-xs font-medium uppercase tracking-widest mb-5"
        style={{
          letterSpacing: "0.25em",
          color: "rgba(180,220,200,0.48)",
          animation: "fadeUp 0.9s ease both 0.15s",
        }}
      >
        Changing how we interact with technology
      </p>

      {/* H1 */}
      <h1
        className="font-serif font-light leading-none mb-6 text-balance"
        style={{
          fontSize: "clamp(3.2rem, 8vw, 6rem)",
          color: "rgba(255,255,255,0.93)",
          animation: "fadeUp 0.9s ease both 0.28s",
        }}
      >
        Close the{" "}
        <em style={{ fontStyle: "italic", color: "rgba(255,210,140,0.9)" }}>
          stress
        </em>{" "}
        loop.
      </h1>

      {/* Subheading */}
      <p
        className="text-sm font-light max-w-sm leading-relaxed mb-12"
        style={{
          color: "rgba(255,255,255,0.48)",
          animation: "fadeUp 0.9s ease both 0.4s",
        }}
      >
        Explore your natural rhythm.
      </p>

      {/* Waitlist form */}
      <div
        className="flex flex-col items-center gap-3 w-full max-w-sm"
        style={{ animation: "fadeUp 0.9s ease both 0.52s" }}
      >
        {status !== "success" ? (
          <>
            <div
              className="flex w-full overflow-hidden rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.14)",
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                autoComplete="email"
                className="flex-1 bg-transparent border-none outline-none px-6 py-3.5 text-sm font-sans"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  outline: status === "error" ? "1px solid rgba(255,160,80,0.45)" : "none",
                }}
                aria-label="Email address"
              />
              <button
                onClick={handleJoin}
                disabled={status === "loading"}
                className="text-xs font-medium uppercase tracking-widest px-6 py-3.5 transition-all duration-200 whitespace-nowrap disabled:opacity-60 hover:bg-white/15"
                style={{
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.82)",
                  background: "rgba(255,255,255,0.09)",
                  borderLeft: "0.5px solid rgba(255,255,255,0.11)",
                }}
              >
                {status === "loading" ? "Sending..." : "Join waitlist"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-xs" style={{ color: "rgba(255,160,100,0.75)" }}>
                {errorMsg}
              </p>
            )}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
              Early access &middot; No spam &middot; Free to join
            </p>
          </>
        ) : (
          <div
            className="w-full text-sm text-center rounded-full px-7 py-3.5"
            style={{
              color: "rgba(180,230,200,0.85)",
              background: "rgba(100,180,140,0.1)",
              border: "0.5px solid rgba(100,180,140,0.2)",
            }}
          >
            You&apos;re on the list. The forest is waiting.
          </div>
        )}
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseRing {
          0% { width: 150px; height: 150px; opacity: 0.5; }
          100% { width: 280px; height: 280px; opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
