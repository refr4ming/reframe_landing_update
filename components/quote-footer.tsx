export function Quote() {
  return (
    <section
      className="py-20 px-10 text-center max-sm:py-14 max-sm:px-6"
      style={{ borderTop: "0.5px solid rgba(255,255,255,0.05)" }}
    >
      <blockquote
        className="font-serif font-light italic max-w-xl mx-auto mb-4 leading-snug"
        style={{
          fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
          color: "rgba(200,230,210,0.65)",
        }}
      >
        Let it come. Let it move. Let it go.
      </blockquote>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      className="text-center py-7 px-7 tracking-widest"
      style={{
        background: "#030807",
        borderTop: "0.5px solid rgba(255,255,255,0.05)",
        fontSize: "0.68rem",
        color: "rgba(255,255,255,0.14)",
        letterSpacing: "0.06em",
      }}
    >
      &copy; 2025{" "}
      <span style={{ color: "rgba(190,228,208,0.28)" }}>reframe</span>
      &nbsp;&middot;&nbsp; a stress management agent inspired by nature
    </footer>
  )
}
