"use client";

import { useState } from "react";

const IN_PROGRESS_FORMS = [
  {
    id: 1,
    name: "Form 1040",
    desc: "Individual Tax Return",
    year: "2025",
    status: "In Review",
    statusClass: "sp-review",
    progress: 95,
    fieldsComplete: 19,
    fieldsTotal: 20,
    dueDate: "Apr 15, 2025",
    dueDays: 4,
    urgent: true,
    source: "IRS e-File",
    aiPrefilled: 18,
    lastAction: "AI prefilled line 12b from Schedule A",
    lastActionTime: "14 min ago",
    steps: [
      { label: "Personal Info", done: true },
      { label: "Income", done: true },
      { label: "Deductions", done: true },
      { label: "Credits", done: true },
      { label: "Review", done: false },
      { label: "Sign & File", done: false },
    ],
  },
  {
    id: 2,
    name: "Schedule C",
    desc: "Business Profit & Loss",
    year: "2025",
    status: "Conflict",
    statusClass: "sp-error",
    progress: 64,
    fieldsComplete: 14,
    fieldsTotal: 22,
    dueDate: "Apr 15, 2025",
    dueDays: 4,
    urgent: true,
    source: "Manual",
    aiPrefilled: 9,
    lastAction: "Conflict on Line 1 vs 1099-NEC ($240 discrepancy)",
    lastActionTime: "1h ago",
    steps: [
      { label: "Business Info", done: true },
      { label: "Income", done: false },
      { label: "Expenses", done: false },
      { label: "Review", done: false },
      { label: "Sign & File", done: false },
    ],
  },
  {
    id: 3,
    name: "Form 8949",
    desc: "Capital Gains & Losses",
    year: "2025",
    status: "Sign Needed",
    statusClass: "sp-review",
    progress: 98,
    fieldsComplete: 12,
    fieldsTotal: 12,
    dueDate: "Apr 15, 2025",
    dueDays: 4,
    urgent: false,
    source: "Robinhood",
    aiPrefilled: 12,
    lastAction: "All 14 Robinhood transactions imported & reconciled",
    lastActionTime: "3h ago",
    steps: [
      { label: "Transactions", done: true },
      { label: "Gains/Losses", done: true },
      { label: "Review", done: true },
      { label: "Sign", done: false },
      { label: "File", done: false },
    ],
  },
  {
    id: 4,
    name: "Schedule E",
    desc: "Supplemental Income",
    year: "2025",
    status: "Draft",
    statusClass: "sp-draft",
    progress: 25,
    fieldsComplete: 4,
    fieldsTotal: 16,
    dueDate: "Apr 15, 2025",
    dueDays: 4,
    urgent: false,
    source: "Manual",
    aiPrefilled: 2,
    lastAction: "Started from prior year data",
    lastActionTime: "3 days ago",
    steps: [
      { label: "Rental Income", done: true },
      { label: "Expenses", done: false },
      { label: "Depreciation", done: false },
      { label: "Review", done: false },
      { label: "Sign & File", done: false },
    ],
  },
];

