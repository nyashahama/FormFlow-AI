export default function KpiRow() {
  return (
    <div className="kpi-row fade-in-2">
      <div className="kpi-card featured">
        <div className="kpi-label">
          <div className="kpi-ico">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <rect
                x="1"
                y="1"
                width="9"
                height="9"
                rx="1.5"
                stroke="#c8f135"
                strokeWidth="1.1"
              />
              <path
                d="M3.5 5.5l1.5 1.5 3-3"
                stroke="#c8f135"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Forms Completed
        </div>
        <div className="kpi-val">
          <mark>12</mark> / 15
        </div>
        <div className="kpi-delta">
          <span className="delta-up">↑ 4</span>
          <span className="delta-label">vs last year</span>
        </div>
        <div className="kpi-sparkline">
          <div className="sparkline-bar-row">
            <div className="spark-bar" style={{ height: "30%" }}></div>
            <div className="spark-bar" style={{ height: "45%" }}></div>
            <div className="spark-bar" style={{ height: "38%" }}></div>
            <div className="spark-bar" style={{ height: "55%" }}></div>
            <div className="spark-bar" style={{ height: "42%" }}></div>
            <div className="spark-bar" style={{ height: "68%" }}></div>
            <div className="spark-bar" style={{ height: "60%" }}></div>
            <div className="spark-bar active" style={{ height: "75%" }}></div>
            <div className="spark-bar active" style={{ height: "82%" }}></div>
            <div className="spark-bar peak" style={{ height: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-label">
          <div
            className="kpi-ico"
            style={{ borderColor: "rgba(0,229,200,0.2)" }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1l1 2.5 2.5.5-2 2 .5 2.5L5.5 7.5 3 8.5l.5-2.5-2-2 2.5-.5z"
                stroke="#00e5c8"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          AI Prefill Rate
        </div>
        <div className="kpi-val cyan">
          <mark>94</mark>%
        </div>
        <div className="kpi-delta">
          <span className="delta-up">↑ 11%</span>
          <span className="delta-label">from last filing</span>
        </div>
        <div className="kpi-sparkline">
          <div className="sparkline-bar-row">
            <div
              className="spark-bar"
              style={{ height: "40%", background: "rgba(0,229,200,0.2)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "52%", background: "rgba(0,229,200,0.2)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "48%", background: "rgba(0,229,200,0.2)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "62%", background: "rgba(0,229,200,0.25)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "70%", background: "rgba(0,229,200,0.3)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "78%", background: "rgba(0,229,200,0.35)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "83%", background: "rgba(0,229,200,0.4)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "88%", background: "rgba(0,229,200,0.5)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "91%", background: "rgba(0,229,200,0.6)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "100%", background: "#00e5c8" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-label">
          <div
            className="kpi-ico"
            style={{ borderColor: "rgba(34,212,106,0.2)" }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle
                cx="5.5"
                cy="5.5"
                r="4"
                stroke="#22d46a"
                strokeWidth="1.1"
              />
              <path
                d="M3.5 5.5l1.5 1.5 2.5-2.5"
                stroke="#22d46a"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Time Saved
        </div>
        <div className="kpi-val green-val">
          <mark>7.4</mark>h
        </div>
        <div className="kpi-delta">
          <span className="delta-up">↑ 2.1h</span>
          <span className="delta-label">this season</span>
        </div>
        <div className="kpi-sparkline">
          <div className="sparkline-bar-row">
            <div
              className="spark-bar"
              style={{ height: "25%", background: "rgba(34,212,106,0.2)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "35%", background: "rgba(34,212,106,0.2)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "50%", background: "rgba(34,212,106,0.25)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "44%", background: "rgba(34,212,106,0.25)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "60%", background: "rgba(34,212,106,0.3)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "72%", background: "rgba(34,212,106,0.35)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "65%", background: "rgba(34,212,106,0.4)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "80%", background: "rgba(34,212,106,0.5)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "88%", background: "rgba(34,212,106,0.6)" }}
            ></div>
            <div
              className="spark-bar"
              style={{ height: "100%", background: "#22d46a" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-label">
          <div
            className="kpi-ico"
            style={{ borderColor: "rgba(240,160,48,0.2)" }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 2v4M5.5 8v.5"
                stroke="#f0a030"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle
                cx="5.5"
                cy="5.5"
                r="4"
                stroke="#f0a030"
                strokeWidth="1.1"
              />
            </svg>
          </div>
          Pending Review
        </div>
        <div
          className="kpi-val"
          style={{ "--c": "#f0a030" } as React.CSSProperties}
        >
          <span style={{ color: "var(--amber)" }}>3</span>
        </div>
        <div className="kpi-delta">
          <span
            style={{
              color: "var(--amber)",
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
            }}
          >
            2 due this week
          </span>
        </div>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 11, color: "var(--ghost)" }}>
              Form 1040
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--amber)",
              }}
            >
              Apr 15
            </span>
          </div>
          <div className="mini-prog">
            <div
              className="mini-prog-fill mpf-lime"
              style={{ width: "88%" }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 11, color: "var(--ghost)" }}>
              Schedule C
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ghost-2)",
              }}
            >
              Apr 15
            </span>
          </div>
          <div className="mini-prog">
            <div
              className="mini-prog-fill mpf-cyan"
              style={{ width: "62%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
