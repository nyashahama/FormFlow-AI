"use client";

import { useState } from "react";

const SUBMITTED_FORMS = [
  {
    id: 1,
    name: "Schedule A",
    desc: "Itemized Deductions",
    year: "2025",
    filedDate: "Apr 8, 2025",
    filedTime: "11:04 AM",
    confirmation: "E24-8821",
    method: "IRS e-File",
    refund: null,
    taxOwed: null,
    status: "Accepted",
    irs_status: "Processing",
    fields: 8,
    aiPrefilled: 7,
    deductions: "$28,750",
  },
  {
    id: 2,
    name: "Form 1099-INT",
    desc: "Interest Income",
    year: "2025",
    filedDate: "Apr 7, 2025",
    filedTime: "2:30 PM",
    confirmation: "E24-7710",
    method: "IRS e-File",
    refund: null,
    taxOwed: null,
    status: "Accepted",
    irs_status: "Complete",
    fields: 6,
    aiPrefilled: 6,
    deductions: null,
  },
  {
    id: 3,
    name: "Form 1040",
    desc: "Individual Tax Return",
    year: "2024",
    filedDate: "Apr 12, 2024",
    filedTime: "9:15 AM",
    confirmation: "E23-4492",
    method: "IRS e-File",
    refund: "$3,241",
    taxOwed: null,
    status: "Accepted",
    irs_status: "Refund Issued",
    fields: 20,
    aiPrefilled: 16,
    deductions: "$24,300",
  },
  {
    id: 4,
    name: "Schedule A",
    desc: "Itemized Deductions",
    year: "2024",
    filedDate: "Apr 10, 2024",
    filedTime: "4:00 PM",
    confirmation: "E23-4410",
    method: "IRS e-File",
    refund: null,
    taxOwed: null,
    status: "Accepted",
    irs_status: "Complete",
    fields: 8,
    aiPrefilled: 5,
    deductions: "$24,300",
  },
  {
    id: 5,
    name: "Form 1040",
    desc: "Individual Tax Return",
    year: "2023",
    filedDate: "Apr 14, 2023",
    filedTime: "10:48 AM",
    confirmation: "E22-3311",
    method: "IRS e-File",
    refund: null,
    taxOwed: "$820",
    status: "Accepted",
    irs_status: "Payment Settled",
    fields: 20,
    aiPrefilled: 11,
    deductions: "$21,100",
  },
];

const YEARS = ["All Years", "2025", "2024", "2023"];

const IRS_STATUS_STYLE: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  Processing: {
    color: "var(--lime)",
    bg: "rgba(200,241,53,0.08)",
    border: "rgba(200,241,53,0.2)",
  },
  Complete: {
    color: "var(--green)",
    bg: "rgba(34,212,106,0.08)",
    border: "rgba(34,212,106,0.2)",
  },
  "Refund Issued": {
    color: "var(--cyan)",
    bg: "rgba(0,229,200,0.08)",
    border: "rgba(0,229,200,0.2)",
  },
  "Payment Settled": {
    color: "var(--ghost)",
    bg: "var(--ghost-4)",
    border: "var(--line)",
  },
};

