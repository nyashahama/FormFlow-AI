"use client";

import { useState } from "react";

type LogEntry = {
  id: string;
  type: "ai" | "pull" | "warn" | "ok" | "err" | "user";
  title: string;
  detail: string;
  time: string;
  date: string;
  badge: string;
  badgeClass: string;
  dotClass: string;
  form?: string;
  source?: string;
  user?: string;
};

const LOG: LogEntry[] = [
  {
    id: "a1",
    type: "ai",
    title: "AI Prefill",
    detail:
      "Form 1040 line 12b populated from Schedule A data · $28,750 deductions applied",
    time: "2:14 PM",
    date: "Today",
    badge: "AI",
    badgeClass: "ab-ai",
    dotClass: "ad-ai",
    form: "Form 1040",
    source: "Schedule A",
    user: "System",
  },
  {
    id: "a2",
    type: "pull",
    title: "Data Pull",
    detail:
      "Robinhood 1099-B imported · 14 transactions · $3,420 net gain calculated",
    time: "1:58 PM",
    date: "Today",
    badge: "PULL",
    badgeClass: "ab-pull",
    dotClass: "ad-pull",
    form: "Form 8949",
    source: "Robinhood",
    user: "System",
  },
  {
    id: "a3",
    type: "warn",
    title: "Conflict Detected",
    detail:
      "Schedule C Line 1 vs 1099-NEC: $240 discrepancy flagged for review · Manual verification required",
    time: "1:32 PM",
    date: "Today",
    badge: "WARN",
    badgeClass: "ab-warn",
    dotClass: "ad-warn",
    form: "Schedule C",
    source: "1099-NEC / Stripe",
    user: "System",
  },
  {
    id: "a4",
    type: "ok",
    title: "Filed",
    detail:
      "Schedule A successfully submitted to IRS e-File · Confirmation #E24-8821 · Accepted",
    time: "11:04 AM",
    date: "Today",
    badge: "FILED",
    badgeClass: "ab-ok",
    dotClass: "ad-ok",
    form: "Schedule A",
    source: "IRS e-Services",
    user: "Jordan Davis",
  },
  {
    id: "a5",
    type: "ai",
    title: "AI Insight",
    detail:
      "Home office deduction opportunity detected · Additional $1,240 eligible under Section 280A",
    time: "4:47 PM",
    date: "Yesterday",
    badge: "AI",
    badgeClass: "ab-ai",
    dotClass: "ad-ai",
    form: "Form 8829",
    source: "Mortgage / 1098",
    user: "System",
  },
  {
    id: "a6",
    type: "user",
    title: "Field Edited",
    detail:
      "Schedule C Line 28 updated manually · Other expenses changed from $4,200 to $4,440",
    time: "3:12 PM",
    date: "Yesterday",
    badge: "EDIT",
    badgeClass: "ab-pull",
    dotClass: "ad-pull",
    form: "Schedule C",
    source: "—",
    user: "Jordan Davis",
  },
  {
    id: "a7",
    type: "pull",
    title: "Data Pull",
    detail:
      "Chase Bank statement imported · 847 transactions · Interest income $312.40 found",
    time: "10:22 AM",
    date: "Yesterday",
    badge: "PULL",
    badgeClass: "ab-pull",
    dotClass: "ad-pull",
    form: "1099-INT",
    source: "Chase Bank",
    user: "System",
  },
  {
    id: "a8",
    type: "ok",
    title: "Filed",
    detail:
      "Form 1099-INT filed to IRS e-File · Confirmation #E24-7742 · Accepted",
    time: "9:05 AM",
    date: "Yesterday",
    badge: "FILED",
    badgeClass: "ab-ok",
    dotClass: "ad-ok",
    form: "1099-INT",
    source: "IRS e-Services",
    user: "Jordan Davis",
  },
  {
    id: "a9",
    type: "pull",
    title: "W-2 Imported",
    detail:
      "Employer W-2 PDF parsed · Acme Corp · EIN 47-1822900 · Box 1 wages $84,200",
    time: "2:30 PM",
    date: "Apr 9",
    badge: "PULL",
    badgeClass: "ab-pull",
    dotClass: "ad-pull",
    form: "Form 1040",
    source: "Employer W-2",
    user: "System",
  },
  {
    id: "a10",
    type: "ai",
    title: "AI Prefill",
    detail:
      "Form 1040 auto-prefilled from W-2, 1099-INT, and bank imports · 18 of 19 fields complete",
    time: "2:31 PM",
    date: "Apr 9",
    badge: "AI",
    badgeClass: "ab-ai",
    dotClass: "ad-ai",
    form: "Form 1040",
    source: "Multi-source",
    user: "System",
  },
  {
    id: "a11",
    type: "err",
    title: "Sync Failed",
    detail:
      "Robinhood OAuth token expired · Re-authentication required to resume data sync",
    time: "8:14 AM",
    date: "Apr 8",
    badge: "ERR",
    badgeClass: "ab-err",
    dotClass: "ad-err",
    form: "Form 8949",
    source: "Robinhood",
    user: "System",
  },
  {
    id: "a12",
    type: "ok",
    title: "Session Started",
    detail:
      "Filing session #4829 initiated · Tax Year 2025 · All data sources active",
    time: "7:58 AM",
    date: "Apr 8",
    badge: "START",
    badgeClass: "ab-ok",
    dotClass: "ad-ok",
    form: "—",
    source: "—",
    user: "Jordan Davis",
  },
];

