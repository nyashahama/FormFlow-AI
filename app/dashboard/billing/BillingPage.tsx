"use client";

import { useState } from "react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    desc: "For individuals filing a simple return.",
    features: [
      "Up to 3 forms",
      "Basic AI prefill",
      "1 data source",
      "Email support",
    ],
    cta: "Downgrade",
    accent: "var(--ghost-2)",
    accentBg: "var(--ghost-4)",
  },
  {
    id: "pro",
    name: "Pro",
    price: 12,
    period: "/ month",
    desc: "For active filers with multiple forms.",
    features: [
      "Unlimited forms",
      "Full AI prefill (94%+ rate)",
      "Up to 10 data sources",
      "Audit trail",
      "Priority support",
    ],
    cta: "Current Plan",
    accent: "var(--lime)",
    accentBg: "rgba(200,241,53,0.06)",
    current: true,
  },
  {
    id: "business",
    name: "Business",
    price: 39,
    period: "/ month",
    desc: "For accountants and multi-entity filers.",
    features: [
      "Everything in Pro",
      "Multi-entity management",
      "Team seats (up to 5)",
      "API access",
      "Dedicated onboarding",
    ],
    cta: "Upgrade",
    accent: "var(--cyan)",
    accentBg: "rgba(0,229,200,0.06)",
  },
];

const INVOICES = [
  {
    date: "Apr 1, 2025",
    desc: "Pro Plan — April 2025",
    amount: "$12.00",
    status: "Paid",
  },
  {
    date: "Mar 1, 2025",
    desc: "Pro Plan — March 2025",
    amount: "$12.00",
    status: "Paid",
  },
  {
    date: "Feb 1, 2025",
    desc: "Pro Plan — February 2025",
    amount: "$12.00",
    status: "Paid",
  },
  {
    date: "Jan 1, 2025",
    desc: "Pro Plan — January 2025",
    amount: "$12.00",
    status: "Paid",
  },
  {
    date: "Dec 1, 2024",
    desc: "Pro Plan — December 2024",
    amount: "$12.00",
    status: "Paid",
  },
];

