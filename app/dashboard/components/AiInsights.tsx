export default function AiInsights() {
  return (
    <div className="panel">
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
          AI Insights
        </div>
        <div className="panel-meta">
          <span className="live-dot"></span>
          Live
        </div>
      </div>
      <div className="panel-body">
        <div className="insight-list">
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
              <strong>1040 prefill complete.</strong> 18 of 19 fields filled
              from W-2, 1099-INT, and bank imports.
            </div>
          </div>
          <div className="insight-item warning">
            <div className="insight-ico">
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
              <strong>Schedule C conflict.</strong> Income on line 1 differs
              from 1099-NEC by $240. Needs review.
            </div>
          </div>
          <div className="insight-item success">
            <div className="insight-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  stroke="#22d46a"
                  strokeWidth="1.1"
                />
                <path
                  d="M4 6l1.5 1.5 3-3"
                  stroke="#22d46a"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="insight-text">
              <strong>Deductions optimized.</strong> AI found $1,240 in
              additional home office deductions.
            </div>
          </div>
          <div className="insight-item">
            <div className="insight-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle
                  cx="6"
                  cy="5"
                  r="2"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path
                  d="M1.5 11a4.5 4.5 0 0 1 9 0"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="insight-text">
              <strong>Signature needed.</strong> Form 8949 is ready to sign and
              submit via e-File.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
