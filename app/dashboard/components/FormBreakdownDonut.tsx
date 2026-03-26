export default function FormBreakdownDonut() {
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-title-ico">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle
                cx="6"
                cy="6"
                r="4.5"
                stroke="#c8f135"
                strokeWidth="1.2"
              />
              <circle cx="6" cy="6" r="2" stroke="#c8f135" strokeWidth="1.2" />
            </svg>
          </div>
          Form Breakdown
        </div>
        <div className="panel-meta">15 total</div>
      </div>
      <div className="panel-body">
        <div className="donut-wrap">
          <svg
            className="donut-svg"
            width="110"
            height="110"
            viewBox="0 0 110 110"
          >
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke="var(--ghost-3)"
              strokeWidth="14"
            />
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke="#c8f135"
              strokeWidth="14"
              strokeDasharray="160 91.3"
              strokeDashoffset="62.8"
              strokeLinecap="round"
            />
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke="#00e5c8"
              strokeWidth="14"
              strokeDasharray="50 201.3"
              strokeDashoffset="-97.2"
              strokeLinecap="round"
            />
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke="#f0a030"
              strokeWidth="14"
              strokeDasharray="27 224.3"
              strokeDashoffset="-147.2"
              strokeLinecap="round"
            />
            <text
              x="55"
              y="51"
              textAnchor="middle"
              fontFamily="'Instrument Serif',serif"
              fontSize="22"
              fill="var(--smoke)"
            >
              12
            </text>
            <text
              x="55"
              y="64"
              textAnchor="middle"
              fontFamily="'Geist Mono',monospace"
              fontSize="9"
              fill="var(--ghost-2)"
            >
              FILED
            </text>
          </svg>
          <div className="donut-legend">
            <div className="dl-row">
              <div
                className="dl-swatch"
                style={{ background: "var(--lime)" }}
              ></div>
              <span className="dl-label">Submitted</span>
              <span className="dl-pct">12</span>
            </div>
            <div className="dl-row">
              <div
                className="dl-swatch"
                style={{ background: "var(--cyan)" }}
              ></div>
              <span className="dl-label">In Review</span>
              <span className="dl-pct">2</span>
            </div>
            <div className="dl-row">
              <div
                className="dl-swatch"
                style={{ background: "var(--amber)" }}
              ></div>
              <span className="dl-label">Pending</span>
              <span className="dl-pct">1</span>
            </div>
            <div className="dl-row">
              <div
                className="dl-swatch"
                style={{ background: "var(--ghost-3)" }}
              ></div>
              <span className="dl-label">Draft</span>
              <span className="dl-pct">0</span>
            </div>
            <div
              style={{ height: 1, background: "var(--line)", margin: "4px 0" }}
            ></div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ghost-2)",
              }}
            >
              80% completion rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
