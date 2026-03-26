export default function FilingActivityChart() {
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-title-ico">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 10l3-4 2.5 2 2.5-5 2 4"
                stroke="#c8f135"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Filing Activity
        </div>
        <div className="panel-meta">
          <div className="tab-bar">
            <div className="tab active">Weekly</div>
            <div className="tab">Monthly</div>
          </div>
        </div>
      </div>
      <div className="panel-body">
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: 32,
              color: "var(--smoke)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            34{" "}
            <span
              style={{
                fontSize: 16,
                color: "var(--ghost)",
                fontFamily: "var(--sans)",
                fontWeight: 300,
                letterSpacing: 0,
              }}
            >
              forms filed
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
              color: "var(--green)",
              marginTop: 3,
            }}
          >
            ↑ 18% vs last 7 days
          </div>
        </div>
        <div className="chart-bars" style={{ height: 90 }}>
          <div className="chart-bar-wrap">
            <div className="chart-bar lime" style={{ height: "45%" }}></div>
            <div className="chart-bar-label">M</div>
          </div>
          <div className="chart-bar-wrap">
            <div className="chart-bar lime" style={{ height: "62%" }}></div>
            <div className="chart-bar-label">T</div>
          </div>
          <div className="chart-bar-wrap">
            <div className="chart-bar lime" style={{ height: "38%" }}></div>
            <div className="chart-bar-label">W</div>
          </div>
          <div className="chart-bar-wrap">
            <div className="chart-bar lime" style={{ height: "80%" }}></div>
            <div className="chart-bar-label">T</div>
          </div>
          <div className="chart-bar-wrap">
            <div
              className="chart-bar lime-bright"
              style={{ height: "100%" }}
            ></div>
            <div className="chart-bar-label">F</div>
          </div>
          <div className="chart-bar-wrap">
            <div className="chart-bar" style={{ height: "55%" }}></div>
            <div className="chart-bar-label">S</div>
          </div>
          <div className="chart-bar-wrap">
            <div className="chart-bar" style={{ height: "28%" }}></div>
            <div className="chart-bar-label">S</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 14,
            paddingTop: 12,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "var(--ghost)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "var(--lime)",
              }}
            ></div>
            Filed
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "var(--ghost)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "var(--ghost-3)",
              }}
            ></div>
            Draft
          </div>
          <div
            style={{
              marginLeft: "auto",
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ghost-2)",
            }}
          >
            Apr 9 – 15, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
