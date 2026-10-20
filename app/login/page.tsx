"use client"

import { useState } from "react"
import Link from "next/link"


export default function Login() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsgEmail, setErrorMsgEmail] = useState("Please enter a valid email address.")
  const [password, setPassword] = useState("")
  const [errorMsgPassword, setErrorMsgPassword] = useState("Please enter a valid email password.") 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !isValidEmail(email) || !password || !isValidPassword(password)) {
      setStatus("error")
      setErrorMsgEmail("Please enter a valid email address.")
      setErrorMsgPassword("Please enter a valid password.")
      setTimeout(() => setStatus("idle"), 2500)
      return
    }
    console.log(email, password)
  }

  function isValidEmail(val: string) {
    return val.includes("@") && val.includes(".")
  }
  function isValidPassword(val: string) {
    return val.length >= 8
  }
  return (
      <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16"
    >
            <h1
      className="font-serif font-light leading-tight mb-3 text-balance"
      style={{
        fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
        color: "rgba(255,255,255,0.86)",
      }}
    >
        Return to Stillness</h1>

      <p className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}>
        Clear Mind. Clear Body. Clear Soul. 
      </p>
      <p
    className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}
        >

        Enter your email and password to login</p>
      <form onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-full max-w-sm"
      >
        <input type="email" placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-label="Email address"
          className="w-full rounded-full px-6 py-3.5 text-sm font-sans outline-none"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "0.5px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.85)",
          }}
          />
                      {status === "error" && (
              <p className="text-xs" style={{ color: "rgba(255,160,100,0.75)" }}>
                {errorMsgEmail}
              </p>
            )}
        <input type="password" placeholder="Password" value={password} 
         onChange={(e) => setPassword(e.target.value)} 
         autoComplete="current-password"
         aria-label="Password"
         className="w-full rounded-full px-6 py-3.5 text-sm font-sans outline-none"
         style={{
           background: "rgba(255,255,255,0.05)",
           border: "0.5px solid rgba(255,255,255,0.14)",
           color: "rgba(255,255,255,0.85)",
         }}
         />
         {status === "error" && (
              <p className="text-xs" style={{ color: "rgba(255,160,100,0.75)" }}>
                {errorMsgPassword}
              </p>
            )}
        <button 
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full px-6 py-3.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 disabled:opacity-60 hover:bg-white/15 outline-none"
        style={{
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.9)",
          background: "rgba(255,255,255,0.12)",
          border: "0.5px solid rgba(255,210,120,0.2)",
        }}
        >
          {status === "loading" ? "Entering..." : "Enter"}
        </button>

        <Link href="/signup"
        className="text-xs mt-2 hover:underline transition-colors"
        style={{
          color: "rgba(255,255,255,0.4)",
        }}
        >New Here? Sign Up</Link>
      </form>
    </section>
  )
}