export default function FormQueue() {
  const forms = [
    {
      name: "Form 1040 — Individual Tax Return",
      meta: "Updated 14 min ago · 19/20 fields · IRS e-File ready",
      status: "In Review",
      statusClass: "sp-review",
      progress: 95,
    },
    {
      name: "Schedule C — Business Profit & Loss",
      meta: "Updated 1h ago · 14/22 fields · Conflict detected",
      status: "Conflict",
      statusClass: "sp-error",
      progress: 64,
    },
    {
      name: "Form 8949 — Capital Gains & Losses",
      meta: "Updated 3h ago · 12/12 fields · Awaiting signature",
      status: "Sign Needed",
      statusClass: "sp-review",
      progress: 98,
    },
    {
      name: "Schedule A — Itemized Deductions",
      meta: "Updated 5h ago · 8/8 fields · Filed Apr 8",
      status: "Filed ✓",
      statusClass: "sp-done",
      progress: 100,
    },
    {
      name: "Form 1099-INT — Interest Income",
      meta: "Updated yesterday · 6/6 fields · Filed Apr 7",
      status: "Filed ✓",
      statusClass: "sp-done",
      progress: 100,
    },
    {
      name: "Form W-4 — Withholding Certificate",
      meta: "Not started · AI ready to prefill from last year",
      status: "Not Started",
      statusClass: "sp-draft",
      progress: 0,
    },
  ];

  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-title-ico">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 3h8M2 6h6M2 9h4"
                stroke="#c8f135"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          Form Queue
        </div>
        <div className="panel-meta">
          <span className="tag-pill">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="2.5" stroke="#c8f135" strokeWidth="1" />
            </svg>
            4 active
          </span>
        </div>
      </div>
      <div className="form-list">
        {forms.map((form, idx) => (
          <div className="form-row" key={idx}>
            <div className="form-ico">📄</div>
            <div className="form-info">
              <div className="form-name">{form.name}</div>
              <div className="form-meta">{form.meta}</div>
            </div>
            <div className="form-status">
              <div className={`status-pill ${form.statusClass}`}>
                {form.status}
              </div>
              <div className="form-pct">{form.progress}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
