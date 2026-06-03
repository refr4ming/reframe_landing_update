import Image from "next/image"

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
    </nav>
  )
}
