"use client";

import { useState } from "react";

type Integration = {
  id: string;
  ico: string;
  name: string;
  vendor: string;
  category: string;
  desc: string;
  status: "active" | "available" | "coming";
  forms: string[];
  badge?: string;
};

const INTEGRATIONS: Integration[] = [
  // Active
  {
    id: "irs",
    ico: "🏛️",
    name: "IRS e-Services",
    vendor: "Internal Revenue Service",
    category: "Government",
    desc: "Direct e-File submission and transcript retrieval via IRS Modernized e-File system.",
    status: "active",
    forms: ["1040", "All e-File"],
    badge: "Official",
  },
  {
    id: "chase",
    ico: "🏦",
    name: "Chase Bank",
    vendor: "JPMorgan Chase",
    category: "Banking",
    desc: "Automatic import of interest income, transactions, and 1099-INT data.",
    status: "active",
    forms: ["1099-INT", "Schedule A"],
  },
  {
    id: "stripe",
    ico: "💳",
    name: "Stripe",
    vendor: "Stripe Inc.",
    category: "Payments",
    desc: "Import payouts, refunds, and 1099-K / 1099-NEC from your Stripe account.",
    status: "active",
    forms: ["1099-NEC", "Schedule C"],
  },
  {
    id: "robinhood",
    ico: "📱",
    name: "Robinhood",
    vendor: "Robinhood Markets",
    category: "Investments",
    desc: "Import 1099-B and cost basis data for capital gains and losses reporting.",
    status: "active",
    forms: ["1099-B", "Form 8949"],
  },

  // Available
  {
    id: "coinbase",
    ico: "₿",
    name: "Coinbase",
    vendor: "Coinbase Global",
    category: "Crypto",
    desc: "Auto-import crypto transactions, cost basis, and gains/losses for Form 8949.",
    status: "available",
    forms: ["Form 8949", "Schedule D"],
  },
  {
    id: "venmo",
    ico: "💜",
    name: "Venmo",
    vendor: "PayPal Holdings",
    category: "Payments",
    desc: "Import business payments received through Venmo for Schedule C reporting.",
    status: "available",
    forms: ["Schedule C"],
  },
  {
    id: "paypal",
    ico: "🅿️",
    name: "PayPal",
    vendor: "PayPal Holdings",
    category: "Payments",
    desc: "Import 1099-K data and business income from your PayPal account.",
    status: "available",
    forms: ["1099-K", "Schedule C"],
  },
  {
    id: "quickbooks",
    ico: "📒",
    name: "QuickBooks",
    vendor: "Intuit Inc.",
    category: "Accounting",
    desc: "Sync profit & loss, expenses, and payroll data directly from QuickBooks.",
    status: "available",
    forms: ["Schedule C", "Schedule E"],
  },
  {
    id: "gusto",
    ico: "👥",
    name: "Gusto",
    vendor: "Gusto Inc.",
    category: "Payroll",
    desc: "Import W-2, payroll summaries, and employer contributions for your employees.",
    status: "available",
    forms: ["W-2", "W-3", "941"],
  },
  {
    id: "fidelity",
    ico: "📈",
    name: "Fidelity",
    vendor: "FMR LLC",
    category: "Investments",
    desc: "Import 1099-DIV, 1099-B, and consolidated 1099 from your Fidelity accounts.",
    status: "available",
    forms: ["1099-DIV", "1099-B"],
  },
  {
    id: "airbnb",
    ico: "🏡",
    name: "Airbnb",
    vendor: "Airbnb Inc.",
    category: "Real Estate",
    desc: "Import rental income, 1099-K, and expenses from your Airbnb host account.",
    status: "available",
    forms: ["Schedule E", "1099-K"],
  },
  {
    id: "square",
    ico: "⬛",
    name: "Square",
    vendor: "Block Inc.",
    category: "Payments",
    desc: "Import point-of-sale transactions and 1099-K data from Square.",
    status: "available",
    forms: ["1099-K", "Schedule C"],
  },

  // Coming soon
  {
    id: "mercury",
    ico: "🪐",
    name: "Mercury",
    vendor: "Mercury Financial",
    category: "Banking",
    desc: "Business checking import for startup and small business tax filings.",
    status: "coming",
    forms: ["Schedule C"],
  },
  {
    id: "wealthfront",
    ico: "📊",
    name: "Wealthfront",
    vendor: "Wealthfront Corp.",
    category: "Investments",
    desc: "Import investment income and automated tax-loss harvesting reports.",
    status: "coming",
    forms: ["1099-DIV", "1099-B"],
  },
  {
    id: "deel",
    ico: "🌐",
    name: "Deel",
    vendor: "Deel Inc.",
    category: "Payroll",
    desc: "Import contractor payments and 1099-NEC from your Deel account.",
    status: "coming",
    forms: ["1099-NEC"],
  },
];

const CATEGORIES_ALL = [
  "All",
  "Government",
  "Banking",
  "Payments",
  "Investments",
  "Crypto",
  "Accounting",
  "Payroll",
  "Real Estate",
];

const STATUS_TAB = ["All", "Active", "Available", "Coming Soon"];

