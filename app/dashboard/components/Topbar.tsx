"use client";

import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link href="/" className="logo">
          <div className="logo-mark">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 4h8M3 7h6M3 10h4"
                stroke="#050507"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="logo-name">FormFlow</span>
        </Link>
        <div className="topbar-divider"></div>
        <div className="topbar-breadcrumb">
          <span>workspace</span>
          <span className="bc-sep">/</span>
          <span className="bc-current">overview</span>
        </div>
      </div>
      <div className="topbar-right">
        <div
          className={`topbar-search ${searchFocused ? "focused" : ""}`}
          onClick={() => setSearchFocused(true)}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle
              cx="5"
              cy="5"
              r="3.5"
              stroke="rgba(240,237,232,0.22)"
              strokeWidth="1.2"
            />
            <path
              d="M8 8l2 2"
              stroke="rgba(240,237,232,0.22)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span>Search forms…</span>
          <span className="ts-kbd">⌘K</span>
        </div>
        <button className="topbar-icon-btn" title="Notifications">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1a4 4 0 0 1 4 4v2l1 2H2l1-2V5a4 4 0 0 1 4-4zM5.5 11a1.5 1.5 0 0 0 3 0"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="notif-dot"></span>
        </button>
        <button className="topbar-icon-btn" title="Settings">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
              cx="7"
              cy="7"
              r="2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M7 1v1M7 12v1M1 7h1M12 7h1M2.93 2.93l.7.7M10.37 10.37l.7.7M2.93 11.07l.7-.7M10.37 3.63l.7-.7"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="avatar">JD</div>
      </div>
    </header>
  );
}
