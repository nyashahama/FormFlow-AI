"use client";

import { useState } from "react";

type Source = {
  id: string;
  ico: string;
  name: string;
  category: string;
  status: "connected" | "warning" | "disconnected";
  detail: string;
  lastSync: string;
  records: string;
  forms: string[];
};

const SOURCES: Source[] = [
  {
    id: "chase",
    ico: "🏦",
    name: "Chase Bank",
    category: "Banking",
    status: "connected",
    detail: "Checking ···· 8821 · Savings ···· 4402",
    lastSync: "2 min ago",
    records: "847 transactions",
    forms: ["1099-INT", "Schedule A"],
  },
  {
    id: "irs",
    ico: "📊",
    name: "IRS e-Services",
    category: "Government",
    status: "connected",
    detail: "EIN 83-4921021 · PIN authenticated",
    lastSync: "14 min ago",
    records: "Filing history",
    forms: ["1040", "All e-File"],
  },
  {
    id: "w2",
    ico: "💼",
    name: "Employer W-2",
    category: "Employment",
    status: "connected",
    detail: "Acme Corp · EIN 47-1822900",
    lastSync: "Apr 2, 2025",
    records: "1 document",
    forms: ["1040 Line 1", "W-4"],
  },
  {
    id: "robinhood",
    ico: "📱",
    name: "Robinhood",
    category: "Investments",
    status: "warning",
    detail: "OAuth token expired · Re-auth needed",
    lastSync: "3 days ago",
    records: "14 transactions",
    forms: ["1099-B", "Form 8949"],
  },
  {
    id: "mortgage",
    ico: "🏠",
    name: "Mortgage / 1098",
    category: "Real Estate",
    status: "connected",
    detail: "Wells Fargo · PDF parsed · Loan #4821",
    lastSync: "Mar 15, 2025",
    records: "1 document",
    forms: ["Schedule A", "Form 8829"],
  },
  {
    id: "venmo",
    ico: "🔗",
    name: "Venmo / PayPal",
    category: "Payments",
    status: "disconnected",
    detail: "Not connected — may affect Schedule C",
    lastSync: "—",
    records: "—",
    forms: ["Schedule C"],
  },
  {
    id: "coinbase",
    ico: "₿",
    name: "Coinbase",
    category: "Crypto",
    status: "disconnected",
    detail: "Not connected — crypto gains unreported",
    lastSync: "—",
    records: "—",
    forms: ["Form 8949", "Schedule D"],
  },
  {
    id: "stripe",
    ico: "💳",
    name: "Stripe",
    category: "Payments",
    status: "connected",
    detail: "Account ID acct_1N82xP · 1099-K linked",
    lastSync: "1 hour ago",
    records: "203 payouts",
    forms: ["1099-NEC", "Schedule C"],
  },
];

const CATEGORIES = [
  "All",
  "Banking",
  "Government",
  "Employment",
  "Investments",
  "Real Estate",
  "Payments",
  "Crypto",
];

const STATUS_CONFIG = {
  connected: {
    label: "Connected",
    color: "var(--green)",
    bg: "rgba(34,212,106,0.1)",
    border: "rgba(34,212,106,0.2)",
    dotClass: "si-green",
  },
  warning: {
    label: "Re-auth needed",
    color: "var(--amber)",
    bg: "rgba(240,160,48,0.1)",
    border: "rgba(240,160,48,0.2)",
    dotClass: "si-amber",
  },
  disconnected: {
    label: "Not connected",
    color: "var(--ghost-2)",
    bg: "var(--ghost-4)",
    border: "var(--line)",
    dotClass: "si-grey",
  },
};

