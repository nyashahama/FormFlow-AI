export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <div className="logo-mark">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="1"
              width="5.5"
              height="5.5"
              rx="1.5"
              fill="#050507"
            />
            <rect
              x="7.5"
              y="1"
              width="5.5"
              height="5.5"
              rx="1.5"
              fill="#050507"
              opacity="0.5"
            />
            <rect
              x="1"
              y="7.5"
              width="5.5"
              height="5.5"
              rx="1.5"
              fill="#050507"
              opacity="0.5"
            />
            <rect
              x="7.5"
              y="7.5"
              width="5.5"
              height="5.5"
              rx="1.5"
              fill="#050507"
              opacity="0.25"
            />
          </svg>
        </div>
        FormFlow AI
      </div>
      <ul className="footer-nav">
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <a href="#">Status</a>
        </li>
      </ul>
      <div className="footer-copy">© 2026 FormFlow AI, Inc.</div>
    </footer>
  );
}
