"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    firstName: "Jordan",
    lastName: "Davis",
    email: "jordan.davis@gmail.com",
    phone: "+1 (415) 555-0192",
    timezone: "America/New_York",
    ssn: "***-**-4821",
    filingStatus: "Single",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="main-inner">
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Account</div>
          <h1 className="page-title">
            Your <em>profile</em>
          </h1>
          <p className="page-sub">
            Manage personal information and preferences
          </p>
        </div>
      </div>

      {/* Avatar + identity */}
      <div className="panel fade-in-2" style={{ marginBottom: 14 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
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
            Identity
          </div>
          <div className="panel-meta">
            <span
              className="tag-pill"
              style={{
                color: "var(--cyan)",
                borderColor: "rgba(0,229,200,0.2)",
                background: "rgba(0,229,200,0.06)",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle
                  cx="4"
                  cy="4"
                  r="2.5"
                  stroke="#00e5c8"
                  strokeWidth="1"
                />
              </svg>
              Verified
            </span>
          </div>
        </div>
        <div className="panel-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              paddingBottom: 24,
              borderBottom: "1px solid var(--line)",
              marginBottom: 24,
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                className="avatar"
                style={{
                  width: 64,
                  height: 64,
                  fontSize: 22,
                  borderRadius: 18,
                  border: "2px solid var(--line)",
                  flexShrink: 0,
                }}
              >
                JD
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  background: "var(--lime)",
                  border: "2px solid var(--void)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M4.5 1v7M1 4.5h7"
                    stroke="#050507"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "var(--smoke)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Jordan Davis
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--ghost-2)",
                  marginTop: 4,
                }}
              >
                jordan.davis@gmail.com · Pro Plan
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9.5,
                    color: "rgba(200,241,53,0.75)",
                    background: "rgba(200,241,53,0.06)",
                    border: "1px solid rgba(200,241,53,0.15)",
                    borderRadius: 100,
                    padding: "3px 9px",
                  }}
                >
                  Member since Jan 2024
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9.5,
                    color: "rgba(0,229,200,0.75)",
                    background: "rgba(0,229,200,0.06)",
                    border: "1px solid rgba(0,229,200,0.15)",
                    borderRadius: 100,
                    padding: "3px 9px",
                  }}
                >
                  Tax Year 2025
                </span>
              </div>
            </div>
            <button
              className="btn-ghost"
              style={{
                fontSize: 11,
                padding: "5px 12px",
                alignSelf: "flex-start",
              }}
            >
              Change Photo
            </button>
          </div>

          {/* Form fields */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {[
              { label: "FIRST NAME", key: "firstName", value: form.firstName },
              { label: "LAST NAME", key: "lastName", value: form.lastName },
              { label: "EMAIL ADDRESS", key: "email", value: form.email },
              { label: "PHONE NUMBER", key: "phone", value: form.phone },
              {
                label: "TIMEZONE",
                key: "timezone",
                value: form.timezone,
                type: "select",
                options: [
                  "America/New_York",
                  "America/Chicago",
                  "America/Los_Angeles",
                  "Europe/London",
                ],
              },
              {
                label: "FILING STATUS",
                key: "filingStatus",
                value: form.filingStatus,
                type: "select",
                options: [
                  "Single",
                  "Married Filing Jointly",
                  "Married Filing Separately",
                  "Head of Household",
                ],
              },
            ].map(({ label, key, value, type, options }) => (
              <div
                key={key}
                style={{ display: "flex", flexDirection: "column", gap: 7 }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    fontWeight: 500,
                    color: "var(--ghost-2)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
                {type === "select" ? (
                  <select
                    value={value}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [key]: e.target.value }))
                    }
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "var(--smoke)",
                      background: "var(--ghost-4)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r-sm)",
                      padding: "11px 14px",
                      outline: "none",
                      width: "100%",
                      cursor: "pointer",
                      WebkitAppearance: "none",
                    }}
                  >
                    {options!.map((o) => (
                      <option
                        key={o}
                        value={o}
                        style={{ background: "#0c0c10" }}
                      >
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="auth-input"
                    value={value}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [key]: e.target.value }))
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax identity */}
      <div className="panel fade-in-3" style={{ marginBottom: 14 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="3"
                  width="10"
                  height="7"
                  rx="1.5"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <path
                  d="M4 3V2a2 2 0 0 1 4 0v1"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                />
                <circle cx="6" cy="6.5" r="1" fill="#c8f135" />
              </svg>
            </div>
            Tax Identity
          </div>
          <div className="panel-meta">
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10.5,
                color: "var(--ghost-2)",
              }}
            >
              Encrypted · AES-256
            </span>
          </div>
        </div>
        <div className="panel-body">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10.5,
                  fontWeight: 500,
                  color: "var(--ghost-2)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                SOCIAL SECURITY NUMBER
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="text"
                  className="auth-input"
                  value={form.ssn}
                  readOnly
                  style={{ flex: 1, letterSpacing: "0.15em" }}
                />
                <button
                  className="btn-ghost"
                  style={{ fontSize: 11, padding: "0 12px", flexShrink: 0 }}
                >
                  Reveal
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10.5,
                  fontWeight: 500,
                  color: "var(--ghost-2)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                IRS PIN
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="text"
                  className="auth-input"
                  value="******"
                  readOnly
                  style={{ flex: 1, letterSpacing: "0.15em" }}
                />
                <button
                  className="btn-ghost"
                  style={{ fontSize: 11, padding: "0 12px", flexShrink: 0 }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 14,
              padding: "12px 14px",
              background: "rgba(200,241,53,0.04)",
              border: "1px solid rgba(200,241,53,0.1)",
              borderRadius: "var(--r-sm)",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ marginTop: 1, flexShrink: 0 }}
            >
              <circle
                cx="7"
                cy="7"
                r="5.5"
                stroke="#c8f135"
                strokeWidth="1.1"
              />
              <path
                d="M7 5v3M7 9.5v.5"
                stroke="#c8f135"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--ghost-2)",
                lineHeight: 1.6,
              }}
            >
              Sensitive identifiers are stored end-to-end encrypted and never
              logged in audit trails.
            </span>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="panel fade-in-4" style={{ marginBottom: 14 }}>
        <div className="panel-head">
          <div className="panel-title">
            <div className="panel-title-ico">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1a3.5 3.5 0 0 1 3.5 3.5v1.5l.8 1.5H1.7L2.5 6V4.5A3.5 3.5 0 0 1 6 1zM4.5 9.5a1.5 1.5 0 0 0 3 0"
                  stroke="#c8f135"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            Notifications
          </div>
        </div>
        <div className="panel-body">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                label: "Filing deadlines approaching",
                sub: "7, 3, and 1 day reminders",
                on: true,
              },
              {
                label: "AI prefill completed",
                sub: "When new data is ready for review",
                on: true,
              },
              {
                label: "Data source re-auth needed",
                sub: "When a connection expires",
                on: true,
              },
              {
                label: "Weekly filing summary",
                sub: "Every Monday at 9 AM",
                on: false,
              },
              {
                label: "Product updates",
                sub: "New features and improvements",
                on: false,
              },
            ].map(({ label, sub, on }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: i < 4 ? "1px solid var(--line)" : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--smoke)",
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      color: "var(--ghost-2)",
                      marginTop: 2,
                    }}
                  >
                    {sub}
                  </div>
                </div>
                <Toggle defaultOn={on} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save bar */}
      <div
        className="fade-in-4"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          paddingBottom: 40,
        }}
      >
        <button
          className="btn-ghost"
          style={{ fontSize: 13, padding: "9px 20px" }}
        >
          Discard
        </button>
        <button
          className="btn-primary"
          style={{ fontSize: 13, padding: "9px 20px" }}
          onClick={handleSave}
        >
          {saved ? (
            <>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Saved
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
  );
}

function Toggle({ defaultOn }: { defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      onClick={() => setOn((v) => !v)}
      style={{
        width: 36,
        height: 20,
        borderRadius: 100,
        flexShrink: 0,
        background: on ? "var(--lime)" : "var(--ghost-3)",
        border: `1px solid ${on ? "transparent" : "var(--line)"}`,
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 2,
          left: on ? 18 : 2,
          width: 14,
          height: 14,
          borderRadius: 100,
          background: on ? "var(--void)" : "var(--ghost-2)",
          transition: "left 0.2s cubic-bezier(0.34,1.2,0.64,1)",
        }}
      />
    </div>
  );
}