export default function InProgressPage() {
  const [expanded, setExpanded] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const urgentCount = IN_PROGRESS_FORMS.filter((f) => f.urgent).length;

  return (
    <div className="main-inner">
      {/* Header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Forms</div>
          <h1 className="page-title">
            In <em>progress</em>
          </h1>
          <p className="page-sub">
            {IN_PROGRESS_FORMS.length} active forms · {urgentCount} due within 7
            days
          </p>
        </div>
        <div className="ph-right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--amber)",
              background: "rgba(240,160,48,0.08)",
              border: "1px solid rgba(240,160,48,0.2)",
              borderRadius: "var(--r-sm)",
              padding: "6px 12px",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 2v3.5M5 7v.5"
                stroke="#f0a030"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="5" cy="5" r="4" stroke="#f0a030" strokeWidth="1.1" />
            </svg>
            Apr 15 deadline in 4 days
          </div>
          <button className="btn-primary">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1l1.2 2.8L10 4.3 7.8 6.4l.5 3L6 7.8l-2.3 1.6.5-3L2 4.3l2.8-.5z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
            </svg>
            AI Auto-Complete All
          </button>
        </div>
      </div>

      {/* Progress overview strip */}
      <div className="ip-overview-strip fade-in-2">
        <div className="ip-ov-item">
          <div className="ip-ov-label">Overall Completion</div>
          <div className="ip-ov-bar-wrap">
            <div className="ip-ov-bar">
              <div className="ip-ov-fill" style={{ width: "71%" }} />
            </div>
            <span className="ip-ov-pct">71%</span>
          </div>
        </div>
        <div className="ip-ov-sep" />
        <div className="ip-ov-stats">
          <div className="ip-ov-stat">
            <span className="ip-ov-stat-val" style={{ color: "var(--lime)" }}>
              49
            </span>
            <span className="ip-ov-stat-label">Fields Done</span>
          </div>
          <div className="ip-ov-stat">
            <span className="ip-ov-stat-val" style={{ color: "var(--ghost)" }}>
              70
            </span>
            <span className="ip-ov-stat-label">Total Fields</span>
          </div>
          <div className="ip-ov-stat">
            <span className="ip-ov-stat-val" style={{ color: "var(--cyan)" }}>
              41
            </span>
            <span className="ip-ov-stat-label">AI Prefilled</span>
          </div>
          <div className="ip-ov-stat">
            <span className="ip-ov-stat-val" style={{ color: "var(--red)" }}>
              1
            </span>
            <span className="ip-ov-stat-label">Conflicts</span>
          </div>
        </div>
      </div>

      {/* Form cards */}
      <div className="ip-form-list fade-in-3">
        {IN_PROGRESS_FORMS.map((form, idx) => {
          const isOpen = expanded === form.id;
          return (
            <div
              key={form.id}
              className={`ip-form-card${isOpen ? " open" : ""}${form.urgent ? " urgent" : ""}`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Card header — always visible */}
              <div
                className="ip-card-head"
                onClick={() => toggleExpand(form.id)}
              >
                <div className="ip-card-left">
                  <div className="ip-card-ico">📄</div>
                  <div>
                    <div className="ip-card-name">
                      {form.name}
                      <span className="flr-year">{form.year}</span>
                      {form.urgent && (
                        <span className="ip-urgent-badge">
                          Due {form.dueDays}d
                        </span>
                      )}
                    </div>
                    <div className="ip-card-desc">{form.desc}</div>
                  </div>
                </div>
                <div className="ip-card-right">
                  {/* Step bubbles */}
                  <div className="ip-steps">
                    {form.steps.map((step, si) => (
                      <div
                        key={si}
                        className={`ip-step-dot${step.done ? " done" : ""}`}
                        title={step.label}
                      />
                    ))}
                  </div>
                  <div className="ip-card-prog">
                    <div className="mini-prog" style={{ width: 80 }}>
                      <div
                        className={`mini-prog-fill ${form.statusClass === "sp-error" ? "mpf-red" : form.progress === 100 ? "mpf-green" : "mpf-lime"}`}
                        style={{ width: `${form.progress}%` }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--ghost)",
                        minWidth: 32,
                        textAlign: "right",
                      }}
                    >
                      {form.progress}%
                    </span>
                  </div>
                  <div className={`status-pill ${form.statusClass}`}>
                    {form.status}
                  </div>
                  <button
                    className={`ip-expand-btn${isOpen ? " rotated" : ""}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expanded detail */}
              {isOpen && (
                <div className="ip-card-body">
                  <div className="ip-card-body-inner">
                    {/* Steps timeline */}
                    <div className="ip-timeline">
                      <div className="ip-tl-label">Filing Steps</div>
                      <div className="ip-tl-steps">
                        {form.steps.map((step, si) => (
                          <div
                            key={si}
                            className={`ip-tl-step${step.done ? " done" : ""}`}
                          >
                            <div className="ip-tl-node">
                              {step.done ? (
                                <svg
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                >
                                  <path
                                    d="M1.5 4l2 2 3-3"
                                    stroke="#22d46a"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <div className="ip-tl-empty-node" />
                              )}
                            </div>
                            {si < form.steps.length - 1 && (
                              <div
                                className={`ip-tl-line${step.done ? " done" : ""}`}
                              />
                            )}
                            <span className="ip-tl-step-label">
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Last activity + AI info */}
                    <div className="ip-body-right">
                      <div className="ip-last-action">
                        <div className="ip-la-label">Last Activity</div>
                        <div className="ip-la-text">{form.lastAction}</div>
                        <div className="ip-la-time">{form.lastActionTime}</div>
                      </div>
                      <div className="ip-field-breakdown">
                        <div className="ip-fb-row">
                          <span>Fields complete</span>
                          <span
                            style={{
                              color: "var(--smoke)",
                              fontFamily: "var(--mono)",
                            }}
                          >
                            {form.fieldsComplete}/{form.fieldsTotal}
                          </span>
                        </div>
                        <div className="ip-fb-row">
                          <span>AI prefilled</span>
                          <span
                            style={{
                              color: "var(--cyan)",
                              fontFamily: "var(--mono)",
                            }}
                          >
                            {form.aiPrefilled}
                          </span>
                        </div>
                        <div className="ip-fb-row">
                          <span>Data source</span>
                          <span
                            style={{
                              color: "var(--ghost)",
                              fontFamily: "var(--mono)",
                            }}
                          >
                            {form.source}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                        {form.status === "Conflict" ? (
                          <button
                            className="btn-ghost"
                            style={{
                              fontSize: 11,
                              padding: "5px 12px",
                              borderColor: "rgba(255,77,77,0.3)",
                              color: "var(--red)",
                            }}
                          >
                            Resolve Conflict
                          </button>
                        ) : (
                          <button
                            className="btn-ghost"
                            style={{ fontSize: 11, padding: "5px 12px" }}
                          >
                            Continue →
                          </button>
                        )}
                        <button
                          className="btn-ghost"
                          style={{ fontSize: 11, padding: "5px 12px" }}
                        >
                          AI Fill Remaining
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .ip-overview-strip {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 18px 24px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .ip-ov-item { flex: 1; }
        .ip-ov-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .ip-ov-bar-wrap { display: flex; align-items: center; gap: 10px; }
        .ip-ov-bar { flex: 1; height: 6px; background: var(--ghost-3); border-radius: 100px; overflow: hidden; }
        .ip-ov-fill { height: 100%; background: linear-gradient(90deg, var(--lime), #a8f020); border-radius: 100px; }
        .ip-ov-pct { font-family: var(--serif); font-size: 22px; color: var(--lime); line-height: 1; }
        .ip-ov-sep { width: 1px; height: 40px; background: var(--line); }
        .ip-ov-stats { display: flex; gap: 28px; }
        .ip-ov-stat { display: flex; flex-direction: column; gap: 3px; }
        .ip-ov-stat-val { font-family: var(--serif); font-size: 26px; line-height: 1; letter-spacing: -0.02em; }
        .ip-ov-stat-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.06em; }

        .ip-form-list { display: flex; flex-direction: column; gap: 8px; }

        .ip-form-card {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          overflow: hidden;
          transition: border-color 0.2s;
          animation: floatUp 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .ip-form-card:hover { border-color: var(--ghost-2); }
        .ip-form-card.open { border-color: rgba(200,241,53,0.2); }
        .ip-form-card.urgent { border-left: 2px solid rgba(240,160,48,0.5); }

        .ip-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          cursor: pointer;
          gap: 16px;
        }
        .ip-card-left { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
        .ip-card-ico { font-size: 18px; flex-shrink: 0; }
        .ip-card-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--smoke);
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 2px;
        }
        .ip-urgent-badge {
          font-family: var(--mono);
          font-size: 9px;
          color: var(--amber);
          background: rgba(240,160,48,0.1);
          border: 1px solid rgba(240,160,48,0.2);
          border-radius: 100px;
          padding: 1px 7px;
        }
        .ip-card-desc { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }
        .ip-card-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .ip-steps { display: flex; align-items: center; gap: 4px; }
        .ip-step-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--ghost-3);
          border: 1px solid var(--line);
          transition: all 0.2s;
        }
        .ip-step-dot.done { background: var(--lime); border-color: var(--lime); }
        .ip-card-prog { display: flex; align-items: center; gap: 8px; }

        .ip-expand-btn {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ghost-4);
          border: 1px solid var(--line);
          border-radius: 7px;
          color: var(--ghost-2);
          cursor: pointer;
          transition: all 0.2s;
        }
        .ip-expand-btn:hover { background: var(--ghost-3); color: var(--smoke); }
        .ip-expand-btn.rotated svg { transform: rotate(180deg); }

        .ip-card-body {
          border-top: 1px solid var(--line);
          background: var(--void-2);
        }
        .ip-card-body-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 20px 20px 20px 52px;
        }

        .ip-timeline {}
        .ip-tl-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px; }
        .ip-tl-steps { display: flex; align-items: flex-start; gap: 0; }
        .ip-tl-step { display: flex; flex-direction: column; align-items: center; position: relative; flex: 1; }
        .ip-tl-node {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--ghost-4);
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }
        .ip-tl-step.done .ip-tl-node {
          background: rgba(34,212,106,0.1);
          border-color: rgba(34,212,106,0.3);
        }
        .ip-tl-empty-node { width: 6px; height: 6px; border-radius: 50%; background: var(--ghost-3); }
        .ip-tl-line {
          position: absolute;
          top: 10px;
          left: 50%;
          width: 100%;
          height: 1px;
          background: var(--line);
          z-index: 0;
        }
        .ip-tl-line.done { background: rgba(34,212,106,0.3); }
        .ip-tl-step-label {
          font-family: var(--mono);
          font-size: 9px;
          color: var(--ghost-2);
          margin-top: 6px;
          text-align: center;
          white-space: nowrap;
        }
        .ip-tl-step.done .ip-tl-step-label { color: var(--ghost); }

        .ip-body-right { display: flex; flex-direction: column; gap: 14px; }
        .ip-last-action {
          background: var(--ghost-4);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          padding: 12px;
        }
        .ip-la-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 5px; }
        .ip-la-text { font-size: 12px; color: var(--ghost); line-height: 1.5; margin-bottom: 4px; }
        .ip-la-time { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }

        .ip-field-breakdown { display: flex; flex-direction: column; gap: 7px; }
        .ip-fb-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: var(--ghost);
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
      `}</style>
    </div>
  );
}
