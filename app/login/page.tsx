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
      setErrorMsgPassword("Please enter a valid email password.")
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
    <div>
        
      <h1>Watagatapitusberry</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
                      {status === "error" && (
              <p className="text-xs" style={{ color: "rgba(255,160,100,0.75)" }}>
                {errorMsgEmail}
              </p>
            )}
        <input type="password" placeholder="Password" value={password} 
         onChange={(e) => setPassword(e.target.value)} />
         {status === "error" && (
              <p className="text-xs" style={{ color: "rgba(255,160,100,0.75)" }}>
                {errorMsgPassword}
              </p>
            )}
        <button type="submit">Enter</button>

        <Link href="/signup">Sign Up</Link>
      </form>
    </div>
  )
}