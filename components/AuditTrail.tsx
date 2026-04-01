export default function AuditTrail() {
  return (
    <div className="audit-shell" id="audit">
      <div className="audit-inner">
        <div>
          <div className="eyebrow reveal">Compliance</div>
          <h2 className="section-h reveal">
            Full audit trail for agencies <em>&amp;</em> accountants.
          </h2>
          <p className="section-p reveal">
            Every field fill, data pull, and submission is logged and
            cryptographically signed. Export to your agency&apos;s required format
            instantly.
          </p>

          <div className="audit-bullets reveal">
            <div className="audit-bullet">
              <div className="bullet-icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5 3.5-4"
                    stroke="var(--lime)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Tamper-proof SHA-256 event hashing on every action
            </div>
            <div className="audit-bullet">
              <div className="bullet-icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5 3.5-4"
                    stroke="var(--lime)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Export to CSV, JSON, or agency-compliant XML
            </div>
            <div className="audit-bullet">
              <div className="bullet-icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5 3.5-4"
                    stroke="var(--lime)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              SOC 2 Type II certified infrastructure
            </div>
            <div className="audit-bullet">
              <div className="bullet-icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5 3.5-4"
                    stroke="var(--lime)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Zero data retention after submission
            </div>
          </div>
        </div>

        <div className="audit-terminal reveal">
          <div className="term-top">
            <span className="term-title">Audit Log · 1040-2024-US</span>
            <div className="term-live">
              <div className="term-live-dot"></div> LIVE
            </div>
          </div>
          <div className="term-row">
            <span className="t-time">14:23:01</span>
            <span className="t-badge tb-ai">AI</span>
            <span className="t-msg">
              Form type identified: IRS 1040 Schedule A
            </span>
          </div>
          <div className="term-row">
            <span className="t-time">14:23:04</span>
            <span className="t-badge tb-pull">PULL</span>
            <span className="t-msg">
              Income data fetched from Gusto payroll API
            </span>
          </div>
          <div className="term-row">
            <span className="t-time">14:23:07</span>
            <span className="t-badge tb-pull">PULL</span>
            <span className="t-msg">
              Mortgage interest pulled from Wells Fargo 1098
            </span>
          </div>
          <div className="term-row">
            <span className="t-time">14:23:11</span>
            <span className="t-badge tb-warn">REVIEW</span>
            <span className="t-msg">
              Charitable deduction requires manual confirmation
            </span>
          </div>
          <div className="term-row">
            <span className="t-time">14:24:02</span>
            <span className="t-badge tb-ok">SIGN</span>
            <span className="t-msg">
              User approved · e-signature applied · hash: a3f9c2
            </span>
          </div>
          <div className="term-row">
            <span className="t-time">14:24:09</span>
            <span className="t-badge tb-ok">FILED</span>
            <span className="t-msg">
              Submitted to IRS e-File · ref: EF-2024-8812
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
