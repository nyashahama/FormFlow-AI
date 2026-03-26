export default function WelcomeBanner() {
  return (
    <div className="welcome-banner fade-in">
      <div className="wb-orb"></div>
      <div className="wb-left">
        <div className="wb-ico">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 3l1.5 3.5 3.5.5-2.5 2.5.5 3.5L10 11.5 7 13l.5-3.5L5 7l3.5-.5z"
              stroke="#c8f135"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="wb-text">
          <div className="wb-title">
            Tax season is active — 3 forms need your attention
          </div>
          <div className="wb-sub">
            AI has prefilled 94% of your 1040 data from connected sources.
          </div>
        </div>
      </div>
      <div className="wb-right">
        <button
          className="btn-ghost"
          style={{ fontSize: 12, padding: "6px 14px" }}
        >
          Dismiss
        </button>
        <button
          className="btn-primary"
          style={{ fontSize: 12, padding: "6px 14px" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Filing
        </button>
      </div>
    </div>
  );
}