export default function IntegrationsPage() {
  const [catFilter, setCatFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = INTEGRATIONS.filter((i) => {
    if (catFilter !== "All" && i.category !== catFilter) return false;
    if (statusFilter === "Active" && i.status !== "active") return false;
    if (statusFilter === "Available" && i.status !== "available") return false;
    if (statusFilter === "Coming Soon" && i.status !== "coming") return false;
    if (
      search &&
      !i.name.toLowerCase().includes(search.toLowerCase()) &&
      !i.desc.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  const activeCount = INTEGRATIONS.filter((i) => i.status === "active").length;

  return (
    <div className="main-inner">
      {/* Header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Tools</div>
          <h1 className="page-title">
            <em>Integrations</em>
          </h1>
          <p className="page-sub">
            Connect your financial accounts, payroll, and payment platforms
          </p>
        </div>
        <div className="ph-right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--mono)",
              fontSize: 11,
              background: "var(--ghost-4)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-sm)",
              padding: "5px 12px",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle
                cx="4.5"
                cy="4.5"
                r="3"
                stroke="var(--ghost-2)"
                strokeWidth="1.1"
              />
              <path
                d="M7 7l2 2"
                stroke="var(--ghost-2)"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search integrations…"
              style={{
                background: "none",
                border: "none",
                outline: "none",
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--smoke)",
                width: 170,
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
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
          { label: "Active", val: activeCount, color: "var(--lime)" },
          {
            label: "Available",
            val: INTEGRATIONS.filter((i) => i.status === "available").length,
            color: "var(--smoke)",
          },
          {
            label: "Coming Soon",
            val: INTEGRATIONS.filter((i) => i.status === "coming").length,
            color: "var(--ghost-2)",
          },
          { label: "Forms Covered", val: "15+", color: "var(--cyan)" },
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

      {/* Filter bar */}
      <div
        className="fade-in-3"
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Status tabs */}
        <div
          style={{
            display: "flex",
            gap: 3,
            background: "var(--ghost-4)",
            border: "1px solid var(--line)",
            borderRadius: 8,
            padding: 3,
          }}
        >
          {STATUS_TAB.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10.5,
                padding: "4px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s",
                background:
                  statusFilter === s ? "var(--void-3)" : "transparent",
                color: statusFilter === s ? "var(--lime)" : "var(--ghost-2)",
                boxShadow:
                  statusFilter === s ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <div style={{ width: 1, height: 20, background: "var(--line)" }} />
        <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          {CATEGORIES_ALL.map((c) => (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              className={`tab${catFilter === c ? " active" : ""}`}
              style={{
                fontSize: 10.5,
                padding: "4px 10px",
                borderRadius: 6,
                border: "1px solid transparent",
                cursor: "pointer",
                background: "none",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Integration grid */}
      <div
        className="fade-in-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 12,
          marginBottom: 40,
        }}
      >
        {filtered.length === 0 && (
          <div className="empty-state" style={{ gridColumn: "1/-1" }}>
            No integrations match your filters.
          </div>
        )}
        {filtered.map((intg) => (
          <IntegrationCard key={intg.id} intg={intg} />
        ))}
      </div>
    </div>
  );
}

function IntegrationCard({ intg }: { intg: Integration }) {
  const [hovered, setHovered] = useState(false);

  const statusCfg = {
    active: {
      label: "Active",
      color: "var(--green)",
      bg: "rgba(34,212,106,0.1)",
      border: "rgba(34,212,106,0.2)",
      dot: "si-green",
    },
    available: {
      label: "Available",
      color: "var(--ghost-2)",
      bg: "var(--ghost-4)",
      border: "var(--line)",
      dot: "si-grey",
    },
    coming: {
      label: "Coming Soon",
      color: "var(--ghost-2)",
      bg: "var(--ghost-4)",
      border: "var(--line)",
      dot: "si-grey",
    },
  }[intg.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--void-2)",
        borderRadius: "var(--r-lg)",
        border: `1px solid ${intg.status === "active" ? "rgba(34,212,106,0.2)" : hovered ? "var(--ghost-2)" : "var(--line)"}`,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "all 0.2s",
        opacity: intg.status === "coming" ? 0.6 : 1,
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            {intg.ico}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{ fontSize: 13, fontWeight: 500, color: "var(--smoke)" }}
              >
                {intg.name}
              </span>
              {intg.badge && (
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 8.5,
                    color: "rgba(200,241,53,0.75)",
                    background: "rgba(200,241,53,0.06)",
                    border: "1px solid rgba(200,241,53,0.15)",
                    borderRadius: 100,
                    padding: "1px 6px",
                  }}
                >
                  {intg.badge}
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ghost-2)",
                marginTop: 1,
              }}
            >
              {intg.vendor}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            className={`src-indicator ${statusCfg.dot}`}
            style={{ width: 6, height: 6 }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9.5,
              color: statusCfg.color,
            }}
          >
            {statusCfg.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 12,
          color: "var(--ghost)",
          fontWeight: 300,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {intg.desc}
      </p>

      {/* Forms covered */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {intg.forms.map((f) => (
          <span
            key={f}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9.5,
              color: "var(--ghost-2)",
              background: "var(--ghost-4)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "2px 8px",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div>
        {intg.status === "active" && (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn-ghost"
              style={{ fontSize: 11, padding: "5px 12px", flex: 1 }}
            >
              Configure
            </button>
            <button
              className="btn-ghost"
              style={{
                fontSize: 11,
                padding: "5px 12px",
                color: "var(--red)",
                borderColor: "rgba(255,77,77,0.2)",
              }}
            >
              Disconnect
            </button>
          </div>
        )}
        {intg.status === "available" && (
          <button
            className="btn-primary"
            style={{
              fontSize: 11,
              padding: "7px 16px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1v8M1 5h8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Connect
          </button>
        )}
        {intg.status === "coming" && (
          <button
            className="btn-ghost"
            disabled
            style={{
              fontSize: 11,
              padding: "7px 16px",
              width: "100%",
              justifyContent: "center",
              cursor: "not-allowed",
              opacity: 0.5,
            }}
          >
            Notify Me
          </button>
        )}
      </div>
    </div>
  );
}
