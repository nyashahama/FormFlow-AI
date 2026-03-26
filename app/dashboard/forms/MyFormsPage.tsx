"use client";

import { useState } from "react";

const ALL_FORMS = [
  {
    id: 1,
    name: "Form 1040",
    desc: "Individual Tax Return",
    year: "2025",
    updated: "14 min ago",
    fields: "19/20",
    status: "In Review",
    statusClass: "sp-review",
    progress: 95,
    source: "IRS e-File",
    category: "Federal",
    tag: "active",
  },
  {
    id: 2,
    name: "Schedule C",
    desc: "Business Profit & Loss",
    year: "2025",
    updated: "1h ago",
    fields: "14/22",
    status: "Conflict",
    statusClass: "sp-error",
    progress: 64,
    source: "Manual",
    category: "Federal",
    tag: "active",
  },
  {
    id: 3,
    name: "Form 8949",
    desc: "Capital Gains & Losses",
    year: "2025",
    updated: "3h ago",
    fields: "12/12",
    status: "Sign Needed",
    statusClass: "sp-review",
    progress: 98,
    source: "Robinhood",
    category: "Federal",
    tag: "active",
  },
  {
    id: 4,
    name: "Schedule A",
    desc: "Itemized Deductions",
    year: "2025",
    updated: "5h ago",
    fields: "8/8",
    status: "Filed ✓",
    statusClass: "sp-done",
    progress: 100,
    source: "IRS e-File",
    category: "Federal",
    tag: "filed",
  },
  {
    id: 5,
    name: "Form 1099-INT",
    desc: "Interest Income",
    year: "2025",
    updated: "Yesterday",
    fields: "6/6",
    status: "Filed ✓",
    statusClass: "sp-done",
    progress: 100,
    source: "Chase Bank",
    category: "Federal",
    tag: "filed",
  },
  {
    id: 6,
    name: "Form W-4",
    desc: "Withholding Certificate",
    year: "2025",
    updated: "Not started",
    fields: "0/12",
    status: "Not Started",
    statusClass: "sp-draft",
    progress: 0,
    source: "AI Ready",
    category: "Federal",
    tag: "draft",
  },
  {
    id: 7,
    name: "Schedule E",
    desc: "Supplemental Income",
    year: "2025",
    updated: "3 days ago",
    fields: "4/16",
    status: "Draft",
    statusClass: "sp-draft",
    progress: 25,
    source: "Manual",
    category: "Federal",
    tag: "draft",
  },
  {
    id: 8,
    name: "Form 1040",
    desc: "Individual Tax Return",
    year: "2024",
    updated: "Apr 12, 2024",
    fields: "20/20",
    status: "Filed ✓",
    statusClass: "sp-done",
    progress: 100,
    source: "IRS e-File",
    category: "Federal",
    tag: "filed",
  },
  {
    id: 9,
    name: "Schedule A",
    desc: "Itemized Deductions",
    year: "2024",
    updated: "Apr 10, 2024",
    fields: "8/8",
    status: "Filed ✓",
    statusClass: "sp-done",
    progress: 100,
    source: "IRS e-File",
    category: "Federal",
    tag: "filed",
  },
];

const FILTERS = ["All", "Active", "Draft", "Filed"] as const;
type Filter = (typeof FILTERS)[number];

const PROGRESS_COLOR = (p: number) => {
  if (p === 100) return "mpf-green";
  if (p >= 80) return "mpf-lime";
  if (p >= 50) return "mpf-cyan";
  return "mpf-red";
};

