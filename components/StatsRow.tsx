export default function StatsRow() {
  return (
    <div className="stats-band reveal">
      <div className="stat-cell">
        <div className="stat-num">
          98<mark>%</mark>
        </div>
        <div className="stat-desc">First-submission accuracy</div>
      </div>
      <div className="stat-cell">
        <div className="stat-num">
          4<mark>min</mark>
        </div>
        <div className="stat-desc">Average filing time</div>
      </div>
      <div className="stat-cell">
        <div className="stat-num">
          2.4<mark>k</mark>
        </div>
        <div className="stat-desc">Supported form types</div>
      </div>
      <div className="stat-cell">
        <div className="stat-num">
          <mark>$0</mark>
        </div>
        <div className="stat-desc">Penalties incurred — ever</div>
      </div>
    </div>
  );
}
