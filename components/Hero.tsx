"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const typingEl = document.getElementById("typing-val");
    if (!typingEl) return;

    const stages = [
      "",
      "$",
      "$1",
      "$1,",
      "$1,2",
      "$1,24",
      "$1,240",
      "$1,240.",
      "$1,240.0",
      "$1,240.00",
    ];
    let si = 0;

    const timeout = setTimeout(() => {
      const t = setInterval(() => {
        if (si < stages.length) {
          typingEl.textContent = stages[si] || "";
          typingEl.style.color = si > 0 ? "var(--smoke)" : "var(--ghost-2)";
          si++;
        } else {
          clearInterval(t);
          setTimeout(() => {
            const box = typingEl.closest(".field-box");
            if (box) {
              box.classList.remove("typing");
              box.classList.add("done");
              box.innerHTML =
                '<span>$1,240.00</span><div class="f-check"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#050507" strokeWidth="1.5" strokeLinecap="round"/></svg></div>';
              const progFill = document.getElementById("prog-fill");
              const progLabel = document.getElementById("prog-label");
              if (progFill) progFill.style.width = "80%";
              if (progLabel) progLabel.textContent = "80% · ~1 min left";
            }
          }, 500);
        }
      }, 85);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-orb-1"></div>
      <div className="hero-orb-2"></div>
      <div className="hero-orb-3"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-chip">
          <div className="chip-dot">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M4 1l.8 1.9L7 3.7 5.4 5.2l.5 2L4 6.3 2.1 7.2l.5-2L1 3.7l2.2-.8L4 1z"
                fill="#050507"
              />
            </svg>
          </div>
          2,400+ government form types supported
        </div>

        <h1 className="hero-headline">
          Paperwork that
          <br />
          <em>fills itself</em>
        </h1>

        <p className="hero-sub">
          FormFlow reads any government form, pulls your data from linked
          accounts, and files it for you. Reviewed in minutes. Rejected never.
        </p>

        <div className="hero-actions">
          <Link href="/auth/signup" className="btn-hero">
            Get started free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a href="#demo" className="btn-hero-ghost">
            Watch demo
          </a>
        </div>

        {/* FORM PREVIEW */}
        <div className="hero-preview">
          <div className="glass-window">
            <div className="window-chrome">
              <div className="chrome-dots">
                <div className="chrome-dot"></div>
                <div className="chrome-dot"></div>
                <div className="chrome-dot"></div>
              </div>
              <div className="chrome-bar">
                <div className="bar-lock"></div>
                app.formflow.ai/fill/irs-1040
              </div>
            </div>

            <div className="window-body">
              <div className="win-sidebar">
                <div className="sidebar-section-label">Progress</div>
                <div className="s-item">
                  <div className="s-dot s-done"></div> Personal Info
                </div>
                <div className="s-item">
                  <div className="s-dot s-done"></div> Income
                </div>
                <div className="s-item active">
                  <div className="s-dot s-active"></div> Deductions
                </div>
                <div className="s-item">
                  <div className="s-dot s-pending"></div> Credits
                </div>
                <div className="s-item">
                  <div className="s-dot s-pending"></div> Review & Sign
                </div>
                <div
                  className="sidebar-section-label"
                  style={{ marginTop: "16px" }}
                >
                  Sources
                </div>
                <div className="s-item" style={{ fontSize: "11.5px" }}>
                  🏦 Plaid · Wells Fargo
                </div>
                <div className="s-item" style={{ fontSize: "11.5px" }}>
                  💼 Gusto payroll
                </div>
                <div className="s-item" style={{ fontSize: "11.5px" }}>
                  📋 2023 return
                </div>
              </div>

              <div className="win-main">
                <div className="win-form-header">
                  <div>
                    <div className="win-form-title">
                      Schedule A — Itemized Deductions
                    </div>
                    <div className="win-form-sub">
                      IRS Form 1040 · Tax Year 2024
                    </div>
                  </div>
                  <div className="ai-badge">
                    <div className="ai-badge-dot"></div>
                    AI filling
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <div className="field-label">
                      <div className="f-dot"></div> Medical Expenses
                    </div>
                    <div className="field-box done">
                      <span>$4,280.00</span>
                      <div className="f-check">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4l2 2 3-3"
                            stroke="#050507"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="field-label">
                      <div className="f-dot"></div> State & Local Taxes
                    </div>
                    <div className="field-box done">
                      <span>$10,000.00</span>
                      <div className="f-check">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4l2 2 3-3"
                            stroke="#050507"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="field-label">
                      <div className="f-dot"></div> Mortgage Interest
                    </div>
                    <div className="field-box done">
                      <span>$11,430.00</span>
                      <div className="f-check">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4l2 2 3-3"
                            stroke="#050507"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="field-label">Charitable Gifts</div>
                    <div className="field-box typing">
                      <span id="typing-val" style={{ color: "var(--ghost-2)" }}>
                        Pulling from bank…
                      </span>
                      <div className="f-cursor">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="win-footer">
                  <div className="w-progress">
                    <div className="prog-track">
                      <div className="prog-fill" id="prog-fill"></div>
                    </div>
                    <span className="prog-label" id="prog-label">
                      65% · ~2 min left
                    </span>
                  </div>
                  <button className="btn-continue">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
