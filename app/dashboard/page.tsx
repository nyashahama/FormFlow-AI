"use client";

import { useEffect, useRef } from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import KpiRow from "./components/KpiRow";
import FilingActivityChart from "./components/FilingActivityChart";
import FormBreakdownDonut from "./components/FormBreakdownDonut";
import AiInsights from "./components/AiInsights";
import DataSources from "./components/DataSources";
import FormQueue from "./components/FormQueue";
import AuditLog from "./components/AuditLog";

export default function DashboardPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Animate bar chart heights on load
  useEffect(() => {
    const bars = document.querySelectorAll(".chart-bar");
    bars.forEach((bar, i) => {
      const h = (bar as HTMLElement).style.height;
      (bar as HTMLElement).style.height = "0%";
      setTimeout(() => {
        (bar as HTMLElement).style.transition =
          `height 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 60}ms`;
        (bar as HTMLElement).style.height = h;
      }, 400);
    });
  }, []);

  return (
    <div className="main-inner" ref={mainRef}>
      <WelcomeBanner />
      <div className="page-header fade-in-1">
        <div className="ph-left">
          <div className="page-eyebrow">Dashboard</div>
          <h1 className="page-title">
            Your <em>filing</em> overview
          </h1>
          <p className="page-sub">Tax year 2025 · Last synced 2 minutes ago</p>
        </div>
        <div className="ph-right">
          <div className="tab-bar">
            <div className="tab active">This Year</div>
            <div className="tab">Last Year</div>
            <div className="tab">All Time</div>
          </div>
          <button className="btn-primary">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1v10M1 6h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            New Form
          </button>
        </div>
      </div>

      <KpiRow />

      <div className="dash-grid fade-in-3">
        <FilingActivityChart />
        <FormBreakdownDonut />
        <AiInsights />
      </div>

      <div className="dash-grid-2 fade-in-4">
        <DataSources />
        <FormQueue />
      </div>

      <AuditLog />
    </div>
  );
}
