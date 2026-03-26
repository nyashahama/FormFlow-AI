export default function AuditLog() {
  const activities = [
    {
      type: "ai",
      message:
        "<strong>AI Prefill</strong> — Form 1040 line 12b populated from Schedule A data ($28,750 deductions)",
      time: "Today, 2:14 PM",
      badge: "AI",
      badgeClass: "ab-ai",
    },
    {
      type: "pull",
      message:
        "<strong>Data Pull</strong> — Robinhood 1099-B imported · 14 transactions · $3,420 net gain",
      time: "Today, 1:58 PM",
      badge: "PULL",
      badgeClass: "ab-pull",
    },
    {
      type: "warn",
      message:
        "<strong>Conflict Detected</strong> — Schedule C Line 1 vs 1099-NEC: $240 discrepancy flagged for review",
      time: "Today, 1:32 PM",
      badge: "WARN",
      badgeClass: "ab-warn",
    },
    {
      type: "ok",
      message:
        "<strong>Filed</strong> — Schedule A successfully submitted to IRS e-File · Confirmation #E24-8821",
      time: "Today, 11:04 AM",
      badge: "FILED",
      badgeClass: "ab-ok",
    },
    {
      type: "ai",
      message:
        "<strong>AI Insight</strong> — Home office deduction opportunity detected: additional $1,240 eligible under Section 280A",
      time: "Yesterday, 4:47 PM",
      badge: "AI",
      badgeClass: "ab-ai",
    },
  ];

  const dotClass = (type: string) => {
    switch (type) {
      case "ai":
        return "ad-ai";
      case "pull":
        return "ad-pull";
      case "warn":
        return "ad-warn";
      case "ok":
        return "ad-ok";
      default:
        return "ad-ai";
    }
  };

  return (
    <div className="panel fade-in-4" style={{ marginBottom: 14 }}>
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
          Audit Log
        </div>
        <div className="panel-meta">
          <span className="live-dot"></span>
          Live · Session #4829
          <button
            className="btn-ghost"
            style={{ fontSize: 11, padding: "4px 10px", marginLeft: 4 }}
          >
            View All
          </button>
        </div>
      </div>
      <div className="panel-body" style={{ padding: 0 }}>
        <div className="activity-list" style={{ padding: "0 20px" }}>
          {activities.map((act, idx) => (
            <div className="activity-row" key={idx}>
              <div className="act-dot-wrap">
                <div className={`act-dot ${dotClass(act.type)}`}></div>
              </div>
              <div className="act-content">
                <div
                  className="act-main"
                  dangerouslySetInnerHTML={{ __html: act.message }}
                />
                <div className="act-time">{act.time}</div>
              </div>
              <div className={`act-badge ${act.badgeClass}`}>{act.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
