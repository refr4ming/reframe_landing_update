import { RippleCanvas } from "@/components/ripple-canvas"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { HealthImpacts, Impacts } from "@/components/impacts"
import { Chat } from "@/components/chat"
import { Quote, Footer } from "@/components/quote-footer"

export default function Home() {
  return (
    <div
      className="font-sans overflow-x-hidden"
      style={{ background: "#060c0a", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}
    >
      <RippleCanvas />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <HealthImpacts />
          <Impacts />
          <Chat />
          <Quote />
        </main>
        <Footer />
      </div>
    </div>
  )
}
