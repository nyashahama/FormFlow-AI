export default function DataSources() {
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-title-ico">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 4c0-1.1 1.8-2 4-2s4 .9 4 2v4c0 1.1-1.8 2-4 2s-4-.9-4-2V4z"
                stroke="#c8f135"
                strokeWidth="1.1"
              />
              <path
                d="M2 6c0 1.1 1.8 2 4 2s4-.9 4-2"
                stroke="#c8f135"
                strokeWidth="1.1"
              />
            </svg>
          </div>
          Data Sources
        </div>
        <div className="panel-meta">
          <button
            className="btn-ghost"
            style={{ fontSize: 11, padding: "4px 10px", gap: 4 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1v8M1 5h8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Connect
          </button>
        </div>
      </div>
      <div className="panel-body">
        <div className="source-grid">
          <div className="source-item connected">
            <div className="src-ico">🏦</div>
            <div className="src-info">
              <div className="src-name">Chase Bank</div>
              <div className="src-status src-ok">Connected · 2m ago</div>
            </div>
            <div className="src-indicator si-green"></div>
          </div>
          <div className="source-item connected">
            <div className="src-ico">📊</div>
            <div className="src-info">
              <div className="src-name">IRS e-Services</div>
              <div className="src-status src-ok">Authenticated</div>
            </div>
            <div className="src-indicator si-green"></div>
          </div>
          <div className="source-item connected">
            <div className="src-ico">💼</div>
            <div className="src-info">
              <div className="src-name">Employer W-2</div>
              <div className="src-status src-ok">Imported</div>
            </div>
            <div className="src-indicator si-green"></div>
          </div>
          <div className="source-item warning">
            <div className="src-ico">📱</div>
            <div className="src-info">
              <div className="src-name">Robinhood</div>
              <div className="src-status src-warn">Re-auth needed</div>
            </div>
            <div className="src-indicator si-amber"></div>
          </div>
          <div className="source-item connected">
            <div className="src-ico">🏠</div>
            <div className="src-info">
              <div className="src-name">Mortgage / 1098</div>
              <div className="src-status src-ok">PDF parsed</div>
            </div>
            <div className="src-indicator si-green"></div>
          </div>
          <div className="source-item">
            <div className="src-ico">🔗</div>
            <div className="src-info">
              <div className="src-name">Venmo / PayPal</div>
              <div className="src-status src-disc">Not connected</div>
            </div>
            <div className="src-indicator si-grey"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