export default function SubmittedPage() {
  const [yearFilter, setYearFilter] = useState("All Years");
  const [selectedForm, setSelectedForm] = useState<number | null>(null);

  const filtered = SUBMITTED_FORMS.filter(
    (f) => yearFilter === "All Years" || f.year === yearFilter,
  );

  const totalRefunds = SUBMITTED_FORMS.filter((f) => f.refund).reduce(
    (sum, f) => sum + parseFloat((f.refund || "$0").replace(/[$,]/g, "")),
    0,
  );

  const selectedFormData = SUBMITTED_FORMS.find((f) => f.id === selectedForm);

  return (
    <div className="main-inner">
      {/* Header */}
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Forms</div>
          <h1 className="page-title">
            <em>Submitted</em> forms
          </h1>
          <p className="page-sub">
            {SUBMITTED_FORMS.length} filed across {YEARS.length - 1} tax years
          </p>
        </div>
        <div className="ph-right">
          <button className="btn-ghost">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1v6M2.5 5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 9.5h9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Export All
          </button>
          <button className="btn-ghost">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle
                cx="5.5"
                cy="5.5"
                r="4"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M5.5 3.5v2l1.5 1.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Filing History
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="sub-summary-row fade-in-2">
        <div className="sub-summary-card">
          <div className="ssc-label">Total Filed</div>
          <div className="ssc-val" style={{ color: "var(--smoke)" }}>
            {SUBMITTED_FORMS.length}
          </div>
          <div className="ssc-sub">All time</div>
        </div>
        <div className="sub-summary-card">
          <div className="ssc-label">This Season</div>
          <div className="ssc-val" style={{ color: "var(--lime)" }}>
            {SUBMITTED_FORMS.filter((f) => f.year === "2025").length}
          </div>
          <div className="ssc-sub">Tax year 2025</div>
        </div>
        <div className="sub-summary-card">
          <div className="ssc-label">Total Refunds</div>
          <div className="ssc-val" style={{ color: "var(--cyan)" }}>
            ${totalRefunds.toLocaleString()}
          </div>
          <div className="ssc-sub">Across all years</div>
        </div>
        <div className="sub-summary-card">
          <div className="ssc-label">AI Assist Rate</div>
          <div className="ssc-val" style={{ color: "var(--green)" }}>
            87%
          </div>
          <div className="ssc-sub">Fields prefilled by AI</div>
        </div>
      </div>

      {/* Year filter + list */}
      <div className="sub-main-wrap fade-in-3">
        {/* Year filter sidebar */}
        <div className="sub-year-nav">
          <div className="sub-yn-label">Tax Year</div>
          {YEARS.map((y) => (
            <div
              key={y}
              className={`sub-yn-item${yearFilter === y ? " active" : ""}`}
              onClick={() => setYearFilter(y)}
            >
              {y}
              <span className="sub-yn-count">
                {y === "All Years"
                  ? SUBMITTED_FORMS.length
                  : SUBMITTED_FORMS.filter((f) => f.year === y).length}
              </span>
            </div>
          ))}
        </div>

        {/* Form list */}
        <div className="sub-form-list">
          {filtered.map((form, idx) => {
            const irsStyle =
              IRS_STATUS_STYLE[form.irs_status] || IRS_STATUS_STYLE["Complete"];
            const isSelected = selectedForm === form.id;
            return (
              <div
                key={form.id}
                className={`sub-form-row${isSelected ? " selected" : ""}`}
                style={{ animationDelay: `${idx * 40}ms` }}
                onClick={() => setSelectedForm(isSelected ? null : form.id)}
              >
                <div className="sfr-left">
                  <div className="sfr-ico">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 1h6l3 3v9H3V1z"
                        stroke="var(--green)"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 1v3h3"
                        stroke="var(--green)"
                        strokeWidth="1.1"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 7l1.5 1.5 3-3"
                        stroke="var(--green)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="sfr-name">
                      {form.name}
                      <span className="flr-year">{form.year}</span>
                    </div>
                    <div className="sfr-desc">{form.desc}</div>
                  </div>
                </div>

                <div className="sfr-meta">
                  <div className="sfr-filed">
                    <span style={{ color: "var(--ghost)" }}>Filed</span>
                    <span
                      style={{
                        color: "var(--smoke)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                      }}
                    >
                      {form.filedDate}
                    </span>
                  </div>
                  <div className="sfr-conf">
                    <span>Confirmation</span>
                    <span
                      style={{
                        color: "var(--lime)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                      }}
                    >
                      #{form.confirmation}
                    </span>
                  </div>
                </div>

                {form.refund && (
                  <div className="sfr-refund">
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--ghost-2)",
                      }}
                    >
                      Refund
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 20,
                        color: "var(--cyan)",
                        lineHeight: 1,
                      }}
                    >
                      {form.refund}
                    </span>
                  </div>
                )}
                {form.taxOwed && (
                  <div className="sfr-refund">
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--ghost-2)",
                      }}
                    >
                      Tax Owed
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 20,
                        color: "var(--amber)",
                        lineHeight: 1,
                      }}
                    >
                      {form.taxOwed}
                    </span>
                  </div>
                )}
                {!form.refund && !form.taxOwed && <div style={{ width: 80 }} />}

                <div
                  className="sfr-irs-status"
                  style={{
                    color: irsStyle.color,
                    background: irsStyle.bg,
                    borderColor: irsStyle.border,
                  }}
                >
                  {form.irs_status}
                </div>

                <div className="sfr-actions">
                  <button
                    className="btn-ghost"
                    style={{ fontSize: 11, padding: "4px 10px" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download
                  </button>
                  <button
                    className={`sfr-expand${isSelected ? " rotated" : ""}`}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M2 4l3.5 3.5L9 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Expanded detail */}
                {isSelected && (
                  <div
                    className="sfr-detail"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sfrd-grid">
                      <div className="sfrd-item">
                        <div className="sfrd-label">Filing Method</div>
                        <div className="sfrd-val">{form.method}</div>
                      </div>
                      <div className="sfrd-item">
                        <div className="sfrd-label">Filed At</div>
                        <div className="sfrd-val">
                          {form.filedDate}, {form.filedTime}
                        </div>
                      </div>
                      <div className="sfrd-item">
                        <div className="sfrd-label">Fields Completed</div>
                        <div className="sfrd-val">
                          {form.fields}/{form.fields}
                        </div>
                      </div>
                      <div className="sfrd-item">
                        <div className="sfrd-label">AI Prefilled</div>
                        <div
                          className="sfrd-val"
                          style={{ color: "var(--cyan)" }}
                        >
                          {form.aiPrefilled} fields
                        </div>
                      </div>
                      {form.deductions && (
                        <div className="sfrd-item">
                          <div className="sfrd-label">Deductions</div>
                          <div
                            className="sfrd-val"
                            style={{ color: "var(--lime)" }}
                          >
                            {form.deductions}
                          </div>
                        </div>
                      )}
                      <div className="sfrd-item">
                        <div className="sfrd-label">IRS Confirmation</div>
                        <div
                          className="sfrd-val"
                          style={{
                            color: "var(--lime)",
                            fontFamily: "var(--mono)",
                          }}
                        >
                          #{form.confirmation}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                      <button
                        className="btn-ghost"
                        style={{ fontSize: 11, padding: "5px 12px" }}
                      >
                        Download PDF
                      </button>
                      <button
                        className="btn-ghost"
                        style={{ fontSize: 11, padding: "5px 12px" }}
                      >
                        View on IRS Portal
                      </button>
                      <button
                        className="btn-ghost"
                        style={{ fontSize: 11, padding: "5px 12px" }}
                      >
                        Amend Form
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .sub-summary-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .sub-summary-card {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 16px 18px;
          transition: all 0.2s;
        }
        .sub-summary-card:hover { border-color: var(--ghost-2); }
        .ssc-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .ssc-val { font-family: var(--serif); font-size: 32px; line-height: 1; letter-spacing: -0.03em; margin-bottom: 4px; }
        .ssc-sub { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }

        .sub-main-wrap {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 16px;
          align-items: start;
        }

        .sub-year-nav {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: sticky;
          top: 20px;
        }
        .sub-yn-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.08em; padding: 0 6px; margin-bottom: 8px; }
        .sub-yn-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px;
          border-radius: 8px;
          font-family: var(--mono);
          font-size: 11px;
          color: var(--ghost);
          cursor: pointer;
          transition: all 0.15s;
          border: 1px solid transparent;
        }
        .sub-yn-item:hover { background: var(--ghost-3); color: var(--smoke); }
        .sub-yn-item.active { background: rgba(200,241,53,0.08); border-color: rgba(200,241,53,0.15); color: var(--lime); }
        .sub-yn-count { background: var(--ghost-3); border-radius: 100px; padding: 1px 6px; font-size: 9px; }
        .sub-yn-item.active .sub-yn-count { background: rgba(200,241,53,0.12); color: var(--lime); }

        .sub-form-list { display: flex; flex-direction: column; gap: 8px; }

        .sub-form-row {
          background: var(--void-3);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          padding: 16px 18px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          cursor: pointer;
          transition: all 0.2s;
          animation: floatUp 0.4s cubic-bezier(0.16,1,0.3,1) both;
          position: relative;
        }
        .sub-form-row:hover { border-color: var(--ghost-2); background: var(--void-4); }
        .sub-form-row.selected { border-color: rgba(34,212,106,0.3); }

        .sfr-left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 200px; }
        .sfr-ico {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(34,212,106,0.08);
          border: 1px solid rgba(34,212,106,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sfr-name { font-size: 13px; font-weight: 500; color: var(--smoke); display: flex; align-items: center; gap: 7px; margin-bottom: 2px; }
        .sfr-desc { font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }

        .sfr-meta { display: flex; gap: 20px; }
        .sfr-filed, .sfr-conf { display: flex; flex-direction: column; gap: 2px; font-family: var(--mono); font-size: 10px; color: var(--ghost-2); }

        .sfr-refund { display: flex; flex-direction: column; gap: 2px; text-align: right; }

        .sfr-irs-status {
          font-family: var(--mono);
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid;
          white-space: nowrap;
        }

        .sfr-actions { display: flex; align-items: center; gap: 6px; margin-left: auto; }
        .sfr-expand {
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
        .sfr-expand:hover { background: var(--ghost-3); color: var(--smoke); }
        .sfr-expand.rotated svg { transform: rotate(180deg); }

        .sfr-detail {
          width: 100%;
          border-top: 1px solid var(--line);
          padding-top: 14px;
          margin-top: 4px;
        }
        .sfrd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .sfrd-label { font-family: var(--mono); font-size: 9.5px; color: var(--ghost-2); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 4px; }
        .sfrd-val { font-size: 13px; color: var(--ghost); font-weight: 400; }

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
