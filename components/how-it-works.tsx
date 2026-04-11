const steps = [
  {
    num: "01",
    title: "You arrive as you are",
    desc: "No journals, no forms. Reframe listens and reads your patterns — then meets you exactly where you are.",
  },
  {
    num: "02",
    title: "Nature guides the response",
    desc: "Drawing from forest medicine, fractal science, and awe research — Reframe offers a path rooted in the natural world.",
  },
  {
    num: "03",
    title: "Stillness compounds",
    desc: "Like all things in nature, calm grows slowly and durably. Reframe adapts over time to build lasting resilience.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-10 max-sm:py-14 max-sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}
        >
          How reframe works
        </p>
        <h2
          className="font-serif font-light leading-tight text-balance"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
            color: "rgba(255,255,255,0.86)",
          }}
        >
          Nature has always known how to be still.
        </h2>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-10 text-left">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* top shimmer line */}
              <span
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                }}
                aria-hidden="true"
              />
              <div
                className="font-serif font-light leading-none mb-2.5"
                style={{ fontSize: "2.8rem", color: "rgba(255,255,255,0.05)" }}
              >
                {step.num}
              </div>
              <h3
                className="font-serif font-normal mb-1.5"
                style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
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