export default function DataSourcesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Source | null>(null);

  const filtered =
    filter === "All" ? SOURCES : SOURCES.filter((s) => s.category === filter);
  const connectedCount = SOURCES.filter((s) => s.status === "connected").length;
  const warningCount = SOURCES.filter((s) => s.status === "warning").length;

  return (
    <div className="main-inner">
      {/* Header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Tools</div>
          <h1 className="page-title">
            Data <em>Sources</em>
          </h1>
          <p className="page-sub">
            Connect accounts so AI can pull data and prefill your forms
            automatically
          </p>
        </div>
        <div className="ph-right">
          <button className="btn-ghost" style={{ fontSize: 12 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1v10M1 6h10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Connect New
          </button>
          <button className="btn-primary" style={{ fontSize: 12 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6a4 4 0 1 0 8 0M6 1v7M4 3l2-2 2 2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sync All
          </button>
        </div>
      </div>

      {/* KPI strip */}
      <div
        className="fade-in-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {[
          {
            label: "Total Sources",
            val: SOURCES.length,
            color: "var(--smoke)",
          },
          { label: "Connected", val: connectedCount, color: "var(--green)" },
          { label: "Need Attention", val: warningCount, color: "var(--amber)" },
          { label: "AI Prefill Rate", val: "94%", color: "var(--lime)" },
        ].map(({ label, val, color }) => (
          <div
            key={label}
            style={{
              background: "var(--void-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9.5,
                color: "var(--ghost-2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: 32,
                color,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {val}
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div
        className="fade-in-3"
        style={{ display: "flex", gap: 4, marginBottom: 16, flexWrap: "wrap" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`tab${filter === cat ? " active" : ""}`}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10.5,
              padding: "5px 12px",
              borderRadius: 6,
              border: "1px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s",
              background: "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Source cards */}
      <div
        className="fade-in-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 12,
          marginBottom: 14,
        }}
      >
        {filtered.map((src) => {
          const cfg = STATUS_CONFIG[src.status];
          return (
            <div
              key={src.id}
              onClick={() => setSelected(selected?.id === src.id ? null : src)}
              style={{
                background: "var(--void-2)",
                borderRadius: "var(--r-lg)",
                border: `1px solid ${selected?.id === src.id ? cfg.border : "var(--line)"}`,
                padding: "18px 20px",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow:
                  selected?.id === src.id ? `0 0 0 1px ${cfg.border}` : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: selected?.id === src.id ? 16 : 0,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    fontSize: 20,
                    background: "var(--ghost-4)",
                    border: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {src.ico}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 3,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--smoke)",
                      }}
                    >
                      {src.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        color: "var(--ghost-2)",
                        background: "var(--ghost-4)",
                        border: "1px solid var(--line)",
                        borderRadius: 4,
                        padding: "1px 6px",
                      }}
                    >
                      {src.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      color:
                        src.status === "warning"
                          ? "var(--amber)"
                          : src.status === "disconnected"
                            ? "var(--ghost-2)"
                            : "var(--ghost-2)",
                    }}
                  >
                    {src.detail}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 6,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <div
                      className={`src-indicator ${cfg.dotClass}`}
                      style={{ width: 6, height: 6 }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: cfg.color,
                      }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                  {src.status === "warning" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="btn-ghost"
                      style={{
                        fontSize: 10,
                        padding: "3px 10px",
                        color: "var(--amber)",
                        borderColor: "rgba(240,160,48,0.3)",
                      }}
                    >
                      Re-auth
                    </button>
                  )}
                  {src.status === "disconnected" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="btn-ghost"
                      style={{ fontSize: 10, padding: "3px 10px" }}
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded detail */}
              {selected?.id === src.id && (
                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: 12,
                    }}
                  >
                    {[
                      { label: "LAST SYNC", val: src.lastSync },
                      { label: "RECORDS", val: src.records },
                      { label: "LINKED FORMS", val: src.forms.join(", ") },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <div
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: 9.5,
                            color: "var(--ghost-2)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--smoke)",
                            fontWeight: 300,
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {src.status === "connected" && (
                      <>
                        <button
                          className="btn-ghost"
                          style={{ fontSize: 11, padding: "5px 12px" }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5a3 3 0 1 0 6 0M5 1v6M3 3l2-2 2 2"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Sync Now
                        </button>
                        <button
                          className="btn-ghost"
                          style={{ fontSize: 11, padding: "5px 12px" }}
                        >
                          View Records
                        </button>
                        <button
                          className="btn-ghost"
                          style={{
                            fontSize: 11,
                            padding: "5px 12px",
                            marginLeft: "auto",
                            color: "var(--red)",
                            borderColor: "rgba(255,77,77,0.2)",
                          }}
                        >
                          Disconnect
                        </button>
                      </>
                    )}
                    {src.status === "warning" && (
                      <>
                        <button
                          className="btn-primary"
                          style={{ fontSize: 11, padding: "5px 14px" }}
                        >
                          Re-authenticate
                        </button>
                        <button
                          className="btn-ghost"
                          style={{ fontSize: 11, padding: "5px 12px" }}
                        >
                          View Records
                        </button>
                      </>
                    )}
                    {src.status === "disconnected" && (
                      <button
                        className="btn-primary"
                        style={{ fontSize: 11, padding: "5px 14px" }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M5 1v8M1 5h8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                        Connect Source
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AI note */}
      <div className="panel fade-in-4" style={{ marginBottom: 40 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div
              className="panel-title-ico"
              style={{
                borderColor: "rgba(200,241,53,0.2)",
                background: "rgba(200,241,53,0.06)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1l1.2 2.8L10 4.3 7.8 6.4l.5 3L6 7.8l-2.3 1.6.5-3L2 4.3l2.8-.5z"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            AI Recommendations
          </div>
        </div>
        <div className="panel-body">
          <div className="insight-list">
            <div className="insight-item warning">
              <div
                className="insight-ico"
                style={{
                  background: "rgba(240,160,48,0.1)",
                  borderColor: "rgba(240,160,48,0.2)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2v5M6 8.5v.5"
                    stroke="#f0a030"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.5 10.5l4.5-9 4.5 9H1.5z"
                    stroke="#f0a030"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="insight-text">
                <strong>Robinhood re-auth is blocking Form 8949.</strong> The 14
                capital gains transactions can&apos;t be verified until you
                reconnect. This affects your Schedule D total.
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-ico">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1l1.2 2.8L10 4.3 7.8 6.4l.5 3L6 7.8l-2.3 1.6.5-3L2 4.3l2.8-.5z"
                    stroke="#c8f135"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="insight-text">
                <strong>
                  Connecting Venmo/PayPal could reveal additional Schedule C
                  income.
                </strong>{" "}
                If you received business payments through these apps, they may
                need to be reported.
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-ico">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1l1.2 2.8L10 4.3 7.8 6.4l.5 3L6 7.8l-2.3 1.6.5-3L2 4.3l2.8-.5z"
                    stroke="#c8f135"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="insight-text">
                <strong>Coinbase connection recommended.</strong> Crypto
                activity may require Form 8949 entries. Connect to auto-import
                your transaction history.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