export default function BillingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="main-inner">
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Account</div>
          <h1 className="page-title">
            <em>Billing</em> & plan
          </h1>
          <p className="page-sub">
            Manage your subscription, payment method, and invoices
          </p>
        </div>
      </div>

      {/* Current plan callout */}
      <div className="welcome-banner fade-in-1" style={{ marginBottom: 14 }}>
        <div className="wb-orb" />
        <div className="wb-left">
          <div className="wb-ico">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2l2 5 5 .5-4 4 1 5L10 14l-4 2.5 1-5-4-4L8 7z"
                stroke="#c8f135"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="wb-text">
            <div className="wb-title">
              You're on the Pro Plan — next billing Apr 1, 2026
            </div>
            <div className="wb-sub">
              $12 / month · Auto-renews · Payment via Visa ···· 4242
            </div>
          </div>
        </div>
        <div className="wb-right">
          <button
            className="btn-ghost"
            style={{ fontSize: 12, padding: "6px 14px" }}
          >
            Cancel Plan
          </button>
          <button
            className="btn-primary"
            style={{ fontSize: 12, padding: "6px 14px" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upgrade to Business
          </button>
        </div>
      </div>

      {/* Plan picker */}
      <div className="panel fade-in-2" style={{ marginBottom: 14 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="3"
                  width="10"
                  height="7"
                  rx="1.5"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path d="M1 5h10" stroke="#c8f135" strokeWidth="1.1" />
                <path
                  d="M4 8h4"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            Plans
          </div>
          <div className="panel-meta">
            {/* Annual toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: annual ? "var(--ghost-2)" : "var(--smoke)",
                }}
              >
                Monthly
              </span>
              <div
                onClick={() => setAnnual((v) => !v)}
                style={{
                  width: 36,
                  height: 20,
                  borderRadius: 100,
                  flexShrink: 0,
                  background: annual ? "var(--lime)" : "var(--ghost-3)",
                  border: `1px solid ${annual ? "transparent" : "var(--line)"}`,
                  position: "relative",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 2,
                    left: annual ? 18 : 2,
                    width: 14,
                    height: 14,
                    borderRadius: 100,
                    background: annual ? "var(--void)" : "var(--ghost-2)",
                    transition: "left 0.2s cubic-bezier(0.34,1.2,0.64,1)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: annual ? "var(--smoke)" : "var(--ghost-2)",
                }}
              >
                Annual
                <span
                  style={{
                    marginLeft: 6,
                    fontFamily: "var(--mono)",
                    fontSize: 9.5,
                    color: "rgba(200,241,53,0.75)",
                    background: "rgba(200,241,53,0.06)",
                    border: "1px solid rgba(200,241,53,0.15)",
                    borderRadius: 100,
                    padding: "2px 7px",
                  }}
                >
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                style={{
                  borderRadius: "var(--r-md)",
                  border: `1px solid ${plan.current ? plan.accent + "40" : "var(--line)"}`,
                  background: plan.current ? plan.accentBg : "var(--ghost-4)",
                  padding: "20px 20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
              >
                {plan.current && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      right: 16,
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      fontWeight: 600,
                      color: "var(--void)",
                      background: "var(--lime)",
                      borderRadius: "0 0 6px 6px",
                      padding: "2px 10px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Current
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    color: plan.accent,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 34,
                      color: "var(--smoke)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    $
                    {annual && plan.price > 0
                      ? Math.round(plan.price * 0.8)
                      : plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 12,
                      color: "var(--ghost-2)",
                      fontWeight: 300,
                    }}
                  >
                    {plan.price === 0 ? "" : plan.period}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 12,
                    color: "var(--ghost)",
                    fontWeight: 300,
                    marginBottom: 16,
                    lineHeight: 1.5,
                  }}
                >
                  {plan.desc}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 18,
                    flex: 1,
                  }}
                >
                  {plan.features.map((f, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2 2 4-4"
                          stroke={plan.accent}
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--ghost)",
                          fontWeight: 300,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "9px 14px",
                    fontFamily: "var(--sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    borderRadius: "var(--r-sm)",
                    cursor: plan.current ? "default" : "pointer",
                    border: plan.current
                      ? "1px solid rgba(200,241,53,0.2)"
                      : "1px solid var(--line)",
                    background: plan.current
                      ? "rgba(200,241,53,0.08)"
                      : "var(--ghost-3)",
                    color: plan.current ? "var(--lime)" : "var(--ghost)",
                    transition: "all 0.2s",
                    opacity: plan.current ? 0.8 : 1,
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="panel fade-in-3" style={{ marginBottom: 14 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="3"
                  width="10"
                  height="7"
                  rx="1.5"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path d="M1 6h10" stroke="#c8f135" strokeWidth="1.1" />
              </svg>
            </div>
            Payment Method
          </div>
          <button
            className="btn-ghost"
            style={{ fontSize: 11, padding: "4px 10px", gap: 4 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1v8M1 5h8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Add Card
          </button>
        </div>
        <div className="panel-body">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Active card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                borderRadius: "var(--r-md)",
                border: "1px solid rgba(200,241,53,0.2)",
                background: "rgba(200,241,53,0.04)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 28,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #1a1a40, #0c0c20)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="16" viewBox="0 0 32 20" fill="none">
                  <rect
                    width="32"
                    height="20"
                    rx="3"
                    fill="#1A1F71"
                    opacity="0.4"
                  />
                  <circle cx="12" cy="10" r="6" fill="#EB001B" opacity="0.7" />
                  <circle cx="20" cy="10" r="6" fill="#F79E1B" opacity="0.7" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--smoke)",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  Visa ···· ···· ···· 4242
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    color: "var(--ghost-2)",
                    marginTop: 2,
                  }}
                >
                  Expires 08/27 · Default
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9.5,
                  color: "rgba(200,241,53,0.75)",
                  background: "rgba(200,241,53,0.06)",
                  border: "1px solid rgba(200,241,53,0.15)",
                  borderRadius: 100,
                  padding: "3px 9px",
                }}
              >
                Default
              </span>
              <button
                className="btn-ghost"
                style={{ fontSize: 11, padding: "4px 10px" }}
              >
                Remove
              </button>
            </div>
            {/* Add another card placeholder */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 16px",
                borderRadius: "var(--r-md)",
                border: "1px dashed var(--line)",
                background: "var(--ghost-4)",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 28,
                  borderRadius: 6,
                  background: "var(--ghost-3)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2v8M2 6h8"
                    stroke="var(--ghost-2)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--ghost-2)",
                  fontWeight: 300,
                }}
              >
                Add a new payment method
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice history */}
      <div className="panel fade-in-4" style={{ marginBottom: 40 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="2"
                  y="1"
                  width="8"
                  height="10"
                  rx="1.5"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path
                  d="M4 4h4M4 6.5h4M4 9h2"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            Invoice History
          </div>
          <button
            className="btn-ghost"
            style={{ fontSize: 11, padding: "4px 10px" }}
          >
            Download All
          </button>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          <div style={{ padding: "0 20px" }}>
            {INVOICES.map((inv, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom:
                    i < INVOICES.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    color: "var(--ghost-2)",
                    width: 100,
                    flexShrink: 0,
                  }}
                >
                  {inv.date}
                </div>
                <div
                  style={{
                    flex: 1,
                    fontSize: 13,
                    color: "var(--ghost)",
                    fontWeight: 300,
                  }}
                >
                  {inv.desc}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--smoke)",
                    fontWeight: 500,
                    width: 60,
                    textAlign: "right",
                  }}
                >
                  {inv.amount}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    width: 60,
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--green)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      color: "var(--green)",
                    }}
                  >
                    {inv.status}
                  </span>
                </div>
                <button
                  className="btn-ghost"
                  style={{ fontSize: 11, padding: "3px 10px", flexShrink: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v6M2 7l3 2 3-2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 9h8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
