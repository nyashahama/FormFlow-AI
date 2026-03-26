"use client";

import { useState } from "react";

const navItems = [
  { icon: "grid", label: "Overview", active: true, badge: null },
  { icon: "list", label: "My Forms", badge: "4", hot: true },
  { icon: "clock", label: "In Progress", badge: "2" },
  { icon: "check", label: "Submitted", badge: null },
  { icon: "star", label: "AI Assistant", badge: null, section: "Tools" },
  { icon: "database", label: "Data Sources", badge: "6", section: "Tools" },
  { icon: "file", label: "Audit Trail", badge: null, section: "Tools" },
  { icon: "grid", label: "Integrations", badge: null, section: "Tools" },
  { icon: "user", label: "Profile", section: "Account" },
  { icon: "credit-card", label: "Billing", section: "Account" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Overview");

  const renderIcon = (name: string) => {
    switch (name) {
      case "grid":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="1"
              width="5"
              height="5"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect
              x="8"
              y="1"
              width="5"
              height="5"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect
              x="1"
              y="8"
              width="5"
              height="5"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect
              x="8"
              y="8"
              width="5"
              height="5"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      case "list":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 3h10M2 7h7M2 11h5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "clock":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
              cx="7"
              cy="7"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M7 4v3l2 2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "check":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M12 4L5.5 10.5 2 7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "star":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L9 5l4 .5-3 2.8.7 4L7 10l-3.7 2.3.7-4L1 5.5 5 5z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "database":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="3"
              width="12"
              height="9"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M4 3V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M4 7h6M4 10h4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "file":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 4h12M1 8h12"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect
              x="1"
              y="1"
              width="12"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      case "user":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
              cx="7"
              cy="5"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M1.5 12.5a5.5 5.5 0 0 1 11 0"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "credit-card":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5.5 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect
              x="4.5"
              y="1"
              width="5"
              height="3"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  let currentSection: string | null = null;

  return (
    <nav className="sidebar">
      {navItems.map((item, idx) => {
        const showSectionHeader =
          item.section && item.section !== currentSection;
        if (showSectionHeader) currentSection = item.section;

        return (
          <div key={idx}>
            {showSectionHeader && (
              <div className="sidebar-section">{item.section}</div>
            )}
            <div
              className={`nav-item ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              {renderIcon(item.icon)}
              {item.label}
              {item.badge && (
                <span className={`nav-badge ${item.hot ? "hot" : ""}`}>
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        );
      })}
      <div className="sidebar-spacer"></div>
      <div className="sidebar-user">
        <div className="avatar" style={{ width: 32, height: 32, fontSize: 12 }}>
          JD
        </div>
        <div className="su-info">
          <div className="su-name">Jordan Davis</div>
          <div className="su-plan">Pro Plan</div>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{ color: "var(--ghost-2)", flexShrink: 0 }}
        >
          <path
            d="M4 5l2 2 2-2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </nav>
  );
}
