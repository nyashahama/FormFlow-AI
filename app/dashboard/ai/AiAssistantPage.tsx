"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
  ts: string;
};

const SUGGESTED = [
  "What deductions am I missing?",
  "Explain Schedule C line 1 conflict",
  "Am I on track for my April 15 deadline?",
  "How does the home office deduction work?",
  "What is my estimated refund?",
];

const INITIAL: Message[] = [
  {
    role: "assistant",
    text: "Hi Jordan — I've reviewed your 2025 tax filing. You have 3 items that need attention: a Schedule C income conflict, Form 8949 awaiting your signature, and a potential $1,240 home office deduction you haven't claimed yet. Where would you like to start?",
    ts: "2:14 PM",
  },
];

const CANNED: Record<string, string> = {
  "What deductions am I missing?":
    "Based on your connected data sources, I've identified two unclaimed deductions: **Home office (§280A)** — your Mortgage/1098 data shows you're eligible for an additional $1,240. **Student loan interest** — I don't see a 1098-E import yet. Want me to add Nelnet or FedLoan as a data source?",
  "Explain Schedule C line 1 conflict":
    "Schedule C Line 1 shows **$48,240** from your bank imports, but your 1099-NEC from Stripe reports **$48,000** — a $240 discrepancy. This usually means a payment hit your account in late December but was issued on the 1099 in January. I'd recommend reporting $48,240 (the actual amount received) and keeping a note in your records.",
  "Am I on track for my April 15 deadline?":
    "Yes — with 9 days to go, here's your status: **Form 1040** is at 95% and IRS e-File ready. **Form 8949** needs your signature (takes ~2 min). **Schedule C** has one conflict to resolve. If you clear those two today, you'll be fully submitted well before the deadline.",
  "How does the home office deduction work?":
    "Under **Section 280A**, you can deduct the portion of home expenses (mortgage interest, utilities, insurance) that corresponds to the square footage used exclusively for business. Based on your Mortgage/1098, I estimate you can claim $1,240. Want me to prefill Form 8829 with your numbers?",
  "What is my estimated refund?":
    "Based on your current data, your estimated **federal refund is $2,840**. This factors in your W-2 withholding, 1099-INT income, and the Schedule A deductions already filed. Resolving the Schedule C conflict and adding the home office deduction could push that up to approximately **$3,480**.",
};

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", text: text.trim(), ts: now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const reply =
        CANNED[text.trim()] ??
        "I'm reviewing your filing data now. Based on what I can see, everything looks broadly on track — but let me dig deeper into that specific area and get back to you with a precise answer.";
      setMessages((m) => [...m, { role: "assistant", text: reply, ts: now() }]);
      setLoading(false);
    }, 1100);
  };

  return (
    <div
      className="main-inner"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 52px)",
        paddingBottom: 0,
      }}
    >
      {/* Header */}
      <div
        className="page-header fade-in-1"
        style={{ marginBottom: 20, flexShrink: 0 }}
      >
        <div className="ph-left">
          <div className="page-eyebrow">Tools</div>
          <h1 className="page-title">
            <em>AI</em> Assistant
          </h1>
          <p className="page-sub">
            Ask anything about your 2025 filing — powered by your live data
          </p>
        </div>
        <div className="ph-right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ghost-2)",
            }}
          >
            <span className="live-dot" />
            Context loaded · 6 sources
          </div>
          <button
            className="btn-ghost"
            style={{ fontSize: 11, padding: "5px 12px" }}
          >
            Clear Chat
          </button>
        </div>
      </div>

      {/* Context pills */}
      <div
        className="fade-in-2"
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 16,
          flexShrink: 0,
        }}
      >
        {[
          { label: "Form 1040 · 95%", color: "var(--lime)" },
          { label: "Schedule C · conflict", color: "var(--amber)" },
          { label: "Form 8949 · sign needed", color: "var(--cyan)" },
          { label: "6 data sources", color: "var(--ghost-2)" },
          { label: "Tax Year 2025", color: "var(--ghost-2)" },
        ].map(({ label, color }) => (
          <span
            key={label}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color,
              background: "var(--ghost-4)",
              border: "1px solid var(--line)",
              borderRadius: 100,
              padding: "3px 10px",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Chat area */}
      <div
        className="panel fade-in-3"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginBottom: 14,
          minHeight: 0,
        }}
      >
        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                flexDirection: msg.role === "user" ? "row-reverse" : "row",
                alignItems: "flex-start",
              }}
            >
              {/* Avatar */}
              {msg.role === "assistant" ? (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    flexShrink: 0,
                    background: "rgba(200,241,53,0.12)",
                    border: "1px solid rgba(200,241,53,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1l1.4 3.3L12 4.8l-3 2.7.7 3.5L7 9.5l-2.7 1.5.7-3.5L2 4.8l3.6-.5z"
                      stroke="#c8f135"
                      strokeWidth="1.1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  className="avatar"
                  style={{ width: 30, height: 30, fontSize: 11, flexShrink: 0 }}
                >
                  JD
                </div>
              )}

              {/* Bubble */}
              <div
                style={{
                  maxWidth: "72%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius:
                      msg.role === "user"
                        ? "14px 4px 14px 14px"
                        : "4px 14px 14px 14px",
                    background:
                      msg.role === "user"
                        ? "rgba(200,241,53,0.1)"
                        : "var(--ghost-4)",
                    border: `1px solid ${msg.role === "user" ? "rgba(200,241,53,0.2)" : "var(--line)"}`,
                    fontSize: 13,
                    color: "var(--smoke)",
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  <FormattedText text={msg.text} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9.5,
                    color: "var(--ghost-2)",
                  }}
                >
                  {msg.ts}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: "rgba(200,241,53,0.12)",
                  border: "1px solid rgba(200,241,53,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1l1.4 3.3L12 4.8l-3 2.7.7 3.5L7 9.5l-2.7 1.5.7-3.5L2 4.8l3.6-.5z"
                    stroke="#c8f135"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "4px 14px 14px 14px",
                  background: "var(--ghost-4)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--lime)",
                      animation: `pulse 1.2s ease ${d * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        <div
          style={{
            padding: "12px 24px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {SUGGESTED.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="btn-ghost"
              style={{
                fontSize: 11,
                padding: "4px 12px",
                color: "var(--ghost-2)",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            gap: 10,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "var(--ghost-4)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "border-color 0.2s",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send(input)}
              placeholder="Ask about your filing, deductions, deadlines…"
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                fontFamily: "var(--sans)",
                fontSize: 13,
                color: "var(--smoke)",
                fontWeight: 300,
              }}
            />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9.5,
                color: "var(--ghost-2)",
                background: "var(--ghost-3)",
                borderRadius: 4,
                padding: "1px 5px",
              }}
            >
              ↵
            </span>
          </div>
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="btn-primary"
            style={{
              padding: "10px 16px",
              fontSize: 12,
              flexShrink: 0,
              opacity: !input.trim() || loading ? 0.5 : 1,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 6h10M7 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} style={{ color: "var(--smoke)", fontWeight: 500 }}>
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function now() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