const TYPE_FILTERS = [
  "All",
  "AI",
  "Data Pull",
  "Filed",
  "Conflicts",
  "Errors",
  "Manual",
];

const TYPE_MAP: Record<string, LogEntry["type"][]> = {
  AI: ["ai"],
  "Data Pull": ["pull"],
  Filed: ["ok"],
  Conflicts: ["warn"],
  Errors: ["err"],
  Manual: ["user"],
};

const FORM_FILTERS = [
  "All Forms",
  "Form 1040",
  "Schedule C",
  "Schedule A",
  "Form 8949",
  "1099-INT",
];

export default function AuditTrailPage() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [formFilter, setFormFilter] = useState("All Forms");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = LOG.filter((e) => {
    if (typeFilter !== "All" && !TYPE_MAP[typeFilter]?.includes(e.type))
      return false;
    if (formFilter !== "All Forms" && e.form !== formFilter) return false;
    if (
      search &&
      !e.title.toLowerCase().includes(search.toLowerCase()) &&
      !e.detail.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  // Group by date
  const groups: Record<string, LogEntry[]> = {};
  for (const e of filtered) {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  }

  return (
    <div className="main-inner">
      {/* Header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Tools</div>
          <h1 className="page-title">
            Audit <em>Trail</em>
          </h1>
          <p className="page-sub">
            Full immutable history of every AI action, data pull, and user edit
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
            Live · Session #4829
          </div>
          <button className="btn-ghost" style={{ fontSize: 12 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6a4 4 0 1 0 8 0M6 1v7M4 3l2-2 2 2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: "rotate(180deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="fade-in-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 10,
          marginBottom: 20,
        }}
      >
        {[
          { label: "Total Events", val: LOG.length, color: "var(--smoke)" },
          {
            label: "AI Actions",
            val: LOG.filter((e) => e.type === "ai").length,
            color: "var(--lime)",
          },
          {
            label: "Filed",
            val: LOG.filter((e) => e.type === "ok").length,
            color: "var(--green)",
          },
          {
            label: "Conflicts",
            val: LOG.filter((e) => e.type === "warn").length,
            color: "var(--amber)",
          },
          {
            label: "Errors",
            val: LOG.filter((e) => e.type === "err").length,
            color: "var(--red)",
          },
        ].map(({ label, val, color }) => (
          <div
            key={label}
            style={{
              background: "var(--void-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
              padding: "14px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9.5,
                color: "var(--ghost-2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: 28,
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

      {/* Filters */}
      <div
        className="fade-in-3"
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 16,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          {TYPE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setTypeFilter(f)}
              className={`tab${typeFilter === f ? " active" : ""}`}
              style={{
                fontSize: 10.5,
                padding: "4px 11px",
                borderRadius: 6,
                border: "1px solid transparent",
                cursor: "pointer",
                background: "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{ width: 1, height: 20, background: "var(--line)" }} />
        <select
          value={formFilter}
          onChange={(e) => setFormFilter(e.target.value)}
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            color: "var(--ghost)",
            background: "var(--ghost-4)",
            border: "1px solid var(--line)",
            borderRadius: 6,
            padding: "4px 10px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {FORM_FILTERS.map((f) => (
            <option key={f} value={f} style={{ background: "#0c0c10" }}>
              {f}
            </option>
          ))}
        </select>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "var(--ghost-4)",
            border: "1px solid var(--line)",
            borderRadius: 7,
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
            placeholder="Search events…"
            style={{
              background: "none",
              border: "none",
              outline: "none",
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--smoke)",
              width: 160,
            }}
          />
        </div>
      </div>

      {/* Log */}
      <div className="panel fade-in-4" style={{ marginBottom: 40 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="10"
                  height="10"
                  rx="1.5"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path d="M1 4h10" stroke="#c8f135" strokeWidth="1.1" />
              </svg>
            </div>
            Event Log
          </div>
          <div className="panel-meta">{filtered.length} events</div>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          {Object.entries(groups).length === 0 ? (
            <div className="empty-state">
              No events match the current filters.
            </div>
          ) : (
            Object.entries(groups).map(([date, entries]) => (
              <div key={date}>
                {/* Date separator */}
                <div
                  style={{
                    padding: "8px 20px",
                    background: "var(--void-3)",
                    borderBottom: "1px solid var(--line)",
                    fontFamily: "var(--mono)",
                    fontSize: 9.5,
                    color: "var(--ghost-2)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span>{date}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>{entries.length} events</span>
                </div>
                <div style={{ padding: "0 20px" }}>
                  {entries.map((entry) => (
                    <div key={entry.id}>
                      <div
                        className="activity-row"
                        onClick={() =>
                          setExpanded(expanded === entry.id ? null : entry.id)
                        }
                        style={{
                          cursor: "pointer",
                          borderBottom:
                            expanded === entry.id ? "none" : undefined,
                        }}
                      >
                        <div className="act-dot-wrap" style={{ paddingTop: 5 }}>
                          <div className={`act-dot ${entry.dotClass}`} />
                        </div>
                        <div className="act-content">
                          <div className="act-main">
                            <strong>{entry.title}</strong>
                            {" — "}
                            {entry.detail}
                          </div>
                          <div className="act-time">{entry.time}</div>
                        </div>
                        <div className={`act-badge ${entry.badgeClass}`}>
                          {entry.badge}
                        </div>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          style={{
                            color: "var(--ghost-2)",
                            transition: "transform 0.2s",
                            transform:
                              expanded === entry.id ? "rotate(180deg)" : "none",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="M2 4l3 3 3-3"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Expanded row */}
                      {expanded === entry.id && (
                        <div
                          style={{
                            marginLeft: 20,
                            marginBottom: 12,
                            padding: "12px 16px",
                            background: "var(--ghost-4)",
                            borderRadius: "var(--r-sm)",
                            border: "1px solid var(--line)",
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: 16,
                          }}
                        >
                          {[
                            { label: "FORM", val: entry.form || "—" },
                            { label: "SOURCE", val: entry.source || "—" },
                            { label: "ACTOR", val: entry.user || "—" },
                            { label: "SESSION", val: "#4829" },
                          ].map(({ label, val }) => (
                            <div key={label}>
                              <div
                                style={{
                                  fontFamily: "var(--mono)",
                                  fontSize: 9,
                                  color: "var(--ghost-2)",
                                  letterSpacing: "0.1em",
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
                                  fontWeight: 400,
                                }}
                              >
                                {val}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