export default function MyFormsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");

  const filtered = ALL_FORMS.filter((f) => {
    const matchFilter =
      filter === "All" ||
      (filter === "Active" && f.tag === "active") ||
      (filter === "Draft" && f.tag === "draft") ||
      (filter === "Filed" && f.tag === "filed");
    const matchSearch =
      search === "" ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const counts = {
    All: ALL_FORMS.length,
    Active: ALL_FORMS.filter((f) => f.tag === "active").length,
    Draft: ALL_FORMS.filter((f) => f.tag === "draft").length,
    Filed: ALL_FORMS.filter((f) => f.tag === "filed").length,
  };

  return (
    <div className="main-inner">
      {/* Page header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Forms</div>
          <h1 className="page-title">
            My <em>forms</em>
          </h1>
          <p className="page-sub">
            Tax year 2025 · {ALL_FORMS.length} total forms
          </p>
        </div>
        <div className="ph-right">
          <button className="btn-ghost">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1 3h9M2.5 5.5h6M4 8h3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Filter
          </button>
          <button className="btn-ghost">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1v9M1 5.5h9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Import
          </button>
          <button className="btn-primary">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1v10M1 6h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            New Form
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="forms-stat-strip fade-in-2">
        {[
          { label: "Active", val: counts.Active, color: "var(--lime)" },
          { label: "Draft", val: counts.Draft, color: "var(--ghost-2)" },
          { label: "Filed", val: counts.Filed, color: "var(--green)" },
          { label: "Total", val: counts.All, color: "var(--smoke)" },
        ].map((s) => (
          <div className="fss-item" key={s.label}>
            <span className="fss-val" style={{ color: s.color }}>
              {s.val}
            </span>
            <span className="fss-label">{s.label}</span>
          </div>
        ))}
        <div className="fss-sep" />
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--ghost-2)",
          }}
        >
          Tax Year
          <span style={{ color: "var(--lime)", marginLeft: 6 }}>2025</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="forms-toolbar fade-in-3">
        <div className="tab-bar">
          {FILTERS.map((f) => (
            <div
              key={f}
              className={`tab${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="tab-count">{counts[f]}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="forms-search">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <circle
                cx="5"
                cy="5"
                r="3.5"
                stroke="rgba(240,237,232,0.22)"
                strokeWidth="1.2"
              />
              <path
                d="M8 8l2 2"
                stroke="rgba(240,237,232,0.22)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <input
              placeholder="Search forms…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="view-toggle">
            <button
              className={`vt-btn${view === "list" ? " active" : ""}`}
              onClick={() => setView("list")}
              title="List view"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 3h8M2 6h8M2 9h8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className={`vt-btn${view === "grid" ? " active" : ""}`}
              onClick={() => setView("grid")}
              title="Grid view"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="4"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="7"
                  y="1"
                  width="4"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="1"
                  y="7"
                  width="4"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="7"
                  y="7"
                  width="4"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Forms list / grid */}
      {filtered.length === 0 ? (
        <div className="panel fade-in-4">
          <div className="empty-state">
            <div style={{ fontSize: 24, marginBottom: 8 }}>📄</div>
            No forms match your search.
          </div>
        </div>
      ) : view === "list" ? (
        <div
          className="panel fade-in-4"
          style={{ padding: 0, overflow: "hidden" }}
        >
          <div className="forms-list-header">
            <span style={{ flex: "0 0 40px" }}></span>
            <span style={{ flex: 1 }}>Form</span>
            <span style={{ width: 100 }}>Source</span>
            <span style={{ width: 80 }}>Fields</span>
            <span style={{ width: 120 }}>Progress</span>
            <span style={{ width: 110 }}>Status</span>
            <span style={{ width: 32 }}></span>
          </div>
          {filtered.map((form, idx) => (
            <div
              className="forms-list-row"
              key={form.id}
              style={{ animationDelay: `${idx * 30}ms` }}
            >
              <div className="flr-ico">📄</div>
              <div className="flr-info">
                <div className="flr-name">
                  {form.name}
                  <span className="flr-year">{form.year}</span>
                </div>
                <div className="flr-desc">
                  {form.desc} · {form.updated}
                </div>
              </div>
              <div className="flr-source">{form.source}</div>
              <div className="flr-fields">{form.fields}</div>
              <div className="flr-progress">
                <div className="mini-prog" style={{ flex: 1 }}>
                  <div
                    className={`mini-prog-fill ${PROGRESS_COLOR(form.progress)}`}
                    style={{ width: `${form.progress}%` }}
                  />
                </div>
                <span className="flr-pct">{form.progress}%</span>
              </div>
              <div>
                <div className={`status-pill ${form.statusClass}`}>
                  {form.status}
                </div>
              </div>
              <button className="flr-action">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M5 3l4 3-4 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="forms-card-grid fade-in-4">
          {filtered.map((form, idx) => (
            <div
              className="form-card"
              key={form.id}
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="fc-head">
                <div className="fc-ico">📄</div>
                <div className={`status-pill ${form.statusClass}`}>
                  {form.status}
                </div>
              </div>
              <div className="fc-name">{form.name}</div>
              <div className="fc-desc">{form.desc}</div>
              <div className="fc-meta">
                <span>{form.year}</span>
                <span>·</span>
                <span>{form.fields} fields</span>
                <span>·</span>
                <span>{form.source}</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--ghost-2)",
                    }}
                  >
                    Progress
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--ghost)",
                    }}
                  >
                    {form.progress}%
                  </span>
                </div>
                <div className="mini-prog">
                  <div
                    className={`mini-prog-fill ${PROGRESS_COLOR(form.progress)}`}
                    style={{ width: `${form.progress}%` }}
                  />
                </div>
              </div>
              <div className="fc-footer">
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--ghost-2)",
                  }}
                >
                  {form.updated}
                </span>
                <button
                  className="btn-ghost"
                  style={{ fontSize: 11, padding: "4px 10px" }}
                >
                  Open →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .forms-stat-strip {
          display: flex;
          align-items: center;
          gap: 0;
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 14px 20px;
          margin-bottom: 20px;
        }
        .fss-item {
          display: flex;
          align-items: baseline;
          gap: 7px;
          padding: 0 20px 0 0;
          margin: 0 20px 0 0;
          border-right: 1px solid var(--line);
        }
        .fss-item:last-of-type { border-right: none; }
        .fss-val { font-family: var(--serif); font-size: 28px; line-height: 1; letter-spacing: -0.03em; }
        .fss-label { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; }
        .fss-sep { width: 1px; height: 24px; background: var(--line); margin: 0 20px; }

        .forms-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .tab-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--ghost-3);
          border-radius: 100px;
          padding: 0 6px;
          font-size: 9px;
          color: var(--ghost-2);
          margin-left: 5px;
          min-width: 16px;
        }
        .tab.active .tab-count {
          background: rgba(200,241,53,0.15);
          color: var(--lime);
        }

        .forms-search {
          display: flex;
          align-items: center;
          gap: 7px;
          background: var(--ghost-4);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          padding: 5px 12px;
          transition: all 0.2s;
        }
        .forms-search:focus-within {
          border-color: rgba(200,241,53,0.3);
          background: rgba(200,241,53,0.02);
        }
        .forms-search input {
          background: none;
          border: none;
          outline: none;
          font-family: var(--mono);
          font-size: 11px;
          color: var(--smoke);
          width: 150px;
        }
        .forms-search input::placeholder { color: var(--ghost-2); }

        .view-toggle {
          display: flex;
          align-items: center;
          background: var(--ghost-4);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          overflow: hidden;
        }
        .vt-btn {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--ghost-2);
          cursor: pointer;
          transition: all 0.15s;
        }
        .vt-btn:hover { color: var(--ghost); background: var(--ghost-3); }
        .vt-btn.active { color: var(--lime); background: rgba(200,241,53,0.08); }

        .forms-list-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          border-bottom: 1px solid var(--line);
          font-family: var(--mono);
          font-size: 9.5px;
          color: var(--ghost-2);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .forms-list-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 20px;
          border-bottom: 1px solid var(--line-2);
          transition: background 0.15s;
          animation: floatUp 0.4s cubic-bezier(0.16,1,0.3,1) both;
          cursor: pointer;
        }
        .forms-list-row:last-child { border-bottom: none; }
        .forms-list-row:hover { background: var(--ghost-4); }

        .flr-ico { font-size: 16px; flex: 0 0 40px; text-align: center; }
        .flr-info { flex: 1; min-width: 0; }
        .flr-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--smoke);
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 2px;
        }
        .flr-year {
          font-family: var(--mono);
          font-size: 9px;
          color: var(--ghost-2);
          background: var(--ghost-3);
          padding: 1px 6px;
          border-radius: 100px;
          border: 1px solid var(--line);
        }
        .flr-desc { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }
        .flr-source { width: 100px; font-family: var(--mono); font-size: 10px; color: var(--ghost); }
        .flr-fields { width: 80px; font-family: var(--mono); font-size: 10px; color: var(--ghost); }
        .flr-progress { width: 120px; display: flex; align-items: center; gap: 7px; }
        .flr-pct { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); flex-shrink: 0; }

        .flr-action {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          border-radius: 7px;
          background: none;
          color: var(--ghost-2);
          cursor: pointer;
          transition: all 0.15s;
        }
        .flr-action:hover {
          background: var(--ghost-3);
          border-color: var(--line);
          color: var(--smoke);
        }

        .forms-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }
        .form-card {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s;
          animation: floatUp 0.4s cubic-bezier(0.16,1,0.3,1) both;
          cursor: pointer;
        }
        .form-card:hover {
          border-color: rgba(200,241,53,0.2);
          background: var(--void-4);
          transform: translateY(-1px);
        }
        .fc-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
        .fc-ico { font-size: 18px; }
        .fc-name { font-size: 15px; font-weight: 500; color: var(--smoke); letter-spacing: -0.01em; }
        .fc-desc { font-size: 12px; color: var(--ghost); }
        .fc-meta { display: flex; align-items: center; gap: 5px; font-family: var(--mono); font-size: 10px; color: var(--ghost-2); flex-wrap: wrap; }
        .fc-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--line); }
      `}</style>
    </div>
  );
}
