"use client"

import { useChat } from "@ai-sdk/react"
import { useRef, useEffect, useState } from "react"

export function Chat() {
  const { messages, sendMessage, status, error } = useChat()
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <section
      id="chat"
      className="py-20 px-10 max-sm:py-14 max-sm:px-6"
      style={{ background: "#070f0c" }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2.5"
          style={{ letterSpacing: "0.22em", color: "rgba(140,200,170,0.5)" }}
        >
          Try it now
        </p>
        <h2
          className="font-serif font-light leading-tight mb-3 text-balance"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.4rem)",
            color: "rgba(255,255,255,0.86)",
          }}
        >
          Talk to Reframe.
        </h2>
        <p
          className="text-sm font-light max-w-lg leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Share what&apos;s on your mind. Reframe listens without judgement and
          helps you find your calm.
        </p>

        {/* Chat container */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Messages area */}
          <div
            ref={scrollRef}
            className="p-6 space-y-4 overflow-y-auto"
            style={{ height: 380 }}
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,210,120,0.08)",
                    border: "0.5px solid rgba(255,210,120,0.15)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    stroke="rgba(255,210,140,0.6)"
                    fill="none"
                    strokeWidth={1.5}
                  >
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z" />
                  </svg>
                </div>
                <p
                  className="text-sm font-light"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  How are you feeling today?
                </p>
              </div>
            )}

            {messages.map((message) => {
              const text = message.parts
                .filter((part) => part.type === "text")
                .map((part) => part.text)
                .join("")

              return (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] rounded-2xl px-4 py-3"
                    style={
                      message.role === "user"
                        ? {
                            background: "rgba(255,210,120,0.1)",
                            border: "0.5px solid rgba(255,210,120,0.15)",
                          }
                        : {
                            background: "rgba(140,200,170,0.06)",
                            border: "0.5px solid rgba(140,200,170,0.1)",
                          }
                    }
                  >
                    <p
                      className="text-sm font-light leading-relaxed whitespace-pre-wrap"
                      style={{
                        color:
                          message.role === "user"
                            ? "rgba(255,255,255,0.82)"
                            : "rgba(200,230,210,0.78)",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              )
            })}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(140,200,170,0.06)",
                    border: "0.5px solid rgba(140,200,170,0.1)",
                  }}
                >
                  <div className="flex gap-1.5 items-center h-5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "rgba(140,200,170,0.4)",
                        animation: "chatDot 1.4s ease-in-out infinite",
                      }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "rgba(140,200,170,0.4)",
                        animation: "chatDot 1.4s ease-in-out 0.2s infinite",
                      }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "rgba(140,200,170,0.4)",
                        animation: "chatDot 1.4s ease-in-out 0.4s infinite",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div
                className="text-center py-3 px-4 rounded-xl text-xs"
                style={{
                  color: "rgba(255,160,100,0.75)",
                  background: "rgba(255,160,100,0.06)",
                  border: "0.5px solid rgba(255,160,100,0.12)",
                }}
              >
                Unable to connect. Please check that the OPENAI_API_KEY is set
                in your .env.local file.
              </div>
            )}
          </div>

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type what's on your mind..."
              className="flex-1 bg-transparent border-none outline-none text-sm font-light px-2 py-2"
              style={{ color: "rgba(255,255,255,0.85)" }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                background: "rgba(255,210,120,0.12)",
                border: "0.5px solid rgba(255,210,120,0.2)",
              }}
              aria-label="Send message"
            >
              <svg
                viewBox="0 0 24 24"
                width={14}
                height={14}
                fill="none"
                stroke="rgba(255,210,140,0.7)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  )
}
