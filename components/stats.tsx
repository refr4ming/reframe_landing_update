const stats = [
  { number: "83%", label: "of workers report chronic stress-related burnout" },
  { number: "284M", label: "people globally affected by anxiety disorders" },
  { number: "+25%", label: "rise in anxiety worldwide since 2020, per the WHO" },
]

export function Stats() {
  return (
    <div
      className="grid grid-cols-3 max-sm:grid-cols-1"
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="py-9 px-6 text-center max-sm:border-b"
          style={{
            borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
            borderBottomColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="font-serif font-light leading-none mb-1.5"
            style={{ fontSize: "2.8rem", color: "rgba(255,218,155,0.78)" }}
          >
            {s.number}
          </div>
          <div
            className="text-xs leading-snug mx-auto max-w-28"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
