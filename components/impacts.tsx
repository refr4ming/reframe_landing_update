const healthImpacts = [
  {
    title: "Heart disease",
    desc: "Elevated cortisol raises blood pressure and increases cardiovascular risk by up to 40%.",
    icon: (
      <svg viewBox="0 0 24 24" width={13} height={13} stroke="rgba(255,210,140,0.6)" fill="none" strokeWidth={1.5}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Cognitive decline",
    desc: "Stress hormones shrink the prefrontal cortex, eroding focus, memory, and emotional control.",
    icon: (
      <svg viewBox="0 0 24 24" width={13} height={13} stroke="rgba(255,210,140,0.6)" fill="none" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Sleep loss",
    desc: "60% of people with chronic anxiety report persistent insomnia, deepening both conditions.",
    icon: (
      <svg viewBox="0 0 24 24" width={13} height={13} stroke="rgba(255,210,140,0.6)" fill="none" strokeWidth={1.5}>
        <path d="M17 18a5 5 0 0 0-10 0" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
        <line x1="1" y1="18" x2="3" y2="18" />
        <line x1="21" y1="18" x2="23" y2="18" />
        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      </svg>
    ),
  },
  {
    title: "Social withdrawal",
    desc: "Anxiety quietly dismantles relationships — severing the very connections that could offer relief.",
    icon: (
      <svg viewBox="0 0 24 24" width={13} height={13} stroke="rgba(255,210,140,0.6)" fill="none" strokeWidth={1.5}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const steps = [
  {
    title: "Awareness",
    desc: "Meeting you where you are. Gentle guidance to identify the emotion without judgement.",
  },
  {
    title: "Perspective",
    desc: "Zoom out. Not everything that feels big is big. With wider context, its easier to breathe and think.",
  },
  {
    title: "Action",
    desc: "Small, intentional step - reflect, write, stretch, breathe. Shift out of your head and into motion.",
  },
]

export function HealthImpacts() {
  return (
    <section
      className="py-20 px-10 max-sm:py-14 max-sm:px-6"
      style={{ background: "#070f0c" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}
        >
          The toll on your body
        </p>
        <h2
          className="font-serif font-light leading-tight mb-3 text-balance"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
            color: "rgba(255,255,255,0.86)",
          }}
        >
          Stress is not just in your head.
        </h2>
        <p
          className="text-sm font-light max-w-lg leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Chronic stress rewires your brain, weakens your immune system, and quietly shortens your
          life. The effects are measurable — and largely preventable.
        </p>

        <div
          className="grid grid-cols-2 max-sm:grid-cols-1 rounded-2xl overflow-hidden"
          style={{
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            border: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          {healthImpacts.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 transition-colors duration-200 bg-[#070f0c] hover:bg-white/[0.02]"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: "rgba(255,210,120,0.08)",
                  border: "0.5px solid rgba(255,210,120,0.15)",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div>
                <h3
                  className="font-serif font-normal mb-1"
                  style={{ fontSize: "1rem", color: "rgba(255,255,255,0.78)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Impacts() {
  return (
    <section
      className="py-20 px-10 max-sm:py-14 max-sm:px-6"
      style={{ background: "#070f0c" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}
        >
          How it works
        </p>
        <h2
          className="font-serif font-light leading-tight mb-3 text-balance"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
            color: "rgba(255,255,255,0.86)",
          }}
        >
          A simple natural path through emotion - designed to help you process, not carry.
        </h2>
        <p
          className="text-sm font-light max-w-lg leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Reframe guides you through three essential steps to process emotions naturally and sustainably.
        </p>

        <div
          className="grid grid-cols-3 max-sm:grid-cols-1 gap-4"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 transition-colors duration-200 hover:bg-white/[0.02]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="font-serif font-normal mb-1.5"
                style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.86)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
