import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-10 py-5 sticky top-0 z-50 backdrop-blur-xl border-b"
      style={{
        background: "rgba(6,12,10,0.75)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lotus2-vDT8o0NwOPMDg9z41RBs5SmdguxRVI.png"
          alt="Reframe logo"
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
        <span
          className="font-serif font-light tracking-widest"
          style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.9)" }}
        >
          reframe
        </span>
      </div>
      <Link
        href="#waitlist"
        className="text-xs font-medium uppercase tracking-widest transition-all duration-200 rounded-full px-5 py-2 hover:bg-white/10"
        style={{
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.7)",
          background: "rgba(255,255,255,0.05)",
          border: "0.5px solid rgba(255,255,255,0.12)",
        }}
        
      >
        Join the waitlist
      </Link>
    </nav>
  )
}
