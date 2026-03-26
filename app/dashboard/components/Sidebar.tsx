"use client";

import { useState, Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";

const TOP_ITEMS = [
  { type: "section", label: "Main" },
  {
    type: "item",
    icon: "grid",
    label: "Overview",
    badge: null,
    hot: false,
    href: "/dashboard",
  },
  {
    type: "item",
    icon: "list",
    label: "My Forms",
    badge: "4",
    hot: true,
    href: "/dashboard/forms",
  },
  {
    type: "item",
    icon: "clock",
    label: "In Progress",
    badge: "2",
    hot: false,
    href: "/dashboard/in-progress",
  },
  {
    type: "item",
    icon: "check",
    label: "Submitted",
    badge: null,
    hot: false,
    href: "/dashboard/submitted",
  },
  { type: "section", label: "Tools" },
  {
    type: "item",
    icon: "star",
    label: "AI Assistant",
    badge: null,
    hot: false,
    href: "/dashboard/ai",
  },
  {
    type: "item",
    icon: "database",
    label: "Data Sources",
    badge: "6",
    hot: false,
    href: "/dashboard/data-sources",
  },
  {
    type: "item",
    icon: "file",
    label: "Audit Trail",
    badge: null,
    hot: false,
    href: "/dashboard/audit",
  },
  {
    type: "item",
    icon: "grid-sharp",
    label: "Integrations",
    badge: null,
    hot: false,
    href: "/dashboard/integrations",
  },
] as const;

const BOTTOM_ITEMS = [
  { type: "section", label: "Account" },
  {
    type: "item",
    icon: "user",
    label: "Profile",
    badge: null,
    hot: false,
    href: "/dashboard/profile",
  },
  {
    type: "item",
    icon: "credit-card",
    label: "Billing",
    badge: null,
    hot: false,
    href: "/dashboard/billing",
  },
] as const;

type Icon =
  | "grid"
  | "grid-sharp"
  | "list"
  | "clock"
  | "check"
  | "star"
  | "database"
  | "file"
  | "user"
  | "credit-card";

function NavIcon({ name }: { name: Icon }) {
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
    case "grid-sharp":
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z"
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
  }
}

type ItemEntry = {
  type: "item";
  icon: Icon;
  label: string;
  badge: string | null;
  hot: boolean;
  href: string;
};
type SectionEntry = { type: "section"; label: string };
type Entry = ItemEntry | SectionEntry;

function renderEntries(
  entries: readonly Entry[],
  pathname: string,
  onNavigate: (href: string) => void,
) {
  return entries.map((entry, i) => {
    if (entry.type === "section") {
      return (
        <div key={`s-${i}`} className="sidebar-section">
          {entry.label}
        </div>
      );
    }
    const isActive =
      pathname === entry.href ||
      (entry.href !== "/dashboard" && pathname.startsWith(entry.href));
    return (
      <div
        key={`n-${i}`}
        className={`nav-item${isActive ? " active" : ""}`}
        onClick={() => onNavigate(entry.href)}
      >
        <NavIcon name={entry.icon as Icon} />
        {entry.label}
        {entry.badge && (
          <span className={`nav-badge${entry.hot ? " hot" : ""}`}>
            {entry.badge}
          </span>
        )}
      </div>
    );
  });
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sidebar">
      {renderEntries(
        TOP_ITEMS as unknown as readonly Entry[],
        pathname,
        router.push,
      )}
      <div className="sidebar-spacer" />
      {renderEntries(
        BOTTOM_ITEMS as unknown as readonly Entry[],
        pathname,
        router.push,
      )}

      {/* User card */}
      <div
        className="sidebar-user"
        onClick={() => router.push("/dashboard/profile")}
        style={{ cursor: "pointer" }}
      >
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
