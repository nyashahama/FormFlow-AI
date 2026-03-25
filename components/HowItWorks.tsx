export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="eyebrow reveal">Process</div>
      <h2 className="section-h reveal">
        From form to filed
        <br />
        <em>in minutes.</em>
      </h2>
      <p className="section-p reveal">
        FormFlow handles the entire lifecycle. You review, you approve, it
        submits.
      </p>

      <div className="how-grid reveal">
        <div className="how-step">
          <div className="step-num">01</div>
          <div className="step-ico">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect
                x="3"
                y="2"
                width="14"
                height="16"
                rx="2"
                stroke="var(--lime)"
                strokeWidth="1.4"
              />
              <path
                d="M7 7h6M7 10h6M7 13h3"
                stroke="var(--lime)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="step-t">Upload or detect any form</div>
          <div className="step-d">
            Paste a URL, upload a PDF, or connect your agency portal. FormFlow
            identifies the form type and maps every field using vision AI.
          </div>
          <div className="step-tag">→ VISION + OCR + LLM</div>
        </div>

        <div className="how-step">
          <div className="step-num">02</div>
          <div className="step-ico">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3v3M10 14v3M3 10h3M14 10h3"
                stroke="var(--lime)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle
                cx="10"
                cy="10"
                r="4"
                stroke="var(--lime)"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="step-t">Data pulled from linked accounts</div>
          <div className="step-d">
            Connect banks, payroll, identity providers, and past filings. AI
            maps your data to every field with source references and confidence
            scores.
          </div>
          <div className="step-tag">→ PLAID · PAYROLL · IDENTITY</div>
        </div>

        <div className="how-step">
          <div className="step-num">03</div>
          <div className="step-ico">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10l5 5 7-8"
                stroke="var(--lime)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="var(--lime)"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="step-t">One-click review & approval</div>
          <div className="step-d">
            Every field is highlighted with its source. Edit inline, flag
            anything, approve the submission. Full transparency, zero guesswork.
          </div>
          <div className="step-tag">→ HUMAN IN THE LOOP</div>
        </div>

        <div className="how-step">
          <div className="step-num">04</div>
          <div className="step-ico">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 10h8M10 6l4 4-4 4"
                stroke="var(--lime)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="4"
                width="16"
                height="12"
                rx="2"
                stroke="var(--lime)"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="step-t">Submit digitally with audit trail</div>
          <div className="step-d">
            FormFlow submits digitally or generates a certified print-ready PDF.
            Every action is timestamped and cryptographically signed.
          </div>
          <div className="step-tag">→ E-SIGN · TIMESTAMP · HASH</div>
        </div>
      </div>
    </section>
  );
}
